import React, {
  FC, useRef
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RenderedTicker } from '../../modules/finances/interfaces'
import { TickersSliceState, toggleTicker } from '../../store/slices/tickersSlice'
import { RootState } from '../../store/store'
import useComponentDimensions from '../../utils/hooks/useComponentDimensions'
import { AddButton } from '../buttons/AddButton'
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
  const dispatch = useDispatch()

  const { selectedTickers } = useSelector<RootState, TickersSliceState>((store) => store.tickers)
  const { width } = useComponentDimensions(ref)

  const toggleToAdded = () => {
    dispatch(toggleTicker(ticker[0]))
  }

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
      <AddButton
        isChecked={selectedTickers.includes(ticker[0])}
        shape="circle"
        action={toggleToAdded}
      />
    </StyledRow>
  )
}
