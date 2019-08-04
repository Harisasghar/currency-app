import ApiService from './ApiService';

const baseUrl = process.env.REACT_APP_CURRENCY_PATH;
const CurrencyApi = {    
  Convert(baseCurrency: string) {
    return ApiService.get(baseUrl+baseCurrency);
  }
};

export default CurrencyApi;