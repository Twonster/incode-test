import { STORE } from '../../store/interfaces'

export type Vector = 'up' | 'down'
export interface RenderedTicker extends STORE.Ticker {
  vector?: Vector
}
