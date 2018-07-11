package team.ftg.resumegen.util;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class ApplicationContextUtil {
    private static ApplicationContext context;

    static {
        context = new ClassPathXmlApplicationContext("/spring/spring-mybatis.xml");
    }

    public static ApplicationContext getApplicationContext() {
        return context;
    }
}
