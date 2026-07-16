import { motion } from "framer-motion";
import { Globe3D, type GlobeMarker } from "@/components/ui/3d-globe";

const sampleMarkers: GlobeMarker[] = [
  { lat: -15.7939, lng: -47.8828, src: "https://flagcdn.com/w80/br.png", label: "Brazil" },
  { lat: 11.5564, lng: 104.9282, src: "https://flagcdn.com/w80/kh.png", label: "Cambodia" },
  { lat: 55.6761, lng: 12.5683, src: "https://flagcdn.com/w80/dk.png", label: "Denmark" },
  { lat: 30.0444, lng: 31.2357, src: "https://flagcdn.com/w80/eg.png", label: "Egypt" },
  { lat: 19.4326, lng: -99.1332, src: "https://flagcdn.com/w80/mx.png", label: "Mexico" },
  { lat: -6.163, lng: 35.7516, src: "https://flagcdn.com/w80/tz.png", label: "Tanzania" },
  { lat: 25.0443, lng: -77.3504, src: "https://flagcdn.com/w80/bs.png", label: "Bahamas" },
  { lat: 43.8563, lng: 18.4131, src: "https://flagcdn.com/w80/ba.png", label: "Bosnia & Herzegovina" },
  { lat: -25.9692, lng: 32.5732, src: "https://flagcdn.com/w80/mz.png", label: "Mozambique" },
  { lat: 36.7538, lng: 3.0588, src: "https://flagcdn.com/w80/dz.png", label: "Algeria" },
  { lat: 9.0765, lng: 7.3986, src: "https://flagcdn.com/w80/ng.png", label: "Nigeria" },
  { lat: 21.0285, lng: 105.8542, src: "https://flagcdn.com/w80/vn.png", label: "Vietnam" },
  { lat: 51.5074, lng: -0.1278, src: "https://flagcdn.com/w80/gb.png", label: "United Kingdom" },
  { lat: 39.9042, lng: 116.4074, src: "https://flagcdn.com/w80/cn.png", label: "China" },
  { lat: 33.6844, lng: 73.0479, src: "https://flagcdn.com/w80/pk.png", label: "Pakistan" },
  { lat: 23.588, lng: 58.3829, src: "https://flagcdn.com/w80/om.png", label: "Oman" },
  { lat: 39.9334, lng: 32.8597, src: "https://flagcdn.com/w80/tr.png", label: "Turkey" },
  { lat: 37.9838, lng: 23.7275, src: "https://flagcdn.com/w80/gr.png", label: "Greece" },
  { lat: 13.7563, lng: 100.5018, src: "https://flagcdn.com/w80/th.png", label: "Thailand" },
  { lat: 8.9806, lng: 38.7578, src: "https://flagcdn.com/w80/et.png", label: "Ethiopia" },
  { lat: 4.8594, lng: 31.5713, src: "https://flagcdn.com/w80/ss.png", label: "South Sudan" },
  { lat: 6.9271, lng: 79.8612, src: "https://flagcdn.com/w80/lk.png", label: "Sri Lanka" },
  { lat: 24.4539, lng: 54.3773, src: "https://flagcdn.com/w80/ae.png", label: "United Arab Emirates" },
  { lat: 41.2995, lng: 69.2401, src: "https://flagcdn.com/w80/uz.png", label: "Uzbekistan" },
  { lat: 31.9454, lng: 35.9284, src: "https://flagcdn.com/w80/jo.png", label: "Jordan" },
  { lat: 33.8938, lng: 35.5018, src: "https://flagcdn.com/w80/lb.png", label: "Lebanon" },
  { lat: -6.2088, lng: 106.8456, src: "https://flagcdn.com/w80/id.png", label: "Indonesia" },
  { lat: 34.0209, lng: -6.8416, src: "https://flagcdn.com/w80/ma.png", label: "Morocco" },
  { lat: 52.52, lng: 13.405, src: "https://flagcdn.com/w80/de.png", label: "Germany" },
  { lat: 38.7223, lng: -9.1393, src: "https://flagcdn.com/w80/pt.png", label: "Portugal" },
  { lat: 52.2297, lng: 21.0122, src: "https://flagcdn.com/w80/pl.png", label: "Poland" },
  { lat: -1.2921, lng: 36.8219, src: "https://flagcdn.com/w80/ke.png", label: "Kenya" },
  { lat: 52.3676, lng: 4.9041, src: "https://flagcdn.com/w80/nl.png", label: "Netherlands" },
  { lat: 1.3521, lng: 103.8198, src: "https://flagcdn.com/w80/sg.png", label: "Singapore" },
  { lat: 45.4215, lng: -75.6972, src: "https://flagcdn.com/w80/ca.png", label: "Canada" },
  { lat: 14.5995, lng: 120.9842, src: "https://flagcdn.com/w80/ph.png", label: "Philippines" },
  { lat: 1.6508, lng: 17.6791, src: "https://flagcdn.com/w80/za.png", label: "Africa" },
  { lat: 5.6037, lng: -0.187, src: "https://flagcdn.com/w80/gh.png", label: "Ghana" },
  { lat: -22.5609, lng: 17.0658, src: "https://flagcdn.com/w80/na.png", label: "Namibia" },
  { lat: 32.8872, lng: 13.1913, src: "https://flagcdn.com/w80/ly.png", label: "Libya" },
  { lat: 59.3293, lng: 18.0686, src: "https://flagcdn.com/w80/se.png", label: "Sweden" },
  { lat: 35.1856, lng: 33.3823, src: "https://flagcdn.com/w80/cy.png", label: "Cyprus" },
  { lat: 47.4979, lng: 19.0402, src: "https://flagcdn.com/w80/hu.png", label: "Hungary" },
  { lat: 59.437, lng: 24.7536, src: "https://flagcdn.com/w80/ee.png", label: "Estonia" },
  { lat: 41.9028, lng: 12.4964, src: "https://flagcdn.com/w80/it.png", label: "Italy" },
  { lat: 40.1792, lng: 44.4991, src: "https://flagcdn.com/w80/am.png", label: "Armenia" },
  { lat: 20.5937, lng: 78.9629, src: "https://flagcdn.com/w80/in.png", label: "India" },
];

export default function PartnerBranding() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-12 relative overflow-hidden bg-black text-white">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Primary glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--primary) 15%, transparent) 0%, transparent 65%)",
        }}
      />

      {/* Top text */}
      <div className="relative z-10 flex flex-col items-start gap-3">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4 text-white">
          Become an AECCI Partner
        </h1>
        <p className="text-base text-white/70 max-w-sm">
          Join our global network of trade experts, lawyers, and market entry
          specialists helping businesses expand across borders.
        </p>
      </div>

      {/* 3D Globe — centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-4">
        <div className="w-full h-[500px] md:h-[450px]">
          <Globe3D
            className="h-full w-full"
            markers={sampleMarkers}
            config={{
              atmosphereColor: "#2bb17b",
              atmosphereIntensity: 25,
              bumpScale: 5,
              autoRotateSpeed: 0.8,
            }}
          />
        </div>
      </div>

      {/* Bottom card */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-6"
        >
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" /> Access verified
              global businesses
            </li>
            <li className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" /> Host Deal Room
              sessions &amp; earn
            </li>
            <li className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" /> Build your
              international reputation
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Decorative orb */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-20 -mb-20 pointer-events-none" />
    </div>
  );
}
