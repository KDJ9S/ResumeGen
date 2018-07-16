package team.ftg.resumegen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;
import team.ftg.resumegen.entity.Resume_id;
import team.ftg.resumegen.entity.User;
import team.ftg.resumegen.service.UserService;

import java.util.List;
import java.util.Map;

@Controller
@SessionAttributes("user")
public class MyResumeController {

    @Autowired
    private UserService userService;

    /**
     * 访问 我的简历 页面
     * @return
     */
    @RequestMapping("/myResume")
    public ModelAndView myResume(User user){
        ModelAndView mv = new ModelAndView();
        List<Resume_id> resumeIdList = userService.getMyResume(user.getId());
        System.out.println(resumeIdList.toString());
        mv.addObject("resumeIdList",resumeIdList);
        mv.setViewName("myResume.jsp");
        return mv;
    }

    @RequestMapping("saveMyResume")
    public @ResponseBody
    Map<String,String> saveMyResume(@RequestBody Resume_id resumeId) throws Exception{

        int i = userService.saveMyResume(resumeId);
        System.out.println("look!!!!!" + i);
        return null;
    }
}
