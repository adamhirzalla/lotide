const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item] && results[item])
      results[item] += 1;
    else if (itemsToCount[item])
      results[item] = 1;
  }
  return results;
};

module.exports = countOnly;