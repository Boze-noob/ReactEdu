import validator from "validator";
import { badWords } from "../data/constants/BadWords";
import Filter from "bad-words";

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
  var a = new Date(timestamp);

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

export const isEmail = (value) => {
  return /\S+@\S+\.\S+/.test(value);
};

export const isUrl = (value) => {
  if (validator.isURL(value)) return true;
  else return false;
};

export const cleanTxt = (txt) => {
  var filter = new Filter();

  filter.addWords(...badWords);

  const newTxt = filter.clean(txt);
  return newTxt;
};
