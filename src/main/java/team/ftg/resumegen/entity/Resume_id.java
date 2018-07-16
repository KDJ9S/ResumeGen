package team.ftg.resumegen.entity;

public class Resume_id {

    private String userId;

    private String resumeId;

    @Override
    public String toString() {
        return "Resume_id{" +
                "userId='" + userId + '\'' +
                ", resumeId='" + resumeId + '\'' +
                '}';
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }



    public String getResumeId() {
        return resumeId;
    }

    public void setResumeId(String resumeId) {
        this.resumeId = resumeId;
    }

}
