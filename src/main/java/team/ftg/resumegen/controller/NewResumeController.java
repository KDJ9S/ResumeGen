package team.ftg.resumegen.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes("user")
public class NewResumeController {

    @RequestMapping("/resume")
    public String resume() { return "resume.jsp";}


}
