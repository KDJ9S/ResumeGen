<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
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
<table cellpadding="0" cellspacing="0" align="center" bgcolor="#fff" class="column">
    <tbody>
    <tr>
        <td valign="top">
            <table xmlns="" cellspacing="0" cellpadding="0" border="0" class="box1">
                <tbody>
                <tr>
                    <td class="hbox" align="middle"><img
                            src="http://i.51job.com/resume/ajax/image.php?type=avatar&amp;userid=370152171&amp;key=5ac1c09ebab60a09ce4fff74754e3f7b"
                            width="85" height="104" class="head" alt="头像"></td>
                    <td>
                        <table cellspacing="0" cellpadding="0" border="0" class="infr">
                            <tbody>
                            <tr>
                                <td colspan="2" class="name">${namee}</td>
                                <td align="right" class="icard">
                                    ID:370152171
                                </td>
                            </tr>
                            <tr>
                                <td valign="top">
                                    <img class="vam" src="http://img01.51jobcdn.com/im/2016/resume/y1.png" width="20"
                                         height="20">目前正在找工作
                                </td>
                                <td valign="top">
                                    <img class="vam" src="http://img01.51jobcdn.com/im/2016/resume/y2.png" width="20"
                                         height="20">15019490942
                                </td>
                                <td valign="top">
                                    <table cellspacing="0" cellpadding="0" border="0" class="email">
                                        <tbody>
                                        <tr>
                                            <td valign="top" width="25"><img class="vam"
                                                                             src="http://img01.51jobcdn.com/im/2016/resume/y3.png"
                                                                             width="20" height="20"></td>
                                            <td valign="top" class="txt4">1621279538@qq.com</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top" colspan="3"><p><img class="vam"
                                                                     src="http://img01.51jobcdn.com/im/2016/resume/y4.png"
                                                                     width="20" height="20">女<span class="p5">|</span>19
                                    岁 (1998/04/23)<span class="p5">|</span>现居住深圳<span class="p5">|</span>1年工作经验
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
                            <tr>
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
                                            <td colspan="2" class="plate2">最近工作</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" class="keys">职位：</td>
                                            <td valign="top" class="txt2">网页设计/制作/美工</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" class="keys">公司：</td>
                                            <td valign="top" class="txt2">深圳市终端云有限公司</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" class="keys">行业：</td>
                                            <td valign="top" class="txt2">互联网/电子商务</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
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
                                            <td valign="top" class="txt2">计算机网络</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" class="keys">学校：</td>
                                            <td valign="top" class="txt2">深圳技师学院</td>
                                        </tr>
                                        <tr>
                                            <td valign="top" class="keys">学历/学位：</td>
                                            <td valign="top" class="txt2">大专</td>
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
                    <td class="plate1">个人信息</td>
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
                                            <td valign="top" class="keys">户口/国籍：</td>
                                            <td valign="top" class="txt2">黄冈</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td class="tb2" valign="top">&nbsp;</td>
                            </tr>
                            <tr>
                                <td class="tb2" valign="top">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="keys">婚姻状况：</td>
                                            <td valign="top" class="txt2">未婚</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td class="tb2" valign="top">&nbsp;</td>
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
                                <td class="tb1" colspan="2">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <thead style="height:0">
                                        <tr>
                                            <td valign="top" class="keys"></td>
                                            <td valign="top" class="txt1"></td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="keys">个人标签：</td>
                                            <td valign="top" class="txt1">
                                                <span class="tag">领班&nbsp;&nbsp;</span><span class="tag">咨询顾问</span>
                                            </td>
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
                                            <td valign="top" class="keys">期望薪资：</td>
                                            <td valign="top" class="txt2">6000-7999
                                                元/月
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td class="tb2" valign="top">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="keys">地点：</td>
                                            <td valign="top" class="txt2"><span class="tag">深圳</span></td>
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
                                            <td valign="top" class="keys">职能/职位：</td>
                                            <td valign="top" class="txt2">
                                                <span class="tag">网页设计/制作/美工&nbsp;&nbsp;</span><span
                                                    class="tag">Web前端开发</span><span
                                                    class="tag">&nbsp;&nbsp;Web前端设计师</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td class="tb2" valign="top">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="keys">行业：</td>
                                            <td valign="top" class="txt2">
                                                <span class="tag">计算机软件&nbsp;&nbsp;</span><span
                                                    class="tag">互联网/电子商务</span>
                                            </td>
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
                                            <td valign="top" class="keys">到岗时间：</td>
                                            <td valign="top" class="txt2">待定</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td class="tb2" valign="top">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="keys">工作类型：</td>
                                            <td valign="top" class="txt2">全职</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb1" colspan="2">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <thead style="height:0">
                                        <tr>
                                            <td valign="top" class="keys"></td>
                                            <td valign="top" class="txt1"></td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="keys">自我评价：</td>
                                            <td valign="top" class="txt1">
                                                在深圳出生，对深圳互联网的发展有一定的了解，并且本身对互联网有极大的兴趣，愿意花时间精力在前端这方面钻研。
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
                    <td class="plate1">工作经验</td>
                </tr>
                <tr>
                    <td class="tbb">
                        <table cellspacing="0" cellpadding="0" border="0">
                            <tr>
                                <td class="p15">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="time">2017/10-至今</td>
                                            <td valign="top" class="rtbox">
                                                <strong class="txt3">网页设计/制作/美工</strong><span>
                        (兼职)
                      </span><span class="p5">|</span><span>网站微信运行专员</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="phd tb1" colspan="2">
                                                <span>深圳市终端云有限公司</span><span class="gray">&nbsp;[6个月]
                    </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="phd tb1 gray2" colspan="2">互联网/电子商务<span class="p5">|</span>少于50人<span
                                                    class="p5">|</span>民营公司
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tb1" colspan="2">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">工作描述：</td>
                                                        <td valign="top" class="txt1">
                                                            自营商城的产品上下架的管理和规范；产品图片设计；活动的规划与提报；负责装饰商城的装修和基础优化、流量优化等动作。
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
                            <tr>
                                <td class="p15 con">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="time">2017/6-2017/9</td>
                                            <td valign="top" class="rtbox">
                                                <strong class="txt3">网页设计/制作/美工</strong><span>
                        (兼职)
                      </span><span class="p5">|</span><span>美工</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="phd tb1" colspan="2">
                                                <span>深圳九康科技有限公司</span><span class="gray">&nbsp;[3个月]
                    </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="phd tb1 gray2" colspan="2">互联网/电子商务<span class="p5">|</span>少于50人<span
                                                    class="p5">|</span>民营公司
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tb1" colspan="2">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">工作描述：</td>
                                                        <td valign="top" class="txt1">
                                                            日常网站后台的图片数据管理，以及部分后台图片的维护。（来此公司属实习）
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
                            <tr>
                                <td class="p15 con">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="time">2015/3-至今</td>
                                            <td valign="top" class="rtbox">
                                                <strong class="txt3">网页设计师</strong><span
                                                    class="p5">|</span><span>网页设计部</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="phd tb1" colspan="2">
                                                <span>铱王星有限公司</span><span class="gray">&nbsp;[3年1个月]
                    </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="phd tb1 gray2" colspan="2">互联网/电子商务<span class="p5">|</span>少于50人<span
                                                    class="p5">|</span>事业单位
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tb1" colspan="2">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">工作描述：</td>
                                                        <td valign="top" class="txt1">
                                                            根据与外面合作商企业进行相关业务合作，在有限的时间内完成交下来的相关美工网页设计任务等。<br>1.美工部门的日常管理。<br>2.带领自己的组员熟悉完成所交下来的网页设计任务。<br>3.最后，待项目结束之前进行审核。<br>在工作室学习，通过与外界的项目进行合作，有熟练的ps技术，能独立完成一个网页效果图，以及网页上的美工问题同时学习html和css并且精通应用，以及js相关语法，熟练运用过bootstrap框架以及谷歌的material&#x20;design框架完成网页的设计以及排版，同时还学习了vue.js的前端交互框架，对前端框架有自己一部分的理解，目前正在学习angular4.0。并且拥有git团队开发的部分经验，也有自己的GitHub仓库，之前也有用过类似的FTP应用之类的。
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
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
            <table xmlns="" cellspacing="0" cellpadding="0" border="0" class="box">
                <tbody>
                <tr>
                    <td class="plate1">项目经验</td>
                </tr>
                <tr>
                    <td class="tba">
                        <table cellspacing="0" cellpadding="0" border="0">
                            <tr>
                                <td class="p15">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="time">2017/11-2017/12</td>
                                            <td valign="top" class="rtbox"><strong>电子信息技术系教科研成果展</strong></td>
                                        </tr>
                                        <tr>
                                            <td class="tb1" colspan="2">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">项目描述：</td>
                                                        <td valign="top" class="txt1">
                                                            带领自己得组员完成电子信息技术系教科研成果展一系列的设计，画册，海报，展架，地贴，地拉等。
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tb1" colspan="2">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">责任描述：</td>
                                                        <td valign="top" class="txt1">设计组长</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="p15 con">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="time">2015/4-至今</td>
                                            <td valign="top" class="rtbox"><strong>http://www.kanglianghe.com/</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tb1" colspan="2">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">所属公司：</td>
                                                        <td valign="top" class="txt1">铱王星有限公司</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tb1" colspan="2">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">项目描述：</td>
                                                        <td valign="top" class="txt1">本人独立完成了整个项目的设计工作，网站的web&#x20;前端设计，HTML以及css，js开发，以及运用bootstrap框架。</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tb1" colspan="2">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">责任描述：</td>
                                                        <td valign="top" class="txt1">担任web前端设计师</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="p15 con">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="time">2015/1-至今</td>
                                            <td valign="top" class="rtbox"><strong>http://www.21chc.org/</strong></td>
                                        </tr>
                                        <tr>
                                            <td class="tb1" colspan="2">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">所属公司：</td>
                                                        <td valign="top" class="txt1">铱王星有限公司</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tb1" colspan="2">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">项目描述：</td>
                                                        <td valign="top" class="txt1">网站维护</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tb1" colspan="2">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">责任描述：</td>
                                                        <td valign="top" class="txt1">担任web&#x20;网页设计师一职</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
            <table xmlns="" class="box">
                <tbody>
                <tr>
                    <td class="plate1">教育经历</td>
                </tr>
                <tr>
                    <td class="tba">
                        <table cellspacing="0" cellpadding="0" border="0">
                            <tr>
                                <td class="p15">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="time">2014/9-2019/6</td>
                                            <td valign="top" class="rtbox"><strong>深圳技师学院</strong></td>
                                        </tr>
                                        <tr>
                                            <td class="tb1" colspan="2">大专<span class="p5">|</span>计算机网络</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="p15 con">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="time">2014/7-2019/7</td>
                                            <td valign="top" class="rtbox"><strong>深圳大学</strong></td>
                                        </tr>
                                        <tr>
                                            <td class="tb1" colspan="2">大专<span class="p5">|</span>计算机网络</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
            <table xmlns="" cellspacing="0" cellpadding="0" border="0" class="box">
                <tbody>
                <tr>
                    <td class="plate1">在校情况</td>
                </tr>
                <tr>
                    <td class="tbb">
                        <table cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                            <tr>
                                <td class="tit">校内荣誉</td>
                            </tr>
                            <tr>
                                <td class="tb3">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="time">2017/11</td>
                                            <td valign="top" class="rtbox">
                                                <strong class="txt3">“铱王杯”网页设计大赛</strong><span>（优秀奖）</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb3 con">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="time">2017/10</td>
                                            <td valign="top" class="rtbox">
                                                <strong class="txt3">分校赛第二名</strong><span>（深圳市“逐梦杯”创新创业大赛总决赛）</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb3 con">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="time">2017/4</td>
                                            <td valign="top" class="rtbox"><strong class="txt3">二等奖学金</strong></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="tb3 con">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="time">2016/3</td>
                                            <td valign="top" class="rtbox">
                                                <strong class="txt3">二等奖</strong><span>（“多迪杯”网页设计大赛）</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <table cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                            <tr>
                                <td class="tit">校内职务</td>
                            </tr>
                            <tr>
                                <td class="p15">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="time">2017/4-2017/12</td>
                                            <td valign="top" class="rtbox"><strong class="txt3">副班主任</strong></td>
                                        </tr>
                                        <tr>
                                            <td class="tb1" colspan="2">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">职务描述：</td>
                                                        <td valign="top" class="txt1">
                                                            同老师进行配合，互相协助，带领班级，班级的日常生活管理，以及班会的宣传通知，同班主任的职务相当，带领学生学习。
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
                    </td>
                </tr>
                </tbody>
            </table>
            <table xmlns="" cellspacing="0" cellpadding="0" border="0" class="box">
                <tbody>
                <tr>
                    <td class="plate1">
                        技能特长
                        <span class="f12">（包括IT技能、语言能力、证书、成绩、培训经历）</span>
                    </td>
                </tr>
                <tr>
                    <td class="tbb">
                        <table cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                            <tr>
                                <td class="tit">技能/语言</td>
                            </tr>
                            <tr>
                                <td class="p15">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td class="tb2 cell lh" valign="top">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td class="skill"><strong class="txt3">Web前端</strong></td>
                                                        <td valign="top"><span class="skbg"><span class="skco">良好</span></span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td class="tb2 cell yb" valign="top">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td class="skill"><strong class="txt3">JavaScript</strong></td>
                                                        <td valign="top"><span class="skbg"><span class="skco">一般</span></span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tb2 cell yb" valign="top">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td class="skill"><strong class="txt3">Illustrator</strong></td>
                                                        <td valign="top"><span class="skbg"><span class="skco">一般</span></span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td class="tb2 cell sl" valign="top">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td class="skill"><strong class="txt3">Photoshop</strong></td>
                                                        <td valign="top"><span class="skbg"><span class="skco">熟练</span></span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tb2 cell lh" valign="top">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td class="skill"><strong class="txt3">HTML5</strong></td>
                                                        <td valign="top"><span class="skbg"><span class="skco">良好</span></span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td class="tb2 cell lh" valign="top">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td class="skill"><strong class="txt3">Dreamweaver</strong></td>
                                                        <td valign="top"><span class="skbg"><span class="skco">良好</span></span>
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
                        <table cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                            <tr>
                                <td class="tit">培训经历</td>
                            </tr>
                            <tr>
                                <td class="p15">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td valign="top" class="time">2015/1--至今</td>
                                            <td valign="top" class="rtbox"><strong class="txt3">web前端设计</strong></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td class="tb2" valign="top">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">培训机构：</td>
                                                        <td valign="top" class="txt2">极客工作室</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td class="tb2" valign="top">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">培训地点：</td>
                                                        <td valign="top" class="txt2">深圳技师学院</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tb1" colspan="2">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">培训描述：</td>
                                                        <td valign="top" class="txt1">
                                                            在工作室期间，通过工作室与外面企业合作所签署的商业项目，与工作室的团队，完成网站项目，在此期间，担任web前端设计师一职务，带领自己的组员，完成项目。并从中学习完善自己的技能，拥有优秀的知识层面。
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
                    </td>
                </tr>
                </tbody>
            </table>
            <table xmlns="" cellspacing="0" cellpadding="0" border="0" class="box">
                <tbody>
                <tr>
                    <td class="plate1">附加信息</td>
                </tr>
                <tr>
                    <td class="tbb">
                        <table cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                            <tr>
                                <td class="tit">其他</td>
                            </tr>
                            <tr>
                                <td class="p15">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                        <tr>
                                            <td class="tb1">
                                                <table cellspacing="0" cellpadding="0" border="0">
                                                    <tbody>
                                                    <tr>
                                                        <td valign="top" class="keys">主题：</td>
                                                        <td valign="top" class="txt3">驾照</td>
                                                    </tr>
                                                    <tr>
                                                        <td valign="top" class="keys">主题描述：</td>
                                                        <td valign="top" class="txt1">在校拿驾照中。</td>
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
        </td>
    </tr>
    </tbody>
</table>
</body>
</html>
