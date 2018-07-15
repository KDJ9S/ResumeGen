<%--
  Created by IntelliJ IDEA.
  User: kdj9s
  Date: 2018/7/15
  Time: 上午8:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
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
</head>
<body>
<aside>
    <ul>
        <li>
            <a href="https://github.com/AiotCEO" target="_blank">源代码</a>
        </li>
        <li>
            <a href="https://github.com/AiotCEO" target="_blank">PDF 下载</a>
        </li>
        <li>
            <a href="https://github.com/AiotCEO" target="_blank">个人网站</a>
        </li>
        <li>
            <a href="https://github.com/AiotCEO" target="_blank">GitHub</a>
        </li>
    </ul>
</aside>
<div class="container">
    <div class="sidebar">
        <div class="title">
            <img src="../../../../static/template/resume1/img/head.jpg">
            <h1>${basicInfo.name}</h1>
            <h1>${basicInfo.gender}</h1>
        </div>
        <ul class="side-info">
            <li class="someRight">

                <i class="icon-bookmark">Contact&nbsp;-&nbsp;联系方式</i><br>

                <i class="icon-phone">&nbsp;手机: ${basicInfo.tel}</i><br>

                <i class="icon-mail">&nbsp;邮箱: ${basicInfo.email}</i><br>

                <i class="icon-mail">&nbsp;国籍: ${basicInfo.nation}</i><br>

                <i class="icon-mail">&nbsp;城市: ${basicInfo.city}</i><br>

            </li>
            <li class="someRight">
                <dt><i class="icon-bookmark"></i>Application&nbsp;-&nbsp;应聘岗位</dt>
                <dd>${intentInfo.position}</dd>
            </li>
            <li class="skill">
                <dt><i class="icon-bookmark"></i>Tech&nbsp;-&nbsp;专业知识</dt>
                <dd>
                    <div class="skill-name">专业知识一</div>
                    <div class="skill-bar-wrap">
                        <div class="skill-bar" style="width: 90%"></div>
                    </div>
                </dd>
                <dd>
                    <div class="skill-name">专业知识二</div>
                    <div class="skill-bar-wrap">
                        <div class="skill-bar" style="width: 90%"></div>
                    </div>
                </dd>
                <dd>
                    <div class="skill-name">专业知识三</div>
                    <div class="skill-bar-wrap">
                        <div class="skill-bar" style="width: 80%"></div>
                    </div>
                </dd>
                <dd>
                    <div class="skill-name">专业知识四</div>
                    <div class="skill-bar-wrap">
                        <div class="skill-bar" style="width: 80%"></div>
                    </div>
                </dd>
                <dd>
                    <div class="skill-name">专业知识五</div>
                    <div class="skill-bar-wrap">
                        <div class="skill-bar" style="width: 80%"></div>
                    </div>
                </dd>
                <dd>
                    <div class="skill-name">专业知识六</div>
                    <div class="skill-bar-wrap">
                        <div class="skill-bar" style="width: 70%"></div>
                    </div>
                </dd>
                <dd>
                    <div class="skill-name">专业知识七</div>
                    <div class="skill-bar-wrap">
                        <div class="skill-bar" style="width: 60%"></div>
                    </div>
                </dd>
            </li>
        </ul>
        <div class="note">
            <p>在这里写上一段对 HR 说的话</p>
        </div>
    </div>
    <div class="main">
        <ul class="main-info">
            <li class="someRight">
                <dt><i class="icon-bookmark"></i>Basic info&nbsp;-&nbsp;基本信息</dt>
                <dd><span>姓名:</span> ${basicInfo.name}</dd>
                <dd><span>教育经历:</span> ${expInfo.edu_exp}</dd>
                <dd><span>专业:</span> ${basicInfo.major}</dd>
                <dd><span>毕业院校:</span>${basicInfo.school}</dd>
                <dd><span>GitHub:</span>
                    <a href="https://github.com/AiotCEO" target="_blank">https://github.com/AiotCEO</a></dd>
            </li>
            <li>
                <dt><i class="icon-bookmark"></i>Skill&nbsp;-&nbsp;专业技能</dt>
                <h3>技能总项一</h3>
                <ul class="exp">
                    <li>
                        <div class="circle"></div>
                        <h4>技能细分一</h4>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                    </li>
                    <li>
                        <div class="circle"></div>
                        <h4>技能细分二</h4>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                    </li>
                    <li>
                        <div class="circle"></div>
                        <h4>技能细分三</h4>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                    </li>
                    <li>
                        <div class="circle"></div>
                        <h4>技能细分四</h4>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                    </li>
                    <li>
                        <div class="circle"></div>
                        <h4>技能细分五</h4>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                    </li>
                </ul>
                <h3>技能总项二</h3>
                <ul class="exp">
                    <li>
                        <div class="circle"></div>
                        <h4>技能细分一</h4>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                    </li>
                    <li>
                        <div class="circle"></div>
                        <h4>技能细分二</h4>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                    </li>
                </ul>
                <h3>技能总项三</h3>
                <ul class="exp">
                    <li>
                        <div class="circle"></div>
                        <h4>&nbsp;</h4>
                        <p>详细描述、详细描述、详细描述、详细描述、详细描述</p>
                    </li>
                </ul>
            </li>
            <li>
                <dt><i class="icon-bookmark"></i>Experience&nbsp;-&nbsp;项目与工作经验</dt>
                <h3>你参与的项目</h3>
                <ul class="exp">
                    <li>
                        <div class="circle"></div>
                        <h4>项目描述</h4>
                        <p>${intentInfoList.get(0).position}</p>
                        <img src="img/grwz.jpg">
                    </li>
                </ul>
                <h3>个人项目</h3>
                <ul class="exp">
                    <li>
                        <div class="circle"></div>
                        <h4>
                            项目一
                            <a href="https://github.com/AiotCEO" target="_blank"><i class="icon-link"></i>&nbsp;源代码&nbsp;</a>
                            <a href="https://github.com/AiotCEO" target="_blank"><i class="icon-link"></i>&nbsp;&nbsp;演&nbsp;&nbsp;示&nbsp;&nbsp;</a>
                        </h4>
                        <p>你的工作</p>
                        <img src="img/grwz.jpg">
                    </li>
                    <li>
                        <div class="circle"></div>
                        <h4>
                            项目二
                            <a href="https://github.com/AiotCEO" target="_blank"><i class="icon-link"></i>&nbsp;源代码&nbsp;</a>
                            <a href="https://github.com/AiotCEO" target="_blank"><i class="icon-link"></i>&nbsp;&nbsp;演&nbsp;&nbsp;示&nbsp;&nbsp;</a>
                        </h4>
                        <p>你的工作</p>
                        <img src="img/grwz.jpg">
                    </li>
                    <li>
                        <div class="circle"></div>
                        <h4>
                            项目三
                            <a href="https://github.com/AiotCEO" target="_blank"><i class="icon-link"></i>&nbsp;源代码&nbsp;</a>
                            <a href="https://github.com/AiotCEO" target="_blank"><i class="icon-link"></i>&nbsp;&nbsp;演&nbsp;&nbsp;示&nbsp;&nbsp;</a>
                        </h4>
                        <p>你的工作</p>
                        <img src="img/grwz.jpg">
                    </li>
                </ul>
            </li>
        </ul>
        <p>&nbsp;</p>
    </div>
</div>
<footer>
    <p>Created by XXXX - 2016 - 更新于 时间XXXXXX</p>
</footer>
</body>
</html>
