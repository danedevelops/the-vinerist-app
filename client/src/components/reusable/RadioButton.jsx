export default function RadioButton({ value, labelName, id, checked }) {
  return (
    <label className="radio__align">
      <input
        id={id}
        type="radio"
        name="userlevel"
        value={value}
        checked={checked}
        className="radio"
      />
      {labelName}
    </label>
  );
}
