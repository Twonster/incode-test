import React, { FC, memo } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { StyledShowMoreButton } from './styles'

interface ShowMoreButtonProps {
  expanded: boolean
  action: () => void
}

export const ShowMoreButton: FC<ShowMoreButtonProps> = memo(({
  expanded, action
}) => {
  return (
    <StyledShowMoreButton expanded={expanded} onClick={action}>
      {expanded ? <FaChevronUp /> : <FaChevronDown />}
    </StyledShowMoreButton>
  )
}, (prev, current) => prev.expanded === current.expanded)
