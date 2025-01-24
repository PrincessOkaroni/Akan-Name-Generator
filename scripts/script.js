function calculateAkanName: (Event);
Event. preventDefault();

document.getElementById("AkanForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const day = parseInt(document.getElementById("Day").value);
  const month = parseInt(document.getElementById("Month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;

  if (!isValidDate(day, month, year)) {
    alert("Please enter a valid date.");
    return;
  }

  const dayOfWeek = calculateDayOfWeek(day, month, year);
  const akanName = getAkanName(dayOfWeek, gender);

  document.getElementById("result").textContent = `Your Akan name is ${akanName}`;
});

function isValidDate(day, month, year) {
  if (day <= 0 || day > 31 || month <= 0 || month > 12) {
    return false;
  }
  return true;
}

function calculateDayOfWeek(day, month, year) {
  const century = Math.floor(year / 100);
  const yearDigits = year % 100;
  const dayOfWeek = ( ( (century / 4) - 2 * century - 1) + ((5 * yearDigits / 4) ) + ((26 * (month + 1) / 10)) + day ) % 7;
  return Math.floor(dayOfWeek);
}

function getAkanName(dayOfWeek, gender) {
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  if (gender === "male") {
    return maleNames[dayOfWeek];
  } else {
    return femaleNames[dayOfWeek];
  }
}