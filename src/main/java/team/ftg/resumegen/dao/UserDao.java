package team.ftg.resumegen.dao;

import org.apache.ibatis.annotations.Param;
import team.ftg.resumegen.entity.User;

/**
 * 用户实体类
 */
public interface UserDao {
    // 测试一下数据库连接性
    User getUserById (int id) throws Exception;

    User getUserByInfo(@Param("username") String username, @Param("password") String password) throws Exception;
}
