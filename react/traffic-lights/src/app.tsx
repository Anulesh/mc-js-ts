import TrafficLight from "./TrafficLights";
export enum alignmentTypes {
  HORIZONTAL,
  VERTICAL,
}

const App = () => {
  const config = {
    red: {
      duration: 4000,
      next: "green",
      backgroundColor: "red",
    },
    yellow: {
      duration: 500,
      next: "red",
      backgroundColor: "yellow",
    },
    green: {
      duration: 3000,
      next: "yellow",
      backgroundColor: "green",
    },
  };
  return (
    <div className="wrapper">
      <TrafficLight config={config} alignment={alignmentTypes.HORIZONTAL} />
      <TrafficLight config={config} alignment={alignmentTypes.VERTICAL} />
    </div>
  );
};
export default App;
