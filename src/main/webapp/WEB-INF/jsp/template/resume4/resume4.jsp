<%--
  Created by IntelliJ IDEA.
  User: kdj9s
  Date: 2018/7/15
  Time: 上午9:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%--弃用了--%>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Resume</title>
    <link rel="stylesheet" href="../../../../static/template/resume4/css/Resume.css">

</head>
<body>

<button id="btn-htmltopdf">export PDF by using jspdf + html2canvas</button>
<aside>
    <ul>
        <li>
            <a href="javascript:void(0)" onclick="myAjax(${user.id},5)" target="_blank">保存</a>
        </li>
    </ul>
</aside>

<div id="index"><h1>个人简历</h1></div>
<div id="person">
    <h3 class="heading">个人信息</h3>
    <table>
        <tr>
            <td><h5>姓&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名：</h5></td>
            <td><h5 class="cla1" align="center">${basicInfo.name}</h5></td>
            <td><h5>&nbsp&nbsp&nbsp&nbsp性&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp别：</h5></td>
            <td><h5 class="cla1" align="center">${basicInfo.gender}</h5></td>
        </tr>
        <tr>
            <td><h5>年&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp龄：</h5></td>
            <td><h5 class="cla1" align="center">${basicInfo.age}</h5></td>
            <td><h5>&nbsp&nbsp&nbsp&nbsp民&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp族：</h5></td>
            <td><h5 class="cla1" align="center">${basicInfo.nation}</h5></td>
        </tr>
        <tr>
            <td><h5>所在城市：</h5></td>
            <td><h5 class="cla1" align="center">${basicInfo.city}</h5></td>
            <td><h5>&nbsp&nbsp&nbsp&nbsp电&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp话：</h5></td>
            <td><h5 class="cla1" align="center">${basicInfo.tel}</h5></td>
        </tr>
        <tr>
            <td><h5>邮&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp箱：</h5></td>
            <td><h5 class="cla1" align="center">${basicInfo.email}</h5></td>
            <td><h5>&nbsp&nbsp&nbsp&nbsp学&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp校：</h5></td>
            <td><h5 class="cla1" align="center">${basicInfo.school}</h5></td>
        </tr>
        <tr>
            <td><h5>专&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp业：</h5></td>
            <td><h5 class="cla1" align="center">${basicInfo.major}</h5></td>
            <td><h5>&nbsp&nbsp&nbsp&nbsp学&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp历：</h5></td>
            <td><h5 class="cla1" align="center">${basicInfo.education}</h5></td>
        </tr>
    </table>

</div>
<div>
    <h3 class="heading">求职意向</h3>
    <span style="font-weight:bold;font-size: 17px;">求职岗位：<span style="font-weight: normal">&nbsp;${intentInfo.position}</span></span>
    <span style="font-weight:bold;font-size: 17px;">工作城市：<span style="font-weight: normal">&nbsp;${intentInfo.workCity}</span></span>
    <span style="font-weight:bold;font-size: 17px;">工作类型：<span style="font-weight: normal">&nbsp;${intentInfo.jobType}</span></span>
    <span style="font-weight:bold;font-size: 17px;">期望薪资：<span style="font-weight: normal">&nbsp;${intentInfo.salary}</span></span>
</div>
<div>
    <h3 class="heading">自我介绍</h3>
    <p>${introInfo.introduce}</p>
</div>
<div>
    <h3 class="heading">教育经历</h3>
    <p>${expInfo.eduExp}</p>
</div>
<div>
    <h3 class="heading">项目经历</h3>
    <p>${expInfo.projectExp}</p>
</div>


<script type="text/javascript" src="../../../../static/js/html2canvas.js"></script>
<script type="text/javascript" src="../../../../static/js/jsPdf.debug.js"></script>
<script type="text/javascript" src="../../../../static/js/main.js" ></script>

</body>
</html>
