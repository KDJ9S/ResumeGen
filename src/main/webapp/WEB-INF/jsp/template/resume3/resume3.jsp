<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/jquery-3.3.1.js"></script>
    <title>简历三号</title>
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/template/js4ajax/mAjax.js"></script>


    <%--bootstrap--%>
    <script src="http://how2j.cn/study/js/jquery/2.0.0/jquery.min.js"></script>
    <link href="http://how2j.cn/study/css/bootstrap/3.3.6/bootstrap.min.css" rel="stylesheet">
    <script src="http://how2j.cn/study/js/bootstrap/3.3.6/bootstrap.min.js"></script>
</head>
<body>
<style>
    html, body, div, p {
        margin: 0;
        padding: 0
    }

    body {
        font-size: 14px;
        font-family: "microsoft yahei";
        background-color: #ffffff
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
        table-layout: fixed
    }

    th, td {
        font-size: 14px;
        padding: 0
    }

    a {
        text-decoration: none
    }

    img {
        border: 0 none
    }

    .blue {
        text-decoration: none;
        color: #3c3d5d
    }

    .chead {
        width: 1002px
    }

    .chead .logo {
        width: 698px;
        height: 90px
    }

    .chead .txt {
        width: 152px;
        height: 90px
    }

    .column {
        width: 1002px;
        line-height: 28px;
        border: 1px solid #dedede
    }

    .column .hbox {
        width: 185px;
        height: 154px
    }

    .column .head {
        display: block;
        background-color: #fafafa
    }

    .column .box {
        width: 100%;
        background-color: #ffffff;
        border-top: 2px solid #f2f3f5
    }

    .column .box1 {
        width: 100%;
        word-wrap: break-word;
        color: #ffffff;
        background-color: #3f4160
    }

    .column .box2 {
        width: 100%;
        background-color: #f8f9fa
    }

    .column .tba {
        width: 940px;
        padding: 0 30px 15px
    }

    .column .tbb {
        width: 940px;
        padding: 0 30px
    }

    .column .tb1 {
        width: 900px;
        line-height: 28px;
        color: #333333;
        word-break: break-all;
        padding: 0 20px
    }

    .column .tb2 {
        width: 430px;
        padding: 0 20px
    }

    .column .tb3 {
        width: 900px;
        padding: 15px 20px 15px 0
    }

    .column .gray, .column .gray2 {
        color: #999999;
        word-break: break-all
    }

    .column .gray2 {
        color: #666666
    }

    .column .plate1, .column .plate2 {
        width: 430px;
        height: 54px;
        font-size: 16px;
        font-weight: bold;
        color: #818ba3
    }

    .column .plate1 {
        width: 900px;
        padding: 0 50px
    }

    .column .plate1 .f16 {
        font-size: 14px;
        font-weight: normal;
        color: #333333
    }

    .column .plate1 .f12 {
        font-size: 12px;
        font-weight: normal;
        color: #999999
    }

    .column .keys, .column .keys2 {
        width: 85px;
        line-height: 28px;
        color: #666666
    }

    .column .keys2 {
        width: 110px
    }

    .column .txt1, .column .txt2, .column .txt3 {
        width: 815px;
        line-height: 28px;
        color: #333333;
        word-break: break-all
    }

    .column .txt2 {
        width: 345px
    }

    .column .txt3 {
        width: auto;
        max-width: 815px;
        font-size: 14px;
        font-weight: bold
    }

    .column .txt4 {
        width: 305px;
        color: #ffffff;
        word-break: break-all
    }

    .column .infr {
        width: 767px;
        color: #ffffff;
        table-layout: auto
    }

    .column .vam, .column .grcha {
        vertical-align: middle;
        margin-left: 5px
    }

    .column .box1 .vam {
        margin-right: 5px;
        margin-left: 0
    }

    .column .name {
        font-size: 24px;
        padding-bottom: 18px
    }

    .column .icard {
        color: #a1a3ae;
        padding-bottom: 18px
    }

    .column .con {
        border-top: 1px dotted #ddd
    }

    .column .pr20 {
        width: 225px;
        padding-right: 20px
    }

    .column .time {
        width: 120px;
        line-height: 28px;
        color: #666666;
        padding-left: 20px
    }

    .column .rtbox {
        width: 765px;
        line-height: 28px;
        color: #333333;
        padding: 0 20px 0 15px;
        word-break: break-all
    }

    .column .hai, .column .guan {
        line-height: 18px;
        font-size: 12px;
        color: #ffffff;
        vertical-align: text-top;
        margin-left: 5px;
        padding: 1px 3px;
        background-color: #3cbe7f;
        border-radius: 2px
    }

    .column .guan {
        background-color: #ff9f20
    }

    .column .tag {
        display: inline-block;
        word-break: break-all;
        #display: inline;
        #zoom: 1
    }

    .column .all {
        color: #666;
        padding: 10px 20px;
        background-color: #fafafa
    }

    .column .tit {
        width: 900px;
        height: 40px;
        color: #666666;
        padding: 0 20px;
        background-color: #f5f5f5
    }

    .column .p15 {
        padding: 15px 0
    }

    .column .p5 {
        display: inline-block;
        color: #666666;
        padding: 0 5px;
        #display: inline;
        #zoom: 1
    }

    .column .cell .skill {
        width: 165px;
        text-align: right;
        padding-right: 15px
    }

    .column .cell .skbg, .column .cell .skco {
        display: inline-block;
        width: 245px;
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        color: #ffffff;
        vertical-align: top;
        margin-top: 6px;
        background-color: #dddddd;
        border-radius: 20px;
        #display: inline;
        #zoom: 1
    }

    .column .cell .skco {
        width: 235px;
        font-style: normal;
        margin-top: 0;
        padding-left: 10px;
        background-color: #ff9f20;
        z-index: 3
    }

    .column .sl .skco {
        width: 173px
    }

    .column .lh .skco {
        width: 112px
    }

    .column .yb .skco {
        width: 51px
    }

    .column .fbox strong {
        font-size: 14px;
        font-weight: bold
    }

    .column .cha {
        font-size: 12px;
        font-weight: normal;
        color: #00457d;
        margin-left: 5px
    }

    .column .cha:hover {
        color: #ff6000
    }

    .column .email {
        width: 330px
    }

    .eng td, .eng .txt3, .eng .fbox strong {
        font-size: 13px;
        font-family: 'Arial'
    }

    .eng .txt1, .eng .rtbox, .eng .phd {
        width: 775px;
        font-size: 13px;
        font-family: 'Arial';
        line-height: 28px
    }

    .eng .txt2 {
        width: 305px
    }

    .eng .txt4 {
        width: 245px
    }

    .eng .cell .txt3 {
        width: 120px
    }

    .eng .time, .eng .keys {
        width: 110px;
        font-size: 13px;
        text-align: right
    }

    .eng .cell .skill {
        width: 130px
    }

    .eng .phd {
        padding-left: 145px
    }

    .eng .keys {
        padding-right: 15px
    }

    .eng .pr20 {
        width: 205px
    }

    .eng .pr20 .keys {
        width: 100px
    }

    .eng .email {
        width: 270px
    }
</style>

<div align="center">
    <ul class="nav nav-pills">
        <li role="presentation" class="active">
            <button type="button" class="btn btn-primary" onclick="myAjax(${user.id},3)">
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
    <table cellpadding="0" cellspacing="0" align="center" bgcolor="#fff" class="column">
        <tbody>
        <tr>
            <td valign="top">
                <table xmlns="" cellspacing="0" cellpadding="0" border="0" class="box1">
                    <tbody>
                    <tr>
                        <td class="hbox" align="middle"><img src="${basicInfo.image}" width="180px" height="200px"></td>
                        <td>
                            <table cellspacing="0" cellpadding="0" border="0" class="infr">
                                <tbody>
                                <tr>
                                    <td colspan="2" class="name">${basicInfo.name}</td>
                                </tr>
                                <tr>
                                    <td valign="top">
                                        <img class="vam" src="http://img01.51jobcdn.com/im/2016/resume/y2.png" width="20"
                                             height="20">${basicInfo.tel}
                                    </td>
                                    <td valign="top">
                                        <table cellspacing="0" cellpadding="0" border="0" class="email">
                                            <tbody>
                                            <tr>
                                                <td valign="top" width="25"><img class="vam"
                                                                                 src="http://img01.51jobcdn.com/im/2016/resume/y3.png"
                                                                                 width="20" height="20"></td>
                                                <td valign="top" class="txt4">${basicInfo.email}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td valign="top" colspan="3"><p><img class="vam"
                                                                         src="http://img01.51jobcdn.com/im/2016/resume/y4.png"
                                                                         width="20" height="20">${basicInfo.gender}<span class="p5">|</span>${basicInfo.age}
                                        岁<span class="p5">|</span>现居住${basicInfo.city}<span class="p5">|</span>${basicInfo.nation}族
                                    </p></td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table xmlns="" cellspacing="0" cellpadding="0" border="0" class="box2">
                    <tbody>
                    <tr>
                        <td class="tba">
                            <table cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                <td valign="top" class="tb2">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <thead style="height:0">
                                        <tr>
                                            <td valign="top" class="keys"></td>
                                            <td valign="top" class="txt2"></td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td colspan="2" class="plate2">最高学历/学位</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" class="keys">专业：</td>
                                            <td valign="top" class="txt2">${basicInfo.major}</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" class="keys">学校：</td>
                                            <td valign="top" class="txt2">${basicInfo.school}</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" class="keys">学历/学位：</td>
                                            <td valign="top" class="txt2">${basicInfo.education}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table xmlns="" cellspacing="0" cellpadding="0" border="0" class="box">
                    <tbody>
                    <tr>
                        <td class="plate1">求职意向</td>
                    </tr>
                    <tr>
                        <td class="tba">
                            <table cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td class="tb2" valign="top">
                                        <table cellspacing="0" cellpadding="0" border="0">
                                            <tbody>
                                            <tr>
                                                <td valign="top" class="keys">求职岗位：</td>
                                                <td valign="top" class="txt2">${intentInfo.position}
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td class="tb2" valign="top">
                                        <table cellspacing="0" cellpadding="0" border="0">
                                            <tbody>
                                            <tr>
                                                <td valign="top" class="keys">工作地点：</td>
                                                <td valign="top" class="txt2"><span class="tag">${intentInfo.workCity}</span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tb2" valign="top">
                                        <table cellspacing="0" cellpadding="0" border="0">
                                            <tbody>
                                            <tr>
                                                <td valign="top" class="keys">工作类型：</td>
                                                <td valign="top" class="txt2">
                                                    <span class="tag">${intentInfo.jobType}</span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td class="tb2" valign="top">
                                        <table cellspacing="0" cellpadding="0" border="0">
                                            <tbody>
                                            <tr>
                                                <td valign="top" class="keys">期望薪资：</td>
                                                <td valign="top" class="txt2">
                                                    <span class="tag">${intentInfo.salary}</span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table xmlns="" cellspacing="0" cellpadding="0" border="0" class="box">
                    <tbody>
                    <tr>
                        <td class="plate1">自我介绍</td>
                    </tr>
                    <tr>
                        <td class="tba">
                            <table cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td class="tb2" valign="top">
                                        <table cellspacing="0" cellpadding="0" border="0">
                                            <tbody>
                                            <tr>
                                                <td valign="top" class="txt2"><span class="tag">${introInfo.introduce}</span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table xmlns="" cellspacing="0" cellpadding="0" border="0" class="box">
                    <tbody>
                    <tr>
                        <td class="plate1">教育经历</td>
                    </tr>

                    <tr>
                        <td class="tba">
                            <table cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td class="tb2" valign="top">
                                        <table cellspacing="0" cellpadding="0" border="0">
                                            <tbody>
                                            <tr>
                                                <td valign="top" class="txt2"><span class="tag">${expInfo.eduExp}</span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table xmlns="" class="box">
                    <tbody>
                    <tr>
                        <td class="plate1">项目经历</td>
                    </tr>

                    <tr>
                        <td class="tba">
                            <table cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td class="tb2" valign="top">
                                        <table cellspacing="0" cellpadding="0" border="0">
                                            <tbody>
                                            <tr>
                                                <td valign="top" class="txt2"><span class="tag">${expInfo.projectExp}</span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </td>
        </tr>
        </tbody>
    </table>

</div>


<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/html2canvas.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/jspdf.debug.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/main.js" ></script>
</body>
</html>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page isELIgnored="false" %>


