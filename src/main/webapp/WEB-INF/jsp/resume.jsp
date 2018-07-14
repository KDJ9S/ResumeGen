<%@ page import="org.springframework.web.context.request.SessionScope" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <link rel="apple-touch-icon" sizes="76x76" href="/static/assets/img/apple-icon.png"/>
    <link rel="icon" type="image/png" href="/static/assets/img/favicon.png"/>
    <title>Paper Bootstrap Wizard by Creative Tim</title>

    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport'/>
    <meta name="viewport" content="width=device-width"/>

    <!-- CSS Files -->
    <link href="/static/assets/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="/static/assets/css/paper-bootstrap-wizard.css" rel="stylesheet"/>

    <!-- CSS Just for demo purpose, don't include it in your project -->
    <link href="/static/assets/css/demo.css" rel="stylesheet"/>

    <!-- Fonts and Icons -->
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Muli:400,300' rel='stylesheet' type='text/css'>
    <link href="/static/assets/css/themify-icons.css" rel="stylesheet">
</head>
<body>
<div class="adcenter">
    <script src="http://www.cssmoban.com/include/new/ggad2_728x90.js"></script>
</div>
<div class="image-container set-full-height" style="background-image: url('/static/images/login.jpg')">

    <div>
        <label style="color: white">当前登录的账号是：${sessionScope.user.username}</label>
        <a href="/main" style="color: white;">返回首页</a>
    </div>

    <!--   Big container   -->
    <div class="container">
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2">

                <!--      Wizard container        -->
                <div class="wizard-container">
                    <div class="card wizard-card" data-color="green" id="wizard">
                        <form action="/submit" method="">
                            <!--        You can switch " data-color="green" "  with one of the next bright colors: "blue", "azure", "orange", "red"       -->

                            <div class="wizard-header">
                                <h3 class="wizard-title">Fill in your information</h3>
                                <p class="category">This information will let us know more about you.</p>
                            </div>
                            <div class="wizard-navigation">
                                <div class="progress-with-circle">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="1"
                                         aria-valuemax="4" style="width: 15%;"></div>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#location" data-toggle="tab">
                                            <div class="icon-circle">
                                                <i class="ti-map"></i>
                                            </div>
                                            Basic
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#type" data-toggle="tab">
                                            <div class="icon-circle">
                                                <i class="ti-direction-alt"></i>
                                            </div>
                                            Intent
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#facilities" data-toggle="tab">
                                            <div class="icon-circle">
                                                <i class="ti-panel"></i>
                                            </div>
                                            Experience
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#description" data-toggle="tab">
                                            <div class="icon-circle">
                                                <i class="ti-comments"></i>
                                            </div>
                                            Introduce
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <%--user id--%>
                            <input type="hidden" name="user_id" value="${sessionScope.user.id}">

                            <%--Basic Info 基本信息--%>
                            <div class="tab-content">
                                <div class="tab-pane" id="location">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <h5 class="info-text"> Let's start with the basic details</h5>
                                        </div>
                                        <div class="col-sm-5 col-sm-offset-1">
                                            <div class="form-group">
                                                <label>姓名</label>
                                                <input type="text" class="form-control" name="name"
                                                       placeholder="Your name?" >
                                            </div>
                                        </div>

                                        <div class="col-sm-5">
                                            <div class="form-group">
                                                <label>性别</label><br>
                                                <select  class="form-control"  name="gender" >
                                                    <option disabled="" selected="">- gender -</option>
                                                    <option value="男"> 男</option>
                                                    <option value="女"> 女</option>
                                                    <option value="其他"> 其他</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-sm-5 col-sm-offset-1">
                                            <div class="form-group">
                                                <label>年龄</label>
                                                <input type="text" class="form-control" name="age"
                                                       placeholder="Your age?" >
                                            </div>
                                        </div>

                                        <div class="col-sm-5">
                                            <div class="form-group">
                                                <label>民族</label>
                                                <input type="text" class="form-control" name="nation"
                                                       placeholder="Your nation?" >
                                            </div>
                                        </div>

                                        <div class="col-sm-5 col-sm-offset-1">
                                            <div class="form-group">
                                                <label>所在城市</label>
                                                <input type="text" class="form-control" name="city"
                                                       placeholder="Your city?">
                                            </div>
                                        </div>

                                        <div class="col-sm-5">
                                            <div class="form-group">
                                                <label>电话</label>
                                                <input type="text" class="form-control" name="tel"
                                                       placeholder="Your tel?" >
                                            </div>
                                        </div>

                                        <div class="col-sm-5 col-sm-offset-1">
                                            <div class="form-group">
                                                <label>电子邮箱</label>
                                                <input type="text" class="form-control" name="email"
                                                       placeholder="Your email?">
                                            </div>
                                        </div>

                                        <div class="col-sm-5">
                                            <div class="form-group">
                                                <label>学校</label>
                                                <input type="text" class="form-control" name="school"
                                                       placeholder="Your school?" >
                                            </div>
                                        </div>

                                        <div class="col-sm-5 col-sm-offset-1">
                                            <div class="form-group">
                                                <label>专业</label>
                                                <input type="text" class="form-control" name="major"
                                                       placeholder="Your major?" >
                                            </div>
                                        </div>

                                        <div class="col-sm-5">
                                            <div class="form-group">
                                                <label>学历</label>
                                                <input type="text" class="form-control" name="education"
                                                       placeholder="Your education?" >
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <%--Intent info 求职意向--%>
                                <div class="tab-pane" id="type">
                                    <h5 class="info-text">What is your intent? </h5>
                                    <div class="row">
                                        <div class="col-sm-5 col-sm-offset-1">
                                            <div class="form-group">
                                                <label>意向岗位</label>
                                                <input type="text" class="form-control" name="position"
                                                       placeholder="输入求职岗位" >
                                            </div>
                                        </div>

                                        <div class="col-sm-5">
                                            <div class="form-group">
                                                <label>职业类型</label><br>
                                                <select  class="form-control"  name="job_type" >
                                                    <option disabled="" selected="">- 选择职业类型 -</option>
                                                    <option value="全职"> 全职</option>
                                                    <option value="兼职"> 兼职</option>
                                                    <option value="实习"> 实习</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-sm-5 col-sm-offset-1">
                                            <div class="form-group">
                                                <label>意向城市</label>
                                                <input type="text" class="form-control" name="work_city"
                                                       placeholder="输入意向城市" >
                                            </div>
                                        </div>

                                        <div class="col-sm-5">
                                            <div class="form-group">
                                                <label>薪资要求</label>
                                                <input type="text" class="form-control" name="salary"
                                                       placeholder="输入薪资要求" >
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <%--Experience info 教育经历 项目经历--%>
                                <div class="tab-pane" id="facilities">
                                    <h5 class="info-text">Tell us more about your experience. </h5>
                                    <div class="row">
                                        <div class="col-sm-6 col-sm-offset-1">
                                            <div class="form-group">
                                                <label>教育经历</label>
                                                <textarea class="form-control" placeholder="" rows="9" name="edu_exp"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label>Example</label>
                                                <p class="description">"The place is really nice. We use it every sunday
                                                    when we go fishing. It is so awesome."</p>
                                            </div>
                                        </div>


                                        <div class="col-sm-6 col-sm-offset-1">
                                            <div class="form-group">
                                                <label>项目经历</label>
                                                <textarea class="form-control" placeholder="" rows="9" name="project_exp"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label>Example</label>
                                                <p class="description">"The place is really nice. We use it every sunday
                                                    when we go fishing. It is so awesome."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <%--Introduce 自我评价--%>
                                <div class="tab-pane" id="description">
                                    <div class="row">
                                        <h5 class="info-text"> Introduce yourself. </h5>
                                        <div class="col-sm-6 col-sm-offset-1">
                                            <div class="form-group">
                                                <label>请做一下自我评价，例如技能，业余爱好等</label>
                                                <textarea class="form-control" placeholder="" rows="9" name="introduce"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label>Example</label>
                                                <p class="description">"The place is really nice. We use it every sunday
                                                    when we go fishing. It is so awesome."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="wizard-footer">
                                <div class="pull-right">
                                    <input type='button' class='btn btn-next btn-fill btn-success btn-wd' name='next'
                                           value='Next'/>
                                    <input type='submit' class='btn btn-finish btn-fill btn-success btn-wd'
                                           name='finish' value='Finish'/>
                                </div>

                                <div class="pull-left">
                                    <input type='button' class='btn btn-previous btn-default btn-wd' name='previous'
                                           value='Previous'/>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </form>
                    </div>
                </div> <!-- wizard container -->
            </div>
        </div> <!-- row -->
    </div> <!--  big container -->

    <!-- footer -->
    <div class="footer">
        <div class="container text-center">
            <p> 2018.&nbsp;&nbsp;&nbsp;生产生产</p>
        </div>
    </div>
    <!-- //footer -->

</div>

</body>

<!--   Core JS Files   -->
<script src="/static/assets/js/jquery-2.2.4.min.js" type="text/javascript"></script>
<script src="/static/assets/js/bootstrap.min.js" type="text/javascript"></script>
<script src="/static/assets/js/jquery.bootstrap.wizard.js" type="text/javascript"></script>

<!--  Plugin for the Wizard -->
<script src="/static/assets/js/paper-bootstrap-wizard.js" type="text/javascript"></script>

<!--  More information about jquery.validate here: http://jqueryvalidation.org/	 -->
<script src="/static/assets/js/jquery.validate.min.js" type="text/javascript"></script>

</html>
