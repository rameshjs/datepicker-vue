export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const yearRange = (from, to) => {
  const currentYear = new Date().getFullYear();
  const totalYears = currentYear > to ? currentYear + 1 - from : to + 1 - from;
  return Array.from({ length: totalYears }, (_, year) => from + year);
};

export const weekdayName = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
