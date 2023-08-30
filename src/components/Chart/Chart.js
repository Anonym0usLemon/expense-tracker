import ChartBar from "./ChartBars";
import "./Chart.css";

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); //returns an array of all dataPoint values to pass to Math.max() in the line below
    const totalMaximum = Math.max(...dataPointValues); //spread operator "..." pulls all values out of the array and passes them as individual arguments


  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
