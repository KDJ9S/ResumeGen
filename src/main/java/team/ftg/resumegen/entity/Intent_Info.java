package team.ftg.resumegen.entity;

public class Intent_Info {

    private int intent_id;

    private String position;

    private String job_type;

    private String work_position;

    private String salary;

    private int user_id;

    public int getIntent_id() {
        return intent_id;
    }

    public String getPosition() {
        return position;
    }

    public String getJob_type() {
        return job_type;
    }

    public String getWork_position() {
        return work_position;
    }

    public String getSalary() {
        return salary;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setIntent_id(int intent_id) {
        this.intent_id = intent_id;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setJob_type(String job_type) {
        this.job_type = job_type;
    }

    public void setWork_position(String work_position) {
        this.work_position = work_position;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
}
