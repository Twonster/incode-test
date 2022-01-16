import React, { FC, useState } from 'react'
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'

import FinanceModule from './modules/financeModule'

const StyledApp = styled.div`
  /* display: flex;
  justify-content: center; */
  margin: 0;
  width: 100%;
  height: 100vh;
`

const App: FC = () => {
  // const [isShow, setIsShow] = useState(false)
  return (
    <StyledApp>
      {/* <button onClick={() => setIsShow(!isShow)}>{isShow ? 'HIDE' : 'SHOW'}</button> */}
      <FinanceModule />
      <GlobalStyles />
    </StyledApp>
  )
}

export default App
