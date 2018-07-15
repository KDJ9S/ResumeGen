package team.ftg.resumegen.entity;

public class Basic_Info {

    private int basicId;

    // 姓名
    private String name;
    // 性别
    private String gender;
    // 年龄
    private int age;
    // 民族
    private String nation;
    // 城市
    private String city;
    // 电话
    private String tel;
    // 邮箱
    private String email;
    // 毕业院校
    private String school;
    // 专业
    private String major;
    // 学历
    private String education;

    private int userId;

    public int getBasicId() {
        return basicId;
    }

    public void setBasicId(int basicId) {
        this.basicId = basicId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Basic_Info{" +
                "basicId=" + basicId +
                ", name='" + name + '\'' +
                ", gender='" + gender + '\'' +
                ", age=" + age +
                ", nation='" + nation + '\'' +
                ", city='" + city + '\'' +
                ", tel='" + tel + '\'' +
                ", email='" + email + '\'' +
                ", school='" + school + '\'' +
                ", major='" + major + '\'' +
                ", education='" + education + '\'' +
                ", userId=" + userId +
                '}';
    }
}
