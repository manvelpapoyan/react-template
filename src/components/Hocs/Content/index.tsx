import Box from '@mui/material/Box'
import { StyledWrapper } from './styled'

const ContentWrapper = ({ children }: any) => {
  return (
    <StyledWrapper>
      <Box>{children}</Box>
    </StyledWrapper>
  )
}

export default ContentWrapper
