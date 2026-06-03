import { useRoutes } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/portal/Footer"
import { routes } from "@/router"
import { ActiveThemeProvider } from "@/components/themes/active-theme"

export default function App() {
  const element = useRoutes(routes);

  return (
    <ActiveThemeProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground font-body select-none transition-colors duration-300 relative">
        <Toaster position="top-right" richColors />

        {/* Atmospheric Theme Gradient Layer (Dark mode only) */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5 opacity-0 dark:opacity-100 -z-10 pointer-events-none transition-opacity duration-500 fixed" />

        {/* Subtle Grid Dot Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] -z-10 pointer-events-none fixed" />

        <Navbar />

        <div className="flex-1">
          {element}
        </div>
        <Footer />
      </div>
    </ActiveThemeProvider>
  )
}
