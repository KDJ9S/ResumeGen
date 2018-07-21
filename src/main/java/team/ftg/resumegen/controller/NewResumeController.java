package team.ftg.resumegen.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;
import team.ftg.resumegen.entity.*;
import team.ftg.resumegen.service.NewresumeService;

import java.io.File;
import java.util.List;
import java.util.UUID;

@Controller
@SessionAttributes("user")
public class NewResumeController {

    @Autowired
    private NewresumeService newresumeService;

    @RequestMapping("/resume")
    public ModelAndView resume(User user) {
        ModelAndView mv = new ModelAndView();
        // 如果之前已经填写过简历信息，直接选择模版（晚点再加上一步验证信息的页面）
        // 如果没有填写过，就到填写信息的页面
        if (newresumeService.checkStatus(user.getId())) {

            mv = setUpModelAndView4Confirm(user);
            mv.setViewName("infoConfirm.jsp");
            return mv;
        }
        mv.setViewName("resume.jsp");
        return mv;
    }

    /**
     * 初次选择模版时填写的简历信息
     * @return
     */
    @RequestMapping("/submit")
    public ModelAndView submit(Basic_Info basic_info, Intent_Info intent_info,
                               Exp_Info exp_info, Intro_Info intro_info) {

        // 替换换行符成<br/>再存入数据库，保证html页面的换行效果
        intro_info.setIntroduce(intro_info.getIntroduce().replaceAll("\r","<br/>"));
        exp_info.setEduExp(exp_info.getEduExp().replaceAll("\r","<br/>"));
        exp_info.setProjectExp(exp_info.getProjectExp().replaceAll("\r","<br/>"));

        try {
            //保存数据库的路径
            String sqlPath = null;
            //定义文件保存的本地路径
            String localPath="/Users/sugar/Desktop/images/";
            //定义 文件名
            String filename=null;

            if(!basic_info.getPhoto().isEmpty()){
                //生成uuid作为文件名称
                String uuid = UUID.randomUUID().toString().replaceAll("-","");
                //获得文件类型（可以判断如果不是图片，禁止上传）
                String contentType=basic_info.getPhoto().getContentType();
                //获得文件后缀名
                String suffixName=contentType.substring(contentType.indexOf("/")+1);
                //得到 文件名
                filename=uuid+"."+suffixName;
                //文件保存路径
                basic_info.getPhoto().transferTo(new File(localPath+filename));
            }
            //把图片的相对路径保存至数据库
            sqlPath = "/images/"+filename;
            basic_info.setImage(sqlPath);

            newresumeService.insertBasicInfo(basic_info);
            newresumeService.insertIntentInfo(intent_info);
            newresumeService.insertExperienceInfo(exp_info);
            newresumeService.insertIntroduceInfo(intro_info);

            ModelAndView mav = new ModelAndView("redirect:/selectTemplateOnline");


            return mav;
        } catch (Exception e) {

            ModelAndView mav = new ModelAndView("redirect:/fail");
            return mav;
        }
    }

    /**
     * 用于已经填过简历信息的用户的再次确认和更新信息
     * @return 对应视图
     */
    @RequestMapping("/confirmInfo")
    public ModelAndView confirmInfo(Basic_Info basicInfo, Exp_Info expInfo,
                                    Intent_Info intentInfo, Intro_Info introInfo) {
        ModelAndView mv = new ModelAndView();

        // 替换换行符成<br/>再存入数据库，保证html页面的换行效果
        introInfo.setIntroduce(introInfo.getIntroduce().replaceAll("\r","<br/>"));
        expInfo.setEduExp(expInfo.getEduExp().replaceAll("\r","<br/>"));
        expInfo.setProjectExp(expInfo.getProjectExp().replaceAll("\r","<br/>"));

        // 执行更新，i为影响的行数，成功应为4，因为执行了4个表的更新
        int i = newresumeService.updateAllResumeInfo(basicInfo, intentInfo, expInfo, introInfo);

        if (i >= 4) { //全部更新成功，进入选择模版页
            mv.setViewName("redirect:/selectTemplateOnline");
        } else { //有失败，则返回首页
            mv.setViewName("redirect:/main");
        }

        return mv;
    }

    @RequestMapping("/selectTemplateOnline")
    public String selectTemplateOnline() {
        return "selectTemplateOnline.jsp";
    }


    /**********************************返回对应简历页面**************************************/
    @RequestMapping("/resume/resume1")
    public ModelAndView resumeTemplate1(User user) {

        ModelAndView mv = setUpModelAndView(user);

        mv.setViewName("/template/resume1/resume1.jsp");
        return mv;
    }

    @RequestMapping("/resume/resume2")
    public ModelAndView resumeTemplate2(User user) {
        ModelAndView mv = setUpModelAndView(user);

        mv.setViewName("/template/resume2/resume2.jsp");
        return mv;
    }

    @RequestMapping("/resume/resume3")
    public ModelAndView resumeTemplate3(User user) {
        ModelAndView mv = setUpModelAndView(user);

        mv.setViewName("/template/resume3/resume3.jsp");
        return mv;
    }

    @RequestMapping("/resume/resume4")
    public ModelAndView resumeTemplate4(User user) {
        ModelAndView mv = setUpModelAndView(user);

        mv.setViewName("/template/resume4/resume4.jsp");
        return mv;
    }

    @RequestMapping("/resume/resume5")
    public ModelAndView resumeTemplate5(User user) {

        ModelAndView mv = setUpModelAndView(user);

        mv.setViewName("/template/resume5/resume5.jsp");
        return mv;
    }

    /**
     * 获取简历信息并添加到modelAndView中返回
     *
     * @param user session中用户的信息
     * @return 添加好简历信息的modelAndView
     */
    private ModelAndView setUpModelAndView(User user) {
        ModelAndView mv = new ModelAndView();
        Basic_Info basicInfo = newresumeService.getBasicInfo(user.getId());
        Intent_Info intentInfo = newresumeService.getIntentInfo(user.getId());
        Exp_Info expInfo = newresumeService.getExperienceInfo(user.getId());
        Intro_Info introInfo = newresumeService.getIntroduceInfo(user.getId());

        mv.addObject("basicInfo", basicInfo);
        mv.addObject("intentInfo", intentInfo);
        mv.addObject("expInfo", expInfo);
        mv.addObject("introInfo", introInfo);
        mv.addObject("user", user);
        return mv;
    }

    /**
     * 为infoConfirm.jsp页面获取简历信息并添加到modelAndView中返回
     *
     * @param user session中用户的信息
     * @return 添加好简历信息的modelAndView
     */
    private ModelAndView setUpModelAndView4Confirm(User user) {
        ModelAndView mv = new ModelAndView();
        Basic_Info basicInfo = newresumeService.getBasicInfo(user.getId());
        Intent_Info intentInfo = newresumeService.getIntentInfo(user.getId());
        Exp_Info expInfo = newresumeService.getExperienceInfo(user.getId());
        Intro_Info introInfo = newresumeService.getIntroduceInfo(user.getId());

        // 替换<br/>成空，再添加到jsp页面
        // 为了防止jsp页面内容中显示了<br/>标签
        introInfo.setIntroduce(introInfo.getIntroduce().replaceAll("<br/>",""));
        expInfo.setEduExp(expInfo.getEduExp().replaceAll("<br/>",""));
        expInfo.setProjectExp(expInfo.getProjectExp().replaceAll("<br/>",""));

        mv.addObject("basicInfo", basicInfo);
        mv.addObject("intentInfo", intentInfo);
        mv.addObject("expInfo", expInfo);
        mv.addObject("introInfo", introInfo);
        mv.addObject("user", user);
        return mv;
    }


}
