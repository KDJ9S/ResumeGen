package team.ftg.resumegen.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team.ftg.resumegen.dao.UserDao;
import team.ftg.resumegen.entity.User;


@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    /**
     * 检验账号密码是否正确
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
     * 检验账号是否存在
     * @param username
     * @return
     */
    @Override
    public User checkExistence(String username) {

        User user = userDao.findByUsername(username);

        if ( user != null){
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
