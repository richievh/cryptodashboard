const ExchangeRate = (props) => {
  return (
    <div className="exchange-rate">
      <h3>Exchange Rate</h3>
      <h2>{props.exchangedData.exchangeRate}</h2>
      <p>
        {props.exchangedData.primaryCurrency} to{" "}
        {props.exchangedData.secondaryCurrency}
      </p>
    </div>
  );
};

export default ExchangeRate;
