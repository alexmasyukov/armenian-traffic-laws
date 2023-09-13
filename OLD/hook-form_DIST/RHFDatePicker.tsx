import React from 'react';
import 'dayjs/locale/ru';
import { useFormContext, Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, TextFieldProps } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface Props
  extends Omit<React.ComponentProps<typeof DatePicker>, 'onChange' | 'value' | 'renderInput'> {
  name: string;
  size?: TextFieldProps['size'];
  color?: TextFieldProps['color'];
  focused?: TextFieldProps['focused'];
}

export default function RHFDatePicker({ name, size, color, focused, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'ru'}>
          <DatePicker
            {...field}
            {...other}
            renderInput={(params) => (
              <TextField
                {...params}
                size={size}
                color={color}
                focused={focused}
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
  );
}
