import React, { FC, memo, ReactNode } from 'react'
import { Vector } from '../../modules/financeModule'
import { VectorViewType, StyledNode, StyledVector } from './styles'

interface NodeProps {
  filled?: boolean
  vector?: Vector
  vectorviewType?: VectorViewType
}

export const TickerNode: FC<NodeProps> = memo(({
  vector, children, vectorviewType, filled
}) => {
  return (
    <StyledNode filled={filled} vectorType={vector}>
      <div className="wrapper">
        {vector && <StyledVector vector={vector} vectorGliph={vectorviewType} />}
        <span className="main-text">{children}</span>
      </div>
    </StyledNode>
  )
})
