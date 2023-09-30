export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
    getIncomeInDollars() {
      return `$${this.income}`;
    },
    getIncomeInEuros() {
      return `${this.income} euros`;
    },

  };

  return budget;
}
