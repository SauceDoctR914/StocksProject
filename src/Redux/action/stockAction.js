// const getStocks = stocks => ({ type: "GET_STOCKS", payload: stocks });
const stockURL =
  "https://cloud.iexapis.com/v1/stock/market/batch?symbols=GOOG,AMZN,F,SBUX,TSLA,BABA,GPRO,FB,PYPL,ADBE,PFE,VZ,NKE,QCOM,SNE,NVDA,MU,NFLX,ETSY,MDB,PEP,BA,INTC,AAPL,SPOT,MSFT&types=quote,news,company&range=1m&last=1&token=pk_ce5287b13658456797045a3c1a6c1472"

export const fetchStocks = () => {
  return dispatch => {
    return fetch(stockURL)
      .then(res => res.json())
      .then(responseObj => Object.values(responseObj))
      .then(stocks => dispatch({ type: "GET_STOCKS", stocks }))
      .catch(console.error);
  };
};

export const fetchSectorData = () => {
  return dispatch => {
    return fetch(
      "https://cloud.iexapis.com/beta/stock/market/sector-performance?token=pk_ce5287b13658456797045a3c1a6c1472"
    )
      .then(response => response.json())
      .then(sectorData => dispatch({ type: "GET_SECTORDATA", sectorData }))
      .catch(console.error);
  };
};


