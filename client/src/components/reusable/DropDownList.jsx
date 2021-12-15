export default function DropDownList({
  name,
  options,
  addClass,
  disabled,
  selectedOption,
}) {
  return options === null ? (
    ""
  ) : (
    <select
      name={name}
      className={`form__forminput form__drop-down ${addClass ? addClass : ""}`}
      disabled={disabled ? true : false}
      defaultValue={selectedOption ? selectedOption : ""}
    >
      {options.map((option, i) => (
        <option
          key={option}
          value={options && options.length > 0 ? option.value : option}
        >
          {option.option}
        </option>
      ))}
    </select>
  );
}
