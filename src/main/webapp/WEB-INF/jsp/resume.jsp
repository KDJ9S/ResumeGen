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

<div class="image-container set-full-height" style="background-image: url('/static/images/login.jpg')">

    <div align="center">
        <h5><a href="/main" style="color: white;">返回首页</a></h5>
    </div>

    <!--   Big container   -->
    <div class="container">
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2">

                <!--      Wizard container        -->
                <div class="wizard-container">
                    <div class="card wizard-card" data-color="green" id="wizard">
                        <form action="/submit" method="post" enctype="multipart/form-data">
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
                            <input type="hidden" name="userId" value="${sessionScope.user.id}">

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

                                        <div class="col-sm-5 col-sm-offset-1">
                                            <div class="form-group">
                                                <label>上传您的照片</label><br>
                                                <input type="file" name="photo">
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
                                                <select  class="form-control"  name="jobType" >
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
                                                <input type="text" class="form-control" name="workCity"
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
                                                <textarea id="textarea1" class="form-control" placeholder="" rows="20" name="eduExp"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label>Example</label>
                                                <p class="description"> 2015-2019.  北京科技大学 <br><br> 2019-2022.  北京科技大学</p>
                                                <label>小贴士</label>
                                                <p class="description"> <strong>可填信息：</strong>
                                                                    <br>教育经历起止日期/学校名称/专业名称/学位
                                                                    <br>可填信息：成绩排名/主修课程/辅修课程
                                                                    <br><strong>注意：</strong>
                                                                    <br>尽量简洁，突出重点
                                                                    <br>成绩优异的话建议写上GPA及排名等信息
                                                                    <br>主修课程只写与申请岗位相关的即可，相关性强的写在前面
                                                                    <br>未毕业在校生的教育经历结束日期应填写预计毕业年月</p>
                                            </div>
                                        </div>


                                        <div class="col-sm-6 col-sm-offset-1">
                                            <div class="form-group">
                                                <label>项目经历</label>
                                                <textarea id="textarea2" class="form-control" placeholder="" rows="25" name="projectExp"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label>Example</label>
                                                <p class="description"> 2015.7-2017.7 学校项目 开发工程师
                                                    <br><strong>项目描述：</strong>项目是一款地理位置新闻类App：查看当前位置新闻、失物招领信息、景点、交通信息、拼车服务、危险警报、自动识别一键报警（已集成全球200多个国家的报警电话）功能等。
                                                    <br><strong>软件环境：</strong>Android Studio、Android手机
                                                    <br><strong>职责描述：</strong>该项目由本人独立开发完成。<br><br>
                                                                        2016.7-2017.7 学校项目 开发工程师
                                                    <br><strong>项目描述：</strong>项目采用网上第三方提供商提供的API，数据共包含了图片，段子，视频，音频四种数据，内容搞笑又富含乐趣。怀着一颗模仿的心，造就了不得姐，并在此基础上进行了相关的个性化修改。(由于涉及版权等相关问题，项目不能上线)。
                                                    <br><strong>软件环境：</strong>Android Studio、Android手机
                                                    <br><strong>职责描述：</strong>该项目由本人独立开发完成。</p>
                                                <label>小贴士</label>
                                                <p class="description"> <strong>可填信息：</strong>
                                                                    <br>工作起止日期/所在公司名称/职位/工作描述（侧重描述自己负责的工作）/工作成果
                                                                    <br><strong>注意：</strong>
                                                                    <br>工作经验的时间采取倒叙形式，最近经历写在前面；
                                                                    <br>工作经验的描述与目标岗位的招聘要求尽量匹配，用词精准；
                                                                    <br>工作成果尽量以数据来呈现，突出个人成果以及做出的贡献；
                                                                    <br>描述尽量具体简洁。
                                                                    <br>可对企业进行简短介绍，如：XX行业第二大XX企业，核心产品包括XX / XX行业领军企业，拥有X个分公司和X名员工 / XX领域X轮创业公司，主要产品是XXX，拥有X用户</p>
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
                                                <textarea id="textarea3" class="form-control" placeholder="" rows="20" name="introduce"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label>Example</label>
                                                <p class="description">开发语言：熟悉掌握Java、Js、Html5等语言。
                                                                    <br>开发框架：熟悉掌握Mybatis、springMVC、Jquery、Bootstrap。
                                                                    <br>开发工具：掌握运用Eclipse、Myeclipse、intellij idea、Webstrom、Dreamweaver等工具。
                                                                    <br>数据库：熟悉Mysql、Oracle、Sqlserver。</p>
                                                <label>小贴士</label>
                                                <p class="description">自我评价应做到突出自身符合目标岗位要求的“卖点”；
                                                                <br>避免过多使用形容词，而应该通过数据及实例来对自身价值进行深化。</p>
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
                                           name='finish' value='Finish' id="form" />
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

<%--textarea换行问题--%>
<script type="text/javascript">

    var submit = document.getElementById("form");

    submit.onclick = function() {

        var descrip1 = document.getElementById("textarea1").value;
        descrip1 = descrip1.replace('\n', '<br>');
        document.getElementById("textarea1").value = descrip1;

        var descrip2 = document.getElementById("textarea2").value;
        descrip2 = descrip2.replace('\n', '<br>');
        document.getElementById("textarea2").value = descrip2;

        var descrip3 = document.getElementById("textarea3").value;
        descrip3 = descrip3.replace('\n', '<br>');
        document.getElementById("textarea3").value = descrip3;
    }
</script>
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
