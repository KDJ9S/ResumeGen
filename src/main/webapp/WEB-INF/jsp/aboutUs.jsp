<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8" %>
<html>
<head>
    <title>Learn About Us</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="Soft Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template,
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
    <script>
        addEventListener("load", function () {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>
    <!-- //meta-tags -->
    <link href="<c:url value="/static/css/aboutUs/bootstrap.css"/>" rel="stylesheet" type="text/css" media="all" />
    <link href="<c:url value="/static/css/aboutUs/style.css"/>" rel="stylesheet" type="text/css" media="all" />
    <!-- font-awesome -->
    <link href="<c:url value="/static/css/aboutUs/font-awesome.css"/>" rel="stylesheet">
    <!-- fonts -->
    <link href="<c:url value="//fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"/>"
          rel="stylesheet">
    <link href="<c:url value="//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"/>" rel="stylesheet">
    <link href="<c:url value="/static/assets/css/bootstrap.min.css"/>" rel="stylesheet"/>
</head>
<body>


<div class="services-breadcrumb"><%--header --%>
    <div class="content white"><%----%>
        <nav class="navbar navbar-default"><%----%>
            <div class="container">
                <!--/.navbar-header-->
                <div align="center" class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <nav class="link-effect-2" id="link-effect-2">
                        <ul class="nav navbar-nav">
                            <li>
                                <a href="<c:url value="/main"/>" class="effect-3">首页</a>
                            </li>
                            <li class="active">
                                <a href="<c:url value="/aboutUs"/>" class="effect-3">关于我们</a>
                            </li>
                            <li>
                                <a href="#introUs" class="effect-3">团队成员</a>
                            </li>
                            <li>
                                <a href="#contact" class="effect-3">联系我们</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <!--/.navbar-collapse-->
            </div>
        </nav>
    </div>
</div>


<div class="about-sec" id="about" style="background-image: url('/static/images/aboutUs/backUs2.jpg');">
    <div class="container">
        <div class="title-div">
            <h3 class="tittle">
                <span>关于</span>我们
                <%--<span>U</span>s--%>
            </h3>
            <div class="tittle-style">

            </div>
        </div>
        <div class="about-sub">
            <div class="col-md-6 about_bottom_left">
                <h4>欢迎来到
                    <span>简历网</span>
                </h4>
                <p><span>面临</span>求职的你是否还在为写不出简历而发愁？</p>
                <p>面临求职的你是否还在为写不出一份匠心独具的简历而发愁？</p>
                <p>我们的团队致力于打造一流的简历生成网站。您可以注册终生账号，免费寻找模板，在线免费制作，免费下载。</p>
                <p>简历网将竭诚为您服务！</p>
                <%--<a class="button-style" href="/main">加入我们</a>--%>
            </div>
            <!-- Stats-->
            <div class="col-md-6 about2-info">
                <img src="<c:url value="/static/images/aboutUs/graduate.png"/>" alt="" />
            </div>
            <!-- //Stats -->
            <div class="clearfix"> </div>
        </div>
    </div>
</div>
<!-- //about -->

<!-- //Achievements -->

<!-- footer -->
<div class="mkl_footer" id="contact">
    <div class="sub-footer" style="background-image: url('/static/images/aboutUs/beijing2.jpg')">
        <div class="container">
            <div class="mkls_footer_grid">
                <div class="col-xs-4 mkls_footer_grid_left">
                    <h4>位置：</h4>
                    <p>中国
                        <br> 北京市海淀区学院路30号</p>
                </div>
                <div class="col-xs-4 mkls_footer_grid_left">
                    <h4>邮箱:</h4>
                    <p>
                        <span>No.1 : </span>001 234 5678
                        <a href="hillkingwenni@163.com">mail1@example.com</a>

                    </p>

                    <p>
                        <span>No.2 : </span>
                        <a href="hillkingwenni@163.com">mail2@example.com</a>
                    </p>
                </div>
                <div class="col-xs-4 mkls_footer_grid_left">
                    <h4>联系电话:</h4>
                    <p>顾松：13209766666<br>
                       唐载钏：13722222222<br>
                       冯文霓：15109711234
                    </p>

                </div>
                <div class="clearfix"> </div>
            </div>
            <div class="botttom-nav-allah">
                <ul>
                    <li>
                        <a href="/main">首页</a>
                    </li>
                    <li>
                        <a href="/aboutUs">关于我们</a>
                    </li>
                    <li>
                        <a href="#contact">联系我们</a>
                    </li>
                </ul>
            </div>
            <!-- footer-button-info -->
            <div class="footer-middle-thanks">
                <h2>Thanks For watching</h2>
            </div>
            <!-- footer-button-info -->
        </div>
    </div>


    <div class="footer-copy-right">
        <div class="container">
            <div class="allah-copy">
                <p>© 2018 ResumeGen. All rights reserved
                </p>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</div>
<!--/footer -->




<!-- js files -->
<!-- js -->
<script src="<c:url value="/static/js/aboutUs/jquery-2.1.4.min.js"/>"></script>
<!-- bootstrap -->
<script src="<c:url value="/static/js/aboutUs/bootstrap.js"/>"></script>
<!-- stats numscroller-js-file -->
<script src="<c:url value="/static/js/aboutUs/numscroller-1.0.js"/>"></script>
<!-- //stats numscroller-js-file -->
<!-- smooth scrolling -->
<script src="<c:url value="/static/js/aboutUs/SmoothScroll.min.js"/>"></script>
<script src="<c:url value="/static/js/aboutUs/move-top.js"/>"></script>
<script src="<c:url value="/static/js/aboutUs/easing.js"/>"></script>
<!-- here stars scrolling icon -->
<script>
    $(document).ready(function () {
        /*
            var defaults = {
            containerID: 'toTop', // fading element id
            containerHoverID: 'toTopHover', // fading element hover id
            scrollSpeed: 1200,
            easingType: 'linear'
            };
        */

        $().UItoTop({
            easingType: 'easeOutQuart'
        });

    });
</script>
<!-- //here ends scrolling icon -->
<!-- smooth scrolling -->
<!-- //js-files -->
</body>
</html>
