import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Coordinate definitions [longitude, latitude]
const markers = [
  { name: "India", coordinates: [78.9629, 20.5937] },
  // Africa
  { name: "Kenya", coordinates: [37.9062, -1.2921] },
  { name: "Ghana", coordinates: [-1.0232, 7.9465] },
  { name: "Nigeria", coordinates: [8.6753, 9.0820] },
  { name: "South Africa", coordinates: [25.0339, -29.0000] },
  { name: "Egypt", coordinates: [30.8025, 26.8206] },
  { name: "Tanzania", coordinates: [34.8888, -6.3690] },
  { name: "Ethiopia", coordinates: [40.4897, 9.1450] },
  { name: "Morocco", coordinates: [-7.0926, 31.7917] },
  { name: "Senegal", coordinates: [-14.4524, 14.4974] },
  // Middle East
  { name: "UAE", coordinates: [54.3773, 23.4241] },
  { name: "Saudi Arabia", coordinates: [45.0792, 23.8859] },
  { name: "Israel", coordinates: [34.8516, 31.0461] },
  { name: "Turkey", coordinates: [35.2433, 38.9637] },
  { name: "Iran", coordinates: [53.6880, 32.4279] },
  // Asia
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
  { name: "China", coordinates: [104.1954, 35.8617] },
  { name: "Japan", coordinates: [138.2529, 36.2048] },
  { name: "South Korea", coordinates: [127.7669, 35.9078] },
  { name: "Malaysia", coordinates: [109.6975, 4.2105] },
  { name: "Indonesia", coordinates: [113.9213, -0.7893] },
  { name: "Vietnam", coordinates: [108.2772, 14.0583] },
  { name: "Thailand", coordinates: [100.9925, 15.8700] },
  { name: "Bangladesh", coordinates: [90.3563, 23.6850] },
  { name: "Sri Lanka", coordinates: [80.7718, 7.8731] },
  { name: "Nepal", coordinates: [84.1240, 28.3949] },
  // Europe
  { name: "UK", coordinates: [-0.1278, 51.5074] },
  { name: "Germany", coordinates: [10.4515, 51.1657] },
  { name: "France", coordinates: [2.2137, 46.2276] },
  { name: "Netherlands", coordinates: [5.2913, 52.1326] },
  { name: "Italy", coordinates: [12.5674, 41.8719] },
  { name: "Spain", coordinates: [-3.7492, 40.4637] },
  { name: "Poland", coordinates: [19.1451, 51.9194] },
  { name: "Sweden", coordinates: [18.6435, 60.1282] },
  // Americas
  { name: "USA", coordinates: [-95.7129, 37.0902] },
  { name: "Canada", coordinates: [-106.3468, 56.1304] },
  { name: "Brazil", coordinates: [-51.9253, -14.2350] },
  { name: "Mexico", coordinates: [-102.5528, 23.6345] },
  { name: "Argentina", coordinates: [-63.6167, -38.4161] },
  { name: "Colombia", coordinates: [-74.2973, 4.5709] },
  { name: "Chile", coordinates: [-71.5430, -35.6751] },
  // Oceania
  { name: "Australia", coordinates: [133.7751, -25.2744] },
  { name: "New Zealand", coordinates: [174.8860, -40.9006] },
];

const lines = [
  { from: markers[0].coordinates, to: markers.find(m => m.name === "Kenya")!.coordinates },
  { from: markers[0].coordinates, to: markers.find(m => m.name === "UAE")!.coordinates },
  { from: markers[0].coordinates, to: markers.find(m => m.name === "Ghana")!.coordinates },
  { from: markers[0].coordinates, to: markers.find(m => m.name === "Singapore")!.coordinates },
  { from: markers[0].coordinates, to: markers.find(m => m.name === "UK")!.coordinates },
];

const AnimatedWorldMap = () => {
  return (
    <div className="w-full h-[600px] sm:h-[700px] absolute right-0 top-0 lg:translate-x-1/4 pointer-events-none z-0 opacity-70">
      <ComposableMap
        projectionConfig={{
          scale: 160,
          center: [40, 20],
        }}
        width={800}
        height={600}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1e3a8a" // Tailwind blue-900 equivalent
                fillOpacity={0.2}
                stroke="#3b82f6" // Tailwind blue-500 equivalent
                strokeWidth={0.5}
                strokeOpacity={0.4}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fillOpacity: 0.3 },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Animated Lines connecting hubs */}
        {lines.map((line, i) => (
          <Line
            key={i}
            from={line.from as [number, number]}
            to={line.to as [number, number]}
            stroke="#eab308" // yellow-500
            strokeWidth={1.5}
            strokeLinecap="round"
            className="path-animated"
          />
        ))}

        {/* Markers with glowing effects */}
        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates as [number, number]}>
            <g className="relative">
              <circle
                r={4}
                fill="#eab308"
                className="animate-ping opacity-75"
              />
              <circle r={2} fill="#ffffff" />
            </g>
          </Marker>
        ))}
      </ComposableMap>

      {/* SVG Animation Definition */}
      <svg width="0" height="0">
        <defs>
          <style>
            {`
              .path-animated {
                stroke-dasharray: 5 5;
                animation: dash 3s linear infinite;
              }
              @keyframes dash {
                to {
                  stroke-dashoffset: -20;
                }
              }
            `}
          </style>
        </defs>
      </svg>
    </div>
  );
};

export default memo(AnimatedWorldMap);
