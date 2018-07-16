package team.ftg.resumegen.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team.ftg.resumegen.dao.UserDao;
import team.ftg.resumegen.entity.Resume_id;
import team.ftg.resumegen.entity.User;

import java.util.List;


@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    /**
     * 检验登录账号是否存在
     * @param username
     * @param password
     * @return
     */
    @Override
    public User checkLogin(String username, String password) {

        User user = userDao.findByUsername(username);

        if ( user != null && user.getPassword().equals(password)){

            return user;
        }

        return null;
    }

    /**
     * 注册
     * @param user
     */
    @Override
    public int register(User user) {

        return userDao.registerByUsernameAndPassword(user.getUsername(), user.getPassword());

    }

    /**
     * 查询 我的简历
     * @param user_id
     * @return
     */
    @Override
    public List<Resume_id> getMyResume(int user_id) {
        return userDao.getMyResume(user_id);
    }

    /**
     * 保存 我的简历
     * @return
     */
    @Override
    public int saveMyResume(Resume_id resumeId) {
        int user_id = Integer.parseInt(resumeId.getUserId());
        int resume_id = Integer.parseInt(resumeId.getResumeId());
        System.out.println("saveMyResumeServiceImpl:");
        System.out.println("user_id:" + user_id);
        System.out.println("resume_id:" + resume_id);
        return userDao.insertMyResume(user_id,resume_id);
    }
}