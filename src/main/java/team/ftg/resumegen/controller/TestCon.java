package team.ftg.resumegen.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

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
    public String myMethod7(){
        return "template/resume4/resume4.jsp";
    }

    @RequestMapping("/method8")
    public ModelAndView myMethod8(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("template/resume3/resume3.jsp");

        return mv;
    }

}
