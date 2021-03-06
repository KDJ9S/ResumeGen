<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <title>个人简历生成系统-登录</title>
    <meta name="keywords" content="Winter Login Form Responsive widget, Flat Web Templates, Android Compatible web template,
	Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design"/>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- stylesheets -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/font-awesome.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/loginstyle.css">
    <!-- google fonts  -->
    <link href="//fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link href="//fonts.googleapis.com/css?family=Raleway:400,500,600,700" rel="stylesheet">
    <%-- jquery --%>
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/jquery-3.3.1.js"></script>
    <%-- login ajax --%>
    <script>
        function login() {
            $.ajax({
                    type: 'POST',

                    contentType: 'application/json; charset=utf-8',

                    url: '/ResumeGen/checkLogin',

                    dataType: 'json',

                    data: '{"username":"' + document.getElementById("username").value
                    + '","password":"' + document.getElementById("password").value + '"}',

                    success: function (data) {
                        if (data.flag === "success") { // 登陆成功，跳转到main页面
                            location.href = "/ResumeGen/main";
                        } else if (data.flag === "failure") { //登陆失败，提示
                            var errorMessageDiv = document.getElementById("errorMessageDiv");
                            if (!errorMessageDiv.hasChildNodes()) {
                                var newNode = document.createElement("p");
                                // newNode.id = "errMessage";
                                newNode.innerHTML = "账号或密码错误!";
                                newNode.style.color = "#FF6347";
                                errorMessageDiv.appendChild(newNode);
                            }
                        }
                    },

                    error: function (data) {
                        alert("网络错误！");
                    }

                }
            )
        }
    </script>
</head>
<body>
<div class="agile-login">
    <h1>个人简历生成系统</h1>
    <div class="wrapper">
        <h2>您好，请登录</h2>
        <div class="w3ls-form">
            <%-- 让form表单提交时执行js函数，而不是直接提交到一个url --%>
            <form action="javascript:login()" method="post">
                <label>用户名 </label>
                <input id="username" type="text" autofocus="autofocus" name="username" placeholder="账号" required/>
                <label>密码</label>
                <input id="password" type="password" name="password" placeholder="密码" required/>
                <%-- 输入错误提示占位 --%>
                <div id="errorMessageDiv"></div>
                <input type="submit" value="登录"/>
                <input type="button" value="注册" onclick="window.location.href='/ResumeGen/register'">
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

