import { useRef, useState } from "react";
import { SearchIcon } from "./icons/SearchIcon";
import { CrossIcon } from "./icons/CrossIcon";
import { IconButton } from "./IconButton";

type AppHeaderProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const AppHeader = ({ searchQuery, setSearchQuery }: AppHeaderProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="app-header">
      <h1 className="app-title">Notes</h1>
      <div
        className={`search-input-container ${isFocused ? "focused" : ""}`}
        onClick={() => searchInputRef.current?.focus()}
      >
        <span className="search-icon">
          <SearchIcon />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search notes..."
          className="search-input"
          ref={searchInputRef}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {searchQuery && (
          <IconButton onClick={() => setSearchQuery("")} label="Close Form">
            <CrossIcon />
          </IconButton>
        )}
      </div>
    </header>
  );
};
