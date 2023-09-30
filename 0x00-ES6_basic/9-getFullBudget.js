export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
    getIncomeInDollars(inc) {
      return `$${inc}`;
    },
    getIncomeInEuros(inc) {
      return `${inc} euros`;
    },

  };

  return budget;
}
