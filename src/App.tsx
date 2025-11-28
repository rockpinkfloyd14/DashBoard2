import { Routes, Route } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CompaniesPage from './pages/CompaniesPage';
import CompanyDetailPage from './pages/CompanyDetailPage';
import InsightsPage from './pages/InsightsPage';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Flame Retardant Market</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/companies">
                <Nav.Link>Companies</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<InsightsPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/companies/:id" element={<CompanyDetailPage />} />
          <Route path="/insights" element={<InsightsPage />} />
        </Routes>
      </Container>
      <footer className="bg-dark text-white text-center p-3 mt-auto">
        <Container>
          <p>&copy; 2025 Flame Retardant Market Dashboard</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
