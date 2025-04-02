import classes from "./Header.module.css";
import { SearchInput } from "../SearchInput/SearchInput";

type HeaderProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  return (
    <header className={classes.header}>
      <h1 className={classes["header-title"]}>Notes</h1>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </header>
  );
};
