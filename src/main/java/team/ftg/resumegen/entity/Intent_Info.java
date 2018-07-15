package team.ftg.resumegen.entity;

public class Intent_Info {

    private int intentId;
    // 申请职位
    private String position;
    // 工作类型
    private String jobType;
    // 工作城市
    private String workCity;
    // 预期薪水
    private String salary;

    private int userId;


    public int getIntentId() {
        return intentId;
    }

    public void setIntentId(int intentId) {
        this.intentId = intentId;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getJobType() {
        return jobType;
    }

    public void setJobType(String jobType) {
        this.jobType = jobType;
    }

    public String getWorkCity() {
        return workCity;
    }

    public void setWorkCity(String workCity) {
        this.workCity = workCity;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Intent_Info{" +
                "intentId=" + intentId +
                ", position='" + position + '\'' +
                ", job_type='" + jobType + '\'' +
                ", workCity='" + workCity + '\'' +
                ", salary='" + salary + '\'' +
                ", userId=" + userId +
                '}';
    }
}
