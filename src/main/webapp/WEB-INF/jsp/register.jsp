<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <title>Winter Login Form a Simple Login form Responsive Widget :: w3layouts</title>
    <meta name="keywords" content="Winter Login Form Responsive widget, Flat Web Templates, Android Compatible web template,
	Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design"/>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- stylesheets -->
    <link rel="stylesheet" href="<c:url value="/static/css/font-awesome.css"/>">
    <link rel="stylesheet" href="<c:url value="/static/css/loginstyle.css"/>">
    <!-- google fonts  -->
    <link href="<c:url value="//fonts.googleapis.com/css?family=Open+Sans"/>" rel="stylesheet">
    <link href="<c:url value="//fonts.googleapis.com/css?family=Raleway:400,500,600,700"/>" rel="stylesheet">
    <%-- jquery --%>
    <%--<script type="text/javascript" src="../../static/js/jquery-3.3.1.js"></script>--%>
    <script type="text/javascript" src="<c:url value="/static/js/jquery-3.3.1.js"/>"></script>
    <%-- 用户名查重 --%>
    <script>
        function validate(obj) {
            $.ajax({
                    type: 'POST',

                    contentType: 'application/json; charset=utf-8',

                    url: '/ResumeGen/checkExistence',

                    dataType: 'json',

                    data: '{"username":"' + obj.value + '"}',

                    success: function (data) {
                        var rootDiv = document.getElementById("existenceDiv");
                        var newNode;

                        if (!rootDiv.hasChildNodes()) { // 如果该节点下还没有子节点，则创建
                            newNode = document.createElement("p"); // 创建<p>节点
                            newNode.id = "existenceHint"; // 设置Id
                        } else { // 如果已经有子节点，获取过来，设置内容
                            newNode = document.getElementById("existenceHint");
                        }

                        if (data.flag === "true") { // username已经重复，不能注册
                            newNode.style.color = "#FF6347"; // 字体红色
                            newNode.innerHTML = "该用户名已被注册!";
                        } else if (data.flag === "false") { // username没有重复，可以注册
                            newNode.style.color = "#87CEFA"; // 字体蓝色
                            newNode.innerHTML = "该用户名可以注册!";
                        }
                        // 没有节点，则添加进去
                        if (!rootDiv.hasChildNodes()) {
                            // 把newNode添加到div下
                            rootDiv.appendChild(newNode);
                        }

                    },

                    error: function (data) {
                        alert("网络错误！");
                    }

                }
            )
        }
    </script>
    <%-- 做注册 --%>
    <script>
        function doRegister() {

            if (document.getElementById("existenceHint").innerHTML === "该用户名已被注册!") { // 若用户名重复，则不注册

            } else {
                // 若不重复，则发ajax做注册
                $.ajax({
                        type: 'POST',

                        contentType: 'application/json; charset=utf-8',

                        url: '/ResumeGen/doRegister',

                        dataType: 'json',

                        data: '{"username":"' + document.getElementById("username").value
                        + '","password":"' + document.getElementById("password").value + '"}',

                        success: function (data) {
                            if (data.flag === "success") { // 注册成功，跳转到main页面
                                location.href = "/ResumeGen/main";
                            } else if (data.flag === "failure") { //注册失败，提示
                                alert("注册失败，请重试");
                            }
                        },

                        error: function (data) {
                            alert("网络错误！请检查网络连接");
                        }

                    }
                )
            }

        }
    </script>

</head>
<body>
<div class="agile-login">
    <h1>个人简历生成系统</h1>
    <div class="wrapper">
        <h2>请注册</h2>
        <div class="w3ls-form">
            <%-- action执行doRegister函数 --%>
            <form action="javascript:doRegister()" autocomplete="off" method="post">
                <label>用户名</label>
                <input id="username" autofocus="autofocus" onkeyup="validate(this)" type="text"
                       name="username" required/>
                <%-- 数据库查重提示占位 --%>
                <div id="existenceDiv"></div>
                <label>密码</label>
                <input id="password" type="password" autocomplete="new-password" name="password" required/>
                <a href="<c:url value="/login"/>" class="pass">已有账号？马上登录</a>
                <input type="submit" id="register" value="注册"/>
            </form>
        </div>
    </div>
    <br>
    <div class="copyright">
        <p>© 2018 生产生产</p>
    </div>
</div>

</body>
</html>


