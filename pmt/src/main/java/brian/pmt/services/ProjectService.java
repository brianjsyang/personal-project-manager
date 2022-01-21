package brian.pmt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import brian.pmt.domain.Project;
import brian.pmt.exceptions.IdException;
import brian.pmt.repositories.ProjectRepository;

/**
 * Project Repo (Service Layer) is separate to help reduce logic in Controller.
 */

@Service
public class ProjectService {
    
    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project) {
        try{
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
            
        }catch(Exception error) {
            throw new IdException("Project ID: '" + project.getProjectIdentifier() + "' already exists");
        }
    }

    // Service Function to allow single project search.
    public Project findProjectByIdentifier(String projectId) {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        
        // Exception Handler
        if(project == null) {
            throw new IdException("Project ID: '" + projectId + "' does not exists");
        }

        return project;
    }

    // Find all projects currently in the Database
    public Iterable<Project> findAllProjects() {
        return projectRepository.findAll();
    }

    // Delete a project by project identifier
    public void deleteProjectByIdentifier(String projectId) {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        // Exception Handlers
        if (project == null) {
            throw new IdException("Cannot delete Project with ID '" + projectId + "'. This Proejct does not exist.");
        }
        
        // delete
        projectRepository.delete(project);
    }
}
