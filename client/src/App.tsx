import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'

import AllTickersModule from './modules/finances/view/AllTickersModule'
import SelectedTickersModule from './modules/finances/view/SelectedTickersModule'
import { initialiseState, TickersSliceState } from './store/slices/tickersSlice'
import { RootState } from './store/store'

const StyledApp = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const App: FC = () => {
  const [cachingDataCount, setCachingDataCount] = useState(2)
  const { selectedTickers } = useSelector<RootState, TickersSliceState>((store) => store.tickers)
  const dispatcher = useDispatch()

  useEffect(() => {
    dispatcher(initialiseState())
  }, [])

  return (
    <StyledApp>
      {!!selectedTickers.length && <SelectedTickersModule cachingDataCount={cachingDataCount} />}
      <AllTickersModule cachingDataCount={cachingDataCount} />
      <GlobalStyles />
    </StyledApp>
  )
}

export default App
