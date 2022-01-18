import React, { FC, memo } from 'react'
import { StyledTickerName } from './styles'

export interface TickerNameProps {
  data: string[]
  dimensions: number
  title?: string
}

export const TickerName: FC<TickerNameProps> = memo(
  ({ data: [abbr, fullName], dimensions }) => {
    return (
      <StyledTickerName winWidth={dimensions}>
        <span className="abbr">{abbr}</span>
        <span className="name">{fullName}</span>
      </StyledTickerName>
    )
  },
  (prev, next): boolean => (prev.dimensions === next.dimensions && prev.data.join('_') === next.data.join('_'))
)
