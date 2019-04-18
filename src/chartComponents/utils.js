import Moment from "moment";

export function setDate(arg) {
  return arg.map(obj => {
    /*const timeParser = timeFormat("%a %b %d %Y");*/
    const date = new Date(Moment(obj.date).format("ddd MMM D YYYY"));
    return { ...obj, date };
  });
}

export function getData(symbol) {
  const promiseMSFT = fetch(
    `https://api.iextrading.com/1.0/stock/${symbol}/chart/3m`
  )
    .then(response => response.json())
    .then(res => setDate(res));
  return promiseMSFT;
}
