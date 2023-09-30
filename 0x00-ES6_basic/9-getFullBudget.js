export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
    getIncomeInDollars: function(inc) {
      return `$${inc}`;
    },
    getIncomeInEuros: function(inc) {
      return `${inc} euros`;
    },

  };

  return budget;
}
