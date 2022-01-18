import { createSlice } from '@reduxjs/toolkit'
import {
  removeStorageItem, addStorageItem, getStorageItem
} from '../../utils/global/localStorageService'

export interface TickersSliceState {
  isLoading: boolean
  selectedTickers: string[]
}

const initialState : TickersSliceState = {
  isLoading: false,
  selectedTickers: []
}

const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    toggleTicker(state, { payload }: { payload: string }) {
      if (state.selectedTickers.includes(payload)) {
        const data = state.selectedTickers.filter((item) => item !== payload)

        addStorageItem('ticker', data)
        if (!getStorageItem<string[]>('ticker')?.length) {
          removeStorageItem('ticker')
        }

        state.selectedTickers = data
      } else {
        const data = [...state.selectedTickers, payload]

        addStorageItem('ticker', data)

        state.selectedTickers = data
      }
    },
    initialiseState(state) {
      const payload = getStorageItem('ticker')

      if (Array.isArray(payload)) {
        state.selectedTickers = payload
      }
    }
  }
})

export const { toggleTicker, initialiseState } = tickersSlice.actions
export default tickersSlice
