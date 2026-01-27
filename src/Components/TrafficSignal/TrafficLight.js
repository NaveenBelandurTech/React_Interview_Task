import "./trafficlight.css";
import useIntervalTask from "../../../utils/useInterval";

const TrafficLight = () => {
  const Task = useIntervalTask();
  return (
    <section>
      <div className="traffic_container">
        <p className={Task == "red" ? "circle circle_red" : "circle"}>Red</p>
        <p className={Task == "Yellow" ? "circle circle_yellow" : "circle"}>
          Yellow
        </p>
        <p className={Task == "Green" ? "circle circle_green" : "circle"}>
          Green
        </p>
      </div>
    </section>
  );
};

export default TrafficLight;
