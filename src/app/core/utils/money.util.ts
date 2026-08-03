/**
 * Case-study conversion for dual USD / EGP display.
 * Budget and risk impacts in the final document are authored in USD.
 */
export const EGP_PER_USD = 50;

export function usdToEgp(usd: number): number {
  return Math.round(usd * EGP_PER_USD);
}

export function egpToUsd(egp: number): number {
  return Math.round(egp / EGP_PER_USD);
}

export function formatUsd(amount: number): string {
  return `$${amount.toLocaleString('en-US')}`;
}

export function formatEgp(amount: number): string {
  return `${amount.toLocaleString('en-US')} EGP`;
}

export function formatMoneyPairFromUsd(usd: number): string {
  return `${formatUsd(usd)} · ${formatEgp(usdToEgp(usd))}`;
}

export function formatMoneyPairFromEgp(egp: number): string {
  return `${formatUsd(egpToUsd(egp))} · ${formatEgp(egp)}`;
}

export function formatCompactUsd(usd: number): string {
  if (usd >= 1_000_000 && usd % 1_000_000 === 0) {
    return `$${usd / 1_000_000}M`;
  }
  if (usd >= 1_000 && usd % 1_000 === 0) {
    return `$${usd / 1_000}K`;
  }
  return formatUsd(usd);
}

export function formatCompactEgp(egp: number): string {
  if (egp >= 1_000_000 && egp % 1_000_000 === 0) {
    return `${egp / 1_000_000}M EGP`;
  }
  if (egp >= 1_000 && egp % 1_000 === 0) {
    return `${egp / 1_000}K EGP`;
  }
  return formatEgp(egp);
}

export function formatCompactPairFromUsd(usd: number): string {
  return `${formatCompactUsd(usd)} · ${formatCompactEgp(usdToEgp(usd))}`;
}
