import React, { FC } from 'react'
import { Row } from '../../../components/financesTable/TickerTable'
import { useWsConnectQuery } from '../../../store/services/endpoints/wsApi'
import { StyledModule } from '../../styles'
import { processDataAndVector } from '../services'

const AllFinanceModule: FC<{ cachingDataCount: number }> = ({ cachingDataCount }) => {
  const {
    isLoading, isSuccess, data
  } = useWsConnectQuery(cachingDataCount)

  const spawnRows = () => {
    if (isSuccess && data && !!data.length) {
      return processDataAndVector(data).map((item) => <Row key={`${item.ticker}`} {...item} />)
    }
  }

  return (
    <StyledModule>
      <h3>You may be interested in</h3>
      {(isSuccess && data && !!data.length)
        ? (
          <div className="spawn-wrapper">
            {spawnRows()}
          </div>
        )
        : '...loading'}
    </StyledModule>
  )
}

export default AllFinanceModule
