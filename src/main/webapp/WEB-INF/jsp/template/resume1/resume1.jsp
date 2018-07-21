<!DOCTYPE>
<html>
<head>
    <meta charset="UTF-8" >
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
    <script type="text/javascript" src="../../../../static/template/js4ajax/mAjax.js"></script>
    <%--bootstrap--%>
    <script src="http://how2j.cn/study/js/jquery/2.0.0/jquery.min.js"></script>
    <link href="http://how2j.cn/study/css/bootstrap/3.3.6/bootstrap.min.css" rel="stylesheet">
    <script src="http://how2j.cn/study/js/bootstrap/3.3.6/bootstrap.min.js"></script>

</head>
<body>

<aside>
    <ul>
        <li>
            <button type="button" class="btn btn-primary" onclick="myAjax(${user.id},3)">
                <a href="javascript:void(0)" target="_blank">保存</a>
            </button>
        </li>
        <li>
            <button type="button" class="btn btn-primary" onclick="window.location.href='/selectTemplateOnline'">重新选择模板</button>
        </li>
        <li>
            <button id="btn-htmltopdf" type="button" class="btn btn-primary" >导出为PDF</button>
        </li>
        <li>
            <button type="button" class="btn btn-primary" onclick="window.location.href='/main'">返回首页</button>
        </li>
    </ul>
</aside>

<div class="container" id="export_content">
    <div class="sidebar">
        <div class="title">
            <img src="${basicInfo.image}" width="180px" height="200px">
            <h1>${basicInfo.name}</h1>
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
                <dd><span>性别:</span> ${basicInfo.gender}</dd>
                <dd><span>民族:</span> ${basicInfo.nation}</dd>
                <dd><span>专业:</span> ${basicInfo.major}</dd>
                <dd><span>城市:</span> ${basicInfo.city}</dd>
                <dt><i class="icon-bookmark"></i>Education&nbsp;-&nbsp;教育信息</dt>
                <dd><span>毕业院校:</span>${basicInfo.school}</dd>
                <dd><span>学历:</span>${basicInfo.education}</dd>
                <dt><i class="icon-bookmark"></i>Woking Expectation&nbsp;-&nbsp;工作期望</dt>
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
            <br><br><br><br>
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
        <br><br><br><br>
    </div>
</div>
<footer>
</footer>

<script type="text/javascript" src="../../../../static/js/html2canvas.js"></script>
<script type="text/javascript" src="../../../../static/js/jsPdf.debug.js"></script>
<script type="text/javascript" src="../../../../static/js/main.js" ></script>


</body>
</html>

<%@ page contentType="text/html;charset=UTF-8" %>