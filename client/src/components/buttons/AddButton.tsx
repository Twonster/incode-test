import React, { FC, memo } from 'react'
import { FaPlus, FaCheck } from 'react-icons/fa'
import { AddButtonShapeProps, StyledAddButton } from './styles'

interface AddButtonProps {
  isChecked: boolean
  shape: AddButtonShapeProps
  action: () => void
}

export const AddButton: FC<AddButtonProps> = memo(({
  children, isChecked, shape, action
}) => {
  return (
    <StyledAddButton isChecked={isChecked} onClick={action} shape={children ? 'rect' : shape}>
      {!!children && (isChecked ? <FaCheck /> : children)}
      {!children && (isChecked ? <FaCheck /> : <FaPlus />)}
    </StyledAddButton>
  )
}, (prev, current) => prev.isChecked === current.isChecked)
