import css from "./SearchBox.module.css";
export const SearchBox = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className={css.inputBlock}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Enter name"
      />
    </div>
  );
};
