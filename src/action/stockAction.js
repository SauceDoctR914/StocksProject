const getStocks = stocks => ({ type: "GET_STOCKS", payload: stocks });
const stockURL =
  "https://api.iextrading.com/1.0/stock/market/batch?symbols=NVDA,MU,NFLX,ETSY,MDB,SRPT,BA,AMD,INTC,EVH,NRZ,UNIT&types=quote,news,chart&range=1m&last=1";

export const fetchStocks = () => {
  return dispatch => {
    return fetch(stockURL)
      .then(res => res.json())
      .then(responseObj => Object.values(responseObj))
      .then(stocks => dispatch({ type: "GET_STOCKS", stocks }))
      .catch(console.error);
  };
};
