export function hasChildren(item) {
  const { items: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  if (children.length === 0) {
    return false;
  }

  return true;
}

export function getFirstHalfOfString(str) {
  return str
    .split(" ")
    .slice(0, str.split(" ").length / 2)
    .join(" ");
}

export function getSecondHalfOfString(str) {
  return str
    .split(" ")
    .slice(str.split(" ").length / 2, str.split(" ").length)
    .join(" ");
}

export const timestampToDate = (timestamp) => {
  var a = new Date(timestamp * 1000);

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    month.toUpperCase() +
    " " +
    date +
    ", " +
    year +
    " AT " +
    hour +
    ":" +
    min +
    ":" +
    sec;
  return time;
};
