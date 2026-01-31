const dateInput = document.getElementById("date-input");
const calcBtn = document.getElementById("calc-age-btn");

const yearsEl = document.getElementById("years");
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");

// Main function
const ageCalculate = () => {
  if (!dateInput.value) {
    alert("Please select your date of birth");
    return;
  }

  const birthDate = new Date(dateInput.value);
  const today = new Date();

  if (birthDate > today) {
    alert("Not born yet!");
    displayResult("-", "-", "-");
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust days and months when negative
  if (days < 0) {
    months--;

    // Get days in previous month
    const prevMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();

    days += prevMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  displayResult(years, months, days);
};

// Display function
const displayResult = (years, months, days) => {
  yearsEl.textContent = years;
  monthsEl.textContent = months;
  daysEl.textContent = days;
};

// Event
calcBtn.addEventListener("click", ageCalculate);

dateInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") ageCalculate();
});