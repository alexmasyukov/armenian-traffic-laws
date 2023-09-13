import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

type IProps = {
  name: string;
  /** multiline false by default */
  multiline?: boolean;
  rows?: number;
};

type Props = IProps & TextFieldProps;

export default function RHFTextField({ name, multiline, rows, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          multiline={multiline}
          rows={rows}
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}
