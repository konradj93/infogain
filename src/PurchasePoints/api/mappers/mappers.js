export const mappPurchaseDateStringToDate = (collection) => collection.map((el) => ({ ...el, date: new Date(el.date) }));
