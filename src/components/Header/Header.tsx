import classes from "./Header.module.css";
import { SearchInput } from "../SearchInput/SearchInput";
import { IconButton } from "../IconButton/IconButton";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";

type HeaderProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({
  searchQuery,
  setSearchQuery,
  darkMode,
  setDarkMode,
}: HeaderProps) => {
  return (
    <header className={classes.header}>
      <h1 className={classes["header-title"]}>Notes</h1>
      <div className={classes["header-actions"]}>
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <IconButton
          onClick={() => setDarkMode((prev) => !prev)}
          label="Toggle Dark Mode"
        >
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </IconButton>
      </div>
    </header>
  );
};
