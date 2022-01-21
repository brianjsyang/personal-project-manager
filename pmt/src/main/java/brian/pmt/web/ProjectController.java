package brian.pmt.web;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import brian.pmt.domain.Project;
import brian.pmt.services.MapValidation;
import brian.pmt.services.ProjectService;

@RestController
@CrossOrigin
@RequestMapping("/api/project")
public class ProjectController {
    
    @Autowired
    private ProjectService projectService;

    @Autowired
    private MapValidation mapValidation;

    /**
     * Route for POST new project and validation
     * @param project
     * @param result  Analyzes object to determine if any error exists.
     * @return list: Returns list of field errors 
     */
    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidation.MapValidationFunc(result);
        if(errorMap!=null) return errorMap;
        
        Project project1 = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<Project>(project1, HttpStatus.CREATED);
    }
    
    /**
     * Find a single instnace of the project that matches @param
     * @param projectId
     * @return
     */
    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectById(@PathVariable String projectId){
        Project project = projectService.findProjectByIdentifier(projectId);

        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    /**
     * Find all projects currently in the Database
     * @return
     */
    @GetMapping("/all")
    public Iterable<Project> getAllProjects() {
        return projectService.findAllProjects();
    }

    /**
     * Delete a project with match project ID.
     * @param projectId     Project to delete.
     * @return
     */
    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectId) {
        projectService.deleteProjectByIdentifier(projectId);
        
        return new ResponseEntity<String>("Project with ID '" + projectId + "' was deleted successfully.", HttpStatus.OK);
    }
}
