const without = (source, itemsToRemove) => {
  const filtered = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element))
      filtered.push(element);
  }
  return filtered;
};

module.exports = without;