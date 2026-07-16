import { useRef, useEffect, useState } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hand, Users, FileText } from "lucide-react";
import { toast } from "sonner";
import { useGetSessionByIdQuery } from "@/store/api/sessionApi";
import { io, Socket } from "socket.io-client";

export default function LiveDealRoomPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("sessionId") || "";

  const { data: sessionData, isLoading } = useGetSessionByIdQuery(sessionId, {
    skip: !sessionId,
  });
  const session = sessionData?.data;

  const [timeUntilStart, setTimeUntilStart] = useState<number | null>(null);
  const [isLive, setIsLive] = useState(false);

  // Socket and UI state
  const [socket, setSocket] = useState<Socket | null>(null);
  const [raisedHands, setRaisedHands] = useState<
    { userId: string; userName: string }[]
  >([]);
  const [myHandRaised, setMyHandRaised] = useState(false);

  // Private Notepad state
  const [notes, setNotes] = useState(
    () => localStorage.getItem(`aecci_notes_${sessionId}`) || "",
  );
  const [showNotepad, setShowNotepad] = useState(true);
  const [saveStatus, setSaveStatus] = useState("Saved");

  // Parse user info
  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;
  const userName = user?.fullName || "Guest";
  const userId = user?.id;

  // Handle countdown logic
  useEffect(() => {
    if (!session?.date) return;

    const checkTime = () => {
      const sessionTime = new Date(session.date).getTime();
      const now = Date.now();
      const diff = sessionTime - now;

      // Allow entry 15 minutes before the session starts
      if (diff <= 15 * 60 * 1000) {
        setIsLive(true);
        setTimeUntilStart(null);
      } else {
        setTimeUntilStart(diff);
        setIsLive(false);
      }
    };

    checkTime();
    const interval = window.setInterval(checkTime, 1000);
    return () => clearInterval(interval);
  }, [session?.date]);

  // Handle Socket Connection
  useEffect(() => {
    if (!isLive || !sessionId) return;

    // Connect to Socket.IO
    const socketUrl =
      import.meta.env.VITE_API_BASE_URL?.replace("/api/", "") ||
      "http://localhost:5000";
    const newSocket = io(socketUrl);

    newSocket.on("connect", () => {
      newSocket.emit("join-room", { sessionId, userId, userName });
      setSocket(newSocket);
    });

    newSocket.on(
      "hand-raised",
      (data: { userId: string; userName: string; timestamp: number }) => {
        setRaisedHands((prev) => {
          if (!prev.find((h) => h.userId === data.userId)) {
            return [...prev, data];
          }
          return prev;
        });
        if (data.userId !== userId) {
          toast.info(`${data.userName} raised their hand`, {
            icon: <Hand className="size-4" />,
          });
        }
      },
    );

    newSocket.on("hand-lowered", (data: { userId: string }) => {
      setRaisedHands((prev) => prev.filter((h) => h.userId !== data.userId));
    });

    return () => {
      newSocket.emit("leave-room", sessionId);
      newSocket.disconnect();
    };
  }, [isLive, sessionId, userId, userName]);

  // Initialize ZegoCloud
  useEffect(() => {
    const initZego = async () => {
      if (!containerRef.current || !sessionId || !isLive) return;

      const appID = parseInt(import.meta.env.VITE_ZEGOCLOUD_APP_ID || "0");
      const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SERVER_SECRET || "";

      if (!appID || !serverSecret) {
        console.error("ZegoCloud credentials are not configured in .env");
        return;
      }

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        sessionId,
        userId,
        userName,
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: "Deal Room Link",
            url: `${window.location.protocol}//${window.location.host}/dashboard/live-deal-room?sessionId=${sessionId}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
        turnOnMicrophoneWhenJoining: false,
        turnOnCameraWhenJoining: false,
        showMyCameraToggleButton: true,
        showMyMicrophoneToggleButton: true,
        showAudioVideoSettingsButton: true,
        showScreenSharingButton: true,
        showTextChat: true,
        showUserList: true,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(({ showVirtualBackgroundButton: true } as any)),
        maxUsers: 50,
        layout: "Auto",
        showLayoutButton: true,
        onLeaveRoom: () => {
          navigate(location.pathname.startsWith('/partner') ? "/partner/dashboard" : "/dashboard");
        },
      });
    };

    if (isLive) {
      initZego();
    }
  }, [isLive, sessionId, navigate, userId, userName]);

  const toggleRaiseHand = () => {
    if (!socket) return;
    if (myHandRaised) {
      socket.emit("lower-hand", { sessionId, userId });
      setMyHandRaised(false);
    } else {
      socket.emit("raise-hand", { sessionId, userId, userName });
      setMyHandRaised(true);
    }
  };

  const handleNotesChange = (text: string) => {
    setNotes(text);
    localStorage.setItem(`aecci_notes_${sessionId}`, text);
    setSaveStatus("Saving...");
    setTimeout(() => {
      setSaveStatus("Saved");
    }, 600);
  };

  const handleCopyNotes = () => {
    navigator.clipboard.writeText(notes);
    toast.success("Notes copied to clipboard!");
  };

  const handleDownloadNotes = () => {
    const element = document.createElement("a");
    const file = new Blob([notes], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `AECCI_DealRoom_Notes_${sessionId || "Session"}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const formatCountdown = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    }
    return `${minutes}m ${seconds}s`;
  };

  if (isLoading) {
    return (
      <Main fluid className="flex justify-center p-10">
        <p className="text-muted-foreground animate-pulse">
          Loading Deal Room...
        </p>
      </Main>
    );
  }

  if (!isLive) {
    return (
      <>
        <Header>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-sm text-muted-foreground">
              AECCI Hub
            </span>
            <span className="text-muted-foreground">/</span>
            <span className="font-semibold text-sm">
              Deal Room Waiting Area
            </span>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <ProfileDropdown />
          </div>
        </Header>
        <Main
          fluid
          className="flex items-center justify-center min-h-[calc(100vh-100px)]"
        >
          <Card className="max-w-md w-full text-center p-6 border-primary/20 shadow-lg">
            <CardContent className="space-y-6 pt-4">
              <div className="bg-muted size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="size-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">
                {session?.title || "Deal Room Session"}
              </h2>
              <p className="text-muted-foreground text-sm">
                The session has not started yet. You can join the room 15
                minutes before the scheduled start time.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                  Opens In
                </p>
                <div className="text-4xl font-mono font-bold text-foreground">
                  {timeUntilStart !== null
                    ? formatCountdown(timeUntilStart - 15 * 60 * 1000)
                    : "0m 0s"}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate(location.pathname.startsWith('/partner') ? "/partner/dashboard" : "/dashboard")}
              >
                Return to Dashboard
              </Button>
            </CardContent>
          </Card>
        </Main>
      </>
    );
  }

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm truncate max-w-[200px]">
            {session?.title || "Live Deal Room"}
          </span>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Badge className="bg-rose-500 hover:bg-rose-500 text-white flex items-center gap-1.5 animate-pulse">
            <span className="size-1.5 rounded-full bg-white animate-ping"></span>{" "}
            Live Session
          </Badge>
          <ProfileDropdown />
        </div>
      </Header>

      <Main fluid className="h-[calc(100vh-64px)] p-0 flex relative">
        {/* ZegoCloud Container */}
        <div
          className="flex-1 h-full bg-zinc-950 relative"
          ref={containerRef}
        />

        {/* Notepad Panel */}
        {showNotepad && (
          <div className="w-80 h-full border-l bg-background flex flex-col z-40 animate-in slide-in-from-right duration-200">
            <div className="p-4 border-b flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-sm">Private Notepad</h3>
                <p className="text-[10px] text-muted-foreground">
                  Autosaved to your browser
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowNotepad(false)}
                className="size-8"
              >
                <span className="text-base">×</span>
              </Button>
            </div>
            <div className="flex-1 p-4 flex flex-col gap-2">
              <textarea
                value={notes}
                onChange={(e) => handleNotesChange(e.target.value)}
                placeholder="Type your private notes, trade offers, and discussion points here..."
                className="flex-1 w-full p-3 text-sm rounded-lg border border-input bg-background resize-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-sans leading-relaxed"
              />
              <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                <span>{notes.length} characters</span>
                {saveStatus && (
                  <span className="text-emerald-600 flex items-center gap-1">
                    ✓ {saveStatus}
                  </span>
                )}
              </div>
            </div>
            <div className="p-3 border-t bg-muted/30 grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadNotes}
                className="text-xs"
              >
                Download .txt
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyNotes}
                className="text-xs"
              >
                Copy Notes
              </Button>
            </div>
          </div>
        )}

        {/* Custom Overlay Controls */}
        <div className="absolute bottom-6 left-6 z-50 flex flex-col gap-2 pointer-events-none">
          {raisedHands.length > 0 && (
            <div className="bg-background/90 backdrop-blur-sm border border-border p-3 rounded-lg shadow-lg pointer-events-auto max-w-[200px] mb-2 animate-in fade-in slide-in-from-bottom-4">
              <h4 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1.5">
                <Hand className="size-3" /> Raised Hands ({raisedHands.length})
              </h4>
              <div className="space-y-1.5 max-h-[150px] overflow-y-auto pr-1">
                {raisedHands.map((h) => (
                  <div
                    key={h.userId}
                    className="text-xs truncate font-medium flex items-center gap-1.5"
                  >
                    <span className="size-1.5 rounded-full bg-emerald-500"></span>
                    {h.userName}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2 pointer-events-auto">
            <Button
              onClick={toggleRaiseHand}
              variant={myHandRaised ? "default" : "secondary"}
              className={`shadow-lg gap-2 ${myHandRaised ? "bg-amber-500 hover:bg-amber-600 text-white" : ""}`}
            >
              <Hand className="size-4" />
              {myHandRaised ? "Lower Hand" : "Raise Hand"}
            </Button>

            <Button
              onClick={() => setShowNotepad(!showNotepad)}
              variant={showNotepad ? "default" : "secondary"}
              className="shadow-lg gap-2"
            >
              <FileText className="size-4" />
              {showNotepad ? "Hide Notepad" : "Show Notepad"}
            </Button>
          </div>
        </div>
      </Main>
    </>
  );
}
