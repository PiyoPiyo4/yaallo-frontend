import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

const PasswordField = ({ value, onChange }) => {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      fontSize= '14px'
      placeholder='Password'
      type={values.showPassword ? 'text' : 'password'}
      value={value}
      onChange={onChange}
      sx={{
        backgroundColor: '#F5F5F5',
        borderRadius: '40px',
        fontFamily: 'Inter',
        '& .MuiInputBase-root': {
          height: '50px',
          width: '350px',
          fontSize: '14px',
          paddingLeft: '10px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '& .Mui-focused': {
          '& .MuiOutlinedInput-notchedOutline': {
            border: '2px solid black !important',
            borderRadius: '40px',
          },
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <BsEyeSlash /> : <BsEye />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;
