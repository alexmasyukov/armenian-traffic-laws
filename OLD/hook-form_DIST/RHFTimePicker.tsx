import React from 'react';
import 'dayjs/locale/ru';
import { useFormContext, Controller } from 'react-hook-form';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextField, TextFieldProps } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface Props
  extends Omit<React.ComponentProps<typeof TimePicker>, 'onChange' | 'value' | 'renderInput'> {
  name: string;
  size?: TextFieldProps['size'];
  color?: TextFieldProps['color'];
  focused?: TextFieldProps['focused'];
}

export default function RHFTimePicker({ name, size, color, focused, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'ru'}>
          <TimePicker
            {...field}
            {...other}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{ width: '100%' }}
                error={!!error}
                helperText={error?.message}
                size={size}
                color={color}
                focused={focused}
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
  );
}
