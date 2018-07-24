<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <!--mobile apps-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="" />
    <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
    <!--mobile apps-->
    <!--Custom Theme files -->
    <link href="<c:url value="/static/css/bootstrap.css"/>" type="text/css" rel="stylesheet" media="all">
    <link href="<c:url value="/static/css/mainstyle.css"/>" type="text/css" rel="stylesheet" media="all">
    <link rel="stylesheet" type="text/css" href="<c:url value="/static/css/component.css"/>" />
    <link rel="stylesheet" href="<c:url value="/static/css/swipebox.css"/>">

    <!-- //Custom Theme files -->
    <!-- js -->
    <script src="<c:url value="/static/js/modernizr.custom.js"/>"></script>
    <%--<script src="/static/js/jquery-1.11.1.min.js"></script>--%>
    <script type="text/javascript" src="<c:url value="/static/js/aboutUs/move-top.js"/>"></script>
    <script type="text/javascript" src="<c:url value="/static/js/easing.js"/>"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(".scroll").click(function(event){
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top},900);
            });
        });
    </script>
    <!-- //js --><!-- swipe box js -->
    <script src="<c:url value="/static/js/jquery.swipebox.min.js"/>"></script>
    <script type="text/javascript">
        jQuery(function($) {
            $(".swipebox").swipebox();
        });
    </script>
    <!-- //swipe box js -->


    <!--web-fonts-->
    <link href='http://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Poppins:400,500,600' rel='stylesheet' type='text/css'>
    <!--//web-fonts-->
    <!-- start-smoth-scrolling-->
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(".scroll").click(function(event){
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
            });
        });
    </script>
    <!--//end-smoth-scrolling-->
</head>
<body>
<!-- main content start-->
<!--start-home-->
<div id="home" class="header">
    <div class="header-top">
        <!-- Navbar -->
        <nav class="navbar navbar-default">
            <div class="container-fluid">


                <div class="collapse navbar-collapse navbar-right" id="navbar">
                    <div class="top-nav">

                        <a href="<c:url value="/main"/>" class="hover-effect scroll">
								<span>
									<span>首页</span>
									<span>首页</span>
									<span></span>
								</span>
                        </a>

                        <a href="<c:url value="/resume"/>" class="hover-effect scroll">
								<span>
									<span>在线简历</span>
									<span>在线简历</span>
									<span></span>
								</span>
                        </a>

                        <a href="<c:url value="/template"/>" class="hover-effect scroll">
								<span>
									<span>简历模板</span>
									<span>简历模板</span>
									<span></span>
								</span>
                        </a>
                        <a href="<c:url value="/myResume"/>" class="hover-effect scroll">
								<span>
									<span>我的简历</span>
									<span>我的简历</span>
									<span></span>
								</span>
                        </a>
                        <a href="<c:url value="/aboutUs"/>" class="hover-effect scroll">
								<span>
									<span>关于网站</span>
									<span>关于网站</span>
									<span></span>
								</span>
                        </a>

                        <div class="more">
                            <label style="color: white" >当前登录的账号是：${sessionScope.user.username}</label>
                            <a href="<c:url value="/outLogin"/>" >退出登录</a>
                        </div>

                    </div>
                </div>

            </div>
        </nav>
    </div>
    <!-- //Navbar -->
    <!--End-top-nav-script-->
    <!--//end-header-->
    <div class="clearfix"></div>
    <div class="banner-w3-info">
        <div class="logo">
            <a class="link link--surinami" href="<c:url value="/resume"/>"><span data-letters-l="制作您" data-letters-r="的简历">制作您的简历</span></a>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <div class="more">
            <a href="#" class="hvr-shutter-in-vertical" data-toggle="modal" data-target="#myModal">Read More<span class="glyphicon glyphicon-arrow-right"></span></a>
        </div>
    </div>

</div>
<!--//end-banner-->
<!-- footer -->
<div class="footer wow fadeIn animated animated" data-wow-delay="0.1s" data-wow-duration="0.2s">
    <div class="container">
        <div class="copy_right text-center">
            <p> 2018.&nbsp;&nbsp;&nbsp;生产生产</p>
            <ul class="social-icons two">
            </ul>
        </div>
    </div>
</div>
<!-- //footer -->

<!-- //footer -->
<!--//main content start-->
<!--start-smooth-scrolling-->
<script type="text/javascript">
    $(document).ready(function() {

        $().UItoTop({ easingType: 'easeOutQuart' });

    });
</script>
<!-- //for bootstrap working -->
<script src="<c:url value="/static/js/bootstrap.js"/>"></script>


<!-- //for bootstrap working -->


</body>
</html>