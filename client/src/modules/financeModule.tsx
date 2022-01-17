import React, { FC } from 'react'
import styled from 'styled-components'
import { Row } from '../components/financesTable/TickerTable'
import { STORE } from '../store/interfaces'
import { useWsConnectQuery } from '../store/services/endpoints/wsApi'

const StyledModule = styled.div`
  font-size: 16px;
  padding: 1em;
`
export type Vector = 'up' | 'down'
export interface RenderedTicker extends STORE.Ticker {
  vector?: Vector
}

const FinanceModule: FC = () => {
  const {
    isLoading, isSuccess, data
  } = useWsConnectQuery(2)

  const processVector = (tikers: STORE.Ticker[][]): RenderedTicker[] => {
    if (tikers.length >= 2) {
      const [prev, current] = tikers
      return current.map((item, i) => {
        return { ...item, vector: prev[i].price < item.price ? 'up' : 'down' }
      })
    } else {
      return tikers[0]
    }
  }

  const spawnRows = () => {
    if (isSuccess && data && !!data.length) {
      return processVector(data).map((item) => <Row key={`${item.ticker}`} {...item} />)
    }
  }

  return (
    <StyledModule>
      {(isSuccess && data && !!data.length)
        ? (
          <div>
            {spawnRows()}
          </div>
        )
        : '...loading'}
    </StyledModule>
  )
}

export default FinanceModule
