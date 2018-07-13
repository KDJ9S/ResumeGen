package team.ftg.resumegen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;
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
     * 登录处理
     */
    @RequestMapping("/checkLogin")
    public ModelAndView checkLogin(User user, Model model){
        ModelAndView mav;
        user = userService.checkLogin(user.getUsername(), user.getPassword());

        //客户端跳转，防止返回时需要重新提交表单
        if (user != null){
            mav = new ModelAndView("redirect:/main");
            model.addAttribute("user", user);
            return mav;
        }

        mav = new ModelAndView("redirect:/test");
        return mav;

    }

    /**
     * 登录成功，访问 主页
     * @return
     */
    @RequestMapping("/main")
    public String main() { return "main.jsp";}

    /**
     * 登录失败，访问测试页面
     * @return
     */
    @RequestMapping("/test")
    public String test() { return "test.jsp";}


    /**
     * 访问 注册 页面
     * @return
     */
    @RequestMapping("/register")
    public String register() { return "register.jsp";}


    /**
     * 注册处理
     * @param user
     * @return
     */
    @RequestMapping("/doRegister")
    public ModelAndView doRegister(User user){

        userService.register(user);

        //客户端跳转，防止返回时需要重新提交表单
        ModelAndView mav = new ModelAndView("redirect:/main");
        return mav;

    }

    /**
     * 注销账号
     * @param session
     * @return
     */
    @RequestMapping("/outLogin")
    public ModelAndView outLogin(HttpSession session){
        //注销当前的Session
        session.invalidate();

        ModelAndView mav = new ModelAndView("redirect:/login");
        return mav;
    }

    @RequestMapping("/jianli")
    public String getjianli(){
        return "test1.jsp";
    }
}
