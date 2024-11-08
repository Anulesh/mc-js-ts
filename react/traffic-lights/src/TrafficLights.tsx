import { useEffect, useState } from "react";
import { alignmentTypes } from "./app";

function Light({
  backgroundColor,
}: {
  backgroundColor: React.CSSProperties["backgroundColor"] | undefined;
}) {
  return (
    <div
      aria-hidden="true"
      style={{ backgroundColor }}
      className="traffic-light"
    />
  );
}
const TrafficLight = <T, U>({
  config,
  alignment,
}: {
  config: T;
  alignment: U;
}) => {
  const configInfo = config as Record<string, Record<string, number | string>>;
  const [active, setActive] = useState("green");
  useEffect(() => {
    const { duration, next } = configInfo[active];

    const timerId = setTimeout(() => {
      setActive(next as string);
    }, duration as number);

    return () => {
      clearTimeout(timerId);
    };
  }, [active]);
  return (
    <div
      aria-live="polite"
      aria-label={`Current light: ${active}`}
      className={[
        "traffic-light-container",
        alignment === alignmentTypes.VERTICAL &&
          "traffic-light-container--vertical",
      ]
        .filter((cls) => !!cls)
        .join(" ")}
    >
      {Object.keys(configInfo).map((key) => (
        <Light
          key={key}
          backgroundColor={
            key === active ? configInfo[key].backgroundColor : undefined
          }
        />
      ))}
    </div>
  );
};
export default TrafficLight;
