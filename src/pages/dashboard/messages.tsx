import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Paperclip, CheckCheck } from "lucide-react";
import { useState } from "react";

export default function MessagesPage() {
  const [activeThread, setActiveThread] = useState("partner");
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState({
    support: [
      {
        id: 1,
        sender: "AECCI Helpdesk",
        text: "Hello, your profile verification is complete. Do you need any assistance booking your first slot?",
        time: "Yesterday, 10:30",
        isMe: false,
      },
      {
        id: 2,
        sender: "Me",
        text: "Thank you! I will book the India-Kenya slot now.",
        time: "Yesterday, 10:45",
        isMe: true,
      },
      {
        id: 3,
        sender: "AECCI Helpdesk",
        text: "Perfect. Let us know if you need help uploading the product catalogue.",
        time: "Yesterday, 10:48",
        isMe: false,
      },
    ],
    partner: [
      {
        id: 1,
        sender: "KNCCI Officer",
        text: "Hello, we reviewed your textile specifications. Can you confirm if you hold ISO 9001 certification?",
        time: "Today, 09:15",
        isMe: false,
      },
      {
        id: 2,
        sender: "Me",
        text: "Yes, we do. I uploaded the ISO certificate in our company documents under Step 5.",
        time: "Today, 09:30",
        isMe: true,
      },
      {
        id: 3,
        sender: "KNCCI Officer",
        text: "Excellent. We have matched you with 3 potential distributors in Nairobi who will attend the Live Deal Room tomorrow.",
        time: "Today, 10:02",
        isMe: false,
      },
    ],
    alerts: [
      {
        id: 1,
        sender: "AECCI System",
        text: "Your slot for the India-Kenya Textile round has been approved. Please prepare your presentation.",
        time: "Yesterday, 15:00",
        isMe: false,
      },
      {
        id: 2,
        sender: "AECCI System",
        text: "Documents verified successfully. Compliance status updated.",
        time: "June 12, 11:20",
        isMe: false,
      },
    ],
  });

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newMsg = {
      id: Date.now(),
      sender: "Me",
      text: inputText,
      time: "Just now",
      isMe: true,
    };
    setMessages((prev) => ({
      ...prev,
      [activeThread]: [...prev[activeThread as keyof typeof prev], newMsg],
    }));
    setInputText("");
  };

  const threadInfo = {
    support: {
      name: "AECCI Secretariat Support",
      role: "Support Helpdesk",
      status: "Online",
      avatar: "SH",
    },
    partner: {
      name: "Kenya Partner Desk (KNCCI)",
      role: "Nairobi Chamber Partner",
      status: "Online",
      avatar: "KP",
    },
    alerts: {
      name: "AECCI Notifications & Alerts",
      role: "System Automation",
      status: "Active",
      avatar: "SYS",
    },
  };

  const activeInfo = threadInfo[activeThread as keyof typeof threadInfo];

  return (
    <>
      <Header>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm text-muted-foreground">
            AECCI Hub
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="font-semibold text-sm">Messages</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ProfileDropdown />
        </div>
      </Header>

      <Main
        fluid
        className="h-[calc(100vh-100px)] p-0 flex flex-col md:flex-row overflow-hidden border border-border rounded-lg bg-card shadow-sm"
      >
        {/* Sidebar */}
        <div className="w-full md:w-80 border-r border-border flex flex-col h-full bg-muted/10 shrink-0">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-lg">Message Hub</h2>
            <p className="text-xs text-muted-foreground">
              Direct connection to Partners & AECCI
            </p>
          </div>
          <div className="flex-1 overflow-y-auto space-y-1 p-2">
            <button
              onClick={() => setActiveThread("partner")}
              className={`w-full text-left p-3 rounded-lg flex gap-3 transition-colors ${activeThread === "partner" ? "bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30" : "hover:bg-muted"}`}
            >
              <Avatar className="h-10 w-10 border border-primary/30">
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  KP
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-sm block truncate">
                    Kenya Desk (KNCCI)
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    10:02
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate mt-0.5">
                  We have matched you with 3...
                </p>
              </div>
              <Badge className="bg-amber-600 hover:bg-amber-600 text-white rounded-full size-5 flex items-center justify-center p-0 text-[10px] shrink-0">
                2
              </Badge>
            </button>

            <button
              onClick={() => setActiveThread("support")}
              className={`w-full text-left p-3 rounded-lg flex gap-3 transition-colors ${activeThread === "support" ? "bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30" : "hover:bg-muted"}`}
            >
              <Avatar className="h-10 w-10 border border-border">
                <AvatarFallback className="bg-muted-foreground/10 text-muted-foreground font-semibold">
                  SH
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-sm block truncate">
                    AECCI Secretariat
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    Yesterday
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate mt-0.5">
                  Perfect. Let us know if you...
                </p>
              </div>
              <Badge className="bg-primary hover:bg-primary text-primary-foreground rounded-full size-5 flex items-center justify-center p-0 text-[10px] shrink-0">
                1
              </Badge>
            </button>

            <button
              onClick={() => setActiveThread("alerts")}
              className={`w-full text-left p-3 rounded-lg flex gap-3 transition-colors ${activeThread === "alerts" ? "bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30" : "hover:bg-muted"}`}
            >
              <Avatar className="h-10 w-10 border border-border">
                <AvatarFallback className="bg-amber-500/10 text-amber-600 font-semibold">
                  SYS
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-sm block truncate">
                    System Alerts
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    Yesterday
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate mt-0.5">
                  Your slot for the India-Kenya...
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col h-full bg-background">
          {/* Active Chat Header */}
          <div className="p-4 border-b border-border flex items-center justify-between bg-muted/10 shrink-0">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border">
                <AvatarFallback className="bg-primary/10 text-primary font-bold">
                  {activeInfo.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-sm leading-none">
                  {activeInfo.name}
                </h3>
                <span className="text-xs text-muted-foreground mt-1 block">
                  {activeInfo.role}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="text-xs text-emerald-600 border-emerald-200 bg-emerald-50/50 flex items-center gap-1"
              >
                <span className="size-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                {activeInfo.status}
              </Badge>
            </div>
          </div>

          {/* Messages List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages[activeThread as keyof typeof messages].map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.isMe ? "items-end" : "items-start"}`}
              >
                <div
                  className="max-w-[75%] rounded-2xl px-4 py-2.5 text-sm shadow-sm relative border border-border/50
                  ${msg.isMe ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/50 text-foreground'}"
                >
                  <p className="leading-relaxed whitespace-pre-wrap">
                    {msg.text}
                  </p>
                  {!msg.isMe && (
                    <span className="text-[10px] text-muted-foreground font-semibold block mt-1">
                      {msg.sender}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 mt-1 text-[10px] text-muted-foreground px-1">
                  <span>{msg.time}</span>
                  {msg.isMe && (
                    <CheckCheck className="size-3 text-emerald-500" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-border shrink-0 bg-muted/5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 bg-background border border-border rounded-lg p-1"
            >
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
              >
                <Paperclip className="size-5" />
              </Button>
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 bg-transparent"
              />
              <Button
                type="submit"
                size="icon"
                className="shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md"
              >
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>
      </Main>
    </>
  );
}
