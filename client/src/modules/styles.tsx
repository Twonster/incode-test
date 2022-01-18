import styled, { css } from 'styled-components'

interface StyledModuleProps {
  disabled?: boolean
}

export const StyledModule = styled.div<StyledModuleProps>`
  font-size: 16px;
  padding: 1em;
  box-shadow: 0 4px 20px rgb(0 0 0 / 25%);
  margin: 1em;
  border-radius: 0.5em;
  height: fit-content;
  transition: 0.3s;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  ${(props) => props.disabled && css`
    box-shadow: 0 0 5px rgb(0 0 0 / 25%);
    cursor: pointer;
  
    &:hover {
      box-shadow: 0 0 10px rgb(0 0 0 / 25%);
    }
  `}
`
