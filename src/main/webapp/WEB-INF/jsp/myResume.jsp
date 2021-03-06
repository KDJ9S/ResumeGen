<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>我的简历</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Free HTML5 Template by FREEHTML5"/>
    <meta name="keywords" content="free html5, free template, free bootstrap, html5, css3, mobile first, responsive"/>


    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <link rel="shortcut icon" href="favicon.ico">
    <!-- Google Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Playfair+Display:400,700,400italic|Roboto:400,300,700'
          rel='stylesheet' type='text/css'>
    <!-- Animate -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/template/animate.css">
    <!-- Icomoon -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/template/icomoon.css">
    <!-- Bootstrap  -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/template/bootstrap.css">

    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/template/style.css">


    <!-- Modernizr JS -->
    <script src="${pageContext.request.contextPath}/static/js/template/modernizr-2.6.2.min.js"></script>
    <!-- FOR IE9 below -->
    <!--[if lt IE 9]>
    <script src="/static/js/template/respond.min.js"></script>
    <%--bootstrap--%>
    <script src="http://how2j.cn/study/js/jquery/2.0.0/jquery.min.js"></script>
    <link href="http://how2j.cn/study/css/bootstrap/3.3.6/bootstrap.min.css" rel="stylesheet">
    <script src="http://how2j.cn/study/js/bootstrap/3.3.6/bootstrap.min.js"></script>
    <![endif]-->

</head>
<body>
<style>
    body{
        background: url('${pageContext.request.contextPath}/static/images/back.jpg');
        background-size: cover;
        min-height: 100vh;
    }
</style>
<header id="fh5co-header">

    <div class="container-fluid">

        <div class="row">
            <ul class="fh5co-social">
                <li><button type="button" class="btn btn-primary" onclick="window.location.href='/ResumeGen/main'">返回首页</button></li>
            </ul>
            <div class="col-lg-12 col-md-12 text-center">
                <h1 id="fh5co-logo" style="color: white;">我的简历</h1>
            </div>

        </div>

    </div>

</header>
<!-- END #fh5co-header -->

<div class="container-fluid">
    <div class="row fh5co-post-entry">
        <c:forEach items="${resumeIdList}" var="ri" varStatus="vs">
            <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
                <figure>
                    <a href="${pageContext.request.contextPath}/resume/resume${ri.resumeId}"><img
                            src="${pageContext.request.contextPath}/static/template/image_preview/${ri.resumeId}.png" alt="Image"
                            class="img-responsive"></a>
                </figure>
                <h4 class="fh5co-article-title" style="color: white;">简历${ri.resumeId}号，准备就绪！</h4>
            </article>
        </c:forEach>
        <div class="clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block"></div>

    </div>
</div>

<footer id="fh5co-footer">
    <p>
        <small> 2018. 生产生产</small>
    </p>
</footer>


<!-- jQuery -->
<script src="${pageContext.request.contextPath}/static/js/template/jquery.min.js"></script>
<!-- jQuery Easing -->
<script src="${pageContext.request.contextPath}/static/js/template/jquery.easing.1.3.js"></script>
<!-- Bootstrap -->
<script src="${pageContext.request.contextPath}/static/js/template/bootstrap.min.js"></script>
<!-- Waypoints -->
<script src="${pageContext.request.contextPath}/static/js/template/jquery.waypoints.min.js"></script>
<!-- Main JS -->
<script src="${pageContext.request.contextPath}/static/js/template/main.js"></script>

</body>
</html>

