package team.ftg.resumegen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import team.ftg.resumegen.entity.Basic_Info;
import team.ftg.resumegen.entity.Exp_Info;
import team.ftg.resumegen.entity.Intent_Info;
import team.ftg.resumegen.entity.Intro_Info;
import team.ftg.resumegen.service.NewresumeService;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

@Controller()
public class TestCon {

    @Autowired
    private NewresumeService newresumeService;

    @RequestMapping("/testt")
    public String login() {
        return "../../static/template/moban1/resume.ftl";
    }
/*

    @RequestMapping("/dd")
    public String downResumeDoc(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        request.setCharacterEncoding("utf-8");

        //提示：在调用工具类生成Word文档之前应当检查所有字段是否完整
        //否则Freemarker的模板殷勤在处理时可能会因为找不到值而报错，这里暂时忽略这个步骤
        File file = null;

        response.addHeader("Content-Disposition", "attachment;filename=resume.doc");
        response.setContentType("application/msword");
        response.setCharacterEncoding("utf-8");
        WordGenerator wg = new WordGenerator();
        wg.createDoc();

        return null;
    }
*/

    @RequestMapping("/method7")
    public String myMethod7() {
        return "infoConfirm.jsp";
    }

    @RequestMapping("/method8")
    public ModelAndView myMethod8() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("template/resume3/resume3.jsp");

        return mv;
    }

    @RequestMapping("/method9")
    public ModelAndView myMethod9(Basic_Info basicInfo, Exp_Info expInfo,
                                  Intent_Info intentInfo, Intro_Info introInfo) {
//        ModelAndView mv = new ModelAndView();
//        mv.setViewName("template/resume3/resume3.jsp");
        System.out.println("!!!!!!!!!!!!!!!!!!");
        System.out.println("basicInfo:" + basicInfo);
        System.out.println("expInfo:" + expInfo);
        System.out.println("intentInfo:" + intentInfo);
        System.out.println("introInfo:" + introInfo);

        return null;
    }

}
