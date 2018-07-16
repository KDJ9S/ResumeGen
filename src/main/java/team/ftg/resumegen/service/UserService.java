package team.ftg.resumegen.service;

import team.ftg.resumegen.entity.Resume_id;
import team.ftg.resumegen.entity.User;

import java.util.List;

public interface UserService {

    //检验登录账号是否存在
    User checkLogin(String username, String password);

    //注册
    int register(User user);

    //查询 我的简历
    List<Resume_id> getMyResume(int user_id);

    int saveMyResume(Resume_id resumeId);
}