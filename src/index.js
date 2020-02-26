module.exports = function reverse (n) {
  let nstr = n.toString();
  return parseInt(nstr.split("").reverse().join(""));
}
