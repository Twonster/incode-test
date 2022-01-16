import { io } from 'socket.io-client'
import { appApi } from '../ApiService'

import { constants } from '../../../constants'

export interface Ticker {
  ticker: string[],
  exchange: string,
  price: number,
  change: number,
  change_percent: number,
  dividend: number,
  yield: number,
  last_trade_time: Date,
}

enum EventType {
  start = 'start',
  disconnect = 'disconnect',
  ticker = 'ticker'
}

export const wsApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    wsConnect: build.query<Ticker[][], number>({
      queryFn: () => ({ data: [] }),
      keepUnusedDataFor: 0, // время кеширования после размонтирования
      async onCacheEntryAdded(cacheLimit, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        const socket = io(constants.API.endpoint_dev)

        await cacheDataLoaded
        socket.emit(EventType.start)

        socket.on(EventType.ticker, (event) => {
          updateCachedData((draft) => {
            if (draft.length < cacheLimit) {
              draft.push(event)
            } else {
              draft.push(event)
              draft.shift()
            }
          })
        })

        await cacheEntryRemoved
        socket.disconnect() // использую disconnect вместо close
      }
    })
  }),
  // overrideExisting:
  // false - расширяет уже существующий фнукционал appApi,
  // true - переопределяет
  overrideExisting: false
})

// useSubscribeToEventsQuery - хук, необходимо использовать в компоненте для подписки на событе
export const { useWsConnectQuery } = wsApi
