import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ principalAmount, totalInterest }) {
  var state = {
    labels: ["Principal Loan Amount", "Total interest"],
    datasets: [
      {
        data: [principalAmount, totalInterest],
        backgroundColor: ["green", "orange"]
      }
    ]
  };

  return (
    <div>
      <h3>Break-up of total payment</h3>
      <Pie
        data={{
          labels: state.labels,
          datasets: state.datasets
        }}
        height="50%"
      />
    </div>
  );
}

export default PieChart;