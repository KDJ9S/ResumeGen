package team.ftg.resumegen.entity;

public class Exp_Info {

    private int exp_id;
    //教育经历
    private String edu_exp;
    //项目经历
    private String project_exp;

    private int user_id;

    public int getExp_id() {
        return exp_id;
    }

    public String getEdu_exp() {
        return edu_exp;
    }

    public String getProject_exp() {
        return project_exp;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setExp_id(int exp_id) {
        this.exp_id = exp_id;
    }

    public void setEdu_exp(String edu_exp) {
        this.edu_exp = edu_exp;
    }

    public void setProject_exp(String project_exp) {
        this.project_exp = project_exp;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    @Override
    public String toString() {
        return "Exp_Info{" +
                "exp_id=" + exp_id +
                ", edu_exp='" + edu_exp + '\'' +
                ", project_exp='" + project_exp + '\'' +
                ", user_id=" + user_id +
                '}';
    }
}
