const addition = (arr, prop) => {
  const total = arr.reduce((previous, current) => {
    return previous + current[prop];
  }, 0);
  return total;
};

export { addition };
