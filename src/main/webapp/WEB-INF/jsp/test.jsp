<%--
  Created by IntelliJ IDEA.
  User: sugar
  Date: 2018/7/13
  Time: 14:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>




<!DOCTYPE html>
<html lang="zh-Cn">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <!-- HTTP 1.1 -->
    <meta http-equiv="pragma" content="no-cache" />
    <!-- HTTP 1.0 -->
    <meta name="description" content="领贤免费在线简历制作工具,覆盖多行业多专业的简历范文和海量的小提示,让简历制作变得很轻松,可以随时更换简历模板,让在线简历制作效果更加直观。">
    <meta name="Keywords" content="免费在线简历制作,简历制作,简历范文,简历模板,在线简历制作">
    <title>免费在线简历制作|简历制作|简历范文|在线简历制作-领贤简历</title>
    <link rel="stylesheet" href="/static/css/muban/jquery-ui.css">

    <link rel="stylesheet" href="/static/css/muban/bootstrap.min.css">
    <link rel="stylesheet" href="/static/css/muban/lxcv-city.css">
    <link rel="stylesheet" href="/static/css/muban/PageBaseStyle.css">
    <link rel="stylesheet" href="/static/css/muban/icon-font.css">
    <link rel="stylesheet" href="/static/css/muban/cropper.min.css">
    <link rel="stylesheet" href="/static/css/muban/font-awesome.min.css">
    <link rel="stylesheet" href="/static/css/muban/froala_editor.min.css">
    <link rel="stylesheet" href="/static/css/muban/froala_style.min.css">
    <link rel="stylesheet" href="/static/css/muban/pageproducter3.css">
    <link rel="stylesheet" href="/static/css/muban/tpl1_0.css" id="tplNum">
</head>
<body>
<form method="post" action="./resumetool.aspx" id="rt" target="_blank">
    <div class="aspNetHidden">
        <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
        <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
        <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="3mGFRm/G40xI0lSvrO9KkWsgsOPACX3WLeJrRiwSfHrFBWih8zB925ExHuYgtzFXPVJ836AAM+d8ZAm5YkBizl+s9tKBjbBWmScH7469H1TlCtG+kix7NrAKHKx7KK7H" />
    </div>

    <script type="text/javascript">
        //<![CDATA[
        var theForm = document.forms['rt'];
        if (!theForm) {
            theForm = document.rt;
        }
        function __doPostBack(eventTarget, eventArgument) {
            if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
                theForm.__EVENTTARGET.value = eventTarget;
                theForm.__EVENTARGUMENT.value = eventArgument;
                theForm.submit();
            }
        }
        //]]>
    </script>


    <div class="aspNetHidden">

        <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="6089C29B" />
        <input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="F8QiID7lLSe8fjipUTl56BL2YwUKTV0GD/v1t8isoaUcUluZ9cuuFDm810QNWbO6plsM+Kwgx84w3aT2d3eASuGvgdX1WnRIcPwlW1bV5ELJ3BGECB7rAwn96/fcjsPm8O7r7urUDE4dzTXsFTcqqAU/8Vu2vMM1Zgcnp4/tOdQ=" />
    </div>
    <div class="lxcv-box">
        <!--头部导航-->
        <div class="header">
            <div class="header-fixed">
                <div class="header-box clearfix">
                    <div class="header-logo">
                        <%--这一句进行扩展，放入自己的logo--%>
                        <%--<a href="http://www.capabcv.com/"><img src="../Images/LOGO.png" alt="领贤在线简历_在线简历"></a>--%>
                    </div>
                    <div class="header-nav fl">
                        <ul class="head-nav-l fl">
                            <li class="tpl_change"><i class="icon-mobanqiehuan_1"></i>模板切换
                                <div class="tpl_change_cue">
                                    <span class="cue_top"></span>
                                    <span class="cue_bot">×</span>
                                    <p>点击<font style="color: #ff7561">“模板切换”</font>，可以选择喜欢的简历模板。</p>
                                </div>
                            </li>
                            <li class="tpl_style"><i class="icon-fenggeshezhi_2"></i>主题颜色
                                <div class="color_change_cue">
                                    <span class="cue_top"></span>
                                    <span class="cue_bot">×</span>
                                    <p>点击<font style="color: #ff7561">“主题颜色”</font>，可以选择喜欢的颜色，调整字体大小和模块距离。</p>
                                </div>
                                <div class="tpl_style_edit br4">
                                    <p>颜色选择</p><p type="button" id="style_close">×</p>
                                    <ul class="clearfix color_list">
                                        <li style="background-color: #333333;"></li>
                                        <li style="background-color: #414141;"></li>
                                        <li style="background-color: #999999;"></li>
                                        <li style="background-color: #5e412e;"></li>
                                        <li style="background-color: #8c6d62;"></li>
                                        <li style="background-color: #a29176;"></li>
                                        <li style="background-color: #e69138;"></li>
                                        <li style="background-color: #f7a724;"></li>
                                        <li style="background-color: #f1c233;"></li>
                                        <li style="background-color: #264765;"></li>
                                        <li style="background-color: #1E87E4;"></li>
                                        <li style="background-color: #029AE4;"></li>
                                        <li style="background-color: #00ABC0;"></li>
                                        <li style="background-color: #77A5AF;"></li>
                                        <li style="background-color: #3B8579;"></li>
                                        <li style="background-color: #378D3B;"></li>
                                        <li style="background-color: #669E37;"></li>
                                        <li style="background-color: #93C47D;"></li>
                                        <li style="background-color: #674EA7;"></li>
                                        <li style="background-color: #7D56C0;"></li>
                                        <li style="background-color: #C37BA1;"></li>
                                        <li style="background-color: #E53835;"></li>
                                        <li style="background-color: #EB3E79;"></li>
                                        <li style="background-color: #FF7171;"></li>
                                    </ul>
                                    <p style="margin-top: 5px;">
                                        <label>字体大小:&nbsp;</label><input type="text" id="fonts_amount" style="border:none; color:#f6931f; font-weight:bold;width: 16px"><span style="color:#f6931f; font-weight:bold">px</span>
                                    </p>
                                    <div id="fonts_slider" style="margin-top: 5px;"></div>
                                    <p style="margin-top: 15px;">
                                        <label>模块距离:&nbsp;</label><input type="text" id="lineh_amount" style="border:none; color:#f6931f; font-weight:bold;width: 20px">
                                    </p>
                                    <div id="lineh_slider" style="margin-top: 5px;"></div>
                                </div>
                            </li>
                            <li class="tpl_module" style="position: relative"><i class="icon-mokuaiguanli_2"></i>模块管理
                                <div class="md_change_cue">
                                    <span class="cue_top"></span>
                                    <span class="cue_bot">×</span>
                                    <p>点击<font style="color: #ff7561">“模块管理”</font>，可以添加或删除简历模块。</p>
                                </div></li>
                            <li class="my_cv"><i class="icon-wodejianli_2"></i>我的简历</li>
                            <li class="cv_case"><i class="icon-jianlifanwen_2"></i><a href="http://www.capabcv.com/resumecase">简历范文</a></li>
                        </ul>
                        <ul class="head-nav-r fr">
                            <li class="cv_edit"><i class="icon-shezhi"></i>设置</li>
                            <li class="cv_storage"><i class="icon-baocun_2"></i>保存</li>
                            <li class="cv_preview"><i class="icon-yulan_2"></i>预览</li>
                            <li class="cv_download"><i class="icon-xiazai_2"></i>下载</li>
                            <!--<li class="cv_preview"><i class="icon-yulan_2"></i><a id="LinkButton_preview" href="javascript:__doPostBack(&#39;LinkButton_preview&#39;,&#39;&#39;)" style="color:White;">预览</a></li>-->
                            <!--<li class="cv_download"><i class="icon-xiazai_2"></i><a id="LinkButton_download" href="javascript:__doPostBack(&#39;LinkButton_download&#39;,&#39;&#39;)" style="color:White;">下载</a></li>-->
                        </ul>
                    </div>
                    <div class="header-user fr">
                        <div class="operate-btn">
                            <img src="../Images/ResumeV3/onlineCv/defaultphoto.png" class="login-photo">
                            <div class="user-log-sign">
                                <a href="http://www.capabcv.com/usercentermanage/UserInfoEdit.html">个人中心</a>
                                <a href="http://www.capabcv.com/resumev2/resumetool.aspx">简历中心</a>
                                <a id="exitLogon">退出登录</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="preview-head">
                    <div class="revert-nav fl">
                        <i class="icon-icon_bianjiqi_13"></i> 返回编辑
                    </div>
                    <ul class="share-dl fr">
                        <li id="share"><i class="icon-fenxiang_1svg"></i> &nbsp;分享
                            <!--分享-->
                            <div class="export">
                                <div class="export_head">
                                    <div class="export_title">
                                        <span class="fl">链接生成成功，复制链接分享给好友吧</span><span title="关闭">×</span>
                                    </div>
                                </div>
                                <div class="export_btn">
                                    <input type="text" /><span class="export_site export_copy copy_link1">复制链接</span>
                                </div>
                                <div class="mobileShare">
                                    <div class="mobileShareEWM">
                                        <img src="../Images/ResumeV2/editPage/" id="resCode_img" alt="未成功" />
                                    </div>
                                    <div class="mobileShareText">
                                        <p class="mobileShareTextCon">使用手机“扫一扫”扫描左侧二维码，分享给您的朋友，或分享到空间、朋友圈、微博等地方！</p>
                                    </div>
                                </div>
                                <div class="panyTriangle">
                                    <i class="panyTriangle-Border"></i>
                                    <i class="panyTriangle-uBorder"></i>
                                </div>
                            </div>
                        </li>
                        <li class="cv_download"><i class="icon-xiazai_2"></i><span>下载</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <!--保存提示信息-->
        <div class="hold-cue">
            <div id="hold_cue_txt">保存成功</div>
        </div>
        <!--模板主体内容-->
        <div class="lxcv-container clearfix" style="font-size: 14px;">
            <div class="lxcvL-style">
                <!--头部-->
                <div class="lxcv-head clearfix">
                    <div class="lxcv-photo" id="cv_photo" style="height: 162px;">
                        <div class="photo-edit  icon-shezhi ac" title="设置"></div>
                        <div class="photo-selector" style="display: none;">
                            <span class="photo_title">头像风格</span>
                            <!--<span class="photo_option"></span>-->
                            <span class="photo_option check"></span>
                            <span class="photo_option"></span>
                        </div>
                        <div class="photo-cont" data-size="aquare">
                            <a class="photo-hover"></a>
                            <div class="photo-pre">
                                <img src="../Images/ResumeV3/onlineCv/defaultphoto.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="lxcv-info">
                        <div class="lxcv-toolbar clearfix">
                            <span class="edit icon-bianji ac" title="编辑"></span>
                            <span class="handel icon-yidong ac" title="移动"></span>
                            <span class="add icon-tianjia ac" title="添加"></span>
                            <span class="delete icon-shanchu ac" title="删除"></span>
                        </div>
                        <div class="info-cont">
                            <div id="lxcvName">你的名字</div>  <%--这里的ID  lxcvName会在之后进行改变内容--%>
                            <div id="lxcv_inShort"></div>
                            <div class="detail-info">
                                <div class="detail-cont">
                                    <div id="sRSex" class="info-list" style="dispaly: none;">
                                        <i class="icon-i icon-xingbie01"></i>
                                        <span class="info-style">男</span>
                                        <span class="lxcv-info-empty icon-jian_2" title="删除"></span>
                                    </div>
                                    <div id="sRBrith" class="info-list" style="dispaly: none;">
                                        <i class="icon-i icon-shengri01"></i>
                                        <span class="info-style">18岁</span>
                                        <span class="lxcv-info-empty icon-jian_2" title="删除"></span>
                                    </div>
                                    <div id="sNationality" class="info-list" style="dispaly: none;">
                                        <i class="icon-i icon-minzu"></i>
                                        <span class="info-style">汉族</span>
                                        <span class="lxcv-info-empty icon-jian_2" title="删除"></span>
                                    </div>
                                    <div id="sHighestEdu" class="info-list" style="dispaly: none;">
                                        <i class="icon-i icon-xueli01" ></i>
                                        <span class="info-style">硕士</span>
                                        <span class="lxcv-info-empty icon-jian_2" title="删除"></span>
                                    </div>
                                    <div id="sMarryed" class="info-list" style="dispaly: none;">
                                        <i class="icon-i icon-hunyin01" ></i>
                                        <span class="info-style">未婚</span>
                                        <span class="lxcv-info-empty icon-jian_2" title="删除"></span>
                                    </div>
                                    <div id="sRParty" class="info-list" style="dispaly: none;">
                                        <i class="icon-i icon-zhengzhimianmao01"></i>
                                        <span class="info-style">共产党员</span>
                                        <span class="lxcv-info-empty icon-jian_2" title="删除"></span>
                                    </div>
                                    <div id="sInPosition" class="info-list" style="dispaly: none;">
                                        <i class="icon-i icon-suozaichengshi01"></i>
                                        <span class="info-style">浙江杭州</span>
                                        <span class="lxcv-info-empty icon-jian_2" title="删除"></span>
                                    </div>
                                    <div id="sWorkYear" class="info-list" style="dispaly: none;">
                                        <i class="icon-i icon-gongzuonianxian01"></i>
                                        <span class="info-style">2年工作经验</span>
                                        <span class="lxcv-info-empty icon-jian_2" title="删除"></span>
                                    </div>
                                    <div id="sRTel" class="info-list" style="dispaly: none;">
                                        <i class="icon-i icon-dianhua01"></i>
                                        <span class="info-style"></span>
                                        <span class="lxcv-info-empty icon-jian_2" title="删除"></span>
                                    </div>
                                    <div id="sREmail" class="info-list" style="dispaly: none;">
                                        <i class="icon-i icon-youxiang01"></i>
                                        <span class="info-style">363552292@qq.com</span>
                                        <span class="lxcv-info-empty icon-jian_2" title="删除"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--求职意向-->
                <div class="inten" id="cv_inten">
                    <div class="inten-inner">
                        <div class="lxcv-toolbar clearfix">
                            <span class="edit icon-bianji ac" title="编辑"></span>
                            <span class="add icon-tianjia ac" title="添加"></span>
                            <span class="yincang icon-yinsi_1 ac" title="隐藏"></span>
                        </div>
                        <div class="module-head">
                            <a class="lxcv-icon icon-qiuzhiyixiang_1 ac"></a><span class="module-haed-txt">求职意向</span>
                        </div>
                        <ul class="inten-cont">
                            <li id="sPosition">
                                <i class="icon-yixianggangwei_1"></i>
                                <span>平面设计师</span>
                                <a href="javascript:;" class="lxcv-info-empty icon-jian_2" title="删除"></a>
                            </li>
                            <li id="sJobType">
                                <i class="icon-gongzuoleixing_1"></i>
                                <span>全职</span>
                                <a href="javascript:;" class="lxcv-info-empty icon-jian_2" title="删除"></a>
                            </li>
                            <li id="sWorkPosition">
                                <i class="icon-yixiangchengshi_1"></i>
                                <span>天津</span>
                                <a href="javascript:;" class="lxcv-info-empty icon-jian_2" title="删除"></a>
                            </li>
                            <li id="sSalary">
                                <i class="icon-qiwangxinzi_1"></i>
                                <span>薪资面议</span>
                                <a href="javascript:;" class="lxcv-info-empty icon-jian_2" title="删除"></a>
                            </li>
                            <li id="sEntryDate">
                                <i class="icon-ruzhishijian_1   "></i>
                                <span>一周内到岗</span>
                                <a href="javascript:;" class="lxcv-info-empty icon-jian_2" title="删除"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--主模块-->
            <div class="lxcv-modules sortable">
                <!--教育模块-->
                <!--<div class="timeItem lxcv-move" id="cv_edu">-->
                <!--<div class="lxcv-toolbar clearfix">-->
                <!--<span class="handel icon-yidong ac" title="移动"></span>-->
                <!--<span class="add icon-tianjia ac" title="添加"></span>-->
                <!--<span class="yincang icon-yinsi_1 ac" title="隐藏"></span>-->
                <!--</div>-->
                <!--<div class="timeItem-inner">-->
                <!--<div class="module-head">-->
                <!--<a class="lxcv-icon icon-jiaoyu_1 ac"></a><span class="module-haed-txt">教育背景</span>-->
                <!--</div>-->
                <!--<div class="timeItem-cont">-->
                <!--<div class="list-box">-->

                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--&lt;!&ndash;兴趣爱好&ndash;&gt;-->
                <!--<div class="moduleItem lxcv-move" id="cv_hobby">-->
                <!--<div class="lxcv-toolbar clearfix">-->
                <!--<span class="edit icon-bianji ac" title="编辑"></span>-->
                <!--<span class="handel icon-yidong ac" title="移动"></span>-->
                <!--<span class="add icon-tianjia ac" title="添加"></span>-->
                <!--<span class="delete icon-shanchu ac" title="删除"></span>-->
                <!--</div>-->
                <!--<div class="moduleItem-inner">-->
                <!--<div class="module-head">-->
                <!--<a class="lxcv-icon icon-rongyu ac"></a><span class="module-haed-txt">兴趣爱好</span>-->
                <!--</div>-->
                <!--<div class="moduleItem-cont">-->
                <!--<div class="list-box">-->
                <!--<div class="list-cont">-->
                <!--<div class="petty-toolbar">-->
                <!--<span class="petty-edit icon-bianji ac" title="编辑"></span>-->
                <!--&lt;!&ndash;<span class="handel icon-yidong ac" title="移动"></span>&ndash;&gt;-->
                <!--&lt;!&ndash;<span class="add icon-tianjia ac" title="添加"></span>&ndash;&gt;-->
                <!--<span class="petty-delete icon-shanchu ac" title="删除"></span>-->
                <!--</div>-->
                <!--<div class="module-bewrite">-->
                <!--<ol>-->
                <!--<li>负责“比德知识平台”和“知识邦app”的功能分析、架构、编码、测试工作。</li>-->
                <!--</ol>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
            </div>
            <div class="cv-cover"></div>
        </div>
        <!--自定义-->
        <div class="addDefind">
            <div id="addCustom">
                <p class="icon-jia_3"></p>
                <span>添加自定义模块</span>
            </div>
        </div>
        <!--没有简历的时候提示信息-->
        <div class="cv-null">
            <img src="../Images/ResumeV3/onlineCv/cvNull.png" alt="">
            <p>您还没有创建简历哦</p>
            <div class="btn-confirm">立即创建</div>
        </div>
        <!--提示弹框-->
        <div class="modal fade" data-backdrop="static" data-keyboard="false" id="cueModal" tabindex="-1" role="dialog"  aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="width: inherit">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="cueModalLabel">模态框（Modal）标题</h4>
                    </div>
                    <div class="modal-body clearfix"></div>
                    <div class="modal-footer ac" style="border: none;">
                        <button style="display: inline-block" type="button" class="btn-cancel" data-dismiss="modal">关闭</button>
                        <button style="display: inline-block" type="button" class="btn-confirm">提交更改</button>
                    </div>
                </div>
            </div>
        </div>
        <!--编辑个人信息弹框-->
        <div class="modal fade" data-backdrop="static" data-keyboard="false" id="infoModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-title" id="infoModalLabel">个人信息</span>
                    </div>
                    <div class="modal-body clearfix">
                        <div class="default-msg clearfix">
                            <div class="modal-item nameItem">
                                <p>姓名</p>
                                <div class="item-cont">
                                    <input id="infoName" type="text" placeholder="输入姓名">
                                </div>
                            </div>
                            <div class="modal-item brithItem">
                                <p>出生年月</p>
                                <div class="item-cont">
                                    <div class="sSelect fl">
                                        <input type="text" name="birthYear" placeholder="年份" readonly="readonly" id="infoYear" class="caret">
                                        <span class="sanjiao"></span>
                                        <ul id="yearList" class="lx-scrollbar"></ul>
                                    </div>
                                    <div class="sSelect fr">
                                        <input type="text" name="birthMonth" placeholder="月份" readonly="readonly" id="infoMonth">
                                        <span class="sanjiao"></span>
                                        <ul id="monthList" class="lx-scrollbar">
                                            <li>01</li>
                                            <li>02</li>
                                            <li>03</li>
                                            <li>04</li>
                                            <li>05</li>
                                            <li>06</li>
                                            <li>07</li>
                                            <li>08</li>
                                            <li>09</li>
                                            <li>10</li>
                                            <li>11</li>
                                            <li>12</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-item sexItem">
                                <p>性别</p>
                                <div class="item-cont">
                                    <div class="sSelect">
                                        <input id="ifonSex" type="text" maxlength="10" placeholder="选择性别" readonly="readonly">
                                        <span class="sanjiao"></span>
                                        <ul id="sexList">
                                            <li>男</li>
                                            <li>女</li>
                                            <li>不填写</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-item eduItem">
                                <p>最高学历</p>
                                <div class="item-cont">
                                    <div class="sSelect">
                                        <input id="education" type="text" placeholder="选择最高学历" readonly="readonly">
                                        <span class="sanjiao"></span>
                                        <ul id="educationList" class="lx-scrollbar">
                                            <li>博士</li>
                                            <li>硕士</li>
                                            <li>本科</li>
                                            <li>大专</li>
                                            <li>中专</li>
                                            <li>高中</li>
                                            <li>初中及以下</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-item cityItem">
                                <p>所在城市</p>
                                <div class="item-cont cityBox">
                                    <input id="cityChoice" class="sg-area-result" type="text" placeholder="选择城市" readonly="readonly">
                                    <span class="sanjiao"></span>
                                </div>
                            </div>
                            <div class="modal-item workItem">
                                <p>工作经验</p>
                                <div class="item-cont">
                                    <div class="sSelect">
                                        <input id="jobYear" type="text" placeholder="选择工作年限" readonly="readonly">
                                        <span class="sanjiao"></span>
                                        <ul id="jobYearList" class="lx-scrollbar">
                                            <li>无工作经验</li>
                                            <li>应届生</li>
                                            <li>1年工作经验</li>
                                            <li>2年工作经验</li>
                                            <li>3年工作经验</li>
                                            <li>4年工作经验</li>
                                            <li>5年以上工作经验</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-item phoneItem">
                                <p>手机号码</p>
                                <div class="item-cont">
                                    <input id="infoPhone" type="text" maxlength="11" placeholder="输入手机号码">
                                </div>
                                <div class="phoneCue">手机号码格式错误，请重新输入！</div>
                            </div>
                            <div class="modal-item emailItem">
                                <p>邮箱地址</p>
                                <div class="item-cont">
                                    <input id="infoEmail" type="text" placeholder="输入邮箱">
                                </div>
                                <div class="mailCue">邮箱格式错误，请重新输入！</div>
                            </div>
                            <!--<div class="modal-item defindItem">-->
                            <!--<i class="icon-tianjia ac"></i><span class="openDefind" id="addDefind">自定义字段</span>-->
                            <!--<div class="defind-add">-->
                            <!--<input type="text" placeholder="字段名称" class="defindName" maxlength="5">-->
                            <!--<input type="text" class="defindCont" placeholder="字段内容不超过20个字" maxlength="20" >-->
                            <!--<s title="删除" class="icon-jian_2"></s>-->
                            <!--</div>-->
                            <!--</div>-->
                        </div>
                        <div class="openMore">
                            <p id="openMore">展开选填项  <span class="sanjiao"></span> </p>
                        </div>
                        <div class="moreMsg">
                            <span class="tip">以下内容不需要全部填写，可选择重要内容展示</span>
                            <div class="moreMsg-inner clearfix">
                                <div class="modal-item nationItem">
                                    <p>民族</p>
                                    <div class="item-cont">
                                        <input id="infoNation" type="text" placeholder="输入民族">
                                    </div>
                                </div>
                                <div class="modal-item statusItem">
                                    <p>政治面貌</p>
                                    <div class="item-cont">
                                        <div class="sSelect">
                                            <input id="ifonStatus" type="text" placeholder="选择政治面貌" readonly="readonly">
                                            <span class="sanjiao"></span>
                                            <ul id="statusList" class="lx-scrollbar">
                                                <li>中共党员</li>
                                                <li>中共预备党员</li>
                                                <li>共青团员</li>
                                                <li>民主党派人士</li>
                                                <li>无党派民主人士</li>
                                                <li>普通公民</li>
                                                <li>不填写</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-item marryItem">
                                    <p>婚姻状况</p>
                                    <div class="item-cont">
                                        <div class="sSelect">
                                            <input id="infoMarry" type="text" placeholder="选择婚姻状况" readonly="readonly">
                                            <span class="sanjiao"></span>
                                            <ul id="marryList">
                                                <li>已婚</li>
                                                <li>未婚</li>
                                                <li>不填写</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-item oneItem">
                                    <p>一句话描述自己</p>
                                    <div class="item-cont">
                                        <input id="infoOne" type="text" maxlength="50" placeholder="例如：我相信世界属于那些用行动去追求梦想的人">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancel" data-dismiss="modal">取消</button>
                        <button type="button" class="btn-confirm" id="infoOk">确认</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
        <!--上传头像弹框-->
        <div class="modal fade" data-backdrop="static" data-keyboard="false" id="photoModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-title" id="photoModalLabel">裁剪图片</span>
                    </div>
                    <div class="photo-cue">调整头像尺寸和位置</div>
                    <div id="imgBox">
                        <img src="" alt="">
                    </div>
                    <p id="againUpLoad">重新上传</p>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancel" data-dismiss="modal">取消</button>
                        <button type="button" class="btn-confirm" id="photoOk">确认</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
        <!--求职意向-->
        <div class="modal fade" data-backdrop="static" data-keyboard="false" id="intenModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-title" id="intenModalLabel">求职意向</span>
                    </div>
                    <div class="modal-body clearfix">
                        <div class="modal-item jobFunctionItem">
                            <p>意向岗位</p>
                            <div class="item-cont">
                                <input id="jobFunctionEdit" type="text" maxlength="12" placeholder="输入求职岗位">
                            </div>
                        </div>
                        <div class="modal-item worktypeItem">
                            <p>职业类型</p>
                            <div class="item-cont">
                                <div class="sSelect">
                                    <input id="ifonWorkType" type="text" placeholder="选择职业类型" readonly="readonly">
                                    <span class="sanjiao"></span>
                                    <ul id="ifonWorkTypeList">
                                        <li>全职</li>
                                        <li>兼职</li>
                                        <li>实习</li>
                                        <li>不填写</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="modal-item intenCityItem">
                            <p>意向城市</p>
                            <div class="item-cont cityBox">
                                <input id="intenCity" class="sg-area-result" type="text" placeholder="选择城市" readonly="readonly">
                                <span class="sanjiao"></span>
                            </div>
                        </div>
                        <div class="modal-item entryItem">
                            <p>入职时间</p>
                            <div class="item-cont">
                                <div class="sSelect">
                                    <input id="entryTime" type="text" placeholder="选择入职时间" readonly="readonly">
                                    <span class="sanjiao"></span>
                                    <ul id="entryTimeList">
                                        <li>目前在职</li>
                                        <li>随时到岗</li>
                                        <li>一周内到岗</li>
                                        <li>一月内到岗</li>
                                        <li>到岗时间另议</li>
                                        <li>不填写</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="modal-item moneyItem">
                            <p>薪资要求</p>
                            <div class="item-cont monthly">
                                <div class="sSelect fl">
                                    <input type="text" placeholder="输入数字" maxlength=4 id="jobMinSalary">
                                    <span>K至</span>
                                    <input type="text" placeholder="输入数字" maxlength=4 id="jobMaxSalary">
                                    <span class="salary">K</span>
                                </div>
                            </div>
                            <div class="item-cont daily">
                                <div class="sSelect fl">
                                    <!--onkeyup="value=value.replace(/[^\d]/g,'')"-->
                                    <input type="text" placeholder="输入数字" id="perDiem" maxlength=4>
                                    <span>元/日</span>
                                </div>
                            </div>
                        </div>

                        <div class="modal-item salaryItem">
                            <div class="item-cont negotiable" >
                                <input type="checkbox" name="negotiable"><span>薪资面议</span>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancel" data-dismiss="modal">取消</button>
                        <button type="button" class="btn-confirm" id="intenOk">确认</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
        <!--教育编辑弹框-->
        <div class="modal fade" data-backdrop="static" data-keyboard="false" id="contEditModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content clearfix">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-title" id="contEditModalLabel">教育背景</span><i class="icon-bianji_1" id="modalTitleEdit">
                        <div class="editTitleCue">
                            <span class="bot"></span>
                            这里可以修改模块名称哦
                            <span class="editTitleCue_close">×</span>
                        </div>
                    </i>
                    </div>
                    <div class="media-body clearfix">
                        <input type="hidden" id="modal_type">
                        <div class="cont-list fl">
                            <ul id="taskList"></ul>
                            <p class="add-minor"><i class="icon-tianjia"></i>添加子模块</p>
                        </div>
                        <div class="cont-edit fr">
                            <div class="clearfix modal-box">
                                <div class="modal-item item_one">
                                    <p>毕业院校</p>
                                    <div class="item-cont">
                                        <input id="current_one" type="text" placeholder="最多输入20字" maxlength=20>
                                    </div>
                                </div>
                                <div class="modal-item item_two">
                                    <p>所在学院</p>
                                    <div class="item-cont">
                                        <input id="current_two" type="text" placeholder="最多输入20字" maxlength=20>
                                    </div>
                                </div>
                                <div class="modal-item item_three">
                                    <p>专业名称</p>
                                    <div class="item-cont">
                                        <input id="current_three" type="text" placeholder="最多输入20字" maxlength=20>
                                    </div>
                                </div>
                                <div class="modal-item item_four">
                                    <p>学历</p>
                                    <div class="item-cont">
                                        <input id="current_four" type="text" placeholder="最多输入6字" maxlength=6>
                                    </div>
                                </div>
                                <div class="modal-item">
                                    <p>开始日期</p>
                                    <div class="item-cont clearfix">
                                        <div class="sSelect fl">
                                            <input type="text" readonly="readonly" id="startYear" placeholder="年份">
                                            <span class="sanjiao"></span>
                                            <ul id="startYearList" class="lx-scrollbar"></ul>
                                        </div>
                                        <div class="sSelect fr">
                                            <input type="text" readonly="readonly" id="startMonth" placeholder="月份">
                                            <span class="sanjiao"></span>
                                            <ul id="startMonthList" class="lx-scrollbar">
                                                <li>01</li>
                                                <li>02</li>
                                                <li>03</li>
                                                <li>04</li>
                                                <li>05</li>
                                                <li>06</li>
                                                <li>07</li>
                                                <li>08</li>
                                                <li>09</li>
                                                <li>10</li>
                                                <li>11</li>
                                                <li>12</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p class="sData-cue">请选择正确日期</p>
                                </div>
                                <div class="modal-item">
                                    <p>结束日期</p>
                                    <div class="item-cont">
                                        <div class="sSelect fl">
                                            <input type="text" readonly="readonly" id="endYear" placeholder="年份">
                                            <span class="sanjiao"></span>
                                            <ul id="endYearList" class="lx-scrollbar"></ul>
                                        </div>
                                        <div class="sSelect fr">
                                            <input type="text" readonly="readonly" id="endMonth" placeholder="月份">
                                            <span class="sanjiao"></span>
                                            <ul id="endMonthList" class="lx-scrollbar">
                                                <li>01</li>
                                                <li>02</li>
                                                <li>03</li>
                                                <li>04</li>
                                                <li>05</li>
                                                <li>06</li>
                                                <li>07</li>
                                                <li>08</li>
                                                <li>09</li>
                                                <li>10</li>
                                                <li>11</li>
                                                <li>12</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p class="eData-cue">请选择正确日期</p>
                                </div>
                            </div>
                            <div class="editor-box">
                                <div class="tips_title ac"><span class="icon-tianjia"></span>小贴士
                                    <div class="editTitleCue" >
                                        <span class="bot"></span>
                                        不知道怎么写？点这里..
                                        <span class="editTitleCue_close">×</span>
                                    </div>
                                </div>
                                <div class="tips-box clearfix">
                                    <div class="tips-header clearfix">
                                        <div class="tips-industry fl">
                                            <input type="text" placeholder="选择所属行业" readonly="readonly">
                                            <ul class="industry_list al"></ul>
                                            <span class="sanjiao"></span>
                                        </div>
                                        <div class="tips-vocation fl">
                                            <input type="text" placeholder="选择职位" readonly="readonly">
                                            <ul class="vocation_list al"></ul>
                                            <span class="sanjiao"></span>
                                        </div>
                                        <div class="tips-search fl">
                                            <input type="text" maxlength=10 placeholder="搜索相关">
                                            <span class="icon-sousuo_3"></span>
                                        </div>
                                        <button type="button" class="close tips_close">&times;</button>
                                    </div>
                                    <ul id="tips_list" class="lx-scrollbar">

                                    </ul>
                                </div>
                                <div id="editor">
                                    <h1>这里是写内容的......</h1>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn-cancel" data-dismiss="modal">取消</button>
                                <button type="button" class="btn-confirm" id="contEditOk">确认</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <input type="file" id="headPhoto" class="hidden">
    <input name="HiddenRId" type="hidden" id="HiddenRId" />
</form>
<script type=text/javascript src="/static/js/muban/jquery-2.2.3.min.js"></script>
<script type=text/javascript src="/static/js/muban/bootstrap.min.js"></script>
<script type=text/javascript src="/static/js/muban/jquery-ui.js"></script>
<script type=text/javascript src="/static/js/muban/lxcv-city.js"></script>
<script type=text/javascript src="/static/js/muban/cropper.min.js"></script>
<script type=text/javascript src="/static/js/muban/froala_editor.min.js"></script>
<script type=text/javascript src="/static/js/muban/languages/zh_cn.js"></script>
<script type=text/javascript src="/static/js/muban/plugins/align.min.js"></script>
<script type=text/javascript src="/static/js/muban/plugins/lists.min.js"></script>
<script type=text/javascript src="/static/js/muban/PageBase.js"></script>
<script type=text/javascript src="/static/js/muban/pageproducter3.js"></script>
</body>
</html>