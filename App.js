import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import BoxOffice from "./components/BoxOffice";


function App() {
  return (
      <>
        <Container fluid className="d-flex flex-column m-2">
            <Row className="my-2">
                <Col md={12}>
                    <h1 className="display-5 header-title">Box-Office Hits</h1>
                    <hr/>
                </Col>
            </Row>
          <BoxOffice />
        </Container>

      </>
  );
}

export default App;
