package team.ftg.resumegen.dao;

import org.apache.ibatis.annotations.Param;
import team.ftg.resumegen.entity.Resume_id;
import team.ftg.resumegen.entity.User;

import java.util.List;

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
    int registerByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

    /**
     * 查询 我的简历
     * @param user_id 用户id
     * @return 该用户保存过的所有简历id列表
     */
    List<Resume_id> getMyResume(int user_id);

    /**
     * 保存至 我的简历
     */
    int insertMyResume(int user_id, int resume_id);

}
