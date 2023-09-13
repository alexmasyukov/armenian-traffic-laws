import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import MDEditor, { commands } from '@uiw/react-md-editor';

type Props = {
  name: string;
};

export default function RHFMDEditor({ name, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <MDEditor
          {...field}
          //  error={!!error}
          //  helperText={error?.message}
          {...other}
          style={{
            borderRadius: '0 0 6px 6px',
          }}
          commands={[
            commands.bold,
            commands.italic,
            commands.strikethrough,
            commands.divider,
            commands.title,
            commands.hr,
            commands.quote,
            commands.unorderedListCommand,
            commands.orderedListCommand,
            commands.checkedListCommand,
          ]}
        />
      )}
    />
  );
}
