export interface CurrencyRate {
  baseCurrency: string;
  quoteCurrency: string;
  country: string;
  updatedDate: Date;
  amount: number;
  buyRateTransfer: number;
  sellRateTransfer: number;
  midRate: number;
  changeInMidRate: number;
  previousMidRate: number;
  buyRateCash: number;
  sellRateCash: number
}