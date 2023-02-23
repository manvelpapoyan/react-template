import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Checkbox, FormControlLabel } from '@mui/material'

import Input from '@components/common/Input'
import { useAppDispatch } from '@store/hooks'
import Button from '@components/common/Button'
import LinkTo from '@components/common/LinkTo'
import { PAGE_ROUTES_PUBLIC } from '@appTypes/enums/pages'
import { loginThunk } from '@store/features/auth/auth.actions'
import { Wrapper } from './styled'

const defaultValues = {
  login: '',
  password: '',
  rememberMe: false
}

const SignIn = () => {
  const dispatch = useAppDispatch()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues
  })

  const data = [
    {
      name: 'login',
      id: 'login',
      label: 'Login',
      key: 'login',
      placeholder: 'Your Login',
      type: 'text',
      register: {
        ...register('login', {
          required: 'message login'
        })
      }
    },
    {
      name: 'password',
      id: 'password',
      label: 'Password',
      key: 'password',
      placeholder: 'Your Password',
      type: 'password',
      register: {
        ...register('password', {
          required: 'message password'
        })
      }
    }
  ]

  const handleForm = ({ login, ...rest }: any) => {
    dispatch(loginThunk({ email: login, ...rest }))
      .unwrap()
      .then(() => {
        reset()
      })
  }

  return (
    <Wrapper component='form' onSubmit={handleSubmit(handleForm)}>
      <Typography variant='h1'>Sign In</Typography>
      <Box>
        {data.map((item) => (
          <Input errors={errors} {...item} />
        ))}
      </Box>
      <Box>
        <FormControlLabel label='Remember Me' control={<Checkbox {...register('rememberMe')} />} />
      </Box>
      <Button type='submit'>Login</Button>
      <Typography component='p' align='center'>
        <LinkTo href={PAGE_ROUTES_PUBLIC.FORGOT_PASSWORD}>Forgot password?</LinkTo>
      </Typography>
    </Wrapper>
  )
}

export default SignIn
