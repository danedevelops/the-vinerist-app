export default function TextArea({
  addClass,
  placeholder,
  maxLen,
  name,
  value,
}) {
  return (
    <textarea
      name={name}
      defaultValue={value}
      className={`form__text-area ${addClass}`}
      placeholder={placeholder}
      maxLength={maxLen ? maxLen : "200"}
      wrap="soft"
    />
  );
}
