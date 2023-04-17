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
