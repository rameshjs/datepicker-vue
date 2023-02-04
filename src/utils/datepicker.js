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

const WEEK_LENGTH = 7;
export const getWeeksForMonth = (month, year) => {
  const firstOfMonth = new Date(year, month, 1);
  const firstDayOfWeek = firstOfMonth.getDay();
  const weeks = [[]];

  let currentWeek = weeks[0];
  let currentDate = firstOfMonth;

  // Appends null to weeks array if the month does not starts on the specific day of week.
  const orderedWeekday = [...Array(WEEK_LENGTH).keys()];
  Array.from({ length: orderedWeekday.indexOf(firstDayOfWeek) }, () => {
    currentWeek.push(null);
  });

  /**
   * Executes until all the dates have been appended to weeks array of the provided month.
   */
  while (currentDate.getMonth() === month) {
    if (currentWeek.length === WEEK_LENGTH) {
      currentWeek = [];
      weeks.push(currentWeek);
    }

    currentWeek.push(currentDate);
    currentDate = new Date(year, month, currentDate.getDate() + 1);
  }

  while (currentWeek.length < WEEK_LENGTH) {
    currentWeek.push(null);
  }

  return weeks;
};

export const getDatesInRange = (selectedDateRange) => {
  const dates = [];

  const start = selectedDateRange?.start;
  const end = selectedDateRange?.end;

  if (start && end) {
    const date = new Date(start.getTime());

    while (date <= end) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  }
  return dates;
};

export const isSelected = (dateRange, date) => {
  return dateRange.find((day) => day.getTime() === date.getTime())
    ? true
    : false;
};

export const nextMonth = (month, year) => {
  if (month > 10) {
    return { month: 0, year: year + 1 };
  } else {
    return { month: month + 1, year: year };
  }
};

export const prevMonth = (month, year) => {
  if (month < 1) {
    return { month: 11, year: year - 1 };
  } else {
    return { month: month - 1, year: year };
  }
};
