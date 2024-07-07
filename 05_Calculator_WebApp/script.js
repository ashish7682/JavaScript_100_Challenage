function A1() {
  let x = document.getElementById("num").value;
  if (x == "") {
    document.getElementById("num").value = "";
  } else {
    document.getElementById("num").value += "+";
  }
}
function A2() {
  let x = document.getElementById("num").value;
  if (x == "") {
    document.getElementById("num").value = "";
  } else {
    document.getElementById("num").value += "-";
  }
}
function A3() {
  let x = document.getElementById("num").value;
  if (x == "") {
    document.getElementById("num").value = "";
  } else {
    document.getElementById("num").value += "*";
  }
}
function A4() {
  let x = document.getElementById("num").value;
  if (x == "") {
    document.getElementById("num").value = "";
  } else {
    document.getElementById("num").value += "/";
  }
}
function A5() {
  let x = document.getElementById("num").value;
  if (x == "") {
    document.getElementById("num").value = "";
  } else {
    document.getElementById("num").value += "%";
  }
}
function myfunction() {
  let x = document.getElementById("num").value;
  if (x == "") {
    document.getElementById("num").value = "";
  } else {
    num.value = eval(x);
  }
}
