import Moment from "moment";

export function setDate(arg) {
  return arg.map(obj => {
    // const timeParser = timeFormat("%a %b %d %Y");
    const date = new Date(Moment(obj.date).format("ddd MMM D YYYY"));
    return { ...obj, date };
  });
}

export function getData(symbol) {
  const promiseMSFT = fetch(
    `https://cloud.iexapis.com/v1/stock/${symbol}/chart/6m&token=pk_c2d0e210f353462f96aecae48a29019f`
  )
    .then(response => response.json())
    .then(res => setDate(res));
  return promiseMSFT;
}
