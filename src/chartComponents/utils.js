import Moment from "moment";

export function setDate(arg) {
  return arg.map(obj => {
    /*const timeParser = timeFormat("%a %b %d %Y");*/
    const date = new Date(Moment(obj.date).format("ddd MMM D YYYY"));
    return { ...obj, date };
  });
}

export function getData(symbol) {
  const iex_key = process.env.REACT_APP_IEX_KEY
  const promiseMSFT = fetch(
    `https://cloud.iexapis.com/v1/stock/${symbol}/chart/3m?token=${iex_key}`
  )
    .then(response => response.json())
    .then(res => setDate(res));
  return promiseMSFT;
}
