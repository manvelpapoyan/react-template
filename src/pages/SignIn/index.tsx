import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Checkbox, FormControlLabel } from '@mui/material'

import Button from '@components/common/Button'
import Input from '@components/common/Input'
import { Wrapper } from './styled'

const data = [
  { label: 'Login', key: 'login', placeholder: 'Your Login', type: 'text' },
  { label: 'Password', key: 'password', placeholder: 'Your Password', type: 'password' }
]

const SignIn = () => {
  return (
    <Wrapper>
      <Typography variant='h1'>Sign In</Typography>
      <Box>
        {data.map((item) => (
          <Input {...item} />
        ))}
      </Box>
      <Box>
        <FormControlLabel control={<Checkbox defaultChecked />} label='Remember Me' />
      </Box>
      <Button>Login</Button>
      <Typography component='p' align='center'>
        Forgot password?
      </Typography>
    </Wrapper>
  )
}

export default SignIn
