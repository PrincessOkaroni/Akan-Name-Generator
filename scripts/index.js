function generateAkanName() {
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);
    const date = parseInt(document.getElementById("date").value);
    const gender = document.getElementById("gender").value;
    const result = document.getElementById("result");

    if (!year || !month || !date || !gender) {
      result.textContent = "Please fill in all fields correctly.";
      return;
    }
    if (year < 1900 || year > 2025) {
      document.getElementById("result").textContent = "Year must be between 1900 and 2025.";
      return;
  }

  // Validate month
  if (month < 1 || month > 12) {
      document.getElementById("result").textContent = "Month must be between 1 and 12.";
      return;
  }

  // Validate day
  if (date < 1 || date > 31) {
      document.getElementById("result").textContent = "Day must be between 1 and 31.";
      return;
  }

  // Validate day against the month
  const daysInMonth = new Date(year, month, 0).getDate(); // Get days in the month
  if (date > daysInMonth) {
      document.getElementById("result").textContent = Invalid day for the given month. ${month}/${year} has only ${daysInMonth} days.;
      return;
  }

  // If all validations pass
  result.style.color = "green";
  result.textContent = Valid date: ${year}-${month.toString().padStart(2, "0")}-${date.toString().padStart(2, "0")};
result.textContent = Valid date: ${year}-${month.toString().padStart(2, "0")}-${date.toString().padStart(2, "0")};

  // Correct day-of-week calculation formula
  const CC = Math.floor(year / 100); // Century
  const YY = year % 100; // Year within the century
  const MM = month; // Month
  const DD = date; // Date

    // Adjust months and years for Zeller's congruence
    const adjustedMonth = MM < 3 ? MM + 12 : MM;
    const adjustedYear = MM < 3 ? year - 1 : year;

    // Day-of-week calculation using Zeller's formula
    const dayOfWeek = Math.floor(
      (DD + Math.floor((13 * (adjustedMonth + 1)) / 5) + adjustedYear % 100 + Math.floor((adjustedYear % 100) / 4) +
        Math.floor((adjustedYear / 100) / 4) - 2 * Math.floor(adjustedYear / 100)) %
        7
    );

    // Adjust day-of-week (0=Saturday, ..., 6=Friday)
    const correctedDayOfWeek = (dayOfWeek + 7) % 7;

    // Akan names
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afia", "Ama"];

    // Get Akan name
    let akanName = "";
    if (gender === "male") {
      akanName = maleNames[correctedDayOfWeek];
    } else if (gender === "female") {
      akanName = femaleNames[correctedDayOfWeek];
    }

    // Display result
    result.textContent = Your Akan name is: ${akanName};
    const dateInput = document.getElementById('dateInput');
  }