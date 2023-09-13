import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

type IProps = {
  name: string;
};

type Props = IProps & TextFieldProps;

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator=" "
        decimalSeparator="."
        allowLeadingZeros={false}
        allowNegative={false}
        decimalScale={2}
        valueIsNumericString={true}
        prefix="₽ "
      />
    );
  }
);

export default function RHFNumberField({ name, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={field.value}
          error={!!error}
          helperText={error?.message}
          InputProps={{
            inputComponent: NumericFormatCustom as any,
          }}
          {...other}
        />
      )}
    />
  );
}
