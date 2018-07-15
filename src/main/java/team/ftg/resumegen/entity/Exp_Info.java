package team.ftg.resumegen.entity;

public class Exp_Info {

    private int expId;
    //教育经历
    private String eduExp;
    //项目经历
    private String projectExp;

    private int userId;

    public int getExpId() {
        return expId;
    }

    public void setExpId(int expId) {
        this.expId = expId;
    }

    public String getEduExp() {
        return eduExp;
    }

    public void setEduExp(String eduExp) {
        this.eduExp = eduExp;
    }

    public String getProjectExp() {
        return projectExp;
    }

    public void setProjectExp(String projectExp) {
        this.projectExp = projectExp;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Exp_Info{" +
                "expId=" + expId +
                ", eduExp='" + eduExp + '\'' +
                ", projectExp='" + projectExp + '\'' +
                ", userId=" + userId +
                '}';
    }
}
