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
  const num = str.length / 2;
  console.log("num is " + num);
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
