package brian.pmt.exceptions;

/**
 * Custom Exception Handler to prevent duplicate Proejct ID.
 */

public class IdExceptionRes {
    private String projectIdentifier;

    public IdExceptionRes(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }

    public String getProjectIdentifier() {
        return projectIdentifier;
    }

    public void setProjectIdentifier(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }
}
