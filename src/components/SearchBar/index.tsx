// Hooks
import { useState, useEffect, useRef } from "react";
// Styles
import { Wrapper, Content } from "./SearchBar.styles";
// Icons
import searchIcon from "../../images/search-icon.svg";

// Types
type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    setState(value);
  }

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={handleChange}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
