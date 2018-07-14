package team.ftg.resumegen.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes("user")
public class TemplateController {

    @RequestMapping("/template")
    public String template() { return "template.jsp";}


    @RequestMapping("/selectTemplate")
    public String selectTemplate() { return "selectTemplate.jsp";}
}
