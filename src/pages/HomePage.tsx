import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { marketData } from '../data/marketData';

function HomePage() {
  return (
    <Container>
      <div className="mt-4 p-5 bg-light rounded-3">
        <h1>The Market for Flame Retardant Materials</h1>
        <p className="lead">A critical component for safety in a modern world.</p>
      </div>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Market Size & Growth</Card.Title>
              <Card.Text>
                <strong>Current Market Size (2025):</strong> {marketData.marketSize}
              </Card.Text>
              <Card.Text>
                <strong>Projected Growth (by 2033):</strong> {marketData.forecast}
              </Card.Text>
              <Card.Text>
                <strong>Compound Annual Growth Rate (CAGR):</strong> {marketData.growthRate}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Key Market Drivers</Card.Title>
              <ul>
                {marketData.drivers.map((driver, index) => (
                  <li key={index}>{driver}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Key Applications</Card.Title>
              <Row>
                {marketData.applications.map((app, index) => (
                  <Col md={6} key={index} className="mb-3">
                    <Card>
                      <Card.Img variant="top" src={app.imageUrl} />
                      <Card.Body>
                        <Card.Title>{app.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Notable Incidents & The Push for Safety</Card.Title>
              {marketData.incidents.map((incident, index) => (
                <Row key={index} className="mb-3 align-items-center">
                  <Col md={4}>
                    <Image src={incident.imageUrl} rounded fluid />
                  </Col>
                  <Col md={8}>
                    <h6>{incident.location}</h6>
                    <p>{incident.details}</p>
                  </Col>
                </Row>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
