import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, Input, Segment
} from 'semantic-ui-react';
import { StyledHeader } from './styledComponents/StyledHeader';
import { createProject } from '../helpers/data/projectsData';

function ProjectForm({ formTitle }) {
  const [project, setProject] = useState({
    available: true,
    description: '',
    githubUrl: '',
    id: null,
    imageUrl: '',
    likes: 0,
    siteUrl: '',
    techIcons: [],
    title: '',
    videoUrl: ''
  });
  const [errorMessage, setErrorMessage] = useState({
    titleError: false,
    techIconsError: false,
  });
  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'techIcons' ? e.target.value.split(',') : e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.id) {
      console.warn('you want to edit');
    } else if (project.title === '') {
      setErrorMessage({ titleError: true });
    } else {
      setErrorMessage(false);
      createProject(project);
    }
  };
  return (
    <Segment inverted className='project-inner-form-container'>
      <StyledHeader>{formTitle}</StyledHeader>
      <Form inverted onSubmit={handleSubmit}>
      <Form.Group>
        {errorMessage.titleError
          ? <Form.Input fluid label="Title" placeholder="Title..."
          name='title'
          value={project.title}
          onChange={handleInputChange}
          type='text'
          className='project-form-title-input'
          error={{
            content: 'Please enter a title',
            pointing: 'below',
          }}
        /> : <Form.Input fluid label="Title" placeholder="Title..."
        name='title'
        value={project.title}
        onChange={handleInputChange}
        type='text'
        className='project-form-title-input'
      />
        }
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input fluid label="Tech Icons" placeholder="Use Icons from Semantic UI... format is 'icon1,icon2,icon3,icon4,etc...'"
            name='techIcons'
            value={project.techIcons}
            onChange={handleInputChange}
            type='text'
          />
           <Form.Input fluid label="Description" placeholder="A short description..."
            name='description'
            value={project.description}
            onChange={handleInputChange}
            type='text'
          />
        </Form.Group>
        <Form.Group widths='equal'>
        <Form.Field fluid label="Deployed Site" placeholder="Deployed site url..."
            id='form-input-control-error-deployed-site'
            name='siteUrl'
            control={Input}
            value={project.siteUrl}
            onChange={handleInputChange}
            type='url'
          />
           <Form.Input fluid label="Github Repo" placeholder="Github repo url..."
            name='githubUrl'
            value={project.githubUrl}
            onChange={handleInputChange}
            type='url'
          />
        </Form.Group>
        <Form.Group widths='equal'>
        <Form.Input fluid label="Loom video link" placeholder="Loom embed url..."
            name='videoUrl'
            value={project.videoUrl}
            onChange={handleInputChange}
            type='url'
          />
           <Form.Input fluid label="Image of site" placeholder="Image url..."
            name='imageUrl'
            value={project.imageUrl}
            onChange={handleInputChange}
            type='url'
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Segment>
  );
}
ProjectForm.propTypes = {
  formTitle: PropTypes.string
};

export default ProjectForm;
