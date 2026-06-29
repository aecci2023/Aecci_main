import { useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { Main } from "@/components/layout/main";

export default function LiveDealRoom() {
  const { id: roomId } = useParams<{ id: string }>();
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initZego = async () => {
      if (!containerRef.current || !roomId) return;

      // Get user from local storage
      const userStr = localStorage.getItem("user");
      let userName = "Guest";
      let userId = Date.now().toString();

      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          if (user.fullName) userName = user.fullName;
          if (user.id) userId = user.id;
        } catch (e) {
          console.log(e);
          console.error("Failed to parse user from local storage");
        }
      }

      // AppID and ServerSecret should ideally be retrieved from backend in production
      // but ZegoUIKitPrebuilt allows generating it directly for rapid testing
      const appID = parseInt(import.meta.env.VITE_ZEGOCLOUD_APP_ID || "0");
      const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SERVER_SECRET || "";

      if (!appID || !serverSecret) {
        console.error("ZegoCloud credentials are not configured in .env");
        return;
      }

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        userId,
        userName,
      );

      // Create instance object from kit token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      // start the call
      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: "Deal Room Link",
            url: `${window.location.protocol}//${window.location.host}/dashboard/dealroom/${roomId}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference, // Choose VideoConference or GroupCall
        },
        turnOnMicrophoneWhenJoining: false,
        turnOnCameraWhenJoining: false,
        showMyCameraToggleButton: true,
        showMyMicrophoneToggleButton: true,
        showAudioVideoSettingsButton: true,
        showScreenSharingButton: true,
        showTextChat: true,
        showUserList: true,
        showVirtualBackgroundButton: true,
        maxUsers: 50,
        layout: "Auto",
        showLayoutButton: true,
        onLeaveRoom: () => {
          navigate("/dashboard");
        },
      });
    };

    initZego();
  }, [roomId, navigate]);

  return (
    <Main>
      <div className="w-full h-[calc(100vh-64px)] bg-background flex flex-col">
        <div className="p-4 bg-muted/30 border-b border-border flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-primary">
              Global Deal Room
            </h1>
            <p className="text-sm text-muted-foreground">
              Session ID: {roomId}
            </p>
          </div>
          <div className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-xs font-semibold flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live Session
          </div>
        </div>
        <div className="flex-1 w-full h-full" ref={containerRef} />
      </div>
    </Main>
  );
}
