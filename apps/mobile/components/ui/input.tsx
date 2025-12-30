import { TextInput } from 'react-native';

export function Input({ className, ...props }: React.ComponentProps<typeof TextInput>) {
  return (
    <TextInput
      placeholderTextColor="#64748b"
      className={`flex h-12 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground ${className ?? ''}`}
      {...props}
    />
  );
}