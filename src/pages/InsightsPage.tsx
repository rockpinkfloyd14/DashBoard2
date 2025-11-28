import { useMemo, useRef, useState, type RefObject } from 'react';
import { Badge, Button, Card, Col, Form, Row, Table } from 'react-bootstrap';

type CompanyMultiples = Record<number, { pe: number; evEbitda: number; pb: number }>;

type InsightCompany = {
  name: string;
  ticker: string;
  region: string;
  segment: string;
  dataCenter: string;
  notes: string;
  multiples: CompanyMultiples;
};

const incidents = [
  {
    title: 'High-rise cladding blaze',
    location: 'Hong Kong',
    timing: 'Recent',
    impact: 'Facade spread',
    notes:
      'Pushes non-combustible panels and halogen-free retardants to avoid vertical flame spread in dense districts.',
  },
  {
    title: 'Recurring facade fires',
    location: 'Dubai',
    timing: 'Recent years',
    impact: 'Repeat ignition',
    notes: 'Combustible ACP keeps Dubai in focus; retrofit demand rising for FR panels and coatings.',
  },
  {
    title: 'Insurance fraud risk',
    location: 'ASEAN warehouses',
    timing: 'User insight: "1 in every X"',
    impact: 'Claims scrutiny',
    notes: 'Investigators flag arson-driven claims; sensorized detection and certified FR panels reduce exposure.',
  },
];

const checklist = [
  'Halogen-free cable specs in RFPs; test for smoke density and toxicity.',
  'Panel cores tested for heat release rate; FM/UL certifications verified.',
  'Bromine vs phosphorus mixes depending on heat, creep, and cost targets.',
  'Data center lithium-ion UPS housings: additives to slow thermal runaway.',
  'Insurance: maintain serialized proof of FR-grade batches and installers.',
];

const materials = [
  {
    label: 'Brominated FR',
    signal: 'Strong for server racks, cable trays, EV battery housings.',
    drivers: ['Albemarle', 'ICL Group'],
  },
  {
    label: 'Halogen-free (Al(OH)3, Mg(OH)2)',
    signal: 'Regulatory tailwind; favored in EU data centers and public buildings.',
    drivers: ['Nabaltec', 'Clariant Exolit'],
  },
  {
    label: 'Intumescent coatings',
    signal: 'Retrofits after facade fires; used on ACP replacements.',
    drivers: ['PPG (coatings)', 'AkzoNobel'],
  },
  {
    label: 'Phosphorus-based FR',
    signal: 'Cable insulation and connectors; limited smoke toxicity.',
    drivers: ['Lanxess', 'ICL Group'],
  },
];

const companies: InsightCompany[] = [
  {
    name: 'Albemarle',
    ticker: 'ALB',
    region: 'US',
    segment: 'Bromine',
    dataCenter: 'High',
    notes: 'Bromine specialties feed FR cabling, housings; lithium is large but FR steady.',
    multiples: {
      2022: { pe: 12.5, evEbitda: 7.8, pb: 3.2 },
      2023: { pe: 7.9, evEbitda: 5.6, pb: 2.2 },
      2024: { pe: 9.4, evEbitda: 6.4, pb: 2.0 },
      2025: { pe: 10.3, evEbitda: 6.9, pb: 2.1 },
    },
  },
  {
    name: 'ICL Group',
    ticker: 'ICL',
    region: 'Israel',
    segment: 'Bromine / Phosphorus',
    dataCenter: 'Medium',
    notes: 'Flame retardants portfolio and fertilizers; reliable bromine capacity.',
    multiples: {
      2022: { pe: 9.8, evEbitda: 6.4, pb: 1.7 },
      2023: { pe: 11.1, evEbitda: 6.9, pb: 1.6 },
      2024: { pe: 12.6, evEbitda: 7.4, pb: 1.6 },
      2025: { pe: 12.9, evEbitda: 7.6, pb: 1.7 },
    },
  },
  {
    name: 'Lanxess',
    ticker: 'LXS',
    region: 'Germany',
    segment: 'Phosphorus / Additives',
    dataCenter: 'Medium',
    notes: 'Additives and phosphorus-based retardants; cyclical margins.',
    multiples: {
      2022: { pe: 13.4, evEbitda: 7.5, pb: 1.8 },
      2023: { pe: 14.2, evEbitda: 7.9, pb: 1.5 },
      2024: { pe: 12.9, evEbitda: 6.8, pb: 1.3 },
      2025: { pe: 12.4, evEbitda: 6.6, pb: 1.2 },
    },
  },
  {
    name: 'Clariant',
    ticker: 'CLN',
    region: 'Switzerland',
    segment: 'Halogen-free',
    dataCenter: 'Medium',
    notes: 'Exolit halogen-free portfolio; active in electronics and transportation.',
    multiples: {
      2022: { pe: 18.2, evEbitda: 10.1, pb: 2.8 },
      2023: { pe: 16.5, evEbitda: 9.4, pb: 2.4 },
      2024: { pe: 17.1, evEbitda: 9.0, pb: 2.3 },
      2025: { pe: 17.8, evEbitda: 9.3, pb: 2.4 },
    },
  },
  {
    name: 'Nabaltec',
    ticker: 'NTG',
    region: 'Germany',
    segment: 'Halogen-free',
    dataCenter: 'High',
    notes: 'Aluminum hydroxide-based retardants for cables and panels.',
    multiples: {
      2022: { pe: 13.6, evEbitda: 7.5, pb: 1.9 },
      2023: { pe: 14.1, evEbitda: 7.8, pb: 2.0 },
      2024: { pe: 13.1, evEbitda: 7.1, pb: 1.8 },
      2025: { pe: 12.8, evEbitda: 7.0, pb: 1.8 },
    },
  },
  {
    name: 'Daicel',
    ticker: '4202',
    region: 'Japan',
    segment: 'Engineering plastics',
    dataCenter: 'Selective',
    notes: 'Acetyl/engineering plastics with FR applications in electronics.',
    multiples: {
      2022: { pe: 11.2, evEbitda: 6.8, pb: 1.1 },
      2023: { pe: 12.4, evEbitda: 7.1, pb: 1.0 },
      2024: { pe: 11.8, evEbitda: 6.6, pb: 1.0 },
      2025: { pe: 11.5, evEbitda: 6.4, pb: 1.0 },
    },
  },
];

const transactions = [
  {
    year: 2024,
    title: 'Halogen-free compounding bolt-ons',
    detail: 'Regional compounding shops with halogen-free lines trade ~7.5-9.5x EV/EBITDA; EU demand led.',
  },
  {
    year: 2023,
    title: 'Bromine & additives carve-outs',
    detail: 'Specialty additives portfolios in Europe reportedly cleared 9-11x EV/EBITDA on stabilized earnings.',
  },
  {
    year: 2022,
    title: 'Data-center cable suppliers',
    detail: 'Private transactions for FR cable makers in APAC indicated 8-10x EV/EBITDA, 1.5-2.0x P/B.',
  },
  {
    year: 2021,
    title: 'Coatings / intumescent platforms',
    detail: 'Coatings platforms with intumescent lines drew mid-teens EV/EBITDA; scale and spec approvals mattered.',
  },
];

const segments = ['All', 'Bromine', 'Halogen-free', 'Phosphorus', 'Engineering plastics'];

function InsightsPage() {
  const [selectedSegment, setSelectedSegment] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [search, setSearch] = useState<string>('');
  const multiplesRef = useRef<HTMLDivElement | null>(null);
  const incidentsRef = useRef<HTMLDivElement | null>(null);

  const filteredCompanies = useMemo(() => {
    const q = search.trim().toLowerCase();
    return companies.filter((c) => {
      const matchesSegment =
        selectedSegment === 'All' || c.segment.toLowerCase().includes(selectedSegment.toLowerCase());
      const matchesSearch =
        q.length === 0 ||
        c.name.toLowerCase().includes(q) ||
        c.ticker.toLowerCase().includes(q) ||
        c.region.toLowerCase().includes(q);
      return matchesSegment && matchesSearch;
    });
  }, [search, selectedSegment]);

  const handleScrollTo = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="insights-bg py-4">
      <div className="insights-hero text-white mb-3">
        <div>
          <p className="text-uppercase small mb-2 text-secondary">Construction · Data centers · Insurance forensics</p>
          <h1 className="fw-bold">Flame Retardant Intelligence</h1>
          <p className="lead mb-3">
            Facade fires in Hong Kong and Dubai plus ASEAN warehouse fraud risks sharpen the need for reliable flame
            retardant materials. Bromine leaders like Albemarle feed data-center safe cabling and panels.
          </p>
          <div className="insights-actions">
            <Button variant="warning" className="fw-bold" onClick={() => handleScrollTo(multiplesRef)}>
              View trading multiples
            </Button>
            <Button variant="outline-light" onClick={() => handleScrollTo(incidentsRef)}>
              Review incident playbook
            </Button>
          </div>
        </div>
        <Row className="gy-3 mt-3">
          <Col xs={12} sm={4}>
            <Card className="insights-card h-100">
              <Card.Body>
                <p className="text-uppercase small text-secondary mb-1">Data center FR CAGR</p>
                <h4 className="fw-bold text-white">8-10% <span className="fs-6 text-secondary">2024-28E</span></h4>
                <p className="text-secondary mb-0">
                  Cabling, trays, and lithium-ion UPS enclosures demand halogen-free compounds with reliable sourcing.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card className="insights-card h-100">
              <Card.Body>
                <p className="text-uppercase small text-secondary mb-1">ASEAN claims risk</p>
                <h4 className="fw-bold text-white">"1 in X"</h4>
                <p className="text-secondary mb-0">
                  User insight: insurance investigators flag recurring fraudulent warehouse fires across ASEAN markets.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card className="insights-card h-100 border-success-subtle">
              <Card.Body>
                <p className="text-uppercase small text-secondary mb-1">Bromine suppliers</p>
                <h4 className="fw-bold text-white">Albemarle · ICL · Lanxess</h4>
                <p className="text-secondary mb-0">
                  Core inputs for flame retardants used in panels, server racks, and EV battery housings.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <Row className="g-3 mb-3">
        <Col xs={12} md={4}>
          <Card ref={incidentsRef}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <p className="text-uppercase small text-muted mb-1">Fire incident tracker</p>
                  <h4 className="mb-0">Blaze signals</h4>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                {incidents.map((item) => (
                  <div key={item.title} className="p-3 rounded border bg-light-subtle">
                    <div className="d-flex flex-wrap gap-2 mb-1">
                      <Badge bg="dark">{item.location}</Badge>
                      <Badge bg="secondary">{item.timing}</Badge>
                      <Badge bg="warning" text="dark">{item.impact}</Badge>
                    </div>
                    <h6 className="mb-1">{item.title}</h6>
                    <p className="text-muted mb-0">{item.notes}</p>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <p className="text-uppercase small text-muted mb-1">Data center risk</p>
                  <h4 className="mb-0">Facility checklist</h4>
                </div>
              </div>
              <ul className="list-unstyled mb-3">
                {checklist.map((item) => (
                  <li key={item} className="d-flex gap-2 align-items-start mb-2">
                    <span className="badge bg-warning text-dark rounded-pill mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-between">
                <span className="fw-semibold">Halogen-free adoption</span>
                <span className="text-muted">Shift from halogenated additives</span>
              </div>
              <div className="progress mt-2" style={{ height: '10px' }}>
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <p className="text-muted small mt-2 mb-0">
                EU/US specs increasingly push to halogen-free; bromine persists in select high-heat, high-creep applications.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <p className="text-uppercase small text-muted mb-1">Materials watch</p>
                  <h4 className="mb-0">What&apos;s moving</h4>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                {materials.map((m) => (
                  <div key={m.label} className="p-3 rounded border bg-light-subtle">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-1">{m.label}</h6>
                      <Badge bg="success">{m.signal}</Badge>
                    </div>
                    <p className="text-muted small mb-0">Drivers: {m.drivers.join(', ')}</p>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mb-3">
        <Card.Body>
          <Row className="g-2 align-items-center">
            <Col xs={12} md={5}>
              <p className="text-uppercase small text-muted mb-1">Filter by segment</p>
              <div className="d-flex flex-wrap gap-2">
                {segments.map((seg) => (
                  <Button
                    key={seg}
                    size="sm"
                    variant={seg === selectedSegment ? 'warning' : 'outline-secondary'}
                    className="pill-btn"
                    onClick={() => setSelectedSegment(seg)}
                  >
                    {seg}
                  </Button>
                ))}
              </div>
            </Col>
            <Col xs={12} md={4}>
              <p className="text-uppercase small text-muted mb-1">Year focus</p>
              <div className="d-flex gap-2 align-items-center">
                <Form.Range
                  min={2022}
                  max={2025}
                  step={1}
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(Number(e.target.value))}
                />
                <span className="fw-bold">{selectedYear}{selectedYear === 2025 ? ' (LTM)' : ''}</span>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <p className="text-uppercase small text-muted mb-1">Quick search</p>
              <Form.Control
                type="search"
                placeholder="Search company, ticker, or region..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <div>
              <p className="text-uppercase small text-muted mb-1">Listed companies</p>
              <h4 className="mb-0">Coverage map</h4>
            </div>
            <Badge bg="dark">{filteredCompanies.length} shown</Badge>
          </div>
          <Row className="g-3 row-cols-1 row-cols-md-2 row-cols-lg-3">
            {filteredCompanies.map((c) => {
              const multiples = c.multiples[selectedYear];
              return (
                <Col key={c.ticker}>
                  <Card className="h-100">
                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h5 className="mb-0">{c.name}</h5>
                          <small className="text-muted">{c.ticker} · {c.region}</small>
                        </div>
                        <Badge bg="secondary">{c.segment}</Badge>
                      </div>
                      <p className="flex-grow-1">{c.notes}</p>
                      <div className="d-flex flex-wrap gap-2 mt-2">
                        <Badge bg="warning" text="dark">P/E {multiples.pe.toFixed(1)}x</Badge>
                        <Badge bg="dark">EV/EBITDA {multiples.evEbitda.toFixed(1)}x</Badge>
                        <Badge bg="secondary">P/B {multiples.pb.toFixed(1)}x</Badge>
                        <Badge bg="info" text="dark">Data center: {c.dataCenter}</Badge>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-3" ref={multiplesRef}>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div>
              <p className="text-uppercase small text-muted mb-1">Trading snapshot</p>
              <h4 className="mb-0">Multiples by year</h4>
            </div>
            <Badge bg="warning" text="dark">Illustrative only</Badge>
          </div>
          <div className="table-responsive">
            <Table striped bordered hover className="insights-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Region</th>
                  <th>Segment</th>
                  <th>P/E</th>
                  <th>EV/EBITDA</th>
                  <th>P/B</th>
                </tr>
              </thead>
              <tbody>
                {filteredCompanies.map((c) => {
                  const m = c.multiples[selectedYear];
                  return (
                    <tr key={c.ticker}>
                      <td>{c.name} ({c.ticker})</td>
                      <td>{c.region}</td>
                      <td>{c.segment}</td>
                      <td>{m.pe.toFixed(1)}x</td>
                      <td>{m.evEbitda.toFixed(1)}x</td>
                      <td>{m.pb.toFixed(1)}x</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <p className="text-muted small mb-0">
            Indicative screening multiples for flame-retardant exposed businesses; verify with current filings/feeds.
          </p>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div>
              <p className="text-uppercase small text-muted mb-1">Historical transactions</p>
              <h4 className="mb-0">Deal log &amp; ranges</h4>
            </div>
            <Button
              variant="outline-dark"
              size="sm"
              onClick={() =>
                alert('Fraud watchlist: flag rapid policy increases, missing CCTV gaps, untested panels, limited serial tracking.')
              }
            >
              Fraud watchlist
            </Button>
          </div>
          <div className="d-flex flex-column gap-2">
            {transactions.map((t) => (
              <div key={t.title} className="p-3 rounded border bg-light-subtle">
                <div className="d-flex flex-wrap gap-2 align-items-center mb-1">
                  <Badge bg="dark">{t.year}</Badge>
                  <Badge bg="secondary">Specialty chemicals</Badge>
                </div>
                <h6 className="mb-1">{t.title}</h6>
                <p className="text-muted mb-0">{t.detail}</p>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default InsightsPage;
