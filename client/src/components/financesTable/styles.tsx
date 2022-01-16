import styled, { css } from 'styled-components'

export const StyledRow = styled.div`
  &:first-child {
    border-top: 1px solid #8b8b8b;
  }

  display: flex;
  border-bottom: 1px solid #8b8b8b;
  align-items: center;
  height: 50px;
`

export const StyledNode = styled.div`
  flex: 1;
  padding: 2px 5px;
  margin: 2px;
  text-align: right;
  white-space: nowrap;
`

export const StyledTickerName = styled.div<{ winWidth: number }>`

  display: flex;
  width: 20%;
  min-width: 160px;
  flex: 1;
  transition: all .3s;
  
  ${(props) => props.winWidth < 700 && css`
    && {
      flex-direction: column;
      min-width: 100px;
      .name {
        font-size: .8em;
        font-weight: normal;
      }
    }
  `};

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
`
