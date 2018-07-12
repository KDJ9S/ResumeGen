package team.ftg.resumegen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import team.ftg.resumegen.entity.User;
import team.ftg.resumegen.service.UserService;

@Controller
public class TestController {

    @Autowired
    UserService userService;

    @RequestMapping("/method1")
    public String myMethod1() {
        return "index.jsp";
    }

    /**
     * 单个参数测试
     */
    @RequestMapping("/method2")
    public ModelAndView myMethod2(String id) throws Exception {
        ModelAndView mv = new ModelAndView();
        // query by id
        User user = userService.getUserById(Integer.parseInt(id));

        mv.addObject("user", user);
        mv.setViewName("testDb.jsp");
        return mv;
    }

    /**
     * 多个参数测试
     *
     * 添不添加@RequestParam都可以获取到字段名
     * 区别在于添加该注解后该参数变为url中必须给出的字段，url中不给出就会报错
     * 不添加该注解，不给出该字段时就不会报错
     */
    @RequestMapping("/method3")
    public ModelAndView myMethod3(@RequestParam String username, @RequestParam String password) throws Exception {
        ModelAndView mv = new ModelAndView();
        // query by info
        User user = userService.getUserByInfo(username,password);

        mv.addObject("user", user);
        mv.setViewName("testDb2.jsp");
        return mv;
    }

}
