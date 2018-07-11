package team.ftg.resumegen.service;

import team.ftg.resumegen.entity.User;

public interface UserService {
    // 单个参数
    User getUserById(int id) throws Exception;

    // 多个参数
    User getUserByInfo(String username, String password) throws Exception;
}
