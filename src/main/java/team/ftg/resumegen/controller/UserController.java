package team.ftg.resumegen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;
import team.ftg.resumegen.entity.User;
import team.ftg.resumegen.service.UserService;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

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
    public @ResponseBody
    Map<String, String> checkLogin(@RequestBody User user, Model model) {
        // 待转换成JSon格式的响应Map
        Map<String, String> map = new HashMap<>();
        // 查询是否存在该用户
        user = userService.checkLogin(user.getUsername(), user.getPassword());
        // 成功与否的标志
        String flag;
        if (user == null) { //失败
            flag = "failure";
        } else { //成功
            // 把user对象加入到session
            model.addAttribute("user", user);
            flag = "success";
        }
        // 将FLag标志为放入map
        map.put("flag", flag);
        return map;
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
     * 访问 注册 页面
     *
     * @return
     */
    @RequestMapping("/register")
    public String register() {
        return "register.jsp";
    }

    /**
     * 注册时的username查重
     *
     * @return
     */
    @RequestMapping("/checkExistence")
    public @ResponseBody
    Map<String, String> checkExistence(@RequestBody User user) {

        // 待转换成JSon格式的响应Map
        Map<String, String> map = new HashMap<>();
        // 成功与否的标志
        String flag;

        // 查询是否存在该用户
        User us = userService.checkExistence(user.getUsername());
        if (us == null) { // 不存在，该用户名可以被注册
            flag = "false";
        } else { // 存在，该用户名已被注册
            flag = "true";
        }
        // 将FLag标志为放入map
        map.put("flag", flag);
        return map;
    }


    /**
     * 注册处理
     *
     * @return map-->json格式
     */
    @RequestMapping("/doRegister")
    public @ResponseBody
    Map<String, String> doRegister(@RequestBody User user, Model model) {

        // 待转换成JSon格式的响应Map
        Map<String, String> map = new HashMap<>();
        // 响应标志位
        String flag;

        if (userService.register(user) > 0) { // 注册成功
            // 更新Session中的user对象，修复id的问题
            user = userService.checkLogin(user.getUsername(), user.getPassword());
            model.addAttribute("user", user);

            flag = "success";
        } else {
            flag = "failure";
        }
        // 置入标志位
        map.put("flag", flag);

        return map;
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
