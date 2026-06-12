import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Lock, Envelope, IdentificationCard, ShieldCheck } from "@phosphor-icons/react"
import { toast } from "sonner"

interface AuthDialogProps {
  triggerText: React.ReactNode
  defaultTab?: "login" | "register"
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link"
}

export function AuthDialog({ triggerText, defaultTab = "login", className, variant = "default" }: AuthDialogProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState<"login" | "register">(defaultTab)
  
  // Login form states
  const [loginEmail, setLoginEmail] = React.useState("")
  const [loginPassword, setLoginPassword] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  // Registration form states
  const [regName, setRegName] = React.useState("")
  const [regEmail, setRegEmail] = React.useState("")
  const [regCompany, setRegCompany] = React.useState("")
  const [regMemberType, setRegMemberType] = React.useState("exporter")
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!loginEmail || !loginPassword) {
      toast.error("Please fill in all fields.")
      return
    }
    
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsOpen(false)
      toast.success(`Welcome back! Successfully logged in as ${loginEmail.split('@')[0]}`)
      setLoginEmail("")
      setLoginPassword("")
    }, 1500)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (!regName || !regEmail || !regCompany) {
      toast.error("Please fill in all required fields.")
      return
    }
    
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsOpen(false)
      toast.success(`Registration request submitted! Our membership team will contact ${regCompany} within 24 hours.`, {
        duration: 5000,
      })
      setRegName("")
      setRegEmail("")
      setRegCompany("")
    }, 1800)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] border-border bg-card/95 backdrop-blur-xl text-card-foreground shadow-2xl p-6">
        <DialogHeader className="space-y-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">AECCI Portal</span>
            <span className="px-2 py-0.5 text-[10px] font-semibold bg-primary/10 text-primary rounded border border-primary/20 uppercase tracking-widest">Secure Access</span>
          </div>
          <DialogTitle className="text-xl font-heading font-semibold text-foreground">
            {activeTab === "login" ? "Sign In to Member Area" : "Apply for Chamber Membership"}
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            {activeTab === "login" 
              ? "Access Certificate of Origin validation, strategic B2B forums, and active trade wings." 
              : "Become a registered exporter partner to leverage global trade connections and policies."}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as "login" | "register")} className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2 bg-muted/50 p-1 rounded-lg">
            <TabsTrigger value="login" className="rounded-md py-2 text-xs font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground transition-all">
              Member Sign In
            </TabsTrigger>
            <TabsTrigger value="register" className="rounded-md py-2 text-xs font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground transition-all">
              Membership Request
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4 mt-4 focus-visible:outline-none">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email" className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                  <Envelope className="size-3.5 text-primary" /> Registered Email Address
                </Label>
                <div className="relative">
                  <Input 
                    id="login-email" 
                    type="email" 
                    placeholder="name@company.com" 
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="pl-3 bg-muted/20 border-border text-foreground focus-visible:ring-primary focus-visible:ring-offset-0 placeholder:text-muted-foreground/50 text-sm h-10 rounded-md"
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="login-pass" className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <Lock className="size-3.5 text-primary" /> Password
                  </Label>
                  <a href="#" onClick={(e) => { e.preventDefault(); toast.info("Password reset instructions sent to registered administrator email.") }} className="text-[11px] text-primary hover:underline">
                    Forgot Administrator Password?
                  </a>
                </div>
                <Input 
                  id="login-pass" 
                  type="password" 
                  placeholder="••••••••" 
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="pl-3 bg-muted/20 border-border text-foreground focus-visible:ring-primary focus-visible:ring-offset-0 placeholder:text-muted-foreground/50 text-sm h-10 rounded-md"
                  required 
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 font-bold transition-all mt-6 shadow-lg shadow-primary/10">
                {isSubmitting ? "Authenticating Session..." : "Secure Sign In"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="register" className="space-y-4 mt-4 focus-visible:outline-none">
            <form onSubmit={handleRegister} className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="reg-name" className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                  <User className="size-3.5 text-primary" /> Contact Representative
                </Label>
                <Input 
                  id="reg-name" 
                  placeholder="E.g., Priya Sharma" 
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  className="bg-muted/20 border-border text-foreground focus-visible:ring-primary focus-visible:ring-offset-0 placeholder:text-muted-foreground/50 text-sm h-9 rounded-md"
                  required 
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="reg-email" className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                  <Envelope className="size-3.5 text-primary" /> Professional Email
                </Label>
                <Input 
                  id="reg-email" 
                  type="email" 
                  placeholder="p.sharma@indusexports.com" 
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  className="bg-muted/20 border-border text-foreground focus-visible:ring-primary focus-visible:ring-offset-0 placeholder:text-muted-foreground/50 text-sm h-9 rounded-md"
                  required 
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="reg-company" className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                  <IdentificationCard className="size-3.5 text-primary" /> Company / Enterprise Name
                </Label>
                <Input 
                  id="reg-company" 
                  placeholder="E.g., Indus Global Exports Ltd." 
                  value={regCompany}
                  onChange={(e) => setRegCompany(e.target.value)}
                  className="bg-muted/20 border-border text-foreground focus-visible:ring-primary focus-visible:ring-offset-0 placeholder:text-muted-foreground/50 text-sm h-9 rounded-md"
                  required 
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="reg-type" className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-primary" /> Membership Designation
                </Label>
                <select 
                  id="reg-type"
                  value={regMemberType}
                  onChange={(e) => setRegMemberType(e.target.value)}
                  className="w-full px-3 bg-muted/20 border border-border text-foreground rounded-md text-sm h-9 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  <option value="exporter" className="bg-card text-foreground">Global Exporter Member</option>
                  <option value="importer" className="bg-card text-foreground">Strategic Importer Partner</option>
                  <option value="chamber-alliance" className="bg-card text-foreground">Chamber Alliance Associate</option>
                  <option value="startup" className="bg-card text-foreground">Youth Wing Startup</option>
                </select>
              </div>

              <div className="text-[10px] text-muted-foreground mt-2 leading-relaxed bg-muted/30 p-2.5 rounded border border-border/50 flex items-start gap-1.5">
                <Lock className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span>By submitting, you request formal enrollment in the Asian Exporters' Chamber of Commerce and Industry. A verified trade officer will evaluate your corporate filings within 1 working day.</span>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 font-bold transition-all mt-4 shadow-lg shadow-primary/10">
                {isSubmitting ? "Submitting Corporate Portfolio..." : "Request Access Key"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
