document.getElementById("submit").addEventListener("click", getEMI);

function getEMI() {
  let amount = document.getElementById("amount").value;
  let interest = document.getElementById("rate").value;
  let tenure = document.getElementById("tenure").value;

  //...........calculate intrest.............

  let interestRate = (amount * (amount * 0.01)) / tenure;

  //..........EMI calculate.................
  const total = (amount / tenure + interestRate).toFixed(2);

  document.getElementById("result").innerHTML = total;
}
