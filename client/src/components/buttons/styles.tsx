import styled, { css } from 'styled-components'

interface StyledAddButtonProps {
  size?: 'small' | 'standart' | 'large' // default - standart
}

export const StyledAddButton = styled.div<StyledAddButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  ${(props) => props.size && css`
  `}


`
