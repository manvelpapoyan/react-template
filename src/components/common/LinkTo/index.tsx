import React, { memo } from 'react'

import { StyledATag } from './styled'

interface IButton {
  href: string
  children: string | React.ReactNode
}

const LinkTo = ({ children, href }: IButton) => {
  return <StyledATag to={href}>{children}</StyledATag>
}

export default memo(LinkTo)
