import { useState } from "react";
import Input from "../Input/Input";
import styles from "./SearchSelect.module.css";
import ChevronDown from "../../assets/icons/chevron-down.svg?react";
import ChevronUp from "../../assets/icons/chevron-up.svg?react";
import { Typography } from "../Typography/Typography.jsx";

/**
 * @param {Object} props
 * @param {{ id: number, name: string }[]} props.items - List of options to display
 * @param {string} props.name - Name of the input field
 * @param {function} props.onSelect - Callback with selected item { id, name }
 * @param {string} props.placeholder - Placeholder for the input field
 * @param {boolean} [props.required] - Whether the input is required
 */
const SearchSelect = ({ name, items, onSelect, placeholder = "Select item", required }) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  const handleSelect = (item) => {
    onSelect(item);
    setQuery(item.name);
    setOpen(false);
  };

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div className={styles.wrapper}>
      <Input
        name={name}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        placeholder={required ? `${placeholder}*` : placeholder}
        iconRight={open ? <ChevronUp /> : <ChevronDown />}
        onIconClick={toggleOpen}
      />
      {open && (
        <ul className={styles.dropdownList}>
          {filteredItems.map((item) => (
            <li
              key={item.id}
              className={styles.item}
              onClick={() => handleSelect(item)}
            >
              <Typography variant="body">{item.name}</Typography>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchSelect;
