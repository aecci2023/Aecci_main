import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  ScreenShare,
  Hand,
  PhoneOff,
  Send,
  FileText,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LiveDealRoomPage() {
  const navigate = useNavigate();
  const [micActive, setMicActive] = useState(true);
  const [videoActive, setVideoActive] = useState(true);
  const [handRaised, setHandRaised] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "AECCI Moderator",
      text: "Welcome to the India-Kenya Trade Desk. Please introduce your company.",
      time: "14:02",
    },
    {
      id: 2,
      sender: "KNCCI Partner",
      text: "Good afternoon. We have retail managers from Nairobi ready to ask specifications.",
      time: "14:03",
    },
  ]);
  const [notes, setNotes] = useState("");

  const handleSendChat = () => {
    if (!chatInput.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "Me (Exporter)",
        text: chatInput,
        time: "14:05",
      },
    ]);
    setChatInput("");
  };

  const handleEndSession = () => {
    navigate("/dashboard/session-summary");
  };

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Live Deal Room</span>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Badge className="bg-rose-500 hover:bg-rose-500 text-white flex items-center gap-1.5 animate-pulse">
            <span className="size-1.5 rounded-full bg-white animate-ping"></span>{" "}
            Live Session
          </Badge>
          <ProfileDropdown />
        </div>
      </Header>

      <Main
        fluid
        className="h-[calc(100vh-100px)] p-0 flex flex-col md:flex-row overflow-hidden border border-border rounded-lg bg-card shadow-sm"
      >
        {/* Left: Video Desks (Grid) */}
        <div className="flex-1 bg-zinc-950 p-4 flex flex-col justify-between h-full relative">
          {/* Main Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 items-center justify-center">
            {/* Moderator */}
            <div className="relative aspect-video bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex items-center justify-center">
              <Avatar className="h-20 w-20 border-2 border-primary">
                <AvatarFallback className="bg-primary text-primary-foreground font-bold text-2xl">
                  AM
                </AvatarFallback>
              </Avatar>
              <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-md text-xs text-white flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-primary" />
                <span>AECCI Moderator (Mumbai Office)</span>
              </div>
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                Active Speaker
              </Badge>
            </div>

            {/* Kenya Partner */}
            <div className="relative aspect-video bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex items-center justify-center">
              <Avatar className="h-20 w-20 border-2 border-amber-500">
                <AvatarFallback className="bg-amber-600 text-white font-bold text-2xl">
                  KN
                </AvatarFallback>
              </Avatar>
              <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-md text-xs text-white flex items-center gap-1.5">
                <span>🇰🇪</span>
                <span>KNCCI Partner (Nairobi)</span>
              </div>
            </div>

            {/* You */}
            <div className="relative aspect-video bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex items-center justify-center">
              {videoActive ? (
                <div className="flex flex-col items-center">
                  <Avatar className="h-20 w-20 border-2 border-emerald-500">
                    <AvatarFallback className="bg-emerald-600 text-white font-bold text-2xl">
                      ME
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-zinc-500 text-xs mt-3">
                    Active camera stream...
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <VideoOff className="size-10 text-zinc-600 mb-2" />
                  <span className="text-zinc-500 text-xs">
                    Camera Feed Disabled
                  </span>
                </div>
              )}
              <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-md text-xs text-white flex items-center gap-1.5">
                <UserCheck className="size-3.5 text-emerald-400" />
                <span>Me (AECCI Exporter)</span>
              </div>
              {!micActive && (
                <Badge className="absolute top-3 right-3 bg-rose-600 text-white flex items-center gap-1">
                  <MicOff className="size-3" /> Muted
                </Badge>
              )}
            </div>

            {/* Nairobi Buyer Panel (Audio Desk) */}
            <div className="relative aspect-video bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col items-center justify-center text-center p-4">
              <Avatar className="h-16 w-16 border">
                <AvatarFallback className="bg-zinc-800 text-zinc-400 font-bold text-lg">
                  KB
                </AvatarFallback>
              </Avatar>
              <h4 className="font-semibold text-sm text-zinc-200 mt-2">
                Nairobi Garment Distributors (Group)
              </h4>
              <p className="text-xs text-zinc-500 mt-1">
                Listening Only • 3 participants
              </p>
              <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-md text-xs text-white">
                <span>Kenya Buyers Desk</span>
              </div>
            </div>
          </div>

          {/* Controls Toolbar */}
          <div className="mt-4 p-3 bg-zinc-900/90 border border-zinc-800 rounded-xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setMicActive(!micActive)}
                variant="ghost"
                size="icon"
                className={`rounded-lg ${micActive ? "text-zinc-200 hover:bg-zinc-800" : "bg-rose-500/20 text-rose-500 hover:bg-rose-500/30"}`}
              >
                {micActive ? (
                  <Mic className="size-5" />
                ) : (
                  <MicOff className="size-5" />
                )}
              </Button>

              <Button
                onClick={() => setVideoActive(!videoActive)}
                variant="ghost"
                size="icon"
                className={`rounded-lg ${videoActive ? "text-zinc-200 hover:bg-zinc-800" : "bg-rose-500/20 text-rose-500 hover:bg-rose-500/30"}`}
              >
                {videoActive ? (
                  <Video className="size-5" />
                ) : (
                  <VideoOff className="size-5" />
                )}
              </Button>

              <Button
                onClick={() => setHandRaised(!handRaised)}
                variant="ghost"
                size="icon"
                className={`rounded-lg ${handRaised ? "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" : "text-zinc-200 hover:bg-zinc-800"}`}
              >
                <Hand className="size-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-200 hover:bg-zinc-800 rounded-lg"
              >
                <ScreenShare className="size-5" />
              </Button>
            </div>

            <Button
              onClick={handleEndSession}
              className="bg-rose-600 hover:bg-rose-700 text-white flex items-center gap-1.5 px-4 font-semibold"
            >
              <PhoneOff className="size-4" /> End Session
            </Button>
          </div>
        </div>

        {/* Right: Interaction Sidepanel (Tabs) */}
        <div className="w-full md:w-80 border-l border-border flex flex-col h-full bg-background shrink-0">
          <Tabs defaultValue="chat" className="flex-1 flex flex-col h-full">
            <TabsList className="grid grid-cols-2 rounded-none border-b border-border bg-muted/20">
              <TabsTrigger value="chat" className="rounded-none py-3">
                Deal Chat
              </TabsTrigger>
              <TabsTrigger value="notes" className="rounded-none py-3">
                Notes & Agenda
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="chat"
              className="flex-1 flex flex-col h-full overflow-hidden p-0"
            >
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className="text-xs space-y-1 bg-muted/30 p-2.5 rounded-lg border border-border/50"
                  >
                    <div className="flex justify-between font-semibold">
                      <span>{msg.sender}</span>
                      <span className="text-[10px] text-muted-foreground">
                        {msg.time}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{msg.text}</p>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-3 border-t border-border bg-muted/5">
                <div className="flex items-center gap-1.5 bg-background border border-border rounded-lg p-1">
                  <Input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type to deal room chat..."
                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-xs h-8 flex-1 bg-transparent"
                  />
                  <Button
                    onClick={handleSendChat}
                    size="icon"
                    className="shrink-0 size-8 bg-primary text-primary-foreground rounded-md"
                  >
                    <Send className="size-3.5" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="notes"
              className="flex-1 p-4 space-y-4 overflow-y-auto"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-semibold">Deal Room Guidelines</h3>
                <p className="text-xs text-muted-foreground">
                  Introductions made here are protected by the AECCI
                  Non-Circumvention agreement.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground">
                  My Live Session Notes
                </label>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Note down prices, shipping requirements, or contact follow-ups..."
                  className="h-48 text-xs"
                />
              </div>

              <div className="p-3 bg-muted/50 rounded-lg border border-border space-y-2">
                <h4 className="text-xs font-semibold">Shared Documents</h4>
                <div className="flex items-center gap-2 p-1.5 bg-background border border-border rounded text-[11px] font-medium text-muted-foreground">
                  <FileText className="size-4 text-primary" />
                  <span className="truncate">Nairobi Import Spec List.pdf</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Main>
    </>
  );
}
