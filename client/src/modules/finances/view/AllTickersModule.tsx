import React, { FC, useState, useEffect } from 'react'
import { ShowMoreButton } from '../../../components/buttons/ShowMoreButton'
import { Row } from '../../../components/financesTable/TickerRow'
import { useWsConnectQuery } from '../../../store/services/endpoints/wsApi'
import { getStorageItem } from '../../../utils/global/localStorageService'
import { StyledModule } from '../../styles'
import { processDataAndVector } from '../services'

const AllFinanceModule: FC<{ cachingDataCount: number }> = ({ cachingDataCount }) => {
  const [moduleIsExpanded, setModuleIsExpanded] = useState(false)

  const {
    isSuccess, data, isLoading
  } = useWsConnectQuery(cachingDataCount, {
    skip: !moduleIsExpanded
  })

  const spawnRows = () => {
    if (isSuccess && data && !!data.length) {
      return processDataAndVector(data).map((item) => <Row key={`${item.ticker}`} {...item} />)
    }
  }

  useEffect(() => {
    setModuleIsExpanded(!getStorageItem<string[]>('ticker'))
  }, [])

  return (
    <StyledModule
      disabled={!moduleIsExpanded}
      onClick={!moduleIsExpanded ? () => setModuleIsExpanded(!moduleIsExpanded) : undefined}
    >
      <div className="title">
        <h3>You may be interested in</h3>
        <ShowMoreButton expanded={moduleIsExpanded} action={() => setModuleIsExpanded(!moduleIsExpanded)} />
      </div>
      {(isSuccess && data && !!data.length) && (
        <div className="spawn-wrapper">
          {moduleIsExpanded && spawnRows()}
        </div>
      )}
      {isLoading && '...loading'}
    </StyledModule>
  )
}

export default AllFinanceModule
