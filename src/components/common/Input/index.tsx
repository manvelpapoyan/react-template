import { useState, memo } from 'react'
import { FormControl, InputLabel, FormHelperText } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { StyledInput } from './styled'

interface IInput {
  label: string
  name: string
  key: string
  type: string
  placeholder: string
  register: any
  errors: Record<string, any>
}

const Input = ({ label, register, errors, type, ...rest }: IInput) => {
  const [isEyeOpen, setEyeOpen] = useState(false)

  return (
    <FormControl variant='standard'>
      <InputLabel shrink htmlFor={type} error={!!errors[rest.name]}>
        {label}
      </InputLabel>
      <StyledInput
        error={!!errors[rest.name]}
        type={type === 'password' ? (!isEyeOpen ? 'password' : 'text') : type}
        endAdornment={
          type === 'password' ? (
            !isEyeOpen ? (
              <VisibilityOff onClick={() => setEyeOpen(!isEyeOpen)} />
            ) : (
              <VisibilityIcon onClick={() => setEyeOpen(!isEyeOpen)} />
            )
          ) : null
        }
        {...rest}
        {...register}
      />
      <FormHelperText>
        {errors && errors[rest.name] ? errors[rest.name].message : ''}
      </FormHelperText>
    </FormControl>
  )
}

export default memo(Input)
