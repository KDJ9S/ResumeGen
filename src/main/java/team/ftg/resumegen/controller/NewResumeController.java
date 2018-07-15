package team.ftg.resumegen.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;
import team.ftg.resumegen.entity.*;
import team.ftg.resumegen.service.NewresumeService;

import java.util.List;

@Controller
@SessionAttributes("user")
public class NewResumeController {

    @Autowired
    private NewresumeService newresumeService;

    @RequestMapping("/resume")
    public String resume(User user) {
        // 如果之前已经填写过简历信息，直接选择模版（晚点再加上一步验证信息的页面）
        // 如果没有填写过，就到填写信息的页面
        if (newresumeService.checkStatus(user.getId())){
            return "selectTemplateOnline.jsp";
        }
        return "resume.jsp";
    }

    @RequestMapping("/submit")
    public String submit(Basic_Info basic_info, Intent_Info intent_info,
                         Exp_Info exp_info, Intro_Info intro_info,
                         User user) {

        String ret;

        try {
            newresumeService.insertBasicInfo(basic_info);
            newresumeService.insertIntentInfo(intent_info);
            newresumeService.insertExperienceInfo(exp_info);
            newresumeService.insertIntroduceInfo(intro_info);

            newresumeService.getBasicInfo(user.getId());
            newresumeService.getIntentInfo(user.getId());
            newresumeService.getExperienceInfo(user.getId());
            newresumeService.getIntroduceInfo(user.getId());
            System.out.println("打印一下" + newresumeService.getBasicInfo(user.getId()).toString()
                    + "\n" + newresumeService.getIntentInfo(user.getId()).toString());


            ret = "selectTemplateOnline.jsp";
        } catch (Exception e) {
            e.printStackTrace();
            ret = "fail.jsp";
        }

        return ret;
    }


    /*****************************返回对应简历页面*****************************************/
    @RequestMapping("/resume/resume1")
    public ModelAndView resumeTemplate1(User user) {

        ModelAndView mv = setUpModelAndView(user);

        mv.setViewName("/template/resume1/resume1.jsp");
        return mv;
    }

    @RequestMapping("/resume/resume2")
    public String resumeTemplate2() {
        return "/template/resume2/resume2.jsp";
    }

    @RequestMapping("/resume/resume3")
    public String resumeTemplate3() {
        return "/template/resume3/resume3.jsp";
    }

    @RequestMapping("/resume/resume4")
    public String resumeTemplate4() {
        return "/template/resume4/resume4.jsp";
    }

    @RequestMapping("/resume/resume5")
//    public String resumeTemplate5() {
//        return "/template/resume5/resume5.jsp";
//    }
    public ModelAndView resumeTemplate5(User user) {

        ModelAndView mv = setUpModelAndView(user);

        mv.setViewName("/template/resume5/resume5.jsp");
        return mv;
    }

    @RequestMapping("/resume/resume6")
    public String resumeTemplate6() {
        return "/template/resume6/resume6.jsp";
    }

    @RequestMapping("/resume/resume7")
    public String resumeTemplate7() {
        return "/template/resume7/resume7.jsp";
    }

    @RequestMapping("/resume/resume8")
    public String resumeTemplate8() {
        return "/template/resume8/resume8.jsp";
    }

    @RequestMapping("/resume/resume9")
    public String resumeTemplate9() {
        return "/template/resume9/resume9.jsp";
    }

    @RequestMapping("/resume/resume10")
    public String resumeTemplate10() {
        return "/template/resume10/resume10.jsp";
    }


    private ModelAndView setUpModelAndView(User user){
        ModelAndView mv = new ModelAndView();
        Basic_Info basicInfo =  newresumeService.getBasicInfo(user.getId());
        Intent_Info intentInfo =  newresumeService.getIntentInfo(user.getId());
        Exp_Info expInfo =  newresumeService.getExperienceInfo(user.getId());
        Intro_Info introInfo =  newresumeService.getIntroduceInfo(user.getId());
        mv.addObject("basicInfo",basicInfo);
        mv.addObject("intentInfo",intentInfo);
        mv.addObject("expInfo",expInfo);
        mv.addObject("introInfo",introInfo);
        return mv;
    }



}
