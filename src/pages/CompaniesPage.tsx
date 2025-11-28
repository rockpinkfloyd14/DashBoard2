import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Image } from 'react-bootstrap';
import { companies } from '../data/companies';

function CompaniesPage() {
  return (
    <>
      <h2>Listed Companies</h2>
      <Table striped bordered hover responsive className="mt-4">
        <thead>
          <tr>
            <th>Company</th>
            <th>Description</th>
            <th>P/E Ratio (2025)</th>
            <th>EV/EBITDA (2025)</th>
            <th>P/B Ratio (2025)</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>
                <Image src={company.imageUrl} rounded width="50" height="50" className="me-3" />
                {company.name}
              </td>
              <td>{company.description}</td>
              <td>{company.financials[2].peRatio}</td>
              <td>{company.financials[2].evEbitda}</td>
              <td>{company.financials[2].pbRatio}</td>
              <td>
                <LinkContainer to={`/companies/${company.id}`}>
                  <Button variant="primary" size="sm">View More</Button>
                </LinkContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default CompaniesPage;
