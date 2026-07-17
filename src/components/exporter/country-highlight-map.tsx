import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const INDIA_COORDS: [number, number] = [78.9629, 22.5937];

function isIndia(geo: { properties: Record<string, unknown> }) {
  const props = geo.properties;
  const name = String(props.name ?? "");
  const iso2 = String(props.iso_a2 ?? props.ISO_A2 ?? "");
  return name === "India" || iso2 === "IN";
}

function CountryHighlightMap() {
  return (
    <div className="relative h-full w-full min-h-[140px]">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 95,
          center: [78, 22],
        }}
        width={240}
        height={160}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const highlighted = isIndia(geo);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={highlighted ? "#175CD3" : "#D0D5DD"}
                  fillOpacity={highlighted ? 1 : 0.55}
                  stroke="#F8FAFC"
                  strokeWidth={0.4}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fillOpacity: highlighted ? 1 : 0.65 },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
        <Marker coordinates={INDIA_COORDS}>
          <circle r={5} fill="#175CD3" stroke="#fff" strokeWidth={1.5} />
          <circle r={2} fill="#fff" />
        </Marker>
      </ComposableMap>
    </div>
  );
}

export default memo(CountryHighlightMap);
