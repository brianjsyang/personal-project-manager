import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from 'react-bootstrap';

import { createProject, resetStatus } from '../../redux/project/ProjectActions';
import {
  selectProjectError,
  selectProjectStatus,
} from '../../redux/project/ProjectSelector';

const AddProjectFunc = ({ createProject, resetStatus, error, status }) => {
  const INITIAL_STATE = {
    projectName: '',
    projectIdentifier: '',
    description: '',
    start_date: '',
    end_date: '',
  };

  const [project, setProject] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  function onChange(e) {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  }

  function onSubmit(e) {
    e.preventDefault();
    createProject(project);
  }

  useEffect(() => {
    const redirect = () => navigate('/');
    // HTTP Status Code: Created Success
    if (status === 201) {
      resetStatus();
      redirect();
    }
  });

  return (
    <Row>
      <Col md={8} className="m-auto">
        <h5 className="display-4 text-center">Create New Project</h5>

        <hr />
      </Col>

      <Container>
        <Form className="mx-auto w-50" onSubmit={onSubmit}>
          <FloatingLabel label="Project Name" className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              placeholder="projectName"
              name="projectName"
              value={project.projectName}
              onChange={onChange}
              isInvalid={error.projectName}
            />
            <Form.Control.Feedback type={'invalid'}>
              {error.projectName}
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel label="Project ID (Must be Unique)" className="mb-3">
            <Form.Control
              size="lg"
              placeholder="id"
              name="projectIdentifier"
              value={project.projectIdentifier}
              onChange={onChange}
              isInvalid={error.projectIdentifier}
            />
            <Form.Control.Feedback type={'invalid'}>
              {error.projectIdentifier}
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel label="Project Description" className="mb-3">
            <Form.Control
              as="textarea"
              style={{ height: '150px' }}
              size="lg"
              placeholder="Project Description"
              name="description"
              value={project.description}
              onChange={onChange}
              isInvalid={error.description}
            />
            <Form.Control.Feedback type={'invalid'}>
              {error.description}
            </Form.Control.Feedback>
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
              value={project.start_date}
              onChange={onChange}
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
              value={project.end_date}
              onChange={onChange}
            ></Form.Control>
          </FloatingLabel>

          <Button variant="dark" type="submit" className="mt-4 w-100">
            Submit
          </Button>
        </Form>
      </Container>
    </Row>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  createProject: (project) => dispatch(createProject(project)),
  resetStatus: () => dispatch(resetStatus()),
});

const mapStateToProps = createStructuredSelector({
  error: selectProjectError,
  status: selectProjectStatus,
});

export default connect(mapStateToProps, mapDispatchtoProps)(AddProjectFunc);
