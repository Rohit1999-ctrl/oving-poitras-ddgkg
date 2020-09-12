import React from "react";
import PieChart from "./PieChart";
import NumberFormat from "react-number-format";

function CalculateRates(props) {
  return (
    <div>
      <div className="framing">
        <p>Loan EMI</p>
        <NumberFormat
          displayType={"text"}
          thousandSeparator={true}
          thousandsGroupStyle="lakh"
          prefix={"₹"}
          value={props.emi}
        />
      </div>
      <hr />
      <div className="framing">
        <p>Total Interest Payable</p>
        <NumberFormat
          displayType={"text"}
          thousandSeparator={true}
          thousandsGroupStyle="lakh"
          prefix={"₹"}
          value={props.totalEMI}
        />
      </div>
      <hr />
      <div className="framing">
        <p>Total Payment</p>
        <NumberFormat
          displayType={"text"}
          thousandSeparator={true}
          thousandsGroupStyle="lakh"
          prefix={"₹"}
          value={props.payment}
        />
      </div>
      <hr />
      <PieChart
        principalAmount={props.homeLoanAmount}
        totalInterest={props.payments}
      />
    </div>
  );
}

export default CalculateRates;
