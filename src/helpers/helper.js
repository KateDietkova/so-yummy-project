//function, that create arr for coooking time(5min-120min)

export const cookingTimeOptions = (() => {
  const start = 5;
  const end = 120;
  const range = [];
  for (let i = start; i <= end; i += 5) {
    range.push(i);
  }
  return range.map(item => ({
    value: item.toString() + 'min',
    label: item.toString() + 'min',
  }));
})();
//----------------------------------------------------------------------------
//function that converts minutes to hours

export const getHoursFromMins = mins => {
  const hours = Number.parseInt(mins / 60);
  const minutes = mins % 60;
  if (hours > 1) return hours + ' hours ' + minutes + ' mins';
  return hours + ' hour ' + minutes + ' mins';
};
