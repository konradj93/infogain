const groupElementsByDate = (arr) =>
  arr.reduce((acc, curr) => {
    const month = curr.date.getMonth();
    const fullMonthName = curr.date.toLocaleString("en", { month: "long" });
    const year = curr.date.getFullYear();
    const day = curr.date.getDay();
    const key = `${year}-${month}`;
    const obj = acc.find((el) => el.key === key);
    if (obj) {
      obj.transactions.push({ id: curr.id, amount: curr.amount, day });
    } else {
      acc.push({
        key,
        year,
        month,
        fullMonthName,
        transactions: [{ id: curr.id, amount: curr.amount, day }],
      });
    }
    return acc;
  }, []);

export default groupElementsByDate;
