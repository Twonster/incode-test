import React, { FC } from 'react'
import { Row } from '../../../components/financesTable/TickerRow'
import { useWsConnectQuery } from '../../../store/services/endpoints/wsApi'
import { getStorageItem } from '../../../utils/global/localStorageService'
import { StyledModule } from '../../styles'
import { processDataAndVector } from '../services'

const SelectedTickersModule: FC<{ cachingDataCount: number }> = ({ cachingDataCount }) => {
  const { tickersData } = useWsConnectQuery(cachingDataCount, {
    selectFromResult: (select) => ({ tickersData: select.data })
  })

  const spawnRows = () => {
    if (tickersData && !!tickersData.length) {
      return processDataAndVector(tickersData)
        .filter((item) => getStorageItem<string[]>('ticker')?.includes(item.ticker[0]))
        .map((item) => <Row key={`${item.ticker}`} {...item} />)
    }
  }

  return (
    <StyledModule>
      <h3>Added tickers</h3>
      {(tickersData && !!tickersData.length)
        ? (
          <div className="spawn-wrapper">
            {spawnRows()}
          </div>
        )
        : '...loading'}
    </StyledModule>
  )
}

export default SelectedTickersModule
