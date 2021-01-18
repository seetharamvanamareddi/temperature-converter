const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);
    // console.log(e.target.name + ":" + value);

    switch (e.target.name) {
      case "celsius":
        fahrenheitInput.value = value * 1.8 + 32;
        break;
      case "fahrenheit":
        celsiusInput.value = (value - 32) / 1.8;
        break;
    }
  });
}
