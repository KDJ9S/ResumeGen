
var lxcvEdit = {
    globalObj: {    //----鍏ㄥ眬鍙傛暟璁剧疆---
        _cvNid: null,
        _outerToolbar: null,
        _toolbar: null,
        _fontSize: 14,
        _linehAmount: 0.8,
        _cvSecret: null,
        _cvTitle: null,
        _tplNum: null,
        _upDateTime: null,
        _nUserId: '',
        _sRModule : [],
        _moduleTitle: [],
        _diyIsShow: [],
        _sPayit: '',
        _isPaymentMake: false,
    },
    init: function () {  //----鍒濆鍖�----
        lxcvEdit.brower_check();
        lxcvEdit.plugInInit();
        lxcvEdit.event();
        lxcvEdit.getCV(lxcvEdit.globalObj._cvNid);
        lxcvEdit.photoUpLode();
        lxcvEdit.isPaymentMake();
    },
    event: function () {  //----鍏ㄥ眬浜嬩欢
        $(".tpl_change_cue,.color_change_cue, .md_change_cue").unbind();
        $(".tpl_change_cue .cue_bot").click(function (e) {
            e.stopPropagation();
            $(".color_change_cue").show();
            $(".tpl_change_cue").hide();
        })
        $(".color_change_cue .cue_bot").click(function (e) {
            e.stopPropagation();
            $(".color_change_cue").hide();
            $(".md_change_cue").show();
        })
        $(".md_change_cue .cue_bot").click(function (e) {
            e.stopPropagation();
            $(".md_change_cue").hide();
        })
        $(".lxcv-photo").mouseleave(function () {
            $(".photo-selector").hide()
        });
        $(".lxcv-head .photo-selector .photo_option").click(function () {
            var i = $(this).index();
            /*
            if( i== 1) {
                $(this).addClass("check").siblings().removeClass("check");
                $(".lxcv-head .photo-selector").hide();
                $("#cv_photo").css("height","162px");
                $(".photo-cont").attr('data-size','round');
                lxcvEdit.photoEdit(lxcvEdit.globalObj._cvNid,'1');
            } else*/
            if (i == 1) {
                $(this).addClass("check").siblings().removeClass("check");
                $(".lxcv-head .photo-selector").hide();
                $("#cv_photo").css("height","162px");
                $(".photo-cont").attr('data-size','square');
                lxcvEdit.photoEdit(lxcvEdit.globalObj._cvNid,'2');
            } else if(i == 2) {
                $(this).addClass("check").siblings().removeClass("check");
                $(".lxcv-head .photo-selector").hide();
                $("#cv_photo").css("height","190px");
                $(".photo-cont").attr('data-size','rectangle');
                lxcvEdit.photoEdit(lxcvEdit.globalObj._cvNid,'3');
            };
        });
        //---鍒囨崲妯℃澘
        $(".tpl_change").click(function (e) {
            e.stopPropagation();
            lxcvEdit.changeTpl();
        });
        //----妯″潡绠＄悊--
        $(".tpl_module").click(function () {
            lxcvEdit.moduleManage();
        });
        //---鏇存崲棰滆壊--
        $(".header-nav .tpl_style").click(function () {
            $(".tpl_style .tpl_style_edit").show();
        });
        $(".color_list li").click(function (e) {
            e.stopPropagation()
            lxcvEdit.changeColor($(this))
        });

        $(".my_cv").click(function () {
            lxcvEdit.myCv(lxcvEdit.globalObj._nUserId);
        });
        //---绠€鍘嗚缃�--
        $(".cv_edit").click(function () {
            lxcvEdit.cvEdit();
        });
        //---淇濆瓨--
        $(".cv_storage").click(function () {
            function p(s) {
                return s < 10 ? '0' + s: s;
            }
            var myDate = new Date();
            var year=myDate.getFullYear();
            var month=myDate.getMonth()+1;
            var date=myDate.getDate();
            var h=myDate.getHours();       //鑾峰彇褰撳墠灏忔椂鏁�(0-23)
            var m=myDate.getMinutes();     //鑾峰彇褰撳墠鍒嗛挓鏁�(0-59)
            var s=myDate.getSeconds();
            var now=year+'-'+p(month)+"-"+p(date)+" "+p(h)+':'+p(m)+":"+p(s);
            $("#hold_cue_txt").html(now + "&nbsp;&nbsp;&nbsp;&nbsp;淇濆瓨鎴愬姛")
            $(".hold-cue").fadeIn(500);
            setTimeout(function () {
                $(".hold-cue").fadeOut(500);
            },2500)
        });
        //---淇敼涓汉淇℃伅
        $("#infoPhone").blur(function () {
            $(".phoneItem .phoneCue").hide();
            var regPho = /^[1][3,4,5,7,8][0-9]{9}$/, sRTel = $("#infoPhone").val();//---楠岃瘉鎵嬫満
            if (sRTel != '') {
                if (!regPho.test(sRTel)) {
                    $(".phoneItem .phoneCue").show();
                    return;
                } else {
                    $(".phoneItem .phoneCue").hide();
                };
            };
        });
        $("#infoEmail").blur(function () {
            $(".emailItem .mailCue").hide();
            var regMail = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, sREmail = $("#infoEmail").val(); //---楠岃瘉閭,
            if (sREmail != '') {
                if (!regMail.test(sREmail)) {
                    $(".emailItem .mailCue").show();
                    return;
                } else {
                    $(".emailItem .mailCue").hide();
                };
            }
        })
        $(".lxcv-info .edit").click(function () {
            $(".moreMsg").hide();
            lxcvEdit.getYearList($("#yearList"));
            $.ajax({
                url: 'http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=resumepmload',
                data: {nRId: lxcvEdit.globalObj._cvNid},
                type: "get",
                dataType: "jsonp",
                success: function (data) {
                    lxcvEdit.getInfo(data);
                },
            });
            $("#infoModal").modal("show");
            $("#openMore").children('span').removeClass('daosanjiao').addClass('sanjiao');
        });
        $("#infoOk").click(function () {
            lxcvEdit.editInfo(lxcvEdit.globalObj._cvNid);
        });
        if (!localStorage.getItem('tutorial')) {
            $(".tpl_change_cue").show();
            $(".lxcv-info .edit").click();
            localStorage.setItem('tutorial','true');
        };
        //---鍒犻櫎涓汉淇℃伅
        $(".detail-cont .lxcv-info-empty").click(function () {
            lxcvEdit.deleteInfo(lxcvEdit.globalObj._cvNid,$(this));
        })
        //---闅愯棌妯″潡--
        $("#cueModal .modal-body").on("click","#show_module li s.tsj",function (e) {
            e.stopPropagation()
            lxcvEdit.hideModule($(this));
        });
        //---鏄剧ず妯″潡--
        $("#cueModal .modal-body").on("click","#hide_module li s",function (e) {
            e.stopPropagation()
            lxcvEdit.showModule($(this));
        });
        //---淇敼妯″潡鍚嶇О--
        $("#modalTitleEdit").click(function () {
            $('.editTitleCue').hide();
            $("#contEditModalLabel").attr("contenteditable","true").focus().css({"border":"1px solid #999","padding":"0 5px"});
            if (!localStorage.getItem('cueLast')) {
                $(".editor-box .editTitleCue").show();
                localStorage.setItem('cueLast','true');
            };
        });
        $("#contEditModalLabel").blur(function () {
            $(this).removeAttr("contenteditable").css({"border":"none","padding":"0"});
        });
        //----姹傝亴鎰忓悜缂栬緫----
        $(".inten .edit").click(function () {
            $.ajax({
                url: 'http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=resumejload',
                data: {nRId: lxcvEdit.globalObj._cvNid},
                type: "get",
                dataType: "jsonp",
                success: function (data) {
                    lxcvEdit.getInten(data);
                },
            });
            $("#intenModal").modal("show");
        })
        $("#intenOk").click(function () {
            lxcvEdit.editInten(lxcvEdit.globalObj._cvNid)
        });
        //---鍒犻櫎姹傝亴鎰忓悜
        $(".inten-cont .lxcv-info-empty").click(function () {
            lxcvEdit.deleteInten(lxcvEdit.globalObj._cvNid,$(this));
        });
        //----鍩庡競閫夋嫨----
        $("#cityChoice").click(function (e) {
            e.stopPropagation()
            $("#monthList,#sexList,#educationList,#jobYearList,#statusList,#marryList,#yearList").hide();
            $(".sg-mask").remove();
            $.areaSelect();
        });
        $("#intenCity").click(function (e) {
            e.stopPropagation()
            $("#entryTimeList,#ifonWorkTypeList").hide();
            $(".sg-mask").remove();
            $.areaSelect();
        });
        //---涓嬫媺閫夐」浜嬩欢
        $(".modal-item .item-cont ul").on("click","li",function () {
            if ($(this).text() == "鑷充粖") {
                $("#endMonth").attr("disabled","true");
            } else {
                $("#endMonth").removeAttr("disabled");
            };
            if ($(this).text() == '鍏艰亴') {
                if ($('.negotiable input').attr('checked')) {
                    $("#perDiem").attr('disabled','disabled')
                } else {
                    $("#perDiem").removeAttr('disabled');
                }
                $(".modal-item .monthly").hide();
                $(".modal-item .daily").show();
            } else if ($(this).text() == '鍏ㄨ亴' || $(this).text() == '瀹炰範' || $(this).text() == '涓嶅～鍐�') {
                if ($('.negotiable input').attr('checked')) {
                    $("#jobMinSalary,#jobMaxSalary").attr('disabled','disabled')
                } else {
                    $("#jobMinSalary,#jobMaxSalary").removeAttr('disabled')
                }
                $(".modal-item .monthly").show();
                $(".modal-item .daily").hide();
            };
            $(this).parent().siblings("input").val($(this).text());
        });
        //---钖祫瑕佹眰--
        $(".negotiable input").click(function () {
            if ($(this).attr("checked")) {
                $(this).removeAttr("checked");
                $("#jobMinSalary,#jobMaxSalary,#perDiem").removeAttr("disabled");
            } else {
                $(this).attr("checked","checked");
                $("#jobMinSalary,#jobMaxSalary,#perDiem").attr("disabled","disabled");
            }
        });
        //---鏁欒偛缂栬緫---
        $(".lxcv-modules").on('click','#cv_edu .add',function (e) {
            e.stopPropagation();
            $("#modal_type").attr('data-ty','cv_edu');
            lxcvEdit.addEdu(lxcvEdit.globalObj._cvNid);
        });//---娣诲姞鍗曟寫
        $(".lxcv-modules").on("click","#cv_edu .petty-toolbar .petty-delete",function () {
            var nId = $(this).parent().parent(".list-cont").attr("data-neid");
            lxcvEdit.expinfodel(lxcvEdit.globalObj._cvNid,nId,"userlearningexp");
        });
        //---宸ヤ綔缁忓巻缂栬緫
        $(".lxcv-modules").on('click','#cv_work .add',function (e) {
            e.stopPropagation();
            $("#modal_type").attr('data-ty','cv_work');
            lxcvEdit.addWork(lxcvEdit.globalObj._cvNid);
        });
        $(".lxcv-modules").on("click","#cv_work .petty-toolbar .petty-delete",function (e) {
            e.stopPropagation();
            var nId = $(this).parent().parent(".list-cont").attr("data-nJid");
            lxcvEdit.expinfodel(lxcvEdit.globalObj._cvNid,nId,"userjob");
        });
        //--- 鑷畾涔夋椂闂村瓙妯″潡缂栬緫
        $(".lxcv-modules").on('click',".timeItem .list-box .petty-toolbar .petty-edit", function (e) {
            e.stopPropagation()
            $("#modal_type").attr('data-ty','diy');
            var nOId = $(this).parent().parent().parent().parent().parent().attr('data-noid');
            var nid = $(this).parent().parent(".list-cont").attr("data-nid");
            var modalTitle = $(this).parents('.timeItem-cont').siblings('.module-head').children('.module-haed-txt').text();
            var type = $(this).parent().siblings(".diymodal_type").attr('data-diytype');
            lxcvEdit.frameShow('842px','鑷畾涔夊悕绉�','.cont-list.fl',null);
            lxcvEdit.diyboxEdit(lxcvEdit.globalObj._cvNid,nid,nOId,modalTitle,type)
        });
        $(".lxcv-modules").on('click',".moduleItem .list-box .petty-toolbar .petty-edit", function (e) {
            e.stopPropagation()
            $("#modal_type").attr('data-ty','diy');
            var nOId = $(this).parent().parent().parent().parent().parent().attr('data-noid');
            var nid = $(this).parent().parent(".list-cont").attr("data-nid");
            var modalTitle = $(this).parents('.moduleItem-cont').siblings('.module-head').children('.module-haed-txt').text();
            var type = $(this).parent().siblings(".diymodal_type").attr('data-diytype');
            lxcvEdit.frameShow('604px','鑷畾涔夊悕绉�',null,'.cont-list.fl,.modal-box');
            lxcvEdit.diyboxEdit(lxcvEdit.globalObj._cvNid,nid,nOId,modalTitle,type)
        });
        //---鍒犻櫎鑷畾涔夋ā鍧�
        $(".lxcv-modules").on('click','.diy-modal .lxcv-toolbar .delete',function (e) {
            e.stopPropagation();
            var nId = $(this).parent().parent().attr('data-sort');
            var nOId = $(this).parent().siblings().attr('data-noid');
            var title = $(this).parent().siblings().children('.module-head').attr('data-title');
            lxcvEdit.diyboxDel(nId,nOId,title);
        });
        //---鑷畾涔夋坊鍔犲瓙妯″潡----
        $(".lxcv-modules").on('click','.diy-modal .lxcv-toolbar .add',function (e) {
            e.stopPropagation();
            var modalTitle = $(this).parent().siblings().children('.module-head').children('.module-haed-txt').text()
            $("#modal_type").attr('data-ty','diy');
            var nOId = $(this).parent().siblings().attr('data-noid');
            lxcvEdit.diyinfoAdd(lxcvEdit.globalObj._cvNid,modalTitle,nOId);
        });
        //---鍒犻櫎鑷畾涔夊瓙妯″潡----
        $(".lxcv-modules").on('click',".timeItem .list-box .petty-toolbar .petty-delete", function (e) {
            e.stopPropagation()
            var nid = $(this).parent().parent(".list-cont").attr("data-nid");
            lxcvEdit.diyinfodel(nid)
        });
        //---娣诲姞瀛愭ā鍧楁寜閽�--
        $(".add-minor").click(function () {
            if($("#modal_type").attr('data-ty') == 'cv_edu') {
                lxcvEdit.addEdu(lxcvEdit.globalObj._cvNid);
            } else if($("#modal_type").attr('data-ty') == 'cv_work') {
                lxcvEdit.addWork(lxcvEdit.globalObj._cvNid);
            } else if ($("#modal_type").attr('data-ty') == 'diy') {
                var  nOId = $("#taskList li").children('i').attr('data-nOId');
                var  title = $("#taskList li").children('i').attr('data-title');
                lxcvEdit.diyinfoAdd(lxcvEdit.globalObj._cvNid,title,nOId);
            };
        });
        //---缂栬緫妗嗗垏鎹㈠瓙妯″潡
        $("#taskList").on('click','li',function (e) {
            e.stopPropagation();
            $(this).css("background-color","#eeeeee");
            $(this).siblings().css("background-color","#fff");
            var modalType = $("#modal_type").attr('data-ty');
            if(modalType == 'cv_edu') {
                var  nEId = $(this).children('i').attr('data-nEid');
                if (nEId == undefined) return;
                lxcvEdit.eduEdit(lxcvEdit.globalObj._cvNid,nEId);
            } else if(modalType == 'cv_work') {
                var  nJId = $(this).children('i').attr('data-nJid');
                if (nJId == undefined) return;
                lxcvEdit.workEdit(lxcvEdit.globalObj._cvNid,nJId);
            } else if (modalType == 'diy') {
                var  nId = $(this).children('i').attr('data-nid');
                var  nOId = $(this).children('i').attr('data-nOId');
                var  title = $(this).children('i').attr('data-title');
                if (nOId == undefined) return;
                lxcvEdit.diyboxEdit(lxcvEdit.globalObj._cvNid,nId,nOId,title);
            };
        });
        //---缂栬緫妗嗗垹闄ゅ瓙妯″潡
        $("#taskList").on('click','li i', function (e) {
            e.stopPropagation();
            $(".modal-backdrop:last").hide();
            if($("#modal_type").attr('data-ty') == 'cv_edu') {
                var nId = $(this).attr('data-neid');
                lxcvEdit.expinfodel(lxcvEdit.globalObj._cvNid,nId,'userlearningexp','mInner');
            } else if($("#modal_type").attr('data-ty') == 'cv_work') {
                var nId = $(this).attr('data-njid')
                lxcvEdit.expinfodel(lxcvEdit.globalObj._cvNid,nId,'userjob','mInner');
            } else if ($("#modal_type").attr('data-ty') == 'diy') {
                var  nId = $(this).attr('data-nid');
                var  nOId = $(this).attr('data-nOId');
                lxcvEdit.diyinfodel(nId,nOId,'mInner');
            };
        })
        //--tips鐩稿叧
        $(".tips_close").click(function () {
            $(".fr-view").css("margin-top","0px");
            $(".tips-box").hide();
        });
        $(".editor-box .editTitleCue_close").click(function (e) {
            e.stopPropagation();
            $(".editor-box .editTitleCue").hide();
        });
        $("#modalTitleEdit .editTitleCue_close").click(function (e) {
            e.stopPropagation();
            $("#modalTitleEdit .editTitleCue").hide();
            if (!localStorage.getItem('cueLast')) {
                $(".editor-box .editTitleCue").show();
                localStorage.setItem('cueLast','true');
            };
        });
        $(".tips_title").click(function () {
            var sDescribesType = $("#contEditModalLabel").text();
            $(".editor-box .editTitleCue").hide();
            if($(".tips-box").css('display') == 'none') {
                $(".fr-view,.fr-placeholder").css("margin-top","210px");
                $(".tips-box").show();
                lxcvEdit.getTips(sDescribesType)
            } else {
                $(".fr-view,.fr-placeholder").css("margin-top","0px");
                $(".tips-box").hide();
            };
        });
        $(".tips-industry input").click(function () {
            $(".vocation_list").hide();
            if ($(".industry_list").css('display') == 'none') {
                $(".industry_list").show();
            } else {
                $(".industry_list").hide();
            };
            $.ajax({
                url : 'http://www.capabcv.com/resumev2/Resumev2.ashx?resumeaction=classification1loadv2',
                dataType : 'jsonp',
                type : 'get',
                success : function(data) {
                    var industry = data.classification1,tipsList = [];
                    for( var i = 0; i < industry.length; i++ ) {
                        tipsList.push("<li>"+industry[i].sClassification1+"</li>");
                    };
                    $(".industry_list").html(tipsList.join(''))
                },
            });
        });
        $(".industry_list").on('click','li',function () {
            var sDescribesType = $("#contEditModalLabel").text();
            $(".tips-search input").val('');
            $(".tips-industry input").val($(this).text());
            $(".tips-vocation input").val('');
            lxcvEdit.getTips(sDescribesType);
        });
        $(".tips-vocation input").click(function () {
            $(".industry_list").hide();
            var classification = $(".tips-industry input").val();
            if ($(".vocation_list").css('display') == 'none') {
                $(".vocation_list").show();
            } else {
                $(".vocation_list").hide();
            };
            if(!$('.tips-industry input').val()) {
                $(".vocation_list").html('<p class="ac" style="color: red;font-size: 12px">璇峰厛閫夋嫨鎵€灞炶涓�</p>');
                return;
            };
            $.ajax({
                url : 'http://www.capabcv.com/resumev2/Resumev2.ashx?resumeaction=classification2loadv2',
                data : { 'classification' : classification },
                dataType : 'jsonp',
                type : 'get',
                success : function(data) {
                    var position = data.classification2,tipsList = [];
                    for( var i = 0; i < position.length; i++ ) {
                        tipsList.push("<li>"+position[i].sClassification2+"</li>");
                    };
                    $(".vocation_list").html(tipsList.join(''));
                },
            });
        });
        $(".vocation_list").on('click','li',function () {
            $(".tips-search input").val('');
            $(".tips-vocation input").val($(this).text());
            var sDescribesType = $("#contEditModalLabel").text();
            lxcvEdit.getTips(sDescribesType);
        });
        $(".tips-search span").click(function () {
            var sDescribesType = $("#contEditModalLabel").text();
            var sDescribeMemo = $(".tips-search input").val().toUpperCase();
            lxcvEdit.getTips(sDescribesType,sDescribeMemo);
        });
        $(".tips-search input").keyup(function (e) {
            var sDescribesType = $("#contEditModalLabel").text();
            var sDescribeMemo = $(".tips-search input").val().toUpperCase();
            if (e.keyCode == 13) {
                $(".tips-search input").blur();
                lxcvEdit.getTips(sDescribesType,sDescribeMemo);
            }else if ($(".tips-search input").val() == '') {
                lxcvEdit.getTips(sDescribesType);
            };
        });
        $("#tips_list").on('click','li span',function () {
            var tipsCont = $(this).siblings('p').html(),cont = $('#editor').froalaEditor('html.get');
            $('#editor').froalaEditor('html.set', cont+tipsCont);
            $(this).parent().empty().remove();
        });
        //---娣诲姞鑷畾涔�
        $("#addCustom").click(function () {
            lxcvEdit.diyboxadd(lxcvEdit.globalObj._cvNid);
        })
        //---鏁欒偛闅愯棌----
        $(".lxcv-modules").on('click','#cv_edu .yincang',function (e) {
            e.stopPropagation()
            var nid = $(this).parent().siblings('.timeItem-inner').attr('data-noid');
            lxcvEdit.hideModule($(this),nid);
        });
        $(".lxcv-modules").on('click','#cv_work .yincang',function (e) {
            e.stopPropagation();
            var nid = $(this).parent().siblings('.timeItem-inner').attr('data-noid');
            lxcvEdit.hideModule($(this),nid);
        });
        $("#cv_inten .yincang").click(function () {
            lxcvEdit.intenIsShow('none','l2');
        });
        //---棰勮----
        $(".cv_preview").click(function () {
            $.ajax({
                url: "http://www.capabcv.com/resumev2/Resumev2.ashx?resumeaction=resumeallinfoloadv2",
                data: {},
                type: "get",
                dataType: "jsonp",
                success: function (data) {
                    if(data == 1) {
                        lxcvEdit.remindShow('瑕佸厛鍒涘缓绠€鍘嗘墠鑳介瑙堝摝');
                    } else {
                        $(".header-box, .addDefind").hide();
                        $(".preview-head, .cv-cover").show();
                        $('.lxcv-container').css("box-shadow","0 0 5px 2px #aaa");
                    }
                }
            })
        });
        $(".revert-nav").click(function () {
            $(".header-box, .addDefind").show();
            $(".preview-head, .cv-cover").hide();
            $('.lxcv-container').css("box-shadow","none");
        });
        //---涓嬭浇
        $(".cv_download").click(function () {
            var timer;
            if (lxcvEdit.globalObj._isPaymentMake == false) {
                timer = setInterval(function () {
                    lxcvEdit.isPaymentMake();
                    if (lxcvEdit.globalObj._isPaymentMake == true) {
                        clearInterval(timer);
                    };
                },2000);
                window.open("http://www.capabcv.com/payit/PayCreate.aspx");
            } else {
                window.open("http://www.capabcv.com/UserTemplateV3/"+lxcvEdit.globalObj._cvNid+".pdf");
            };
        });
        //---鍒嗕韩---
        $("#share").click(function (e) {
            e.stopPropagation();
            var timer;
            if (lxcvEdit.globalObj._isPaymentMake == false) {
                timer = setInterval(function () {
                    lxcvEdit.isPaymentMake();
                    if (lxcvEdit.globalObj._isPaymentMake == true) {
                        clearInterval(timer);
                    };
                },2000);
                window.open("http://www.capabcv.com/payit/PayCreate.aspx");
            } else {
                $(".export_title span").eq(0).html("閾炬帴鐢熸垚鎴愬姛锛屽鍒堕摼鎺ュ垎浜粰濂藉弸鍚с€�");
                $('.export').fadeIn(200);
                $(".export_btn input").val("http://www.capabcv.com/UserTemplateV3/"+lxcvEdit.globalObj._cvNid+".pdf");
                $("#resCode_img").attr("src", "/ResumeV2QRcode/"+lxcvEdit.globalObj._cvNid+".PNG");
            };
        });
        $(".copy_link1").click(function(e){
            e.stopPropagation();
            $(".export_btn input").select();
            tag=document.execCommand("Copy");
            var T = 2
            if(!tag){
                $('.error_info .error_cue').text("澶嶅埗澶辫触锛屽缓璁偍浣跨敤Ctrl+C鎴栧彸閿叏閫夎繘琛屽湴鍧€澶嶅埗銆�");
            } else {
                $(".export_title span").eq(0).html("<i class='icon-duigou'></i>"+"&nbsp;&nbsp;&nbsp澶嶅埗鎴愬姛&nbsp;"+3+"&nbsp;绉掑悗鍏抽棴銆�");
                var timer = setInterval(function(){
                    if (T<0) {
                        clearInterval(timer);
                        $(".export").hide();
                        $(".export_title span").eq(0).html("閾炬帴鐢熸垚鎴愬姛锛屽鍒堕摼鎺ュ垎浜粰濂藉弸鍚�")
                        $(".mask .loading1 #preImg").css("margin","0 auto");
                    };
                    $(".export_title span").eq(0).html("<i class='icon-duigou'></i>"+"&nbsp;&nbsp;&nbsp澶嶅埗鎴愬姛&nbsp;"+T+"&nbsp;绉掑悗鍏抽棴銆�");
                    T--
                },1000)
            };
        });
        $('.export_head span').eq(1).click(function(e){
            e.stopPropagation();
            $('.export').fadeOut(200);
            $(".export_title span").eq(0).html("閾炬帴鐢熸垚鎴愬姛锛屽鍒堕摼鎺ュ垎浜粰濂藉弸鍚�");
        });
        //---閫€鍑虹櫥褰�
        $("#exitLogon").click(function () {
            lxcvEdit.userlogout()
        });
        //---鍏抽棴妯℃澘鎹㈣壊绐楀彛
        $("#style_close").click(function (e) {
            e.stopPropagation()
            $(".tpl_style_edit").hide();
        });
        //---鍒涘缓绠€鍘�---
        $(".cv-null .btn-confirm").click(function () {
            lxcvEdit.newResume();
            $(this).text('姝ｅ湪鍒涘缓  ...')
        });
        //---姹傝亴鎰忓悜----
        lxcvEdit.isHidden("#ifonWorkType","#ifonWorkTypeList","#entryTimeList"+","+".sg-mask");
        lxcvEdit.isHidden("#entryTime","#entryTimeList","#ifonWorkTypeList"+","+".sg-mask");
        //---澶村儚---
        lxcvEdit.isHidden(".photo-edit",".photo-selector");
        //---鍐呭缂栬緫--
        lxcvEdit.isHidden("#startYear","#startYearList","#startMonthList"+","+"#endYearList"+","+"#endMonthList");
        lxcvEdit.isHidden("#startMonth","#startMonthList","#startYearList"+","+"#endYearList"+","+"#endMonthList");
        lxcvEdit.isHidden("#endYear","#endYearList","#startYearList"+","+"#startMonthList"+","+"#endMonthList");
        lxcvEdit.isHidden("#endMonth","#endMonthList","#startYearList"+","+"#startMonthList"+","+"#endYearList");
        //--涓汉淇℃伅鏂归潰
        lxcvEdit.isHidden("#openMore",".moreMsg");
        lxcvEdit.isHidden("#infoYear","#yearList","#monthList"+","+"#sexList"+","+"#educationList"+","+"#jobYearList"+","+"#statusList"+","+"#marryList"+","+".sg-mask");
        lxcvEdit.isHidden("#infoMonth","#monthList","#yearList"+","+"#sexList"+","+"#educationList"+","+"#jobYearList"+","+"#statusList"+","+"#marryList"+","+".sg-mask");
        lxcvEdit.isHidden("#ifonSex","#sexList","#yearList"+","+"#monthList"+","+"#educationList"+","+"#jobYearList"+","+"#statusList"+","+"#marryList"+","+".sg-mask");
        lxcvEdit.isHidden("#education","#educationList","#yearList"+","+"#monthList"+","+"#sexList"+","+"#jobYearList"+","+"#statusList"+","+"#marryList"+","+".sg-mask");
        lxcvEdit.isHidden("#jobYear","#jobYearList","#yearList"+","+"#monthList"+","+"#sexList"+","+"#educationList"+","+"#statusList"+","+"#marryList"+","+".sg-mask");
        lxcvEdit.isHidden("#ifonStatus","#statusList","#yearList"+","+"#monthList"+","+"#sexList"+","+"#educationList"+","+"#jobYearList"+","+"#marryList"+","+".sg-mask");
        lxcvEdit.isHidden("#infoMarry","#marryList","#yearList"+","+"#monthList"+","+"#sexList"+","+"#educationList"+","+"#jobYearList"+","+"#statusList"+","+".sg-mask");
        lxcvEdit.deleteStyle($("#contEditModalLabel"));
    },
    //---鎻掍欢鍒濆鍖�---
    plugInInit: function () {
        $( ".sortable" ).sortable({
            cursor: "move",
            items: ".lxcv-move",
            handle: ".handel",
            revert: 300,
            helper: "clone",
            forceHelperSize :  100,
            tolerance: "pointer",
            containment :  "body",   //--鎷栨嫿涓嶈兘瓒呭嚭瀹瑰櫒鑼冨洿
            placeholder: "holderCss",
            update:function () {
                var arr = '';
                $(".lxcv-move .module-head").each(function() {
                    arr += $(this).parents('.lxcv-move').attr('data-sort') + '.' + $(this).parent().attr('data-noid')+',';
                });
                arr = arr.substring(0, arr.length - 1);
                $.ajax({
                    url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=resumeboxorder",
                    data: {'orderarr': arr},
                    type: "get",
                    dataType: "jsonp",
                    success: function (data) {
                        lxcvEdit.getCV(lxcvEdit.globalObj._cvNid);
                    },
                    error: function () {
                        lxcvEdit.remindShow('error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�')
                    },
                });
            },
        })
        $(document).tooltip({  //---JQ-ui title
            position: {
                my: "center top",//鎻愮ず妗�(鎴戠殑宸︿笂)
                at: "center bottom+9px"//褰撳墠妗�(鍦ㄤ綘鐨勫彸涓�)
            },
        });
        $(document).bind("click", function (e){  //---绌虹櫧澶勬秷澶�---
            if ( $((e.target || e.srcElement)).closest
            (".tips-vocation input,.tips-industry input,.sg-mask, #infoYear,#infoMonth,#ifonSex,#education,#jobYear,#intenCity,#cityChoice,#ifonStatus,#infoMarry,#ifonWorkType,#entryTime,#startYear,#startMonth,#endYear,#endMonth,.tpl_style").length == 0) {
                $(".sg-mask").remove();
                $('#monthList').hide();
                $('#yearList').hide();
                $('#sexList').hide();
                $('#educationList').hide();
                $('#jobYearList').hide();
                $('#statusList').hide();
                $('#marryList').hide();
                $('#entryTimeList').hide();
                $('#ifonWorkTypeList').hide();
                $('#startYearList').hide();
                $('#startMonthList').hide();
                $('#endYearList').hide();
                $('#endMonthList').hide();
                $('.tips-industry ul').hide();
                $('.tips-vocation ul').hide();
                $('.tpl_style .tpl_style_edit').hide();
            }
        });
    },
    //---缂栬緫鍣ㄥ垵濮嬪寲--
    editorInit: function () {
        $('#editor').froalaEditor({
            language: 'zh_cn', // 姹夊寲
            toolbarButtons: ["bold", "italic", "underline", "align", "formatOL", "formatUL", "outdent", "indent", "undo", "redo"], // >=1200
            toolbarButtonsXS: ["bold", "italic", "underline", "align", "formatOL", "formatUL", "outdent", "indent", "undo", "redo"], // <768
            toolbarButtonsSM: ["bold", "italic", "underline", "align", "formatOL", "formatUL", "outdent", "indent", "undo", "redo"], // >=768
            placeholderText: '',//---鍐呭鎻愮ず
            toolbarSticky: false,
        });
        $(".fr-view,.fr-placeholder").css("margin-top","0px");
        $(".tips-box").hide();

        // $("#bold-1 i").removeClass('fa-bold').addClass('icon-icon_bianjiqi_1');
        // $("#italic-1 i").removeClass('fa-bold').addClass('icon-icon_bianjiqi_1');

    },
    //---娓呯┖缂栬緫妗嗗唴瀹�
    clearModalCont: function () {
        $("#current_one").val('');
        $("#current_two").val('');
        $("#current_three").val('');
        $("#current_four").val('');
        $("#startYear").val('');
        $("#startMonth").val('');
        $("#endYear").val('');
        $("#endMonth").val('');
        $('#editor').froalaEditor('html.set', '');
    },
    // 鐢ㄤ簬甯姪 GA 妫€娴嬪悇绉嶅濂囨€€殑娴忚鍣�
    brower_check: function () {
        try{
            var browserName = "Other";
            var ua = window.navigator.userAgent;
            browserRegExp = {
                Sogou : /SE\s2\.X|SogouMobileBrowser/,
                Explorer2345 : /2345Explorer|2345chrome|Mb2345Browser/,
                Liebao : /LBBROWSER/,
                QQBrowser : /QQBrowser/,
                Baidu : /BIDUBrowser|baidubrowser|BaiduHD/,
                UC : /UBrowser|UCBrowser|UCWEB/,
                MiuiBrowser : /MiuiBrowser/,
                Wechat : /MicroMessenger/,
                MobileQQ : /Mobile\/\w{5,}\sQQ\/(\d+[\.\d]+)/,
                Shoujibaidu : /baiduboxapp/,
                Firefox : /Firefox/,
                Maxthon : /Maxthon/,
                Se360 : /360SE/,
                Ee360 : /360EE/,
                TheWorld : /TheWorld/,
                Weibo : /__weibo__/,
                NokiaBrowser : /NokiaBrowser/,
                Opera : /Opera|OPR\/(\d+[\.\d]+)/,
                Edge : /Edge/,
                AndroidBrowser : /Android.*Mobile\sSafari|Android\/(\d[\.\d]+)\sRelease\/(\d[\.\d]+)\sBrowser\/AppleWebKit(\d[\.\d]+)/i,
                IE : /Trident|MSIE/,
                Chrome : /Chrome|CriOS/,
                Safari : /Version[|\/]([\w.]+)(\s\w.+)?\s?Safari|like\sGecko\)\sMobile\/\w{3,}$/,
            };
            for (var i in browserRegExp) {
                if (browserRegExp[i].exec(ua)) {
                    browserName = i;
                    break;
                }
            }
            //鍒ゆ柇鏄惁鏄浗浜у弻鏍告祻瑙堝櫒锛屾槸鐨勮瘽锛屽垯鍒ゆ柇鏄惁鏄吋瀹规ā寮�
            var two_kit=false;//鏄惁鏄浗浜у弻鏍告祻瑙堝櫒
            if(browserName.indexOf("Se360") != -1 || browserName.indexOf("Ee360") != -1 || browserName.indexOf("QQBrowser") != -1|| browserName.indexOf("Explorer2345") != -1|| browserName.indexOf("Sogou") != -1|| browserName.indexOf("Liebao") != -1) {
                two_kit = true; //鍥戒骇鍙屾牳娴忚鍣�
            }
            user_agent = navigator.userAgent.toLowerCase();
            //褰撳墠鏄敮鎸両E10浠ヤ笂鐨�
            var title="浣犵殑娴忚鍣ㄧ増鏈繃浣庝笉鏀寔鍦ㄧ嚎鍒朵綔銆�";
            var content="鏈綉绔欎笉鏀寔鎮ㄥ綋鍓嶇殑娴忚鍣ㄧ増鏈紝濡傛灉缁х画浣跨敤浼氬奖鍝嶇紪杈戞晥鏋�<br/>璇峰皢娴忚鍣ㄥ崌绾ц嚦鏈€鏂扮増鏈�<br/>鎴栨洿鎹㈡祻瑙堝櫒锛屼互鑾峰緱鏈€浣充娇鐢ㄤ綋楠屻€�";
            var is_show=false;
            if (user_agent.indexOf("msie 7.0")>-1&&user_agent.indexOf("trident/5.0")>-1){
                is_show=true;
            }else if (user_agent.indexOf("msie 8.0")>-1&&user_agent.indexOf("trident/5.0")>-1){
                is_show=true;
            }else if(user_agent.indexOf("msie 8.0")>-1) {
                is_show=true;
            }else if(user_agent.indexOf("msie 7.0")>-1&&user_agent.indexOf("trident/4.0")>-1){
                is_show=true;
            }else if(user_agent.indexOf("msie 7.0")>-1){
                is_show=true;
            }else if(user_agent.indexOf("msie 6.0")>-1){
                is_show=true;
            }
            if(is_show){
                if(two_kit){
                    title="浣犲綋鍓嶆祻瑙堝櫒浣跨敤鐨勬槸鍏煎妯″紡";
                    content="鏈綉绔欎笉鏀寔鎮ㄥ綋鍓嶇殑娴忚鍣ㄧ殑鍏煎妯″紡锛屽鏋滅户缁娇鐢ㄤ細褰卞搷缂栬緫鏁堟灉<br/>璇蜂綘灏嗘祻瑙堝櫒妯″紡璋冧负鏋侀€熸ā寮�<br/>鎴栨洿鎹㈡祻瑙堝櫒锛屼互鑾峰緱鏈€浣充娇鐢ㄤ綋楠屻€�";
                }
                $("#cueModalLabel").html(title);
                $("#cueModal .modal-body").html(content);
                $(".modal-footer").hide();
                $("#cueModal").modal("show");
            }
        }catch(e){
            console.log("娴忚鍣ㄧ増鏈娴嬪け璐�");
        }
    },
    //---鐢ㄤ簬鍘婚櫎contenteditable绌烘牸 and Html鏍煎紡
    deleteStyle: function (_this) {
        _this.keyup(function (event) {
            if (event.keyCode == 32) {
                if (event.which != 8 && _this.text().length > 15) {
                    _this.html( _this.text().substr(0,15));
                    _this.blur();
                    lxcvEdit.remindShow('鏈€澶氬彲浠ヨ緭鍏�15涓瓧')
                }
            }
            if(event.keyCode ==13){
                var obj = _this.text();
                var obj1 = obj.replace(/<\/?[^>]*>/gim,"");//鍘绘帀鎵€鏈夌殑html鏍囪
                var obj2 = obj1.replace(/(^\s+)|(\s+$)/g,"");//鍘绘帀鍓嶅悗绌烘牸
                var obj3 = obj2.replace(/\s/g,"");//鍘婚櫎鏂囩珷涓棿绌烘牸
                _this.text(obj3);
                return;
            }
        });
        _this.on('keydown', function(e) {
            // e.metaKey for mac
            if (e.keyCode == 13) {
                e.preventDefault();
            };
        });
        $('[contenteditable=true]').each(function() {
            // 鍘婚櫎IE http涔嬬被鍦板潃鑷姩鍔犻摼鎺�
            try {
                document.execCommand("AutoUrlDetect", false, false);
            } catch (e) {}

            $(this).on('paste', function(e) {
                e.preventDefault();
                var text = null;

                if(window.clipboardData && clipboardData.setData) {
                    // IE
                    text = window.clipboardData.getData('text');
                } else {
                    text = (e.originalEvent || e).clipboardData.getData('text/plain') || prompt('鍦ㄨ繖閲岃緭鍏ユ枃鏈�');
                }
                if (document.body.createTextRange) {
                    if (document.selection) {
                        textRange = document.selection.createRange();
                    } else if (window.getSelection) {
                        sel = window.getSelection();
                        var range = sel.getRangeAt(0);

                        // 鍒涘缓涓存椂鍏冪礌锛屼娇寰桾extRange鍙互绉诲姩鍒版纭殑浣嶇疆
                        var tempEl = document.createElement("span");
                        tempEl.innerHTML = "&#FEFF;";
                        range.deleteContents();
                        range.insertNode(tempEl);
                        textRange = document.body.createTextRange();
                        textRange.moveToElementText(tempEl);
                        tempEl.parentNode.removeChild(tempEl);
                    }
                    textRange.text = text;
                    textRange.collapse(false);
                    textRange.select();
                } else {
                    // Chrome涔嬬被娴忚鍣�
                    document.execCommand("insertText", false, text);
                }
            });
            // 鍘婚櫎Crtl+b/Ctrl+i/Ctrl+u绛夊揩鎹烽敭
            $(this).on('keydown', function(e) {
                // e.metaKey for mac
                if (e.ctrlKey || e.metaKey) {
                    switch(e.keyCode){
                        case 66: //ctrl+B or ctrl+b
                        case 98:
                        case 73: //ctrl+I or ctrl+i
                        case 105:
                        case 85: //ctrl+U or ctrl+u
                        case 117: {
                            e.preventDefault();
                            break;
                        }
                    }
                }
            });
        });
    },
    //---鐢ㄤ簬鑾峰彇淇℃伅骞翠唤鍒楄〃
    getYearList: function (YearListBox) {
        $(".eData-cue,.sData-cue").hide();
        var time = new Date().getFullYear(),rr = [];
        if (arguments.length>1) {
            rr = ['<li>鑷充粖</li>'];
        } else {
            rr = [];
        };
        for (var i = time; i > time-70; i-- ) {
            rr.push('<li>'+i+'</li>');
        }
        YearListBox.html(rr.join(""));
    },
    //---鑾峰彇鏁翠唤绠€鍘嗕俊鎭�---
    getCV: function (nid) {
        lxcvEdit.globalObj._toolbar = '<div class="petty-toolbar">' +
            '<span class="petty-edit icon-bianji ac" title="缂栬緫"></span>' +
            '<span class="handel icon-yidong ac" title="绉诲姩"></span>' +
            '<span class="add icon-tianjia ac" title="娣诲姞"></span>' +
            '<span class="petty-delete icon-shanchu ac" title="鍒犻櫎"></span>' +
            '</div>';
        lxcvEdit.globalObj._outerToolbar = '<div class="lxcv-toolbar clearfix">' +
            '<span class="edit icon-bianji ac" title="缂栬緫"></span>' +
            '<span class="handel icon-yidong ac" title="绉诲姩"></span>' +
            '<span class="add icon-tianjia ac" title="娣诲姞"></span>' +
            '<span class="delete icon-shanchu ac" title="鍒犻櫎"></span>' +
            '</div>';
        if (!localStorage.getItem('resumenId')) {
            if (!lxcvEdit.globalObj._cvNid) {
                lxcvEdit.myCv(lxcvEdit.globalObj._nUserId,'le','le','le');
                return;
            };
        } else {
            lxcvEdit.globalObj._cvNid = localStorage.getItem('resumenId');
            nid = lxcvEdit.globalObj._cvNid;
            localStorage.removeItem('resumenId');
        };
        $('.lxcv-modules').find('.diy-modal').remove();
        $.ajax({
            url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=resumedetailslistload",
            data: {'nRId': nid},
            type: "get",
            dataType: "jsonp",
            success: function (data) {
                var cvInfo = data.ResumeInfo[0], cvEdu = '', contList = data.ResumeDetailsList, cvJob = '', jobList = [], eduList = [],
                    cvDiy = '', diyList = [], diyContList = [], diyTitle = [],diySort = [],diyIsShow = [],diyType = [], sM = '';
                //---鐓х墖鏍煎紡--//---澶村儚---
                lxcvEdit.globalObj._sPayit = cvInfo.sPayit;
                if (cvInfo.sRPhotoStyle === '0') {
                    $("#cv_photo").addClass('hidden');
                } else if (cvInfo.sRPhotoStyle == '2') {
                    $("#cv_photo").css("height","162px");
                    $('.lxcv-head .photo-selector span').eq(1).addClass('check');
                    $(".photo-cont").attr('data-size','square');
                } else {
                    $("#cv_photo").css("height","190px").removeClass('hidden');
                    $('.lxcv-head .photo-selector span').eq(2).addClass('check');
                    $(".photo-cont").attr('data-size','rectangle');
                };
                if (cvInfo) $('.photo-pre img, .operate-btn img').attr('src',cvInfo.sPhoto);
                lxcvEdit.getInfo(cvInfo);
                lxcvEdit.getInten(cvInfo);
                //---瀛楀彿
                if (!cvInfo.sFontsize) {
                    lxcvEdit.globalObj._fontSize = 14;
                } else {
                    lxcvEdit.globalObj._fontSize = cvInfo.sFontsize;
                };
                //---娈佃惤闂磋窛
                if (!cvInfo.sParagraph) {
                    lxcvEdit.globalObj._linehAmount = 1;
                } else {
                    lxcvEdit.globalObj._linehAmount = cvInfo.sParagraph;
                };
                //---闅愮璁剧疆
                lxcvEdit.globalObj._cvSecret = cvInfo.sSecret;
                //---绠€鍘嗗悕绉�
                lxcvEdit.globalObj._cvTitle = cvInfo.sRTitle;
                //---妯℃澘缂栧彿
                $("#HiddenRId").val(cvInfo.nRId);
                if (cvInfo.sTemplate) {
                    $(".color_list li").html("").css({"border":"none"});
                    var nT = cvInfo.sTemplate,nTL = nT.split("_")[0],nTL1 = nT.split("_").length-1;
                    nT = nT.indexOf('_');
                    if (nT == -1 || nTL.length > 2 || nTL1 > 2) {
                        lxcvEdit.globalObj._tplNum = '15_9'
                        $("#tplNum").attr('href','template3/css/t15/tpl15_9.css');
                        $(".color_list li").eq(0).addClass("icon-duigou").css({"border":"1px solid #000"});
                        lxcvEdit.changeTplAjax(lxcvEdit.globalObj._cvNid,lxcvEdit.globalObj._tplNum);
                    } else {
                        var T = cvInfo.sTemplate.split('_')[1];
                        var fileT = cvInfo.sTemplate.split('_')[0];
                        $("#tplNum").attr('href','template3/css/t'+fileT+'/tpl'+cvInfo.sTemplate+'.css');
                        $(".color_list li").eq(T).addClass("icon-duigou").css({"border":"1px solid #000"});
                        lxcvEdit.globalObj._tplNum = cvInfo.sTemplate;
                    }
                } else {
                    lxcvEdit.globalObj._tplNum = '15_9';
                    $("#tplNum").attr('href','template3/css/t15/tpl15_9.css');
                    lxcvEdit.changeTplAjax(lxcvEdit.globalObj._cvNid,lxcvEdit.globalObj._tplNum);
                };
                //---鍒涘缓鏃堕棿
                lxcvEdit.globalObj._upDateTime = cvInfo.dtIntime.replace(/[^\d.]/g,'');
                ///---姹傝亴鎰忓悜
                if (cvInfo.sJobIntensionDisplay == 'none') {
                    $("#cv_inten").addClass('hidden');
                };
                //---琛屼笟and鑱屼笟
                if (cvInfo.sRProfession) {
                    $(".tips-industry input").val(cvInfo.sRProfession);
                } else {
                    $(".tips-industry input").val('');
                };
                if (cvInfo.sCharacteristic) {
                    $(".tips-vocation input").val(cvInfo.sCharacteristic);
                } else {
                    $(".tips-vocation input").val('');
                };
                var ejtoolbar = ' <div class="lxcv-toolbar clearfix">'+
                    '<span class="handel icon-yidong ac" title="绉诲姩"></span>'+
                    '<span class="add icon-tianjia ac" title="娣诲姞"></span>'+
                    '<span class="yincang icon-yinsi_1 ac" title="闅愯棌"></span>'+
                    '</div>';
                for(var i = 0; i < contList.length; i++) {
                    //---鏁欒偛---
                    //---鏁欒偛---
                    var modalList = contList[i]
                    if (modalList.EducationinfoClass) {
                        cvEdu = modalList.EducationinfoClass;
                        for (var k = 0; k < cvEdu.length; k++) {
                            var  time = "",School = "",xueyuan = "";
                            if((cvEdu[k].dSDate+cvEdu[k].dEDate) != '') time = '<span class="module-time">'+cvEdu[k].dSDate+cvEdu[k].dEDate+'</span>';
                            if(cvEdu[k].sSchool != '') School = '<span class="module-situation">'+cvEdu[k].sSchool+'</span>';
                            if(cvEdu[k].sDepartments != '') xueyuan = '<span class="module-task">'+cvEdu[k].sDepartments+'</span>';
                            eduList.push('<div class="list-cont" data-nEid="'+cvEdu[k].nEId+'">'+lxcvEdit.globalObj._toolbar+'' +
                                '<div class="module-title clearfix">' + time + School + xueyuan +
                                '<span class="modal-major">'+cvEdu[k].sSpecialty+'&nbsp;&nbsp;'+cvEdu[k].sDegree+'</span>'+
                                '</div>' +
                                '<div class="module-bewrite">'+cvEdu[k].sLearnMemo+'</div>' +
                                '</div>');
                        };
                        var eduIsShow = '<div class="timeItem lxcv-move" id="cv_edu" data-sort="'+modalList.sRModuleOrder+'">';
                        if (modalList.sRModuleDisplay == 'none') eduIsShow = '<div class="timeItem lxcv-move hidden" id="cv_edu" data-sort="'+modalList.sRModuleOrder+'">'
                        diyContList.push(eduIsShow + ejtoolbar +
                            '<div class="timeItem-inner" data-noid="'+modalList.nOId+'">' +
                            '<div class="module-head" data-title="鏁欒偛缁忓巻">' +
                            '<a class="lxcv-icon icon-jiaoyu_1 ac"></a><span class="module-haed-txt">鏁欒偛缁忓巻</span>' +
                            '</div>' +
                            '<div class="timeItem-cont">'+
                            '<div class="list-box">'+ eduList.join('')+
                            '</div>'+
                            '</div>'+
                            '</div>'+
                            '</div>');
                    } else if (modalList.JobinfoClass){
                        cvJob = modalList.JobinfoClass;
                        for (var t = 0; t < cvJob.length; t++) {
                            var jTime = '',gongsi = '';
                            if((cvJob[t].dSDate+cvJob[t].dEDate) != '') jTime = '<span class="module-time">'+cvJob[t].dSDate+cvJob[t].dEDate+'</span>';
                            if(cvJob[t].sCompany != '') gongsi = '<span class="module-situation">'+cvJob[t].sCompany+'</span>';
                            jobList.push('<div class="list-cont" data-nJid="'+cvJob[t].nJId+'">' + lxcvEdit.globalObj._toolbar +
                                '<div class="module-title clearfix">' + jTime + gongsi +
                                '<span class="module-task">'+cvJob[t].sPost+'</span>' +
                                '</div>' +
                                '<div class="module-bewrite">'+cvJob[t].sJobMemo+'</div>' +
                                '</div>');
                        };
                        var jobIsShow = '<div class="timeItem lxcv-move" id="cv_work" data-sort="'+modalList.sRModuleOrder+'">';
                        if (modalList.sRModuleDisplay == 'none') jobIsShow = '<div class="timeItem lxcv-move hidden" id="cv_work" data-sort="'+modalList.sRModuleOrder+'">';
                        diyContList.push(jobIsShow+ejtoolbar+
                            '<div class="timeItem-inner" data-noid="'+modalList.nOId+'">' +
                            '<div class="module-head" data-title="宸ヤ綔缁忓巻">' +
                            '<a class="lxcv-icon icon-gongzuojingli_1 ac"></a><span class="module-haed-txt">宸ヤ綔缁忓巻</span>' +
                            '</div>' +
                            '<div class="timeItem-cont">' +
                            '<div class="list-box">' +  jobList.join('')+
                            '</div>'+
                            '</div>'+
                            '</div>'+
                            '</div>');
                    } else {
                        diyList.push(modalList.DiyboxinfoClass);
                        diyTitle.push(modalList.sRModuleTitle);
                        lxcvEdit.globalObj._moduleTitle.push(modalList.sRModuleTitle);
                        diySort.push(modalList.sRModuleOrder);
                        diyIsShow.push(modalList.sRModuleDisplay);
                        lxcvEdit.globalObj._diyIsShow.push(modalList.sRModuleDisplay);
                        diyType.push(modalList.sBoxType);
                        lxcvEdit.globalObj._sRModule.push(modalList.sRModule);
                        cvDiy = modalList.DiyboxinfoClass, sM = modalList.sRModule;
                        if (cvDiy.length > 1) {
                            var dTime = '', diwei = '',diyHtml = '',
                                isShow = '<div class="timeItem lxcv-move diy-modal" data-sort='+modalList.sRModuleOrder+'>',
                                icon = lxcvEdit.diyicon(sM);
                            if (modalList.sRModuleDisplay == 'none') isShow = '<div class="timeItem lxcv-move diy-modal hidden" data-sort='+modalList.sRModuleOrder+'>';
                            for (var s = 0; s < cvDiy.length; s++) {
                                dTime = '<span class="module-time hidden"></span>';
                                diwei = '<span class="module-situation hidden"></span>';
                                if(cvDiy[s].sBoxPosition != '') diwei = '<span class="module-situation">'+cvDiy[s].sBoxPosition+'</span>';
                                if ((cvDiy[s].dSDate+cvDiy[s].dEDate) != '') dTime = '<span class="module-time">'+cvDiy[s].dSDate+cvDiy[s].dEDate+'</span>';
                                diyHtml += '<div class="list-cont" data-nid="'+cvDiy[s].nId+'">' + lxcvEdit.globalObj._toolbar +
                                    '<input type="hidden" class="diymodal_type" data-diytype="'+modalList.sBoxType+'">' +
                                    '<div class="module-title clearfix">' + dTime + diwei +
                                    '<span class="module-task">'+cvDiy[s].sBoxTrade+'</span>' +
                                    '</div>' +
                                    '<div class="module-bewrite">'+cvDiy[s].sBoxMemo+'</div>' +
                                    '</div>';
                            };
                            diyContList.push(isShow + lxcvEdit.globalObj._outerToolbar +
                                '<div class="timeItem-inner" data-nOId='+cvDiy[0].nOId+'>' +
                                '<div class="module-head" data-title="'+modalList.sRModuleTitle+'">' + '<a class="lxcv-icon '+icon+' ac"></a><span class="module-haed-txt">'+modalList.sRModuleTitle+'</span>' + '</div>' +
                                '<div class="timeItem-cont">' + '<div class="list-box">' + diyHtml + '</div>' + '</div>' +
                                '</div>' + '</div>');
                        } else {
                            var dTime = '', diwei = '',
                                isShow = '<div class="timeItem lxcv-move diy-modal" data-sort='+modalList.sRModuleOrder+'>',
                                icon = lxcvEdit.diyicon(sM);;
                            if (modalList.sRModuleDisplay == 'none') isShow = '<div class="timeItem lxcv-move diy-modal hidden" data-sort='+modalList.sRModuleOrder+'>';
                            if ((cvDiy[0].dSDate+cvDiy[0].dEDate) != '') dTime = '<span class="module-time">'+cvDiy[0].dSDate+cvDiy[0].dEDate+'</span>';
                            if(cvDiy[0].sBoxPosition != '') diwei = '<span class="module-situation">'+cvDiy[0].sBoxPosition+'</span>';
                            if (parseInt(modalList.sBoxType) == 0) {
                                diyContList.push( isShow + lxcvEdit.globalObj._outerToolbar +
                                    '<div class="timeItem-inner" data-nOId='+cvDiy[0].nOId+'>' +
                                    '<div class="module-head" data-title="'+modalList.sRModuleTitle+'">' +
                                    '<a class="lxcv-icon '+icon+' ac"></a><span class="module-haed-txt">'+modalList.sRModuleTitle+'</span>' +
                                    '</div>' +
                                    '<div class="timeItem-cont">' +
                                    '<div class="list-box">' +
                                    '<div class="list-cont" data-nid="'+cvDiy[0].nId+'">' + lxcvEdit.globalObj._toolbar +
                                    '<input type="hidden" class="diymodal_type" data-diytype="'+modalList.sBoxType+'">' +
                                    '<div class="module-title clearfix">' + dTime + diwei +
                                    '<span class="module-task">'+cvDiy[0].sBoxTrade+'</span>' +
                                    '</div>' +
                                    '<div class="module-bewrite">'+cvDiy[0].sBoxMemo+'</div>' +
                                    '</div>'+
                                    '</div>' +
                                    ' </div>' +
                                    '</div>' +
                                    '</div>');
                            } else {
                                isShow = '<div class="moduleItem diy-modal lxcv-move" data-sort='+modalList.sRModuleOrder+'>'
                                if (modalList.sRModuleDisplay == 'none') isShow = '<div class="moduleItem lxcv-move diy-modal hidden" data-sort='+modalList.sRModuleOrder+'>';
                                diyContList.push(isShow + lxcvEdit.globalObj._outerToolbar +
                                    '<div class="moduleItem-inner" data-nOId='+cvDiy[0].nOId+'>' +
                                    '<div class="module-head" data-title="'+modalList.sRModuleTitle+'">' +
                                    '<a class="lxcv-icon '+icon+' ac"></a><span class="module-haed-txt">'+modalList.sRModuleTitle+'</span>' +
                                    '</div>' +
                                    '<div class="moduleItem-cont">' +
                                    '<div class="list-box">' +
                                    '<div class="list-cont" data-nid="'+cvDiy[0].nId+'">' + lxcvEdit.globalObj._toolbar +
                                    '<input type="hidden" class="diymodal_type" data-diytype="'+modalList.sBoxType+'">' +
                                    '<div class="module-bewrite">' + cvDiy[0].sBoxMemo + '</div>' +
                                    '</div>' +
                                    '</div>' +
                                    ' </div>' +
                                    '</div>' +
                                    '</div>' );
                            };
                        };
                    };
                };
                $(".lxcv-modules").html(diyContList.join(''));
                $("#cv_edu").on("click",".petty-toolbar .petty-edit",function (e) {
                    e.stopPropagation();
                    var nEid = $(this).parent().parent(".list-cont").attr("data-neid");
                    $("#modal_type").attr('data-ty','cv_edu');
                    lxcvEdit.eduEdit(lxcvEdit.globalObj._cvNid,nEid)
                });
                $("#cv_work").on("click",".petty-toolbar .petty-edit",function (e) {
                    e.stopPropagation()
                    var nJid = $(this).parent().parent(".list-cont").attr("data-nJid");
                    $("#modal_type").attr('data-ty','cv_work');
                    lxcvEdit.workEdit(lxcvEdit.globalObj._cvNid,nJid);
                });
            },
            error: function () {
                lxcvEdit.remindShow('error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�+++')
            },
            complete: function () {
                lxcvEdit.fontSize(lxcvEdit.globalObj._fontSize,lxcvEdit.globalObj._cvNid);
                lxcvEdit.moduleDistance(lxcvEdit.globalObj._linehAmount,lxcvEdit.globalObj._cvNid);
            },
        });
    },
    //---鍒ゆ柇鍏冪礌鏄剧ず鐘舵€�
    isHidden: function (eventSource,triggered,otherHidden) {
        $(eventSource).click(function () {
            if(eventSource == "#endMonth") {
                if ($("#endYear").val() == "鑷充粖") {
                    return;
                };
            };
            $(otherHidden).hide();
            if (eventSource == "#openMore") {
                if ($(triggered).css("display") == "none") {
                    $("#openMore").children('span').removeClass('sanjiao').addClass('daosanjiao')
                } else {
                    $("#openMore").children('span').removeClass('daosanjiao').addClass('sanjiao')
                };
            }
            if ($(triggered).css("display") == "none") {
                $(triggered).show();
            } else {
                $(triggered).hide();
            };
        });
    },
    //---瀛椾綋澶у皬--
    fontSize: function (val,nRId) {
        $(".lxcv-container").css("font-size",""+val+"px");
        $( "#fonts_slider" ).slider({
            range: "max",
            min: 12,
            max: 16,
            value: val,
            step: 1,
            animate: true,
            slide: function( event, ui ) {
                $( "#fonts_amount" ).val( ui.value);
            },
            change:function(event,ui){
                $.ajax({
                    url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=resumeinfo4setedit",
                    data: {'nRId': nRId, 'sFontsize': ui.value},
                    dataType: 'jsonp',
                    type: 'get',
                    success: function (data) {
                        $(".lxcv-container").css("font-size",""+ui.value+"px");
                    },
                    error: function () {
                        lxcvEdit.remindShow('error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�');
                    },
                });
            }
        });
        $( "#fonts_amount" ).val( $( "#fonts_slider" ).slider( "value" ) );
    },
    //---妯″潡璺濈--
    moduleDistance: function (val,nRId) {
        $(".inten-inner,.moduleItem-inner,.timeItem-inner").css("padding",""+val*0.2 *100 +"px 10px");
        $( "#lineh_slider" ).slider({
            range: "max",
            value:val,
            min: 0,
            max: 1.6,
            step: 0.2,
            slide: function( event, ui ) {
                $( "#lineh_amount" ).val(ui.value);
            },
            change:function(event,ui){
                $.ajax({
                    url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=resumeinfo4setedit",
                    data: {'nRId': nRId, 'sParagraph': ui.value},
                    dataType: 'jsonp',
                    type: 'get',
                    success: function (data) {
                        $(".inten-inner,.moduleItem-inner,.timeItem-inner").css("padding",""+ui.value *0.2 *100 +"px 10px");
                    },
                    error: function () {
                        lxcvEdit.remindShow('error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�');
                    },
                });
            }
        });
        $( "#lineh_amount" ).val( $( "#lineh_slider" ).slider( "value" ) );
    },
    //---鏇存崲妯℃澘--
    changeTpl: function () {
        var keshi = $(window).height()-180;
        $("#cueModalLabel").css({"font-size":"18px","font-weight":"bold"}).html("妯℃澘鍒囨崲");
        $("#cueModal .modal-dialog").css({"margin":"60px 0 0 160px","width":"750px"});
        $("#cueModal .modal-body").addClass("lx-scrollbar changeTpl").css({"overflow-y":"auto","max-height":keshi+"px","padding":"0","margin":"20px 20px 20px 30px"});
        $("#cueModal .modal-footer").hide();                                                                                  //---'15_9','5_2','8_13','13_3','14_20',
        var tplList = ['<p class="lxcue al">閫夋嫨妯℃澘鍚庯紝鍙湪瀵艰埅鏍忊€�<span style="color: red">涓婚棰滆壊</span>鈥濅腑閫夋嫨浣犳洿鍔犲枩娆㈢殑妯℃澘棰滆壊锛屼笌鍚堥€傜殑瀛椾綋澶у皬銆�</p>'],
            tpl = ['15_9','14_20','13_3','12_15','11_9','8_13','9_14','5_2','2_23','10_19','1_1','3_6','6_18','7_8','4_4'],
            cvName = ['鐜颁唬鍟嗗姟','绠€鍗曞敮缇�','鏂伴澶ф皵','瀛﹂櫌椋庢牸','缁忓吀鍟嗗姟','绠€绾﹀ぇ鏂�','瀛︽湳椋庢牸','娓呮柊绱犻泤','娓呮柊绠€绾�','鐜颁唬鍒涙柊','澶ф皵瀹炵敤','缇庤澶ф柟','鏃跺皻涓€�','鏋佺畝涓讳箟','鏂囪壓澶嶅彜'];
        for(var i = 0; i < tpl.length; i++) {
            tplList.push(' <div class="item">' +
                '<div class="iteminer">' +
                '<img class="itemimg" src="template3/img/tpl'+tpl[i]+'.png" alt="">' +
                '<div class="item-cover">' +
                '<div class="coverIner">' +
                '<div class="bg"></div>' +
                '<div class="udetpl" data-tId="'+tpl[i]+'">浣跨敤</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="cv_name ac">'+cvName[i]+'</div>' +
                '<div class="total ac">' +
                '<i class="icon-gerenxinxi"></i>' +
                // '<span style="color: #ff7561">6666</span><span>浜哄凡浣跨敤</span>' +
                '</div>' +
                '</div>');
        }
        $("#cueModal").modal("show");
        $("#cueModal .modal-body").html(tplList.join("")).removeClass("addLoading");
        $('.udetpl').click(function () {
            var T = $(this).attr('data-tId');
            lxcvEdit.changeTplAjax(lxcvEdit.globalObj._cvNid,T)
            $("#cueModal").modal('hide');
        });
    },
    //---鍒囨崲棰滆壊--
    changeColor: function (_this) {
        _this.addClass("icon-duigou").css({"border":"1px solid #000"});
        _this.siblings().removeClass("icon-duigou").css({"border":"none"});
        var T =$("#tplNum").attr('href').split('/').pop().split('_')[0].substring(3)+'_'+_this.index();
        lxcvEdit.changeTplAjax(lxcvEdit.globalObj._cvNid,T);
    },
    //---鏇存崲妯℃澘ajax
    changeTplAjax: function (nRId,T) {
        lxcvEdit.globalObj._tplNum = T;
        var fileT = T.split('_')[0];
        $("#tplNum").attr('href','template3/css/t'+fileT+'/tpl'+T+'.css');
        $.ajax({
            url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=resumeinfo4setedit",
            data: {'nRId': nRId, 'sTemplate': T},
            dataType: 'jsonp',
            type: 'get',
            success: function (data) {
                if (data == 0) {
                    var index = T.split('_')[1];
                    $(".color_list li").html('').css({"border":"none"}).removeClass("icon-duigou");
                    $(".color_list li").html('').eq(index).addClass("icon-duigou").css({"border":"1px solid #000"});
                };
            },
            error: function () {
                lxcvEdit.remindShow('error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�');
            },
        });
    },
    //---妯″潡绠＄悊--
    moduleManage: function () {
        $("#cueModalLabel").css({"font-size":"18px","font-weight":"bold","text-align":"left"}).html("妯″潡绠＄悊");
        $("#cueModal .modal-dialog").css({"margin":"60px auto","width":"522px"});
        $("#cueModal .modal-body").css({"height":"auto","padding":"0","margin":"0","max-height":"none"}).addClass("ac");
        $("#cueModal .modal-footer").hide();
        $("#cueModal").modal("show");
        var modalList = {
            show: [],
            hide: []
        };
        var sRModule = [],moduleTitle = [];
        var mShow = modalList.show,mHide = modalList.hide,showList = [], hideList =[],diyIsShow =[];
        if ($("#cv_photo").css('display') == 'none') {
            modalList.hide.push('涓汉澶村儚');
        } else {
            modalList.show.push('涓汉澶村儚');
        };
        if ($("#cv_inten").hasClass('hidden')) {
            modalList.hide.push('姹傝亴鎰忓悜');
        } else {
            modalList.show.push('姹傝亴鎰忓悜');
        };
        if ($("#cv_edu").hasClass('hidden')) {
            modalList.hide.push('鏁欒偛缁忓巻');
        } else {
            modalList.show.push('鏁欒偛缁忓巻');
        };
        if ($("#cv_work").hasClass('hidden')) {
            modalList.hide.push('宸ヤ綔缁忓巻');
        } else {
            modalList.show.push('宸ヤ綔缁忓巻');
        };
        $.ajax({
            url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=resumedetailslistload",
            data: {'nRId': lxcvEdit.globalObj._cvNid},
            type: "get",
            dataType: "jsonp",
            success: function (data) {
                var datas = data.ResumeDetailsList;
                for (var i = 0; i < datas.length; i++) {
                    var mType = datas[i];
                    if (mType.DiyboxinfoClass) {
                        sRModule.push(mType.sRModule);
                        diyIsShow.push(mType.sRModuleDisplay)
                        moduleTitle.push(mType.sRModuleTitle)
                        if (mType.sRModuleDisplay == 'none') {
                            modalList.hide.push(mType.sRModuleTitle);
                        } else {
                            modalList.show.push(mType.sRModuleTitle);
                        }
                    }
                }
                var zhiyuan = sRModule.indexOf('蹇楁効鑰呯粡鍘�');
                var xiangmu = sRModule.indexOf('椤圭洰缁忛獙');
                var shixi = sRModule.indexOf('瀹炰範缁忛獙');
                var xingqu = sRModule.indexOf('鍏磋叮鐖卞ソ');
                var jiangxiang = sRModule.indexOf('濂栭」鑽ｈ獕');
                var jineng = sRModule.indexOf('鎶€鑳界壒闀�');
                var pingjia = sRModule.indexOf('鑷垜璇勪环');
                isModal(zhiyuan,'蹇楁効鑰呯粡鍘�');
                isModal(xiangmu,'椤圭洰缁忛獙');
                isModal(shixi,'瀹炰範缁忛獙');
                isModal(xingqu,'鍏磋叮鐖卞ソ');
                isModal(jiangxiang,'濂栭」鑽ｈ獕');
                isModal(jineng,'鎶€鑳界壒闀�');
                isModal(pingjia,'鑷垜璇勪环');
                function isModal(name,title) {
                    if(name != -1) {
                        if (diyIsShow[name] == 'none') {
                            var arr6  = modalList.hide.indexOf(moduleTitle[name])
                            if (arr6 == -1) modalList.hide.push(moduleTitle[name]);
                        } else {
                            var arr6  = modalList.show.indexOf(moduleTitle[name])
                            if (arr6 == -1) modalList.show.push(moduleTitle[name]);
                        };
                    } else {
                        modalList.hide.push(title);
                    };
                };
                for (var r = 0; r < mShow.length; r++) {
                    showList.push('<li class="tool-list">' +
                        '<span>'+mShow[r]+'</span>' +
                        '<s class="icon-jian_2 tsj"></s>' +
                        '</li>');
                };
                for (var q = 0; q < mHide.length; q++) {
                    hideList.push('<li class="tool-list">' +
                        '<span>'+mHide[q]+'</span>' +
                        '<s class="icon-jia_2 tsj"></s>' +
                        '</li>');
                }
                $("#cueModal .modal-body").html('<div id="show_module" class="fl">' +
                    '<p>宸查€夋ā鍧�</p>' +
                    '<ul>' +
                    '<li class="tool-list">' +  '<span>鍩烘湰淇℃伅</span>' + '<s class="bitian">蹇呭～</s>' + '</li>' + showList.join('')+
                    '</ul>' +
                    '</div>' +
                    '<div id="hide_module" class="fr">' +
                    '<p>娣诲姞妯″潡</p>' +
                    '<ul>' + hideList.join('') +' </ul>' +
                    '</div>').removeClass("addLoading");
            }
        });
    },
    //---闅愯棌妯″潡--
    hideModule: function (_this,nid) {
        var aL = arguments.length;
        if (aL == 1) {
            _this.removeClass('icon-jian_2').addClass('icon-jia_2');
            var beDom = _this.parent().html(),modalTxt = _this.siblings('span').text();
            if (modalTxt == '鏁欒偛鑳屾櫙') modalTxt = '鏁欒偛缁忓巻';
            $("#hide_module ul").append('<li>'+beDom+'</li>');
            _this.parent().remove();
            var nOId = $(".module-head[data-title="+modalTxt+"]").parent().attr('data-noid');
            if(modalTxt == '涓汉澶村儚') {
                lxcvEdit.photoEdit(lxcvEdit.globalObj._cvNid,'0');
            } else if (modalTxt == '姹傝亴鎰忓悜') {
                lxcvEdit.intenIsShow('none');
            } else {
                $.ajax({
                    url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=diyboxedit",
                    data: {nRId: lxcvEdit.globalObj._cvNid, nId: nOId, sRModuleDisplay: 'none'},
                    dataType: 'jsonp',
                    type: 'get',
                    success: function () {
                        lxcvEdit.getCV(lxcvEdit.globalObj._cvNid);
                    },
                });
            };
        }  else {
            lxcvEdit.cvConfirm({
                title: '闅愯棌妯″潡',
                content: '纭畾闅愯棌璇ユā鍧楀悧锛熼殣钘忓悗鍙互鍦ㄦā鍧楃鐞嗕腑鎭㈠銆�',
                content_html: "",
                ok: "纭畾",
                cancel: "鍙栨秷",
                onOk: function () {
                    $("body").removeClass("suggestModal");
                    $("body").removeClass("modal-open");
                    $.ajax({
                        url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=diyboxedit",
                        data: {nRId: lxcvEdit.globalObj._cvNid, nId: nid, sRModuleDisplay: 'none'},
                        dataType: 'jsonp',
                        type: 'get',
                        success: function () {
                            $('#cueModal').modal('hide');
                            $("#"+_this.parent().parent().attr('id')+"").addClass('hidden');
                        },
                    });
                },
                onCancel: function () {
                    if (aL == 4) {
                        $("body").addClass("suggestModal");
                        $("body").addClass("modal-open");
                    } else {
                        $("body").removeClass("suggestModal");
                        $("body").removeClass("modal-open");
                    };
                },
            });
        };
    },
    //---鏄剧ず妯″潡--
    showModule: function (_this) {
        _this.removeClass('icon-jia_2').addClass('icon-jian_2');
        var modalTxt = _this.siblings('span').text(), beDom = _this.parent().html();
        if (modalTxt == '鏁欒偛鑳屾櫙') modalTxt = '鏁欒偛缁忓巻';
        $("#show_module ul").append('<li>'+beDom+'</li>');
        _this.parent().remove();
        var nOId = $(".module-head[data-title="+modalTxt+"]").parent().attr('data-noid');
        if(modalTxt == '涓汉澶村儚') {
            lxcvEdit.photoEdit(lxcvEdit.globalObj._cvNid,'3');
            $("#cv_photo").show().removeClass('hidden');
            $("#cv_photo").css("height","190px");
            $('.lxcv-head .photo-selector span').eq(3).addClass('check');
            $(".photo-cont").css({"border-radius":"0","height":"158px"});
        } else if (modalTxt == '姹傝亴鎰忓悜') {
            lxcvEdit.intenIsShow('block');
        } else {
            if (nOId) {
                $.ajax({
                    url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=diyboxedit",
                    data: {nRId: lxcvEdit.globalObj._cvNid, nId: nOId, sRModuleDisplay: 'block'},
                    dataType: 'jsonp',
                    type: 'get',
                    success: function () {
                        lxcvEdit.getCV(lxcvEdit.globalObj._cvNid)
                        // $('#cueModal').modal('hide');
                        // window.location.reload();
                    },
                })
            } else {
                if (modalTxt == '椤圭洰缁忛獙' || modalTxt == '蹇楁効鑰呯粡鍘�' || modalTxt == '瀹炰範缁忛獙') {
                    lxcvEdit.diyaddajax(lxcvEdit.globalObj._cvNid,'0',modalTxt,'ad');
                } else {
                    lxcvEdit.diyaddajax(lxcvEdit.globalObj._cvNid,'1',modalTxt,'ad');
                }
            };
        };
    },
    //---鎴戠殑绠€鍘�---
    myCv: function (nUserId) {
        var arLengtn = arguments.length;
        if (arLengtn != 4) {
            $("#cueModal").modal("show");
            var keshi = $(window).height()-180, cvList = [];
            $("#cueModalLabel").css({"font-size":"18px","font-weight":"bold"}).html("鎴戠殑绠€鍘�");
            $("#cueModal .modal-dialog").css({"margin":"60px 0 0 160px","width":"630px"});
            $("#cueModal .modal-body").addClass("lx-scrollbar").css({"overflow-y":"auto","max-height":keshi+"px","padding":"0","margin":"20px 20px 20px 30px"}).removeClass('changeTpl');
            $("#cueModal .modal-footer").hide();
            cvList.push('<p></p><div class="item"><div class="iteminer"><div id="new_resume" class="icon-tianjia_1"></div></div></div>');
        };
        $.ajax({
            url: "http://www.capabcv.com/resumev2/Resumev2.ashx?resumeaction=resumeallinfoloadv2",
            data: {},
            type: "get",
            dataType: "jsonp",
            success: function (data) {
                if (data ==1 ) {
                    $(".lxcv-container,.addDefind").hide();
                    $(".cv-null").show();
                    $("#cueModal .modal-body").html(cvList);
                } else {
                    $(".lxcv-container,.addDefind").show();
                    $(".cv-null").hide();
                    var datas = data.resumeinfo;
                    if (arLengtn == 2) {
                        lxcvEdit.globalObj._cvNid = datas[0].nId;
                        lxcvEdit.getCV(lxcvEdit.globalObj._cvNid)
                    };
                    if( arLengtn == 4) {
                        lxcvEdit.globalObj._cvNid = datas[0].nId;
                        return lxcvEdit.getCV(lxcvEdit.globalObj._cvNid);
                    }
                    for(var i = 0; i < datas.length; i++) {
                        var jiaobiao = '<div class="iteminer">';
                        if (datas[i].nId == lxcvEdit.globalObj._cvNid) {
                            jiaobiao = '<div class="iteminer jiaobiao">';
                        }
                        cvList.push('<div class="item">' + jiaobiao +
                            '<img class="itemimg" src="../Images/ResumeV3/onlineCv/mycv-img.png" alt="">' +
                            '<div class="item-cover">' +
                            '<div class="coverIner">' +
                            '<div class="bg"></div>' +
                            '<div class="edit-cv" data-nId="'+datas[i].nId+'">缂栬緫</div>' +
                            '<div class="remove-cv">鍒犻櫎</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="cv_name ac">'+datas[i].sRTitle+'</div>' +
                            '<div class="total ac">' +
                            '<i class="icon-gerenxinxi">&nbsp;</i>' +
                            '<span>'+datas[i].dtIntime+'</span>' +
                            '</div>' +
                            '</div>' +
                            '</div>');
                    };
                    $("#cueModal .modal-body").html(cvList.join("")).addClass("addLoading");
                };
                $(".edit-cv").click(function () {
                    lxcvEdit.globalObj._sRModule = [];
                    lxcvEdit.globalObj._moduleTitle = [];
                    lxcvEdit.globalObj._diyIsShow = [];
                    lxcvEdit.globalObj._cvNid = $(this).attr('data-nId');
                    $("#cueModal").modal("hide");
                    lxcvEdit.getCV(lxcvEdit.globalObj._cvNid);
                });
                $(".remove-cv").click(function () {
                    lxcvEdit.deleteCv($(this).siblings(".edit-cv").attr('data-nId'));
                });
                $("#new_resume").click(function () {
                    lxcvEdit.newResume();
                });
            },
            error: function () {
                lxcvEdit.remindShow("error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯!");
            },
        })
    },
    //--鍒涘缓绠€鍘�---
    newResume: function () {
        var id = '';
        $.ajax({
            url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=resumeadd",
            data: {sTemplate: lxcvEdit.globalObj._tplNum},
            type: "get",
            dataType: "jsonp",
            beforeSend: function () {
                $(".addLoading p").show().text('姝ｅ湪鍒涘缓');
            },
            success: function (data) {
                id = data;
                $(".addLoading p").hide();
                $("#cueModal .modal-body").removeClass("addLoading");
            },
            complete: function () {
                lxcvEdit.globalObj._sRModule = [];
                lxcvEdit.globalObj._moduleTitle = [];
                lxcvEdit.globalObj._diyIsShow = [];
                lxcvEdit.myCv()
                lxcvEdit.getCV(id);
                lxcvEdit.globalObj._cvNid = id;
                $(".cv-null .btn-confirm").text('绔嬪嵆鍒涘缓')
            },
            error: function () {
                lxcvEdit.remindShow("error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯!");
            }
        })
    },
    //---绠€鍘嗚缃�--
    cvEdit: function () {
        $("#cueModalLabel").css({"font-size":"18px","font-weight":"bold","text-align":"left"}).html("绠€鍘嗚缃�");
        $("#cueModal .modal-dialog").css({"margin":"60px auto","width":"480px"});
        $("#cueModal .modal-body").css({"height":"auto","padding":"0","margin":"0","max-height":"none"}).addClass("ac");
        $("#cueModal .modal-footer").hide();
        $("#cueModal").modal("show");
        var cv_sSecret = '',iClass='';
        if (lxcvEdit.globalObj._cvSecret == "yes" || lxcvEdit.globalObj._cvSecret == '') {
            cv_sSecret = '鍏紑鏌ョ湅';
            cv_sSecret ="鎺ㄨ崘&nbsp;&nbsp;"+"<em style='color: #ccc;'>浼佷笟鍙奌R鍙互鎼滅储鍒版偍骞剁湅鍒扮畝鍘嗗叏閮ㄥ唴瀹�</em>";
            iClass = 'icon-gongkai_2';
        } else {
            cv_sSecret = "涓嶆帹鑽�&nbsp;&nbsp;"+"<em style='color: #ccc;'>鎮ㄧ殑涓汉淇℃伅鍜岀畝鍘嗗彧瀵硅嚜宸卞叕寮€</em>";
            iClass = 'icon-yinsi_2';
        };
        $("#cueModal .modal-body").html('<ul class=cvedit-module>' +
            '<li>' +
            '<em>绠€鍘嗙紪鍙凤細</em><span id="serial_number">'+lxcvEdit.globalObj._upDateTime+'</span>' +
            '</li>' +
            '<li>' +
            '<em>绠€鍘嗗悕绉帮細</em><span id="cv_name">'+lxcvEdit.globalObj._cvTitle+'</span>&nbsp;<i class="icon-bianji_1" id="cv_name_edit"></i>' +
            '</li>' +
            '<li>' +
            '<em>闅愮璁剧疆锛�</em><span id="privacy">'+cv_sSecret+'</span>&nbsp;<i class='+iClass+' id="privacy_edit"></i>' +
            '</li>' +
            '</ul>');
        $("#cv_name_edit").click(function () {
            $("#cv_name").attr("contenteditable","true").focus().css({"border":"1px solid #999","padding":"0 5px"});
        })
        $("#cv_name").blur(function () {
            $(this).removeAttr("contenteditable").css({"border":"none","padding":"0"});
            var sRTitle = $(this).text();
            $.ajax({
                url: 'http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=resumeinfo4setedit',
                data: {nRId: lxcvEdit.globalObj._cvNid, sRTitle: sRTitle},
                type: "get",
                dataType: "jsonp",
                success: function (data) {
                    $("#cv_name").text(sRTitle);
                    lxcvEdit.globalObj._cvTitle = sRTitle;
                },
                error: function () {
                    lxcvEdit.remindShow('error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�');
                },
            });
        });
        lxcvEdit.deleteStyle($("#cv_name"));
        $("#privacy_edit").click(function () {
            var sSecret = '';
            if (cv_sSecret == '鍏紑鏌ョ湅') {
                $("#privacy").html("涓嶆帹鑽�&nbsp;&nbsp;"+"<em style='color: #ccc;'>鎮ㄧ殑涓汉淇℃伅鍜岀畝鍘嗗彧瀵硅嚜宸卞叕寮€</em>");
                cv_sSecret = '浠呰嚜宸卞彲瑙�';
                sSecret = 'no';
                $(this).removeClass('icon-gongkai_2').addClass('icon-yinsi_2');
            } else {
                $("#privacy").html("鎺ㄨ崘&nbsp;&nbsp;"+"<em style='color: #ccc;'>浼佷笟鍙奌R鍙互鎼滅储鍒版偍骞剁湅鍒扮畝鍘嗗叏閮ㄥ唴瀹�</em>");
                cv_sSecret = '鍏紑鏌ョ湅';
                sSecret = 'yes';
                $(this).removeClass('icon-yinsi_2').addClass('icon-gongkai_2');
            };
            $.ajax({
                url: 'http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=resumeinfo4setedit',
                data: {nRId: lxcvEdit.globalObj._cvNid, sSecret: sSecret, sRTitle: lxcvEdit.globalObj._cvTitle},
                type: "get",
                dataType: "jsonp",
                success: function (data) {
                    lxcvEdit.globalObj._cvSecret = sSecret;
                    if (sSecret == "yes") {
                        $("#privacy").html("鎺ㄨ崘&nbsp;&nbsp;"+"<em style='color: #ccc;'>浼佷笟鍙奌R鍙互鎼滅储鍒版偍骞剁湅鍒扮畝鍘嗗叏閮ㄥ唴瀹�</em>");
                        // $("#privacy").text('鍏紑鏌ョ湅');
                    } else {
                        $("#privacy").html("涓嶆帹鑽�&nbsp;&nbsp;"+"<em style='color: #ccc;'>鎮ㄧ殑涓汉淇℃伅鍜岀畝鍘嗗彧瀵硅嚜宸卞叕寮€</em>");
                    };
                },
                error: function () {
                    lxcvEdit.remindShow('error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�')
                },
            })
        })
    },
    //---澶村儚瑁佸壀涓婁紶
    photoUpLode: function () {
        $(".photo-cont,#againUpLoad").click(function (e) {
            $("#photoModal").modal("show");
            $("#imgBox").append(' <p>璇蜂笂浼犲ぇ灏�1M浠ュ唴鐨凧PG銆丳NG鍥剧墖</p>');
            $("#headPhoto").click();
        });
        var $image = $('#imgBox img'),
            options = {
                aspectRatio: 3 / 4,
            };
        $image.cropper(options);
        var $inputImage = $('#headPhoto'),
            URL = window.URL || window.webkitURL,
            blobURL;
        var picdata = "";
        if (URL) {
            $('#headPhoto').on('change', function() {
                picdata = $(this).data();
                var files = this.files,
                    file;
                if (files && files.length) {
                    file = files[0];
                    var files_type = file.type.split('/')[0];
                    if (files_type != 'image') {
                        lxcvEdit.remindShow("error, &nbsp;鏍煎紡閿欒锛岃涓婁紶JPG銆丳NG鍥剧墖");
                        $inputImage.val('');
                        return;
                    }
                    if( file.size > 1048576 ){
                        lxcvEdit.remindShow("error, &nbsp;鍥剧墖杩囧ぇ锛岃涓婁紶澶у皬涓�1M浠ュ唴鐨勫浘鐗�");
                        // $(this).modalWindow({
                        //     "text" : "鍥剧墖杩囧ぇ锛岃涓婁紶澶у皬涓�1M浠ュ唴鐨勫浘鐗�",
                        //     "type" : "error"
                        // })
                        $inputImage.val('');
                        return;
                    }
                    $("#imgBox > img").siblings().remove();
                    blobURL = URL.createObjectURL(file);
                    $image.one('built.cropper', function () {
                        URL.revokeObjectURL(blobURL); // Revoke when load complete
                    }).cropper('reset', true).cropper('replace', blobURL);
                    $inputImage.val('');
                }else{
                    return;
                }
            });
        } else {
            // $inputImage.parent().remove();
        }

        // 纭瑁佸壀
        $('#photoOk').unbind();
        $('#photoOk').on('click', function() {
            if(!$('.cropper-view-box > img').attr("src")){
                lxcvEdit.remindShow("error, &nbsp;鎮ㄨ繕鏈笂浼犺瑁佸壀寰楀ご鍍�");
                // $(this).modalWindow({
                //     "text" : "鎮ㄨ繕鏈笂浼犺瑁佸壀寰楀ご鍍�",
                //     "type" : "error"
                // })
                return;
            }
            $("#photoModal").modal("hide");
            var result = $image.cropper("getCroppedCanvas", picdata.option);
            $('#imgBox > img').attr("src", "");
            $('#imgBox > img').cropper('destroy');
            $(".photo-pre > img").attr('src', result.toDataURL("image/png"));

            // $.ajax({
            //     url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=picsavephoto",
            //     data: {'Base64Photo': result.toDataURL("image/png")},
            //     dataType: 'jsonp',
            //     type: 'get',
            // 	success: function(data) {
            //         alert(data);
            // 		$(".photo-pre img").attr('src', result);
            // 		$(".operate-btn img").attr('src', result);
            // 	},
            // 	error: function() {
            //         lxcvEdit.remindShow("缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛涗笂浼犲ご鍍�");
            // 	},
            // });
            $.ajax({
                url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=picsavephotopost",
                data: {'Base64Photo': result.toDataURL("image/png")},
                type: 'post',
                success: function(data) {
                    $(".photo-pre img").attr('src', data);
                },
                error: function() {
                    lxcvEdit.remindShow("缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛涗笂浼犲ご鍍�");
                },
            });
        })
    },
    //---澶村儚璁剧疆---
    photoEdit: function (nRId,sRPhotoStyle) {
        $.ajax({
            url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=resumeinfo4setedit",
            data: {'nRId': nRId, 'sRPhotoStyle': sRPhotoStyle},
            dataType: 'jsonp',
            type: 'get',
            success: function (data) {
                if (sRPhotoStyle == '0') {
                    $(".lxcv-photo").hide();
                }
            },
            error: function () {
                lxcvEdit.remindShow('error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�');
            },
        });
    },
    //---鑾峰彇涓汉淇℃伅
    getInfo: function (data) {
        //---鍚嶅瓧
        if(data.sName) {
            $("#infoName").val(data.sName);
            $("#lxcvName").text(data.sName);
        } else {
            $("#infoName").val('');
            $("#lxcvName").text('浣犵殑鍚嶅瓧');
        };
        $("#lxcv_inShort").text(data.sProfile);
        $("#infoOne").val(data.sProfile)
        if(!data.sRSex && !data.sRBrith && !data.sHighestEdu && !data.sInPosition && !data.sWorkYear && !data.sREmail && !data.sRTel && !data.sNationality && !data.sRParty && !data.sMarryed) {
            $("#sRSex .info-style").text("鎬у埆");
            $("#sRBrith .info-style").text("鍑虹敓鏃ユ湡");
            $("#sNationality .info-style").text("姘戞棌");
            $("#sHighestEdu .info-style").text("瀛﹀巻");
            $("#sMarryed .info-style").text("濠氬Щ");
            $("#sRParty,#sInPosition,#sWorkYear,#sRTel,#sREmail").hide();
            $(".info-list").removeClass('hStyle');
        } else {
            $(".info-list").addClass('hStyle');
            var Year = data.sRBrith.substring(0,4), Month = data.sRBrith.substring(4);
            //---骞撮緞
            if (data.sRBrith) {
                $("#infoYear").val(Year);
                $("#infoMonth").val(Month);
                var sRBrith = Year + '-' + Month;
                $("#sRBrith .info-style").text(sRBrith);
                $("#sRBrith").css('display','inline-block');
            } else {
                $("#sRBrith").hide();
            };
            //---鎬у埆
            if(data.sRSex) {
                $("#ifonSex").val(data.sRSex);
                $("#sRSex .info-style").text(data.sRSex);
                $("#sRSex").css('display','inline-block');
            } else {
                $("#ifonSex").val('');
                $("#sRSex").hide();
            };
            //---姘戞棌
            if (data.sNationality) {
                $("#sNationality .info-style").text(data.sNationality);
                $("#infoNation").val(data.sNationality);
                $("#sNationality").css('display','inline-block');
            } else {
                $("#sNationality").hide();
                $("#infoNation").val('');
            };
            //---瀛﹀巻
            if (data.sHighestEdu) {
                $("#sHighestEdu .info-style").text(data.sHighestEdu);
                $("#education").val(data.sHighestEdu);
                $("#sHighestEdu").css('display','inline-block');
            } else {
                $("#sHighestEdu").hide();
                $("#education").val('');
            };
            //---濠氬Щ
            if (data.sMarryed) {
                $("#sMarryed .info-style").text(data.sMarryed);
                $("#infoMarry").val(data.sMarryed);
                $("#sMarryed").css('display','inline-block');
            } else {
                $("#sMarryed").hide();
                $("#infoMarry").val('');
            };
            //---鏀挎不闈㈣矊
            if (data.sRParty) {
                $("#sRParty .info-style").text(data.sRParty);
                $("#ifonStatus").val(data.sRParty);
                $("#sRParty").css('display','inline-block');
            } else {
                $("#sRParty").hide();
                $("#ifonStatus").val('');
            };
            //---鎵€鍦ㄥ煄甯�
            if (data.sInPosition) {
                $("#sInPosition .info-style").text(data.sInPosition);
                $("#cityChoice").val(data.sInPosition);
                $("#sInPosition").css('display','inline-block');
            } else {
                $("#sInPosition").hide();
                $("#cityChoice").val('');
            };
            //---宸ヤ綔骞撮檺
            if (data.sWorkYear) {
                $("#sWorkYear .info-style").text(data.sWorkYear);
                $("#jobYear").val(data.sWorkYear);
                $("#sWorkYear").css('display','inline-block');
            } else {
                $("#jobYear").val('');
                $("#sWorkYear").hide();
            };
            //---鐢佃瘽
            if (data.sRTel) {
                $("#sRTel .info-style").text(data.sRTel);
                $("#infoPhone").val(data.sRTel);
                $("#sRTel").css('display','inline-block');
            } else {
                $("#infoPhone").val('');
                $("#sRTel").hide();
            };
            //---閭
            if (data.sREmail) {
                $("#sREmail .info-style").text(data.sREmail);
                $("#infoEmail").val(data.sREmail);
                $("#sREmail").css('display','inline-block');
            } else {
                $("#sREmail").hide();
                $("#infoEmail").val('');
            };
        };
    },
    //---淇敼涓汉淇℃伅
    editInfo: function (nid) {
        var sName = $("#infoName").val(),sRSex = $("#ifonSex").val(),sHighestEdu = $("#education").val(),
            sInPosition = $("#cityChoice").val(),sWorkYear = $("#jobYear").val(),sRTel = $("#infoPhone").val(),
            sREmail = $("#infoEmail").val(),sNationality = $("#infoNation").val(),sRParty = $("#ifonStatus").val(),
            sMarryed = $("#infoMarry").val(),sProfile = $("#infoOne").val(),sRBrith = $("#infoYear").val()+$("#infoMonth").val();
        if(!sRBrith) sRBrith = 'isnull';
        //---鎵嬫満
        if (!sRTel) {
            sRTel = 'isnull';
        };
        //---閭
        if (!sREmail) {
            sREmail = 'isnull';
        };
        if ($(".phoneItem .phoneCue").css('display') == 'block' || $(".emailItem .mailCue").css('display') == 'block') return;
        if (!sName) sName = '浣犵殑鍚嶅瓧';
        if (sRSex == '涓嶅～鍐�' || sRSex == '') sRSex = 'isnull';
        if (!sHighestEdu) sHighestEdu = 'isnull';
        if (!sInPosition) sInPosition ='isnull';
        if (!sWorkYear) sWorkYear = 'isnull';
        if (!sNationality) sNationality = 'isnull';
        if (sRParty == '涓嶅～鍐�' || sRParty == '') sRParty = 'isnull';
        if (sMarryed == '涓嶅～鍐�' || sMarryed == '') sMarryed = 'isnull';
        if(!sProfile) sProfile = 'isnull';
        $("#infoModal").modal('hide');
        $.ajax({
            url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=resumeinfo4pmedit",
            data: {nRId: nid, sName: sName, sRBrith: sRBrith, sRSex: sRSex, sHighestEdu: sHighestEdu,
                sInPosition: sInPosition, sWorkYear: sWorkYear, sRTel: sRTel, sREmail: sREmail,
                sNationality: sNationality, sRParty: sRParty, sMarryed: sMarryed, sProfile: sProfile},
            type: "get",
            dataType: "jsonp",
            success: function (data) {
                $.ajax({
                    url: 'http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=resumepmload',
                    data: {nRId: lxcvEdit.globalObj._cvNid},
                    type: "get",
                    dataType: "jsonp",
                    success: function (data) {
                        lxcvEdit.getInfo(data);
                    },
                });
            },
            error: function () {
                lxcvEdit.remindShow("error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�")
            },
        });
    },
    //---鍒犻櫎涓汉淇℃伅
    deleteInfo: function (nRId,_this) {
        var parendId = _this.parent().attr("id"),sName = $('#lxcvName').text();
        var obj = {
            nRId: nRId,
            sName: sName,
        };
        obj[parendId]='isnull';
        $("#"+parendId+"").hide();
        $.ajax({
            url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=resumeinfo4pmedit",
            data: obj,
            type: "get",
            dataType: "jsonp",
            success: function (data) {},
            error: function () {
                lxcvEdit.remindShow('error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�');
            },
        });
    },
    //---鑾峰彇姹傝亴鎰忓悜
    getInten: function (data) {
        if (!data.sPosition && !data.sJobType && ! data.sWorkPosition && !data.sSalary && !data.sEntryDate) {
            $("#sPosition").show().children('span').text("鎰忓悜宀椾綅");
            $("#sJobType").show().children('span').text("鑱屼笟绫诲瀷");
            $("#sWorkPosition").show().children('span').text("鎰忓悜鍩庡競");
            $("#sSalary").show().children('span').text("钖祫瑕佹眰");
            $("#sEntryDate").show().children('span').text("鍏ヨ亴鏃堕棿");
            $(".inten-cont li").removeClass('hStyle');
        } else {
            $(".inten-cont li").addClass('hStyle');
            //---鎰忓悜宀椾綅
            if (data.sPosition) {
                $("#sPosition span").text(data.sPosition);
                $("#jobFunctionEdit").val(data.sPosition);
                $("#sPosition").show();
            } else {
                $("#sPosition").hide();
                $("#jobFunctionEdit").val('');
            };
            //---宸ヤ綔绫诲瀷
            if (data.sJobType) {
                $("#sJobType span").text(data.sJobType);
                $("#ifonWorkType").val(data.sJobType);
                $("#sJobType").show();
                if (data.sJobType == '鍏艰亴') {
                    $(".modal-item .monthly").hide();
                    $(".modal-item .daily").show();
                    if (data.sSalary) {
                        if (data.sSalary == '钖祫闈㈣') {
                            $("#perDiem").val('').attr("disabled","disabled");
                            $(".negotiable input").attr("checked","checked");
                            $("#sSalary").show();
                            $("#sSalary span").text(data.sSalary);
                        } else {
                            $("#perDiem").val(data.sSalary.replace(/[^\d.]/g,''));
                            $("#sSalary span").text(data.sSalary);
                            $("#sSalary").show();
                        };
                    } else {
                        $("#perDiem").val('');
                        $("#sSalary").hide();
                    }
                } else {
                    if (data.sSalary) {
                        if (data.sSalary == '钖祫闈㈣') {
                            $("#jobMinSalary").val('').attr("disabled","disabled");
                            $("#jobMaxSalary").val('').attr("disabled","disabled");
                            $(".negotiable input").attr("checked","checked");
                            $("#sSalary span").text(data.sSalary);
                            $("#sSalary").show();
                        } else {
                            var _i = data.sSalary.indexOf('-');
                            if (_i == -1) {
                                $("#jobMinSalary").val(data.sSalary.split('-')[0].replace(/[^\d.]/g,''));
                                $("#sSalary span").text(data.sSalary);
                                $("#sSalary").show();
                            } else {
                                $("#jobMinSalary").val(data.sSalary.split('-')[0].replace(/[^\d.]/g,''));
                                $("#jobMaxSalary").val(data.sSalary.split('-')[1].replace(/[^\d.]/g,''));
                                $("#sSalary span").text(data.sSalary);
                                $("#sSalary").show();
                            }
                        };
                    } else {
                        $("#jobMinSalary").val('');
                        $("#jobMaxSalary").val('');
                        $("#sSalary").hide();
                    }
                    $(".modal-item .monthly").show();
                    $(".modal-item .daily").hide();
                };
            } else {
                $("#ifonWorkType").val('');
                $("#sJobType").hide();
                var k = data.sSalary;
                var i = k.indexOf('鍏�');
                if(i == -1) {
                    var _i = k.indexOf('-');
                    if (_i == -1) {
                        $("#jobMinSalary").val(k.split('-')[0].replace(/[^\d.]/g,''));
                        $("#sSalary span").text(k);
                        $('.daily').hide();
                        $("#sSalary,.monthly").show();
                    } else {
                        $("#jobMinSalary").val(k.split('-')[0].replace(/[^\d.]/g,''));
                        $("#jobMaxSalary").val(k.split('-')[1].replace(/[^\d.]/g,''));
                        $("#sSalary span").text(k);
                        $('.daily').hide();
                        $("#sSalary,.monthly").show();
                    }
                } else {
                    $('.monthly').hide();
                    $("#perDiem").val(data.sSalary.replace(/[^\d.]/g,''));
                    $("#sSalary span").text(data.sSalary);
                    $("#sSalary,.daily").show();
                }
            };

            //---鎰忓悜鍩庡競
            if (data.sWorkPosition) {
                $("#sWorkPosition span").text(data.sWorkPosition);
                $("#intenCity").val(data.sWorkPosition);
                $("#sWorkPosition").show();
            } else {
                $("#intenCity").val('');
                $("#sWorkPosition").hide();
            };
            //---鍏ヨ亴鏃堕棿
            if (data.sEntryDate) {
                $("#sEntryDate span").text(data.sEntryDate);
                $("#entryTime").val(data.sEntryDate);
                $("#sEntryDate").show();
            } else {
                $("#entryTime").val('');
                $("#sEntryDate").hide();
            };

        };
    },
    //---淇敼姹傝亴淇℃伅
    editInten: function (nid) {
        var sPosition = $("#jobFunctionEdit").val(),sJobType = $("#ifonWorkType").val(),
            sWorkPosition = $("#intenCity").val(),sSalary = null,sEntryDate = $("#entryTime").val(),
            jobMinSalary = parseInt($("#jobMinSalary").val()),jobMaxSalary = parseInt($("#jobMaxSalary").val());
        if ($(".moneyItem .monthly").css('display') == 'none' && !$(".salaryItem input").attr('checked')) {
            if ($("#perDiem").val()) {
                sSalary = $("#perDiem").val()+'鍏�/鏃�';
            } else {
                sSalary= 'isnull';
            }
        } else if($(".moneyItem .daily").css('display') == 'none' && !$(".salaryItem input").attr('checked')) {
            if ($("#jobMinSalary").val()+$("#jobMaxSalary").val() == '') {
                sSalary = "isnull";
            } else {
                if ($("#jobMinSalary").val() == '') {
                    sSalary = $("#jobMaxSalary").val()+'K';
                } else if ($("#jobMaxSalary").val() == '') {
                    sSalary = $("#jobMinSalary").val()+'K';
                } else {
                    sSalary = $("#jobMinSalary").val()+'K - '+$("#jobMaxSalary").val()+'K';
                }
            }
        } else {
            sSalary = '钖祫闈㈣';
        };
        if (sSalary != '钖祫闈㈣') {
            if (jobMinSalary != '' || jobMaxSalary != '') {
                if (parseFloat(jobMinSalary) > parseFloat(jobMaxSalary)) {
                    $(".salary").addClass('salary-cue');
                    return;
                } else {
                    $(".salary").removeClass('salary-cue');
                };
            };
        };
        if (sJobType == '涓嶅～鍐�') sJobType = 'isnull';
        if (sEntryDate == '涓嶅～鍐�') sEntryDate = 'isnull';
        if (sPosition == '') sPosition = 'isnull';
        $("#intenModal").modal("hide");
        $.ajax({
            url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=resumeinfo4jedit",
            data: {nRId: nid, sPosition: sPosition, sJobType: sJobType, sWorkPosition: sWorkPosition, sEntryDate: sEntryDate, sSalary: sSalary},
            type: "get",
            dataType: "jsonp",
            success: function (data) {
                $.ajax({
                    url: 'http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=resumejload',
                    data: {nRId: lxcvEdit.globalObj._cvNid},
                    type: "get",
                    dataType: "jsonp",
                    success: function (data) {
                        lxcvEdit.getInten(data);
                    },
                });
            },
            error: function () {
                lxcvEdit.remindShow("error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�");
            },
        });
    },
    intenIsShow: function (type) {
        if (arguments.length == 2) {
            lxcvEdit.cvConfirm({
                title: '闅愯棌妯″潡',
                content: '纭畾闅愯棌璇ユā鍧楀悧锛熼殣钘忓悗鍙互鍦ㄦā鍧楃鐞嗕腑鎭㈠銆�',
                content_html: "",
                ok: "纭畾",
                cancel: "鍙栨秷",
                onOk: function () {
                    $("body").removeClass("suggestModal");
                    $("body").removeClass("modal-open");
                    $.ajax({
                        url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=resumeinfo4jedit",
                        data: {nRId: lxcvEdit.globalObj._cvNid, sJobIntensionDisplay: type },
                        type: "get",
                        dataType: "jsonp",
                        success: function () {
                            if (type == 'none') {
                                $("#cv_inten").addClass('hidden');
                            } else {
                                $("#cv_inten").removeClass('hidden');
                            };
                        },
                    });
                },
                onCancel: function () {
                    if (arguments.length == 4) {
                        $("body").addClass("suggestModal");
                        $("body").addClass("modal-open");
                    } else {
                        $("body").removeClass("suggestModal");
                        $("body").removeClass("modal-open");
                    };
                },
            });
        } else {
            $.ajax({
                url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=resumeinfo4jedit",
                data: {nRId: lxcvEdit.globalObj._cvNid, sJobIntensionDisplay: type },
                type: "get",
                dataType: "jsonp",
                success: function () {
                    if (type == 'none') {
                        $("#cv_inten").addClass('hidden');
                    } else {
                        $("#cv_inten").removeClass('hidden');
                    };
                },
            });
        };
    },
    //---鍒犻櫎姹傝亴淇℃伅
    deleteInten: function (nRId,_this) {
        var parendId = _this.parent().attr("id");
        var obj = {
            nRId: nRId,
        };
        obj[parendId]='isnull';
        $("#"+parendId+"").hide();
        $.ajax({
            url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=resumeinfo4jedit",
            data: obj,
            type: "get",
            dataType: "jsonp",
            success: function (data) {
            },
            error: function () {
                lxcvEdit.remindShow('error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�');
            },
        });
    },
    //---鑾峰彇鏁欒偛淇℃伅
    getEdu: function (nRId) {
        var eduData,eduList = [];
        $.ajax({
            url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=educationlistload",
            data: {nRId: nRId},
            type: "get",
            dataType: "jsonp",
            success: function (data) {
                eduData = data.EducationinfoClass;
            },
            complete: function () {
                if(eduData) {
                    for (var i = 0; i < eduData.length; i++) {
                        var  time = "",School = "",xueyuan = "";
                        if((eduData[i].dSDate+eduData[i].dEDate) != '') time = '<span class="module-time">'+eduData[i].dSDate+eduData[i].dEDate+'</span>';
                        if(eduData[i].sSchool != '') School = '<span class="module-situation">'+eduData[i].sSchool+'</span>';
                        if(eduData[i].sDepartments != '') xueyuan = '<span class="module-task">'+eduData[i].sDepartments+'</span>';

                        eduList.push('<div class="list-cont" data-nEid="'+eduData[i].nEId+'">'+lxcvEdit.globalObj._toolbar+
                            '<div class="module-title clearfix">' + time + School + xueyuan+
                            '<span class="modal-major">'+eduData[i].sSpecialty+'&nbsp;&nbsp;'+eduData[i].sDegree+'</span>'+
                            '</div>' +
                            '<div class="module-bewrite">'+eduData[i].sLearnMemo+'</div>' +
                            '</div>');
                    }
                    $("#cv_edu .list-box").html(eduList.join(''));
                    if ($("#cv_edu .list-box .module-time").text() == '') {
                        $("#cv_edu .list-box .module-time").hide();
                    }
                } else {
                    $("#cv_edu .list-box").html('');
                };
                if ($(".module-time").text() == '') {
                    $(".module-time").hide();
                }
            },
        });
    },
    //---缂栬緫鏁欒偛淇℃伅
    eduEdit: function (nRId,nEId) {
        $('.add-minor').show();
        $("#contEditModal .modal-dialog").css("width",'842px').find(".cont-list.fl,.modal-box").show();
        lxcvEdit.getYearList($("#startYearList"));
        lxcvEdit.getYearList($("#endYearList"),"zhijin");
        $('.item_three,.item_four').show();
        $('#modalTitleEdit').hide();
        $('.item_one>p').text('姣曚笟闄㈡牎');
        $('.item_two>p').text('鎵€鍦ㄥ闄�');
        $('#contEditModalLabel').text('鏁欒偛缁忓巻');
        lxcvEdit.editorInit();
        $("#contEditModal").modal("show");
        lxcvEdit.cueShow('false');
        var editnEId = '';
        $.ajax({
            url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=educationlistload",
            data: {nRId: nRId},
            type: "get",
            dataType: "jsonp",
            success: function (data) {
                var datas = data.EducationinfoClass,eduTitles = [],index = '';
                editnEId = nEId;
                for (var i = 0; i < datas.length; i++) {
                    eduTitles.push('<li><span>鏁欒偛缁忓巻&nbsp;'+(i+1)+'</span><i class="icon-shanchu fr" data-nEid = "'+datas[i].nEId+'"></i></li>');
                    if(datas[i].nEId == nEId) {
                        index = i;
                    }
                };
                $("#taskList").html(eduTitles.join(''));
                $("#taskList li").eq(index).css("background-color","#eeeeee");
                var sc = datas[index].sSchool;
                if (sc == '璇疯緭鍏ュ鏍″悕绉�') sc = '';
                $("#current_one").val(sc);
                $("#current_two").val(datas[index].sDepartments);
                $("#current_three").val(datas[index].sSpecialty);
                $("#current_four").val(datas[index].sDegree);
                $("#startYear").val(datas[index].dSDate.split("/")[0]);
                $("#startMonth").val(datas[index].dSDate.split("/")[1]);
                var endY = datas[index].dEDate.split("/")[0];
                endY = endY.replace(' - ','')
                if (endY == '鑷充粖') {
                    $("#endYear").val('鑷充粖');
                    $("#endMonth").attr("disabled","disabled").val('');
                } else {
                    if (endY){ $("#endYear").val(endY)}else{$("#endYear").val('')};
                    $("#endMonth").val(datas[index].dEDate.split("/")[1]);
                    $("#endMonth").removeAttr("disabled");
                };
                var Lm = datas[index].sLearnMemo;
                if (Lm == '绉诲叆榧犳爣鐐瑰嚮鍙充晶鈥滅紪杈戔€濇寜閽紝濉啓淇℃伅銆�') Lm = '';
                $('#editor').froalaEditor('html.set', Lm);
            },
        });
        $("#contEditOk").unbind();
        $("#contEditOk").click(function () {
            if (!lxcvEdit.isData()) return;
            $("#contEditModal").modal("hide");
            var dSDate = lxcvEdit.isData()[0], dEDate = lxcvEdit.isData()[1], sSchool = $("#current_one").val(),
                sDepartments = $("#current_two").val(), sSpecialty = $("#current_three").val(), sDegree = $("#current_four").val(),
                sLearnMemo = $('#editor').froalaEditor('html.get');
            sLearnMemo ? sLearnMemo.replace(/'/g, '"') : "";
            $.ajax({
                url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=educationedit",
                data: {nRId: nRId, dSDate: dSDate, nEId: editnEId, dEDate: dEDate, sSchool: sSchool,
                    sDepartments: sDepartments, sSpecialty: sSpecialty, sDegree: sDegree, sLearnMemo: sLearnMemo},
                type: "get",
                dataType: "jsonp",
                success: function (data) {
                    lxcvEdit.getEdu(nRId)
                },
                error: function () {
                    lxcvEdit.remindShow('error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�')
                },
            });
        });
    },
    //---娣诲姞鍗曟潯鏁欒偛淇℃伅
    addEdu: function (nRId) {
        $('.add-minor').show();
        $("#contEditModal .modal-dialog").css("width",'842px').find(".cont-list.fl,.modal-box").show();
        $('.item_three,.item_four').show();
        $('.item_one>p').text('姣曚笟闄㈡牎');
        $('.item_two>p').text('鎵€鍦ㄥ闄�');
        $('#contEditModalLabel').text('鏁欒偛缁忓巻');
        lxcvEdit.editorInit();
        lxcvEdit.getYearList($("#startYearList"));
        lxcvEdit.getYearList($("#endYearList"),"zhijin");
        lxcvEdit.clearModalCont();
        $('#modalTitleEdit').hide();
        $("#contEditModal").modal("show");
        lxcvEdit.cueShow('false');
        $.ajax({
            url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=educationlistload",
            data: {nRId: nRId},
            type: "get",
            dataType: "jsonp",
            success: function (data) {
                var datas = data.EducationinfoClass, eduTitles = [];
                for (var i = 0; i < datas.length; i++) {
                    eduTitles.push('<li><span>鏁欒偛缁忓巻&nbsp;' + (i + 1) + '</span><i class="icon-shanchu fr" data-nEid = "' + datas[i].nEId + '"></i></li>');
                };
                eduTitles.push('<li><span>鏁欒偛缁忓巻&nbsp;' + (datas.length + 1) + '</span></li>');
                $("#taskList").html(eduTitles.join(''));
                $("#taskList li:last").css("background-color","#eeeeee");
            },
            error: function () {
                $("#taskList").html('<li><span>鏁欒偛缁忓巻&nbsp;' + '</span><i class="icon-shanchu fr"></i></li>');
                $("#taskList li:last").css("background-color","#eeeeee");
            },
        });
        $("#contEditOk").unbind();
        $("#contEditOk").click(function () {
            if (!lxcvEdit.isData()) return;
            $("#contEditModal").modal("hide");
            var dSDate =  lxcvEdit.isData()[0], dEDate = lxcvEdit.isData()[1], sSchool = $("#current_one").val(),
                sDepartments = $("#current_two").val(), sSpecialty = $("#current_three").val(), sDegree = $("#current_four").val(),
                sLearnMemo = $('#editor').froalaEditor('html.get');
            sLearnMemo ? sLearnMemo.replace(/'/g, '"') : "";
            $.ajax({
                url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=educationadd",
                data: {nId: nRId, dSDate: dSDate, dEDate: dEDate, sSchool: sSchool, sDepartments: sDepartments,
                    sSpecialty: sSpecialty, sDegree: sDegree, sLearnMemo: sLearnMemo},
                type: "get",
                dataType: "jsonp",
                success: function (data) {
                    lxcvEdit.getEdu(nRId)
                },
                error: function () {
                    lxcvEdit.remindShow("error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�");
                },
            });
        });
    },
    //---鑾峰彇宸ヤ綔缁忓巻----
    getWork: function (nRId) {
        var datas,workList = [];
        $.ajax({
            url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=joblistload",
            data: {nRId: nRId},
            type: "get",
            dataType: "jsonp",
            success: function (data) {
                datas = data.JobinfoClass;
            },
            complete: function () {
                if (datas) {
                    for (var i = 0; i < datas.length; i++) {
                        var jTime = '',gongsi = '';
                        if((datas[i].dSDate+datas[i].dEDate) != '') jTime = '<span class="module-time">'+datas[i].dSDate+datas[i].dEDate+'</span>';
                        if(datas[i].sCompany != '') gongsi = '<span class="module-situation">'+datas[i].sCompany+'</span>';
                        workList.push(' <div class="list-cont" data-nJid="'+datas[i].nJId+'">' + lxcvEdit.globalObj._toolbar +
                            '<div class="module-title clearfix">' + jTime + gongsi +
                            '<span class="module-task">'+datas[i].sPost+'</span>' +
                            '</div>' +
                            '<div class="module-bewrite">'+datas[i].sJobMemo+'</div>' +
                            '</div>');
                    };
                    $("#cv_work .list-box").html(workList.join(''));
                } else {
                    $("#cv_work .list-box").html('');
                };
            },
        });
    },
    //---缂栬緫宸ヤ綔缁忓巻--
    workEdit: function (nRId,nJId) {
        $('.add-minor').show();
        $("#contEditOk").unbind();
        $("#contEditModal .modal-dialog").css("width",'842px').find(".cont-list.fl,.modal-box").show();
        lxcvEdit.getYearList($("#startYearList"));
        lxcvEdit.getYearList($("#endYearList"),"zhijin");
        $('.item_three,.item_four').hide();
        $('.item_one>p').text('鍏徃鍚嶇О');
        $('.item_two>p').text('鑱屼綅鍚嶇О');
        $('#contEditModalLabel').text('宸ヤ綔缁忓巻');
        lxcvEdit.editorInit();
        $("#contEditModal").modal("show");
        lxcvEdit.cueShow('false');
        $('#modalTitleEdit').hide();
        var editnJId = '';
        $.ajax({
            url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=joblistload",
            data: {nRId: nRId},
            type: "get",
            dataType: "jsonp",
            success: function (data) {
                var datas = data.JobinfoClass, jobTitles = [], index = '';
                editnJId = nJId;
                for (var i = 0; i < datas.length; i++) {
                    jobTitles.push('<li><span>宸ヤ綔缁忓巻&nbsp;' + (i + 1) + '</span><i class="icon-shanchu fr" data-nJid = "' + datas[i].nJId + '"></i></li>');
                    if (datas[i].nJId == nJId) {
                        index = i;
                    }
                };
                $("#taskList").html(jobTitles.join(''));
                $("#taskList li").eq(index).css("background-color", "#eeeeee");
                var sc = datas[index].sCompany;
                if (sc == '璇疯緭鍏ュ叕鍙稿悕绉�') sc = ''
                $("#current_one").val(sc);
                $("#current_two").val(datas[index].sPost);
                $("#startYear").val(datas[index].dSDate.split("/")[0]);
                $("#startMonth").val(datas[index].dSDate.split("/")[1]);
                var endY = datas[index].dEDate.split("/")[0];
                endY = endY.replace(' - ','')
                if (datas[index].dEDate == '鑷充粖') {
                    $("#endYear").val('鑷充粖');
                    $("#endMonth").attr("disabled", "true").val('');
                } else {
                    if (endY){ $("#endYear").val(endY)}else{$("#endYear").val('')};
                    $("#endMonth").val(datas[index].dEDate.split("/")[1]);
                    $("#endMonth").removeAttr("disabled");
                };
                var Jm = datas[index].sJobMemo;
                if (Jm == '绉诲叆榧犳爣鐐瑰嚮鍙充晶鈥滅紪杈戔€濇寜閽紝濉啓淇℃伅銆�') Jm = ''
                $('#editor').froalaEditor('html.set',Jm);
            },
        });
        $("#contEditOk").click(function () {
            if (!lxcvEdit.isData()) return;
            $("#contEditModal").modal("hide");
            var sCompany = $("#current_one").val(), sPost = $("#current_two").val(), dSDate = lxcvEdit.isData()[0],
                dEDate = lxcvEdit.isData()[1], sJobMemo = $('#editor').froalaEditor('html.get');sJobMemo ? sJobMemo.replace(/'/g, '"') : "";
            $.ajax({
                url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=jobedit",
                data: {nRId: nRId, dSDate: dSDate, nJId: editnJId, dEDate: dEDate, sCompany: sCompany, sPost: sPost, sJobMemo: sJobMemo},
                type: "get",
                dataType: "jsonp",
                success: function (data) {
                    lxcvEdit.getWork(nRId)
                },
                error: function () {
                    lxcvEdit.remindShow('error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�');
                },
            });
        });
    },
    //---娣诲姞宸ヤ綔缁忓巻
    addWork: function (nRId) {
        $('.add-minor').show();
        $("#contEditModal .modal-dialog").css("width",'842px').find(".cont-list.fl,.modal-box").show();
        lxcvEdit.getYearList($("#startYearList"));
        lxcvEdit.getYearList($("#endYearList"),"zhijin");
        lxcvEdit.clearModalCont();
        lxcvEdit.editorInit();
        $('.item_three,.item_four').hide();
        $('.item_one>p').text('鍏徃鍚嶇О');
        $('.item_two>p').text('鑱屼綅鍚嶇О');
        $('#contEditModalLabel').text('宸ヤ綔缁忓巻');
        lxcvEdit.cueShow('false');
        $("#contEditModal").modal("show");
        $('#modalTitleEdit').hide();
        $.ajax({
            url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=joblistload",
            data: {nRId: nRId},
            type: "get",
            dataType: "jsonp",
            success: function (data) {
                var datas = data.JobinfoClass, jobTitles = [];
                for (var i = 0; i < datas.length; i++) {
                    jobTitles.push('<li><span>宸ヤ綔缁忓巻&nbsp;' + (i + 1) + '</span><i class="icon-shanchu fr" data-nJid = "' + datas[i].nJId + '"></i></li>');
                };
                jobTitles.push('<li><span>宸ヤ綔缁忓巻&nbsp;' + (datas.length + 1) + '</span></li>');
                $("#taskList").html(jobTitles.join(''));
                $("#taskList li:last").css("background-color","#eeeeee");
            },
            error: function () {
                $("#taskList").html('<li><span>宸ヤ綔缁忓巻&nbsp;' +  '</span><i class="icon-shanchu fr"></i></li>');
                $("#taskList li:last").css("background-color","#eeeeee");
            },
        });
        $("#contEditOk").unbind();
        $("#contEditOk").click(function () {
            if (!lxcvEdit.isData()) return;
            $("#contEditModal").modal("hide");
            var dSDate =  lxcvEdit.isData()[0], dEDate = lxcvEdit.isData()[1], sCompany = $("#current_one").val(),
                sPost = $("#current_two").val(), sJobMemo = $('#editor').froalaEditor('html.get');
            sJobMemo ? sJobMemo.replace(/'/g, '"') : "";
            $.ajax({
                url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=jobadd",
                data: {nId: nRId, dSDate: dSDate, dEDate: dEDate, sCompany: sCompany, sPost: sPost, sJobMemo: sJobMemo},
                type: "get",
                dataType: "jsonp",
                success: function (data) {
                    lxcvEdit.getWork(nRId)
                },
                error: function () {
                    lxcvEdit.remindShow('error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�');
                },
            });
        });
    },
    //---鍒犻櫎鍗曟潯淇℃伅---
    expinfodel: function (nRId,nId,infotable) {
        var aL = arguments.length;
        if(nId) {
            lxcvEdit.cvConfirm({
                title: '鍒犻櫎瀛愭ā鍧�',
                content: '纭畾瑕佸垹闄よ瀛愭ā鍧楀悧锛�',
                content_html: "",
                ok: "纭畾",
                cancel: "鍙栨秷",
                onOk: function () {
                    $("body").removeClass("suggestModal");
                    $("body").removeClass("modal-open");
                    $.ajax({
                        url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=expinfodel",
                        data: {'nId': nId, 'infotable': infotable},
                        type: "get",
                        dataType: "jsonp",
                        success: function () {
                            if (infotable == 'userjob') {
                                lxcvEdit.getWork(nRId)
                            } else {
                                lxcvEdit.getEdu(nRId)
                            };
                            lxcvEdit.remindShow("鍒犻櫎鎴愬姛");
                            $("#contEditModal").modal("hide");
                        },
                        error: function () {
                            $("#contEditModal").modal("hide");
                            lxcvEdit.remindShow("error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�");
                        },
                    });
                },
                onCancel: function () {
                    if (aL == 4) {
                        $("body").addClass("suggestModal");
                        $("body").addClass("modal-open");
                    } else {
                        $("body").removeClass("suggestModal");
                        $("body").removeClass("modal-open");
                    }
                }
            });
        };
    },
    //---璋冪敤tips鏁版嵁----
    getTips: function (sDescribesType,sDescribeMemo) {
        var t = sDescribesType;
        if (t == '鏁欒偛鑳屾櫙') {
            sDescribesType = '鏁欒偛缁忓巻';
        } else if (t == '宸ヤ綔缁忓巻') {
            sDescribesType = '宸ヤ綔缁忓巻';
        } else if (t == '鑷垜璇勪环') {
            sDescribesType = '涓汉璇勪环';
        } else if (t == '鎶€鑳界壒闀�') {
            sDescribesType = '鎶€鑳芥弿杩�';
        } else if (t == '濂栭」鑽ｈ獕') {
            sDescribesType = '鑽ｈ獕璇佷功';
        } else if (t == '鍏磋叮鐖卞ソ') {
            sDescribesType = '鍏磋叮鐖卞ソ';
        } else {
            sDescribesType = '';
        }
        $.ajax({
            url: "http://www.capabcv.com/resumev2/Resumev2.ashx?resumeaction=resumetips",
            data: {sDescribesType: sDescribesType, sDescribeClassify: $(".tips-industry input").val(),
                sDescribeClassify2:$(".tips-vocation input").val(),sDescribeMemo: sDescribeMemo},
            type: "get",
            dataType: "jsonp",
            success: function (data) {
                var datas = data.tipslist,tipsCont = [];
                if (datas.length == 1 && datas[0].nId === '0') {
                    tipsCont.push('<li class="nStyle">'+datas[0].sDescribeMemo+'锛岃鎼滅储鎴栭€夋嫨鐩稿叧琛屼笟鍜岃亴浣嶃€�'+'</li>');
                    $("#tips_list").html(tipsCont.join(''));
                } else {
                    for(var i = 0; i < datas.length; i++) {
                        tipsCont.push('<li class="clearfix"><span class="icon-tianjia fl">娣诲姞</span><p>'+datas[i].sDescribeMemo+'</p></li>');
                    };
                    $("#tips_list").html(tipsCont.join(''));
                };
            },
        });
    },
    //---鍒犻櫎绠€鍘�---
    deleteCv: function (nRId) {
        $("#cueModal").modal("hide");
        lxcvEdit.cvConfirm({
            title: '鍒犻櫎绠€鍘�',
            content: '纭瑕佸垹闄ょ畝鍘嗗悧锛�',
            content_html:"",
            ok: "纭畾",
            cancel: "鍙栨秷",
            onOk: function () {
                $("body").removeClass("suggestModal");
                $("body").removeClass("modal-open");
                $.ajax({
                    url: "http://www.capabcv.com/resumev2/Resumev2.ashx?resumeaction=resumedelv2",
                    data: {'nRId': nRId},
                    type: "get",
                    dataType: "jsonp",
                    success:function (data) {
                        if(nRId == lxcvEdit.globalObj._cvNid) {
                            lxcvEdit.myCv(lxcvEdit.globalObj._nUserId,'shanchu');
                        }else {
                            lxcvEdit.myCv(lxcvEdit.globalObj._nUserId);
                        };
                    },
                    error: function () {
                        lxcvEdit.remindShow("error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�+++++");
                    },
                });
            },
            onCancel: function () {
                $("body").removeClass("suggestModal");
                $("body").removeClass("modal-open");
                $("#confirmModal").hide();
            }
        })
    },
    //---妯℃€佹鏃堕棿鍒ゆ柇
    isData: function () {
        var dSDate = '',dEDate='', time = [];
        if ($("#endYear").val() == '' && $("#endMonth").val() == '') {
            dEDate=''
        } else {
            if ($("#endYear").val() == '鑷充粖') {
                dEDate = ' - 鑷充粖';
            } else {
                if (!$("#endMonth").val()) {
                    dEDate = ' - '+$("#endYear").val();
                } else {
                    if (!$("#endYear").val()) {
                        $(".eData-cue").show();
                        return;
                    };
                    dEDate = ' - '+$("#endYear").val()+'/'+$("#endMonth").val();
                };
            };
        }
        if ($("#startMonth").val() == '' && $("#startYear").val() == '') {
            dSDate = ''
        } else {
            if (!$("#startMonth").val()) {
                dSDate = $("#startYear").val();
            } else {
                if (!$("#startYear").val()) {
                    $(".sData-cue").show();
                    return;
                }
                dSDate = $("#startYear").val()+'/'+$("#startMonth").val();
            };
        }
        if(!dSDate) {
            dEDate = 'null';
        }
        if (!dSDate && dEDate) {
            $(".sData-cue").show();
            return false;
        } else if (dSDate+dEDate == '' || dSDate+dEDate == 'null') {
            $(".sData-cue").show();
            return false;
        } else {
            time = [dSDate,dEDate];
            return time;
        };
    },
    //---纭鎬у脊妗�
    cvConfirm: function (options) {
        var settings = {
            title:"鎿嶄綔鎻愮ず鏍囬",
            content:"鎿嶄綔鎻愮ず鍐呭",
            content_html:"",
            tips_modal_class:"confirm_modal",
            modal_class:"tips-modal-content",
            ok: "纭畾",
            cancel: "鍙栨秷",
            onOk: null,
            onCancel: null
        };
        $.extend(settings, options);
        var html = '<div class="modal" data-backdrop="static" data-keyboard="false" id="confirmModal">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<span class="confirm_title"></span>' +
            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
            '</div>' +
            '<div class="modal-body">' +
            '<span class="confirm_cont"></span>' +
            '</div>' +
            '<div class="modal-footer ac">' +
            '<button type="button" class="btn-cancel">鍏抽棴</button>' +
            '<button type="button" class="btn-confirm confirmOk" id="confirmOk">纭</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        var $modal=$(html);
        $modal.find(".confirm_title").text(settings.title);
        $("#confirmModal").remove();
        if(settings.content_html==""){
            $modal.find(".confirm_cont").text(settings.content);
        }else{
            $modal.find(".confirm_cont").remove();
            $modal.find(".modal-body").html(settings.content_html);
        }
        $modal.find("button.btn-confirm").text(settings.ok);
        $modal.find("button.btn-cancel").text(settings.cancel);
        $modal.appendTo("body");
        $modal.modal("show");
        var $confirm_btn=$("#confirmModal").find("button.confirmOk");
        var $cancel_btn=$("#confirmModal").find("button.btn-cancel");
        if ($confirm_btn != null) {
            $confirm_btn.click(function() {
                if (settings.onOk && typeof settings.onOk == "function") {
                    if (settings.onOk() != false) {
                        confirm_modal_close();
                    }
                } else {
                    confirm_modal_close();
                }
                return false;
            });
        }
        if ($cancel_btn != null) {
            $cancel_btn.click(function(e) {
                e.stopPropagation();
                if (settings.onCancel && typeof settings.onCancel == "function") {
                    if (settings.onCancel() != false) {
                        confirm_modal_close();
                    }
                } else {
                    confirm_modal_close();
                }
                return false;
            });
        }

        //寮规鍏抽棴閫氱敤鏂规硶
        function confirm_modal_close(){
            // $modal.modal("hide");
            $modal.remove();
            $(".modal-backdrop:last").remove();
            $(".modal-backdrop:first").show();
            // $("body").removeClass("suggestModal");
            // $("body").removeClass("modal-open");
        }
    },
    //---鎻愮ず鏄剧ず
    remindShow: function (html) {
        $(".hold-cue").fadeIn(500).children("#hold_cue_txt").html(html);
        setTimeout(function () {
            $(".hold-cue").fadeOut(500);
        },2500);
    },
    //---娣诲姞鑷畾涔�
    diyboxadd: function (nRId,modalTitle) {
        $('.add-minor').hide();
        $("#cueModalLabel").css({"font-size":"18px","font-weight":"bold","text-align":"left"}).html("鑷畾涔夋坊鍔�");
        $("#cueModal .modal-dialog").css({"margin":"60px auto","width":"600px"});
        $("#cueModal .modal-body").css({"height":"auto","padding":"0","margin":"0","max-height":"none"}).addClass("ac");
        $("#cueModal .modal-footer").hide();
        $("#cueModal").modal("show");
        if (arguments.length == 1) {
            $("#cueModal .modal-body").html('<div class="time_diy">' +
                '<img src="../Images/ResumeV3/onlineCv/diytime.png" alt="">' +
                '<p class="icon-jia_3 ac br4">&nbsp;缁勫悎妯″潡</p>' +
                '<div class="diy-cover"></div>' +
                '</div>' +
                '<div class="default_diy">' +
                '<img src="../Images/ResumeV3/onlineCv/diydefault.png" alt="">' +
                '<p class="icon-jia_3 ac br4">&nbsp;鍗曞垪妯″潡</p>' +
                '<div class="diy-cover"></div>' +
                '</div>').removeClass("addLoading");

            $(".time_diy").click(function () {
                lxcvEdit.clearModalCont();
                $("#cueModal").modal("hide");
                setTimeout(function () {lxcvEdit.frameShow('842px','妯″潡鍚嶇О','.cont-list.fl',null);},400);
                $("#contEditOk").unbind();
                $("#taskList").empty();
                $('#editor').froalaEditor('html.set', '');
                $("#taskList").html('<li style="background-color: #eeeeee"><span>妯″潡鍚嶇О&nbsp;' +1+  '</span><i class="fr"></i></li>');
                $("#contEditOk").click(function () {
                    var modalTitle = $("#contEditModalLabel").text();
                    lxcvEdit.diyaddajax(nRId,'0',modalTitle)
                });

            });
            $(".default_diy").click(function () {
                lxcvEdit.clearModalCont();
                $("#cueModal").modal("hide");
                setTimeout(function () {lxcvEdit.frameShow('604px','妯″潡鍚嶇О',null,'.cont-list.fl,.modal-box');},400);
                $("#contEditOk").unbind();
                $('#editor').froalaEditor('html.set', '');
                $("#contEditOk").click(function () {
                    var modalTitle = $("#contEditModalLabel").text();
                    lxcvEdit.diyaddajax(nRId,'1',modalTitle)
                });
            });
        }
    },
    //---娣诲姞鑷畾涔塧jax
    diyaddajax: function (nRId,boxType,modalTitle) {
        var alength = arguments.length
        if (alength == 3) {
            var dSDate = '', dEDate = '', sBoxPosition = $("#current_one").val(),
                sBoxTrade = $("#current_two").val(), sBoxMemo = $('#editor').froalaEditor('html.get');
            sBoxMemo ? sBoxMemo.replace(/'/g, '"') : "";
        } else {
            var dSDate = '1950/05', dEDate = ' - 1950/06', sBoxPosition = '鍦哄悎/姣旇禌鎴栧叾浠�',
                sBoxTrade = '瑙掕壊/濂栭」鎴栧叾浠�', sBoxMemo = '绉诲叆榧犳爣鐐瑰嚮鍙充晶鈥滅紪杈戔€濇寜閽紝濉啓淇℃伅銆�';
        }
        if (boxType == '0') {
            if (alength == 3) {
                if (!lxcvEdit.isData()) return;
                dSDate = lxcvEdit.isData()[0], dEDate = lxcvEdit.isData()[1];
            };
            $.ajax({
                url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=diyboxadd",
                data: {nRId: nRId, sBoxType: boxType, sBoxPosition: sBoxPosition, sBoxTrade: sBoxTrade,
                    sRModuleTitle: modalTitle,sBoxMemo: sBoxMemo, dSDate: dSDate, dEDate: dEDate},
                type: "get",
                dataType: "jsonp",
                success: function () {
                    if (alength == 3) {
                        $("#contEditModal").modal("hide");
                        lxcvEdit.getCV(lxcvEdit.globalObj._cvNid);
                        lxcvEdit.globalObj._moduleTitle.push(modalTitle);
                        lxcvEdit.globalObj._sRModule.push(modalTitle);
                        lxcvEdit.globalObj._diyIsShow.push('');
                    } else {
                        lxcvEdit.getCV(lxcvEdit.globalObj._cvNid);
                    }
                },
                error: function () {
                    $("#contEditModal").modal("hide");
                    lxcvEdit.remindShow("error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�");
                },
            });
        } else {
            $.ajax({
                url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=diyboxadd",
                data: {nRId: nRId, sBoxType: boxType, sRModuleTitle: modalTitle,sBoxMemo: sBoxMemo, },
                type: "get",
                dataType: "jsonp",
                success: function () {
                    if (alength == 3) {
                        $("#contEditModal").modal("hide");
                        lxcvEdit.getCV(lxcvEdit.globalObj._cvNid);
                        lxcvEdit.globalObj._moduleTitle.push(modalTitle);
                        lxcvEdit.globalObj._sRModule.push(modalTitle);
                        lxcvEdit.globalObj._diyIsShow.push('');
                    } else {
                        lxcvEdit.getCV(lxcvEdit.globalObj._cvNid);
                    }
                },
                error: function () {
                    $("#contEditModal").modal("hide");
                    lxcvEdit.remindShow("error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�");
                },
            });
        };
    },
    // ----缂栬緫鑷畾涔�
    diyboxEdit: function (nRId,nId,nOId,modalTitle,type) {
        $('.add-minor').show();
        $.ajax({
            url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=onediyboxlistload",
            data: {nRId: nRId, nOId: nOId},
            type: "get",
            dataType: "jsonp",
            success: function (data) {
                var datas = data.DiyboxinfoClass;
                var diyTitles = [],index = 0;
                if (datas.length) {
                    for (var i = 0; i < datas.length; i++) {
                        diyTitles.push('<li><span>'+modalTitle+'&nbsp;'+(i+1)+'</span><i class="icon-shanchu fr" data-nid = "'+datas[i].nId+'" data-nOId = "'+nOId+'" data-title = "'+modalTitle+'"></i></li>');
                        if(datas[i].nId == nId) {
                            index = i;
                        };
                    };
                } else {
                    index = 0;
                    diyTitles.push('<li><span>'+modalTitle+'&nbsp;'+(i+1)+'</span><i class="icon-shanchu fr"></i></li>');
                };
                $("#taskList").html(diyTitles.join(''));
                $("#contEditModalLabel").text(modalTitle);
                $("#taskList li").eq(index).css("background-color","#eeeeee");
                var bp = datas[index].sBoxPosition;
                var bt = datas[index].sBoxTrade;
                if (bp == '鍦哄悎/姣旇禌鎴栧叾浠�') bp = '';
                if (bt == '瑙掕壊/濂栭」鎴栧叾浠�') bt = '';
                $("#current_one").val(bp);
                $("#current_two").val(bt);
                var sd1 = datas[index].dSDate.split("/")[0];
                var sd2 = datas[index].dSDate.split("/")[1];
                if (sd1 == '1950')  sd1 = '';
                if (sd2 == '05' && sd1 == '1950' || sd1 == '')  sd2 = '';
                $("#startYear").val(sd1);
                $("#startMonth").val(sd2);
                var endY = datas[index].dEDate.split("/")[0];
                endY = endY.replace(' - ','')
                if (endY == '鑷充粖') {
                    $("#endYear").val('鑷充粖');
                    $("#endMonth").attr("disabled","disabled").val('');
                } else {
                    if (endY && endY != '1950'){
                        $("#endYear").val(endY)
                    }else{
                        $("#endYear").val('')
                    };
                    var ed = datas[index].dEDate.split("/")[1];
                    if (ed == '06' && endY == '1950' || endY == '') ed = '';
                    $("#endMonth").val(ed);
                    $("#endMonth").removeAttr("disabled");
                };
                var boxmeme = datas[index].sBoxMemo;
                if (boxmeme == '绉诲叆榧犳爣鐐瑰嚮鍙充晶鈥滅紪杈戔€濇寜閽紝濉啓淇℃伅銆�') boxmeme = '';
                $('#editor').froalaEditor('html.set', boxmeme);
            },
        });
        $("#contEditOk").unbind();
        $("#contEditOk").click(function () {
            var dSDate = '', dEDate = '', sBoxPosition = $("#current_one").val(),
                sBoxTrade = $("#current_two").val(), sBoxMemo = $('#editor').froalaEditor('html.get'),
                title = $("#contEditModalLabel").text();
            sBoxMemo ? sBoxMemo.replace(/'/g, '"') : "";
            if (type == '0') {
                if (!lxcvEdit.isData()) return;
                $("#contEditModal").modal("hide");
                dSDate = lxcvEdit.isData()[0], dEDate = lxcvEdit.isData()[1];
                $.ajax({
                    url: "http://www.capabcv.com/ResumeV3/Resumev3.ashx?resumeaction=diyinfoedit",
                    data: {nId: nId, nOId: nOId,sBoxType: type, dSDate: dSDate, dEDate: dEDate, sBoxPosition: sBoxPosition,
                        sRModuleTitle: title,sBoxTrade: sBoxTrade, sBoxMemo: sBoxMemo},
                    type: "get",
                    dataType: "jsonp",
                    success: function () {
                        if (title != modalTitle) {
                            var sTitle = lxcvEdit.globalObj._moduleTitle;
                            for (var i = 0; i < sTitle.length; i++) {
                                if (sTitle[i] == modalTitle) {
                                    sTitle[i] = title;
                                };
                            };
                        };
                        lxcvEdit.getCV(nRId)
                    },
                    error: function () {
                        $("#contEditModal").modal("hide");
                        lxcvEdit.remindShow('error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�')
                    },
                });
            } else {
                $("#contEditModal").modal("hide");
                if (sBoxMemo == '') sBoxMemo = '绉诲叆榧犳爣鐐瑰嚮鍙充晶鈥滅紪杈戔€濇寜閽紝濉啓淇℃伅銆�';
                $.ajax({
                    url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=diyinfoedit",
                    data: {nId: nId, nOId: nOId, sBoxType: type, sRModuleTitle: title, sBoxMemo: sBoxMemo, },
                    type: "get",
                    dataType: "jsonp",
                    success: function () {
                        if (title != modalTitle) {
                            var sTitle = lxcvEdit.globalObj._moduleTitle;
                            for (var i = 0; i < sTitle.length; i++) {
                                if (sTitle[i] == modalTitle) {
                                    sTitle[i] = title;
                                }
                            }
                        }
                        lxcvEdit.getCV(lxcvEdit.globalObj._cvNid);
                    },
                    error: function () {
                        $("#contEditModal").modal("hide");
                        lxcvEdit.remindShow("error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�");
                    },
                });
            }
        });
    },
    //----鍒犻櫎鑷畾涔�-----
    diyboxDel: function (nId,nOId,title) {
        lxcvEdit.cvConfirm({
            title: '鍒犻櫎妯″潡',
            content: '纭畾瑕佸垹闄よ妯″潡鍚楋紵',
            content_html: "",
            ok: "纭畾",
            cancel: "鍙栨秷",
            onOk: function () {
                $("body").removeClass("suggestModal");
                $("body").removeClass("modal-open");
                $.ajax({
                    url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=diyboxdel",
                    data: {nId: nId, nOId: nOId},
                    type: "get",
                    dataType: "jsonp",
                    success: function () {
                        var arr = lxcvEdit.globalObj._sRModule;
                        var i = arr.indexOf(title)
                        arr.splice(i,1);
                        lxcvEdit.globalObj._sRModule = arr;
                        lxcvEdit.getCV(lxcvEdit.globalObj._cvNid);
                        lxcvEdit.remindShow("鍒犻櫎鎴愬姛");
                    },
                    error: function () {
                        lxcvEdit.remindShow("error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�");
                    },
                });
            },
            onCancel: function () {
                $("body").removeClass("suggestModal");
                $("body").removeClass("modal-open");
            }
        });
    },
    //---鑷畾涔夊瓙妯″潡鍐呭娣诲姞---
    diyinfoAdd: function (nRId,modalTitle,nOId) {
        lxcvEdit.cueShow();
        $('.add-minor').show();
        $("#contEditModal .modal-dialog").css("width",'842px').find(".cont-list.fl,.modal-box").show();
        $('.item_three,.item_four').hide();
        $('.item_one>p').text('鍦哄悎/姣旇禌鎴栧叾浠�');
        $('.item_two>p').text('瑙掕壊/濂栭」鎴栧叾浠�');
        $('#contEditModalLabel').text(modalTitle);
        lxcvEdit.editorInit();
        lxcvEdit.getYearList($("#startYearList"));
        lxcvEdit.getYearList($("#endYearList"),"zhijin");
        lxcvEdit.clearModalCont();
        $("#contEditModal").modal("show");
        $('#modalTitleEdit').show();
        $.ajax({
            url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=onediyboxlistload",
            data: {nRId: nRId, nOId: nOId},
            type: "get",
            dataType: "jsonp",
            success: function (data) {
                var datas = data.DiyboxinfoClass;
                var diyTitles = [];
                if (datas.length) {
                    for (var i = 0; i < datas.length; i++) {
                        diyTitles.push('<li><span>'+modalTitle+'&nbsp;'+(i+1)+'</span><i class="icon-shanchu fr" data-nid = "'+datas[i].nId+'" data-nOId = "'+nOId+'" data-title = "'+modalTitle+'"></i></li>');
                    };
                    diyTitles.push('<li><span>'+modalTitle+'&nbsp;' + (datas.length + 1) + '</span></li>');
                    $("#taskList").html(diyTitles.join(''));
                    $("#taskList li:last").css("background-color","#eeeeee");
                }
            },
            error: function () {
                $("#taskList").html('<li><span>'+modalTitle+'&nbsp;' + '</span><i class="icon-shanchu fr"></i></li>');
                $("#taskList li:last").css("background-color","#eeeeee");
            },
        });
        $("#contEditOk").unbind();
        $("#contEditOk").click(function () {
            if (!lxcvEdit.isData()) return;
            $("#contEditModal").modal("hide");
            var dSDate =  lxcvEdit.isData()[0], dEDate = lxcvEdit.isData()[1],sBoxPosition = $("#current_one").val(),
                sBoxTrade = $("#current_two").val(), sBoxMemo = $('#editor').froalaEditor('html.get');
            sBoxMemo ? sBoxMemo.replace(/'/g, '"') : "";
            $.ajax({
                url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=diyinfoadd",
                data: {nRId: nRId, nOId: nOId,sBoxType: '0', dSDate: dSDate, dEDate: dEDate, sBoxPosition: sBoxPosition, sBoxTrade: sBoxTrade, sBoxMemo: sBoxMemo},
                type: "get",
                dataType: "jsonp",
                success: function (data) {
                    lxcvEdit.getCV(nRId);
                },
                error: function () {
                    $("#contEditModal").modal("hide");
                    lxcvEdit.remindShow("error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�");
                },
            });
        });
    },
    //---鑷畾涔夊瓙妯″潡鍒犻櫎
    diyinfodel: function (nId,nOId) {
        var aL = arguments.length;
        if (nId) {
            lxcvEdit.cvConfirm({
                title: '鍒犻櫎妯″潡',
                content: '纭畾瑕佸垹闄よ妯″潡鍚楋紵',
                content_html: "",
                ok: "纭畾",
                cancel: "鍙栨秷",
                onOk: function () {
                    $("body").removeClass("suggestModal");
                    $("body").removeClass("modal-open");
                    $.ajax({
                        url: "http://www.capabcv.com/resumev3/Resumev3.ashx?resumeaction=diyboxdel",
                        data: {nId: nId, nOId: nOId},
                        type: "get",
                        dataType: "jsonp",
                        success: function () {
                            $("#contEditModal").modal("hide");
                            lxcvEdit.getCV(lxcvEdit.globalObj._cvNid);
                            lxcvEdit.remindShow("鍒犻櫎鎴愬姛");
                        },
                        error: function () {
                            $("#contEditModal").modal("hide");
                            lxcvEdit.getCV(lxcvEdit.globalObj._cvNid);
                            lxcvEdit.remindShow("error, &nbsp;缃戠粶寮傚父锛岃绋嶅悗閲嶈瘯锛�");
                        },
                    });
                },
                onCancel: function () {
                    if (aL == 3) {
                        $("body").addClass("suggestModal");
                        $("body").addClass("modal-open");
                    }else {
                        $("body").removeClass("suggestModal");
                        $("body").removeClass("modal-open");
                    }
                }
            });
        };
    },
    //---鑷畾涔塱con鍒ゆ柇---
    diyicon: function (data) {
        var icon = '';
        if (data == '鑷垜璇勪环') {
            icon = 'icon-ziwopingjia_1';
        } else if (data == '鎶€鑳界壒闀�') {
            icon = 'icon-jinengtechang_2';
        } else if(data == '濂栭」鑽ｈ獕') {
            icon = 'icon-rongyu_2';
        } else if(data == '瀹炰範缁忛獙') {
            icon = 'icon-shixijingli_1';
        } else if(data == '椤圭洰缁忛獙') {
            icon = 'icon-xiangmujingyan_2';
        } else if(data == '鍏磋叮鐖卞ソ') {
            icon = 'icon-xingquaihao_2';
        } else if(data == '蹇楁効鑰呯粡鍘�') {
            icon = 'icon-zhiyuanzhe_1';
        } else {
            icon = 'icon-zidingyi_2';
        };
        return icon;
    },
    //---寮规璁剧疆----
    frameShow: function (width,modalTitle,show,hide) {
        $("#contEditModal .modal-dialog").css("width",width).find(".modal-box").show();
        lxcvEdit.getYearList($("#startYearList"));
        lxcvEdit.getYearList($("#endYearList"),"zhijin");
        $('.item_three,.item_four, .cont-list,'+hide+'').hide();
        $('.item_one>p').text('鍦哄悎/姣旇禌鎴栧叾浠�');
        $('.item_two>p').text('瑙掕壊/濂栭」鎴栧叾浠�');
        $('#contEditModalLabel').text(modalTitle);
        lxcvEdit.editorInit();
        $("#contEditModal").modal("show");
        $('#modalTitleEdit,'+show+'').show( );
        lxcvEdit.cueShow()
    },
    cueShow: function (isdiy) {
        var cueFirst = localStorage.getItem('cueFirst');
        var cueLast= localStorage.getItem('cueLast');
        if (arguments.length == 1) {
            if ($('.editor-box .editTitleCue').css('display') == 'block') {
                $('.editor-box .editTitleCue').hide();
            }
            if (!cueLast) {
                $('.editor-box .editTitleCue').show();
                localStorage.setItem('cueLast','true');
            };
        } else {
            if (cueFirst) {
                $('.editTitleCue').hide();
            } else {
                localStorage.setItem('cueFirst','true');
                $('.modal-header .editTitleCue').show();
            };
        };

    },
    //---鏀惰垂---
    isPaymentMake: function () {
        var total = -1, currentNum = -1, sPayflag = lxcvEdit.globalObj._sPayit, argLen = arguments.length;
        $.ajax({
            url: 'http://www.capabcv.com/orderclass.ashx?orderaction=bonused&sBonusType=ResumeCreate',
            dataType: 'jsonp',
            type: 'get',
            success: function (data) {
                total = data;
            },
            complete: function () {
                if (total != -1) {
                    $.ajax({
                        url: 'http://www.capabcv.com/orderclass.ashx?orderaction=resumeed',
                        dataType: 'jsonp',
                        type: 'get',
                        success: function (data) {
                            currentNum = data;
                            if (currentNum >= total) {
                                if (sPayflag == "") {
                                    lxcvEdit.globalObj._isPaymentMake = false;
                                } else if (sPayflag != "" && sPayflag != null && sPayflag != "") {
                                    if (argLen == 1) {
                                        lxcvEdit.globalObj._isPaymentMake = true;
                                    } else {
                                        lxcvEdit.globalObj._isPaymentMake = true;
                                    };
                                };
                            } else {
                                if (argLen == 1) {
                                    lxcvEdit.globalObj._isPaymentMake = true;
                                } else {
                                    lxcvEdit.globalObj._isPaymentMake = true;
                                };
                            };
                        },
                    });
                } else {
                    lxcvEdit.globalObj._isPaymentMake = false;
                };
            },
        });
    },
    //---閫€鍑虹櫥褰�
    userlogout: function () {
        localStorage.removeItem("UserId");
        localStorage.removeItem("casenId");
        localStorage.removeItem("caseTemplate");
        localStorage.removeItem("nextnId");
        localStorage.removeItem("nextTemplate");
        localStorage.removeItem("prevnId");
        localStorage.removeItem("nextTemplate");
        localStorage.removeItem("oUl_name");
        localStorage.removeItem("oUl1_name");
        $.post("/UsersV2.ashx?useraction=userlogout", {}, function (data, status) {
            if (status == "success") {
                $("#userinfohead").html('<a class=log href= ><i class="icon iconfont">&#xe613;</i></a>');
                window.location.href = "http://www.capabcv.com";
            }
        });
    },
};
$(function () {
    lxcvEdit.init();
    cvCommon.main.sideBtn();
});


