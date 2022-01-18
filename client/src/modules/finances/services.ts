import { STORE } from '../../store/interfaces'
import { RenderedTicker } from './interfaces'

export const processDataAndVector = (tikers: STORE.Ticker[][]): RenderedTicker[] => {
  if (tikers.length >= 2) {
    const [prev, current] = tikers
    return current.map((item, i) => {
      return { ...item, vector: prev[i].price < item.price ? 'up' : 'down' }
    })
  } else {
    return tikers[0]
  }
}
