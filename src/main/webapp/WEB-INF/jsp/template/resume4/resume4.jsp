<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>简历四号</title>
    <link href="${pageContext.request.contextPath}//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/static/template/resume4/css/resume.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/template/js4ajax/mAjax.js"></script>

    <%--bootstrap--%>
    <script src="http://how2j.cn/study/js/jquery/2.0.0/jquery.min.js"></script>
    <link href="http://how2j.cn/study/css/bootstrap/3.3.6/bootstrap.min.css" rel="stylesheet">
    <script src="http://how2j.cn/study/js/bootstrap/3.3.6/bootstrap.min.js"></script>
</head>
<body>

<div style="text-align: center">
    <ul class="nav nav-pills">
        <li role="presentation" class="active">
            <button type="button" class="btn btn-primary" onclick="myAjax(${user.id},4)">
                <a style="color: white; text-decoration: none" href="javascript:void(0)" target="_blank">保存</a>
            </button>
        </li>&nbsp;&nbsp;
        <li role="presentation">
            <button type="button" class="btn btn-primary" onclick="window.location.href='/ResumeGen/selectTemplateOnline'">重新选择模板</button>
        </li>&nbsp;&nbsp;
        <li role="presentation">
            <button id="btn-htmltopdf" type="button" class="btn btn-primary" >导出为PDF</button>
        </li>&nbsp;&nbsp;
        <li role="presentation">
            <button type="button" class="btn btn-primary" onclick="window.location.href='/ResumeGen/main'">返回首页</button>
        </li>
    </ul>
</div>


<div id="export_content">
    <div id="con">
        <div id="left">
            <img src="${basicInfo.image}" width="180px" height="200px">
            <dl>
                <dt><i class="fa fa-mars" aria-hidden="true"></i>&nbsp;性别：${basicInfo.gender}</dt>
                </br>
                <dt><i class="fa fa-table" aria-hidden="true"></i>&nbsp;年龄：${basicInfo.age}</dt>
                </br>
                <dt><i class="fa fa-group" aria-hidden="true"></i>&nbsp;民族：${basicInfo.nation}</dt>
                </br>
                <dt><i class="fa fa-globe" aria-hidden="true"></i>&nbsp;所在地：${basicInfo.city}</dt>
                </br>
                <dt><i class="fa fa-tty" aria-hidden="true"></i>&nbsp;电话：${basicInfo.tel}</dt>
                </br>
                <dt><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;电子邮件：${basicInfo.email} </dt>
                </br>
                <dt><i class="fa fa-language" aria-hidden="true"></i>&nbsp;毕业院校： ${basicInfo.school}</dt>
                </br>
                <dt><i class="fa fa-heart" aria-hidden="true"></i>&nbsp;专业： ${basicInfo.major}</dt>
                </br>
                <dt><i class="fa fa-book" aria-hidden="true"></i>&nbsp;学历： ${basicInfo.education}</dt>
                </br>
            </dl>
        </div>
        <div id="right">
            <h2>${basicInfo.name}</h2><br/>

            <h3 class="t3"><i class="fa fa-handshake-o" aria-hidden="true"></i>求职意向</h3>
            <HR style="FILTER: alpha(opacity=50,finishopacity=0,style=3)" width="80%" color=lightskyblue SIZE=2>
            <br/>
            <p>求职岗位： ${intentInfo.position}</p>
            <p>工作城市： ${intentInfo.workCity}</p>
            <p>工作类型： ${intentInfo.jobType}</p>
            <p>期望薪资： ${intentInfo.salary}</p>

            <h3 class="t3"><i class="fa fa-user-circle" aria-hidden="true"></i>自我评价</h3>
            <HR style="FILTER: alpha(opacity=50,finishopacity=0,style=3)" width="80%" color=lightskyblue SIZE=2>
            <br/>
            <p>${introInfo.introduce}</p>

            <h3 class="t3"><i class="fa fa-building" aria-hidden="true"></i>教育经历</h3>
            <HR style="FILTER: alpha(opacity=50,finishopacity=0,style=3)" width="80%" color=lightskyblue SIZE=2>
            <br/>
            <p>${expInfo.eduExp}</p>

            <h3 class="t3"><i class="fa fa-microchip" aria-hidden="true"></i>项目经历</h3>
            <HR style="FILTER: alpha(opacity=50,finishopacity=0,style=3)" width="80%" color=lightskyblue SIZE=2>
            <br/>
            <p>${expInfo.projectExp}</p>

        </div>
    </div>
</div>

<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/html2canvas.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/jspdf.debug.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/main.js" ></script>

</body>

</html>
<%@ page contentType="text/html;charset=UTF-8" %>
