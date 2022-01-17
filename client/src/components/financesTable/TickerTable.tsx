import React, {
  FC, useRef
} from 'react'
import { RenderedTicker } from '../../modules/financeModule'
import useComponentDimensions from '../../utils/hooks/useComponentDimensions'
import { StyledRow } from './styles'
import { TickerName } from './TickerName'
import { TickerNode } from './TickerNode'

export const Row: FC<RenderedTicker> = ({
  change,
  change_percent: changePercent,
  price,
  ticker,
  vector
  // last_trade_time: lastTradeTime,
  // dividend,
  // exchange,
  // yield: income
}) => {
  const ref = useRef(null)

  const { width } = useComponentDimensions(ref)
  // const date = new Date(lastTradeTime)
  // const fullTime = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
  return (
    <StyledRow ref={ref}>
      <TickerName dimensions={width} data={ticker} />
      <TickerNode>
        {price}
        {' '}
        $
      </TickerNode>
      <TickerNode vector={vector} vectorviewType="arifmetic">
        {change}
        {' '}
        $
      </TickerNode>
      <TickerNode filled vector={vector} vectorviewType="arrow">
        {changePercent}
        {' '}
        %
      </TickerNode>
    </StyledRow>
  )
}
