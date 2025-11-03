export const truncateText = (text: string, max: number) => text.length > max ? `${text.substring(0, max)}...` : text;

export const getDaysInMonth = (month: number, year: number) => {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}
