<%--
  Created by IntelliJ IDEA.
  User: kdj9s
  Date: 2018/7/15
  Time: 下午6:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title></title>
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="../../../../static/template/resume5/css/resume.css" type="text/css" rel="stylesheet">
</head>
<body>
<div id="con">
    <div id="left">
        <img src="../../../../static/template/resume5/img/9B449370E66A440100F7DB5194767540.jpg"/>
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

</body>

</html>