import { alpha, styled } from '@mui/material/styles'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { FormControl, InputBase, InputLabel } from '@mui/material'

import { StyledInput } from './styled'

interface IInput {
  label: string
  key: string
  type: string
  placeholder: string
}

const Input = ({ key, label, ...rest }: IInput) => {
  return (
    <FormControl variant='standard'>
      <InputLabel shrink htmlFor={key}>
        {label}
      </InputLabel>
      <StyledInput id={key} {...rest} />
    </FormControl>
  )
}

export default Input
