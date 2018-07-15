package team.ftg.resumegen.entity;

public class Intro_Info {

    private int intro_id;
    //个人介绍
    private String introduce;

    private int user_id;

    public int getIntro_id() {
        return intro_id;
    }

    public String getIntroduce() {
        return introduce;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setIntro_id(int intro_id) {
        this.intro_id = intro_id;
    }

    public void setIntroduce(String introduce) {
        this.introduce = introduce;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    @Override
    public String toString() {
        return "Intro_Info{" +
                "intro_id=" + intro_id +
                ", introduce='" + introduce + '\'' +
                ", user_id=" + user_id +
                '}';
    }
}
