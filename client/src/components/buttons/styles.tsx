import styled, { css } from 'styled-components'

export type AddButtonShapeProps = 'square' | 'circle'
interface StyledAddButtonProps {
  shape: AddButtonShapeProps | 'rect'
  isChecked: boolean
}

interface StyledShowMoreButtonProps {
  expanded: boolean
}

const StyledGlobalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #8b8b8b;
  border: 2px solid #8b8b8b;
  background-color: transparent;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`

export const StyledAddButton = styled(StyledGlobalButton)<StyledAddButtonProps>`
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
`

export const StyledShowMoreButton = styled(StyledGlobalButton)<StyledShowMoreButtonProps>`
  border-radius: 50%;
`
