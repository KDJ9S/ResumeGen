package team.ftg.resumegen.service;

import team.ftg.resumegen.entity.User;

public interface UserService {

    //检验账号密码是否正确
    User checkLogin(String username, String password);

    //检验账号是否存在
    User checkExistence(String username);

    //注册
    void register(User user);
}
