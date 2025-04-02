import classes from "./SearchInput.module.css";
import { ChangeEvent, useRef, useState } from "react";
import { SearchIcon } from "../icons/SearchIcon";
import { IconButton } from "../IconButton/IconButton";
import { CrossIcon } from "../icons/CrossIcon";

type SearchInputProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchInput = ({
  searchQuery,
  setSearchQuery,
}: SearchInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div
      className={`${classes["search-container"]} ${
        isFocused ? classes.focused : ""
      }`}
      onClick={() => searchInputRef.current?.focus()}
    >
      <span className={classes["search-icon"]}>
        <SearchIcon />
      </span>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search notes..."
        className={classes["search-input"]}
        ref={searchInputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {searchQuery && (
        <IconButton onClick={() => setSearchQuery("")} label="Clear Search">
          <CrossIcon />
        </IconButton>
      )}
    </div>
  );
};
