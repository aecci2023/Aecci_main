import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Download, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  RotateCw, 
  RefreshCcw 
} from "lucide-react";

export interface DocumentViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string | null;
  label: string | null;
}

export function DocumentViewerModal({
  isOpen,
  onClose,
  url,
  label,
}: DocumentViewerModalProps) {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  // Track previous props to reset state during render (avoids cascading renders)
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  const [prevUrl, setPrevUrl] = useState(url);

  if (isOpen !== prevIsOpen || url !== prevUrl) {
    setPrevIsOpen(isOpen);
    setPrevUrl(url);
    if (isOpen) {
      setScale(1);
      setRotation(0);
    }
  }

  const isImage = (urlStr: string | null) => {
    if (!urlStr) return false;
    try {
      const parsedUrl = new URL(urlStr);
      const pathname = parsedUrl.pathname.toLowerCase();
      return pathname.match(/\.(jpeg|jpg|gif|png|webp|svg)$/) != null;
    } catch {
      return false;
    }
  };

  const imageMode = isImage(url);

  // Appending #toolbar=1 for PDF ensures native browser PDF tools are visible
  const iframeUrl = url ? (url.includes("#") ? url : `${url}#toolbar=1&navpanes=0`) : "";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[90vw] lg:max-w-7xl w-full h-[90vh] flex flex-col p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-2 border-b">
          <DialogTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            {label || "Document Viewer"}
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 bg-muted/10 w-full overflow-hidden flex items-center justify-center relative">
          {url ? (
            imageMode ? (
              <div className="w-full h-full overflow-auto flex items-center justify-center">
                <img
                  src={url}
                  alt={label || "Document"}
                  style={{
                    transform: `scale(${scale}) rotate(${rotation}deg)`,
                    transition: "transform 0.2s ease-in-out",
                    transformOrigin: "center center",
                  }}
                  className="max-w-full max-h-full object-contain cursor-move"
                />
              </div>
            ) : (
              <iframe
                src={iframeUrl}
                className="w-full h-full border-0 absolute inset-0"
                title={label || "Document"}
              />
            )
          ) : (
            <p className="text-muted-foreground">No document selected</p>
          )}
        </div>
        <div className="p-4 border-t flex justify-between items-center bg-background">
          <div className="flex items-center gap-2">
            {imageMode && (
              <>
                <Button variant="outline" size="icon" onClick={() => setScale((s) => Math.max(0.25, s - 0.25))} title="Zoom Out">
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => setScale((s) => Math.min(5, s + 0.25))} title="Zoom In">
                  <ZoomIn className="w-4 h-4" />
                </Button>
                <div className="w-px h-6 bg-border mx-1" />
                <Button variant="outline" size="icon" onClick={() => setRotation((r) => r - 90)} title="Rotate Left">
                  <RotateCcw className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => setRotation((r) => r + 90)} title="Rotate Right">
                  <RotateCw className="w-4 h-4" />
                </Button>
                <div className="w-px h-6 bg-border mx-1" />
                <Button variant="outline" size="icon" onClick={() => { setScale(1); setRotation(0); }} title="Reset">
                  <RefreshCcw className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            {url && (
              <Button asChild variant="outline">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" /> Download Original File
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
