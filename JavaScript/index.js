document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("checkboxForm");
  const shuffleButton = document.getElementById("shuffleButton");
  const changeButton = document.getElementById("changeButton");
  const showSelectedButton = document.getElementById("showSelectedButton");
  const resultDiv = document.getElementById("result");

  const checkboxValues = ["Internship", "Pabau", "Employment", "Career"];

  shuffleButton.addEventListener("click", function () {
    for (let i = checkboxValues.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [checkboxValues[i], checkboxValues[j]] = [
        checkboxValues[j],
        checkboxValues[i],
      ];
    }
    updateCheckboxLabels();
  });

  changeButton.addEventListener("click", function () {
    checkboxValues.forEach((value, index) => {
      checkboxValues[index] = "Value" + (index + 1);
    });
    updateCheckboxLabels();
  });

  showSelectedButton.addEventListener("click", function () {
    const selectedValues = [];
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedValues.push(checkbox.value);
      }
    });
    resultDiv.textContent = "Selected Values: " + selectedValues.join(", ");
  });

  function updateCheckboxLabels() {
    const labels = form.querySelectorAll("label");
    labels.forEach((label, index) => {
      label.innerHTML = `<input type="checkbox" value="${checkboxValues[index]}" name="option"> ${checkboxValues[index]}`;
    });
  }
});
