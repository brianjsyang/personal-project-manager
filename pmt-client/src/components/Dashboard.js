import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Col, Container, Row } from 'react-bootstrap';

import { getAllProjects } from '../redux/project/ProjectActions';
import CreateProjectButton from './projects/CreateProjectButton';
import ProjectItem from './projects/ProjectItem';
import { selectAllProjects } from '../redux/project/ProjectSelector';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllProjects();
  }

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

const mapDispatchToProps = (dispatch) => ({
  getAllProjects: () => dispatch(getAllProjects()),
});

const mapStateToProps = createStructuredSelector({
  projects: selectAllProjects,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
