<%--
  Created by IntelliJ IDEA.
  User: kdj9s
  Date: 2018/7/15
  Time: 上午8:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE>
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
    <script type="text/javascript" src="../../../../static/template/js4ajax/mAjax.js"></script>

    <%--jspdf--%>
    <script src="/static/js/jspdf.debug.js"></script>
    <script src="/static/js/html2canvas.js" ></script>
    <%--<script type="text/javascript" src="/static/js/main.js" ></script>--%>

    <script type="text/javascript">
        function topdf() {

            alert("lala");

            html2canvas(
                document.getElementById("export_content"),
                {
                    dpi: 172,//导出pdf清晰度
                    onrendered: function (canvas) {
                        var contentWidth = canvas.width;
                        var contentHeight = canvas.height;

                        //一页pdf显示html页面生成的canvas高度;
                        var pageHeight = contentWidth / 592.28 * 841.89;
                        //未生成pdf的html页面高度
                        var leftHeight = contentHeight;
                        //pdf页面偏移
                        var position = 0;
                        //html页面生成的canvas在pdf中图片的宽高（a4纸的尺寸[595.28,841.89]）
                        var imgWidth = 595.28;
                        var imgHeight = 592.28 / contentWidth * contentHeight;

                        var pageData = canvas.toDataURL('image/jpeg', 1.0);
                        var pdf = new isPDF('', 'pt', 'a4');

                        //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                        //当内容未超过pdf一页显示的范围，无需分页
                        if (leftHeight < pageHeight) {
                            pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                        } else {
                            while (leftHeight > 0) {
                                pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                                leftHeight -= pageHeight;
                                position -= 841.89;
                                //避免添加空白页
                                if (leftHeight > 0) {
                                    pdf.addPage();
                                }
                            }
                        }
                        pdf.save('content.pdf');
                    },
                    //背景设为白色（默认为黑色）
                    background: "#fff"
                })
        }
    </script>
</head>
<body>

<button id="btn-html2canvas" onclick="topdf()">export PDF by using jspdf + html2canvas</button>

<aside>
    <ul>
        <li>
            <a href="javascript:void(0)" onclick="myAjax(${user.id},1)" target="_blank">保存</a>
        </li>
    </ul>
</aside>

<div class="container" id="export_content">
    <div class="sidebar">
        <div class="title">
            <img src="${basicInfo.image}" width="180px" height="200px">
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
