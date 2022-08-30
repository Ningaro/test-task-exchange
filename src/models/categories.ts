export type CashT = 'CASHUSD' | 'CASHRUB'
export type BanksT = 'ACRUB' | 'SBERRUB' | 'TCSBRUB'
export type CryptoT = 'BTC' | 'ETH' | 'USDTTRC'
export type AllT = CashT | BanksT | CryptoT

export interface ICategory {
  title: 'Криптовалюты' | 'Банки' | 'Наличные' | 'Всё'
  elems: AllT[]
}
