import React, { Component } from 'react';
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap';

class ProjectItem extends Component {
  render() {
    return (
      <Card>
        <Container className="mt-5 mb-5">
          <Row>
            <Col xs={2}>
              <span className="mx-auto">REACT</span>
            </Col>
            <Col lg={6} md={4} xs={8}>
              <h3>Spring/ React Project</h3>
              <p>Project to create a Dashboard with Spring Boot and React</p>
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroup.Item>Project Board</ListGroup.Item>
                <ListGroup.Item>Update Project Info</ListGroup.Item>
                <ListGroup.Item>Delete Project</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Card>
    );
  }
}

export default ProjectItem;
