const getStocks = stocks => ({ type: "GET_STOCKS", payload: stocks });
const stockURL =
  "https://api.iextrading.com/1.0/stock/market/batch?symbols=GOOG,CLM,AMZN,F,SBUX,KTOS,TSLA,BABA,GPRO,WWE,GE,FB,PYPL,ADBE,PFE,SNAP,JNJ,VZ,NKE,HUSA,QCOM,SNE,NVDA,MU,NFLX,ETSY,MDB,PEP,BA,AMD,INTC,AAPL,SPOT,MSFT,UNIT&types=quote,news,company&range=1m&last=1";

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
      .then(sectorData => ({ type: GET_SECTORDATA, sectorData }))
      .catch(console.error("Error Fetching SectorData"));
  };
};

// export const fetchSectorData = () => {
//   return async dispatch => {
//     try {
//       let response = await fetch(
//         "https://cloud.iexapis.com/beta/stock/market/sector-performance?token=pk_ce5287b13658456797045a3c1a6c1472"
//       );
//       let sectorData = await response.json();
//       console.log(sectorData);
//       dispatch({ type: GET_SECTORDATA, sectorData });
//     } catch (error) {
//       console.error("Error Fetching SectorData");
//     }
//   };
// };
