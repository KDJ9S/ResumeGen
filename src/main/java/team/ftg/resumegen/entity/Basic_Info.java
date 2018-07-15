package team.ftg.resumegen.entity;

public class Basic_Info {

    private int basic_id;

    // 姓名
    private String name;
    // 性别
    private String gender;
    // 年龄
    private int age;
    // 国籍
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
    // 教育。。？？
    private String education;

    private int user_id;

    public void setBasic_id(int basic_id) {
        this.basic_id = basic_id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getBasic_id() {
        return basic_id;
    }

    public String getName() {
        return name;
    }

    public String getGender() {
        return gender;
    }

    public int getAge() {
        return age;
    }

    public String getNation() {
        return nation;
    }

    public String getCity() {
        return city;
    }

    public String getTel() {
        return tel;
    }

    public String getEmail() {
        return email;
    }

    public String getSchool() {
        return school;
    }

    public String getMajor() {
        return major;
    }

    public String getEducation() {
        return education;
    }

    public int getUser_id() {
        return user_id;
    }

    @Override
    public String toString() {
        return "Basic_Info{" +
                "basic_id=" + basic_id +
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
                ", user_id=" + user_id +
                '}';
    }
}
