import { Pipe, PipeTransform } from '@angular/core';
import {
  egpToUsd,
  formatCompactPairFromUsd,
  formatMoneyPairFromEgp,
  formatMoneyPairFromUsd,
  usdToEgp,
} from '../utils/money.util';

@Pipe({ name: 'moneyPair', standalone: true })
export class MoneyPairPipe implements PipeTransform {
  /**
   * @param amount numeric amount
   * @param unit 'usd' | 'egp' — which currency the amount is stored in
   * @param compact optional compact K/M formatting
   */
  transform(
    amount: number | null | undefined,
    unit: 'usd' | 'egp' = 'usd',
    compact = false
  ): string {
    if (amount == null || Number.isNaN(amount)) {
      return '';
    }
    if (unit === 'egp') {
      return formatMoneyPairFromEgp(amount);
    }
    return compact
      ? formatCompactPairFromUsd(amount)
      : formatMoneyPairFromUsd(amount);
  }
}

@Pipe({ name: 'asEgp', standalone: true })
export class AsEgpPipe implements PipeTransform {
  transform(usd: number | null | undefined): number {
    return usd == null ? 0 : usdToEgp(usd);
  }
}

@Pipe({ name: 'asUsd', standalone: true })
export class AsUsdPipe implements PipeTransform {
  transform(egp: number | null | undefined): number {
    return egp == null ? 0 : egpToUsd(egp);
  }
}
