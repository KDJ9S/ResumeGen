package team.ftg.resumegen.entity;

public class Basic_Info {

    private int basic_id;
    private String name;
    private String gender;
    private int age;
    private String location;
    private String tel;
    private String email;
    private String school;
    private String introduce;
    private int user_id;

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

    public String getLocation() {
        return location;
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

    public String getIntroduce() {
        return introduce;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setId(int basic_id) {
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

    public void setLocation(String location) {
        this.location = location;
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

    public void setIntroduce(String introduce) {
        this.introduce = introduce;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
}
