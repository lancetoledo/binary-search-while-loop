// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target1 = 3;
let target2 = 8;

function binarySearch(array, val) {
  let min = 0;
  let max = array.length - 1;
  let mid = 0;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (array[mid] == val) {
      return true;
    } else if (array[mid] < val) {
      min = mid + 1;
    } else if (array[mid] > val) {
      max = mid - 1;
    }
  }
  return false;
}

console.log(binarySearch(array, target2));
