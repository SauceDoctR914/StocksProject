// const getStocks = stocks => ({ type: "GET_STOCKS", payload: stocks });

const iex_key = process.env.REACT_APP_IEX_KEY
const stockURL =
  `https://cloud.iexapis.com/v1/stock/market/batch?symbols=GOOG,AMZN,F,SBUX,TSLA,BABA,GPRO,FB,PYPL,ADBE,PFE,VZ,NKE,QCOM,SNE,NVDA,MU,NFLX,ETSY,MDB,PEP,BA,INTC,AAPL,SPOT,MSFT&types=quote,news,company&range=1m&last=1&token=${iex_key}`


export const fetchStocks = () => {
  return dispatch => {
    return fetch(stockURL)
      .then(res => res.json())
      .then(responseObj => Object.values(responseObj))
      .then(stocks => dispatch({ type: "GET_STOCKS", stocks }))
      .catch(console.error);
  };
};

// https://api.intrinio.com/securities/{identifier}/zacks/analyst_ratings for future use

export const fetchSectorData = () => {
  return dispatch => {
    return fetch(
      "https://www.alphavantage.co/query?function=SECTOR&apikey=6O3PYIBYDLIKW6EZ")
      .then(res => res.json())        
      .then(metaData => {let firstObj = Object.keys(metaData)[1]; return metaData[firstObj]})
      .then(sectorData => dispatch({ type: "GET_SECTORDATA", sectorData }))
      .catch(console.error);
  };
};

// export const fetchSectorData = () => {
//   return async dispatch => {
//     try {
//       let response = await fetch(
//         "https://api.iextrading.com/1.0/stock/market/sector-performance?token=pk_ce5287b13658456797045a3c1a6c1472"
//       );
//       let sectorData = await response.json();
//       console.log(sectorData, 'gavin');
//       // dispatch({ type: GET_SECTORDATA, sectorData });
//     } catch (error) {
//       console.error("Error Fetching SectorData");
//     }
//   };
// };