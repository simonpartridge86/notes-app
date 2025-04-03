import classes from "./SearchInput.module.css";
import { ChangeEvent, useRef } from "react";
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
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div
      className={classes["search-container"]}
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
      />
      {searchQuery && (
        <IconButton onClick={() => setSearchQuery("")} label="Clear Search">
          <CrossIcon />
        </IconButton>
      )}
    </div>
  );
};
