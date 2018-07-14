package team.ftg.resumegen.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import team.ftg.resumegen.entity.*;
import team.ftg.resumegen.service.NewresumeService;

@Controller
@SessionAttributes("user")
public class NewResumeController {

    @Autowired
    NewresumeService newresumeService;

    @RequestMapping("/resume")
    public String resume() { return "resume.jsp";}


    @RequestMapping("/submit")
    public String submit(Basic_Info basic_info, Intent_Info intent_info,
                         Exp_Info exp_info, Intro_Info intro_info,
                         User user){

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
                                + "\n" +newresumeService.getIntentInfo(user.getId()).toString() );


            ret = "selectTemplate.jsp";
        }catch (Exception e){
            e.printStackTrace();
            ret = "fail.jsp";
        }

        return  ret;
    }

}
