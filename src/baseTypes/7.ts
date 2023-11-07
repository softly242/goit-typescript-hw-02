/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/


enum TypeDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function isWeekend(day: TypeDay): boolean {
  return day === TypeDay.Saturday || day === TypeDay.Sunday;
}

/* 
const todayDay = new Date().getDay();


console.log(isWeekend(todayDay)); */