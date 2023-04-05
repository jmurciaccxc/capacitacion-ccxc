import { Container } from "semantic-ui-react";
import Header from "../../components/Header";

const BasicLayout = ({ children }) => {
  return (
    <Container fluid className="basic-layout">
      <Header />
      <Container className="content">
        {children}
        <h1>estamos renderizando el layout</h1>
      </Container>
    </Container>
  );
};

export default BasicLayout;
