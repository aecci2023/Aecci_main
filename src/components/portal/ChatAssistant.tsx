import * as React from "react"
import { Headset, X, PaperPlaneTilt } from "@phosphor-icons/react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function ChatAssistant() {
  const [chatOpen, setChatOpen] = React.useState(false)
  const [chatMessages, setChatMessages] = React.useState<Array<{ sender: "user" | "bot"; text: string; time: string }>>([
    { sender: "bot", text: "Welcome to AECCI Trade Desk. I am your Digital Trade Assistant. How can we facilitate your global export business today?", time: "1:00 AM" }
  ])
  const [chatInput, setChatInput] = React.useState("")

  const handleChatPromptClick = (promptText: string, botResponse: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const userMsg = { sender: "user" as const, text: promptText, time }
    const botMsg = { sender: "bot" as const, text: botResponse, time }
    
    setChatMessages((prev) => [...prev, userMsg])
    
    setTimeout(() => {
      setChatMessages((prev) => [...prev, botMsg])
    }, 600)
  }

  const handleSendChatMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!chatInput.trim()) return
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const userMsg = { sender: "user" as const, text: chatInput, time }
    setChatMessages((prev) => [...prev, userMsg])
    const inputClean = chatInput.toLowerCase()
    setChatInput("")

    let response = "Thank you for reaching out to the AECCI. Your query has been logged. An officer from the respective trade wing will contact you shortly."
    if (inputClean.includes("origin") || inputClean.includes("coo") || inputClean.includes("certificate")) {
      response = "You can apply for the Certificate of Origin (COO) securely through our e-Platform. Members receive instant verification and custom QR stamps. Standard processing takes less than 2 hours. Enter your reference number in the Tracker on our home page to see live updates!"
    } else if (inputClean.includes("arbitration") || inputClean.includes("dispute") || inputClean.includes("legal")) {
      response = "The AECCI Arbitration & Conciliation Board is ICCA certified. Our panels offer swift, cost-effective commercial dispute resolutions. Please contact Justice (Retd) H. S. Chawla at arbitration@aecci.org.in for active case filing."
    } else if (inputClean.includes("member") || inputClean.includes("join") || inputClean.includes("register")) {
      response = "Chamber membership is open to certified exporters, trade tech startups, and international alliances. Click the 'Become Member' button in our header to submit a corporate request."
    } else if (inputClean.includes("wing") || inputClean.includes("specialized")) {
      response = "We operate 7 specialized wings: Industrial, Women, Arbitration, Foreign Trade, Social, Skill, and Youth wings. Select a wing on our home page grid to view contact details, current chairmen, and specific initiatives!"
    }

    setTimeout(() => {
      setChatMessages((prev) => [...prev, { sender: "bot" as const, text: response, time }])
    }, 800)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5">
      
      {/* Chat Window */}
      {chatOpen && (
        <Card className="w-80 sm:w-96 bg-card/95 border-border shadow-2xl overflow-hidden flex flex-col h-[400px] backdrop-blur-xl animate-in slide-in-from-bottom-6 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3 text-left">
              <div className="relative">
                <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center">
                  <Headset className="size-5" />
                </div>
                <div className="w-2.5 h-2.5 bg-primary rounded-full border-2 border-card absolute -bottom-0.5 -right-0.5 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-sm leading-none">AECCI Trade Assistant</span>
                <span className="text-[10px] opacity-80 mt-1">AI Attendant Online</span>
              </div>
            </div>
            <button 
              onClick={() => setChatOpen(false)}
              className="hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
            >
              <X className="size-4.5" />
            </button>
          </div>

          {/* Conversation Flow */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs bg-muted/10">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex gap-2.5 text-left ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                {msg.sender === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                    <Headset className="size-4.5" />
                  </div>
                )}
                <div className={`p-3 rounded-2xl max-w-[75%] leading-relaxed ${
                  msg.sender === "user" 
                    ? "bg-primary text-primary-foreground rounded-tr-none shadow-lg shadow-primary/5" 
                    : "bg-muted/40 border border-border text-foreground rounded-tl-none"
                }`}>
                  <p>{msg.text}</p>
                  <span className={`text-[8px] mt-1.5 block opacity-60 text-right`}>{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Prompt Chips */}
          <div className="px-4 py-2 bg-muted/20 border-t border-border/50 flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none">
            <button 
              onClick={() => handleChatPromptClick("Apply for COO", "To apply for the Certificate of Origin (COO), please sign in to the Member Portal and head to e-Platform. You'll upload shipping invoice details and receive stamp attestation within 2 hours.")}
              className="bg-card border border-border hover:bg-muted text-[10px] font-bold text-foreground px-3 py-1 rounded-full active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              Apply for COO
            </button>
            <button 
              onClick={() => handleChatPromptClick("Arbitration Fees", "Arbitration pricing is calculated under ICCA Schedule 3. Standard registration starts at Rs. 15,000 for domestic cases and Rs. 50,000 for international FTAs.")}
              className="bg-card border border-border hover:bg-muted text-[10px] font-bold text-foreground px-3 py-1 rounded-full active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              Arbitration Fees
            </button>
            <button 
              onClick={() => handleChatPromptClick("Member Benefits", "Chamber members unlock verified status in the exporter directory, automated customs audits, state trade delegation lists, and direct B2B buyer request matchmakings.")}
              className="bg-card border border-border hover:bg-muted text-[10px] font-bold text-foreground px-3 py-1 rounded-full active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              Member Benefits
            </button>
          </div>

          {/* Message Input bar */}
          <form onSubmit={handleSendChatMessage} className="p-3 border-t border-border/50 bg-card flex gap-2">
            <Input 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask about COO, wings, arbitration..." 
              className="bg-muted/20 border-border text-foreground focus-visible:ring-primary focus-visible:ring-offset-0 placeholder:text-muted-foreground/45 text-xs h-9 rounded-xl flex-1"
            />
            <Button type="submit" size="icon" className="bg-primary text-primary-foreground hover:bg-primary/95 size-9 rounded-xl shrink-0 cursor-pointer">
              <PaperPlaneTilt className="size-4" />
            </Button>
          </form>
        </Card>
      )}

      {/* Large Floating Circular Button */}
      <button 
        onClick={() => {
          setChatOpen(!chatOpen)
          toast.info(chatOpen ? "Trade Assistant closed." : "Trade Assistant online.")
        }}
        className="w-14 h-14 bg-gradient-to-tr from-primary to-primary/80 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 relative border border-white/10 cursor-pointer"
      >
        {chatOpen ? <X className="size-6 animate-in spin-in-90 duration-300" /> : <Headset className="size-6.5" />}
      </button>
    </div>
  )
}
