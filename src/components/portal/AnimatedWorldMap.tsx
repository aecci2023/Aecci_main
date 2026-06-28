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
  { markerOffset: 15, name: "India", coordinates: [78.9629, 20.5937] }, // Center
  { markerOffset: -15, name: "Kenya", coordinates: [37.9062, -1.2921] },
  { markerOffset: -15, name: "UAE", coordinates: [54.3773, 23.4241] },
  { markerOffset: 15, name: "Ghana", coordinates: [-1.0232, 7.9465] },
  { markerOffset: 15, name: "Singapore", coordinates: [103.8198, 1.3521] },
  { markerOffset: -15, name: "UK", coordinates: [-0.1278, 51.5074] },
];

const lines = [
  { from: markers[0].coordinates, to: markers[1].coordinates }, // India to Kenya
  { from: markers[0].coordinates, to: markers[2].coordinates }, // India to UAE
  { from: markers[0].coordinates, to: markers[3].coordinates }, // India to Ghana
  { from: markers[0].coordinates, to: markers[4].coordinates }, // India to Singapore
  { from: markers[0].coordinates, to: markers[5].coordinates }, // India to UK
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
