interface IRequest {
  income: number;
  expenses: number;
}

export async function calculateEfficiency(
  results: IRequest[],
): Promise<number> {
  const { expenses, income } = results.reduce(
    (totalResult, currentResult) => ({
      income: totalResult.income + currentResult.income,
      expenses: totalResult.expenses + currentResult.expenses,
    }),
    { income: 0, expenses: 0 },
  );

  return expenses / income;
}
