// Routes
import { Link } from "react-router-dom";
// Styles
import { Wrapper, Content } from "./BreadCrumb.styles";

// Types
type Props = {
  movieTitle: string;
};

const BreadCrumb: React.FC<Props> = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span className="home-link">Home</span>
      </Link>
      <span>🎬</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
