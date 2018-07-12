package team.ftg.resumegen.service;

import team.ftg.resumegen.entity.User;

public interface UserService {

    //检验登录账号是否存在
    User checkLogin(String username, String password);

    //注册
    void register(User user);
}
