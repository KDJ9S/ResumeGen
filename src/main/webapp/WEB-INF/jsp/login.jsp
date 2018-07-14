<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <title>Winter Login Form a Simple Login form Responsive Widget :: w3layouts</title>
    <meta name="keywords" content="Winter Login Form Responsive widget, Flat Web Templates, Android Compatible web template,
	Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- stylesheets -->
    <link rel="stylesheet" href="/static/css/font-awesome.css">
    <link rel="stylesheet" href="/static/css/loginstyle.css">
    <!-- google fonts  -->
    <link href="//fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link href="//fonts.googleapis.com/css?family=Raleway:400,500,600,700" rel="stylesheet">
</head>
<body>
<div class="agile-login">
    <h1>Winter Login Form</h1>
    <div class="wrapper">
        <h2>Sign In</h2>
        <div class="w3ls-form">
            <form action="/checkLogin" method="post">
                <label>Username</label>
                <input id="username" type="text" name="username" placeholder="Username" required/>
                <label>Password</label>
                <input id="password" type="password" name="password" placeholder="Password" required />
                <br>
                <input type="submit" value="登录" />
                <input type="button" value="注册" onclick="window.location.href='/register'">
            </form>
        </div>
    </div>
    <br>
    <div class="copyright">
        <p>© 2018  生产生产</p>
    </div>
</div>

</body>
</html>

