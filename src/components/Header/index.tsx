// Hooks
import { useContext } from "react";
// Context
import { Context } from "../../context";
// Routing
import { Link } from "react-router-dom";
// Styles
import {
  Wrapper,
  Content,
  Logos,
  LogoImg,
  TMDBLogoImg,
} from "./Header.styles";
// Images
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

const Header: React.FC = () => {
  const { state } = useContext(Context);
  console.log(state);

  return (
    <Wrapper>
      <Content>
        <Logos>
          <Link to="/">
            <LogoImg src={RMDBLogo} alt="rmdb-logo" />
          </Link>
          <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </Logos>
  
      </Content>
    </Wrapper>
  );
};

export default Header;
