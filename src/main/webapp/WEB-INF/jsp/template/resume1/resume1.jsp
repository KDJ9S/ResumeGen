<%--
  Created by IntelliJ IDEA.
  User: kdj9s
  Date: 2018/7/15
  Time: 上午8:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>个人简历</title>
    <link rel="stylesheet" href="../../../../static/template/resume1/css/animation.css">
    <link rel="stylesheet" href="../../../../static/template/resume1/css/fontello.css">
    <link rel="stylesheet" href="../../../../static/template/resume1/css/fontello-codes.css">
    <link rel="stylesheet" href="../../../../static/template/resume1/css/fontello-embedded.css">
    <link rel="stylesheet" href="../../../../static/template/resume1/css/fontello-ie7.css">
    <link rel="stylesheet" href="../../../../static/template/resume1/css/fontello-ie7-codes.css">
    <link rel="stylesheet" href="../../../../static/template/resume1/css/style.css">
    <%-- jquery --%>
    <script type="text/javascript" src="../../../../static/js/jquery-3.3.1.js"></script>
    <script>
        function myAjax() {
            $.ajax({
                    type: 'POST',

                    contentType: 'application/json; charset=utf-8',

                    url: '/saveMyResume',

                    dataType: 'json',

                    data: '{"userId":"${user.id}","resumeId":"1"}',

                    success: function (data) {
                        alert("suc!!!");

                    },

                    error: function (data) {
                        alert("fail!");
                    }

                }
            )
        }
    </script>
</head>
<body>
<aside>
    <ul>
        <li>
            <a href="####" onclick="myAjax()" target="_blank">保存</a>
        </li>
    </ul>
</aside>
<div class="container">
    <div class="sidebar">
        <div class="title">
            <img src="../../../../static/template/resume1/img/head.jpg">
            <h1>${basicInfo.name}</h1>
            <h1>${basicInfo.gender}</h1>
        </div>
        <ul class="side-info">
            <li class="someRight">
                <dt><i class="icon-bookmark"></i>Contact&nbsp;-&nbsp;联系方式</dt>
                <i class="icon-phone">&nbsp;手机: ${basicInfo.tel}</i><br>
                <i class="icon-mail">&nbsp;邮箱: ${basicInfo.email}</i><br>
            </li>
            <li class="someRight">
                <dt><i class="icon-bookmark"></i>Application&nbsp;-&nbsp;应聘岗位</dt>
                <dd>${intentInfo.position}</dd>
            </li>
            <li class="someRight">
                <dt><i class="icon-bookmark"></i>Introduction&nbsp;-&nbsp;个人介绍</dt>
                <dd>${introInfo.introduce}</dd>
            </li>
        </ul>
    </div>
    <div class="main">
        <ul class="main-info">
            <li class="someRight">
                <dt><i class="icon-bookmark"></i>Basic info&nbsp;-&nbsp;基本信息</dt>
                <dd><span>姓名:</span> ${basicInfo.name}</dd>
                <dd><span>民族:</span> ${basicInfo.nation}</dd>
                <dd><span>专业:</span> ${basicInfo.major}</dd>
                <dd><span>城市:</span> ${basicInfo.city}</dd>
                <dt><i class="icon-bookmark"></i>Education&nbsp;-&nbsp;教育信息</dt>
                <dd><span>毕业院校:</span>${basicInfo.school}</dd>
                <dd><span>学历:</span>${basicInfo.education}</dd>
                <dt><i class="icon-bookmark"></i>Basic info&nbsp;-&nbsp;工作期望</dt>
                <dd><span>期望薪水:</span>${intentInfo.salary}</dd>
                <dd><span>期望工作地:</span>${intentInfo.workCity}</dd>
            </li>
            <li>
                <dt><i class="icon-bookmark"></i>Education Experience&nbsp;-&nbsp;教育经历</dt>
                <ul class="exp">
                    <li>
                        <div class="circle"></div>
                        <p>${expInfo.eduExp}</p>
                    </li>

                </ul>
            </li>
            <br><br><br><br><br><br><br><br>
            <li>
                <dt><i class="icon-bookmark"></i>Project Experience&nbsp;-&nbsp;项目经历</dt>
                <h3>描述</h3>
                <ul class="exp">
                    <li>
                        <div class="circle"></div>
                        <p>${expInfo.projectExp}</p>
                    </li>
                </ul>
            </li>
        </ul>
        <p>&nbsp;</p>
        <br><br><br><br><br><br><br><br><br>
    </div>
</div>
<footer>
</footer>
</body>
</html>
