package team.ftg.resumegen.interceptor;


import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import team.ftg.resumegen.entity.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginInterceptor extends HandlerInterceptorAdapter {

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
        super.afterCompletion(request, response, handler, ex);
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
                           ModelAndView modelAndView) throws Exception {
        super.postHandle(request, response, handler, modelAndView);
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        request.setCharacterEncoding("UTF-8");
        String url = request.getServletPath();
        System.out.println("post URL："+url);
        if(!url.equals("") &&!url.equals("/checkExistence")){
            //判斷是否已登录
            User loginUser = (User)request.getSession().getAttribute("user");
            if(loginUser == null){
                //無session則是未登录狀態
                System.out.println(">>>未登录，請重新登录<<<");
                response.sendRedirect("/ResumeGen/login");
                return false;
            }
        }
        return true;
        //return super.preHandle(request, response, handler);
    }

}
