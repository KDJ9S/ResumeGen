package team.ftg.resumegen.dao;

import org.apache.ibatis.annotations.Param;
import team.ftg.resumegen.entity.User;

/**
 * UserDao接口
 */
public interface UserDao {

    /**
     * 查找用户名和密码
     * @param username  登录用户名
     * @return
     */
    User findByUsername(String username);

    /**
     * 注册用户和密码
     * @param username
     * @param password
     */
    void registerByUsernameAndPassword(@Param("username") String username, @Param("password") String password);


}
