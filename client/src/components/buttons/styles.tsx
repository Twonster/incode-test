import styled, { css } from 'styled-components'

export type AddButtonShapeProps = 'square' | 'circle'
interface StyledAddButtonProps {
  shape?: AddButtonShapeProps | 'rect'
  isChecked: boolean
}

export const StyledAddButton = styled.button<StyledAddButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #8b8b8b;
  border: 2px solid #8b8b8b;
  background-color: transparent;
  
  ${({ isChecked }) => isChecked && css`
    color: #20a820;
    background-color: rgba(32, 168, 32, 0.2);
    border: 2px solid #20a820;
  `}

  ${({ shape }) => shape === 'circle' && css`
    border-radius: 50%;
    font-weight: bold;
  `}

  ${({ shape }) => shape === 'rect' && css`
    width: fit-content;
    height: fit-content;
    padding: 0%.8em;
    border-radius: 5px;
  `}


  &:hover {}
  &:active {}

`
