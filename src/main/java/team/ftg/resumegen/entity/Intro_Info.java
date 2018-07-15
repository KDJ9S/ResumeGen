package team.ftg.resumegen.entity;

public class Intro_Info {

    private int introId;
    //个人介绍
    private String introduce;

    private int userId;

    public int getIntroId() {
        return introId;
    }

    public void setIntroId(int introId) {
        this.introId = introId;
    }

    public String getIntroduce() {
        return introduce;
    }

    public void setIntroduce(String introduce) {
        this.introduce = introduce;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Intro_Info{" +
                "introId=" + introId +
                ", introduce='" + introduce + '\'' +
                ", userId=" + userId +
                '}';
    }
}
