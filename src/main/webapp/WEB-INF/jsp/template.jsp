<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Magazine &mdash; Free Fully Responsive HTML5 Bootstrap Template by FREEHTML5.co</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Free HTML5 Template by FREEHTML5"/>
    <meta name="keywords" content="free html5, free template, free bootstrap, html5, css3, mobile first, responsive"/>


    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <link rel="shortcut icon" href="favicon.ico">
    <!-- Google Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Playfair+Display:400,700,400italic|Roboto:400,300,700'
          rel='stylesheet' type='text/css'>
    <!-- Animate -->
    <link rel="stylesheet" href="<c:url value="/static/css/template/animate.css"/>">
    <!-- Icomoon -->
    <link rel="stylesheet" href="<c:url value="/static/css/template/icomoon.css"/>">
    <!-- Bootstrap  -->
    <link rel="stylesheet" href="<c:url value="/static/css/template/bootstrap.css"/>">

    <link rel="stylesheet" href="<c:url value="/static/css/template/style.css"/>">
    <!-- Modernizr JS -->
    <script src="<c:url value="/static/js/template/modernizr-2.6.2.min.js"/>"></script>
    <!-- FOR IE9 below -->
    <!--[if lt IE 9]>
    <script src="/static/js/template/respond.min.js"></script>
    <!--bootstrap-->
    <script src="http://how2j.cn/study/js/jquery/2.0.0/jquery.min.js"></script>
    <link href="http://how2j.cn/study/css/bootstrap/3.3.6/bootstrap.min.css" rel="stylesheet">
    <script src="http://how2j.cn/study/js/bootstrap/3.3.6/bootstrap.min.js"></script>

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
                <li style="text-align: center">
                    <button type="button" class="btn btn-primary" onclick="window.location.href='/ResumeGen/main'">返回首页</button>
                </li>
            </ul>
            <div  class="col-lg-12 col-md-12 text-center">
                <h1 id="fh5co-logo" style="color: white;">简历模板 </h1>
                <h4 style="color: white;" >点击模板开始下载</h4>
            </div>

        </div>

    </div>

</header>
<!-- END #fh5co-header -->

<div class="container-fluid">
    <div class="row fh5co-post-entry">

        <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <div class="panel panel-default">
                <div class="panel-heading">简洁蓝色风</div>
                <div class="panel-body">
                    <figure>
                        <a href="<c:url value="/download?filename=template01.docx"/>"><img src="<c:url value="/static/images/template/pic_1.jpg"/>"
                                                                          alt="Image"
                                                                          class="img-responsive"></a>
                    </figure>
                    <span class="fh5co-meta">意向职位：市场营销 &amp; 专业：产品运营 </span>
                    <span class="fh5co-meta fh5co-date">July 16th, 2018</span>
                </div>
            </div>
        </article>

        <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <div class="panel panel-default">
                <div class="panel-heading">绿色活泼风</div>
                <div class="panel-body">
                    <figure>
                        <a href="<c:url value="/download?filename=template02.doc"/>"><img src="<c:url value="/static/images/template/pic_2.jpg"/>" alt="Image"
                                                                         class="img-responsive"></a>
                    </figure>
                    <span class="fh5co-meta">意向职位：投资银行 &amp; 专业：财务管理（会计） </span>
                    <span class="fh5co-meta fh5co-date">July 16th, 2018</span>
                </div>
            </div>
        </article>


        <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <div class="panel panel-default">
                <div class="panel-heading">简洁蓝色风</div>
                <div class="panel-body">
                    <figure>
                        <a href="<c:url value="/download?filename=template03.docx"/>"><img src="<c:url value="/static/images/template/pic_3.jpg"/>" alt="Image"
                                                                          class="img-responsive"></a>
                    </figure>
                    <span class="fh5co-meta">意向职位：电子商务 &amp; 专业：不限 </span>
                    <span class="fh5co-meta fh5co-date">July 16th, 2018</span>
                </div>
            </div>
        </article>

        <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <div class="panel panel-default">
                <div class="panel-heading">简洁蓝色风</div>
                <div class="panel-body">
                    <figure>
                        <a href="<c:url value="/download?filename=template04.doc"/>"><img src="<c:url value="/static/images/template/pic_4.jpg"/>" alt="Image"
                                                                         class="img-responsive"></a>
                    </figure>
                    <span class="fh5co-meta">意向职位：应届学生 &amp; 专业：不限</span>
                    <span class="fh5co-meta fh5co-date">July 16th, 2018</span>
                </div>
            </div>
        </article>


        <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <div class="panel panel-default">
                <div class="panel-heading">简洁蓝色风</div>
                <div class="panel-body">
                    <figure>
                        <a href="<c:url value="/download?filename=template05.docx"/>"><img src="<c:url value="/static/images/template/pic_5.jpg"/>" alt="Image"
                                                                          class="img-responsive"></a>
                    </figure>
                    <span class="fh5co-meta">意向职位：不限 &amp; 专业：不限</span>
                    <span class="fh5co-meta fh5co-date">July 16th, 2018</span>
                </div>
            </div>
        </article>

        <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <div class="panel panel-default">
                <div class="panel-heading">简洁蓝色风</div>
                <div class="panel-body">
                    <figure>
                        <a href="<c:url value="/download?filename=template06.docx"/>"><img src="<c:url value="/static/images/template/pic_6.jpg"/>" alt="Image"
                                                                          class="img-responsive"></a>
                    </figure>
                    <span class="fh5co-meta">意向职位：不限 &amp; 专业：不限 </span>
                    <span class="fh5co-meta fh5co-date">July 16th, 2018</span>
                </div>
            </div>
        </article>

        <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <div class="panel panel-default">
                <div class="panel-heading">简洁蓝色风</div>
                <div class="panel-body">
                    <figure>
                        <a href="<c:url value="/download?filename=template07.docx"/>"><img src="<c:url value="/static/images/template/pic_7.jpg"/>" alt="Image"
                                                                          class="img-responsive"></a>
                    </figure>
                    <span class="fh5co-meta">意向职位：行政内勤 &amp; 专业：不限 </span>
                    <span class="fh5co-meta fh5co-date">July 16th, 2018</span>
                </div>
            </div>
        </article>

        <article class="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
            <div class="panel panel-default">
                <div class="panel-heading">简洁蓝色风</div>
                <div class="panel-body">
                    <figure>
                        <a href="<c:url value="/download?filename=template08.docx"/>"><img src="<c:url value="/static/images/template/pic_8.jpg"/>" alt="Image"
                                                                          class="img-responsive"></a>
                    </figure>
                    <span class="fh5co-meta">意向职位：不限 &amp; 专业：不限</span>
                    <span class="fh5co-meta fh5co-date">July 16th, 2018</span>
                </div>
            </div>
        </article>


    </div>
</div>

<footer id="fh5co-footer">
    <p>
        <small> 2018. 生产生产</small>
    </p>
</footer>


<!-- jQuery -->
<script src="<c:url value="/static/js/template/jquery.min.js"/>"></script>
<!-- jQuery Easing -->
<script src="<c:url value="/static/js/template/jquery.easing.1.3.js"/>"></script>
<!-- Bootstrap -->
<script src="<c:url value="/static/js/template/bootstrap.min.js"/>"></script>
<!-- Waypoints -->
<script src="<c:url value="/static/js/template/jquery.waypoints.min.js"/>"></script>
<!-- Main JS -->
<script src="<c:url value="/static/js/template/main.js"/>"></script>

</body>
</html>

