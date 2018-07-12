package team.ftg.resumegen.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team.ftg.resumegen.dao.UserDao;
import team.ftg.resumegen.entity.User;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User getUserById(int id) throws Exception {
        return userDao.getUserById(id);
    }

    @Override
    public User getUserByInfo(String username, String password) throws Exception {
        return userDao.getUserByInfo(username, password);
    }
}
