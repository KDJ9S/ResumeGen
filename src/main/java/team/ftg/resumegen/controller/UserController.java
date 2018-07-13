package team.ftg.resumegen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import team.ftg.resumegen.entity.User;
import team.ftg.resumegen.service.UserService;

import javax.servlet.http.HttpSession;

@Controller
@SessionAttributes("user")
public class UserController {

    @Autowired
    UserService userService;

    /**
     * 访问 登录 页面
     * @return
     */
    @RequestMapping("/login")
    public String login() { return "login.jsp";}

    /**
     * 登录
     */
    @RequestMapping("/checkLogin")
    public String checkLogin(User user, Model model){

        user = userService.checkLogin(user.getUsername(), user.getPassword());

        if (user != null){
            model.addAttribute("user", user);
            return "main.jsp";
        }

        return "fail.jsp";

    }

    /**
     * 访问 注册 页面
     * @return
     */
    @RequestMapping("/register")
    public String register() { return "register.jsp";}


    /**
     * 注册
     * @param user
     * @param model
     * @return
     */
    @RequestMapping("/doRegister")
    public String doRegister(User user, Model model){
        System.out.println(user.getUsername());
        userService.register(user);

        return "success.jsp";

    }

    /**
     * 注销账号
     * @param session
     * @return
     */
    @RequestMapping("/outLogin")
    public String outLogin(HttpSession session){
        //注销当前的Session
        session.invalidate();

        return "login.jsp";
    }
}
