function removeDups(obj, uniqueKey) {
  return obj.reduce((uniques, curr) => { 
    if (uniques.every(objToFIlter => objToFIlter[uniqueKey] !== curr[uniqueKey])) {
      uniques.push(curr);
    }
    return uniques;
  }, []);
}

module.exports = {
  removeDups,
};
