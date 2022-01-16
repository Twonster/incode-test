import React, { FC, memo, useRef } from 'react'
import { Ticker } from '../../store/services/endpoints/wsApi'
import useComponentDimensions from '../../utils/hooks/useWindowDimensions'
import { StyledNode, StyledRow } from './styles'
import { TickerName } from './TickerName'

const Node: FC = memo(({ children }) => {
  return (
    <StyledNode>
      {children || 'no data'}
    </StyledNode>
  )
})

export const Row: FC<Ticker> = ({
  change,
  dividend,
  change_percent: changePercent,
  exchange,
  last_trade_time: lastTradeTime,
  price,
  ticker,
  yield: income
}) => {
  const ref = useRef(null)

  const { width } = useComponentDimensions(ref)
  const date = new Date(lastTradeTime)
  const fullTime = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
  return (
    <StyledRow ref={ref}>
      <TickerName dimensions={width} data={ticker} />
      <Node>
        {price}
        {' '}
        $
      </Node>
      <Node>{change}</Node>
      <Node>
        {changePercent}
        {' '}
        %
      </Node>
      <Node>{exchange}</Node>
      <Node>{fullTime}</Node>
      <Node>{income}</Node>
      <Node>{dividend}</Node>
    </StyledRow>
  )
}
