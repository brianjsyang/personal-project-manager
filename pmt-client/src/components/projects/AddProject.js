import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from 'react-bootstrap';

import { createProject } from '../../redux/project/ProjectActions';

class AddProject extends Component {
  constructor() {
    super();

    // Bind to proper "this" to update state
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      projectName: '',
      projectIdentifier: '',
      description: '',
      start_date: '',
      end_date: '',
    };
  }

  // on change function allows to input data to form
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Submit form to server
  onSubmit(e) {
    const { createProject } = this.props;
    e.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
    };

    createProject(newProject);
  }

  // Render Form
  render() {
    return (
      <Row>
        <Col md={8} className="m-auto">
          <h5 className="display-4 text-center">Create New Project</h5>
          <hr />
        </Col>

        <Container>
          <Form className="mx-auto w-50" onSubmit={this.onSubmit}>
            <FloatingLabel label="Project Name" className="mb-3">
              <Form.Control
                size="lg"
                type="text"
                placeholder="name"
                name="projectName"
                value={this.state.projectName}
                onChange={this.onChange}
              />
            </FloatingLabel>

            <FloatingLabel label="Project ID (Must be Unique)" className="mb-3">
              <Form.Control
                size="lg"
                placeholder="id"
                name="projectIdentifier"
                value={this.state.projectIdentifier}
                onChange={this.onChange}
              />
            </FloatingLabel>

            <FloatingLabel label="Project Description" className="mb-3">
              <Form.Control
                as="textarea"
                style={{ height: '150px' }}
                size="lg"
                placeholder="Project Description"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
              />
            </FloatingLabel>

            <FloatingLabel
              className="mb-3"
              controlId="projectStartDate"
              label="Start Date"
            >
              <Form.Control
                type="date"
                size="lg"
                placeholder="yyyy-mm-dd"
                name="start_date"
                value={this.state.start_date}
                onChange={this.onChange}
              ></Form.Control>
            </FloatingLabel>

            <FloatingLabel
              className="mb-3"
              controlId="projectStartDate"
              label="Estimated End Date"
            >
              <Form.Control
                type="date"
                size="lg"
                placeholder="yyyy-mm-dd"
                name="end_date"
                value={this.state.end_date}
                onChange={this.onChange}
              ></Form.Control>
            </FloatingLabel>

            <Button variant="dark" type="submit" className="mt-4 w-100">
              Submit
            </Button>
          </Form>
        </Container>
      </Row>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  createProject: (project) => dispatch(createProject(project)),
});

export default connect(null, mapDispatchtoProps)(AddProject);
