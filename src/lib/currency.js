export function FormatCurrency(amount, format = "en-NP", currency = "NPR") {
  const customSymbol = "Rs";

  const formattedAmount = new Intl.NumberFormat(format, {
    style: "currency",
    currency: currency,
  }).format(Number(amount));

  return formattedAmount.replace(/NPR/g, customSymbol);
}
