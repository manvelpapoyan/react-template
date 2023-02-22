import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Checkbox, FormControlLabel } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { loginThunk } from '@store/features/auth/auth.actions'

import Button from '@components/common/Button'
import Input from '@components/common/Input'
import { Wrapper } from './styled'

const defaultValues = {
  login: '',
  password: ''
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

  const handleForm = (data: any) => {
    dispatch(
      loginThunk({
        email: data.login,
        password: data.password
      })
    )
      .unwrap()
      .then(() => {
        reset()
      })
  }

  return (
    <Wrapper component='form' onSubmit={handleSubmit(handleForm)}>
      <Typography variant='h1'>Sign In</Typography>
      <Box>
        {data.map((item) => {
          return <Input errors={errors} {...item} />
        })}
      </Box>
      <Box>
        <FormControlLabel control={<Checkbox defaultChecked />} label='Remember Me' />
      </Box>
      <Button type='submit'>Login</Button>
      <Typography component='p' align='center'>
        Forgot password?
      </Typography>
    </Wrapper>
  )
}

export default SignIn
