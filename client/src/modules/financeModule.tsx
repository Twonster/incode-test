import React, { FC } from 'react'
import styled from 'styled-components'
import { Row } from '../components/financesTable/TickerTable'
import { useWsConnectQuery } from '../store/services/endpoints/wsApi'

const StyledModule = styled.div`
  font-size: 14px;
  padding: 1em;
`

const FinanceModule: FC = () => {
  const { isLoading, isSuccess, data } = useWsConnectQuery(5)

  const spawnRows = () => {
    if (isSuccess && data && data.length) {
      return data[data.length - 1].map((item) => <Row key={`${item.ticker}`} {...item} />)
    }
  }

  return (
    <StyledModule>
      {isLoading && 'Loading...'}

      {(isSuccess && !isLoading && !!data?.length)
        ? (
          <div>
            {/* <Head /> */}
            {spawnRows()}
          </div>
        )
        : '...loading'}
    </StyledModule>
  )
}

export default FinanceModule
