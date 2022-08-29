import { IDirection } from './direction'

export interface IFilter {
  from: IDirection
  to: IDirection[]
}
