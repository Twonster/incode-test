import styled, { css } from 'styled-components'
import { Vector } from '../../modules/financeModule'

export type VectorViewType = 'arrow' | 'arifmetic'

export const StyledRow = styled.div`
  &:first-child {
    border-top: 1px solid #8b8b8b;
  }
  cursor: pointer;
  display: flex;
  border-bottom: 1px solid #8b8b8b;
  align-items: center;
  height: 50px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.035);
  }
`

export const StyledNode = styled.div<{ vectorType?: Vector, filled?: boolean }>`
  flex: 1;
  padding: 2px 5px;
  margin: 2px;
  text-align: right;
  white-space: nowrap;
  font-weight: bold;
  display: flex;
  justify-content: end;

  .wrapper {
    width: fit-content;
    padding: 0.5em;
    border-radius: 5px;
    display: flex;

    ${(props) => props.vectorType === 'up' && css`
      color: #20a820;
      ${props.filled && 'background-color: rgba(98, 255, 98, 0.2)'};
    `};

    ${(props) => props.vectorType === 'down' && css`
      color: #ff6262;
      ${props.filled && 'background-color: rgba(255, 98, 98, 0.2)'};
    `};
  }

`
export const StyledVector = styled.span<{ vector?: Vector, vectorGliph?: VectorViewType }>`
  transition: .3s;
  width: 10px;
  height: 100%;
  display: block;
  position: relative;

  &::before {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2px;

    ${(props) => props.vectorGliph === 'arifmetic' && css`
      ${props.vector === 'up' ? 'content: "+"' : 'content: "-"'};
    `};

    ${(props) => props.vectorGliph === 'arrow' && css`
      ${props.vector === 'up' ? 'content: "↑"' : 'content: "↓"'};
    `};
  }

  ${(props) => props.vector === 'up' && css`
    color: #20a820;
  `};

  ${(props) => props.vector === 'down' && css`
    color: #ff6262;
  `};
`

export const StyledTickerName = styled.div<{ winWidth: number }>`
  display: flex;
  width: 20%;
  min-width: 160px;
  flex: 1;
  transition: all .3s;
  
  span {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .name {
    font-size: 1em;
    font-weight: 600;
  }

  .abbr {
    flex-shrink: 0;
    text-transform: uppercase;
    text-align: center;
    margin-right: .5em ;

    font-weight: bold;
    color: #ffffff;
    font-size: .8em;
    
    background-color: #0070bb;
    padding: 2px;
    border-radius: 3px;
    height: fit-content;
    width: 50px;
  }

  ${(props) => props.winWidth < 700 && css`
    flex-direction: column;
    min-width: 60px;
    .name {
      font-size: .8em;
      font-weight: normal;
    }
  `};
`
