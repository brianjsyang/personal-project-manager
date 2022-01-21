import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CreateProjectButton from './projects/CreateProjectButton';

import ProjectItem from './projects/ProjectItem';

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="display-4 text-center">PROJECTS</h1>
            <br />
            <CreateProjectButton />
            <hr />
          </Col>
        </Row>
        <ProjectItem />
      </Container>
    );
  }
}

export default Dashboard;
