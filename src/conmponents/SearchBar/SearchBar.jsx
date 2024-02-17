import css from "../../conmponents/SearchBar/SearchBar.module.css";
export const SearchBar = ({ value, onChange }) => {
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
