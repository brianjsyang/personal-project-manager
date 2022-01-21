import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CreateProjectButton = () => {
  return (
    <React.Fragment>
      <Button as={Link} to="/addProject" variant="outline-dark">
        Create a new Project
      </Button>
    </React.Fragment>
  );
};

export default CreateProjectButton;
