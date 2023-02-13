import { format, isValid, isDate, parse } from "date-fns";

/** List of months to display in month picker */
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

/** List of week name to display in calendar */
export const weekdayName = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

/** Generate list of years to dsplay in year select */
export const yearRange = (from, to) => {
  const currentYear = new Date().getFullYear();
  const totalYears = currentYear > to ? currentYear + 1 - from : to + 1 - from;
  return Array.from({ length: totalYears }, (_, year) => from + year);
};

/**
 * To generate days , weeks for a specific month and year.
 * If a day of a month starts in second day first day is null.
 * Outer array represents month and inner arrays represents weeks and each weeks array contains days
 * Ex: [ [ null, null, "2022-10-31T18:30:00.000Z", ...], ["2022-11-05T18:30:00.000Z", ...], .... ]
 */
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

/**
 * Gets dates in between provided start and end date.
 * EX: [ "2022-10-31T18:30:00.000Z", "2022-10-31T18:30:00.000Z", ..... ]
 */
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

/** Checks if the date is in between selected date range. */
export const isSelected = (dateRange, date) => {
  return dateRange.find((day) => day.getTime() === date.getTime())
    ? true
    : false;
};

/** Calendar navigation to switch between months and year */
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

export const formatDateInput = (date, dateFormat) => {
  if (date) {
    return format(date, dateFormat);
  }
  return null;
};

export const parseTextToDate = (value, dateFormat) => {
  const parsedDate = parse(value, dateFormat, new Date());
  if (isValid(parsedDate) && isDate(parsedDate)) {
    return parsedDate;
  }
  return null;
};

/**
 * Sets start and end date for range and multi view calendar.
 * EX: { "start": "2022-10-31T18:30:00.000Z", "end": "2022-10-31T18:30:00.000Z" }
 */
export const rangeSelect = (date, selectedDateRange) => {
  let range = {
    start: selectedDateRange.start,
    end: selectedDateRange.end,
  };

  if ((range.start && range.end) || range.start > date) {
    range = { start: null, end: null };
  }

  if (!range.start || range.end > date) {
    range.start = date;
  } else {
    range.end = date;
  }
  return range;
};

export const isSameDay = (day1, day2) => {
  if (day1 && day2) {
    return (
      day1.getDate() === day2.getDate() &&
      day1.getMonth() === day2.getMonth() &&
      day1.getFullYear() === day2.getFullYear()
    );
  }
  return false;
};
