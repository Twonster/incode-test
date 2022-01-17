import React, { FC } from 'react'
import { StyledAddButton } from './styles'

export const AddButton: FC<{  }> = ({ children }) => {
  return <StyledAddButton>{children}</StyledAddButton>
}
