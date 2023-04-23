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
//function that converts minutes to hours with minutes

export const getHoursFromMins = mins => {
  const hours = Number.parseInt(Number.parseInt(mins) / 60);
  const minutes = Number.parseInt(Number.parseInt(mins) % 60);

  if (hours === 1 && minutes !== 0) return hours + ' hour ' + minutes + ' mins';

  if (hours === 1 && minutes === 0) {
    return hours + ' hour ';
  }

  if (hours > 1 && minutes !== 0) return hours + ' hours ' + minutes + ' mins';

  if (hours > 1 && minutes === 0) {
    return hours + ' hours ';
  }

  return minutes + ' mins';
};
