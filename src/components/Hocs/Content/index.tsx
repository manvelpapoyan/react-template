import { RouteEnum } from '@appTypes/enums/global'
import Box from '@mui/material/Box'
import { StyledWrapper } from './styled'

interface IContent {
  type: RouteEnum
  children: any
}

const Content = ({ type, children }: IContent) => {
  return (
    <StyledWrapper type={type}>
      <Box>{children}</Box>
    </StyledWrapper>
  )
}

export default Content
