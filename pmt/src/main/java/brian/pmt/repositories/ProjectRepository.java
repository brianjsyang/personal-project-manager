package brian.pmt.repositories;

import brian.pmt.domain.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long>{

    @Override
    Iterable<Project> findAll();

    // Find Single Project by Identifier
    Project findByProjectIdentifier(String projectIdentifier);
}