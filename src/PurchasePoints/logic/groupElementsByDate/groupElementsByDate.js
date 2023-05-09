const groupElementsByDate = (arr) =>
  arr.reduce((acc, curr) => {
    const month = curr.date.getMonth();
    const year = curr.date.getFullYear();
    const key = `${year}-${month}`;
    const obj = acc.find((el) => el.key === key);
    if (obj) {
      obj.transactions.push({ id: curr.id, amount: curr.amount });
    } else {
      acc.push({
        key,
        year,
        month,
        transactions: [{ id: curr.id, amount: curr.amount }],
      });
    }
    return acc;
  }, []);

export default groupElementsByDate;
