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
    private UserService userService;

    /**
     * 访问 登录 页面
     *
     * @return
     */
    @RequestMapping("/login")
    public String login() {
        return "login.jsp";
    }

    /**
     * 登录处理
     */
    @RequestMapping("/checkLogin")
    public ModelAndView checkLogin(User user, Model model) {
        ModelAndView mav;
        user = userService.checkLogin(user.getUsername(), user.getPassword());

        //客户端跳转，防止返回时需要重新提交表单
        if (user != null) {
            mav = new ModelAndView("redirect:/main");
            model.addAttribute("user", user);
            return mav;
        }

        mav = new ModelAndView("redirect:/fail");
        return mav;

    }

    /**
     * 登录成功，访问 主页
     *
     * @return
     */
    @RequestMapping("/main")
    public String main() {
        return "main.jsp";
    }

    /**
     * 登录失败
     *
     * @return
     */
    @RequestMapping("/fail")
    public String test() {
        return "fail.jsp";
    }


    /**
     * 访问 注册 页面
     *
     * @return
     */
    @RequestMapping("/register")
    public String register() {
        return "register.jsp";
    }

    /**
     * 注册处理
     *
     * @param user
     * @return
     */
    @RequestMapping("/doRegister")
    public ModelAndView doRegister(User user, Model model) {

        int flag = userService.register(user);

        if (flag != 0) {
            //客户端跳转，防止返回时需要重新提交表单
            ModelAndView mav = new ModelAndView("redirect:/main");
            //更新Session中的user对象，修复id的问题
            user = userService.checkLogin(user.getUsername(), user.getPassword());
            model.addAttribute("user", user);

            return mav;
        }
        ModelAndView mav = new ModelAndView("redirect:/fail");
        return mav;

    }


    /**
     * 注销账号
     *
     * @param session
     * @return
     */
    @RequestMapping("/outLogin")
    public ModelAndView outLogin(HttpSession session) {
        //注销当前的Session
        session.invalidate();

        ModelAndView mav = new ModelAndView("redirect:/login");
        return mav;
    }

    /*跳转到关于我们*/
    @RequestMapping("/aboutUs")
    public String getToUs() {
        return "aboutUs.jsp";
    }

}
