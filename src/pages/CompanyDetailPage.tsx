import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { companies } from '../data/companies';
import FinancialChart from '../components/FinancialChart';

function CompanyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const company = companies.find((c) => c.id === id);

  if (!company) {
    return <h2>Company not found</h2>;
  }

  return (
    <Container>
      <h2>{company.name}</h2>
      <p>{company.description}</p>

      <Row className="mt-4">
        <Col>
          <h4>Financial Ratios (2023-2025)</h4>
          <FinancialChart financialData={company.financials} />
        </Col>
      </Row>
    </Container>
  );
}

export default CompanyDetailPage;
