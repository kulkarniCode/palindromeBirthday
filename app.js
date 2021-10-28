function reverseString(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  return str === reverseString(str);
}

function convertDateToString(date) {
  let dateString = { day: "", month: "", year: "" };

  if (date.day < 10) {
    dateString.day = "0" + date.day;
  } else {
    dateString.day = date.day.toString();
  }
  if (date.month < 10) {
    dateString.month = "0" + date.month;
  } else {
    dateString.month = date.month.toString();
  }
  dateString.year = date.year.toString();

  return dateString;
}

function getAllDateFormats(date) {
  let dateString = convertDateToString(date);

  let formatOne = dateString.day + dateString.month + dateString.year; //   ddmmyyyy
  let formatTwo = dateString.month + dateString.day + dateString.year; //   mmddyyyy
  let formatThree = dateString.year + dateString.month + dateString.day; //   yyyymmdd
  let formatFour =
    dateString.day + dateString.month + dateString.year.slice(-2); //   ddmmyy
  let formatFive =
    dateString.month + dateString.day + dateString.year.slice(-2); //   mmddyy
  let formatSix = dateString.year.slice(-2) + dateString.month + dateString.day; //   yymmdd

  return [formatOne, formatTwo, formatThree, formatFour, formatFive, formatSix];
}

console.log(getAllDateFormats({ day: 02, month: 04, year: 2000 }));
