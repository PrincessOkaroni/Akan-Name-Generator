function generateAkanName() {
  const birthday = document.getElementById("birthday").value;
  const gender = document.getElementById("gender").value;
  const result = document.getElementById("result");

  if (!birthday || !gender) {
    result.textContent = "Please enter a valid date and select your gender.";
    return;
  }

  const date = new Date(birthday);
  const dayOfWeek = calculateDayOfWeek(date);

  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  let akanName;
  if (gender === "male") {
    akanName = maleNames[dayOfWeek];
  } else if (gender === "female") {
    akanName = femaleNames[dayOfWeek];
  }

  result.textContent = `Your Akan name is ${akanName}`;
}

function calculateDayOfWeek(date) {
  const CC = Math.floor(date.getFullYear() / 100);
  const YY = date.getFullYear() % 100;
  const MM = date.getMonth() + 1;
  const DD = date.getDate();
  return (
    (Math.floor(CC / 4 - 2 * CC - 1) +
      Math.floor((5 * YY) / 4) +
      Math.floor((26 * (MM + 1)) / 10) +
      DD) %
    7
  );
}
