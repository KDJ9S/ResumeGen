<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link href="../../static/css/style.css" rel='stylesheet' type='text/css' />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
    <style type="text/css">
        p {
            color: white;
        }
    </style>

</head>

<body>
<div class="main">
    <!-----start-main---->
    <div class="inset">
        <div class="social-icons">
            <div class="span"><a href="#"><img src="../../static/images/infoConfirm/fb.png" alt=""/><i>Connect with Facebook </i><div class="clear"></div></a></div>
            <div class="span1"><a href="#"><img src="../../static/images/infoConfirm/t-bird.png" alt=""/><i>Connect with Twitter</i><div class="clear"></div></a></div>
            <div class="clear"></div>
        </div>
    </div>
    <h2>Or sign up with</h2>
    <form action="${pageContext.request.contextPath}/confirmInfo" method="post">
        <%--user id--%>
        <input type="hidden" name="userId" value="${sessionScope.user.id}">

        <div class="lable">
            <p>&nbsp;&nbsp;姓名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;性别</p>
            <input type="text" name="name" class="text" value="${basicInfo.name}" onblur="if (this.value === '') {this.value = '姓名';}" required>
            <input type="text" name="gender" class="text" value="${basicInfo.gender}" onblur="if (this.value === '') {this.value = '性别';}" required>
            <p>&nbsp;&nbsp;年龄&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;民族</p>
            <input type="text" name="age" class="text" value="${basicInfo.age}" onblur="if (this.value === '') {this.value = '年龄';}" required>
            <input type="text" name="nation" class="text" value="${basicInfo.nation}" onblur="if (this.value === '') {this.value = '民族';}" required>
            <p>&nbsp;&nbsp;城市&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话</p>
            <input type="text" name="city" class="text" value="${basicInfo.city}" onblur="if (this.value === '') {this.value = '城市';}" required>
            <input type="text" name="tel" class="text" value="${basicInfo.tel}" onblur="if (this.value === '') {this.value = '电话';}" required>
            <p>&nbsp;&nbsp;毕业院校&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;专业</p>
            <input type="text" name="school" class="text" value="${basicInfo.school}" onblur="if (this.value === '') {this.value = '毕业院校';}" required>
            <input type="text" name="major" class="text" value="${basicInfo.major}" onblur="if (this.value === '') {this.value = '专业';}" required>
            <p>&nbsp;&nbsp;学历&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮箱</p>
            <input type="text" name="education" class="text" value="${basicInfo.education}" onblur="if (this.value === '') {this.value = '毕业院校';}" required>
            <input type="text" name="email" class="text" value="${basicInfo.email}" onblur="if (this.value === '') {this.value = '专业';}" required>

        </div>
        <div class="clear"> </div>
        <div class="lable-2">
            <p>个人简介</p>
            <textarea class="text" name="introduce" onblur="if (this.value === '') {this.value = 'your@email.com ';}" required>${introInfo.introduce}</textarea>
            <p>教育经历</p>
            <textarea class="text" name="eduExp" onblur="if (this.value === '') {this.value = 'your@email.com ';}" required>${expInfo.eduExp}</textarea>
            <p>项目经历</p>
            <textarea class="text" name="projectExp" onblur="if (this.value === '') {this.value = 'your@email.com ';}" required>${expInfo.projectExp}</textarea>
            <p>申请职位</p>
            <input type="text" name="position" class="text" value="${intentInfo.position}" onblur="if (this.value === '') {this.value = 'your@email.com ';}" required>
            <p>期望薪水</p>
            <input type="text" name="salary" class="text" value="${intentInfo.salary}" onblur="if (this.value === '') {this.value = 'your@email.com ';}" required>

        </div>
        <div class="clear"> </div>
        <div class="submit">
            <input type="submit" value="下一步" >
        </div>
        <div class="clear"> </div>
    </form>
    <!-----//end-main---->
</div>
<!-----start-copyright---->
<div class="copy-right">
    <p>@<a href="javascript:void(0)" target="_blank">生产实习</a></p>
</div>
<!-----//end-copyright---->

</body>
</html>
