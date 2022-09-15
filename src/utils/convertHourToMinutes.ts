// 10:00 => 1000

export function convertHourToMinutes(hourString: String) {
  const [hours, minutes] = hourString.split(":").map(Number);
  const minutesAmout = hours * 60 + minutes;

  return minutesAmout;
}
