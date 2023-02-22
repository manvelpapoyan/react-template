import { FormControl, InputLabel, FormHelperText } from '@mui/material'

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

const Input = ({ key, label, register, errors, ...rest }: IInput) => {
  return (
    <FormControl variant='standard'>
      <InputLabel shrink htmlFor={key} error={!!errors[rest.name]}>
        {label}
      </InputLabel>
      <StyledInput id={key} {...rest} {...register} error={!!errors[rest.name]} />
      <FormHelperText>
        {errors && errors[rest.name] ? errors[rest.name].message : ''}
      </FormHelperText>
    </FormControl>
  )
}

export default Input
