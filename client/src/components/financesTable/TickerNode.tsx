import React, { FC, memo } from 'react'
import { Vector } from '../../modules/finances/interfaces'
import { VectorViewType, StyledNode, StyledVector } from './styles'

interface NodeProps {
  filled?: boolean
  vector?: Vector
  vectorviewType?: VectorViewType
  title?: string
}

export const TickerNode: FC<NodeProps> = memo(
  ({
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
  },
  (prev, current) => {
    if (prev.children || current.children) {
      return prev.children?.toString() === current.children?.toString()
    } else if (prev.vector || current.vector) {
      return prev.vector === current.vector
    } else {
      return false
    }
  }
)
