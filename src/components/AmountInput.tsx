import { TextField } from 'tosslib';

export const AmountInput = ({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: number | null;
  onChange: (value: number | null) => void;
}) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      suffix="원"
      value={value ? value.toLocaleString('ko-KR') : ''}
      onChange={e => {
        const rawValue = e.target.value.replace(/,/g, '');
        const isEmpty = rawValue === '';
        const isNumberString = /^\d+$/.test(rawValue);

        if (isEmpty || isNumberString) {
          onChange(isEmpty ? null : Number(rawValue));
        }
      }}
    />
  );
};
