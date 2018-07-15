package team.ftg.resumegen.entity;

public class Intent_Info {

    private int intent_id;
    // 申请职位
    private String position;
    // 工作类型
    private String job_type;
    // 工作城市
    private String work_city;
    // 预期薪水
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

    public String getWork_city() {

        return work_city;
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

    public void setWork_city(String work_city) {
        this.work_city = work_city;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    @Override
    public String toString() {
        return "Intent_Info{" +
                "intent_id=" + intent_id +
                ", position='" + position + '\'' +
                ", job_type='" + job_type + '\'' +
                ", work_city='" + work_city + '\'' +
                ", salary='" + salary + '\'' +
                ", user_id=" + user_id +
                '}';
    }
}
