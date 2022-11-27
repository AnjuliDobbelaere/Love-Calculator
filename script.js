window.onload = function () {
  let button = document.getElementById("calculate-button");
  button.addEventListener("click", calculateLove);
};

function calculateLove() {
  let yourName = document.getElementById("your-name").value;
  let crushName = document.getElementById("crush-name").value;

  if (yourName != "" && crushName != "") {
    let percentage = Math.floor(Math.random() * 101);

    document.getElementById("result-message").innerText =
      yourName + " & " + crushName + " have a love score of: ";
    document.getElementById("result-percentage").innerText =
      percentage.toString() + "%";
  }
}
