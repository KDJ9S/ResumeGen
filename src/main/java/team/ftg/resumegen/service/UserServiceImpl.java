package team.ftg.resumegen.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team.ftg.resumegen.dao.UserDao;
import team.ftg.resumegen.entity.User;


@Service
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
    public void register(User user) {

        userDao.registerByUsernameAndPassword(user.getUsername(), user.getPassword());

    }
}
