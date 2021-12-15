export default function SearchBar({
  addClass,
  placeholder,
  handleChange,
  pattern,
}) {
  return (
    <input
      className={`searchbar ${addClass}`}
      placeholder={placeholder}
      onChange={handleChange && ((e) => handleChange(e))}
      pattern={pattern}
    ></input>
  );
}
