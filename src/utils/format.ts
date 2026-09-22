const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
};

export function truncateTitle(title: string, maxLength = 50): string {
  if (title.length <= maxLength) {
    return title;
  }
  return `${title.slice(0, maxLength)}…`;
}

export function formatPrice(price: string, currencyCode: string): string {
  const numericPrice = Number(price);
  const formatted = numericPrice.toFixed(2);

  const symbol = CURRENCY_SYMBOLS[currencyCode];
  if (symbol) {
    return `${symbol}${formatted}`;
  }
  return `${currencyCode} ${formatted}`;
}