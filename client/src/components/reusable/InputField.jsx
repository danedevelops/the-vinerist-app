export default function InputField({
  name,
  addClass,
  placeholder,
  type,
  value,
}) {
  return (
    <input
      name={name}
      className={`reusable__input ${addClass}`}
      placeholder={placeholder}
      defaultValue={value}
      type={type ? type : "text"}
    />
  );
}
