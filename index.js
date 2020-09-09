// var name = "Malik";
// var surname = "Mukhtar";
// var address = "Penthouse Estate ";
// var height = "77mm";

// console.log({ name, surname, address, height });

// var value = prompt("Enter a value");
// alert(typeof value);

// Excercise
// A. 1. get an input from user through a promt
// 2. if the value is not null nor undefined
// alert the value

// B. 1. get an input from user through a promt
// 2. convert the input to a number
// 3. if the value of the input is greater than or equal to 100
//    alert a message:  " century or above"

// let enterValue = prompt("Enter a Number");

// enterValue == null || enterValue == undefined ? null : alert(enterValue);

// let enterValue = parseInt(prompt("Enter a Number"));

// enterValue >= 100
//   ? alert("Centurt or Above")
//   : alert("Please reload and enter another number");

// 1. Airtime - self
// 2. Airtime - others
// 3. Data
// 4. Transfer

let message = prompt(`1. Airtime - self
2. Airtime - others
3. Data
4. Transfer`);

message = parseInt(message);

if (message == 1) {
  let amount = prompt("Enter Amount");
  var confirmation = confirm("Are you sure");
  if (confirmation == true) {
    alert(`You've just recharged #${parseInt(amount)} airtime`);
  }
} else if (message == 2) {
  prompt("Enter user number");
  let amount = prompt("Enter Amount");
  var confirmation = confirm("Are you sure");
  if (confirmation == true) {
    alert(`#${parseInt(amount)} airtime sent`);
  }
} else if (message == 3) {
  message = prompt(`1. Self
2. Others`);
  message = parseInt(message);
  if (message == 1) {
    let amount = prompt(`1. 100MB
2. 500MB
3. 1GB
4. 5GB`);
    let data = ["100MB", "500MB", "1GB", "5GB"];
    var confirmation = confirm("Are you sure");
    if (confirmation == true) {
      alert(`You've just bought ${data[parseInt(amount) - 1]} Data`);
    }
  } else if (message == 2) {
    let number = prompt("Enter user number");
    let amount = prompt(`1. 100MB
2. 500MB
3. 1GB
4. 5GB`);
    let data = ["100MB", "500MB", "1GB", "5GB"];
    var confirmation = confirm("Are you sure");
    if (confirmation == true) {
      alert(`You've just sent ${data[parseInt(amount) - 1]} Data to ${number}`);
    }
  } else {
    prompt("enter a valid number");
  }
} else if (message == 4) {
  let acct = prompt("Enter account number");
  let amount = prompt("Enter Amount");
  var confirmation = confirm("Are you sure");
  if (confirmation == true) {
    alert(`you just transfered ${parseInt(amount)} to ${acct}`);
  }
} else {
  alert("Enter a valid number");
}
