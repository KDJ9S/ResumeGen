$(document).ready(function(){
    $.areaSelect = function(init){
        var Province,State,City;
        var CityJson;
        createDom();
        writeData();
        replyOperation();
        $('#hasCheck').val($('.sg-area-result').val());

        /*鐢熸垚鍦板尯閫夋嫨鐣岄潰缁撴瀯*/
        function createDom(){
            var html='';
            html+='<div class="sg-mask" style="background-color: transparent">';
            html+='<div class="popups-box" style="padding-bottom: 15px;width: 500px;box-shadow: 0 0 5px 1px #ccc">';
            html+='<div class="title-min"><span class="query">鍙栨秷</span>璇烽€夋嫨鍦板尯<span class="submit">纭畾</span></div>';
            // html+='<div class="title-max">璇烽€夋嫨鍦板尯<button type="button" class="modal-close" data-dismiss="modal" aria-label="Close"><span class="modal-close-x" aria-hidden="true">脳</span></button></div>';
            html+='<div class="result-box" style="display: none">';
            html+='<label>宸查€夋嫨</label>';
            html+='<input id="hasCheck" class="form-control" type="text" name="area" disabled="disabled">';
            html+='</div>';
            html+='<div class="tab-box">';
            html+='<div class="tab-menu">';
            html+='<ul>';
            html+='<li class="tab-1 isCheck">鐪佷唤</li>';
            html+='<li class="tab-2">鍩庡競</li>';
            html+='<li class="tab-3">鍘垮尯</li>';
            html+='</ul>';
            html+='</div>';
            html+='<div class="content-box">';
            html+='<div id="wrapper0" class="tab-content tab-list-1 isBlock">';
            html+='<ul></ul>';
            html+='</div>';
            html+='<div id="wrapper1"  class="tab-content tab-list-2">';
            html+='<ul></ul>';
            html+='</div>';
            html+='<div id="wrapper2"  class="tab-content tab-list-3">';
            html+='<ul></ul>';
            html+='</div>';
            html+='</div>';
            html+='</div> ';
            html+='<div class="footer" style="height: 0;border: none">';
            // 	// html+='<button id="submitBtn">纭畾</button>';
            html+='</div> ';
            html+='</div>';
            html+='</div>';
            $('.cityBox').append(html);
            $(".popups-box").show().animate({bottom:'0px'})
        }
        /*鏍峰紡璁剧疆*/
        function setDomStyle(){}

        /*閫夋嫨鎿嶄綔鍝嶅簲*/
        function replyOperation(){
            var provinceDom ='';
            var regionCode = 11;
            var cityCode = 01;
            //PC绔〉绛惧垏鎹�
            var listOne = $('.tab-list-1');
            var listtwo = $('.tab-list-2');
            var listthree = $('.tab-list-3');
            $('.tab-1').click(function(){
                listOne.addClass('isBlock').siblings().removeClass('isBlock');
                $(this).addClass('isCheck').siblings().removeClass('isCheck');
            })
            $('.tab-2').click(function(){
                listtwo.addClass('isBlock').siblings().removeClass('isBlock');
                $(this).addClass('isCheck').siblings().removeClass('isCheck');
            })
            $('.tab-3').click(function(){
                listthree.addClass('isBlock').siblings().removeClass('isBlock');
                $(this).addClass('isCheck').siblings().removeClass('isCheck');
            })

            for(var i= 0;i< CityJson.length;i++){
                provinceDom += '<li><a>'+CityJson[i].region.name+'<input value='+CityJson[i].region.code+' style="display:none"></a></li>';
            }
            $('.tab-list-1 ul').html(provinceDom);

            //PC绔€夋嫨鐪佷唤
            $('.tab-list-1 li a').click(function(event){
                var e=window.event||event;   //---缁勭粐浜嬩欢鍐掓场鍏煎鍐欐硶--
                if(e.stopPropagation()){
                    e.stopPropagation()
                }else{
                    e.cancelBubble=true
                }
                $(this).parent().addClass('minISClick').siblings().removeClass('minISClick');
                regionCode = $(this).children('input').val();
                Province = $(this).text();
                $('#hasCheck').val(Province);
                $('.tab-list-2 ul').empty();
                $('.tab-list-3 ul').empty();
                createState();
                //PC绔€夋嫨鍩庡競
                $('.tab-list-2 li a').click(function(event){
                    var e=window.event||event;   //---缁勭粐浜嬩欢鍐掓场鍏煎鍐欐硶--
                    if(e.stopPropagation()){
                        e.stopPropagation()
                    }else{
                        e.cancelBubble=true
                    }
                    $(this).parent().addClass('minISClick').siblings().removeClass('minISClick');
                    cityCode = $(this).children('input').val();
                    State = $(this).text();
                    $('#hasCheck').val(Province+'-'+State);
                    $('.tab-list-3 ul').empty();

                    //----绠€鍘嗕慨鏀逛唬鐮�-2018-4-11-
                    var valZ = $('#hasCheck').val();
                    if (valZ == "鍖椾含-鍖椾含甯�") {
                        valZ ="鍖椾含"
                    } else if (valZ == "澶╂触-澶╂触甯�"){
                        valZ ="澶╂触"
                    } else if (valZ == "涓婃捣-涓婃捣甯�"){
                        valZ ="涓婃捣"
                    } else if (valZ == "閲嶅簡-閲嶅簡甯�"){
                        valZ ="閲嶅簡"
                    } else if (valZ == "婢抽棬-婢抽棬"){
                        valZ ="婢抽棬"
                    } else if (valZ == "鍙版咕-鍙版咕"){
                        valZ ="鍙版咕"
                    } else if (valZ == "棣欐腐-棣欐腐"){
                        valZ ="棣欐腐"
                    } else {
                        valZ = valZ
                    };
                    // $('.sg-area-result').val($('#hasCheck').val());
                    $('.sg-area-result').val(valZ);
                    $('.sg-mask').css('display','none');
                    $('.sg-mask').remove();
                    // createCity();
                    //PC绔€夋嫨鍘垮尯
                    // $('.tab-list-3 li a').click(function(){
                    //     $(this).parent().addClass('minISClick').siblings().removeClass('minISClick');
                    //     City = $(this).text();
                    //     $('#hasCheck').val(Province+'-'+State+'-'+City);
                    // })
                })
            })
            //鍒涘缓浜岀骇鑿滃崟
            function createState(){
                var stateDom = '';
                for(var j= 0;j< CityJson.length;j++){
                    if(CityJson[j].region.code == regionCode){
                        for(var k=0;k<CityJson[j].region.state.length;k++){
                            stateDom += '<li><a>'+CityJson[j].region.state[k].name+'<input value="'+CityJson[j].region.state[k].code+'" style="display:none"></a></li>';
                        }
                        $('.tab-list-2 ul').html(stateDom);
                    }
                }
                //椤电鍒囨崲
                $('.tab-2').click();
            }

            //鍒涘缓涓夌骇鑿滃崟
            function createCity(){
                var cityDom='';
                for(var j= 0;j< CityJson.length;j++){
                    if(CityJson[j].region.code == regionCode){
                        for(var k=0;k<CityJson[j].region.state.length;k++){
                            if(CityJson[j].region.state[k].code == cityCode){
                                for(var l=0;l<CityJson[j].region.state[k].city.length;l++){
                                    cityDom += '<li><a>'+CityJson[j].region.state[k].city[l].name+'<input value="'+CityJson[j].region.state[k].city[l].code+'" style="display:none"></a></li>';
                                }
                                $('.tab-list-3 ul').html(cityDom);
                            }

                        }
                    }
                }
                //椤电鍒囨崲
                $('.tab-3').click();
            }
        }
        // PC鍏抽棴鎿嶄綔鍝嶅簲
        $('.popups-box .modal-close').click(function(){
            // $('.sg-area-result').val($('#hasCheck').val());
            $('.sg-mask').css('display','none');
            $('.sg-mask').remove();
        });

        // // PC纭畾鎿嶄綔鍝嶅簲
        // $('#submitBtn').click(function(){
        // 	$('.sg-area-result').val($('#hasCheck').val());
        // 	$('.sg-mask').css('display','none');
        // 	$('.sg-mask').remove();
        // });


        /*绉诲姩绔彇娑堟搷浣滃搷搴�*/
        $('.title-min .query').on('click',function(){
            $('.sg-area-result').val();
            $(".popups-box").show().animate({bottom:'-251px'},function(){
                $('.sg-mask').css('display','none');
                $('.sg-mask').remove();
            })
        })

        /*绉诲姩绔‘瀹氭搷浣滃搷搴�*/
        $('.title-min .submit').on('click',function(){
            $('.sg-area-result').val($('#hasCheck').val());
            $(".popups-box").show().animate({bottom:'-251px'},function(){
                $('.sg-mask').css('display','none');
                $('.sg-mask').remove();
            })
        })

        /*鍦板尯淇℃伅--鏇存柊鎴2016骞�07鏈�31鏃ワ紙鏉ユ簮浜庡浗瀹剁粺璁″眬锛夛紝鏁版嵁妫€鏌ヤ簬2018骞�3鏈�19鏃�16:59:12*/
        function writeData(){
            CityJson =[{
                region:{
                    name:'鍖椾含',
                    code:'11',
                    state:[{
                        name:'鍖椾含甯�', // 16涓競杈栧尯
                        code:'01',
                        city:[
                            {name:'涓滃煄鍖�', code:'01'},
                            {name:'瑗垮煄鍖�',code:'02'},
                            {name:'鏈濋槼鍖�',code:'05'},
                            {name:'涓板彴鍖�',code:'06'},
                            {name:'鐭虫櫙灞卞尯',code:'07'},
                            {name:'娴锋穩鍖�',code:'08'},
                            {name:'闂ㄥご娌熷尯',code:'09'},
                            {name:'鎴垮北鍖�',code:'11'},
                            {name:'閫氬窞鍖�',code:'12'},
                            {name:'椤轰箟鍖�',code:'13'},
                            {name:'鏄屽钩鍖�',code:'14'},
                            {name:'澶у叴鍖�',code:'15'},
                            {name:'鎬€鏌斿尯',code:'16'},
                            {name:'骞宠胺鍖�',code:'17'},
                            {name:'瀵嗕簯鍖�',code:'18'},
                            {name:'寤跺簡鍖�',code:'19'}
                        ]
                    }]
                }},{
                region:{
                    name:'澶╂触',
                    code:'12',
                    state:[{
                        name:'澶╂触甯�', // 16涓競杈栧尯
                        code:'01',
                        city:[
                            {name:'鍜屽钩鍖�',code:'01'},
                            {name:'娌充笢鍖�',code:'02'},
                            {name:'娌宠タ鍖�',code:'03'},
                            {name:'鍗楀紑鍖�',code:'04'},
                            {name:'娌冲寳鍖�',code:'05'},
                            {name:'绾㈡ˉ鍖�',code:'06'},
                            {name:'涓滀附鍖�',code:'07'},
                            {name:'瑗块潚鍖�',code:'08'},
                            {name:'娲ュ崡鍖�',code:'09'},
                            {name:'鍖楄景鍖�',code:'10'},
                            {name:'姝︽竻鍖�',code:'11'},
                            {name:'瀹濆澔鍖�',code:'12'},
                            {name:'婊ㄦ捣鏂板尯',code:'13'},
                            {name:'瀹佹渤鍖�',code:'14'},
                            {name:'闈欐捣鍖�',code:'15'},
                            {name:'钃熷窞鍖�',code:'16'}
                        ]
                    }]
                }},{
                region:{
                    name:'娌冲寳', // 12
                    code:'13',
                    state:[{
                        name:'鐭冲搴勫競', // 21涓競杈栧尯
                        code:'01',
                        city:[
                            {name:'闀垮畨鍖�',code:'02'},
                            {name:'妗ヨタ鍖�',code:'04'},
                            {name:'鏂板崕鍖�',code:'05'},
                            {name:'浜曢檳鐭垮尯',code:'07'},
                            {name:'瑁曞崕鍖�',code:'08'},
                            {name:'钘佸煄鍖�',code:'09'},
                            {name:'楣挎硥鍖�',code:'10'},
                            {name:'鏍惧煄鍖�',code:'11'},
                            {name:'浜曢檳鍘�',code:'21'},
                            {name:'姝ｅ畾鍘�',code:'23'},
                            {name:'琛屽攼鍘�',code:'25'},
                            {name:'鐏靛鍘�',code:'26'},
                            {name:'楂橀倯鍘�',code:'27'},
                            {name:'娣辨辰鍘�',code:'28'},
                            {name:'璧炵殗鍘�',code:'29'},
                            {name:'鏃犳瀬鍘�',code:'30'},
                            {name:'骞冲北鍘�',code:'31'},
                            {name:'鍏冩皬鍘�',code:'32'},
                            {name:'璧靛幙',code:'33'},
                            {name:'鏅嬪窞甯�',code:'83'},
                            {name:'鏂颁箰甯�',code:'84'}
                        ]},{
                        name:'鍞愬北甯�', // 14涓競杈栧尯
                        code:'02',
                        city:[
                            {name:'璺崡鍖�',code:'02'},
                            {name:'璺寳鍖�',code:'03'},
                            {name:'鍙ゅ喍鍖�',code:'04'},
                            {name:'寮€骞冲尯',code:'05'},
                            {name:'涓板崡鍖�',code:'07'},
                            {name:'涓版鼎鍖�',code:'08'},
                            {name:'鏇瑰鐢稿尯',code:'09'},
                            {name:'婊﹀幙',code:'23'},
                            {name:'婊﹀崡鍘�',code:'24'},
                            {name:'涔愪涵鍘�',code:'25'},
                            {name:'杩佽タ鍘�',code:'27'},
                            {name:'鐜夌敯鍘�',code:'29'},
                            {name:'閬靛寲甯�',code:'81'},
                            {name:'杩佸畨甯�',code:'83'}
                        ]},{
                        name:'绉︾殗宀涘競', // 7涓競杈栧尯
                        code:'03',
                        city:[
                            {name:'娴锋腐鍖�',code:'02'},
                            {name:'灞辨捣鍏冲尯',code:'03'},
                            {name:'鍖楁埓娌冲尯',code:'04'},
                            {name:'鎶氬畞鍖�',code:'06'},
                            {name:'闈掗緳婊℃棌鑷不鍘�',code:'21'},
                            {name:'鏄岄粠鍘�',code:'22'},
                            {name:'鍗㈤緳鍘�',code:'24'}
                        ]},{
                        name:'閭兏甯�', // 19涓競杈栧尯
                        code:'04',
                        city:[
                            {name:'閭北鍖�',code:'02'},
                            {name:'涓涘彴鍖�',code:'03'},
                            {name:'澶嶅叴鍖�',code:'04'},
                            {name:'宄板嘲鐭垮尯',code:'06'},
                            {name:'閭兏鍘�',code:'21'},
                            {name:'涓存汲鍘�',code:'23'},
                            {name:'鎴愬畨鍘�',code:'24'},
                            {name:'澶у悕鍘�',code:'25'},
                            {name:'娑夊幙',code:'26'},
                            {name:'纾佸幙',code:'27'},
                            {name:'鑲ヤ埂鍘�',code:'28'},
                            {name:'姘稿勾鍘�',code:'29'},
                            {name:'閭卞幙',code:'30'},
                            {name:'楦℃辰鍘�',code:'31'},
                            {name:'骞垮钩鍘�',code:'32'},
                            {name:'棣嗛櫠鍘�',code:'33'},
                            {name:'榄忓幙',code:'34'},
                            {name:'鏇插懆鍘�',code:'35'},
                            {name:'姝﹀畨甯�',code:'81'}
                        ]},{
                        name:'閭㈠彴甯�', // 19涓競杈栧尯
                        code:'05',
                        city:[
                            {name:'妗ヤ笢鍖�',code:'02'},
                            {name:'妗ヨタ鍖�',code:'03'},
                            {name:'閭㈠彴鍘�',code:'21'},
                            {name:'涓村煄鍘�',code:'22'},
                            {name:'鍐呬笜鍘�',code:'23'},
                            {name:'鏌忎埂鍘�',code:'24'},
                            {name:'闅嗗哀鍘�',code:'25'},
                            {name:'浠诲幙',code:'26'},
                            {name:'鍗楀拰鍘�',code:'27'},
                            {name:'瀹佹檵鍘�',code:'28'},
                            {name:'宸ㄩ箍鍘�',code:'29'},
                            {name:'鏂版渤鍘�',code:'30'},
                            {name:'骞垮畻鍘�',code:'31'},
                            {name:'骞充埂鍘�',code:'32'},
                            {name:'濞佸幙',code:'33'},
                            {name:'娓呮渤鍘�',code:'34'},
                            {name:'涓磋タ鍘�',code:'35'},
                            {name:'鍗楀甯�',code:'81'},
                            {name:'娌欐渤甯�',code:'82'}
                        ]},{
                        name:'淇濆畾甯�', // 23涓競杈栧尯
                        code:'06',
                        city:[
                            {name:'绔炵鍖�',code:'02'},
                            {name:'鑾叉睜鍖�',code:'06'},
                            {name:'婊″煄鍖�',code:'07'},
                            {name:'娓呰嫅鍖�',code:'08'},
                            {name:'寰愭按鍖�',code:'09'},
                            {name:'娑炴按鍘�',code:'23'},
                            {name:'闃滃钩鍘�',code:'24'},
                            {name:'瀹氬叴鍘�',code:'26'},
                            {name:'鍞愬幙',code:'27'},
                            {name:'楂橀槼鍘�',code:'28'},
                            {name:'瀹瑰煄鍘�',code:'29'},
                            {name:'娑炴簮鍘�',code:'30'},
                            {name:'鏈涢兘鍘�',code:'31'},
                            {name:'瀹夋柊鍘�',code:'32'},
                            {name:'鏄撳幙',code:'33'},
                            {name:'鏇查槼鍘�',code:'34'},
                            {name:'锠″幙',code:'35'},
                            {name:'椤哄钩鍘�',code:'36'},
                            {name:'鍗氶噹鍘�',code:'37'},
                            {name:'闆勫幙',code:'38'},
                            {name:'娑垮窞甯�',code:'81'},
                            {name:'瀹夊浗甯�',code:'83'},
                            {name:'楂樼搴楀競',code:'84'}
                        ]},{
                        name:'寮犲鍙ｅ競', // 16涓競杈栧尯
                        code:'07',
                        city:[
                            {name:'妗ヤ笢鍖�',code:'02'},
                            {name:'妗ヨタ鍖�',code:'03'},
                            {name:'瀹ｅ寲鍖�',code:'05'},
                            {name:'涓嬭姳鍥尯',code:'06'},
                            {name:'涓囧叏鍖�',code:'08'},
                            {name:'宕囩ぜ鍖�',code:'09'},
                            {name:'寮犲寳鍘�',code:'22'},
                            {name:'搴蜂繚鍘�',code:'23'},
                            {name:'娌芥簮鍘�',code:'24'},
                            {name:'灏氫箟鍘�',code:'25'},
                            {name:'钄氬幙',code:'26'},
                            {name:'闃冲師鍘�',code:'27'},
                            {name:'鎬€瀹夊幙',code:'28'},
                            {name:'鎬€鏉ュ幙',code:'30'},
                            {name:'娑块箍鍘�',code:'31'},
                            {name:'璧ゅ煄鍘�',code:'32'}
                        ]},{
                        name:'鎵垮痉甯�', // 11涓競杈栧尯
                        code:'08',
                        city:[
                            {name:'鍙屾ˉ鍖�',code:'02'},
                            {name:'鍙屾沪鍖�',code:'03'},
                            {name:'楣版墜钀ュ瓙鐭垮尯',code:'04'},
                            {name:'鎵垮痉鍘�',code:'21'},
                            {name:'鍏撮殕鍘�',code:'22'},
                            {name:'骞虫硥鍘�',code:'23'},
                            {name:'婊﹀钩鍘�',code:'24'},
                            {name:'闅嗗寲鍘�',code:'25'},
                            {name:'涓板畞婊℃棌鑷不鍘�',code:'26'},
                            {name:'瀹藉煄婊℃棌鑷不鍘�',code:'27'},
                            {name:'鍥村満婊℃棌钂欏彜鏃忚嚜娌诲幙',code:'28'}
                        ]},{
                        name:'娌у窞甯�', // 16涓競杈栧尯
                        code:'09',
                        city:[
                            {name:'鏂板崕鍖�',code:'02'},
                            {name:'杩愭渤鍖�',code:'03'},
                            {name:'娌у幙',code:'21'},
                            {name:'闈掑幙',code:'22'},
                            {name:'涓滃厜鍘�',code:'23'},
                            {name:'娴峰叴鍘�',code:'24'},
                            {name:'鐩愬北鍘�',code:'25'},
                            {name:'鑲冨畞鍘�',code:'26'},
                            {name:'鍗楃毊鍘�',code:'27'},
                            {name:'鍚存ˉ鍘�',code:'28'},
                            {name:'鐚幙',code:'29'},
                            {name:'瀛熸潙鍥炴棌鑷不鍘�',code:'30'},
                            {name:'娉婂ご甯�',code:'81'},
                            {name:'浠讳笜甯�',code:'82'},
                            {name:'榛勯獏甯�',code:'83'},
                            {name:'娌抽棿甯�',code:'84'}
                        ]},{
                        name:'寤婂潑甯�', // 10涓競杈栧尯
                        code:'10',
                        city:[
                            {name:'瀹夋鍖�',code:'02'},
                            {name:'骞块槼鍖�',code:'03'},
                            {name:'鍥哄畨鍘�',code:'22'},
                            {name:'姘告竻鍘�',code:'23'},
                            {name:'棣欐渤鍘�',code:'24'},
                            {name:'澶у煄鍘�',code:'25'},
                            {name:'鏂囧畨鍘�',code:'26'},
                            {name:'澶у巶鍥炴棌鑷不鍘�',code:'28'},
                            {name:'闇稿窞甯�',code:'81'},
                            {name:'涓夋渤甯�',code:'82'}
                        ]},{
                        name:'琛℃按甯�', // 11涓競杈栧尯
                        code:'11',
                        city:[
                            {name:'妗冨煄鍖�',code:'02'},
                            {name:'鍐€宸炲競',code:'03'},
                            {name:'鏋ｅ己鍘�',code:'21'},
                            {name:'姝﹂倯鍘�',code:'22'},
                            {name:'姝﹀己鍘�',code:'23'},
                            {name:'楗堕槼鍘�',code:'24'},
                            {name:'瀹夊钩鍘�',code:'25'},
                            {name:'鏁呭煄鍘�',code:'26'},
                            {name:'鏅幙',code:'27'},
                            {name:'闃滃煄鍘�',code:'28'},
                            {name:'娣卞窞甯�',code:'82'}
                        ]},{
                        name:'鐪佺洿杈栧幙绾ц鏀垮尯', // 11涓競杈栧尯
                        code:'90',
                        city:[
                            {name:'瀹氬窞甯�',code:'01'},
                            {name:'杈涢泦甯�',code:'02'}
                        ]}
                    ]}},{
                region:{
                    name:'灞辫タ', //11
                    code:'14',
                    state:[{
                        name:'澶師甯�', // 10涓競杈栧尯
                        code:'01',
                        city:[
                            {name:'灏忓簵鍖�',code:'05'},
                            {name:'杩庢辰鍖�',code:'06'},
                            {name:'鏉忚姳宀尯',code:'07'},
                            {name:'灏栬崏鍧尯',code:'08'},
                            {name:'涓囨煆鏋楀尯',code:'09'},
                            {name:'鏅嬫簮鍖�',code:'10'},
                            {name:'娓呭緪鍘�',code:'21'},
                            {name:'闃虫洸鍘�',code:'22'},
                            {name:'濞勭儲鍘�',code:'23'},
                            {name:'鍙や氦甯�',code:'81'}
                        ]},{
                        name:'澶у悓甯�', // 11涓競杈栧尯
                        code:'02',
                        city:[
                            {name:'鍩庡尯',code:'02'},
                            {name:'鐭垮尯',code:'03'},
                            {name:'鍗楅儕鍖�',code:'11'},
                            {name:'鏂拌崳鍖�',code:'12'},
                            {name:'闃抽珮鍘�',code:'21'},
                            {name:'澶╅晣鍘�',code:'22'},
                            {name:'骞跨伒鍘�',code:'23'},
                            {name:'鐏典笜鍘�',code:'24'},
                            {name:'娴戞簮鍘�',code:'25'},
                            {name:'宸︿簯鍘�',code:'26'},
                            {name:'澶у悓鍘�',code:'27'}
                        ]},{
                        name:'闃虫硥甯�', // 5涓競杈栧尯
                        code:'03',
                        city:[
                            {name:'鍩庡尯',code:'02'},
                            {name:'鐭垮尯',code:'03'},
                            {name:'閮婂尯',code:'11'},
                            {name:'骞冲畾鍘�',code:'21'},
                            {name:'鐩傚幙',code:'22'}
                        ]},{
                        name:'闀挎不甯�', // 13涓競杈栧尯
                        code:'04',
                        city:[
                            {name:'鍩庡尯',code:'02'},
                            {name:'閮婂尯',code:'11'},
                            {name:'闀挎不鍘�',code:'21'},
                            {name:'瑗勫灒鍘�',code:'23'},
                            {name:'灞暀鍘�',code:'24'},
                            {name:'骞抽『鍘�',code:'25'},
                            {name:'榛庡煄鍘�',code:'26'},
                            {name:'澹跺叧鍘�',code:'27'},
                            {name:'闀垮瓙鍘�',code:'28'},
                            {name:'姝︿埂鍘�',code:'29'},
                            {name:'娌佸幙',code:'30'},
                            {name:'娌佹簮鍘�',code:'31'},
                            {name:'娼炲煄甯�',code:'81'}
                        ]},{
                        name:'鏅嬪煄甯�', // 6涓競杈栧尯
                        code:'05',
                        city:[
                            {name:'鍩庡尯',code:'02'},
                            {name:'娌佹按鍘�',code:'21'},
                            {name:'闃冲煄鍘�',code:'22'},
                            {name:'闄靛窛鍘�',code:'24'},
                            {name:'娉藉窞鍘�',code:'25'},
                            {name:'楂樺钩甯�',code:'81'}
                        ]},{
                        name:'鏈斿窞甯�', // 6涓競杈栧尯
                        code:'06',
                        city:[
                            {name:'鏈斿煄鍖�',code:'02'},
                            {name:'骞抽瞾鍖�',code:'03'},
                            {name:'灞遍槾鍘�',code:'21'},
                            {name:'搴斿幙',code:'22'},
                            {name:'鍙崇帀鍘�',code:'23'},
                            {name:'鎬€浠佸幙',code:'24'}
                        ]},{
                        name:'鏅嬩腑甯�', // 11涓競杈栧尯
                        code:'07',
                        city:[
                            {name:'姒嗘鍖�',code:'02'},
                            {name:'姒嗙ぞ鍘�',code:'21'},
                            {name:'宸︽潈鍘�',code:'22'},
                            {name:'鍜岄『鍘�',code:'23'},
                            {name:'鏄旈槼鍘�',code:'24'},
                            {name:'瀵块槼鍘�',code:'25'},
                            {name:'澶胺鍘�',code:'26'},
                            {name:'绁佸幙',code:'27'},
                            {name:'骞抽仴鍘�',code:'28'},
                            {name:'鐏电煶鍘�',code:'29'},
                            {name:'浠嬩紤甯�',code:'81'}
                        ]},{
                        name:'杩愬煄甯�', // 13涓競杈栧尯
                        code:'08',
                        city:[
                            {name:'鐩愭箹鍖�',code:'02'},
                            {name:'涓寸寳鍘�',code:'21'},
                            {name:'涓囪崳鍘�',code:'22'},
                            {name:'闂诲枩鍘�',code:'23'},
                            {name:'绋峰北鍘�',code:'24'},
                            {name:'鏂扮粵鍘�',code:'25'},
                            {name:'缁涘幙',code:'26'},
                            {name:'鍨ｆ洸鍘�',code:'27'},
                            {name:'澶忓幙',code:'28'},
                            {name:'骞抽檰鍘�',code:'29'},
                            {name:'鑺煄鍘�',code:'30'},
                            {name:'姘告祹甯�',code:'81'},
                            {name:'娌虫触甯�',code:'82'}
                        ]},{
                        name:'蹇诲窞甯�', // 14涓競杈栧尯
                        code:'09',
                        city:[
                            {name:'蹇诲簻鍖�',code:'02'},
                            {name:'瀹氳鍘�',code:'21'},
                            {name:'浜斿彴鍘�',code:'22'},
                            {name:'浠ｅ幙',code:'23'},
                            {name:'绻佸硻鍘�',code:'24'},
                            {name:'瀹佹鍘�',code:'25'},
                            {name:'闈欎箰鍘�',code:'26'},
                            {name:'绁炴睜鍘�',code:'27'},
                            {name:'浜斿鍘�',code:'28'},
                            {name:'宀㈠矚鍘�',code:'29'},
                            {name:'娌虫洸鍘�',code:'30'},
                            {name:'淇濆痉鍘�',code:'31'},
                            {name:'鍋忓叧鍘�',code:'32'},
                            {name:'鍘熷钩甯�',code:'81'}
                        ]},{
                        name:'涓存本甯�', // 17涓競杈栧尯
                        code:'10',
                        city:[
                            {name:'灏ч兘鍖�',code:'02'},
                            {name:'鏇叉矁鍘�',code:'21'},
                            {name:'缈煎煄鍘�',code:'22'},
                            {name:'瑗勬本鍘�',code:'23'},
                            {name:'娲礊鍘�',code:'24'},
                            {name:'鍙ゅ幙',code:'25'},
                            {name:'瀹夋辰鍘�',code:'26'},
                            {name:'娴北鍘�',code:'27'},
                            {name:'鍚夊幙',code:'28'},
                            {name:'涔″畞鍘�',code:'29'},
                            {name:'澶у畞鍘�',code:'30'},
                            {name:'闅板幙',code:'31'},
                            {name:'姘稿拰鍘�',code:'32'},
                            {name:'钂插幙',code:'33'},
                            {name:'姹捐タ鍘�',code:'34'},
                            {name:'渚┈甯�',code:'81'},
                            {name:'闇嶅窞甯�',code:'82'}
                        ]},{
                        name:'鍚曟甯�', // 13涓競杈栧尯
                        code:'11',
                        city:[
                            {name:'绂荤煶鍖�',code:'02'},
                            {name:'鏂囨按鍘�',code:'21'},
                            {name:'浜ゅ煄鍘�',code:'22'},
                            {name:'鍏村幙',code:'23'},
                            {name:'涓村幙',code:'24'},
                            {name:'鏌虫灄鍘�',code:'25'},
                            {name:'鐭虫ゼ鍘�',code:'26'},
                            {name:'宀氬幙',code:'27'},
                            {name:'鏂瑰北鍘�',code:'28'},
                            {name:'涓槼鍘�',code:'29'},
                            {name:'浜ゅ彛鍘�',code:'30'},
                            {name:'瀛濅箟甯�',code:'81'},
                            {name:'姹鹃槼甯�',code:'82'}
                        ]}
                    ]}},{
                region:{
                    name:'鍐呰挋鍙�', // 12
                    code:'15',
                    state:[{
                        name:'鍛煎拰娴╃壒甯�', // 9涓競杈栧尯
                        code:'01',
                        city:[
                            {name:'鏂板煄鍖�',code:'02'},
                            {name:'鍥炴皯鍖�',code:'03'},
                            {name:'鐜夋硥鍖�',code:'04'},
                            {name:'璧涚綍鍖�',code:'05'},
                            {name:'鍦熼粯鐗瑰乏鏃�',code:'21'},
                            {name:'鎵樺厠鎵樺幙',code:'22'},
                            {name:'鍜屾灄鏍煎皵鍘�',code:'23'},
                            {name:'娓呮按娌冲幙',code:'24'},
                            {name:'姝﹀窛鍘�',code:'25'}
                        ]},{
                        name:'鍖呭ご甯�', // 9涓競杈栧尯
                        code:'02',
                        city:[
                            {name:'涓滄渤鍖�',code:'02'},
                            {name:'鏄嗛兘浠戝尯',code:'03'},
                            {name:'闈掑北鍖�',code:'04'},
                            {name:'鐭虫嫄鍖�',code:'05'},
                            {name:'鐧戒簯閯傚崥鐭垮尯',code:'06'},
                            {name:'涔濆師鍖�',code:'07'},
                            {name:'鍦熼粯鐗瑰彸鏃�',code:'21'},
                            {name:'鍥洪槼鍘�',code:'22'},
                            {name:'杈惧皵缃曡寕鏄庡畨鑱斿悎鏃�',code:'23'}
                        ]},{
                        name:'涔屾捣甯�', // 3涓競杈栧尯
                        code:'03',
                        city:[
                            {name:'娴峰媰婀惧尯',code:'02'},
                            {name:'娴峰崡鍖�',code:'03'},
                            {name:'涔岃揪鍖�',code:'04'}
                        ]},{
                        name:'璧ゅ嘲甯�', // 12涓競杈栧尯
                        code:'04',
                        city:[
                            {name:'绾㈠北鍖�',code:'02'},
                            {name:'鍏冨疂灞卞尯',code:'03'},
                            {name:'鏉惧北鍖�',code:'04'},
                            {name:'闃块瞾绉戝皵娌佹棗',code:'21'},
                            {name:'宸存灄宸︽棗',code:'22'},
                            {name:'宸存灄鍙虫棗',code:'23'},
                            {name:'鏋楄タ鍘�',code:'24'},
                            {name:'鍏嬩粈鍏嬭吘鏃�',code:'25'},
                            {name:'缈佺墰鐗规棗',code:'26'},
                            {name:'鍠€鍠囨瞾鏃�',code:'28'},
                            {name:'瀹佸煄鍘�',code:'29'},
                            {name:'鏁栨眽鏃�',code:'30'}
                        ]},{
                        name:'閫氳窘甯�', // 8涓競杈栧尯
                        code:'05',
                        city:[
                            {name:'绉戝皵娌佸尯',code:'02'},
                            {name:'绉戝皵娌佸乏缈间腑鏃�',code:'21'},
                            {name:'绉戝皵娌佸乏缈煎悗鏃�',code:'22'},
                            {name:'寮€椴佸幙',code:'23'},
                            {name:'搴撲鸡鏃�',code:'24'},
                            {name:'濂堟浖鏃�',code:'25'},
                            {name:'鎵庨瞾鐗规棗',code:'26'},
                            {name:'闇嶆灄閮嫆甯�',code:'81'}
                        ]},{
                        name:'閯傚皵澶氭柉甯�', // 9涓競杈栧尯
                        code:'06',
                        city:[
                            {name:'涓滆儨鍖�',code:'02'},
                            {name:'搴峰反浠€鍖�',code:'03'},
                            {name:'杈炬媺鐗规棗',code:'21'},
                            {name:'鍑嗘牸灏旀棗',code:'22'},
                            {name:'閯傛墭鍏嬪墠鏃�',code:'23'},
                            {name:'閯傛墭鍏嬫棗',code:'24'},
                            {name:'鏉敠鏃�',code:'25'},
                            {name:'涔屽鏃�',code:'26'},
                            {name:'浼婇噾闇嶆礇鏃�',code:'27'}
                        ]},{
                        name:'鍛间鸡璐濆皵甯�', // 14涓競杈栧尯
                        code:'07',
                        city:[
                            {name:'娴锋媺灏斿尯',code:'02'},
                            {name:'鎵庤祲璇哄皵鍖�',code:'03'},
                            {name:'闃胯崳鏃�',code:'21'},
                            {name:'鑾姏杈剧摝杈炬枴灏旀棌鑷不鏃�',code:'22'},
                            {name:'閯備鸡鏄ヨ嚜娌绘棗',code:'23'},
                            {name:'閯傛俯鍏嬫棌鑷不鏃�',code:'24'},
                            {name:'闄堝反灏旇檸鏃�',code:'25'},
                            {name:'鏂板反灏旇檸宸︽棗',code:'26'},
                            {name:'鏂板反灏旇檸鍙虫棗',code:'27'},
                            {name:'婊℃床閲屽競',code:'81'},
                            {name:'鐗欏厠鐭冲競',code:'82'},
                            {name:'鎵庡叞灞競',code:'83'},
                            {name:'棰濆皵鍙ょ撼甯�',code:'84'},
                            {name:'鏍规渤甯�',code:'85'}
                        ]},{
                        name:'宸村溅娣栧皵甯�', // 7涓競杈栧尯
                        code:'08',
                        city:[
                            {name:'涓存渤鍖�',code:'02'},
                            {name:'浜斿師鍘�',code:'21'},
                            {name:'纾村彛鍘�',code:'22'},
                            {name:'涔屾媺鐗瑰墠鏃�',code:'23'},
                            {name:'涔屾媺鐗逛腑鏃�',code:'24'},
                            {name:'涔屾媺鐗瑰悗鏃�',code:'25'},
                            {name:'鏉敠鍚庢棗',code:'26'}
                        ]},{
                        name:'涔屽叞瀵熷竷甯�', // 11涓競杈栧尯
                        code:'09',
                        city:[
                            {name:'闆嗗畞鍖�',code:'02'},
                            {name:'鍗撹祫鍘�',code:'21'},
                            {name:'鍖栧痉鍘�',code:'22'},
                            {name:'鍟嗛兘鍘�',code:'23'},
                            {name:'鍏村拰鍘�',code:'24'},
                            {name:'鍑夊煄鍘�',code:'25'},
                            {name:'瀵熷搱灏斿彸缈煎墠鏃�',code:'26'},
                            {name:'瀵熷搱灏斿彸缈间腑鏃�',code:'27'},
                            {name:'瀵熷搱灏斿彸缈煎悗鏃�',code:'28'},
                            {name:'鍥涘瓙鐜嬫棗',code:'29'},
                            {name:'涓伴晣甯�',code:'81'}
                        ]},{
                        name:'鍏村畨鐩�', // 6涓競杈栧尯
                        code:'22',
                        city:[
                            {name:'涔屽叞娴╃壒甯�',code:'01'},
                            {name:'闃垮皵灞卞競',code:'02'},
                            {name:'绉戝皵娌佸彸缈煎墠鏃�',code:'21'},
                            {name:'绉戝皵娌佸彸缈间腑鏃�',code:'22'},
                            {name:'鎵庤祲鐗规棗',code:'23'},
                            {name:'绐佹硥鍘�',code:'24'}
                        ]},{
                        name:'閿℃灄閮嫆鐩�', // 12涓競杈栧尯
                        code:'25',
                        city:[
                            {name:'浜岃繛娴╃壒甯�',code:'01'},
                            {name:'閿℃灄娴╃壒甯�',code:'02'},
                            {name:'闃垮反鍢庢棗',code:'22'},
                            {name:'鑻忓凹鐗瑰乏鏃�',code:'23'},
                            {name:'鑻忓凹鐗瑰彸鏃�',code:'24'},
                            {name:'涓滀箤鐝犵﹩娌佹棗',code:'25'},
                            {name:'瑗夸箤鐝犵﹩娌佹棗',code:'26'},
                            {name:'澶粏瀵烘棗',code:'27'},
                            {name:'闀堕粍鏃�',code:'28'},
                            {name:'姝ｉ暥鐧芥棗',code:'29'},
                            {name:'姝ｈ摑鏃�',code:'30'},
                            {name:'澶氫鸡鍘�',code:'31'}
                        ]},{
                        name:'闃挎媺鍠勭洘',
                        code:'29',
                        city:[
                            {name:'闃挎媺鍠勫乏鏃�',code:'21'},
                            {name:'闃挎媺鍠勫彸鏃�',code:'22'},
                            {name:'棰濇祹绾虫棗',code:'23'}
                        ]
                    }]
                }},{
                region:{
                    name:'杈藉畞', // 14
                    code:'21',
                    state:[{
                        name:'娌堥槼甯�', // 13涓競杈栧尯
                        code:'01',
                        city:[
                            {name:'鍜屽钩鍖�',code:'02'},
                            {name:'娌堟渤鍖�',code:'03'},
                            {name:'澶т笢鍖�',code:'04'},
                            {name:'鐨囧鍖�',code:'05'},
                            {name:'閾佽タ鍖�',code:'06'},
                            {name:'鑻忓灞尯',code:'11'},
                            {name:'娴戝崡鍖�',code:'12'},
                            {name:'娌堝寳鏂板尯',code:'13'},
                            {name:'浜庢椽鍖�',code:'14'},
                            {name:'杈戒腑鍖�',code:'15'},
                            {name:'搴峰钩鍘�',code:'23'},
                            {name:'娉曞簱鍘�',code:'24'},
                            {name:'鏂版皯甯�',code:'81'}
                        ]},{
                        name:'澶ц繛甯�', // 10涓競杈栧尯
                        code:'02',
                        city:[
                            {name:'涓北鍖�',code:'02'},
                            {name:'瑗垮矖鍖�',code:'03'},
                            {name:'娌欐渤鍙ｅ尯',code:'04'},
                            {name:'鐢樹簳瀛愬尯',code:'11'},
                            {name:'鏃呴『鍙ｅ尯',code:'12'},
                            {name:'閲戝窞鍖�',code:'13'},
                            {name:'鏅叞搴楀尯',code:'14'},
                            {name:'闀挎捣鍘�',code:'24'},
                            {name:'鐡︽埧搴楀競',code:'81'},
                            {name:'搴勬渤甯�',code:'83'}
                        ]},{
                        name:'闉嶅北甯�', // 7涓競杈栧尯
                        code:'03',
                        city:[
                            {name:'閾佷笢鍖�',code:'02'},
                            {name:'閾佽タ鍖�',code:'03'},
                            {name:'绔嬪北鍖�',code:'04'},
                            {name:'鍗冨北鍖�',code:'11'},
                            {name:'鍙板畨鍘�',code:'21'},
                            {name:'宀博婊℃棌鑷不鍘�',code:'23'},
                            {name:'娴峰煄甯�',code:'81'}
                        ]},{
                        name:'鎶氶『甯�', // 7涓競杈栧尯
                        code:'04',
                        city:[
                            {name:'鏂版姎鍖�',code:'02'},
                            {name:'涓滄床鍖�',code:'03'},
                            {name:'鏈涜姳鍖�',code:'04'},
                            {name:'椤哄煄鍖�',code:'11'},
                            {name:'鎶氶『鍘�',code:'21'},
                            {name:'鏂板婊℃棌鑷不鍘�',code:'22'},
                            {name:'娓呭師婊℃棌鑷不鍘�',code:'23'}
                        ]},{
                        name:'鏈邯甯�', // 6涓競杈栧尯
                        code:'05',
                        city:[
                            {name:'骞冲北鍖�',code:'02'},
                            {name:'婧箹鍖�',code:'03'},
                            {name:'鏄庡北鍖�',code:'04'},
                            {name:'鍗楄姮鍖�',code:'05'},
                            {name:'鏈邯婊℃棌鑷不鍘�',code:'21'},
                            {name:'妗撲粊婊℃棌鑷不鍘�',code:'22'}
                        ]},{
                        name:'涓逛笢甯�', // 6涓競杈栧尯
                        code:'06',
                        city:[
                            {name:'鍏冨疂鍖�',code:'02'},
                            {name:'鎸叴鍖�',code:'03'},
                            {name:'鎸畨鍖�',code:'04'},
                            {name:'瀹界敻婊℃棌鑷不鍘�',code:'24'},
                            {name:'涓滄腐甯�',code:'81'},
                            {name:'鍑ゅ煄甯�',code:'82'}
                        ]},{
                        name:'閿﹀窞甯�', // 7涓競杈栧尯
                        code:'07',
                        city:[
                            {name:'鍙ゅ鍖�',code:'02'},
                            {name:'鍑屾渤鍖�',code:'03'},
                            {name:'澶拰鍖�',code:'11'},
                            {name:'榛戝北鍘�',code:'26'},
                            {name:'涔夊幙',code:'27'},
                            {name:'鍑屾捣甯�',code:'81'},
                            {name:'鍖楅晣甯�',code:'82'}
                        ]},{
                        name:'钀ュ彛甯�', // 6涓競杈栧尯
                        code:'08',
                        city:[
                            {name:'绔欏墠鍖�',code:'02'},
                            {name:'瑗垮競鍖�',code:'03'},
                            {name:'椴呴奔鍦堝尯',code:'04'},
                            {name:'鑰佽竟鍖�',code:'11'},
                            {name:'鐩栧窞甯�',code:'81'},
                            {name:'澶х煶妗ュ競',code:'82'}
                        ]},{
                        name:'闃滄柊甯�', // 7涓競杈栧尯
                        code:'09',
                        city:[
                            {name:'娴峰窞鍖�',code:'02'},
                            {name:'鏂伴偙鍖�',code:'03'},
                            {name:'澶钩鍖�',code:'04'},
                            {name:'娓呮渤闂ㄥ尯',code:'05'},
                            {name:'缁嗘渤鍖�',code:'11'},
                            {name:'闃滄柊钂欏彜鏃忚嚜娌诲幙',code:'21'},
                            {name:'褰版鍘�',code:'22'}
                        ]},{
                        name:'杈介槼甯�', // 7涓競杈栧尯
                        code:'10',
                        city:[
                            {name:'鐧藉鍖�',code:'02'},
                            {name:'鏂囧湥鍖�',code:'03'},
                            {name:'瀹忎紵鍖�',code:'04'},
                            {name:'寮撻暱宀尯',code:'05'},
                            {name:'澶瓙娌冲尯',code:'11'},
                            {name:'杈介槼鍘�',code:'21'},
                            {name:'鐏甯�',code:'81'}
                        ]},{
                        name:'鐩橀敠甯�', // 4涓競杈栧尯
                        code:'11',
                        city:[
                            {name:'鍙屽彴瀛愬尯',code:'02'},
                            {name:'鍏撮殕鍙板尯',code:'03'},
                            {name:'澶ф醇鍖�',code:'04'},
                            {name:'鐩樺北鍘�',code:'22'}
                        ]},{
                        name:'閾佸箔甯�', // 7涓競杈栧尯
                        code:'12',
                        city:[
                            {name:'閾跺窞鍖�',code:'02'},
                            {name:'娓呮渤鍖�',code:'04'},
                            {name:'閾佸箔鍘�',code:'21'},
                            {name:'瑗夸赴鍘�',code:'23'},
                            {name:'鏄屽浘鍘�',code:'24'},
                            {name:'璋冨叺灞卞競',code:'81'},
                            {name:'寮€鍘熷競',code:'82'}
                        ]},{
                        name:'鏈濋槼甯�', // 7涓競杈栧尯
                        code:'13',
                        city:[
                            {name:'鍙屽鍖�',code:'02'},
                            {name:'榫欏煄鍖�',code:'03'},
                            {name:'鏈濋槼鍘�',code:'21'},
                            {name:'寤哄钩鍘�',code:'22'},
                            {name:'鍠€鍠囨瞾宸︾考钂欏彜鏃忚嚜娌诲幙',code:'24'},
                            {name:'鍖楃エ甯�',code:'81'},
                            {name:'鍑屾簮甯�',code:'82'}
                        ]},{
                        name:'钁姦宀涘競', // 6涓競杈栧尯
                        code:'14',
                        city:[
                            {name:'杩炲北鍖�',code:'02'},
                            {name:'榫欐腐鍖�',code:'03'},
                            {name:'鍗楃エ鍖�',code:'04'},
                            {name:'缁ヤ腑鍘�',code:'21'},
                            {name:'寤烘槍鍘�',code:'22'},
                            {name:'鍏村煄甯�',code:'81'}
                        ]
                    }]
                }},{
                region:{
                    name:'鍚夋灄', // 9
                    code:'22',
                    state:[{
                        name:'闀挎槬甯�', // 10涓競杈栧尯
                        code:'01',
                        city:[
                            {name:'鍗楀叧鍖�',code:'02'},
                            {name:'瀹藉煄鍖�',code:'03'},
                            {name:'鏈濋槼鍖�',code:'04'},
                            {name:'浜岄亾鍖�',code:'05'},
                            {name:'缁垮洯鍖�',code:'06'},
                            {name:'鍙岄槼鍖�',code:'12'},
                            {name:'涔濆彴鍖�',code:'13'},
                            {name:'鍐滃畨鍘�',code:'22'},
                            {name:'姒嗘爲甯�',code:'82'},
                            {name:'寰锋儬甯�',code:'83'}
                        ]},{
                        name:'鍚夋灄甯�', // 9涓競杈栧尯
                        code:'02',
                        city:[
                            {name:'鏄岄倯鍖�',code:'02'},
                            {name:'榫欐江鍖�',code:'03'},
                            {name:'鑸硅惀鍖�',code:'04'},
                            {name:'涓版弧鍖�',code:'11'},
                            {name:'姘稿悏鍘�',code:'21'},
                            {name:'铔熸渤甯�',code:'81'},
                            {name:'妗︾敻甯�',code:'82'},
                            {name:'鑸掑叞甯�',code:'83'},
                            {name:'纾愮煶甯�',code:'84'}
                        ]},{
                        name:'鍥涘钩甯�', // 6涓競杈栧尯
                        code:'03',
                        city:[
                            {name:'閾佽タ鍖�',code:'02'},
                            {name:'閾佷笢鍖�',code:'03'},
                            {name:'姊ㄦ爲鍘�',code:'22'},
                            {name:'浼婇€氭弧鏃忚嚜娌诲幙',code:'23'},
                            {name:'鍏富宀競',code:'81'},
                            {name:'鍙岃窘甯�',code:'82'}
                        ]},{
                        name:'杈芥簮甯�', // 4涓競杈栧尯
                        code:'04',
                        city:[
                            {name:'榫欏北鍖�',code:'02'},
                            {name:'瑗垮畨鍖�',code:'03'},
                            {name:'涓滀赴鍘�',code:'21'},
                            {name:'涓滆窘鍘�',code:'22'}
                        ]},{
                        name:'閫氬寲甯�', // 7涓競杈栧尯
                        code:'05',
                        city:[
                            {name:'涓滄槍鍖�',code:'02'},
                            {name:'浜岄亾姹熷尯',code:'03'},
                            {name:'閫氬寲鍘�',code:'21'},
                            {name:'杈夊崡鍘�',code:'23'},
                            {name:'鏌虫渤鍘�',code:'24'},
                            {name:'姊呮渤鍙ｅ競',code:'81'},
                            {name:'闆嗗畨甯�',code:'82'}
                        ]},{
                        name:'鐧藉北甯�', // 6涓競杈栧尯
                        code:'06',
                        city:[
                            {name:'娴戞睙鍖�',code:'02'},
                            {name:'姹熸簮鍖�',code:'05'},
                            {name:'鎶氭澗鍘�',code:'21'},
                            {name:'闈栧畤鍘�',code:'22'},
                            {name:'闀跨櫧鏈濋矞鏃忚嚜娌诲幙',code:'23'},
                            {name:'涓存睙甯�',code:'81'}
                        ]},{
                        name:'鏉惧師甯�', // 5涓競杈栧尯
                        code:'07',
                        city:[
                            {name:'瀹佹睙鍖�',code:'02'},
                            {name:'鍓嶉儹灏旂綏鏂挋鍙ゆ棌鑷不鍘�',code:'21'},
                            {name:'闀垮箔鍘�',code:'22'},
                            {name:'涔惧畨鍘�',code:'23'},
                            {name:'鎵朵綑甯�',code:'81'}
                        ]},{
                        name:'鐧藉煄甯�', // 5涓競杈栧尯
                        code:'08',
                        city:[
                            {name:'娲寳鍖�',code:'02'},
                            {name:'闀囪祲鍘�',code:'21'},
                            {name:'閫氭鍘�',code:'22'},
                            {name:'娲崡甯�',code:'81'},
                            {name:'澶у畨甯�',code:'82'}
                        ]},{
                        name:'寤惰竟鏈濋矞鏃忚嚜娌诲窞', // 8涓競杈栧尯
                        code:'24',
                        city:[
                            {name:'寤跺悏甯�',code:'01'},
                            {name:'鍥句滑甯�',code:'02'},
                            {name:'鏁﹀寲甯�',code:'03'},
                            {name:'鐝叉槬甯�',code:'04'},
                            {name:'榫欎簳甯�',code:'05'},
                            {name:'鍜岄緳甯�',code:'06'},
                            {name:'姹竻鍘�',code:'24'},
                            {name:'瀹夊浘鍘�',code:'26'}
                        ]
                    }]
                }},{
                region:{
                    name:'榛戦緳姹�', // 13
                    code:'23',
                    state:[{
                        name:'鍝堝皵婊ㄥ競', // 18涓競杈栧尯
                        code:'01',
                        city:[
                            {name:'閬撻噷鍖�',code:'02'},
                            {name:'鍗楀矖鍖�',code:'03'},
                            {name:'閬撳鍖�',code:'04'},
                            {name:'骞虫埧鍖�',code:'08'},
                            {name:'鏉惧寳鍖�',code:'09'},
                            {name:'棣欏潑鍖�',code:'10'},
                            {name:'鍛煎叞鍖�',code:'11'},
                            {name:'闃垮煄鍖�',code:'12'},
                            {name:'渚濆叞鍘�',code:'23'},
                            {name:'鏂规鍘�',code:'24'},
                            {name:'瀹惧幙',code:'25'},
                            {name:'宸村溅鍘�',code:'26'},
                            {name:'鏈ㄥ叞鍘�',code:'27'},
                            {name:'閫氭渤鍘�',code:'28'},
                            {name:'寤跺鍘�',code:'29'},
                            {name:'鍙屽煄甯�',code:'82'},
                            {name:'灏氬織甯�',code:'83'},
                            {name:'浜斿父甯�',code:'84'}
                        ]},{
                        name:'榻愰綈鍝堝皵甯�', // 16涓競杈栧尯
                        code:'02',
                        city:[
                            {name:'榫欐矙鍖�',code:'02'},
                            {name:'寤哄崕鍖�',code:'03'},
                            {name:'閾侀攱鍖�',code:'04'},
                            {name:'鏄傛槀婧尯',code:'05'},
                            {name:'瀵屾媺灏斿熀鍖�',code:'06'},
                            {name:'纰惧瓙灞卞尯',code:'07'},
                            {name:'姊呴噷鏂揪鏂″皵鏃忓尯',code:'08'},
                            {name:'榫欐睙鍘�',code:'21'},
                            {name:'渚濆畨鍘�',code:'23'},
                            {name:'娉版潵鍘�',code:'24'},
                            {name:'鐢樺崡鍘�',code:'25'},
                            {name:'瀵岃鍘�',code:'27'},
                            {name:'鍏嬪北鍘�',code:'29'},
                            {name:'鍏嬩笢鍘�',code:'30'},
                            {name:'鎷滄硥鍘�',code:'31'},
                            {name:'璁锋渤甯�',code:'81'}
                        ]},{
                        name:'楦¤タ甯�', // 9涓競杈栧尯
                        code:'03',
                        city:[
                            {name:'楦″啝鍖�',code:'02'},
                            {name:'鎭掑北鍖�',code:'03'},
                            {name:'婊撮亾鍖�',code:'04'},
                            {name:'姊ㄦ爲鍖�',code:'05'},
                            {name:'鍩庡瓙娌冲尯',code:'06'},
                            {name:'楹诲北鍖�',code:'07'},
                            {name:'楦′笢鍘�',code:'21'},
                            {name:'铏庢灄甯�',code:'81'},
                            {name:'瀵嗗北甯�',code:'82'}
                        ]},{
                        name:'楣ゅ矖甯�', // 8涓競杈栧尯
                        code:'04',
                        city:[
                            {name:'鍚戦槼鍖�',code:'02'},
                            {name:'宸ュ啘鍖�',code:'03'},
                            {name:'鍗楀北鍖�',code:'04'},
                            {name:'鍏村畨鍖�',code:'05'},
                            {name:'涓滃北鍖�',code:'06'},
                            {name:'鍏村北鍖�',code:'07'},
                            {name:'钀濆寳鍘�',code:'21'},
                            {name:'缁ユ花鍘�',code:'22'}
                        ]},{
                        name:'鍙岄腑灞卞競', // 8涓競杈栧尯
                        code:'05',
                        city:[
                            {name:'灏栧北鍖�',code:'02'},
                            {name:'宀笢鍖�',code:'03'},
                            {name:'鍥涙柟鍙板尯',code:'05'},
                            {name:'瀹濆北鍖�',code:'06'},
                            {name:'闆嗚搐鍘�',code:'21'},
                            {name:'鍙嬭皧鍘�',code:'22'},
                            {name:'瀹濇竻鍘�',code:'23'},
                            {name:'楗舵渤鍘�',code:'24'}
                        ]},{
                        name:'澶у簡甯�', // 9涓競杈栧尯
                        code:'06',
                        city:[
                            {name:'钀ㄥ皵鍥惧尯',code:'02'},
                            {name:'榫欏嚖鍖�',code:'03'},
                            {name:'璁╄儭璺尯',code:'04'},
                            {name:'绾㈠矖鍖�',code:'05'},
                            {name:'澶у悓鍖�',code:'06'},
                            {name:'鑲囧窞鍘�',code:'21'},
                            {name:'鑲囨簮鍘�',code:'22'},
                            {name:'鏋楃敻鍘�',code:'23'},
                            {name:'鏉滃皵浼壒钂欏彜鏃忚嚜娌诲幙',code:'24'}
                        ]},{
                        name:'浼婃槬甯�', // 17涓競杈栧尯
                        code:'07',
                        city:[
                            {name:'浼婃槬鍖�',code:'02'},
                            {name:'鍗楀矓鍖�',code:'03'},
                            {name:'鍙嬪ソ鍖�',code:'04'},
                            {name:'瑗挎灄鍖�',code:'05'},
                            {name:'缈犲肠鍖�',code:'06'},
                            {name:'鏂伴潚鍖�',code:'07'},
                            {name:'缇庢邯鍖�',code:'08'},
                            {name:'閲戝北灞尯',code:'09'},
                            {name:'浜旇惀鍖�',code:'10'},
                            {name:'涔岄┈娌冲尯',code:'11'},
                            {name:'姹ゆ椇娌冲尯',code:'12'},
                            {name:'甯﹀箔鍖�',code:'13'},
                            {name:'涔屼紛宀尯',code:'14'},
                            {name:'绾㈡槦鍖�',code:'15'},
                            {name:'涓婄敇宀尯',code:'16'},
                            {name:'鍢夎崼鍘�',code:'22'},
                            {name:'閾佸姏甯�',code:'81'}
                        ]},{
                        name:'浣虫湪鏂競', // 10涓競杈栧尯
                        code:'08',
                        city:[
                            {name:'鍚戦槼鍖�',code:'03'},
                            {name:'鍓嶈繘鍖�',code:'04'},
                            {name:'涓滈鍖�',code:'05'},
                            {name:'閮婂尯',code:'11'},
                            {name:'妗﹀崡鍘�',code:'22'},
                            {name:'妗﹀窛鍘�',code:'26'},
                            {name:'姹ゅ師鍘�',code:'28'},
                            {name:'鍚屾睙甯�',code:'81'},
                            {name:'瀵岄敠甯�',code:'82'},
                            {name:'鎶氳繙甯�',code:'83'}
                        ]},{
                        name:'涓冨彴娌冲競', // 4涓競杈栧尯
                        code:'09',
                        city:[
                            {name:'鏂板叴鍖�',code:'02'},
                            {name:'妗冨北鍖�',code:'03'},
                            {name:'鑼勫瓙娌冲尯',code:'04'},
                            {name:'鍕冨埄鍘�',code:'21'}
                        ]},{
                        name:'鐗′腹姹熷競', // 10涓競杈栧尯
                        code:'10',
                        city:[
                            {name:'涓滃畨鍖�',code:'02'},
                            {name:'闃虫槑鍖�',code:'03'},
                            {name:'鐖辨皯鍖�',code:'04'},
                            {name:'瑗垮畨鍖�',code:'05'},
                            {name:'鏋楀彛鍘�',code:'25'},
                            {name:'缁ヨ姮娌冲競',code:'81'},
                            {name:'娴锋灄甯�',code:'83'},
                            {name:'瀹佸畨甯�',code:'84'},
                            {name:'绌嗘１甯�',code:'85'},
                            {name:'涓滃畞甯�',code:'28'}
                        ]},{
                        name:'榛戞渤甯�', // 6涓競杈栧尯
                        code:'11',
                        city:[
                            {name:'鐖辫緣鍖�',code:'02'},
                            {name:'瀚╂睙鍘�',code:'21'},
                            {name:'閫婂厠鍘�',code:'23'},
                            {name:'瀛欏惔鍘�',code:'24'},
                            {name:'鍖楀畨甯�',code:'81'},
                            {name:'浜斿ぇ杩炴睜甯�',code:'82'}
                        ]},{
                        name:'缁ュ寲甯�', // 10涓競杈栧尯
                        code:'12',
                        city:[
                            {name:'鍖楁灄鍖�',code:'02'},
                            {name:'鏈涘鍘�',code:'21'},
                            {name:'鍏拌タ鍘�',code:'22'},
                            {name:'闈掑唸鍘�',code:'23'},
                            {name:'搴嗗畨鍘�',code:'24'},
                            {name:'鏄庢按鍘�',code:'25'},
                            {name:'缁ユ１鍘�',code:'26'},
                            {name:'瀹夎揪甯�',code:'81'},
                            {name:'鑲囦笢甯�',code:'82'},
                            {name:'娴蜂鸡甯�',code:'83'}
                        ]},{
                        name:'澶у叴瀹夊箔鍦板尯',
                        code:'27',
                        city:[
                            {name:'鍔犳牸杈惧鍖�',code:'01'},
                            {name:'鏉惧箔鍖�',code:'02'},
                            {name:'鏂版灄鍖�',code:'03'},
                            {name:'鍛间腑鍖�',code:'04'},
                            {name:'鍛肩帥鍘�',code:'21'},
                            {name:'濉旀渤鍘�',code:'22'},
                            {name:'婕犳渤鍘�',code:'23'}
                        ]
                    }]
                }},{
                region:{
                    name:'涓婃捣',
                    code:'31',
                    state:[{
                        name:'涓婃捣甯�', // 16涓競杈栧尯
                        code:'01',
                        city:[
                            {name:'榛勬郸鍖�',code:'01'},
                            {name:'寰愭眹鍖�',code:'04'},
                            {name:'闀垮畞鍖�',code:'05'},
                            {name:'闈欏畨鍖�',code:'06'},
                            {name:'鏅檧鍖�',code:'07'},
                            {name:'铏瑰彛鍖�',code:'09'},
                            {name:'鏉ㄦ郸鍖�',code:'10'},
                            {name:'闂佃鍖�',code:'12'},
                            {name:'瀹濆北鍖�',code:'13'},
                            {name:'鍢夊畾鍖�',code:'14'},
                            {name:'娴︿笢鏂板尯',code:'15'},
                            {name:'閲戝北鍖�',code:'16'},
                            {name:'鏉炬睙鍖�',code:'17'},
                            {name:'闈掓郸鍖�',code:'18'},
                            {name:'濂夎搐鍖�',code:'20'},
                            {name:'宕囨槑鍘�',code:'51'}
                        ]
                    }]
                }},{
                region:{
                    name:'姹熻嫃', // 13
                    code:'32',
                    state:[{
                        name:'鍗椾含甯�', // 11涓競杈栧尯
                        code:'01',
                        city:[
                            {name:'鐜勬鍖�',code:'02'},
                            {name:'绉︽樊鍖�',code:'04'},
                            {name:'寤洪偤鍖�',code:'05'},
                            {name:'榧撴ゼ鍖�',code:'06'},
                            {name:'娴﹀彛鍖�',code:'11'},
                            {name:'鏍栭湠鍖�',code:'13'},
                            {name:'闆ㄨ姳鍙板尯',code:'14'},
                            {name:'姹熷畞鍖�',code:'15'},
                            {name:'鍏悎鍖�',code:'16'},
                            {name:'婧ф按鍖�',code:'17'},
                            {name:'楂樻烦鍖�',code:'18'}
                        ]},{
                        name:'鏃犻敗甯�', // 7涓競杈栧尯
                        code:'02',
                        city:[
                            {name:'閿″北鍖�',code:'05'},
                            {name:'鎯犲北鍖�',code:'06'},
                            {name:'婊ㄦ箹鍖�',code:'11'},
                            {name:'姊佹邯鍖�',code:'13'},
                            {name:'鏂板惔鍖�',code:'14'},
                            {name:'姹熼槾甯�',code:'81'},
                            {name:'瀹滃叴甯�',code:'82'}
                        ]},{
                        name:'寰愬窞甯�', // 10涓競杈栧尯
                        code:'03',
                        city:[
                            {name:'榧撴ゼ鍖�',code:'02'},
                            {name:'浜戦緳鍖�',code:'03'},
                            {name:'璐炬豹鍖�',code:'05'},
                            {name:'娉夊北鍖�',code:'11'},
                            {name:'閾滃北鍖�',code:'12'},
                            {name:'涓板幙',code:'21'},
                            {name:'娌涘幙',code:'22'},
                            {name:'鐫㈠畞鍘�',code:'24'},
                            {name:'鏂版矀甯�',code:'81'},
                            {name:'閭冲窞甯�',code:'82'}
                        ]},{
                        name:'甯稿窞甯�', // 6涓競杈栧尯
                        code:'04',
                        city:[
                            {name:'澶╁畞鍖�',code:'02'},
                            {name:'閽熸ゼ鍖�',code:'04'},
                            {name:'鏂板寳鍖�',code:'11'},
                            {name:'姝﹁繘鍖�',code:'12'},
                            {name:'閲戝潧鍖�',code:'13'},
                            {name:'婧ч槼甯�',code:'81'}
                        ]},{
                        name:'鑻忓窞甯�', // 9涓競杈栧尯
                        code:'05',
                        city:[
                            {name:'铏庝笜鍖�',code:'05'},
                            {name:'鍚翠腑鍖�',code:'06'},
                            {name:'鐩稿煄鍖�',code:'07'},
                            {name:'濮戣嫃鍖�',code:'08'},
                            {name:'鍚存睙鍖�',code:'09'},
                            {name:'甯哥啛甯�',code:'81'},
                            {name:'寮犲娓競',code:'82'},
                            {name:'鏄嗗北甯�',code:'83'},
                            {name:'澶粨甯�',code:'85'}
                        ]},{
                        name:'鍗楅€氬競', // 8涓競杈栧尯
                        code:'06',
                        city:[
                            {name:'宕囧窛鍖�',code:'02'},
                            {name:'娓椄鍖�',code:'11'},
                            {name:'閫氬窞鍖�',code:'12'},
                            {name:'娴峰畨鍘�',code:'21'},
                            {name:'濡備笢鍘�',code:'23'},
                            {name:'鍚笢甯�',code:'81'},
                            {name:'濡傜殝甯�',code:'82'},
                            {name:'娴烽棬甯�',code:'84'}
                        ]},{
                        name:'杩炰簯娓競', // 6涓競杈栧尯
                        code:'07',
                        city:[
                            {name:'杩炰簯鍖�',code:'03'},
                            {name:'娴峰窞鍖�',code:'06'},
                            {name:'璧ｆ鍖�',code:'07'},
                            {name:'涓滄捣鍘�',code:'22'},
                            {name:'鐏屼簯鍘�',code:'23'},
                            {name:'鐏屽崡鍘�',code:'24'}
                        ]},{
                        name:'娣畨甯�', // 7涓競杈栧尯
                        code:'08',
                        city:[
                            {name:'娣畨鍖�',code:'03'},
                            {name:'娣槾鍖�',code:'04'},
                            {name:'娓呮睙娴﹀尯',code:'12'},
                            {name:'娲辰鍖�',code:'13'},
                            {name:'娑熸按鍘�',code:'26'},
                            {name:'鐩辩湙鍘�',code:'30'},
                            {name:'閲戞箹鍘�',code:'31'}
                        ]},{
                        name:'鐩愬煄甯�', // 9涓競杈栧尯
                        code:'09',
                        city:[
                            {name:'浜箹鍖�',code:'02'},
                            {name:'鐩愰兘鍖�',code:'03'},
                            {name:'澶т赴鍖�',code:'04'},
                            {name:'鍝嶆按鍘�',code:'21'},
                            {name:'婊ㄦ捣鍘�',code:'22'},
                            {name:'闃滃畞鍘�',code:'23'},
                            {name:'灏勯槼鍘�',code:'24'},
                            {name:'寤烘箹鍘�',code:'25'},
                            {name:'涓滃彴甯�',code:'81'}
                        ]},{
                        name:'鎵窞甯�', // 6涓競杈栧尯
                        code:'10',
                        city:[
                            {name:'骞块櫟鍖�',code:'02'},
                            {name:'閭楁睙鍖�',code:'03'},
                            {name:'姹熼兘鍖�',code:'12'},
                            {name:'瀹濆簲鍘�',code:'23'},
                            {name:'浠緛甯�',code:'81'},
                            {name:'楂橀偖甯�',code:'84'}
                        ]},{
                        name:'闀囨睙甯�', // 6涓競杈栧尯
                        code:'11',
                        city:[
                            {name:'浜彛鍖�',code:'02'},
                            {name:'娑﹀窞鍖�',code:'11'},
                            {name:'涓瑰緬鍖�',code:'12'},
                            {name:'涓归槼甯�',code:'81'},
                            {name:'鎵腑甯�',code:'82'},
                            {name:'鍙ュ甯�',code:'83'}
                        ]},{
                        name:'娉板窞甯�', // 6涓競杈栧尯
                        code:'12',
                        city:[
                            {name:'娴烽櫟鍖�',code:'02'},
                            {name:'楂樻腐鍖�',code:'03'},
                            {name:'濮滃牥甯�',code:'04'},
                            {name:'鍏村寲甯�',code:'81'},
                            {name:'闈栨睙甯�',code:'82'},
                            {name:'娉板叴甯�',code:'83'}
                        ]},{
                        name:'瀹胯縼甯�', // 5涓競杈栧尯
                        code:'13',
                        city:[
                            {name:'瀹垮煄鍖�',code:'02'},
                            {name:'瀹胯鲍鍖�',code:'11'},
                            {name:'娌槼鍘�',code:'22'},
                            {name:'娉楅槼鍘�',code:'23'},
                            {name:'娉楁椽鍘�',code:'24'}
                        ]
                    }]
                }},{
                region:{
                    name:'娴欐睙',
                    code:'33',
                    state:[{
                        name:'鏉窞甯�', // 13涓競杈栧尯
                        code:'01',
                        city:[
                            {name:'涓婂煄鍖�',code:'02'},
                            {name:'涓嬪煄鍖�',code:'03'},
                            {name:'姹熷共鍖�',code:'04'},
                            {name:'鎷卞鍖�',code:'05'},
                            {name:'瑗挎箹鍖�',code:'06'},
                            {name:'婊ㄦ睙鍖�',code:'08'},
                            {name:'钀у北鍖�',code:'09'},
                            {name:'浣欐澀鍖�',code:'10'},
                            {name:'瀵岄槼鍖�',code:'11'},
                            {name:'妗愬簮鍘�',code:'22'},
                            {name:'娣冲畨鍘�',code:'27'},
                            {name:'寤哄痉甯�',code:'82'},
                            {name:'涓村畨甯�',code:'85'}
                        ]},{
                        name:'瀹佹尝甯�', // 11涓競杈栧尯
                        code:'02',
                        city:[
                            {name:'娴锋洐鍖�',code:'03'},
                            {name:'姹熶笢鍖�',code:'04'},
                            {name:'姹熷寳鍖�',code:'05'},
                            {name:'鍖椾粦鍖�',code:'06'},
                            {name:'闀囨捣鍖�',code:'11'},
                            {name:'閯炲窞鍖�',code:'12'},
                            {name:'璞″北鍘�',code:'25'},
                            {name:'瀹佹捣鍘�',code:'26'},
                            {name:'浣欏甯�',code:'81'},
                            {name:'鎱堟邯甯�',code:'82'},
                            {name:'濂夊寲甯�',code:'83'}
                        ]},{
                        name:'娓╁窞甯�', // 11涓競杈栧尯
                        code:'03',
                        city:[
                            {name:'楣垮煄鍖�',code:'02'},
                            {name:'榫欐咕鍖�',code:'03'},
                            {name:'鐡捣鍖�',code:'04'},
                            {name:'娲炲ご鍘�',code:'22'},
                            {name:'姘稿槈鍘�',code:'24'},
                            {name:'骞抽槼鍘�',code:'26'},
                            {name:'鑻嶅崡鍘�',code:'27'},
                            {name:'鏂囨垚鍘�',code:'28'},
                            {name:'娉伴『鍘�',code:'29'},
                            {name:'鐟炲畨甯�',code:'81'},
                            {name:'涔愭竻甯�',code:'82'}
                        ]},{
                        name:'鍢夊叴甯�', // 7涓競杈栧尯
                        code:'04',
                        city:[
                            {name:'鍗楁箹鍖�',code:'02'},
                            {name:'绉€娲插尯',code:'11'},
                            {name:'鍢夊杽鍘�',code:'21'},
                            {name:'娴风洂鍘�',code:'24'},
                            {name:'娴峰畞甯�',code:'81'},
                            {name:'骞虫箹甯�',code:'82'},
                            {name:'妗愪埂甯�',code:'83'}
                        ]},{
                        name:'婀栧窞甯�', // 5涓競杈栧尯
                        code:'05',
                        city:[
                            {name:'鍚村叴鍖�',code:'02'},
                            {name:'鍗楁禂鍖�',code:'03'},
                            {name:'寰锋竻鍘�',code:'21'},
                            {name:'闀垮叴鍘�',code:'22'},
                            {name:'瀹夊悏鍘�',code:'23'}
                        ]},{
                        name:'缁嶅叴甯�', // 6涓競杈栧尯
                        code:'06',
                        city:[
                            {name:'瓒婂煄鍖�',code:'02'},
                            {name:'鏌ˉ鍖�',code:'03'},
                            {name:'涓婅櫈鍖�',code:'04'},
                            {name:'鏂版槍鍘�',code:'24'},
                            {name:'璇告毃甯�',code:'81'},
                            {name:'宓婂窞甯�',code:'83'}
                        ]},
                        {
                            name: '閲戝崕甯�', // 9涓競杈栧尯
                            code: '07',
                            city: [{
                                name: '濠哄煄鍖�',
                                code: '02'
                            },
                                {
                                    name: '閲戜笢鍖�',
                                    code: '03'
                                },
                                {
                                    name: '姝︿箟鍘�',
                                    code: '23'
                                },
                                {
                                    name: '娴︽睙鍘�',
                                    code: '26'
                                },
                                {
                                    name: '纾愬畨鍘�',
                                    code: '27'
                                },
                                {
                                    name: '鍏版邯甯�',
                                    code: '81'
                                },
                                {
                                    name: '涔変箤甯�',
                                    code: '82'
                                },
                                {
                                    name: '涓滈槼甯�',
                                    code: '83'
                                },
                                {
                                    name: '姘稿悍甯�',
                                    code: '84'
                                }
                            ]
                        },
                        {
                            name: '琛㈠窞甯�', // 6涓競杈栧尯
                            code: '08',
                            city: [{
                                name: '鏌煄鍖�',
                                code: '02'
                            }, {
                                name: '琛㈡睙鍖�',
                                code: '03'
                            }, {
                                name: '甯稿北鍘�',
                                code: '22'
                            }, {
                                name: '寮€鍖栧幙',
                                code: '24'
                            }, {
                                name: '榫欐父鍘�',
                                code: '25'
                            }, {
                                name: '姹熷北甯�',
                                code: '81'
                            }]
                        },
                        {
                            name: '鑸熷北甯�', // 4涓競杈栧尯
                            code: '09',
                            city: [{
                                name: '瀹氭捣鍖�',
                                code: '02'
                            }, {
                                name: '鏅檧鍖�',
                                code: '03'
                            }, {
                                name: '宀卞北鍘�',
                                code: '21'
                            }, {
                                name: '宓婃硹鍘�',
                                code: '22'
                            }]
                        },
                        {
                            name: '鍙板窞甯�', // 9涓競杈栧尯
                            code: '10',
                            city: [{
                                name: '妞掓睙鍖�',
                                code: '02'
                            }, {
                                name: '榛勫博鍖�',
                                code: '03'
                            }, {
                                name: '璺ˉ鍖�',
                                code: '04'
                            }, {
                                name: '鐜夌幆鍘�',
                                code: '21'
                            }, {
                                name: '涓夐棬鍘�',
                                code: '22'
                            }, {
                                name: '澶╁彴鍘�',
                                code: '23'
                            }, {
                                name: '浠欏眳鍘�',
                                code: '24'
                            }, {
                                name: '娓╁箔甯�',
                                code: '81'
                            }, {
                                name: '涓存捣甯�',
                                code: '82'
                            }]
                        },
                        {
                            name: '涓芥按甯�', // 9涓競杈栧尯
                            code: '11',
                            city: [{
                                name: '鑾查兘鍖�',
                                code: '02'
                            }, {
                                name: '闈掔敯鍘�',
                                code: '21'
                            }, {
                                name: '缂欎簯鍘�',
                                code: '22'
                            }, {
                                name: '閬傛槍鍘�',
                                code: '23'
                            }, {
                                name: '鏉鹃槼鍘�',
                                code: '24'
                            }, {
                                name: '浜戝拰鍘�',
                                code: '25'
                            }, {
                                name: '搴嗗厓鍘�',
                                code: '26'
                            }, {
                                name: '鏅畞鐣叉棌鑷不鍘�',
                                code: '27'
                            }, {
                                name: '榫欐硥甯�',
                                code: '81'
                            }]
                        }
                    ]
                }
            },
                {
                    region: {
                        name: '瀹夊窘', //16
                        code: '34',
                        state: [
                            {
                                name: '鍚堣偉甯�', // 9涓競杈栧尯
                                code: '01',
                                city: [
                                    {
                                        name: '鐟舵捣鍖�',
                                        code: '02'
                                    },
                                    {
                                        name: '搴愰槼鍖�',
                                        code: '03'
                                    },
                                    {
                                        name: '铚€灞卞尯',
                                        code: '04'
                                    },
                                    {
                                        name: '鍖呮渤鍖�',
                                        code: '11'
                                    },
                                    {
                                        name: '闀夸赴鍘�',
                                        code: '21'
                                    },
                                    {
                                        name: '鑲ヤ笢鍘�',
                                        code: '22'
                                    },
                                    {
                                        name: '鑲ヨタ鍘�',
                                        code: '23'
                                    },
                                    {
                                        name: '搴愭睙鍘�',
                                        code: '24'
                                    },
                                    {
                                        name: '宸㈡箹甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '鑺滄箹甯�', // 8涓競杈栧尯
                                code: '02',
                                city: [
                                    {
                                        name: '闀滄箹鍖�',
                                        code: '02'
                                    },
                                    {
                                        name: '寮嬫睙鍖�',
                                        code: '03'
                                    },
                                    {
                                        name: '楦犳睙鍖�',
                                        code: '07'
                                    },
                                    {
                                        name: '涓夊北鍖�',
                                        code: '08'
                                    },
                                    {
                                        name: '鑺滄箹鍘�',
                                        code: '21'
                                    },
                                    {
                                        name: '绻佹槍鍘�',
                                        code: '22'
                                    },
                                    {
                                        name: '鍗楅櫟鍘�',
                                        code: '23'
                                    },
                                    {
                                        name: '鏃犱负鍘�',
                                        code: '25'
                                    }]
                            },
                            {
                                name: '铓屽煚甯�', // 7涓競杈栧尯
                                code: '03',
                                city: [
                                    {
                                        name: '榫欏瓙婀栧尯',
                                        code: '02'
                                    }, {
                                        name: '铓屽北鍖�',
                                        code: '03'
                                    }, {
                                        name: '绂逛細鍖�',
                                        code: '04'
                                    }, {
                                        name: '娣笂鍖�',
                                        code: '11'
                                    }, {
                                        name: '鎬€杩滃幙',
                                        code: '21'
                                    }, {
                                        name: '浜旀渤鍘�',
                                        code: '22'
                                    }, {
                                        name: '鍥洪晣鍘�',
                                        code: '23'
                                    }]
                            },
                            {
                                name: '娣崡甯�', // 7涓競杈栧尯
                                code: '04',
                                city: [{
                                    name: '澶ч€氬尯',
                                    code: '02'
                                }, {
                                    name: '鐢板搴靛尯',
                                    code: '03'
                                }, {
                                    name: '璋㈠闆嗗尯',
                                    code: '04'
                                }, {
                                    name: '鍏叕灞卞尯',
                                    code: '05'
                                }, {
                                    name: '娼橀泦鍖�',
                                    code: '06'
                                }, {
                                    name: '鍑ゅ彴鍘�',
                                    code: '21'
                                }, {
                                    name: '瀵垮幙',
                                    code: '22'
                                }]
                            },
                            {
                                name: '椹瀺灞卞競', // 6涓競杈栧尯
                                code: '05',
                                city: [
                                    {
                                        name: '鑺卞北鍖�',
                                        code: '03'
                                    }, {
                                        name: '闆ㄥ北鍖�',
                                        code: '04'
                                    }, {
                                        name: '鍗氭湜鍖�',
                                        code: '06'
                                    }, {
                                        name: '褰撴秱鍘�',
                                        code: '21'
                                    }, {
                                        name: '鍚北鍘�',
                                        code: '22'
                                    }, {
                                        name: '鍜屽幙',
                                        code: '23'
                                    }]
                            },
                            {
                                name: '娣寳甯�', // 4涓競杈栧尯
                                code: '06',
                                city: [{
                                    name: '鏉滈泦鍖�',
                                    code: '02'
                                }, {
                                    name: '鐩稿北鍖�',
                                    code: '03'
                                }, {
                                    name: '鐑堝北鍖�',
                                    code: '04'
                                }, {
                                    name: '婵夋邯鍘�',
                                    code: '21'
                                }]
                            },
                            {
                                name: '閾滈櫟甯�', // 4涓競杈栧尯
                                code: '07',
                                city: [{
                                    name: '閾滃畼鍖�',
                                    code: '05'
                                }, {
                                    name: '涔夊畨鍖�',
                                    code: '06'
                                }, {
                                    name: '閮婂尯',
                                    code: '11'
                                }, {
                                    name: '鏋為槼鍘�',
                                    code: '22'
                                }]
                            },
                            {
                                name: '瀹夊簡甯�', // 10涓競杈栧尯
                                code: '08',
                                city: [{
                                    name: '杩庢睙鍖�',
                                    code: '02'
                                }, {
                                    name: '澶ц鍖�',
                                    code: '03'
                                }, {
                                    name: '瀹滅鍖�',
                                    code: '11'
                                }, {
                                    name: '鎬€瀹佸幙',
                                    code: '22'
                                },  {
                                    name: '娼滃北鍘�',
                                    code: '24'
                                }, {
                                    name: '澶箹鍘�',
                                    code: '25'
                                }, {
                                    name: '瀹挎澗鍘�',
                                    code: '26'
                                }, {
                                    name: '鏈涙睙鍘�',
                                    code: '27'
                                }, {
                                    name: '宀宠タ鍘�',
                                    code: '28'
                                }, {
                                    name: '妗愬煄甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '榛勫北甯�', // 7涓競杈栧尯
                                code: '10',
                                city: [{
                                    name: '灞邯鍖�',
                                    code: '02'
                                }, {
                                    name: '榛勫北鍖�',
                                    code: '03'
                                }, {
                                    name: '寰藉窞鍖�',
                                    code: '04'
                                }, {
                                    name: '姝欏幙',
                                    code: '21'
                                }, {
                                    name: '浼戝畞鍘�',
                                    code: '22'
                                }, {
                                    name: '榛熷幙',
                                    code: '23'
                                }, {
                                    name: '绁侀棬鍘�',
                                    code: '24'
                                }]
                            },
                            {
                                name: '婊佸窞甯�', // 8涓競杈栧尯
                                code: '11',
                                city: [{
                                    name: '鐞呯悐鍖�',
                                    code: '02'
                                }, {
                                    name: '鍗楄隘鍖�',
                                    code: '03'
                                }, {
                                    name: '鏉ュ畨鍘�',
                                    code: '22'
                                }, {
                                    name: '鍏ㄦ鍘�',
                                    code: '24'
                                }, {
                                    name: '瀹氳繙鍘�',
                                    code: '25'
                                }, {
                                    name: '鍑ら槼鍘�',
                                    code: '26'
                                }, {
                                    name: '澶╅暱甯�',
                                    code: '81'
                                }, {
                                    name: '鏄庡厜甯�',
                                    code: '82'
                                }]
                            },
                            {
                                name: '闃滈槼甯�', // 8涓競杈栧尯
                                code: '12',
                                city: [{
                                    name: '棰嶅窞鍖�',
                                    code: '02'
                                }, {
                                    name: '棰嶄笢鍖�',
                                    code: '03'
                                }, {
                                    name: '棰嶆硥鍖�',
                                    code: '04'
                                }, {
                                    name: '涓存硥鍘�',
                                    code: '21'
                                }, {
                                    name: '澶拰鍘�',
                                    code: '22'
                                }, {
                                    name: '闃滃崡鍘�',
                                    code: '25'
                                }, {
                                    name: '棰嶄笂鍘�',
                                    code: '26'
                                }, {
                                    name: '鐣岄甯�',
                                    code: '82'
                                }]
                            },
                            {
                                name: '瀹垮窞甯�', // 5涓競杈栧尯
                                code: '13',
                                city: [{
                                    name: '鍩囨ˉ鍖�',
                                    code: '02'
                                }, {
                                    name: '鐮€灞卞幙',
                                    code: '21'
                                }, {
                                    name: '钀у幙',
                                    code: '22'
                                }, {
                                    name: '鐏电挧鍘�',
                                    code: '23'
                                }, {
                                    name: '娉楀幙',
                                    code: '24'
                                }]
                            },
                            {
                                name: '鍏畨甯�', // 7涓競杈栧尯
                                code: '15',
                                city: [{
                                    name: '閲戝畨鍖�',
                                    code: '02'
                                }, {
                                    name: '瑁曞畨鍖�',
                                    code: '03'
                                }, {
                                    name: '鍙堕泦鍖�',
                                    code: '04'
                                }, {
                                    name: '闇嶉偙鍘�',
                                    code: '22'
                                }, {
                                    name: '鑸掑煄鍘�',
                                    code: '23'
                                }, {
                                    name: '閲戝鍘�',
                                    code: '24'
                                }, {
                                    name: '闇嶅北鍘�',
                                    code: '25'
                                }]
                            },
                            {
                                name: '浜冲窞甯�', // 4涓競杈栧尯
                                code: '16',
                                city: [{
                                    name: '璋煄鍖�',
                                    code: '02'
                                }, {
                                    name: '娑￠槼鍘�',
                                    code: '21'
                                }, {
                                    name: '钂欏煄鍘�',
                                    code: '22'
                                }, {
                                    name: '鍒╄緵鍘�',
                                    code: '23'
                                }]
                            },
                            {
                                name: '姹犲窞甯�', // 4涓競杈栧尯
                                code: '17',
                                city: [{
                                    name: '璐垫睜鍖�',
                                    code: '02'
                                }, {
                                    name: '涓滆嚦鍘�',
                                    code: '21'
                                }, {
                                    name: '鐭冲彴鍘�',
                                    code: '22'
                                }, {
                                    name: '闈掗槼鍘�',
                                    code: '23'
                                }]
                            },
                            {
                                name: '瀹ｅ煄甯�', // 7涓競杈栧尯
                                code: '18',
                                city: [
                                    {
                                        name: '瀹ｅ窞鍖�',
                                        code: '02'
                                    }, {
                                        name: '閮庢邯鍘�',
                                        code: '21'
                                    }, {
                                        name: '骞垮痉鍘�',
                                        code: '22'
                                    }, {
                                        name: '娉惧幙',
                                        code: '23'
                                    }, {
                                        name: '缁╂邯鍘�',
                                        code: '24'
                                    }, {
                                        name: '鏃屽痉鍘�',
                                        code: '25'
                                    }, {
                                        name: '瀹佸浗甯�',
                                        code: '81'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    region: {
                        name: '绂忓缓', // 9
                        code: '35',
                        state: [
                            {
                                name: '绂忓窞甯�', // 13涓競杈栧尯銆佸幙
                                code: '01',
                                city: [
                                    {
                                        name: '榧撴ゼ鍖�',
                                        code: '02'
                                    }, {
                                        name: '鍙版睙鍖�',
                                        code: '03'
                                    }, {
                                        name: '浠撳北鍖�',
                                        code: '04'
                                    }, {
                                        name: '椹熬鍖�',
                                        code: '05'
                                    }, {
                                        name: '鏅嬪畨鍖�',
                                        code: '11'
                                    }, {
                                        name: '闂戒警鍘�',
                                        code: '21'
                                    }, {
                                        name: '杩炴睙鍘�',
                                        code: '22'
                                    }, {
                                        name: '缃楁簮鍘�',
                                        code: '23'
                                    }, {
                                        name: '闂芥竻鍘�',
                                        code: '24'
                                    }, {
                                        name: '姘告嘲鍘�',
                                        code: '25'
                                    }, {
                                        name: '骞虫江鍘�',
                                        code: '28'
                                    }, {
                                        name: '绂忔竻甯�',
                                        code: '81'
                                    }, {
                                        name: '闀夸箰甯�',
                                        code: '82'
                                    }
                                ]
                            },
                            {
                                name: '鍘﹂棬甯�', // 6涓競杈栧尯銆佸幙
                                code: '02',
                                city: [
                                    {
                                        name: '鎬濇槑鍖�',
                                        code: '03'
                                    }, {
                                        name: '娴锋钵鍖�',
                                        code: '05'
                                    }, {
                                        name: '婀栭噷鍖�',
                                        code: '06'
                                    }, {
                                        name: '闆嗙編鍖�',
                                        code: '11'
                                    }, {
                                        name: '鍚屽畨鍖�',
                                        code: '12'
                                    }, {
                                        name: '缈斿畨鍖�',
                                        code: '13'
                                    }
                                ]
                            },
                            {
                                name: '鑾嗙敯甯�', // 5涓競杈栧尯銆佸幙
                                code: '03',
                                city: [
                                    {
                                        name: '鍩庡帰鍖�',
                                        code: '02'
                                    }, {
                                        name: '娑垫睙鍖�',
                                        code: '03'
                                    }, {
                                        name: '鑽斿煄鍖�',
                                        code: '04'
                                    }, {
                                        name: '绉€灞垮尯',
                                        code: '05'
                                    }, {
                                        name: '浠欐父鍘�',
                                        code: '22'
                                    }
                                ]
                            },
                            {
                                name: '涓夋槑甯�', // 12涓競杈栧尯銆佸幙
                                code: '04',
                                city: [
                                    {
                                        name: '姊呭垪鍖�',
                                        code: '02'
                                    }, {
                                        name: '涓夊厓鍖�',
                                        code: '03'
                                    }, {
                                        name: '鏄庢邯鍘�',
                                        code: '21'
                                    }, {
                                        name: '娓呮祦鍘�',
                                        code: '23'
                                    }, {
                                        name: '瀹佸寲鍘�',
                                        code: '24'
                                    }, {
                                        name: '澶х敯鍘�',
                                        code: '25'
                                    }, {
                                        name: '灏ゆ邯鍘�',
                                        code: '26'
                                    }, {
                                        name: '娌欏幙',
                                        code: '27'
                                    }, {
                                        name: '灏嗕箰鍘�',
                                        code: '28'
                                    }, {
                                        name: '娉板畞鍘�',
                                        code: '29'
                                    }, {
                                        name: '寤哄畞鍘�',
                                        code: '30'
                                    }, {
                                        name: '姘稿畨甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '娉夊窞甯�', // 12涓競杈栧尯銆佸幙
                                code: '05',
                                city: [
                                    {
                                        name: '椴ゅ煄鍖�',
                                        code: '02'
                                    }, {
                                        name: '涓版辰鍖�',
                                        code: '03'
                                    }, {
                                        name: '娲涙睙鍖�',
                                        code: '04'
                                    }, {
                                        name: '娉夋腐鍖�',
                                        code: '05'
                                    }, {
                                        name: '鎯犲畨鍘�',
                                        code: '21'
                                    }, {
                                        name: '瀹夋邯鍘�',
                                        code: '24'
                                    }, {
                                        name: '姘告槬鍘�',
                                        code: '25'
                                    }, {
                                        name: '寰峰寲鍘�',
                                        code: '26'
                                    }, {
                                        name: '閲戦棬鍘�',
                                        code: '27'
                                    }, {
                                        name: '鐭崇嫯甯�',
                                        code: '81'
                                    }, {
                                        name: '鏅嬫睙甯�',
                                        code: '82'
                                    }, {
                                        name: '鍗楀畨甯�',
                                        code: '83'
                                    }
                                ]
                            },
                            {
                                name: '婕冲窞甯�', // 11涓競杈栧尯銆佸幙
                                code: '06',
                                city: [
                                    {
                                        name: '鑺楀煄鍖�',
                                        code: '02'
                                    }, {
                                        name: '榫欐枃鍖�',
                                        code: '03'
                                    }, {
                                        name: '浜戦渼鍘�',
                                        code: '22'
                                    }, {
                                        name: '婕虫郸鍘�',
                                        code: '23'
                                    }, {
                                        name: '璇忓畨鍘�',
                                        code: '24'
                                    }, {
                                        name: '闀挎嘲鍘�',
                                        code: '25'
                                    }, {
                                        name: '涓滃北鍘�',
                                        code: '26'
                                    }, {
                                        name: '鍗楅潠鍘�',
                                        code: '27'
                                    }, {
                                        name: '骞冲拰鍘�',
                                        code: '28'
                                    }, {
                                        name: '鍗庡畨鍘�',
                                        code: '29'
                                    }, {
                                        name: '榫欐捣甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '鍗楀钩甯�', // 10涓競杈栧尯銆佸幙
                                code: '07',
                                city: [
                                    {
                                        name: '寤跺钩鍖�',
                                        code: '02'
                                    }, {
                                        name: '寤洪槼鍖�',
                                        code: '03'
                                    }, {
                                        name: '椤烘槍鍘�',
                                        code: '21'
                                    }, {
                                        name: '娴﹀煄鍘�',
                                        code: '22'
                                    }, {
                                        name: '鍏夋辰鍘�',
                                        code: '23'
                                    }, {
                                        name: '鏉炬邯鍘�',
                                        code: '24'
                                    }, {
                                        name: '鏀垮拰鍘�',
                                        code: '25'
                                    }, {
                                        name: '閭垫甯�',
                                        code: '81'
                                    }, {
                                        name: '姝﹀し灞卞競',
                                        code: '82'
                                    }, {
                                        name: '寤虹摨甯�',
                                        code: '83'
                                    }
                                ]
                            },
                            {
                                name: '榫欏博甯�', // 7涓競杈栧尯銆佸幙
                                code: '08',
                                city: [
                                    {
                                        name: '鏂扮綏鍖�',
                                        code: '02'
                                    }, {
                                        name: '姘稿畾鍖�',
                                        code: '03'
                                    }, {
                                        name: '闀挎眬鍘�',
                                        code: '21'
                                    }, {
                                        name: '涓婃澀鍘�',
                                        code: '23'
                                    }, {
                                        name: '姝﹀钩鍘�',
                                        code: '24'
                                    }, {
                                        name: '杩炲煄鍘�',
                                        code: '25'
                                    }, {
                                        name: '婕冲钩甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '瀹佸痉甯�',
                                code: '09',
                                city: [
                                    {
                                        name: '钑夊煄鍖�',
                                        code: '02'
                                    }, {
                                        name: '闇炴郸鍘�',
                                        code: '21'
                                    }, {
                                        name: '鍙ょ敯鍘�',
                                        code: '22'
                                    }, {
                                        name: '灞忓崡鍘�',
                                        code: '23'
                                    }, {
                                        name: '瀵垮畞鍘�',
                                        code: '24'
                                    }, {
                                        name: '鍛ㄥ畞鍘�',
                                        code: '25'
                                    }, {
                                        name: '鏌樿崳鍘�',
                                        code: '26'
                                    }, {
                                        name: '绂忓畨甯�',
                                        code: '81'
                                    }, {
                                        name: '绂忛紟甯�',
                                        code: '82'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    region: {
                        name: '姹熻タ', // 11
                        code: '36',
                        state: [
                            {
                                name: '鍗楁槍甯�', // 9涓競杈栧尯銆佸幙
                                code: '01',
                                city: [
                                    {
                                        name: '涓滄箹鍖�',
                                        code: '02'
                                    }, {
                                        name: '瑗挎箹鍖�',
                                        code: '03'
                                    }, {
                                        name: '闈掍簯璋卞尯',
                                        code: '04'
                                    }, {
                                        name: '婀鹃噷鍖�',
                                        code: '05'
                                    }, {
                                        name: '闈掑北婀栧尯',
                                        code: '11'
                                    }, {
                                        name: '鏂板缓鍖�',
                                        code: '12'
                                    }, {
                                        name: '鍗楁槍鍘�',
                                        code: '21'
                                    }, {
                                        name: '瀹変箟鍘�',
                                        code: '23'
                                    }, {
                                        name: '杩涜搐鍘�',
                                        code: '24'
                                    }
                                ]
                            },
                            {
                                name: '鏅痉闀囧競', // 4涓競杈栧尯銆佸幙
                                code: '02',
                                city: [
                                    {
                                        name: '鏄屾睙鍖�',
                                        code: '02'
                                    }, {
                                        name: '鐝犲北鍖�',
                                        code: '03'
                                    }, {
                                        name: '娴鍘�',
                                        code: '22'
                                    }, {
                                        name: '涔愬钩甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '钀嶄埂甯�', // 5涓競杈栧尯銆佸幙
                                code: '03',
                                city: [
                                    {
                                        name: '瀹夋簮鍖�',
                                        code: '02'
                                    }, {
                                        name: '婀樹笢鍖�',
                                        code: '13'
                                    }, {
                                        name: '鑾茶姳鍘�',
                                        code: '21'
                                    }, {
                                        name: '涓婃牀鍘�',
                                        code: '22'
                                    }, {
                                        name: '鑺︽邯鍘�',
                                        code: '23'
                                    }
                                ]
                            },
                            {
                                name: '涔濇睙甯�', // 13涓競杈栧尯銆佸幙
                                code: '04',
                                city: [
                                    {
                                        name: '婵傛邯鍖�',
                                        code: '02'
                                    },
                                    {
                                        name: '娴旈槼鍖�',
                                        code: '03'
                                    }, {
                                        name: '涔濇睙鍘�',
                                        code: '21'
                                    }, {
                                        name: '姝﹀畞鍘�',
                                        code: '23'
                                    }, {
                                        name: '淇按鍘�',
                                        code: '24'
                                    }, {
                                        name: '姘镐慨鍘�',
                                        code: '25'
                                    }, {
                                        name: '寰峰畨鍘�',
                                        code: '26'
                                    }, {
                                        name: '閮芥槍鍘�',
                                        code: '28'
                                    }, {
                                        name: '婀栧彛鍘�',
                                        code: '29'
                                    }, {
                                        name: '褰辰鍘�',
                                        code: '30'
                                    }, {
                                        name: '鐟炴槍甯�',
                                        code: '81'
                                    }, {
                                        name: '鍏遍潚鍩庡競',
                                        code: '82'
                                    },
                                    {
                                        name: '搴愬北甯�',
                                        code: '83'
                                    }
                                ]
                            },
                            {
                                name: '鏂颁綑甯�', // 2涓競杈栧尯銆佸幙
                                code: '05',
                                city: [
                                    {
                                        name: '娓濇按鍖�',
                                        code: '02'
                                    }, {
                                        name: '鍒嗗疁鍘�',
                                        code: '21'
                                    }
                                ]
                            },
                            {
                                name: '楣版江甯�', // 3涓競杈栧尯銆佸幙
                                code: '06',
                                city: [
                                    {
                                        name: '鏈堟箹鍖�',
                                        code: '02'
                                    }, {
                                        name: '浣欐睙鍘�',
                                        code: '22'
                                    }, {
                                        name: '璐垫邯甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '璧ｅ窞甯�', // 18涓競杈栧尯銆佸幙
                                code: '07',
                                city: [
                                    {
                                        name: '绔犺础鍖�',
                                        code: '02'
                                    }, {
                                        name: '鍗楀悍鍖�',
                                        code: '03'
                                    }, {
                                        name: '璧ｅ幙',
                                        code: '21'
                                    }, {
                                        name: '淇′赴鍘�',
                                        code: '22'
                                    }, {
                                        name: '澶т綑鍘�',
                                        code: '23'
                                    }, {
                                        name: '涓婄姽鍘�',
                                        code: '24'
                                    }, {
                                        name: '宕囦箟鍘�',
                                        code: '25'
                                    }, {
                                        name: '瀹夎繙鍘�',
                                        code: '26'
                                    }, {
                                        name: '榫欏崡鍘�',
                                        code: '27'
                                    }, {
                                        name: '瀹氬崡鍘�',
                                        code: '28'
                                    }, {
                                        name: '鍏ㄥ崡鍘�',
                                        code: '29'
                                    }, {
                                        name: '瀹侀兘鍘�',
                                        code: '30'
                                    }, {
                                        name: '浜庨兘鍘�',
                                        code: '31'
                                    }, {
                                        name: '鍏村浗鍘�',
                                        code: '32'
                                    }, {
                                        name: '浼氭槍鍘�',
                                        code: '33'
                                    }, {
                                        name: '瀵讳箤鍘�',
                                        code: '34'
                                    }, {
                                        name: '鐭冲煄鍘�',
                                        code: '35'
                                    }, {
                                        name: '鐟為噾甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '鍚夊畨甯�', // 13涓競杈栧尯銆佸幙
                                code: '08',
                                city: [
                                    {
                                        name: '鍚夊窞鍖�',
                                        code: '02'
                                    }, {
                                        name: '闈掑師鍖�',
                                        code: '03'
                                    }, {
                                        name: '鍚夊畨鍘�',
                                        code: '21'
                                    }, {
                                        name: '鍚夋按鍘�',
                                        code: '22'
                                    }, {
                                        name: '宄℃睙鍘�',
                                        code: '23'
                                    }, {
                                        name: '鏂板共鍘�',
                                        code: '24'
                                    }, {
                                        name: '姘镐赴鍘�',
                                        code: '25'
                                    }, {
                                        name: '娉板拰鍘�',
                                        code: '26'
                                    }, {
                                        name: '閬傚窛鍘�',
                                        code: '27'
                                    }, {
                                        name: '涓囧畨鍘�',
                                        code: '28'
                                    }, {
                                        name: '瀹夌鍘�',
                                        code: '29'
                                    }, {
                                        name: '姘告柊鍘�',
                                        code: '30'
                                    }, {
                                        name: '浜曞唸灞卞競',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '瀹滄槬甯�', // 10涓競杈栧尯銆佸幙
                                code: '09',
                                city: [
                                    {
                                        name: '琚佸窞鍖�',
                                        code: '02'
                                    }, {
                                        name: '濂夋柊鍘�',
                                        code: '21'
                                    }, {
                                        name: '涓囪浇鍘�',
                                        code: '22'
                                    }, {
                                        name: '涓婇珮鍘�',
                                        code: '23'
                                    }, {
                                        name: '瀹滀赴鍘�',
                                        code: '24'
                                    }, {
                                        name: '闈栧畨鍘�',
                                        code: '25'
                                    }, {
                                        name: '閾滈紦鍘�',
                                        code: '26'
                                    }, {
                                        name: '涓板煄甯�',
                                        code: '81'
                                    }, {
                                        name: '妯熸爲甯�',
                                        code: '82'
                                    }, {
                                        name: '楂樺畨甯�',
                                        code: '83'
                                    }]
                            },
                            {
                                name: '鎶氬窞甯�', // 11涓競杈栧尯銆佸幙
                                code: '10',
                                city: [
                                    {
                                        name: '涓村窛鍖�',
                                        code: '02'
                                    }, {
                                        name: '鍗楀煄鍘�',
                                        code: '21'
                                    }, {
                                        name: '榛庡窛鍘�',
                                        code: '22'
                                    }, {
                                        name: '鍗椾赴鍘�',
                                        code: '23'
                                    }, {
                                        name: '宕囦粊鍘�',
                                        code: '24'
                                    }, {
                                        name: '涔愬畨鍘�',
                                        code: '25'
                                    }, {
                                        name: '瀹滈粍鍘�',
                                        code: '26'
                                    }, {
                                        name: '閲戞邯鍘�',
                                        code: '27'
                                    }, {
                                        name: '璧勬邯鍘�',
                                        code: '28'
                                    }, {
                                        name: '涓滀埂鍘�',
                                        code: '29'
                                    }, {
                                        name: '骞挎槍鍘�',
                                        code: '30'
                                    }
                                ]
                            },
                            {
                                name: '涓婇ザ甯�', // 12涓競杈栧尯銆佸幙
                                code: '11',
                                city: [
                                    {
                                        name: '淇″窞鍖�',
                                        code: '02'
                                    }, {
                                        name: '骞夸赴鍖�',
                                        code: '03'
                                    }, {
                                        name: '涓婇ザ鍘�',
                                        code: '21'
                                    }, {
                                        name: '鐜夊北鍘�',
                                        code: '23'
                                    }, {
                                        name: '閾呭北鍘�',
                                        code: '24'
                                    }, {
                                        name: '妯嘲鍘�',
                                        code: '25'
                                    }, {
                                        name: '寮嬮槼鍘�',
                                        code: '26'
                                    }, {
                                        name: '浣欏共鍘�',
                                        code: '27'
                                    }, {
                                        name: '閯遍槼鍘�',
                                        code: '28'
                                    }, {
                                        name: '涓囧勾鍘�',
                                        code: '29'
                                    }, {
                                        name: '濠烘簮鍘�',
                                        code: '30'
                                    }, {
                                        name: '寰峰叴甯�',
                                        code: '31'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    region: {
                        name: '灞变笢', // 17
                        code: '37',
                        state: [
                            {
                                name: '娴庡崡甯�', // 10涓競杈栧尯銆佸幙
                                code: '01',
                                city: [
                                    {
                                        name: '鍘嗕笅鍖�',
                                        code: '02'
                                    }, {
                                        name: '甯備腑鍖�',
                                        code: '03'
                                    }, {
                                        name: '妲愯崼鍖�',
                                        code: '04'
                                    }, {
                                        name: '澶╂ˉ鍖�',
                                        code: '05'
                                    }, {
                                        name: '鍘嗗煄鍖�',
                                        code: '12'
                                    }, {
                                        name: '闀挎竻鍖�',
                                        code: '13'
                                    }, {
                                        name: '骞抽槾鍘�',
                                        code: '24'
                                    }, {
                                        name: '娴庨槼鍘�',
                                        code: '25'
                                    }, {
                                        name: '鍟嗘渤鍘�',
                                        code: '26'
                                    }, {
                                        name: '绔犱笜甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '闈掑矝甯�', // 10涓競杈栧尯銆佸幙
                                code: '02',
                                city: [
                                    {
                                        name: '甯傚崡鍖�',
                                        code: '02'
                                    }, {
                                        name: '甯傚寳鍖�',
                                        code: '03'
                                    }, {
                                        name: '榛勫矝鍖�',
                                        code: '11'
                                    }, {
                                        name: '宕傚北鍖�',
                                        code: '12'
                                    }, {
                                        name: '鏉庢钵鍖�',
                                        code: '13'
                                    }, {
                                        name: '鍩庨槼鍖�',
                                        code: '14'
                                    }, {
                                        name: '鑳跺窞甯�',
                                        code: '81'
                                    }, {
                                        name: '鍗冲ⅷ甯�',
                                        code: '82'
                                    }, {
                                        name: '骞冲害甯�',
                                        code: '83'
                                    }, {
                                        name: '鑾辫タ甯�',
                                        code: '85'
                                    }
                                ]
                            },
                            {
                                name: '娣勫崥甯�', // 8涓競杈栧尯銆佸幙
                                code: '03',
                                city: [
                                    {
                                        name: '娣勫窛鍖�',
                                        code: '02'
                                    }, {
                                        name: '寮犲簵鍖�',
                                        code: '03'
                                    }, {
                                        name: '鍗氬北鍖�',
                                        code: '04'
                                    }, {
                                        name: '涓存穭鍖�',
                                        code: '05'
                                    }, {
                                        name: '鍛ㄦ潙鍖�',
                                        code: '06'
                                    }, {
                                        name: '妗撳彴鍘�',
                                        code: '21'
                                    }, {
                                        name: '楂橀潚鍘�',
                                        code: '22'
                                    }, {
                                        name: '娌傛簮鍘�',
                                        code: '23'
                                    }
                                ]
                            },
                            {
                                name: '鏋ｅ簞甯�', // 6涓競杈栧尯銆佸幙
                                code: '04',
                                city: [
                                    {
                                        name: '甯備腑鍖�',
                                        code: '02'
                                    }, {
                                        name: '钖涘煄鍖�',
                                        code: '03'
                                    }, {
                                        name: '宄勫煄鍖�',
                                        code: '04'
                                    }, {
                                        name: '鍙板効搴勫尯',
                                        code: '05'
                                    }, {
                                        name: '灞变涵鍖�',
                                        code: '06'
                                    }, {
                                        name: '婊曞窞甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '涓滆惀甯�', // 5涓競杈栧尯銆佸幙
                                code: '05',
                                city: [
                                    {
                                        name: '涓滆惀鍖�',
                                        code: '02'
                                    }, {
                                        name: '娌冲彛鍖�',
                                        code: '03'
                                    }, {
                                        name: '鍨﹀埄鍖�',
                                        code: '05'
                                    }, {
                                        name: '鍒╂触鍘�',
                                        code: '22'
                                    }, {
                                        name: '骞块ザ鍘�',
                                        code: '23'
                                    }
                                ]
                            },
                            {
                                name: '鐑熷彴甯�', // 12涓競杈栧尯銆佸幙
                                code: '06',
                                city: [
                                    {
                                        name: '鑺濈綐鍖�',
                                        code: '02'
                                    }, {
                                        name: '绂忓北鍖�',
                                        code: '11'
                                    }, {
                                        name: '鐗熷钩鍖�',
                                        code: '12'
                                    }, {
                                        name: '鑾卞北鍖�',
                                        code: '13'
                                    }, {
                                        name: '闀垮矝鍘�',
                                        code: '34'
                                    }, {
                                        name: '榫欏彛甯�',
                                        code: '81'
                                    }, {
                                        name: '鑾遍槼甯�',
                                        code: '82'
                                    }, {
                                        name: '鑾卞窞甯�',
                                        code: '83'
                                    }, {
                                        name: '钃幈甯�',
                                        code: '84'
                                    }, {
                                        name: '鎷涜繙甯�',
                                        code: '85'
                                    }, {
                                        name: '鏍栭湠甯�',
                                        code: '86'
                                    }, {
                                        name: '娴烽槼甯�',
                                        code: '87'
                                    }
                                ]
                            },
                            {
                                name: '娼嶅潑甯�', // 12涓競杈栧尯銆佸幙
                                code: '07',
                                city: [
                                    {
                                        name: '娼嶅煄鍖�',
                                        code: '02'
                                    }, {
                                        name: '瀵掍涵鍖�',
                                        code: '03'
                                    }, {
                                        name: '鍧婂瓙鍖�',
                                        code: '04'
                                    }, {
                                        name: '濂庢枃鍖�',
                                        code: '05'
                                    }, {
                                        name: '涓存湊鍘�',
                                        code: '24'
                                    }, {
                                        name: '鏄屼箰鍘�',
                                        code: '25'
                                    }, {
                                        name: '闈掑窞甯�',
                                        code: '81'
                                    }, {
                                        name: '璇稿煄甯�',
                                        code: '82'
                                    }, {
                                        name: '瀵垮厜甯�',
                                        code: '83'
                                    }, {
                                        name: '瀹変笜甯�',
                                        code: '84'
                                    }, {
                                        name: '楂樺瘑甯�',
                                        code: '85'
                                    }, {
                                        name: '鏄岄倯甯�',
                                        code: '86'
                                    }
                                ]
                            },
                            {
                                name: '娴庡畞甯�', // 11涓競杈栧尯銆佸幙
                                code: '08',
                                city: [
                                    {
                                        name: '浠诲煄鍖�',
                                        code: '11'
                                    }, {
                                        name: '鍏栧窞鍖�',
                                        code: '12'
                                    }, {
                                        name: '寰北鍘�',
                                        code: '26'
                                    }, {
                                        name: '楸煎彴鍘�',
                                        code: '27'
                                    }, {
                                        name: '閲戜埂鍘�',
                                        code: '28'
                                    }, {
                                        name: '鍢夌ゥ鍘�',
                                        code: '29'
                                    }, {
                                        name: '姹朵笂鍘�',
                                        code: '30'
                                    }, {
                                        name: '娉楁按鍘�',
                                        code: '31'
                                    }, {
                                        name: '姊佸北鍘�',
                                        code: '32'
                                    }, {
                                        name: '鏇查槣甯�',
                                        code: '81'
                                    }, {
                                        name: '閭瑰煄甯�',
                                        code: '83'
                                    }
                                ]
                            },
                            {
                                name: '娉板畨甯�', // 6涓競杈栧尯銆佸幙
                                code: '09',
                                city: [
                                    {
                                        name: '娉板北鍖�',
                                        code: '02'
                                    }, {
                                        name: '宀卞渤鍖�',
                                        code: '11'
                                    }, {
                                        name: '瀹侀槼鍘�',
                                        code: '21'
                                    }, {
                                        name: '涓滃钩鍘�',
                                        code: '23'
                                    }, {
                                        name: '鏂版嘲甯�',
                                        code: '82'
                                    }, {
                                        name: '鑲ュ煄甯�',
                                        code: '83'
                                    }
                                ]
                            },
                            {
                                name: '濞佹捣甯�', // 4涓競杈栧尯銆佸幙
                                code: '10',
                                city: [
                                    {
                                        name: '鐜繝鍖�',
                                        code: '02'
                                    }, {
                                        name: '鏂囩櫥鍖�',
                                        code: '03'
                                    }, {
                                        name: '鑽ｆ垚甯�',
                                        code: '82'
                                    }, {
                                        name: '涔冲北甯�',
                                        code: '83'
                                    }
                                ]
                            },
                            {
                                name: '鏃ョ収甯�', // 4涓競杈栧尯銆佸幙
                                code: '11',
                                city: [
                                    {
                                        name: '涓滄腐鍖�',
                                        code: '02'
                                    }, {
                                        name: '宀氬北鍖�',
                                        code: '03'
                                    }, {
                                        name: '浜旇幉鍘�',
                                        code: '21'
                                    }, {
                                        name: '鑾掑幙',
                                        code: '22'
                                    }]
                            },
                            {
                                name: '鑾辫姕甯�', // 2涓競杈栧尯銆佸幙
                                code: '12',
                                city: [
                                    {
                                        name: '鑾卞煄鍖�',
                                        code: '02'
                                    }, {
                                        name: '閽㈠煄鍖�',
                                        code: '03'
                                    }
                                ]
                            },
                            {
                                name: '涓存矀甯�', // 12涓競杈栧尯銆佸幙
                                code: '13',
                                city: [
                                    {
                                        name: '鍏板北鍖�',
                                        code: '02'
                                    }, {
                                        name: '缃楀簞鍖�',
                                        code: '11'
                                    }, {
                                        name: '娌充笢鍖�',
                                        code: '12'
                                    }, {
                                        name: '娌傚崡鍘�',
                                        code: '21'
                                    }, {
                                        name: '閮煄鍘�',
                                        code: '22'
                                    }, {
                                        name: '娌傛按鍘�',
                                        code: '23'
                                    }, {
                                        name: '鍏伴櫟鍘�',
                                        code: '24'
                                    }, {
                                        name: '璐瑰幙',
                                        code: '25'
                                    }, {
                                        name: '骞抽倯鍘�',
                                        code: '26'
                                    }, {
                                        name: '鑾掑崡鍘�',
                                        code: '27'
                                    }, {
                                        name: '钂欓槾鍘�',
                                        code: '28'
                                    }, {
                                        name: '涓存箔鍘�',
                                        code: '29'
                                    }
                                ]
                            },
                            {
                                name: '寰峰窞甯�', // 11涓競杈栧尯銆佸幙
                                code: '14',
                                city: [
                                    {
                                        name: '寰峰煄鍖�',
                                        code: '02'
                                    }, {
                                        name: '闄靛煄鍖�',
                                        code: '03'
                                    }, {
                                        name: '瀹佹触鍘�',
                                        code: '22'
                                    }, {
                                        name: '搴嗕簯鍘�',
                                        code: '23'
                                    }, {
                                        name: '涓撮倯鍘�',
                                        code: '24'
                                    }, {
                                        name: '榻愭渤鍘�',
                                        code: '25'
                                    }, {
                                        name: '骞冲師鍘�',
                                        code: '26'
                                    }, {
                                        name: '澶忔触鍘�',
                                        code: '27'
                                    }, {
                                        name: '姝﹀煄鍘�',
                                        code: '28'
                                    }, {
                                        name: '涔愰櫟甯�',
                                        code: '81'
                                    }, {
                                        name: '绂瑰煄甯�',
                                        code: '82'
                                    }
                                ]
                            },
                            {
                                name: '鑱婂煄甯�', // 8涓競杈栧尯銆佸幙
                                code: '15',
                                city: [
                                    {
                                        name: '涓滄槍搴滃尯',
                                        code: '02'
                                    }, {
                                        name: '闃宠胺鍘�',
                                        code: '21'
                                    }, {
                                        name: '鑾樺幙',
                                        code: '22'
                                    }, {
                                        name: '鑼屽钩鍘�',
                                        code: '23'
                                    }, {
                                        name: '涓滈樋鍘�',
                                        code: '24'
                                    }, {
                                        name: '鍐犲幙',
                                        code: '25'
                                    }, {
                                        name: '楂樺攼鍘�',
                                        code: '26'
                                    }, {
                                        name: '涓存竻甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '婊ㄥ窞甯�', // 7涓競杈栧尯銆佸幙
                                code: '16',
                                city: [
                                    {
                                        name: '婊ㄥ煄鍖�',
                                        code: '02'
                                    }, {
                                        name: '娌惧寲鍖�',
                                        code: '03'
                                    }, {
                                        name: '鎯犳皯鍘�',
                                        code: '21'
                                    }, {
                                        name: '闃充俊鍘�',
                                        code: '22'
                                    }, {
                                        name: '鏃犳＃鍘�',
                                        code: '23'
                                    }, {
                                        name: '鍗氬叴鍘�',
                                        code: '25'
                                    }, {
                                        name: '閭瑰钩鍘�',
                                        code: '26'
                                    }
                                ]
                            },
                            {
                                name: '鑿忔辰甯�', // 9涓競杈栧尯銆佸幙
                                code: '17',
                                city: [
                                    {
                                        name: '鐗′腹鍖�',
                                        code: '02'
                                    }, {
                                        name: '瀹氶櫠鍖�',
                                        code: '03'
                                    }, {
                                        name: '鏇瑰幙',
                                        code: '21'
                                    }, {
                                        name: '鍗曞幙',
                                        code: '22'
                                    }, {
                                        name: '鎴愭鍘�',
                                        code: '23'
                                    }, {
                                        name: '宸ㄩ噹鍘�',
                                        code: '24'
                                    }, {
                                        name: '閮撳煄鍘�',
                                        code: '25'
                                    }, {
                                        name: '閯勫煄鍘�',
                                        code: '26'
                                    }, {
                                        name: '涓滄槑鍘�',
                                        code: '28'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    region: {
                        name: '娌冲崡', //18
                        code: '41',
                        state: [
                            {
                                name: '閮戝窞甯�', // 12涓競杈栧尯銆佸幙
                                code: '01',
                                city: [
                                    {
                                        name: '涓師鍖�',
                                        code: '02'
                                    }, {
                                        name: '浜屼竷鍖�',
                                        code: '03'
                                    }, {
                                        name: '绠″煄鍥炴棌鍖�',
                                        code: '04'
                                    }, {
                                        name: '閲戞按鍖�',
                                        code: '05'
                                    }, {
                                        name: '涓婅鍖�',
                                        code: '06'
                                    }, {
                                        name: '鎯犳祹鍖�',
                                        code: '08'
                                    }, {
                                        name: '涓墴鍘�',
                                        code: '22'
                                    }, {
                                        name: '宸╀箟甯�',
                                        code: '81'
                                    }, {
                                        name: '鑽ラ槼甯�',
                                        code: '82'
                                    }, {
                                        name: '鏂板瘑甯�',
                                        code: '83'
                                    }, {
                                        name: '鏂伴儜甯�',
                                        code: '84'
                                    }, {
                                        name: '鐧诲皝甯�',
                                        code: '85'
                                    }
                                ]
                            },
                            {
                                name: '寮€灏佸競', // 10涓競杈栧尯銆佸幙
                                code: '02',
                                city: [
                                    {
                                        name: '榫欎涵鍖�',
                                        code: '02'
                                    }, {
                                        name: '椤烘渤鍥炴棌鍖�',
                                        code: '03'
                                    }, {
                                        name: '榧撴ゼ鍖�',
                                        code: '04'
                                    }, {
                                        name: '绂圭帇鍙板尯',
                                        code: '05'
                                    }, {
                                        name: '閲戞槑鍖�',
                                        code: '11'
                                    }, {
                                        name: '绁ョ鍖�',
                                        code: '12'
                                    }, {
                                        name: '鏉炲幙',
                                        code: '21'
                                    }, {
                                        name: '閫氳鍘�',
                                        code: '22'
                                    }, {
                                        name: '灏夋皬鍘�',
                                        code: '23'
                                    }, {
                                        name: '鍏拌€冨幙',
                                        code: '25'
                                    }
                                ]
                            },
                            {
                                name: '娲涢槼甯�', // 15涓競杈栧尯銆佸幙
                                code: '03',
                                city: [
                                    {
                                        name: '鑰佸煄鍖�',
                                        code: '02'
                                    }, {
                                        name: '瑗垮伐鍖�',
                                        code: '03'
                                    }, {
                                        name: '寤涙渤鍥炴棌鍖�',
                                        code: '04'
                                    }, {
                                        name: '娑цタ鍖�',
                                        code: '05'
                                    }, {
                                        name: '鍚夊埄鍖�',
                                        code: '06'
                                    }, {
                                        name: '娲涢緳鍖�',
                                        code: '11'
                                    }, {
                                        name: '瀛熸触鍘�',
                                        code: '22'
                                    }, {
                                        name: '鏂板畨鍘�',
                                        code: '23'
                                    }, {
                                        name: '鏍惧窛鍘�',
                                        code: '24'
                                    }, {
                                        name: '宓╁幙',
                                        code: '25'
                                    }, {
                                        name: '姹濋槼鍘�',
                                        code: '26'
                                    }, {
                                        name: '瀹滈槼鍘�',
                                        code: '27'
                                    }, {
                                        name: '娲涘畞鍘�',
                                        code: '28'
                                    }, {
                                        name: '浼婂窛鍘�',
                                        code: '29'
                                    }, {
                                        name: '鍋冨笀甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '骞抽《灞卞競', // 10涓競杈栧尯銆佸幙
                                code: '04',
                                city: [
                                    {
                                        name: '鏂板崕鍖�',
                                        code: '02'
                                    }, {
                                        name: '鍗笢鍖�',
                                        code: '03'
                                    }, {
                                        name: '鐭抽緳鍖�',
                                        code: '04'
                                    }, {
                                        name: '婀涙渤鍖�',
                                        code: '11'
                                    }, {
                                        name: '瀹濅赴鍘�',
                                        code: '21'
                                    }, {
                                        name: '鍙跺幙',
                                        code: '22'
                                    }, {
                                        name: '椴佸北鍘�',
                                        code: '23'
                                    }, {
                                        name: '閮忓幙',
                                        code: '25'
                                    }, {
                                        name: '鑸為挗甯�',
                                        code: '81'
                                    }, {
                                        name: '姹濆窞甯�',
                                        code: '82'
                                    }
                                ]
                            },
                            {
                                name: '瀹夐槼甯�', // 9涓競杈栧尯銆佸幙
                                code: '05',
                                city: [
                                    {
                                        name: '鏂囧嘲鍖�',
                                        code: '02'
                                    }, {
                                        name: '鍖楀叧鍖�',
                                        code: '03'
                                    }, {
                                        name: '娈烽兘鍖�',
                                        code: '05'
                                    }, {
                                        name: '榫欏畨鍖�',
                                        code: '06'
                                    }, {
                                        name: '瀹夐槼鍘�',
                                        code: '22'
                                    }, {
                                        name: '姹ら槾鍘�',
                                        code: '23'
                                    }, {
                                        name: '婊戝幙',
                                        code: '26'
                                    }, {
                                        name: '鍐呴粍鍘�',
                                        code: '27'
                                    }, {
                                        name: '鏋楀窞甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '楣ゅ甯�', // 5涓競杈栧尯銆佸幙
                                code: '06',
                                city: [
                                    {
                                        name: '楣ゅ北鍖�',
                                        code: '02'
                                    }, {
                                        name: '灞卞煄鍖�',
                                        code: '03'
                                    }, {
                                        name: '娣囨花鍖�',
                                        code: '11'
                                    }, {
                                        name: '娴氬幙',
                                        code: '21'
                                    }, {
                                        name: '娣囧幙',
                                        code: '22'
                                    }
                                ]
                            },
                            {
                                name: '鏂颁埂甯�', // 12涓競杈栧尯銆佸幙
                                code: '07',
                                city: [
                                    {
                                        name: '绾㈡棗鍖�',
                                        code: '02'
                                    }, {
                                        name: '鍗花鍖�',
                                        code: '03'
                                    }, {
                                        name: '鍑ゆ硥鍖�',
                                        code: '04'
                                    }, {
                                        name: '鐗ч噹鍖�',
                                        code: '11'
                                    }, {
                                        name: '鏂颁埂鍘�',
                                        code: '21'
                                    }, {
                                        name: '鑾峰槈鍘�',
                                        code: '24'
                                    }, {
                                        name: '鍘熼槼鍘�',
                                        code: '25'
                                    }, {
                                        name: '寤舵触鍘�',
                                        code: '26'
                                    }, {
                                        name: '灏佷笜鍘�',
                                        code: '27'
                                    }, {
                                        name: '闀垮灒鍘�',
                                        code: '28'
                                    }, {
                                        name: '鍗緣甯�',
                                        code: '81'
                                    }, {
                                        name: '杈夊幙甯�',
                                        code: '82'
                                    }
                                ]
                            },
                            {
                                name: '鐒︿綔甯�', // 10涓競杈栧尯銆佸幙
                                code: '08',
                                city: [
                                    {
                                        name: '瑙ｆ斁鍖�',
                                        code: '02'
                                    }, {
                                        name: '涓珯鍖�',
                                        code: '03'
                                    }, {
                                        name: '椹潙鍖�',
                                        code: '04'
                                    }, {
                                        name: '灞遍槼鍖�',
                                        code: '11'
                                    }, {
                                        name: '淇鍘�',
                                        code: '21'
                                    }, {
                                        name: '鍗氱埍鍘�',
                                        code: '22'
                                    }, {
                                        name: '姝﹂櫉鍘�',
                                        code: '23'
                                    }, {
                                        name: '娓╁幙',
                                        code: '25'
                                    }, {
                                        name: '娌侀槼甯�',
                                        code: '82'
                                    }, {
                                        name: '瀛熷窞甯�',
                                        code: '83'
                                    }
                                ]
                            },
                            {
                                name: '婵槼甯�', // 6涓競杈栧尯銆佸幙
                                code: '09',
                                city: [
                                    {
                                        name: '鍗庨緳鍖�',
                                        code: '02'
                                    }, {
                                        name: '娓呬赴鍘�',
                                        code: '22'
                                    }, {
                                        name: '鍗椾箰鍘�',
                                        code: '23'
                                    }, {
                                        name: '鑼冨幙',
                                        code: '26'
                                    }, {
                                        name: '鍙板墠鍘�',
                                        code: '27'
                                    }, {
                                        name: '婵槼鍘�',
                                        code: '28'
                                    }
                                ]
                            },
                            {
                                name: '璁告槍甯�', // 6涓競杈栧尯銆佸幙
                                code: '10',
                                city: [
                                    {
                                        name: '榄忛兘鍖�',
                                        code: '02'
                                    }, {
                                        name: '璁告槍鍘�',
                                        code: '23'
                                    }, {
                                        name: '閯㈤櫟鍘�',
                                        code: '24'
                                    }, {
                                        name: '瑗勫煄鍘�',
                                        code: '25'
                                    }, {
                                        name: '绂瑰窞甯�',
                                        code: '81'
                                    }, {
                                        name: '闀胯憶甯�',
                                        code: '82'
                                    }
                                ]
                            },
                            {
                                name: '婕渤甯�', // 6涓競杈栧尯銆佸幙
                                code: '11',
                                city: [
                                    {
                                        name: '婧愭眹鍖�',
                                        code: '02'
                                    }, {
                                        name: '閮惧煄鍖�',
                                        code: '03'
                                    }, {
                                        name: '鍙櫟鍖�',
                                        code: '04'
                                    }, {
                                        name: '鑸為槼鍘�',
                                        code: '21'
                                    }, {
                                        name: '涓撮鍘�',
                                        code: '22'
                                    }
                                ]
                            },
                            {
                                name: '涓夐棬宄″競', // 10涓競杈栧尯銆佸幙
                                code: '12',
                                city: [
                                    {
                                        name: '婀栨花鍖�',
                                        code: '02'
                                    }, {
                                        name: '闄曞窞鍖�',
                                        code: '03'
                                    }, {
                                        name: '娓戞睜鍘�',
                                        code: '21'
                                    }, {
                                        name: '鍗㈡皬鍘�',
                                        code: '24'
                                    }, {
                                        name: '涔夐┈甯�',
                                        code: '81'
                                    }, {
                                        name: '鐏靛疂甯�',
                                        code: '82'
                                    }
                                ]
                            },
                            {
                                name: '鍗楅槼甯�', // 13涓競杈栧尯銆佸幙
                                code: '13',
                                city: [
                                    {
                                        name: '瀹涘煄鍖�',
                                        code: '02'
                                    }, {
                                        name: '鍗ч緳鍖�',
                                        code: '03'
                                    }, {
                                        name: '鍗楀彫鍘�',
                                        code: '21'
                                    }, {
                                        name: '鏂瑰煄鍘�',
                                        code: '22'
                                    }, {
                                        name: '瑗垮场鍘�',
                                        code: '23'
                                    }, {
                                        name: '闀囧钩鍘�',
                                        code: '24'
                                    }, {
                                        name: '鍐呬埂鍘�',
                                        code: '25'
                                    }, {
                                        name: '娣呭窛鍘�',
                                        code: '26'
                                    }, {
                                        name: '绀炬棗鍘�',
                                        code: '27'
                                    }, {
                                        name: '鍞愭渤鍘�',
                                        code: '28'
                                    }, {
                                        name: '鏂伴噹鍘�',
                                        code: '29'
                                    }, {
                                        name: '妗愭煆鍘�',
                                        code: '30'
                                    }, {
                                        name: '閭撳窞甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '鍟嗕笜甯�', // 10涓競杈栧尯銆佸幙
                                code: '14',
                                city: [
                                    {
                                        name: '姊佸洯鍖�',
                                        code: '02'
                                    }, {
                                        name: '鐫㈤槼鍖�',
                                        code: '03'
                                    }, {
                                        name: '姘戞潈鍘�',
                                        code: '21'
                                    }, {
                                        name: '鐫㈠幙',
                                        code: '22'
                                    }, {
                                        name: '瀹侀櫟鍘�',
                                        code: '23'
                                    }, {
                                        name: '鏌樺煄鍘�',
                                        code: '24'
                                    }, {
                                        name: '铏炲煄鍘�',
                                        code: '25'
                                    }, {
                                        name: '澶忛倯鍘�',
                                        code: '26'
                                    }, {
                                        name: '姘稿煄甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '淇￠槼甯�', // 10涓競杈栧尯銆佸幙
                                code: '15',
                                city: [
                                    {
                                        name: '娴夋渤鍖�',
                                        code: '02'
                                    }, {
                                        name: '骞虫ˉ鍖�',
                                        code: '03'
                                    }, {
                                        name: '缃楀北鍘�',
                                        code: '21'
                                    }, {
                                        name: '鍏夊北鍘�',
                                        code: '22'
                                    }, {
                                        name: '鏂板幙',
                                        code: '23'
                                    }, {
                                        name: '鍟嗗煄鍘�',
                                        code: '24'
                                    }, {
                                        name: '鍥哄鍘�',
                                        code: '25'
                                    }, {
                                        name: '娼㈠窛鍘�',
                                        code: '26'
                                    }, {
                                        name: '娣花鍘�',
                                        code: '27'
                                    }, {
                                        name: '鎭幙',
                                        code: '28'
                                    }
                                ]
                            },
                            {
                                name: '鍛ㄥ彛甯�', // 10涓競杈栧尯銆佸幙
                                code: '16',
                                city: [
                                    {
                                        name: '宸濇眹鍖�',
                                        code: '02'
                                    }, {
                                        name: '鎵舵矡鍘�',
                                        code: '21'
                                    }, {
                                        name: '瑗垮崕鍘�',
                                        code: '22'
                                    }, {
                                        name: '鍟嗘按鍘�',
                                        code: '23'
                                    }, {
                                        name: '娌堜笜鍘�',
                                        code: '24'
                                    }, {
                                        name: '閮稿煄鍘�',
                                        code: '25'
                                    }, {
                                        name: '娣槼鍘�',
                                        code: '26'
                                    }, {
                                        name: '澶悍鍘�',
                                        code: '27'
                                    }, {
                                        name: '楣块倯鍘�',
                                        code: '28'
                                    }, {
                                        name: '椤瑰煄甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '椹婚┈搴楀競',
                                code: '17',
                                city: [
                                    {
                                        name: '椹垮煄鍖�',
                                        code: '02'
                                    }, {
                                        name: '瑗垮钩鍘�',
                                        code: '21'
                                    }, {
                                        name: '涓婅敗鍘�',
                                        code: '22'
                                    }, {
                                        name: '骞宠垎鍘�',
                                        code: '23'
                                    }, {
                                        name: '姝ｉ槼鍘�',
                                        code: '24'
                                    }, {
                                        name: '纭北鍘�',
                                        code: '25'
                                    }, {
                                        name: '娉岄槼鍘�',
                                        code: '26'
                                    }, {
                                        name: '姹濆崡鍘�',
                                        code: '27'
                                    }, {
                                        name: '閬傚钩鍘�',
                                        code: '28'
                                    }, {
                                        name: '鏂拌敗鍘�',
                                        code: '29'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    region: {
                        name: '婀栧寳', // 14
                        code: '42',
                        state: [
                            {
                                name: '姝︽眽甯�', // 13涓競杈栧尯銆佸幙
                                code: '01',
                                city: [
                                    {
                                        name: '姹熷哺鍖�',
                                        code: '02'
                                    }, {
                                        name: '姹熸眽鍖�',
                                        code: '03'
                                    }, {
                                        name: '纭氬彛鍖�',
                                        code: '04'
                                    }, {
                                        name: '姹夐槼鍖�',
                                        code: '05'
                                    }, {
                                        name: '姝︽槍鍖�',
                                        code: '06'
                                    }, {
                                        name: '闈掑北鍖�',
                                        code: '07'
                                    }, {
                                        name: '娲北鍖�',
                                        code: '11'
                                    }, {
                                        name: '涓滆タ婀栧尯',
                                        code: '12'
                                    }, {
                                        name: '姹夊崡鍖�',
                                        code: '13'
                                    }, {
                                        name: '钄＄敻鍖�',
                                        code: '14'
                                    }, {
                                        name: '姹熷鍖�',
                                        code: '15'
                                    }, {
                                        name: '榛勯檪鍖�',
                                        code: '16'
                                    }, {
                                        name: '鏂版床鍖�',
                                        code: '17'
                                    }
                                ]
                            },
                            {
                                name: '榛勭煶甯�', // 6涓競杈栧尯銆佸幙
                                code: '02',
                                city: [
                                    {
                                        name: '榛勭煶娓尯',
                                        code: '02'
                                    }, {
                                        name: '瑗垮灞卞尯',
                                        code: '03'
                                    }, {
                                        name: '涓嬮檰鍖�',
                                        code: '04'
                                    }, {
                                        name: '閾佸北鍖�',
                                        code: '05'
                                    }, {
                                        name: '闃虫柊鍘�',
                                        code: '22'
                                    }, {
                                        name: '澶у喍甯�',
                                        code: '81'
                                    }
                                ]
                            },
                            {
                                name: '鍗佸牥甯�', // 8涓競杈栧尯銆佸幙
                                code: '03',
                                city: [{
                                    name: '鑼呯鍖�',
                                    code: '02'
                                }, {
                                    name: '寮犳咕鍖�',
                                    code: '03'
                                }, {
                                    name: '閮ч槼鍖�',
                                    code: '04'
                                }, {
                                    name: '閮цタ鍘�',
                                    code: '22'
                                }, {
                                    name: '绔瑰北鍘�',
                                    code: '23'
                                }, {
                                    name: '绔规邯鍘�',
                                    code: '24'
                                }, {
                                    name: '鎴垮幙',
                                    code: '25'
                                }, {
                                    name: '涓规睙鍙ｅ競',
                                    code: '81'
                                }]
                            },
                            {
                                name: '瀹滄槍甯�', // 13涓競杈栧尯銆佸幙
                                code: '05',
                                city: [{
                                    name: '瑗块櫟鍖�',
                                    code: '02'
                                }, {
                                    name: '浼嶅宀楀尯',
                                    code: '03'
                                }, {
                                    name: '鐐瑰啗鍖�',
                                    code: '04'
                                }, {
                                    name: '鐚囦涵鍖�',
                                    code: '05'
                                }, {
                                    name: '澶烽櫟鍖�',
                                    code: '06'
                                }, {
                                    name: '杩滃畨鍘�',
                                    code: '25'
                                }, {
                                    name: '鍏村北鍘�',
                                    code: '26'
                                }, {
                                    name: '绉綊鍘�',
                                    code: '27'
                                }, {
                                    name: '闀块槼鍦熷鏃忚嚜娌诲幙',
                                    code: '28'
                                }, {
                                    name: '浜斿嘲鍦熷鏃忚嚜娌诲幙',
                                    code: '29'
                                }, {
                                    name: '瀹滈兘甯�',
                                    code: '81'
                                }, {
                                    name: '褰撻槼甯�',
                                    code: '82'
                                }, {
                                    name: '鏋濇睙甯�',
                                    code: '83'
                                }]
                            },
                            {
                                name: '瑗勬▕甯�', // 9涓競杈栧尯銆佸幙
                                code: '06',
                                city: [{
                                    name: '瑗勫煄鍖�',
                                    code: '02'
                                }, {
                                    name: '妯婂煄鍖�',
                                    code: '06'
                                }, {
                                    name: '瑗勫窞鍖�',
                                    code: '07'
                                }, {
                                    name: '鍗楁汲鍘�',
                                    code: '24'
                                }, {
                                    name: '璋峰煄鍘�',
                                    code: '25'
                                }, {
                                    name: '淇濆悍鍘�',
                                    code: '26'
                                }, {
                                    name: '鑰佹渤鍙ｅ競',
                                    code: '82'
                                }, {
                                    name: '鏋ｉ槼甯�',
                                    code: '83'
                                }, {
                                    name: '瀹滃煄甯�',
                                    code: '84'
                                }]
                            },
                            {
                                name: '閯傚窞甯�', // 3涓競杈栧尯銆佸幙
                                code: '07',
                                city: [{
                                    name: '姊佸瓙婀栧尯',
                                    code: '02'
                                }, {
                                    name: '鍗庡鍖�',
                                    code: '03'
                                }, {
                                    name: '閯傚煄鍖�',
                                    code: '04'
                                }]
                            },
                            {
                                name: '鑽嗛棬甯�', // 5涓競杈栧尯銆佸幙
                                code: '08',
                                city: [{
                                    name: '涓滃疂鍖�',
                                    code: '02'
                                }, {
                                    name: '鎺囧垁鍖�',
                                    code: '04'
                                }, {
                                    name: '浜北鍘�',
                                    code: '21'
                                }, {
                                    name: '娌欐磱鍘�',
                                    code: '22'
                                }, {
                                    name: '閽熺ゥ甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '瀛濇劅甯�', // 7涓競杈栧尯銆佸幙
                                code: '09',
                                city: [{
                                    name: '瀛濆崡鍖�',
                                    code: '02'
                                }, {
                                    name: '瀛濇槍鍘�',
                                    code: '21'
                                }, {
                                    name: '澶ф偀鍘�',
                                    code: '22'
                                }, {
                                    name: '浜戞ⅵ鍘�',
                                    code: '23'
                                }, {
                                    name: '搴斿煄甯�',
                                    code: '81'
                                }, {
                                    name: '瀹夐檰甯�',
                                    code: '82'
                                }, {
                                    name: '姹夊窛甯�',
                                    code: '84'
                                }]
                            },
                            {
                                name: '鑽嗗窞甯�', // 8涓競杈栧尯銆佸幙
                                code: '10',
                                city: [{
                                    name: '娌欏競鍖�',
                                    code: '02'
                                }, {
                                    name: '鑽嗗窞鍖�',
                                    code: '03'
                                }, {
                                    name: '鍏畨鍘�',
                                    code: '22'
                                }, {
                                    name: '鐩戝埄鍘�',
                                    code: '23'
                                }, {
                                    name: '姹熼櫟鍘�',
                                    code: '24'
                                }, {
                                    name: '鐭抽甯�',
                                    code: '25'
                                }, {
                                    name: '娲箹甯�',
                                    code: '83'
                                }, {
                                    name: '鏉炬粙甯�',
                                    code: '87'
                                }]
                            },
                            {
                                name: '榛勫唸甯�', // 10涓競杈栧尯銆佸幙
                                code: '11',
                                city: [{
                                    name: '榛勫窞鍖�',
                                    code: '02'
                                }, {
                                    name: '鍥㈤鍘�',
                                    code: '21'
                                }, {
                                    name: '绾㈠畨鍘�',
                                    code: '22'
                                }, {
                                    name: '缃楃敯鍘�',
                                    code: '23'
                                }, {
                                    name: '鑻卞北鍘�',
                                    code: '24'
                                }, {
                                    name: '娴犳按鍘�',
                                    code: '25'
                                }, {
                                    name: '钑叉槬鍘�',
                                    code: '26'
                                }, {
                                    name: '榛勬鍘�',
                                    code: '27'
                                }, {
                                    name: '楹诲煄甯�',
                                    code: '81'
                                }, {
                                    name: '姝︾┐甯�',
                                    code: '82'
                                }]
                            },
                            {
                                name: '鍜稿畞甯�', // 6涓競杈栧尯銆佸幙
                                code: '12',
                                city: [{
                                    name: '鍜稿畨鍖�',
                                    code: '02'
                                }, {
                                    name: '鍢夐奔鍘�',
                                    code: '21'
                                }, {
                                    name: '閫氬煄鍘�',
                                    code: '22'
                                }, {
                                    name: '宕囬槼鍘�',
                                    code: '23'
                                }, {
                                    name: '閫氬北鍘�',
                                    code: '24'
                                }, {
                                    name: '璧ゅ甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '闅忓窞甯�', // 3涓競杈栧尯銆佸幙
                                code: '13',
                                city: [{
                                    name: '鏇鹃兘鍖�',
                                    code: '03'
                                },{
                                    name: '闅忓幙',
                                    code: '21'
                                }, {
                                    name: '骞挎按甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '鎭╂柦鍦熷鏃忚嫍鏃忚嚜娌诲窞', // 8涓競杈栧尯銆佸幙
                                code: '28',
                                city: [{
                                    name: '鎭╂柦甯�',
                                    code: '01'
                                }, {
                                    name: '鍒╁窛甯�',
                                    code: '02'
                                }, {
                                    name: '寤哄鍘�',
                                    code: '22'
                                }, {
                                    name: '宸翠笢鍘�',
                                    code: '23'
                                }, {
                                    name: '瀹ｆ仼鍘�',
                                    code: '25'
                                }, {
                                    name: '鍜镐赴鍘�',
                                    code: '26'
                                }, {
                                    name: '鏉ュ嚖鍘�',
                                    code: '27'
                                }, {
                                    name: '楣ゅ嘲鍘�',
                                    code: '28'
                                }]
                            },
                            {
                                name: '鐪佺洿杈栧幙绾ц鏀垮尯鍒�', // 4涓競杈栧尯銆佸幙
                                code: '90',
                                city: [{
                                    name: '浠欐甯�',
                                    code: '04'
                                }, {
                                    name: '娼滄睙甯�',
                                    code: '05'
                                }, {
                                    name: '澶╅棬甯�',
                                    code: '06'
                                }, {
                                    name: '绁炲啘鏋舵灄鍖�',
                                    code: '21'
                                }]
                            }
                        ]
                    }
                },
                {
                    region: {
                        name: '婀栧崡', // 14
                        code: '43',
                        state: [
                            {
                                name: '闀挎矙甯�', // 9涓競杈栧尯銆佸幙
                                code: '01',
                                city: [{
                                    name: '鑺欒搲鍖�',
                                    code: '02'
                                }, {
                                    name: '澶╁績鍖�',
                                    code: '03'
                                }, {
                                    name: '宀抽簱鍖�',
                                    code: '04'
                                }, {
                                    name: '寮€绂忓尯',
                                    code: '05'
                                }, {
                                    name: '闆ㄨ姳鍖�',
                                    code: '11'
                                }, {
                                    name: '闀挎矙鍘�',
                                    code: '21'
                                }, {
                                    name: '鏈涘煄鍘�',
                                    code: '22'
                                }, {
                                    name: '瀹佷埂鍘�',
                                    code: '24'
                                }, {
                                    name: '娴忛槼甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '鏍床甯�', // 9涓競杈栧尯銆佸幙
                                code: '02',
                                city: [{
                                    name: '鑽峰鍖�',
                                    code: '02'
                                }, {
                                    name: '鑺︽窞鍖�',
                                    code: '03'
                                }, {
                                    name: '鐭冲嘲鍖�',
                                    code: '04'
                                }, {
                                    name: '澶╁厓鍖�',
                                    code: '11'
                                }, {
                                    name: '鏍床鍘�',
                                    code: '21'
                                }, {
                                    name: '鏀稿幙',
                                    code: '23'
                                }, {
                                    name: '鑼堕櫟鍘�',
                                    code: '24'
                                }, {
                                    name: '鐐庨櫟鍘�',
                                    code: '25'
                                }, {
                                    name: '閱撮櫟甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '婀樻江甯�', // 5涓競杈栧尯銆佸幙
                                code: '03',
                                city: [{
                                    name: '闆ㄦ箹鍖�',
                                    code: '02'
                                }, {
                                    name: '宀冲鍖�',
                                    code: '04'
                                }, {
                                    name: '婀樻江鍘�',
                                    code: '21'
                                }, {
                                    name: '婀樹埂甯�',
                                    code: '81'
                                }, {
                                    name: '闊跺北甯�',
                                    code: '82'
                                }]
                            },
                            {
                                name: '琛￠槼甯�', // 12涓競杈栧尯銆佸幙
                                code: '04',
                                city: [{
                                    name: '鐝犳櫀鍖�',
                                    code: '05'
                                }, {
                                    name: '闆佸嘲鍖�',
                                    code: '06'
                                }, {
                                    name: '鐭抽紦鍖�',
                                    code: '07'
                                }, {
                                    name: '钂告箻鍖�',
                                    code: '08'
                                }, {
                                    name: '鍗楀渤鍖�',
                                    code: '12'
                                }, {
                                    name: '琛￠槼鍘�',
                                    code: '21'
                                }, {
                                    name: '琛″崡鍘�',
                                    code: '22'
                                }, {
                                    name: '琛″北鍘�',
                                    code: '23'
                                }, {
                                    name: '琛′笢鍘�',
                                    code: '24'
                                }, {
                                    name: '绁佷笢鍘�',
                                    code: '26'
                                }, {
                                    name: '鑰掗槼甯�',
                                    code: '81'
                                }, {
                                    name: '甯稿畞甯�',
                                    code: '82'
                                }]
                            },
                            {
                                name: '閭甸槼甯�', // 12涓競杈栧尯銆佸幙
                                code: '05',
                                city: [{
                                    name: '鍙屾竻鍖�',
                                    code: '02'
                                }, {
                                    name: '澶хゥ鍖�',
                                    code: '03'
                                }, {
                                    name: '鍖楀鍖�',
                                    code: '11'
                                }, {
                                    name: '閭典笢鍘�',
                                    code: '21'
                                }, {
                                    name: '鏂伴偟鍘�',
                                    code: '22'
                                }, {
                                    name: '閭甸槼鍘�',
                                    code: '23'
                                }, {
                                    name: '闅嗗洖鍘�',
                                    code: '24'
                                }, {
                                    name: '娲炲彛鍘�',
                                    code: '25'
                                }, {
                                    name: '缁ュ畞鍘�',
                                    code: '27'
                                }, {
                                    name: '鏂板畞鍘�',
                                    code: '28'
                                }, {
                                    name: '鍩庢鑻楁棌鑷不鍘�',
                                    code: '29'
                                }, {
                                    name: '姝﹀唸甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '宀抽槼甯�', // 9涓競杈栧尯銆佸幙
                                code: '06',
                                city: [{
                                    name: '宀抽槼妤煎尯',
                                    code: '02'
                                }, {
                                    name: '浜戞邯鍖�',
                                    code: '03'
                                }, {
                                    name: '鍚涘北鍖�',
                                    code: '11'
                                }, {
                                    name: '宀抽槼鍘�',
                                    code: '21'
                                }, {
                                    name: '鍗庡鍘�',
                                    code: '23'
                                }, {
                                    name: '婀橀槾鍘�',
                                    code: '24'
                                }, {
                                    name: '骞虫睙鍘�',
                                    code: '26'
                                }, {
                                    name: '姹ㄧ綏甯�',
                                    code: '81'
                                }, {
                                    name: '涓存箻甯�',
                                    code: '82'
                                }]
                            },
                            {
                                name: '甯稿痉甯�', // 9涓競杈栧尯銆佸幙
                                code: '07',
                                city: [{
                                    name: '姝﹂櫟鍖�',
                                    code: '02'
                                }, {
                                    name: '榧庡煄鍖�',
                                    code: '03'
                                }, {
                                    name: '瀹変埂鍘�',
                                    code: '21'
                                }, {
                                    name: '姹夊鍘�',
                                    code: '22'
                                }, {
                                    name: '婢у幙',
                                    code: '23'
                                }, {
                                    name: '涓存晶鍘�',
                                    code: '24'
                                }, {
                                    name: '妗冩簮鍘�',
                                    code: '25'
                                }, {
                                    name: '鐭抽棬鍘�',
                                    code: '26'
                                }, {
                                    name: '娲ュ競甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '寮犲鐣屽競', // 4涓競杈栧尯銆佸幙
                                code: '08',
                                city: [{
                                    name: '姘稿畾鍖�',
                                    code: '02'
                                }, {
                                    name: '姝﹂櫟婧愬尯',
                                    code: '11'
                                }, {
                                    name: '鎱堝埄鍘�',
                                    code: '21'
                                }, {
                                    name: '妗戞鍘�',
                                    code: '22'
                                }]
                            },
                            {
                                name: '鐩婇槼甯�', // 6涓競杈栧尯銆佸幙
                                code: '09',
                                city: [{
                                    name: '璧勯槼鍖�',
                                    code: '02'
                                }, {
                                    name: '璧北鍖�',
                                    code: '03'
                                }, {
                                    name: '鍗楀幙',
                                    code: '21'
                                }, {
                                    name: '妗冩睙鍘�',
                                    code: '22'
                                }, {
                                    name: '瀹夊寲鍘�',
                                    code: '23'
                                }, {
                                    name: '娌呮睙甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '閮村窞甯�', // 11涓競杈栧尯銆佸幙
                                code: '10',
                                city: [{
                                    name: '鍖楁箹鍖�',
                                    code: '02'
                                }, {
                                    name: '鑻忎粰鍖�',
                                    code: '03'
                                }, {
                                    name: '妗傞槼鍘�',
                                    code: '21'
                                }, {
                                    name: '瀹滅珷鍘�',
                                    code: '22'
                                }, {
                                    name: '姘稿叴鍘�',
                                    code: '23'
                                }, {
                                    name: '鍢夌鍘�',
                                    code: '24'
                                }, {
                                    name: '涓存鍘�',
                                    code: '25'
                                }, {
                                    name: '姹濆煄鍘�',
                                    code: '26'
                                }, {
                                    name: '妗備笢鍘�',
                                    code: '27'
                                }, {
                                    name: '瀹変粊鍘�',
                                    code: '28'
                                }, {
                                    name: '璧勫叴甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '姘稿窞甯�', // 11涓競杈栧尯銆佸幙
                                code: '11',
                                city: [{
                                    name: '闆堕櫟鍖�',
                                    code: '02'
                                }, {
                                    name: '鍐锋按婊╁尯',
                                    code: '03'
                                }, {
                                    name: '绁侀槼鍘�',
                                    code: '21'
                                }, {
                                    name: '涓滃畨鍘�',
                                    code: '22'
                                }, {
                                    name: '鍙岀墝鍘�',
                                    code: '23'
                                }, {
                                    name: '閬撳幙',
                                    code: '24'
                                }, {
                                    name: '姹熸案鍘�',
                                    code: '25'
                                }, {
                                    name: '瀹佽繙鍘�',
                                    code: '26'
                                }, {
                                    name: '钃濆北鍘�',
                                    code: '27'
                                }, {
                                    name: '鏂扮敯鍘�',
                                    code: '28'
                                }, {
                                    name: '姹熷崕鐟舵棌鑷不鍘�',
                                    code: '29'
                                }]
                            },
                            {
                                name: '鎬€鍖栧競', // 12涓競杈栧尯銆佸幙
                                code: '12',
                                city: [{
                                    name: '楣ゅ煄鍖�',
                                    code: '02'
                                }, {
                                    name: '涓柟鍘�',
                                    code: '21'
                                }, {
                                    name: '娌呴櫟鍘�',
                                    code: '22'
                                }, {
                                    name: '杈版邯鍘�',
                                    code: '23'
                                }, {
                                    name: '婧嗘郸鍘�',
                                    code: '24'
                                }, {
                                    name: '浼氬悓鍘�',
                                    code: '25'
                                }, {
                                    name: '楹婚槼鑻楁棌鑷不鍘�',
                                    code: '26'
                                }, {
                                    name: '鏂版檭渚楁棌鑷不鍘�',
                                    code: '27'
                                }, {
                                    name: '鑺锋睙渚楁棌鑷不鍘�',
                                    code: '28'
                                }, {
                                    name: '闈栧窞鑻楁棌渚楁棌鑷不鍘�',
                                    code: '29'
                                }, {
                                    name: '閫氶亾渚楁棌鑷不鍘�',
                                    code: '30'
                                }, {
                                    name: '娲睙甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '濞勫簳甯�', // 5涓競杈栧尯銆佸幙
                                code: '13',
                                city: [{
                                    name: '濞勬槦鍖�',
                                    code: '02'
                                }, {
                                    name: '鍙屽嘲鍘�',
                                    code: '21'
                                }, {
                                    name: '鏂板寲鍘�',
                                    code: '22'
                                }, {
                                    name: '鍐锋按姹熷競',
                                    code: '81'
                                }, {
                                    name: '娑熸簮甯�',
                                    code: '82'
                                }]
                            },
                            {
                                name: '婀樿タ鍦熷鏃忚嫍鏃忚嚜娌诲窞', // 8涓競杈栧尯銆佸幙
                                code: '31',
                                city: [{
                                    name: '鍚夐甯�',
                                    code: '01'
                                }, {
                                    name: '娉告邯鍘�',
                                    code: '22'
                                }, {
                                    name: '鍑ゅ嚢鍘�',
                                    code: '23'
                                }, {
                                    name: '鑺卞灒鍘�',
                                    code: '24'
                                }, {
                                    name: '淇濋潠鍘�',
                                    code: '25'
                                }, {
                                    name: '鍙や笀鍘�',
                                    code: '26'
                                }, {
                                    name: '姘搁『鍘�',
                                    code: '27'
                                }, {
                                    name: '榫欏北鍘�',
                                    code: '30'
                                }]
                            }
                        ]
                    }
                },
                {
                    region: {
                        name: '骞夸笢', // 21
                        code: '44',
                        state: [
                            {
                                name: '骞垮窞甯�', // 11涓競杈栧尯銆佸幙
                                code: '01',
                                city: [{
                                    name: '鑽旀咕鍖�',
                                    code: '03'
                                }, {
                                    name: '瓒婄鍖�',
                                    code: '04'
                                }, {
                                    name: '娴风彔鍖�',
                                    code: '05'
                                }, {
                                    name: '澶╂渤鍖�',
                                    code: '06'
                                }, {
                                    name: '鐧戒簯鍖�',
                                    code: '11'
                                }, {
                                    name: '榛勫煍鍖�',
                                    code: '12'
                                }, {
                                    name: '鐣鍖�',
                                    code: '13'
                                }, {
                                    name: '鑺遍兘鍖�',
                                    code: '14'
                                }, {
                                    name: '鍗楁矙鍖�',
                                    code: '15'
                                }, {
                                    name: '浠庡寲鍖�',
                                    code: '17'
                                }, {
                                    name: '澧炲煄鍖�',
                                    code: '18'
                                }]
                            },
                            {
                                name: '闊跺叧甯�', // 10涓競杈栧尯銆佸幙
                                code: '02',
                                city: [{
                                    name: '姝︽睙鍖�',
                                    code: '03'
                                }, {
                                    name: '娴堟睙鍖�',
                                    code: '04'
                                }, {
                                    name: '鏇叉睙鍖�',
                                    code: '05'
                                }, {
                                    name: '濮嬪叴鍘�',
                                    code: '22'
                                }, {
                                    name: '浠佸寲鍘�',
                                    code: '24'
                                }, {
                                    name: '缈佹簮鍘�',
                                    code: '29'
                                }, {
                                    name: '涔虫簮鐟舵棌鑷不鍘�',
                                    code: '32'
                                }, {
                                    name: '鏂颁赴鍘�',
                                    code: '33'
                                }, {
                                    name: '涔愭槍甯�',
                                    code: '81'
                                }, {
                                    name: '鍗楅泟甯�',
                                    code: '82'
                                }]
                            },
                            {
                                name: '娣卞湷甯�', // 6涓競杈栧尯銆佸幙
                                code: '03',
                                city: [{
                                    name: '缃楁箹鍖�',
                                    code: '03'
                                }, {
                                    name: '绂忕敯鍖�',
                                    code: '04'
                                }, {
                                    name: '鍗楀北鍖�',
                                    code: '05'
                                }, {
                                    name: '瀹濆畨鍖�',
                                    code: '06'
                                }, {
                                    name: '榫欏矖鍖�',
                                    code: '07'
                                }, {
                                    name: '鐩愮敯鍖�',
                                    code: '08'
                                }]
                            },
                            {
                                name: '鐝犳捣甯�', // 3涓競杈栧尯銆佸幙
                                code: '04',
                                city: [{
                                    name: '棣欐床鍖�',
                                    code: '02'
                                }, {
                                    name: '鏂楅棬鍖�',
                                    code: '03'
                                }, {
                                    name: '閲戞咕鍖�',
                                    code: '04'
                                }]
                            },
                            {
                                name: '姹曞ご甯�', // 7涓競杈栧尯銆佸幙
                                code: '05',
                                city: [{
                                    name: '榫欐箹鍖�',
                                    code: '07'
                                }, {
                                    name: '閲戝钩鍖�',
                                    code: '11'
                                }, {
                                    name: '婵犳睙鍖�',
                                    code: '12'
                                }, {
                                    name: '娼槼鍖�',
                                    code: '13'
                                }, {
                                    name: '娼崡鍖�',
                                    code: '14'
                                }, {
                                    name: '婢勬捣鍖�',
                                    code: '15'
                                }, {
                                    name: '鍗楁境鍘�',
                                    code: '23'
                                }]
                            },
                            {
                                name: '浣涘北甯�', // 5涓競杈栧尯銆佸幙
                                code: '06',
                                city: [{
                                    name: '绂呭煄鍖�',
                                    code: '04'
                                }, {
                                    name: '鍗楁捣鍖�',
                                    code: '05'
                                }, {
                                    name: '椤哄痉鍖�',
                                    code: '06'
                                }, {
                                    name: '涓夋按鍖�',
                                    code: '07'
                                }, {
                                    name: '楂樻槑鍖�',
                                    code: '08'
                                }]
                            },
                            {
                                name: '姹熼棬甯�', // 7涓競杈栧尯銆佸幙
                                code: '07',
                                city: [{
                                    name: '钃睙鍖�',
                                    code: '03'
                                }, {
                                    name: '姹熸捣鍖�',
                                    code: '04'
                                }, {
                                    name: '鏂颁細鍖�',
                                    code: '05'
                                }, {
                                    name: '鍙板北甯�',
                                    code: '81'
                                }, {
                                    name: '寮€骞冲競',
                                    code: '83'
                                }, {
                                    name: '楣ゅ北甯�',
                                    code: '84'
                                }, {
                                    name: '鎭╁钩甯�',
                                    code: '85'
                                }]
                            },
                            {
                                name: '婀涙睙甯�', // 9涓競杈栧尯銆佸幙
                                code: '08',
                                city: [{
                                    name: '璧ゅ潕鍖�',
                                    code: '02'
                                }, {
                                    name: '闇炲北鍖�',
                                    code: '03'
                                }, {
                                    name: '鍧″ご鍖�',
                                    code: '04'
                                }, {
                                    name: '楹荤珷鍖�',
                                    code: '11'
                                }, {
                                    name: '閬傛邯鍘�',
                                    code: '23'
                                }, {
                                    name: '寰愰椈鍘�',
                                    code: '25'
                                }, {
                                    name: '寤夋睙甯�',
                                    code: '81'
                                }, {
                                    name: '闆峰窞甯�',
                                    code: '82'
                                }, {
                                    name: '鍚村窛甯�',
                                    code: '83'
                                }]
                            },
                            {
                                name: '鑼傚悕甯�', // 5涓競杈栧尯銆佸幙
                                code: '09',
                                city: [{
                                    name: '鑼傚崡鍖�',
                                    code: '02'
                                }, {
                                    name: '鐢电櫧鍖�',
                                    code: '04'
                                }, {
                                    name: '楂樺窞甯�',
                                    code: '81'
                                }, {
                                    name: '鍖栧窞甯�',
                                    code: '82'
                                }, {
                                    name: '淇″疁甯�',
                                    code: '83'
                                }]
                            },
                            {
                                name: '鑲囧簡甯�', // 8涓競杈栧尯銆佸幙
                                code: '12',
                                city: [{
                                    name: '绔窞鍖�',
                                    code: '02'
                                }, {
                                    name: '榧庢箹鍖�',
                                    code: '03'
                                }, {
                                    name: '楂樿鍖�',
                                    code: '04'
                                }, {
                                    name: '骞垮畞鍘�',
                                    code: '23'
                                }, {
                                    name: '鎬€闆嗗幙',
                                    code: '24'
                                }, {
                                    name: '灏佸紑鍘�',
                                    code: '25'
                                }, {
                                    name: '寰峰簡鍘�',
                                    code: '26'
                                }, {
                                    name: '鍥涗細甯�',
                                    code: '84'
                                }]
                            },
                            {
                                name: '鎯犲窞甯�', // 5涓競杈栧尯銆佸幙
                                code: '13',
                                city: [{
                                    name: '鎯犲煄鍖�',
                                    code: '02'
                                }, {
                                    name: '鎯犻槼鍖�',
                                    code: '03'
                                }, {
                                    name: '鍗氱綏鍘�',
                                    code: '22'
                                }, {
                                    name: '鎯犱笢鍘�',
                                    code: '23'
                                }, {
                                    name: '榫欓棬鍘�',
                                    code: '24'
                                }]
                            },
                            {
                                name: '姊呭窞甯�', // 8涓競杈栧尯銆佸幙
                                code: '14',
                                city: [{
                                    name: '姊呮睙鍖�',
                                    code: '02'
                                }, {
                                    name: '姊呭幙鍖�',
                                    code: '03'
                                }, {
                                    name: '澶у煍鍘�',
                                    code: '22'
                                }, {
                                    name: '涓伴『鍘�',
                                    code: '23'
                                }, {
                                    name: '浜斿崕鍘�',
                                    code: '24'
                                }, {
                                    name: '骞宠繙鍘�',
                                    code: '26'
                                }, {
                                    name: '钑夊箔鍘�',
                                    code: '27'
                                }, {
                                    name: '鍏村畞甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '姹曞熬甯�', // 4涓競杈栧尯銆佸幙
                                code: '15',
                                city: [{
                                    name: '鍩庡尯',
                                    code: '02'
                                }, {
                                    name: '娴蜂赴鍘�',
                                    code: '21'
                                }, {
                                    name: '闄嗘渤鍘�',
                                    code: '23'
                                }, {
                                    name: '闄嗕赴甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '娌虫簮甯�', // 6涓競杈栧尯銆佸幙
                                code: '16',
                                city: [{
                                    name: '婧愬煄鍖�',
                                    code: '02'
                                }, {
                                    name: '绱噾鍘�',
                                    code: '21'
                                }, {
                                    name: '榫欏窛鍘�',
                                    code: '22'
                                }, {
                                    name: '杩炲钩鍘�',
                                    code: '23'
                                }, {
                                    name: '鍜屽钩鍘�',
                                    code: '24'
                                }, {
                                    name: '涓滄簮鍘�',
                                    code: '25'
                                }]
                            },
                            {
                                name: '闃虫睙甯�', // 4涓競杈栧尯銆佸幙
                                code: '17',
                                city: [{
                                    name: '姹熷煄鍖�',
                                    code: '02'
                                }, {
                                    name: '闃充笢鍖�',
                                    code: '04'
                                }, {
                                    name: '闃宠タ鍘�',
                                    code: '21'
                                }, {
                                    name: '闃虫槬甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '娓呰繙甯�', // 8涓競杈栧尯銆佸幙
                                code: '18',
                                city: [{
                                    name: '娓呭煄鍖�',
                                    code: '02'
                                }, {
                                    name: '娓呮柊鍖�',
                                    code: '03'
                                }, {
                                    name: '浣涘唸鍘�',
                                    code: '21'
                                }, {
                                    name: '闃冲北鍘�',
                                    code: '23'
                                }, {
                                    name: '杩炲北澹棌鐟舵棌鑷不鍘�',
                                    code: '25'
                                }, {
                                    name: '杩炲崡鐟舵棌鑷不鍘�',
                                    code: '26'
                                }, {
                                    name: '鑻卞痉甯�',
                                    code: '81'
                                }, {
                                    name: '杩炲窞甯�',
                                    code: '82'
                                }]
                            },
                            {
                                name: '涓滆帪甯�',
                                code: '19',
                                city: [{
                                    name: '甯傝緰鍖�',
                                    code: '01'
                                }]
                            },
                            {
                                name: '涓北甯�',
                                code: '20',
                                city: [{
                                    name: '甯傝緰鍖�',
                                    code: '01'
                                }]
                            },
                            {
                                name: '娼窞甯�', // 3涓競杈栧尯銆佸幙
                                code: '51',
                                city: [{
                                    name: '婀樻ˉ鍖�',
                                    code: '02'
                                }, {
                                    name: '娼畨鍖�',
                                    code: '03'
                                }, {
                                    name: '楗跺钩鍘�',
                                    code: '22'
                                }]
                            },
                            {
                                name: '鎻槼甯�', // 5涓競杈栧尯銆佸幙
                                code: '52',
                                city: [{
                                    name: '姒曞煄鍖�',
                                    code: '02'
                                }, {
                                    name: '鎻笢鍖�',
                                    code: '03'
                                }, {
                                    name: '鎻タ鍘�',
                                    code: '22'
                                }, {
                                    name: '鎯犳潵鍘�',
                                    code: '24'
                                }, {
                                    name: '鏅畞甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '浜戞诞甯�', // 5涓競杈栧尯銆佸幙
                                code: '53',
                                city: [{
                                    name: '浜戝煄鍖�',
                                    code: '02'
                                }, {
                                    name: '浜戝畨鍖�',
                                    code: '03'
                                }, {
                                    name: '鏂板叴鍘�',
                                    code: '21'
                                }, {
                                    name: '閮佸崡鍘�',
                                    code: '22'
                                }, {
                                    name: '缃楀畾甯�',
                                    code: '81'
                                }]
                            }]
                    }
                },
                {
                    region: {
                        name: '骞胯タ', // 14
                        code: '45',
                        state: [
                            {
                                name: '鍗楀畞甯�', // 12涓競杈栧尯銆佸幙
                                code: '01',
                                city: [{
                                    name: '鍏村畞鍖�',
                                    code: '02'
                                }, {
                                    name: '闈掔鍖�',
                                    code: '03'
                                }, {
                                    name: '姹熷崡鍖�',
                                    code: '05'
                                }, {
                                    name: '瑗夸埂濉樺尯',
                                    code: '07'
                                }, {
                                    name: '鑹簡鍖�',
                                    code: '08'
                                }, {
                                    name: '閭曞畞鍖�',
                                    code: '09'
                                }, {
                                    name: '姝﹂福鍖�',
                                    code: '10'
                                }, {
                                    name: '闅嗗畨鍘�',
                                    code: '23'
                                }, {
                                    name: '椹北鍘�',
                                    code: '24'
                                }, {
                                    name: '涓婃灄鍘�',
                                    code: '25'
                                }, {
                                    name: '瀹鹃槼鍘�',
                                    code: '26'
                                }, {
                                    name: '妯幙',
                                    code: '27'
                                }]
                            },
                            {
                                name: '鏌冲窞甯�', // 10涓競杈栧尯銆佸幙
                                code: '02',
                                city: [{
                                    name: '鍩庝腑鍖�',
                                    code: '02'
                                }, {
                                    name: '楸煎嘲鍖�',
                                    code: '03'
                                }, {
                                    name: '鏌冲崡鍖�',
                                    code: '04'
                                }, {
                                    name: '鏌冲寳鍖�',
                                    code: '05'
                                }, {
                                    name: '鏌虫睙鍖�',
                                    code: '06'
                                }, {
                                    name: '鏌冲煄鍘�',
                                    code: '22'
                                }, {
                                    name: '楣垮鍘�',
                                    code: '23'
                                }, {
                                    name: '铻嶅畨鍘�',
                                    code: '24'
                                }, {
                                    name: '铻嶆按鑻楁棌鑷不鍘�',
                                    code: '25'
                                }, {
                                    name: '涓夋睙渚楁棌鑷不鍘�',
                                    code: '26'
                                }]
                            },
                            {
                                name: '妗傛灄甯�', // 17涓競杈栧尯銆佸幙
                                code: '03',
                                city: [{
                                    name: '绉€宄板尯',
                                    code: '02'
                                }, {
                                    name: '鍙犲僵鍖�',
                                    code: '03'
                                }, {
                                    name: '璞″北鍖�',
                                    code: '04'
                                }, {
                                    name: '涓冩槦鍖�',
                                    code: '05'
                                }, {
                                    name: '闆佸北鍖�',
                                    code: '11'
                                }, {
                                    name: '涓存鍖�',
                                    code: '12'
                                }, {
                                    name: '闃虫湐鍘�',
                                    code: '21'
                                }, {
                                    name: '鐏靛窛鍘�',
                                    code: '23'
                                }, {
                                    name: '鍏ㄥ窞鍘�',
                                    code: '24'
                                }, {
                                    name: '鍏村畨鍘�',
                                    code: '25'
                                }, {
                                    name: '姘哥鍘�',
                                    code: '26'
                                }, {
                                    name: '鐏岄槼鍘�',
                                    code: '27'
                                }, {
                                    name: '榫欒儨鍚勬棌鑷不鍘�',
                                    code: '28'
                                }, {
                                    name: '璧勬簮鍘�',
                                    code: '29'
                                }, {
                                    name: '骞充箰鍘�',
                                    code: '30'
                                }, {
                                    name: '鑽旇挷鍘�',
                                    code: '31'
                                }, {
                                    name: '鎭煄鐟舵棌鑷不鍘�',
                                    code: '32'
                                }]
                            },
                            {
                                name: '姊у窞甯�', // 7涓競杈栧尯銆佸幙
                                code: '04',
                                city: [{
                                    name: '涓囩鍖�',
                                    code: '03'
                                }, {
                                    name: '闀挎床鍖�',
                                    code: '05'
                                }, {
                                    name: '榫欏湬鍖�',
                                    code: '06'
                                }, {
                                    name: '鑻嶆ⅶ鍘�',
                                    code: '21'
                                }, {
                                    name: '钘ゅ幙',
                                    code: '22'
                                }, {
                                    name: '钂欏北鍘�',
                                    code: '23'
                                }, {
                                    name: '宀戞邯甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '鍖楁捣甯�', // 4涓競杈栧尯銆佸幙
                                code: '05',
                                city: [{
                                    name: '娴峰煄鍖�',
                                    code: '02'
                                }, {
                                    name: '閾舵捣鍖�',
                                    code: '03'
                                }, {
                                    name: '閾佸北娓尯',
                                    code: '12'
                                }, {
                                    name: '鍚堟郸鍘�',
                                    code: '21'
                                }]
                            },
                            {
                                name: '闃插煄娓競', // 4涓競杈栧尯銆佸幙
                                code: '06',
                                city: [{
                                    name: '娓彛鍖�',
                                    code: '02'
                                }, {
                                    name: '闃插煄鍖�',
                                    code: '03'
                                }, {
                                    name: '涓婃€濆幙',
                                    code: '21'
                                }, {
                                    name: '涓滃叴甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '閽﹀窞甯�', // 4涓競杈栧尯銆佸幙
                                code: '07',
                                city: [{
                                    name: '閽﹀崡鍖�',
                                    code: '02'
                                }, {
                                    name: '閽﹀寳鍖�',
                                    code: '03'
                                }, {
                                    name: '鐏靛北鍘�',
                                    code: '21'
                                }, {
                                    name: '娴﹀寳鍘�',
                                    code: '22'
                                }]
                            },
                            {
                                name: '璐垫腐甯�', // 5涓競杈栧尯銆佸幙
                                code: '08',
                                city: [{
                                    name: '娓寳鍖�',
                                    code: '02'
                                }, {
                                    name: '娓崡鍖�',
                                    code: '03'
                                }, {
                                    name: '瑕冨鍖�',
                                    code: '04'
                                }, {
                                    name: '骞冲崡鍘�',
                                    code: '21'
                                }, {
                                    name: '妗傚钩甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '鐜夋灄甯�', // 7涓競杈栧尯銆佸幙
                                code: '09',
                                city: [{
                                    name: '鐜夊窞鍖�',
                                    code: '02'
                                }, {
                                    name: '绂忕坏鍖�',
                                    code: '03'
                                }, {
                                    name: '瀹瑰幙',
                                    code: '21'
                                }, {
                                    name: '闄嗗窛鍘�',
                                    code: '22'
                                }, {
                                    name: '鍗氱櫧鍘�',
                                    code: '23'
                                }, {
                                    name: '鍏翠笟鍘�',
                                    code: '24'
                                }, {
                                    name: '鍖楁祦甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '鐧捐壊甯�', // 12涓競杈栧尯銆佸幙
                                code: '10',
                                city: [{
                                    name: '鍙虫睙鍖�',
                                    code: '02'
                                }, {
                                    name: '鐢伴槼鍘�',
                                    code: '21'
                                }, {
                                    name: '鐢颁笢鍘�',
                                    code: '22'
                                }, {
                                    name: '骞虫灉鍘�',
                                    code: '23'
                                }, {
                                    name: '寰蜂繚鍘�',
                                    code: '24'
                                }, {
                                    name: '閭ｅ潯鍘�',
                                    code: '26'
                                }, {
                                    name: '鍑屼簯鍘�',
                                    code: '27'
                                }, {
                                    name: '涔愪笟鍘�',
                                    code: '28'
                                }, {
                                    name: '鐢版灄鍘�',
                                    code: '29'
                                }, {
                                    name: '瑗挎灄鍘�',
                                    code: '30'
                                }, {
                                    name: '闅嗘灄鍚勬棌鑷不鍘�',
                                    code: '31'
                                }, {
                                    name: '闈栬タ甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '璐哄窞甯�', // 5涓競杈栧尯銆佸幙
                                code: '11',
                                city: [{
                                    name: '鍏鍖�',
                                    code: '02'
                                }, {
                                    name: '骞虫鍖�',
                                    code: '03'
                                }, {
                                    name: '鏄钩鍘�',
                                    code: '21'
                                }, {
                                    name: '閽熷北鍘�',
                                    code: '22'
                                }, {
                                    name: '瀵屽窛鐟舵棌鑷不鍘�',
                                    code: '23'
                                }]
                            },
                            {
                                name: '娌虫睜甯�', // 11涓競杈栧尯銆佸幙
                                code: '12',
                                city: [{
                                    name: '閲戝煄姹熷尯',
                                    code: '02'
                                }, {
                                    name: '鍗椾腹鍘�',
                                    code: '21'
                                }, {
                                    name: '澶╁敞鍘�',
                                    code: '22'
                                }, {
                                    name: '鍑ゅ北鍘�',
                                    code: '23'
                                }, {
                                    name: '涓滃叞鍘�',
                                    code: '24'
                                }, {
                                    name: '缃楀煄浠浆鏃忚嚜娌诲幙',
                                    code: '25'
                                }, {
                                    name: '鐜睙姣涘崡鏃忚嚜娌诲幙',
                                    code: '26'
                                }, {
                                    name: '宸撮┈鐟舵棌鑷不鍘�',
                                    code: '27'
                                }, {
                                    name: '閮藉畨鐟舵棌鑷不鍘�',
                                    code: '28'
                                }, {
                                    name: '澶у寲鐟舵棌鑷不鍘�',
                                    code: '29'
                                }, {
                                    name: '瀹滃窞甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '鏉ュ甯�', // 6涓競杈栧尯銆佸幙
                                code: '13',
                                city: [{
                                    name: '鍏村鍖�',
                                    code: '02'
                                }, {
                                    name: '蹇诲煄鍘�',
                                    code: '21'
                                }, {
                                    name: '璞″窞鍘�',
                                    code: '22'
                                }, {
                                    name: '姝﹀鍘�',
                                    code: '23'
                                }, {
                                    name: '閲戠鐟舵棌鑷不鍘�',
                                    code: '24'
                                }, {
                                    name: '鍚堝北甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '宕囧乏甯�', // 7涓競杈栧尯銆佸幙
                                code: '14',
                                city: [{
                                    name: '姹熸床鍖�',
                                    code: '02'
                                }, {
                                    name: '鎵剁互鍘�',
                                    code: '21'
                                }, {
                                    name: '瀹佹槑鍘�',
                                    code: '22'
                                }, {
                                    name: '榫欏窞鍘�',
                                    code: '23'
                                }, {
                                    name: '澶ф柊鍘�',
                                    code: '24'
                                }, {
                                    name: '澶╃瓑鍘�',
                                    code: '25'
                                }, {
                                    name: '鍑ゥ甯�',
                                    code: '81'
                                }]
                            }]
                    }
                },
                {
                    region: {
                        name: '娴峰崡', // 5
                        code: '46',
                        state: [
                            {
                                name: '娴峰彛甯�', // 4涓競杈栧尯銆佸幙
                                code: '01',
                                city: [{
                                    name: '绉€鑻卞尯',
                                    code: '05'
                                }, {
                                    name: '榫欏崕鍖�',
                                    code: '06'
                                }, {
                                    name: '鐞煎北鍖�',
                                    code: '07'
                                }, {
                                    name: '缇庡叞鍖�',
                                    code: '08'
                                }]
                            },
                            {
                                name: '涓変簹甯�', // 5涓競杈栧尯銆佸幙
                                code: '02',
                                city: [{
                                    name: '甯傝緰鍖�',
                                    code: '01'
                                }, {
                                    name: '娴锋　鍖�',
                                    code: '02'
                                }, {
                                    name: '鍚夐槼鍖�',
                                    code: '03'
                                }, {
                                    name: '澶╂动鍖�',
                                    code: '04'
                                }, {
                                    name: '宕栧窞鍖�',
                                    code: '05'
                                }]
                            },
                            {
                                name: '涓夋矙甯�', // 3涓競杈栧尯銆佸幙
                                code: '03',
                                city: [{
                                    name: '瑗挎矙缇ゅ矝',
                                    code: '21'
                                }, {
                                    name: '鍗楁矙缇ゅ矝',
                                    code: '22'
                                }, {
                                    name: '涓矙缇ゅ矝鐨勫矝绀佸強鍏舵捣鍩�',
                                    code: '23'
                                }]
                            },
                            {
                                name: '鍎嬪窞甯�',
                                code: '04',
                                city: []
                            },
                            {
                                name: '鐪佺洿杈栧幙绾ц鏀垮尯鍒�', // 15涓競杈栧尯銆佸幙
                                code: '90',
                                city: [{
                                    name: '浜旀寚灞卞競',
                                    code: '01'
                                }, {
                                    name: '鐞兼捣甯�',
                                    code: '02'
                                }, {
                                    name: '鏂囨槍甯�',
                                    code: '05'
                                }, {
                                    name: '涓囧畞甯�',
                                    code: '06'
                                }, {
                                    name: '涓滄柟甯�',
                                    code: '07'
                                }, {
                                    name: '瀹氬畨鍘�',
                                    code: '21'
                                }, {
                                    name: '灞槍鍘�',
                                    code: '22'
                                }, {
                                    name: '婢勮繄鍘�',
                                    code: '23'
                                }, {
                                    name: '涓撮珮鍘�',
                                    code: '24'
                                }, {
                                    name: '鐧芥矙榛庢棌鑷不鍘�',
                                    code: '25'
                                }, {
                                    name: '鏄屾睙榛庢棌鑷不鍘�',
                                    code: '26'
                                }, {
                                    name: '涔愪笢榛庢棌鑷不鍘�',
                                    code: '27'
                                }, {
                                    name: '闄垫按榛庢棌鑷不鍘�',
                                    code: '28'
                                }, {
                                    name: '淇濅涵榛庢棌鑻楁棌鑷不鍘�',
                                    code: '29'
                                }, {
                                    name: '鐞间腑榛庢棌鑻楁棌鑷不鍘縗n',
                                    code: '30'
                                }]
                            },
                        ]
                    }
                },
                {
                    region: {
                        name: '閲嶅簡',
                        code: '50',
                        state: [
                            {
                                name: '甯傝緰鍖�', // 24
                                code: '01',
                                city: [{
                                    name: '涓囧窞鍖�',
                                    code: '01'
                                }, {
                                    name: '娑櫟鍖�',
                                    code: '02'
                                }, {
                                    name: '娓濅腑鍖�',
                                    code: '03'
                                }, {
                                    name: '澶ф浮鍙ｅ尯',
                                    code: '04'
                                }, {
                                    name: '姹熷寳鍖�',
                                    code: '05'
                                }, {
                                    name: '娌欏潽鍧濆尯',
                                    code: '06'
                                }, {
                                    name: '涔濋緳鍧″尯',
                                    code: '07'
                                }, {
                                    name: '鍗楀哺鍖�',
                                    code: '08'
                                }, {
                                    name: '鍖楃鍖�',
                                    code: '09'
                                }, {
                                    name: '缍︽睙鍖�',
                                    code: '10'
                                }, {
                                    name: '澶ц冻鍖�',
                                    code: '11'
                                }, {
                                    name: '娓濆寳鍖�',
                                    code: '12'
                                }, {
                                    name: '宸村崡鍖�',
                                    code: '13'
                                }, {
                                    name: '榛旀睙鍖�',
                                    code: '14'
                                }, {
                                    name: '闀垮鍖�',
                                    code: '15'
                                }, {
                                    name: '姹熸触鍖�',
                                    code: '16'
                                }, {
                                    name: '鍚堝窛鍖�',
                                    code: '17'
                                }, {
                                    name: '姘稿窛鍖�',
                                    code: '18'
                                }, {
                                    name: '鍗楀窛鍖�',
                                    code: '19'
                                }, {
                                    name: '鐠у北鍖�',
                                    code: '20'
                                }, {
                                    name: '閾滄鍖�',
                                    code: '51'
                                }, {
                                    name: '娼煎崡鍖�',
                                    code: '52'
                                }, {
                                    name: '鑽ｆ槍鍖�',
                                    code: '53'
                                }, {
                                    name: '寮€宸炲尯',
                                    code: '54'
                                }]
                            },
                            {
                                name: '鍘�', // 14
                                code: '02',
                                city: [{
                                    name: '姊佸钩鍘�',
                                    code: '28'
                                }, {
                                    name: '鍩庡彛鍘�',
                                    code: '29'
                                }, {
                                    name: '涓伴兘鍘�',
                                    code: '30'
                                }, {
                                    name: '鍨睙鍘�',
                                    code: '31'
                                }, {
                                    name: '姝﹂殕鍘�',
                                    code: '32'
                                }, {
                                    name: '蹇犲幙',
                                    code: '33'
                                }, {
                                    name: '浜戦槼鍘�',
                                    code: '35'
                                }, {
                                    name: '濂夎妭鍘�',
                                    code: '36'
                                }, {
                                    name: '宸北鍘�',
                                    code: '37'
                                }, {
                                    name: '宸邯鍘�',
                                    code: '38'
                                }, {
                                    name: '鐭虫煴鍦熷鏃忚嚜娌诲幙',
                                    code: '40'
                                }, {
                                    name: '绉€灞卞湡瀹舵棌鑻楁棌鑷不鍘�',
                                    code: '41'
                                }, {
                                    name: '閰夐槼鍦熷鏃忚嫍鏃忚嚜娌诲幙',
                                    code: '42'
                                }, {
                                    name: '褰按鑻楁棌鍦熷鏃忚嚜娌诲幙',
                                    code: '43'
                                }]
                            }
                        ]
                    }
                },
                {
                    region: {
                        name: '鍥涘窛', // 21
                        code: '51',
                        state: [
                            {
                                name: '鎴愰兘甯�', // 20涓競杈栧尯銆佸幙
                                code: '01',
                                city: [{
                                    name: '閿︽睙鍖�',
                                    code: '04'
                                }, {
                                    name: '闈掔緤鍖�',
                                    code: '05'
                                }, {
                                    name: '閲戠墰鍖�',
                                    code: '06'
                                }, {
                                    name: '姝︿警鍖�',
                                    code: '07'
                                }, {
                                    name: '鎴愬崕鍖�',
                                    code: '08'
                                }, {
                                    name: '榫欐硥椹垮尯',
                                    code: '12'
                                }, {
                                    name: '闈掔櫧姹熷尯',
                                    code: '13'
                                }, {
                                    name: '鏂伴兘鍖�',
                                    code: '14'
                                }, {
                                    name: '娓╂睙鍖�',
                                    code: '15'
                                }, {
                                    name: '鍙屾祦鍖�',
                                    code: '16'
                                }, {
                                    name: '閲戝爞鍘�',
                                    code: '21'
                                }, {
                                    name: '閮幙',
                                    code: '24'
                                }, {
                                    name: '澶ч倯鍘�',
                                    code: '29'
                                }, {
                                    name: '钂叉睙鍘�',
                                    code: '31'
                                }, {
                                    name: '鏂版触鍘�',
                                    code: '32'
                                }, {
                                    name: '閮芥睙鍫板競',
                                    code: '81'
                                }, {
                                    name: '褰窞甯�',
                                    code: '82'
                                }, {
                                    name: '閭涘磧甯�',
                                    code: '83'
                                }, {
                                    name: '宕囧窞甯�',
                                    code: '84'
                                }, {
                                    name: '绠€闃冲競',
                                    code: '85'
                                }]
                            },
                            {
                                name: '鑷础甯�', // 6涓競杈栧尯銆佸幙
                                code: '03',
                                city: [{
                                    name: '鑷祦浜曞尯',
                                    code: '02'
                                }, {
                                    name: '璐′簳鍖�',
                                    code: '03'
                                }, {
                                    name: '澶у畨鍖�',
                                    code: '04'
                                }, {
                                    name: '娌挎哗鍖�',
                                    code: '11'
                                }, {
                                    name: '鑽ｅ幙',
                                    code: '21'
                                }, {
                                    name: '瀵岄『鍘�',
                                    code: '22'
                                }]
                            },
                            {
                                name: '鏀€鏋濊姳甯�', // 5涓競杈栧尯銆佸幙
                                code: '04',
                                city: [{
                                    name: '涓滃尯',
                                    code: '02'
                                }, {
                                    name: '瑗垮尯',
                                    code: '03'
                                }, {
                                    name: '浠佸拰鍖�',
                                    code: '11'
                                }, {
                                    name: '绫虫槗鍘�',
                                    code: '21'
                                }, {
                                    name: '鐩愯竟鍘�',
                                    code: '22'
                                }]
                            },
                            {
                                name: '娉稿窞甯�', // 7涓競杈栧尯銆佸幙
                                code: '05',
                                city: [{
                                    name: '姹熼槼鍖�',
                                    code: '02'
                                }, {
                                    name: '绾虫邯鍖�',
                                    code: '03'
                                }, {
                                    name: '榫欓┈娼尯',
                                    code: '04'
                                }, {
                                    name: '娉稿幙',
                                    code: '21'
                                }, {
                                    name: '鍚堟睙鍘�',
                                    code: '22'
                                }, {
                                    name: '鍙欐案鍘�',
                                    code: '24'
                                }, {
                                    name: '鍙よ敽鍘�',
                                    code: '25'
                                }]
                            },
                            {
                                name: '寰烽槼甯�', // 6涓競杈栧尯銆佸幙
                                code: '06',
                                city: [{
                                    name: '鏃岄槼鍖�',
                                    code: '03'
                                }, {
                                    name: '涓睙鍘�',
                                    code: '23'
                                }, {
                                    name: '缃楁睙鍘�',
                                    code: '26'
                                }, {
                                    name: '骞挎眽甯�',
                                    code: '81'
                                }, {
                                    name: '浠€閭″競',
                                    code: '82'
                                }, {
                                    name: '缁电甯�',
                                    code: '83'
                                }]
                            },
                            {
                                name: '缁甸槼甯�', // 9涓競杈栧尯銆佸幙
                                code: '07',
                                city: [{
                                    name: '娑煄鍖�',
                                    code: '03'
                                }, {
                                    name: '娓镐粰鍖�',
                                    code: '04'
                                }, {
                                    name: '瀹夊窞鍖�',
                                    code: '05'
                                }, {
                                    name: '涓夊彴鍘�',
                                    code: '22'
                                }, {
                                    name: '鐩愪涵鍘�',
                                    code: '23'
                                }, {
                                    name: '姊撴郊鍘�',
                                    code: '25'
                                }, {
                                    name: '鍖楀窛缇屾棌鑷不鍘�',
                                    code: '26'
                                }, {
                                    name: '骞虫鍘�',
                                    code: '27'
                                }, {
                                    name: '姹熸补甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '骞垮厓甯�', // 7涓競杈栧尯銆佸幙
                                code: '08',
                                city: [{
                                    name: '鍒╁窞鍖�',
                                    code: '02'
                                }, {
                                    name: '鏄寲鍖�',
                                    code: '11'
                                }, {
                                    name: '鏈濆ぉ鍖�',
                                    code: '12'
                                }, {
                                    name: '鏃鸿媿鍘�',
                                    code: '21'
                                }, {
                                    name: '闈掑窛鍘�',
                                    code: '22'
                                }, {
                                    name: '鍓戦榿鍘�',
                                    code: '23'
                                }, {
                                    name: '鑻嶆邯鍘�',
                                    code: '24'
                                }]
                            },
                            {
                                name: '閬傚畞甯�', // 5涓競杈栧尯銆佸幙
                                code: '09',
                                city: [{
                                    name: '鑸瑰北鍖�',
                                    code: '03'
                                }, {
                                    name: '瀹夊眳鍖�',
                                    code: '04'
                                }, {
                                    name: '钃邯鍘�',
                                    code: '21'
                                }, {
                                    name: '灏勬椽鍘�',
                                    code: '22'
                                }, {
                                    name: '澶ц嫳鍘�',
                                    code: '23'
                                }]
                            },
                            {
                                name: '鍐呮睙甯�', // 5涓競杈栧尯銆佸幙
                                code: '10',
                                city: [{
                                    name: '甯備腑鍖�',
                                    code: '02'
                                }, {
                                    name: '涓滃叴鍖�',
                                    code: '11'
                                }, {
                                    name: '濞佽繙鍘�',
                                    code: '24'
                                }, {
                                    name: '璧勪腑鍘�',
                                    code: '25'
                                }, {
                                    name: '闅嗘槍鍘�',
                                    code: '80'
                                }]
                            },
                            {
                                name: '涔愬北甯�', // 11涓競杈栧尯銆佸幙
                                code: '11',
                                city: [{
                                    name: '甯備腑鍖�',
                                    code: '02'
                                }, {
                                    name: '娌欐咕鍖�',
                                    code: '11'
                                }, {
                                    name: '浜旈€氭ˉ鍖�',
                                    code: '12'
                                }, {
                                    name: '閲戝彛娌冲尯',
                                    code: '13'
                                }, {
                                    name: '鐘嶄负鍘�',
                                    code: '23'
                                }, {
                                    name: '浜曠爺鍘�',
                                    code: '24'
                                }, {
                                    name: '澶规睙鍘�',
                                    code: '26'
                                }, {
                                    name: '娌愬窛鍘�',
                                    code: '29'
                                }, {
                                    name: '宄ㄨ竟褰濇棌鑷不鍘�',
                                    code: '32'
                                }, {
                                    name: '椹竟褰濇棌鑷不鍘�',
                                    code: '33'
                                }, {
                                    name: '宄ㄧ湁灞卞競',
                                    code: '81'
                                }]
                            },
                            {
                                name: '鍗楀厖甯�', // 9涓競杈栧尯銆佸幙
                                code: '13',
                                city: [{
                                    name: '椤哄簡鍖�',
                                    code: '02'
                                }, {
                                    name: '楂樺潽鍖�',
                                    code: '03'
                                }, {
                                    name: '鍢夐櫟鍖�',
                                    code: '04'
                                }, {
                                    name: '鍗楅儴鍘�',
                                    code: '21'
                                }, {
                                    name: '钀ュ北鍘�',
                                    code: '22'
                                }, {
                                    name: '钃畨鍘�',
                                    code: '23'
                                }, {
                                    name: '浠檱鍘�',
                                    code: '24'
                                }, {
                                    name: '瑗垮厖鍘�',
                                    code: '25'
                                }, {
                                    name: '闃嗕腑甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '鐪夊北甯�', // 6涓競杈栧尯銆佸幙
                                code: '14',
                                city: [{
                                    name: '涓滃潯鍖�',
                                    code: '02'
                                }, {
                                    name: '褰北鍖�',
                                    code: '03'
                                }, {
                                    name: '浠佸鍘�',
                                    code: '21'
                                }, {
                                    name: '娲泤鍘�',
                                    code: '23'
                                }, {
                                    name: '涓规１鍘�',
                                    code: '24'
                                }, {
                                    name: '闈掔鍘�',
                                    code: '25'
                                }]
                            },
                            {
                                name: '瀹滃甯�', // 10涓競杈栧尯銆佸幙
                                code: '15',
                                city: [{
                                    name: '缈犲睆鍖�',
                                    code: '02'
                                }, {
                                    name: '鍗楁邯鍖�',
                                    code: '03'
                                }, {
                                    name: '瀹滃鍘�',
                                    code: '21'
                                }, {
                                    name: '姹熷畨鍘�',
                                    code: '23'
                                }, {
                                    name: '闀垮畞鍘�',
                                    code: '24'
                                }, {
                                    name: '楂樺幙',
                                    code: '25'
                                }, {
                                    name: '鐝欏幙',
                                    code: '26'
                                }, {
                                    name: '绛犺繛鍘�',
                                    code: '27'
                                }, {
                                    name: '鍏存枃鍘�',
                                    code: '28'
                                }, {
                                    name: '灞忓北鍘�',
                                    code: '29'
                                }]
                            },
                            {
                                name: '骞垮畨甯�', // 6涓競杈栧尯銆佸幙
                                code: '16',
                                city: [{
                                    name: '骞垮畨鍖�',
                                    code: '02'
                                }, {
                                    name: '鍓嶉攱鍖�',
                                    code: '03'
                                }, {
                                    name: '宀虫睜鍘�',
                                    code: '21'
                                }, {
                                    name: '姝﹁儨鍘�',
                                    code: '22'
                                }, {
                                    name: '閭绘按鍘�',
                                    code: '23'
                                }, {
                                    name: '鍗庤摜甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '杈惧窞甯�', // 7涓競杈栧尯銆佸幙
                                code: '17',
                                city: [{
                                    name: '閫氬窛鍖�',
                                    code: '02'
                                }, {
                                    name: '杈惧窛鍖�',
                                    code: '03'
                                }, {
                                    name: '瀹ｆ眽鍘�',
                                    code: '22'
                                }, {
                                    name: '寮€姹熷幙',
                                    code: '23'
                                }, {
                                    name: '澶х鍘�',
                                    code: '24'
                                }, {
                                    name: '娓犲幙',
                                    code: '25'
                                }, {
                                    name: '涓囨簮甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '闆呭畨甯�', // 8涓競杈栧尯銆佸幙
                                code: '18',
                                city: [{
                                    name: '闆ㄥ煄鍖�',
                                    code: '02'
                                }, {
                                    name: '鍚嶅北鍖�',
                                    code: '03'
                                }, {
                                    name: '鑽ョ粡鍘�',
                                    code: '22'
                                }, {
                                    name: '姹夋簮鍘�',
                                    code: '23'
                                }, {
                                    name: '鐭虫鍘�',
                                    code: '24'
                                }, {
                                    name: '澶╁叏鍘�',
                                    code: '25'
                                }, {
                                    name: '鑺﹀北鍘�',
                                    code: '26'
                                }, {
                                    name: '瀹濆叴鍘�',
                                    code: '27'
                                }]
                            },
                            {
                                name: '宸翠腑甯�', // 5涓競杈栧尯銆佸幙
                                code: '19',
                                city: [{
                                    name: '宸村窞鍖�',
                                    code: '02'
                                }, {
                                    name: '鎭╅槼鍖�',
                                    code: '03'
                                }, {
                                    name: '閫氭睙鍘�',
                                    code: '21'
                                }, {
                                    name: '鍗楁睙鍘�',
                                    code: '22'
                                }, {
                                    name: '骞虫槍鍘�',
                                    code: '23'
                                }]
                            },
                            {
                                name: '璧勯槼甯�', // 3涓競杈栧尯銆佸幙
                                code: '20',
                                city: [{
                                    name: '闆佹睙鍖�',
                                    code: '02'
                                }, {
                                    name: '瀹夊渤鍘�',
                                    code: '21'
                                }, {
                                    name: '涔愯嚦鍘�',
                                    code: '22'
                                }]
                            },
                            {
                                name: '闃垮潩钘忔棌缇屾棌鑷不宸�', // 13涓競杈栧尯銆佸幙
                                code: '32',
                                city: [{
                                    name: '椹皵搴峰競',
                                    code: '01'
                                }, {
                                    name: '姹跺窛鍘�',
                                    code: '21'
                                }, {
                                    name: '鐞嗗幙',
                                    code: '22'
                                }, {
                                    name: '鑼傚幙',
                                    code: '23'
                                }, {
                                    name: '鏉炬綐鍘�',
                                    code: '24'
                                }, {
                                    name: '涔濆娌熷幙',
                                    code: '25'
                                }, {
                                    name: '閲戝窛鍘�',
                                    code: '26'
                                }, {
                                    name: '灏忛噾鍘�',
                                    code: '27'
                                }, {
                                    name: '榛戞按鍘�',
                                    code: '28'
                                }, {
                                    name: '澹ゅ鍘�',
                                    code: '30'
                                }, {
                                    name: '闃垮潩鍘�',
                                    code: '31'
                                }, {
                                    name: '鑻ュ皵鐩栧幙',
                                    code: '32'
                                }, {
                                    name: '绾㈠師鍘�',
                                    code: '33'
                                }]
                            },
                            {
                                name: '鐢樺瓬钘忔棌鑷不宸�', // 18涓競杈栧尯銆佸幙
                                code: '33',
                                city: [{
                                    name: '搴峰畾甯�',
                                    code: '01'
                                }, {
                                    name: '娉稿畾鍘�',
                                    code: '22'
                                }, {
                                    name: '涓瑰反鍘�',
                                    code: '23'
                                }, {
                                    name: '涔濋緳鍘�',
                                    code: '24'
                                }, {
                                    name: '闆呮睙鍘�',
                                    code: '25'
                                }, {
                                    name: '閬撳瓪鍘�',
                                    code: '26'
                                }, {
                                    name: '鐐夐湇鍘�',
                                    code: '27'
                                }, {
                                    name: '鐢樺瓬鍘�',
                                    code: '28'
                                }, {
                                    name: '鏂伴緳鍘�',
                                    code: '29'
                                }, {
                                    name: '寰锋牸鍘�',
                                    code: '30'
                                }, {
                                    name: '鐧界帀鍘�',
                                    code: '31'
                                }, {
                                    name: '鐭虫笭鍘�',
                                    code: '32'
                                }, {
                                    name: '鑹茶揪鍘�',
                                    code: '33'
                                }, {
                                    name: '鐞嗗鍘�',
                                    code: '34'
                                }, {
                                    name: '宸村鍘�',
                                    code: '35'
                                }, {
                                    name: '涔″煄鍘�',
                                    code: '36'
                                }, {
                                    name: '绋诲煄鍘�',
                                    code: '37'
                                }, {
                                    name: '寰楄崳鍘�',
                                    code: '38'
                                }]
                            },
                            {
                                name: '鍑夊北褰濇棌鑷不宸�', // 17涓競杈栧尯銆佸幙
                                code: '34',
                                city: [{
                                    name: '瑗挎槍甯�',
                                    code: '01'
                                }, {
                                    name: '鏈ㄩ噷钘忔棌鑷不鍘�',
                                    code: '22'
                                }, {
                                    name: '鐩愭簮鍘�',
                                    code: '23'
                                }, {
                                    name: '寰锋槍鍘�',
                                    code: '24'
                                }, {
                                    name: '浼氱悊鍘�',
                                    code: '25'
                                }, {
                                    name: '浼氫笢鍘�',
                                    code: '26'
                                }, {
                                    name: '瀹佸崡鍘�',
                                    code: '27'
                                }, {
                                    name: '鏅牸鍘�',
                                    code: '28'
                                }, {
                                    name: '甯冩嫋鍘�',
                                    code: '29'
                                }, {
                                    name: '閲戦槼鍘�',
                                    code: '30'
                                }, {
                                    name: '鏄鍘�',
                                    code: '31'
                                }, {
                                    name: '鍠滃痉鍘�',
                                    code: '32'
                                }, {
                                    name: '鍐曞畞鍘�',
                                    code: '33'
                                }, {
                                    name: '瓒婅タ鍘�',
                                    code: '34'
                                }, {
                                    name: '鐢樻礇鍘�',
                                    code: '35'
                                }, {
                                    name: '缇庡鍘�',
                                    code: '36'
                                }, {
                                    name: '闆锋尝鍘�',
                                    code: '37'
                                }]
                            }]
                    }
                },
                {
                    region: {
                        name: '璐靛窞', // 9
                        code: '52',
                        state: [
                            {
                                name: '璐甸槼甯�', // 10涓競杈栧尯銆佸幙
                                code: '01',
                                city: [{
                                    name: '鍗楁槑鍖�',
                                    code: '02'
                                }, {
                                    name: '浜戝博鍖�',
                                    code: '03'
                                }, {
                                    name: '鑺辨邯鍖�',
                                    code: '11'
                                }, {
                                    name: '涔屽綋鍖�',
                                    code: '12'
                                }, {
                                    name: '鐧戒簯鍖�',
                                    code: '13'
                                }, {
                                    name: '瑙傚北婀栧尯',
                                    code: '15'
                                }, {
                                    name: '寮€闃冲幙',
                                    code: '21'
                                }, {
                                    name: '鎭兘鍘�',
                                    code: '22'
                                }, {
                                    name: '淇枃鍘�',
                                    code: '23'
                                }, {
                                    name: '娓呴晣甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '鍏洏姘村競', // 4涓競杈栧尯銆佸幙
                                code: '02',
                                city: [{
                                    name: '閽熷北鍖�',
                                    code: '01'
                                }, {
                                    name: '鍏灊鐗瑰尯',
                                    code: '03'
                                }, {
                                    name: '姘村煄鍘�',
                                    code: '21'
                                }, {
                                    name: '鐩樺幙',
                                    code: '22'
                                }]
                            },
                            {
                                name: '閬典箟甯�', // 14涓競杈栧尯銆佸幙
                                code: '03',
                                city: [{
                                    name: '绾㈣姳宀楀尯',
                                    code: '02'
                                }, {
                                    name: '姹囧窛鍖�',
                                    code: '03'
                                }, {
                                    name: '鎾窞鍖�',
                                    code: '04'
                                }, {
                                    name: '妗愭鍘�',
                                    code: '22'
                                }, {
                                    name: '缁ラ槼鍘�',
                                    code: '23'
                                }, {
                                    name: '姝ｅ畨鍘�',
                                    code: '24'
                                }, {
                                    name: '閬撶湡浠′浆鏃忚嫍鏃忚嚜娌诲幙',
                                    code: '25'
                                }, {
                                    name: '鍔″窛浠′浆鏃忚嫍鏃忚嚜娌诲幙',
                                    code: '26'
                                }, {
                                    name: '鍑ゅ唸鍘�',
                                    code: '27'
                                }, {
                                    name: '婀勬江鍘�',
                                    code: '28'
                                }, {
                                    name: '浣欏簡鍘�',
                                    code: '29'
                                }, {
                                    name: '涔犳按鍘�',
                                    code: '30'
                                }, {
                                    name: '璧ゆ按甯�',
                                    code: '81'
                                }, {
                                    name: '浠佹€€甯�',
                                    code: '82'
                                }]
                            },
                            {
                                name: '瀹夐『甯�', // 6涓競杈栧尯銆佸幙
                                code: '04',
                                city: [{
                                    name: '瑗跨鍖�',
                                    code: '02'
                                }, {
                                    name: '骞冲潩鍖�',
                                    code: '03'
                                }, {
                                    name: '鏅畾鍘�',
                                    code: '22'
                                }, {
                                    name: '闀囧畞甯冧緷鏃忚嫍鏃忚嚜娌诲幙',
                                    code: '23'
                                }, {
                                    name: '鍏冲箔甯冧緷鏃忚嫍鏃忚嚜娌诲幙',
                                    code: '24'
                                }, {
                                    name: '绱簯鑻楁棌甯冧緷鏃忚嚜娌诲幙',
                                    code: '25'
                                }]
                            },
                            {
                                name: '姣曡妭甯�', // 8涓競杈栧尯銆佸幙
                                code: '05',
                                city: [{
                                    name: '涓冩槦鍏冲尯',
                                    code: '02'
                                }, {
                                    name: '澶ф柟鍘�',
                                    code: '21'
                                }, {
                                    name: '榛旇タ鍘�',
                                    code: '22'
                                }, {
                                    name: '閲戞矙鍘�',
                                    code: '23'
                                }, {
                                    name: '缁囬噾鍘�',
                                    code: '24'
                                }, {
                                    name: '绾抽泹鍘�',
                                    code: '25'
                                }, {
                                    name: '濞佸畞褰濇棌鍥炴棌鑻楁棌鑷不鍘�',
                                    code: '26'
                                }, {
                                    name: '璧珷鍘�',
                                    code: '27'
                                }]
                            },
                            {
                                name: '閾滀粊甯�', // 10涓競杈栧尯銆佸幙
                                code: '06',
                                city: [{
                                    name: '纰ф睙鍖�',
                                    code: '02'
                                }, {
                                    name: '涓囧北鍖�',
                                    code: '03'
                                }, {
                                    name: '姹熷彛鍘�',
                                    code: '21'
                                }, {
                                    name: '鐜夊睆渚楁棌鑷不鍘�',
                                    code: '22'
                                }, {
                                    name: '鐭抽槨鍘�',
                                    code: '23'
                                }, {
                                    name: '鎬濆崡鍘�',
                                    code: '24'
                                }, {
                                    name: '鍗版睙鍦熷鏃忚嫍鏃忚嚜娌诲幙',
                                    code: '25'
                                }, {
                                    name: '寰锋睙鍘�',
                                    code: '26'
                                }, {
                                    name: '娌挎渤鍦熷鏃忚嚜娌诲幙',
                                    code: '27'
                                }, {
                                    name: '鏉炬鑻楁棌鑷不鍘�',
                                    code: '28'
                                }]
                            },
                            {
                                name: '榛旇タ鍗楀竷渚濇棌鑻楁棌鑷不宸�', // 8涓競杈栧尯銆佸幙
                                code: '23',
                                city: [{
                                    name: '鍏翠箟甯�',
                                    code: '01'
                                }, {
                                    name: '鍏翠粊鍘�',
                                    code: '22'
                                }, {
                                    name: '鏅畨鍘�',
                                    code: '23'
                                }, {
                                    name: '鏅撮殕鍘�',
                                    code: '24'
                                }, {
                                    name: '璐炰赴鍘�',
                                    code: '25'
                                }, {
                                    name: '鏈涜盁鍘�',
                                    code: '26'
                                }, {
                                    name: '鍐屼酣鍘�',
                                    code: '27'
                                }, {
                                    name: '瀹夐緳鍘�',
                                    code: '28'
                                }]
                            },
                            {
                                name: '榛斾笢鍗楄嫍鏃忎緱鏃忚嚜娌诲窞', // 16涓競杈栧尯銆佸幙
                                code: '26',
                                city: [{
                                    name: '鍑噷甯�',
                                    code: '01'
                                }, {
                                    name: '榛勫钩鍘�',
                                    code: '22'
                                }, {
                                    name: '鏂界鍘�',
                                    code: '23'
                                }, {
                                    name: '涓夌鍘�',
                                    code: '24'
                                }, {
                                    name: '闀囪繙鍘�',
                                    code: '25'
                                }, {
                                    name: '宀戝珐鍘�',
                                    code: '26'
                                }, {
                                    name: '澶╂煴鍘�',
                                    code: '27'
                                }, {
                                    name: '閿﹀睆鍘�',
                                    code: '28'
                                }, {
                                    name: '鍓戞渤鍘�',
                                    code: '29'
                                }, {
                                    name: '鍙版睙鍘�',
                                    code: '30'
                                }, {
                                    name: '榛庡钩鍘�',
                                    code: '31'
                                }, {
                                    name: '姒曟睙鍘�',
                                    code: '32'
                                }, {
                                    name: '浠庢睙鍘�',
                                    code: '33'
                                }, {
                                    name: '闆峰北鍘�',
                                    code: '34'
                                }, {
                                    name: '楹绘睙鍘�',
                                    code: '35'
                                }, {
                                    name: '涓瑰鍘�',
                                    code: '36'
                                }]
                            },
                            {
                                name: '榛斿崡甯冧緷鏃忚嫍鏃忚嚜娌诲窞', // 12涓競杈栧尯銆佸幙
                                code: '27',
                                city: [{
                                    name: '閮藉寑甯�',
                                    code: '01'
                                }, {
                                    name: '绂忔硥甯�',
                                    code: '02'
                                }, {
                                    name: '鑽旀尝鍘�',
                                    code: '22'
                                }, {
                                    name: '璐靛畾鍘�',
                                    code: '23'
                                }, {
                                    name: '鐡畨鍘�',
                                    code: '25'
                                }, {
                                    name: '鐙北鍘�',
                                    code: '26'
                                }, {
                                    name: '骞冲鍘�',
                                    code: '27'
                                }, {
                                    name: '缃楃敻鍘�',
                                    code: '28'
                                }, {
                                    name: '闀块『鍘�',
                                    code: '29'
                                }, {
                                    name: '榫欓噷鍘�',
                                    code: '30'
                                }, {
                                    name: '鎯犳按鍘�',
                                    code: '31'
                                }, {
                                    name: '涓夐兘姘存棌鑷不鍘�',
                                    code: '32'
                                }]
                            }
                        ]
                    }
                },
                {
                    region: {
                        name: '浜戝崡', // 16
                        code: '53',
                        state: [
                            {
                                name: '鏄嗘槑甯�', // 14涓競杈栧尯銆佸幙
                                code: '01',
                                city: [{
                                    name: '浜斿崕鍖�',
                                    code: '02'
                                }, {
                                    name: '鐩橀緳鍖�',
                                    code: '03'
                                }, {
                                    name: '瀹樻浮鍖�',
                                    code: '11'
                                }, {
                                    name: '瑗垮北鍖�',
                                    code: '12'
                                }, {
                                    name: '涓滃窛鍖�',
                                    code: '13'
                                }, {
                                    name: '鍛堣础鍖�',
                                    code: '14'
                                }, {
                                    name: '鏅嬪畞鍘�',
                                    code: '22'
                                }, {
                                    name: '瀵屾皯鍘�',
                                    code: '24'
                                }, {
                                    name: '瀹滆壇鍘�',
                                    code: '25'
                                }, {
                                    name: '鐭虫灄褰濇棌鑷不鍘�',
                                    code: '26'
                                }, {
                                    name: '宓╂槑鍘�',
                                    code: '27'
                                }, {
                                    name: '绂勫姖褰濇棌鑻楁棌鑷不鍘�',
                                    code: '28'
                                }, {
                                    name: '瀵荤敻鍥炴棌褰濇棌鑷不鍘�',
                                    code: '29'
                                }, {
                                    name: '瀹夊畞甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '鏇查潠甯�', // 9涓競杈栧尯銆佸幙
                                code: '03',
                                city: [{
                                    name: '楹掗簾鍖�',
                                    code: '02'
                                }, {
                                    name: '娌剧泭鍖�',
                                    code: '03'
                                }, {
                                    name: '椹緳鍘�',
                                    code: '21'
                                }, {
                                    name: '闄嗚壇鍘�',
                                    code: '22'
                                }, {
                                    name: '甯堝畻鍘�',
                                    code: '23'
                                }, {
                                    name: '缃楀钩鍘�',
                                    code: '24'
                                }, {
                                    name: '瀵屾簮鍘�',
                                    code: '25'
                                }, {
                                    name: '浼氭辰鍘�',
                                    code: '26'
                                }, {
                                    name: '瀹ｅ▉甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '鐜夋邯甯�', // 9涓競杈栧尯銆佸幙
                                code: '04',
                                city: [{
                                    name: '绾㈠鍖�',
                                    code: '02'
                                }, {
                                    name: '姹熷窛鍖�',
                                    code: '03'
                                }, {
                                    name: '婢勬睙鍘�',
                                    code: '22'
                                }, {
                                    name: '閫氭捣鍘�',
                                    code: '23'
                                }, {
                                    name: '鍗庡畞鍘�',
                                    code: '24'
                                }, {
                                    name: '鏄撻棬鍘�',
                                    code: '25'
                                }, {
                                    name: '宄ㄥ北褰濇棌鑷不鍘�',
                                    code: '26'
                                }, {
                                    name: '鏂板钩褰濇棌鍌ｆ棌鑷不鍘�',
                                    code: '27'
                                }, {
                                    name: '鍏冩睙鍝堝凹鏃忓綕鏃忓偅鏃忚嚜娌诲幙',
                                    code: '28'
                                }]
                            },
                            {
                                name: '淇濆北甯�', // 5涓競杈栧尯銆佸幙
                                code: '05',
                                city: [{
                                    name: '闅嗛槼鍖�',
                                    code: '02'
                                }, {
                                    name: '鏂界敻鍘�',
                                    code: '21'
                                }, {
                                    name: '榫欓櫟鍘�',
                                    code: '23'
                                }, {
                                    name: '鏄屽畞鍘�',
                                    code: '24'
                                }, {
                                    name: '鑵惧啿甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '鏄€氬競', // 11涓競杈栧尯銆佸幙
                                code: '06',
                                city: [{
                                    name: '鏄槼鍖�',
                                    code: '02'
                                }, {
                                    name: '椴佺敻鍘�',
                                    code: '21'
                                }, {
                                    name: '宸у鍘�',
                                    code: '22'
                                }, {
                                    name: '鐩愭触鍘�',
                                    code: '23'
                                }, {
                                    name: '澶у叧鍘�',
                                    code: '24'
                                }, {
                                    name: '姘稿杽鍘�',
                                    code: '25'
                                }, {
                                    name: '缁ユ睙鍘�',
                                    code: '26'
                                }, {
                                    name: '闀囬泟鍘�',
                                    code: '27'
                                }, {
                                    name: '褰濊壇鍘�',
                                    code: '28'
                                }, {
                                    name: '濞佷俊鍘�',
                                    code: '29'
                                }, {
                                    name: '姘村瘜鍘�',
                                    code: '30'
                                }]
                            },
                            {
                                name: '涓芥睙甯�', // 5涓競杈栧尯銆佸幙
                                code: '07',
                                city: [{
                                    name: '鍙ゅ煄鍖�',
                                    code: '02'
                                }, {
                                    name: '鐜夐緳绾宠タ鏃忚嚜娌诲幙',
                                    code: '21'
                                }, {
                                    name: '姘歌儨鍘�',
                                    code: '22'
                                }, {
                                    name: '鍗庡潽鍘�',
                                    code: '23'
                                }, {
                                    name: '瀹佽挆褰濇棌鑷不鍘�',
                                    code: '24'
                                }]
                            },
                            {
                                name: '鎬濊寘甯�', // 10涓競杈栧尯銆佸幙
                                code: '08',
                                city: [{
                                    name: '鎬濊寘鍖�',
                                    code: '02'
                                }, {
                                    name: '瀹佹幢鍝堝凹鏃忓綕鏃忚嚜娌诲幙',
                                    code: '21'
                                }, {
                                    name: '澧ㄦ睙鍝堝凹鏃忚嚜娌诲幙',
                                    code: '22'
                                }, {
                                    name: '鏅笢褰濇棌鑷不鍘�',
                                    code: '23'
                                }, {
                                    name: '鏅胺鍌ｆ棌褰濇棌鑷不鍘�',
                                    code: '24'
                                }, {
                                    name: '闀囨矃褰濇棌鍝堝凹鏃忔媺绁滄棌鑷不鍘�',
                                    code: '25'
                                }, {
                                    name: '姹熷煄鍝堝凹鏃忓綕鏃忚嚜娌诲幙',
                                    code: '26'
                                }, {
                                    name: '瀛熻繛鍌ｆ棌鎷夌鏃忎饯鏃忚嚜娌诲幙',
                                    code: '27'
                                }, {
                                    name: '婢滄钵鎷夌鏃忚嚜娌诲幙',
                                    code: '28'
                                }, {
                                    name: '瑗跨洘浣ゆ棌鑷不鍘�',
                                    code: '29'
                                }]
                            },
                            {
                                name: '涓存钵甯�',	 // 8涓競杈栧尯銆佸幙
                                code: '09',
                                city: [{
                                    name: '涓寸繑鍖�',
                                    code: '02'
                                }, {
                                    name: '鍑ゅ簡鍘�',
                                    code: '21'
                                }, {
                                    name: '浜戝幙',
                                    code: '22'
                                }, {
                                    name: '姘稿痉鍘�',
                                    code: '23'
                                }, {
                                    name: '闀囧悍鍘�',
                                    code: '24'
                                }, {
                                    name: '鍙屾睙鎷夌鏃忎饯鏃忓竷鏈楁棌鍌ｆ棌鑷不鍘�',
                                    code: '25'
                                }, {
                                    name: '鑰块┈鍌ｆ棌浣ゆ棌鑷不鍘�',
                                    code: '26'
                                }, {
                                    name: '娌ф簮浣ゆ棌鑷不鍘�',
                                    code: '27'
                                }]
                            },
                            {
                                name: '妤氶泟褰濇棌鑷不宸�', // 10涓競杈栧尯銆佸幙
                                code: '23',
                                city: [{
                                    name: '妤氶泟甯�',
                                    code: '01'
                                }, {
                                    name: '鍙屾煆鍘�',
                                    code: '22'
                                }, {
                                    name: '鐗熷畾鍘�',
                                    code: '23'
                                }, {
                                    name: '鍗楀崕鍘�',
                                    code: '24'
                                }, {
                                    name: '濮氬畨鍘�',
                                    code: '25'
                                }, {
                                    name: '澶у鍘�',
                                    code: '26'
                                }, {
                                    name: '姘镐粊鍘�',
                                    code: '27'
                                }, {
                                    name: '鍏冭皨鍘�',
                                    code: '28'
                                }, {
                                    name: '姝﹀畾鍘�',
                                    code: '29'
                                }, {
                                    name: '绂勪赴鍘�',
                                    code: '31'
                                }]
                            },
                            {
                                name: '绾㈡渤鍝堝凹鏃忓綕鏃忚嚜娌诲窞', // 13涓競杈栧尯銆佸幙
                                code: '25',
                                city: [{
                                    name: '涓棫甯�',
                                    code: '01'
                                }, {
                                    name: '寮€杩滃競',
                                    code: '02'
                                }, {
                                    name: '钂欒嚜甯�',
                                    code: '03'
                                }, {
                                    name: '寮ュ嫆甯�',
                                    code: '04'
                                }, {
                                    name: '灞忚竟鑻楁棌鑷不鍘�',
                                    code: '23'
                                }, {
                                    name: '寤烘按鍘�',
                                    code: '24'
                                }, {
                                    name: '鐭冲睆鍘�',
                                    code: '25'
                                }, {
                                    name: '娉歌タ鍘�',
                                    code: '27'
                                }, {
                                    name: '鍏冮槼鍘�',
                                    code: '28'
                                }, {
                                    name: '绾㈡渤鍘�',
                                    code: '29'
                                }, {
                                    name: '閲戝钩鑻楁棌鐟舵棌鍌ｆ棌鑷不鍘�',
                                    code: '30'
                                }, {
                                    name: '缁挎槬鍘�',
                                    code: '31'
                                }, {
                                    name: '娌冲彛鐟舵棌鑷不鍘�',
                                    code: '32'
                                }]
                            },
                            {
                                name: '鏂囧北澹棌鑻楁棌鑷不宸�', // 8涓競杈栧尯銆佸幙
                                code: '26',
                                city: [{
                                    name: '鏂囧北甯�',
                                    code: '01'
                                }, {
                                    name: '鐮氬北鍘�',
                                    code: '22'
                                }, {
                                    name: '瑗跨暣鍘�',
                                    code: '23'
                                }, {
                                    name: '楹绘牀鍧″幙',
                                    code: '24'
                                }, {
                                    name: '椹叧鍘�',
                                    code: '25'
                                }, {
                                    name: '涓樺寳鍘�',
                                    code: '26'
                                }, {
                                    name: '骞垮崡鍘�',
                                    code: '27'
                                }, {
                                    name: '瀵屽畞鍘�',
                                    code: '28'
                                }]
                            },
                            {
                                name: '瑗垮弻鐗堢撼鍌ｆ棌鑷不宸�', // 3涓競杈栧尯銆佸幙
                                code: '28',
                                city: [{
                                    name: '鏅椽甯�',
                                    code: '01'
                                }, {
                                    name: '鍕愭捣鍘�',
                                    code: '22'
                                }, {
                                    name: '鍕愯厞鍘�',
                                    code: '23'
                                }]
                            },
                            {
                                name: '澶х悊鐧芥棌鑷不宸�', // 12涓競杈栧尯銆佸幙
                                code: '29',
                                city: [{
                                    name: '澶х悊甯�',
                                    code: '01'
                                }, {
                                    name: '婕炬繛褰濇棌鑷不鍘�',
                                    code: '22'
                                }, {
                                    name: '绁ヤ簯鍘�',
                                    code: '23'
                                }, {
                                    name: '瀹惧窛鍘�',
                                    code: '24'
                                }, {
                                    name: '寮ユ浮鍘�',
                                    code: '25'
                                }, {
                                    name: '鍗楁锭褰濇棌鑷不鍘�',
                                    code: '26'
                                }, {
                                    name: '宸嶅北褰濇棌鍥炴棌鑷不鍘�',
                                    code: '27'
                                }, {
                                    name: '姘稿钩鍘�',
                                    code: '28'
                                }, {
                                    name: '浜戦緳鍘�',
                                    code: '29'
                                }, {
                                    name: '娲辨簮鍘�',
                                    code: '30'
                                }, {
                                    name: '鍓戝窛鍘�',
                                    code: '31'
                                }, {
                                    name: '楣ゅ簡鍘�',
                                    code: '32'
                                }]
                            },
                            {
                                name: '寰峰畯鍌ｆ棌鏅鏃忚嚜娌诲窞', // 5涓競杈栧尯銆佸幙
                                code: '31',
                                city: [{
                                    name: '鐟炰附甯�',
                                    code: '02'
                                }, {
                                    name: '鑺掑競',
                                    code: '03'
                                }, {
                                    name: '姊佹渤鍘�',
                                    code: '22'
                                }, {
                                    name: '鐩堟睙鍘�',
                                    code: '23'
                                }, {
                                    name: '闄囧窛鍘�',
                                    code: '24'
                                }]
                            },
                            {
                                name: '鎬掓睙鍌堝兂鏃忚嚜娌诲窞', // 4涓競杈栧尯銆佸幙
                                code: '33',
                                city: [{
                                    name: '娉告按甯�',
                                    code: '01'
                                }, {
                                    name: '绂忚础鍘�',
                                    code: '23'
                                }, {
                                    name: '璐″北鐙緳鏃忔€掓棌鑷不鍘�',
                                    code: '24'
                                }, {
                                    name: '鍏板潽鐧芥棌鏅背鏃忚嚜娌诲幙',
                                    code: '25'
                                }]
                            },
                            {
                                name: '杩簡钘忔棌鑷不宸�', // 3涓競杈栧尯銆佸幙
                                code: '34',
                                city: [{
                                    name: '棣欐牸閲屾媺甯�',
                                    code: '21'
                                }, {
                                    name: '寰烽挦鍘�',
                                    code: '22'
                                }, {
                                    name: '缁磋タ鍌堝兂鏃忚嚜娌诲幙',
                                    code: '23'
                                }]
                            }]
                    }
                },
                {
                    region: {
                        name: '瑗胯棌', // 7
                        code: '54',
                        state: [
                            {
                                name: '鎷夎惃甯�', // 8涓競杈栧尯銆佸幙
                                code: '01',
                                city: [{
                                    name: '鍩庡叧鍖�',
                                    code: '02'
                                }, {
                                    name: '鍫嗛緳寰峰簡鍖�',
                                    code: '03'
                                }, {
                                    name: '鏋楀懆鍘�',
                                    code: '21'
                                }, {
                                    name: '褰撻泟鍘�',
                                    code: '22'
                                }, {
                                    name: '灏兼湪鍘�',
                                    code: '23'
                                }, {
                                    name: '鏇叉按鍘�',
                                    code: '24'
                                }, {
                                    name: '杈惧瓬鍘�',
                                    code: '26'
                                }, {
                                    name: '澧ㄧ宸ュ崱鍘�',
                                    code: '27'
                                }]
                            },
                            {
                                name: '鏃ュ杸鍒欏競', // 18涓競杈栧尯銆佸幙
                                code: '02',
                                city: [{
                                    name: '妗戠彔瀛滃尯',
                                    code: '02'
                                }, {
                                    name: '鍗楁湪鏋楀幙',
                                    code: '21'
                                }, {
                                    name: '姹熷瓬鍘�',
                                    code: '22'
                                }, {
                                    name: '瀹氭棩鍘�',
                                    code: '23'
                                }, {
                                    name: '钀ㄨ喀鍘�',
                                    code: '24'
                                }, {
                                    name: '鎷夊瓬鍘�',
                                    code: '25'
                                }, {
                                    name: '鏄備粊鍘�',
                                    code: '26'
                                }, {
                                    name: '璋㈤€氶棬鍘�',
                                    code: '27'
                                }, {
                                    name: '鐧芥湕鍘�',
                                    code: '28'
                                }, {
                                    name: '浠佸竷鍘�',
                                    code: '29'
                                }, {
                                    name: '搴烽┈鍘�',
                                    code: '30'
                                }, {
                                    name: '瀹氱粨鍘�',
                                    code: '31'
                                }, {
                                    name: '浠插反鍘�',
                                    code: '32'
                                }, {
                                    name: '浜氫笢鍘�',
                                    code: '33'
                                }, {
                                    name: '鍚夐殕鍘�',
                                    code: '34'
                                }, {
                                    name: '鑱傛媺鏈ㄥ幙',
                                    code: '35'
                                }, {
                                    name: '钀ㄥ槑鍘�',
                                    code: '36'
                                }, {
                                    name: '宀楀反鍘�',
                                    code: '37'
                                }]
                            },
                            {
                                name: '鏄岄兘甯�', // 11涓競杈栧尯銆佸幙
                                code: '03',
                                city: [{
                                    name: '鍗¤嫢鍖�',
                                    code: '02'
                                }, {
                                    name: '姹熻揪鍘�',
                                    code: '21'
                                }, {
                                    name: '璐¤鍘�',
                                    code: '22'
                                }, {
                                    name: '绫讳箤榻愬幙',
                                    code: '23'
                                }, {
                                    name: '涓侀潚鍘�',
                                    code: '24'
                                }, {
                                    name: '瀵熼泤鍘�',
                                    code: '25'
                                }, {
                                    name: '鍏鍘�',
                                    code: '26'
                                }, {
                                    name: '宸﹁础鍘�',
                                    code: '27'
                                }, {
                                    name: '鑺掑悍鍘�',
                                    code: '28'
                                }, {
                                    name: '娲涢殕鍘�',
                                    code: '29'
                                }, {
                                    name: '杈瑰潩鍘�',
                                    code: '30'
                                }]
                            },
                            {
                                name: '鏋楄姖甯�', // 7涓競杈栧尯銆佸幙
                                code: '04',
                                city: [{
                                    name: '宸村疁鍖�',
                                    code: '02'
                                }, {
                                    name: '宸ュ竷姹熻揪鍘�',
                                    code: '21'
                                }, {
                                    name: '绫虫灄鍘�',
                                    code: '22'
                                }, {
                                    name: '澧ㄨ劚鍘�',
                                    code: '23'
                                }, {
                                    name: '娉㈠瘑鍘�',
                                    code: '24'
                                }, {
                                    name: '瀵熼殔鍘�',
                                    code: '25'
                                }, {
                                    name: '鏈楀幙',
                                    code: '26'
                                }]
                            },
                            {
                                name: '灞卞崡甯�', // 12涓競杈栧尯銆佸幙
                                code: '05',
                                city: [{
                                    name: '涔冧笢鍖�',
                                    code: '02'
                                }, {
                                    name: '鎵庡泭鍘�',
                                    code: '21'
                                }, {
                                    name: '璐″槑鍘�',
                                    code: '22'
                                }, {
                                    name: '妗戞棩鍘�',
                                    code: '23'
                                }, {
                                    name: '鐞肩粨鍘�',
                                    code: '24'
                                }, {
                                    name: '鏇叉澗鍘�',
                                    code: '25'
                                }, {
                                    name: '鎺編鍘�',
                                    code: '26'
                                }, {
                                    name: '娲涙墡鍘�',
                                    code: '27'
                                }, {
                                    name: '鍔犳煡鍘�',
                                    code: '28'
                                }, {
                                    name: '闅嗗瓙鍘�',
                                    code: '29'
                                }, {
                                    name: '閿欓偅鍘�',
                                    code: '30'
                                }, {
                                    name: '娴崱瀛愬幙',
                                    code: '31'
                                }]
                            },
                            {
                                name: '閭ｆ洸鍦板尯', // 11涓競杈栧尯銆佸幙
                                code: '24',
                                city: [{
                                    name: '閭ｆ洸鍘�',
                                    code: '21'
                                }, {
                                    name: '鍢夐粠鍘�',
                                    code: '22'
                                }, {
                                    name: '姣斿鍘�',
                                    code: '23'
                                }, {
                                    name: '鑱傝崳鍘�',
                                    code: '24'
                                }, {
                                    name: '瀹夊鍘�',
                                    code: '25'
                                }, {
                                    name: '鐢虫墡鍘�',
                                    code: '26'
                                }, {
                                    name: '绱㈠幙',
                                    code: '27'
                                }, {
                                    name: '鐝垐鍘�',
                                    code: '28'
                                }, {
                                    name: '宸撮潚鍘�',
                                    code: '29'
                                }, {
                                    name: '灏肩帥鍘�',
                                    code: '30'
                                }, {
                                    name: '鍙屾箹鍘�',
                                    code: '31'
                                }]
                            },
                            {
                                name: '闃块噷鍦板尯', // 7涓競杈栧尯銆佸幙
                                code: '25',
                                city: [{
                                    name: '鏅叞鍘�',
                                    code: '21'
                                }, {
                                    name: '鏈揪鍘�',
                                    code: '22'
                                }, {
                                    name: '鍣跺皵鍘�',
                                    code: '23'
                                }, {
                                    name: '鏃ュ湡鍘�',
                                    code: '24'
                                }, {
                                    name: '闈╁悏鍘�',
                                    code: '25'
                                }, {
                                    name: '鏀瑰垯鍘�',
                                    code: '26'
                                }, {
                                    name: '鎺嫟鍘�',
                                    code: '27'
                                }]
                            }
                        ]
                    }
                }, {
                    region: {
                        name: '闄曡タ', // 10
                        code: '61',
                        state: [
                            {
                                name: '瑗垮畨甯�', // 13涓競杈栧尯銆佸幙
                                code: '01',
                                city: [
                                    {
                                        name: '鏂板煄鍖�',
                                        code: '02'
                                    }, {
                                        name: '纰戞灄鍖�',
                                        code: '03'
                                    }, {
                                        name: '鑾叉箹鍖�',
                                        code: '04'
                                    }, {
                                        name: '鐏炴ˉ鍖�',
                                        code: '11'
                                    }, {
                                        name: '鏈ぎ鍖�',
                                        code: '12'
                                    }, {
                                        name: '闆佸鍖�',
                                        code: '13'
                                    }, {
                                        name: '闃庤壇鍖�',
                                        code: '14'
                                    }, {
                                        name: '涓存郊鍖�',
                                        code: '15'
                                    }, {
                                        name: '闀垮畨鍖�',
                                        code: '16'
                                    }, {
                                        name: '楂橀櫟鍖�',
                                        code: '17'
                                    }, {
                                        name: '钃濈敯鍘�',
                                        code: '22'
                                    }, {
                                        name: '鍛ㄨ嚦鍘�',
                                        code: '24'
                                    }, {
                                        name: '鎴峰幙',
                                        code: '25'
                                    }]
                            },
                            {
                                name: '閾滃窛甯�', // 4涓競杈栧尯銆佸幙
                                code: '02',
                                city: [{
                                    name: '鐜嬬泭鍖�',
                                    code: '02'
                                }, {
                                    name: '鍗板彴鍖�',
                                    code: '03'
                                }, {
                                    name: '鑰€宸炲尯',
                                    code: '04'
                                }, {
                                    name: '瀹滃悰鍘�',
                                    code: '22'
                                }]
                            },
                            {
                                name: '瀹濋浮甯�', // 12涓競杈栧尯銆佸幙
                                code: '03',
                                city: [{
                                    name: '娓花鍖�',
                                    code: '02'
                                }, {
                                    name: '閲戝彴鍖�',
                                    code: '03'
                                }, {
                                    name: '闄堜粨鍖�',
                                    code: '04'
                                }, {
                                    name: '鍑ょ繑鍘�',
                                    code: '22'
                                }, {
                                    name: '宀愬北鍘�',
                                    code: '23'
                                }, {
                                    name: '鎵堕鍘�',
                                    code: '24'
                                }, {
                                    name: '鐪夊幙',
                                    code: '26'
                                }, {
                                    name: '闄囧幙',
                                    code: '27'
                                }, {
                                    name: '鍗冮槼鍘�',
                                    code: '28'
                                }, {
                                    name: '楹熸父鍘�',
                                    code: '29'
                                }, {
                                    name: '鍑ゅ幙',
                                    code: '30'
                                }, {
                                    name: '澶櫧鍘�',
                                    code: '31'
                                }]
                            },
                            {
                                name: '鍜搁槼甯�', // 14涓競杈栧尯銆佸幙
                                code: '04',
                                city: [{
                                    name: '绉﹂兘鍖�',
                                    code: '02'
                                }, {
                                    name: '鏉ㄥ噷鍖�',
                                    code: '03'
                                }, {
                                    name: '娓煄鍖�',
                                    code: '04'
                                }, {
                                    name: '涓夊師鍘�',
                                    code: '22'
                                }, {
                                    name: '娉鹃槼鍘�',
                                    code: '23'
                                }, {
                                    name: '涔惧幙',
                                    code: '24'
                                }, {
                                    name: '绀兼硥鍘�',
                                    code: '25'
                                }, {
                                    name: '姘稿鍘�',
                                    code: '26'
                                }, {
                                    name: '褰幙',
                                    code: '27'
                                }, {
                                    name: '闀挎鍘�',
                                    code: '28'
                                }, {
                                    name: '鏃倯鍘�',
                                    code: '29'
                                }, {
                                    name: '娣冲寲鍘�',
                                    code: '30'
                                }, {
                                    name: '姝﹀姛鍘�',
                                    code: '31'
                                }, {
                                    name: '鍏村钩甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '娓崡甯�', // 11涓競杈栧尯銆佸幙
                                code: '05',
                                city: [{
                                    name: '涓存腑鍖�',
                                    code: '02'
                                }, {
                                    name: '鍗庡窞鍖�',
                                    code: '03'
                                }, {
                                    name: '娼煎叧鍘�',
                                    code: '22'
                                }, {
                                    name: '澶ц崝鍘�',
                                    code: '23'
                                }, {
                                    name: '鍚堥槼鍘�',
                                    code: '24'
                                }, {
                                    name: '婢勫煄鍘�',
                                    code: '25'
                                }, {
                                    name: '钂插煄鍘�',
                                    code: '26'
                                }, {
                                    name: '鐧芥按鍘�',
                                    code: '27'
                                }, {
                                    name: '瀵屽钩鍘�',
                                    code: '28'
                                }, {
                                    name: '闊╁煄甯�',
                                    code: '81'
                                }, {
                                    name: '鍗庨槾甯�',
                                    code: '82'
                                }]
                            },
                            {
                                name: '寤跺畨甯�', // 13涓競杈栧尯銆佸幙
                                code: '06',
                                city: [{
                                    name: '瀹濆鍖�',
                                    code: '02'
                                }, {
                                    name: '瀹夊鍖�',
                                    code: '03'
                                }, {
                                    name: '寤堕暱鍘�',
                                    code: '21'
                                }, {
                                    name: '寤跺窛鍘�',
                                    code: '22'
                                }, {
                                    name: '瀛愰暱鍘�',
                                    code: '23'
                                }, {
                                    name: '蹇椾腹鍘�',
                                    code: '25'
                                }, {
                                    name: '鍚磋捣鍘�',
                                    code: '26'
                                }, {
                                    name: '鐢樻硥鍘�',
                                    code: '27'
                                }, {
                                    name: '瀵屽幙',
                                    code: '28'
                                }, {
                                    name: '娲涘窛鍘�',
                                    code: '29'
                                }, {
                                    name: '瀹滃窛鍘�',
                                    code: '30'
                                }, {
                                    name: '榛勯緳鍘�',
                                    code: '31'
                                }, {
                                    name: '榛勯櫟鍘�',
                                    code: '32'
                                }]
                            },
                            {
                                name: '姹変腑甯�', // 11涓競杈栧尯銆佸幙
                                code: '07',
                                city: [{
                                    name: '姹夊彴鍖�',
                                    code: '02'
                                }, {
                                    name: '鍗楅儜鍘�',
                                    code: '21'
                                }, {
                                    name: '鍩庡浐鍘�',
                                    code: '22'
                                }, {
                                    name: '娲嬪幙',
                                    code: '23'
                                }, {
                                    name: '瑗夸埂鍘�',
                                    code: '24'
                                }, {
                                    name: '鍕夊幙',
                                    code: '25'
                                }, {
                                    name: '瀹佸己鍘�',
                                    code: '26'
                                }, {
                                    name: '鐣ラ槼鍘�',
                                    code: '27'
                                }, {
                                    name: '闀囧反鍘�',
                                    code: '28'
                                }, {
                                    name: '鐣欏潩鍘�',
                                    code: '29'
                                }, {
                                    name: '浣涘潽鍘�',
                                    code: '30'
                                }]
                            },
                            {
                                name: '姒嗘灄甯�', // 12涓競杈栧尯銆佸幙
                                code: '08',
                                city: [{
                                    name: '姒嗛槼鍖�',
                                    code: '02'
                                }, {
                                    name: '妯北鍖�',
                                    code: '03'
                                }, {
                                    name: '绁炴湪鍘�',
                                    code: '21'
                                }, {
                                    name: '搴滆胺鍘�',
                                    code: '22'
                                }, {
                                    name: '闈栬竟鍘�',
                                    code: '24'
                                }, {
                                    name: '瀹氳竟鍘�',
                                    code: '25'
                                }, {
                                    name: '缁ュ痉鍘�',
                                    code: '26'
                                }, {
                                    name: '绫宠剛鍘�',
                                    code: '27'
                                }, {
                                    name: '浣冲幙',
                                    code: '28'
                                }, {
                                    name: '鍚村牎鍘�',
                                    code: '29'
                                }, {
                                    name: '娓呮锭鍘�',
                                    code: '30'
                                }, {
                                    name: '瀛愭床鍘�',
                                    code: '31'
                                }]
                            },
                            {
                                name: '瀹夊悍甯�', // 10涓競杈栧尯銆佸幙
                                code: '09',
                                city: [{
                                    name: '姹夋花鍖�',
                                    code: '02'
                                }, {
                                    name: '姹夐槾鍘�',
                                    code: '21'
                                }, {
                                    name: '鐭虫硥鍘�',
                                    code: '22'
                                }, {
                                    name: '瀹侀檿鍘�',
                                    code: '23'
                                }, {
                                    name: '绱槼鍘�',
                                    code: '24'
                                }, {
                                    name: '宀氱殝鍘�',
                                    code: '25'
                                }, {
                                    name: '骞冲埄鍘�',
                                    code: '26'
                                }, {
                                    name: '闀囧潽鍘�',
                                    code: '27'
                                }, {
                                    name: '鏃槼鍘�',
                                    code: '28'
                                }, {
                                    name: '鐧芥渤鍘�',
                                    code: '29'
                                }]
                            },
                            {
                                name: '鍟嗘礇甯�', // 7涓競杈栧尯銆佸幙
                                code: '10',
                                city: [{
                                    name: '鍟嗗窞鍖�',
                                    code: '02'
                                }, {
                                    name: '娲涘崡鍘�',
                                    code: '21'
                                }, {
                                    name: '涓瑰嚖鍘�',
                                    code: '22'
                                }, {
                                    name: '鍟嗗崡鍘�',
                                    code: '23'
                                }, {
                                    name: '灞遍槼鍘�',
                                    code: '24'
                                }, {
                                    name: '闀囧畨鍘�',
                                    code: '25'
                                }, {
                                    name: '鏌炴按鍘�',
                                    code: '26'
                                }]
                            }]
                    }
                },
                {
                    region: {
                        name: '鐢樿們', // 14
                        code: '62',
                        state: [
                            {
                                name: '鍏板窞甯�', // 8涓競杈栧尯銆佸幙
                                code: '01',
                                city: [{
                                    name: '鍩庡叧鍖�',
                                    code: '02'
                                }, {
                                    name: '涓冮噷娌冲尯',
                                    code: '03'
                                }, {
                                    name: '瑗垮浐鍖�',
                                    code: '04'
                                }, {
                                    name: '瀹夊畞鍖�',
                                    code: '05'
                                }, {
                                    name: '绾㈠彜鍖�',
                                    code: '11'
                                }, {
                                    name: '姘哥櫥鍘�',
                                    code: '21'
                                }, {
                                    name: '鐨嬪叞鍘�',
                                    code: '22'
                                }, {
                                    name: '姒嗕腑鍘�',
                                    code: '23'
                                }]
                            },
                            {
                                name: '鍢夊唱鍏冲競',
                                code: '02',
                                city: []
                            },
                            {
                                name: '閲戞槍甯�', // 2涓競杈栧尯銆佸幙
                                code: '03',
                                city: [{
                                    name: '閲戝窛鍖�',
                                    code: '02'
                                }, {
                                    name: '姘告槍鍘�',
                                    code: '21'
                                }]
                            },
                            {
                                name: '鐧介摱甯�', // 5涓競杈栧尯銆佸幙
                                code: '04',
                                city: [{
                                    name: '鐧介摱鍖�',
                                    code: '02'
                                }, {
                                    name: '骞冲窛鍖�',
                                    code: '03'
                                }, {
                                    name: '闈栬繙鍘�',
                                    code: '21'
                                }, {
                                    name: '浼氬畞鍘�',
                                    code: '22'
                                }, {
                                    name: '鏅嘲鍘�',
                                    code: '23'
                                }]
                            },
                            {
                                name: '澶╂按甯�', // 7涓競杈栧尯銆佸幙
                                code: '05',
                                city: [{
                                    name: '绉﹀窞鍖�',
                                    code: '02'
                                }, {
                                    name: '楹︾Н鍖�',
                                    code: '03'
                                }, {
                                    name: '娓呮按鍘�',
                                    code: '21'
                                }, {
                                    name: '绉﹀畨鍘�',
                                    code: '22'
                                }, {
                                    name: '鐢樿胺鍘�',
                                    code: '23'
                                }, {
                                    name: '姝﹀北鍘�',
                                    code: '24'
                                }, {
                                    name: '寮犲宸濆洖鏃忚嚜娌诲幙',
                                    code: '25'
                                }]
                            },
                            {
                                name: '姝﹀▉甯�', // 4涓競杈栧尯銆佸幙
                                code: '06',
                                city: [{
                                    name: '鍑夊窞鍖�',
                                    code: '02'
                                }, {
                                    name: '姘戝嫟鍘�',
                                    code: '21'
                                }, {
                                    name: '鍙ゆ氮鍘�',
                                    code: '22'
                                }, {
                                    name: '澶╃钘忔棌鑷不鍘�',
                                    code: '23'
                                }]
                            },
                            {
                                name: '寮犳帠甯�', // 6涓競杈栧尯銆佸幙
                                code: '07',
                                city: [{
                                    name: '鐢樺窞鍖�',
                                    code: '02'
                                }, {
                                    name: '鑲冨崡瑁曞浐鏃忚嚜娌诲幙',
                                    code: '21'
                                }, {
                                    name: '姘戜箰鍘�',
                                    code: '22'
                                }, {
                                    name: '涓存辰鍘�',
                                    code: '23'
                                }, {
                                    name: '楂樺彴鍘�',
                                    code: '24'
                                }, {
                                    name: '灞变腹鍘�',
                                    code: '25'
                                }]
                            },
                            {
                                name: '骞冲噳甯�', // 7涓競杈栧尯銆佸幙
                                code: '08',
                                city: [{
                                    name: '宕嗗硳鍖�',
                                    code: '02'
                                }, {
                                    name: '娉惧窛鍘�',
                                    code: '21'
                                }, {
                                    name: '鐏靛彴鍘�',
                                    code: '22'
                                }, {
                                    name: '宕囦俊鍘�',
                                    code: '23'
                                }, {
                                    name: '鍗庝涵鍘�',
                                    code: '24'
                                }, {
                                    name: '搴勬氮鍘�',
                                    code: '25'
                                }, {
                                    name: '闈欏畞鍘�',
                                    code: '26'
                                }]
                            },
                            {
                                name: '閰掓硥甯�', // 7涓競杈栧尯銆佸幙
                                code: '09',
                                city: [{
                                    name: '鑲冨窞鍖�',
                                    code: '02'
                                }, {
                                    name: '閲戝鍘�',
                                    code: '21'
                                }, {
                                    name: '鐡滃窞鍘�',
                                    code: '22'
                                }, {
                                    name: '鑲冨寳钂欏彜鏃忚嚜娌诲幙',
                                    code: '23'
                                }, {
                                    name: '闃垮厠濉炲搱钀ㄥ厠鏃忚嚜娌诲幙',
                                    code: '24'
                                }, {
                                    name: '鐜夐棬甯�',
                                    code: '81'
                                }, {
                                    name: '鏁︾厡甯�',
                                    code: '82'
                                }]
                            },
                            {
                                name: '搴嗛槼甯�', // 8涓競杈栧尯銆佸幙
                                code: '10',
                                city: [{
                                    name: '瑗垮嘲鍖�',
                                    code: '02'
                                }, {
                                    name: '搴嗗煄鍘�',
                                    code: '21'
                                }, {
                                    name: '鐜幙',
                                    code: '22'
                                }, {
                                    name: '鍗庢睜鍘�',
                                    code: '23'
                                }, {
                                    name: '鍚堟按鍘�',
                                    code: '24'
                                }, {
                                    name: '姝ｅ畞鍘�',
                                    code: '25'
                                }, {
                                    name: '瀹佸幙',
                                    code: '26'
                                }, {
                                    name: '闀囧師鍘�',
                                    code: '27'
                                }]
                            },
                            {
                                name: '瀹氳タ甯�', // 7涓競杈栧尯銆佸幙
                                code: '11',
                                city: [{
                                    name: '瀹夊畾鍖�',
                                    code: '02'
                                }, {
                                    name: '閫氭腑鍘�',
                                    code: '21'
                                }, {
                                    name: '闄囪タ鍘�',
                                    code: '22'
                                }, {
                                    name: '娓簮鍘�',
                                    code: '23'
                                }, {
                                    name: '涓存串鍘�',
                                    code: '24'
                                }, {
                                    name: '婕冲幙',
                                    code: '25'
                                }, {
                                    name: '宀峰幙',
                                    code: '26'
                                }]
                            },
                            {
                                name: '闄囧崡甯�', // 9涓競杈栧尯銆佸幙
                                code: '12',
                                city: [{
                                    name: '姝﹂兘鍖�',
                                    code: '02'
                                }, {
                                    name: '鎴愬幙',
                                    code: '21'
                                }, {
                                    name: '鏂囧幙',
                                    code: '22'
                                }, {
                                    name: '瀹曟槍鍘�',
                                    code: '23'
                                }, {
                                    name: '搴峰幙',
                                    code: '24'
                                }, {
                                    name: '瑗垮拰鍘�',
                                    code: '25'
                                }, {
                                    name: '绀煎幙',
                                    code: '26'
                                }, {
                                    name: '寰藉幙',
                                    code: '27'
                                }, {
                                    name: '涓ゅ綋鍘�',
                                    code: '28'
                                }]
                            },
                            {
                                name: '涓村鍥炴棌鑷不宸�', // 8涓競杈栧尯銆佸幙
                                code: '29',
                                city: [{
                                    name: '涓村甯�',
                                    code: '01'
                                }, {
                                    name: '涓村鍘�',
                                    code: '21'
                                }, {
                                    name: '搴蜂箰鍘�',
                                    code: '22'
                                }, {
                                    name: '姘搁潠鍘�',
                                    code: '23'
                                }, {
                                    name: '骞挎渤鍘�',
                                    code: '24'
                                }, {
                                    name: '鍜屾斂鍘�',
                                    code: '25'
                                }, {
                                    name: '涓滀埂鏃忚嚜娌诲幙',
                                    code: '26'
                                }, {
                                    name: '绉煶灞变繚瀹夋棌涓滀埂鏃忔拻鎷夋棌鑷不鍘�',
                                    code: '27'
                                }]
                            },
                            {
                                name: '鐢樺崡钘忔棌鑷不宸�', // 8涓競杈栧尯銆佸幙
                                code: '30',
                                city: [{
                                    name: '鍚堜綔甯�',
                                    code: '01'
                                }, {
                                    name: '涓存江鍘�',
                                    code: '21'
                                }, {
                                    name: '鍗撳凹鍘�',
                                    code: '22'
                                }, {
                                    name: '鑸熸洸鍘�',
                                    code: '23'
                                }, {
                                    name: '杩儴鍘�',
                                    code: '24'
                                }, {
                                    name: '鐜涙洸鍘�',
                                    code: '25'
                                }, {
                                    name: '纰屾洸鍘�',
                                    code: '26'
                                }, {
                                    name: '澶忔渤鍘�',
                                    code: '27'
                                }]
                            }]
                    }
                }, {
                    region: {
                        name: '闈掓捣', // 8
                        code: '63',
                        state: [
                            {
                                name: '瑗垮畞甯�', // 7涓競杈栧尯銆佸幙
                                code: '01',
                                city: [{
                                    name: '鍩庝笢鍖�',
                                    code: '02'
                                }, {
                                    name: '鍩庝腑鍖�',
                                    code: '03'
                                }, {
                                    name: '鍩庤タ鍖�',
                                    code: '04'
                                }, {
                                    name: '鍩庡寳鍖�',
                                    code: '05'
                                }, {
                                    name: '澶ч€氬洖鏃忓湡鏃忚嚜娌诲幙',
                                    code: '21'
                                }, {
                                    name: '婀熶腑鍘�',
                                    code: '22'
                                }, {
                                    name: '婀熸簮鍘�',
                                    code: '23'
                                }]
                            },
                            {
                                name: '娴蜂笢甯�', // 6涓競杈栧尯銆佸幙
                                code: '02',
                                city: [
                                    {
                                        name: '涔愰兘鍖�',
                                        code: '02'
                                    }, {
                                        name: '骞冲畨鍖�',
                                        code: '03'
                                    }, {
                                        name: '姘戝拰鍥炴棌鍦熸棌鑷不鍘�',
                                        code: '22'
                                    }, {
                                        name: '浜掑姪鍦熸棌鑷不鍘�',
                                        code: '23'
                                    }, {
                                        name: '鍖栭殕鍥炴棌鑷不鍘�',
                                        code: '24'
                                    }, {
                                        name: '寰寲鎾掓媺鏃忚嚜娌诲幙',
                                        code: '25'
                                    }]
                            },
                            {
                                name: '娴峰寳钘忔棌鑷不宸�', // 4涓競杈栧尯銆佸幙
                                code: '22',
                                city: [{
                                    name: '闂ㄦ簮鍥炴棌鑷不鍘�',
                                    code: '21'
                                }, {
                                    name: '绁佽繛鍘�',
                                    code: '22'
                                }, {
                                    name: '娴锋檹鍘�',
                                    code: '23'
                                }, {
                                    name: '鍒氬療鍘�',
                                    code: '24'
                                }]
                            },
                            {
                                name: '榛勫崡钘忔棌鑷不宸�', // 4涓競杈栧尯銆佸幙
                                code: '23',
                                city: [{
                                    name: '鍚屼粊鍘�',
                                    code: '21'
                                }, {
                                    name: '灏栨墡鍘�',
                                    code: '22'
                                }, {
                                    name: '娉藉簱鍘�',
                                    code: '23'
                                }, {
                                    name: '娌冲崡钂欏彜鏃忚嚜娌诲幙',
                                    code: '24'
                                }]
                            },
                            {
                                name: '娴峰崡钘忔棌鑷不宸�', // 5涓競杈栧尯銆佸幙
                                code: '25',
                                city: [{
                                    name: '鍏卞拰鍘�',
                                    code: '21'
                                }, {
                                    name: '鍚屽痉鍘�',
                                    code: '22'
                                }, {
                                    name: '璐靛痉鍘�',
                                    code: '23'
                                }, {
                                    name: '鍏存捣鍘�',
                                    code: '24'
                                }, {
                                    name: '璐靛崡鍘�',
                                    code: '25'
                                }]
                            },
                            {
                                name: '鏋滄礇钘忔棌鑷不宸�', // 6涓競杈栧尯銆佸幙
                                code: '26',
                                city: [{
                                    name: '鐜涙瞾鍘�',
                                    code: '21'
                                }, {
                                    name: '鐝帥鍘�',
                                    code: '22'
                                }, {
                                    name: '鐢樺痉鍘�',
                                    code: '23'
                                }, {
                                    name: '杈炬棩鍘�',
                                    code: '24'
                                }, {
                                    name: '涔呮不鍘�',
                                    code: '25'
                                }, {
                                    name: '鐜涘鍘�',
                                    code: '26'
                                }]
                            },
                            {
                                name: '鐜夋爲钘忔棌鑷不宸�', // 6涓競杈栧尯銆佸幙
                                code: '27',
                                city: [{
                                    name: '鐜夋爲甯�',
                                    code: '01'
                                }, {
                                    name: '鏉傚鍘�',
                                    code: '22'
                                }, {
                                    name: '绉板鍘�',
                                    code: '23'
                                }, {
                                    name: '娌诲鍘�',
                                    code: '24'
                                }, {
                                    name: '鍥婅唉鍘�',
                                    code: '25'
                                }, {
                                    name: '鏇查夯鑾卞幙',
                                    code: '26'
                                }]
                            },
                            {
                                name: '娴疯タ钂欏彜鏃忚棌鏃忚嚜娌诲窞', // 5涓競杈栧尯銆佸幙
                                code: '28',
                                city: [{
                                    name: '鏍煎皵鏈ㄥ競',
                                    code: '01'
                                }, {
                                    name: '寰蜂护鍝堝競',
                                    code: '02'
                                }, {
                                    name: '涔屽叞鍘�',
                                    code: '21'
                                }, {
                                    name: '閮藉叞鍘�',
                                    code: '22'
                                }, {
                                    name: '澶╁郴鍘�',
                                    code: '23'
                                }]
                            }]
                    }
                },
                {
                    region: {
                        name: '瀹佸', // 5
                        code: '64',
                        state: [
                            {
                                name: '閾跺窛甯�', // 6涓競杈栧尯銆佸幙
                                code: '01',
                                city: [{
                                    name: '鍏村簡鍖�',
                                    code: '04'
                                }, {
                                    name: '瑗垮鍖�',
                                    code: '05'
                                }, {
                                    name: '閲戝嚖鍖�',
                                    code: '06'
                                }, {
                                    name: '姘稿畞鍘�',
                                    code: '21'
                                }, {
                                    name: '璐哄叞鍘�',
                                    code: '22'
                                }, {
                                    name: '鐏垫甯�',
                                    code: '81'
                                }]
                            },
                            {
                                name: '鐭冲槾灞卞競', // 3涓競杈栧尯銆佸幙
                                code: '02',
                                city: [{
                                    name: '澶ф鍙ｅ尯',
                                    code: '02'
                                }, {
                                    name: '鎯犲啘鍖�',
                                    code: '05'
                                }, {
                                    name: '骞崇綏鍘�',
                                    code: '21'
                                }]
                            },
                            {
                                name: '鍚村繝甯�', // 5涓競杈栧尯銆佸幙
                                code: '03',
                                city: [{
                                    name: '鍒╅€氬尯',
                                    code: '02'
                                }, {
                                    name: '绾㈠鍫″尯',
                                    code: '03'
                                }, {
                                    name: '鐩愭睜鍘�',
                                    code: '23'
                                }, {
                                    name: '鍚屽績鍘�',
                                    code: '24'
                                }, {
                                    name: '闈掗摐宄″競',
                                    code: '81'
                                }]
                            },
                            {
                                name: '鍥哄師甯�', // 5涓競杈栧尯銆佸幙
                                code: '04',
                                city: [{
                                    name: '鍘熷窞鍖�',
                                    code: '02'
                                }, {
                                    name: '瑗垮悏鍘�',
                                    code: '22'
                                }, {
                                    name: '闅嗗痉鍘�',
                                    code: '23'
                                }, {
                                    name: '娉炬簮鍘�',
                                    code: '24'
                                }, {
                                    name: '褰槼鍘�',
                                    code: '25'
                                }]
                            },
                            {
                                name: '涓崼甯�', // 3涓競杈栧尯銆佸幙
                                code: '05',
                                city: [{
                                    name: '娌欏潯澶村尯',
                                    code: '02'
                                }, {
                                    name: '涓畞鍘�',
                                    code: '21'
                                }, {
                                    name: '娴峰師鍘�',
                                    code: '22'
                                }]
                            }]
                    }
                },
                {
                    region: {
                        name: '鏂扮枂', // 15
                        code: '65',
                        state: [
                            {
                                name: '涔岄瞾鏈ㄩ綈甯�', // 8涓競杈栧尯銆佸幙
                                code: '01',
                                city: [{
                                    name: '澶╁北鍖�',
                                    code: '02'
                                }, {
                                    name: '娌欎緷宸村厠鍖�',
                                    code: '03'
                                }, {
                                    name: '鏂板競鍖�',
                                    code: '04'
                                }, {
                                    name: '姘寸（娌熷尯',
                                    code: '05'
                                }, {
                                    name: '澶村悲娌冲尯',
                                    code: '06'
                                }, {
                                    name: '杈惧潅鍩庡尯',
                                    code: '07'
                                }, {
                                    name: '绫充笢鍖�',
                                    code: '09'
                                }, {
                                    name: '涔岄瞾鏈ㄩ綈鍘�',
                                    code: '21'
                                }]
                            },
                            {
                                name: '鍏嬫媺鐜涗緷甯�', // 4涓競杈栧尯銆佸幙
                                code: '02',
                                city: [{
                                    name: '鐙北瀛愬尯',
                                    code: '02'
                                }, {
                                    name: '鍏嬫媺鐜涗緷鍖�',
                                    code: '03'
                                }, {
                                    name: '鐧界⒈婊╁尯',
                                    code: '04'
                                }, {
                                    name: '涔屽皵绂惧尯',
                                    code: '05'
                                }]
                            },
                            {
                                name: '鍚愰瞾鐣競', // 3涓競杈栧尯銆佸幙
                                code: '04',
                                city: [{
                                    name: '楂樻槍鍖�',
                                    code: '02'
                                }, {
                                    name: '閯杽鍘�',
                                    code: '22'
                                }, {
                                    name: '鎵樺厠閫婂幙',
                                    code: '23'
                                }]
                            },
                            {
                                name: '鍝堝瘑甯�', // 3涓競杈栧尯銆佸幙
                                code: '05',
                                city: [{
                                    name: '浼婂窞鍖�',
                                    code: '02'
                                }, {
                                    name: '宸撮噷鍧ゅ搱钀ㄥ厠鑷不鍘�',
                                    code: '21'
                                }, {
                                    name: '浼婂惥鍘�',
                                    code: '22'
                                }]
                            },
                            {
                                name: '鏄屽悏鍥炴棌鑷不宸�', // 7涓競杈栧尯銆佸幙
                                code: '23',
                                city: [{
                                    name: '鏄屽悏甯�',
                                    code: '01'
                                }, {
                                    name: '闃滃悍甯�',
                                    code: '02'
                                }, {
                                    name: '鍛煎浘澹佸幙',
                                    code: '23'
                                }, {
                                    name: '鐜涚撼鏂幙',
                                    code: '24'
                                }, {
                                    name: '濂囧彴鍘�',
                                    code: '25'
                                }, {
                                    name: '鍚夋湪钀ㄥ皵鍘�',
                                    code: '27'
                                }, {
                                    name: '鏈ㄥ瀿鍝堣惃鍏嬭嚜娌诲幙',
                                    code: '28'
                                }]
                            },
                            {
                                name: '鍗氬皵濉旀媺钂欏彜鑷不宸�', // 4涓競杈栧尯銆佸幙
                                code: '27',
                                city: [{
                                    name: '鍗氫箰甯�',
                                    code: '01'
                                }, {
                                    name: '闃挎媺灞卞彛甯�',
                                    code: '02'
                                }, {
                                    name: '绮炬渤鍘�',
                                    code: '22'
                                }, {
                                    name: '娓╂硥鍘�',
                                    code: '23'
                                }]
                            },
                            {
                                name: '宸撮煶閮钂欏彜鑷不宸�', // 9涓競杈栧尯銆佸幙
                                code: '28',
                                city: [{
                                    name: '搴撳皵鍕掑競',
                                    code: '01'
                                }, {
                                    name: '杞彴鍘�',
                                    code: '22'
                                }, {
                                    name: '灏夌妬鍘�',
                                    code: '23'
                                }, {
                                    name: '鑻ョ緦鍘�',
                                    code: '24'
                                }, {
                                    name: '涓旀湯鍘�',
                                    code: '25'
                                }, {
                                    name: '鐒夎€嗗洖鏃忚嚜娌诲幙',
                                    code: '26'
                                }, {
                                    name: '鍜岄潤鍘�',
                                    code: '27'
                                }, {
                                    name: '鍜岀鍘�',
                                    code: '28'
                                }, {
                                    name: '鍗氭箹鍘�',
                                    code: '29'
                                }]
                            },
                            {
                                name: '闃垮厠鑻忓湴鍖�', // 9涓競杈栧尯銆佸幙
                                code: '29',
                                city: [{
                                    name: '闃垮厠鑻忓競',
                                    code: '01'
                                }, {
                                    name: '娓╁鍘�',
                                    code: '22'
                                }, {
                                    name: '搴撹溅鍘�',
                                    code: '23'
                                }, {
                                    name: '娌欓泤鍘�',
                                    code: '24'
                                }, {
                                    name: '鏂板拰鍘�',
                                    code: '25'
                                }, {
                                    name: '鎷滃煄鍘�',
                                    code: '26'
                                }, {
                                    name: '涔屼粈鍘�',
                                    code: '27'
                                }, {
                                    name: '闃跨摝鎻愬幙',
                                    code: '28'
                                }, {
                                    name: '鏌潽鍘�',
                                    code: '29'
                                }]
                            },
                            {
                                name: '鍏嬪瓬鍕掕嫃鏌皵鍏嬪瓬鑷不宸�', // 4涓競杈栧尯銆佸幙
                                code: '30',
                                city: [{
                                    name: '闃垮浘浠€甯�',
                                    code: '01'
                                }, {
                                    name: '闃垮厠闄跺幙',
                                    code: '22'
                                }, {
                                    name: '闃垮悎濂囧幙',
                                    code: '23'
                                }, {
                                    name: '涔屾伆鍘�',
                                    code: '24'
                                }]
                            },
                            {
                                name: '鍠€浠€鍦板尯', // 12涓競杈栧尯銆佸幙
                                code: '31',
                                city: [{
                                    name: '鍠€浠€甯�',
                                    code: '01'
                                }, {
                                    name: '鐤忛檮鍘�',
                                    code: '21'
                                }, {
                                    name: '鐤忓嫆鍘�',
                                    code: '22'
                                }, {
                                    name: '鑻卞悏娌欏幙',
                                    code: '23'
                                }, {
                                    name: '娉芥櫘鍘�',
                                    code: '24'
                                }, {
                                    name: '鑾庤溅鍘�',
                                    code: '25'
                                }, {
                                    name: '鍙跺煄鍘�',
                                    code: '26'
                                }, {
                                    name: '楹︾洊鎻愬幙',
                                    code: '27'
                                }, {
                                    name: '宀虫櫘婀栧幙',
                                    code: '28'
                                }, {
                                    name: '浼藉笀鍘�',
                                    code: '29'
                                }, {
                                    name: '宸存鍘�',
                                    code: '30'
                                }, {
                                    name: '濉斾粈搴撳皵骞插鍚夊厠鑷不鍘�',
                                    code: '31'
                                }]
                            },
                            {
                                name: '鍜岀敯鍦板尯', // 8涓競杈栧尯銆佸幙
                                code: '32',
                                city: [{
                                    name: '鍜岀敯甯�',
                                    code: '01'
                                }, {
                                    name: '鍜岀敯鍘�',
                                    code: '21'
                                }, {
                                    name: '澧ㄧ帀鍘�',
                                    code: '22'
                                }, {
                                    name: '鐨北鍘�',
                                    code: '23'
                                }, {
                                    name: '娲涙郸鍘�',
                                    code: '24'
                                }, {
                                    name: '绛栧嫆鍘�',
                                    code: '25'
                                }, {
                                    name: '浜庣敯鍘�',
                                    code: '26'
                                }, {
                                    name: '姘戜赴鍘�',
                                    code: '27'
                                }]
                            },
                            {
                                name: '浼婄妬鍝堣惃鍏嬭嚜娌诲窞', // 11涓競杈栧尯銆佸幙
                                code: '40',
                                city: [{
                                    name: '浼婂畞甯�',
                                    code: '02'
                                }, {
                                    name: '濂庡悲甯�',
                                    code: '03'
                                }, {
                                    name: '闇嶅皵鏋滄柉甯�',
                                    code: '04'
                                }, {
                                    name: '浼婂畞鍘�',
                                    code: '21'
                                }, {
                                    name: '瀵熷竷鏌ュ皵閿′集鑷不鍘�',
                                    code: '22'
                                }, {
                                    name: '闇嶅煄鍘�',
                                    code: '23'
                                }, {
                                    name: '宸╃暀鍘�',
                                    code: '24'
                                }, {
                                    name: '鏂版簮鍘�',
                                    code: '25'
                                }, {
                                    name: '鏄嫃鍘�',
                                    code: '26'
                                }, {
                                    name: '鐗瑰厠鏂幙',
                                    code: '27'
                                }, {
                                    name: '灏煎嫆鍏嬪幙',
                                    code: '28'
                                }]
                            },
                            {
                                name: '濉斿煄鍦板尯', // 7涓競杈栧尯銆佸幙
                                code: '42',
                                city: [{
                                    name: '濉斿煄甯�',
                                    code: '01'
                                }, {
                                    name: '涔岃嫃甯�',
                                    code: '02'
                                }, {
                                    name: '棰濇晱鍘�',
                                    code: '21'
                                }, {
                                    name: '娌欐咕鍘�',
                                    code: '23'
                                }, {
                                    name: '鎵橀噷鍘�',
                                    code: '24'
                                }, {
                                    name: '瑁曟皯鍘�',
                                    code: '25'
                                }, {
                                    name: '鍜屽竷鍏嬭禌灏旇挋鍙よ嚜娌诲幙',
                                    code: '26'
                                }]
                            },
                            {
                                name: '闃垮嫆娉板湴鍖�', // 7涓競杈栧尯銆佸幙
                                code: '43',
                                city: [{
                                    name: '闃垮嫆娉板競',
                                    code: '01'
                                }, {
                                    name: '甯冨皵娲ュ幙',
                                    code: '21'
                                }, {
                                    name: '瀵岃暣鍘�',
                                    code: '22'
                                }, {
                                    name: '绂忔捣鍘�',
                                    code: '23'
                                }, {
                                    name: '鍝堝反娌冲幙',
                                    code: '24'
                                }, {
                                    name: '闈掓渤鍘�',
                                    code: '25'
                                }, {
                                    name: '鍚夋湪涔冨幙',
                                    code: '26'
                                }]
                            },
                            {
                                name: '鑷不鍖虹洿杈栧幙绾ц鏀垮尯鍒�', // 5
                                code: '90',
                                city: [
                                    {
                                        name: '鐭虫渤瀛愬競',
                                        code: '01'
                                    }, {
                                        name: '闃挎媺灏斿競',
                                        code: '02'
                                    }, {
                                        name: '鍥炬湪鑸掑厠甯�',
                                        code: '03'
                                    }, {
                                        name: '浜斿娓犲競',
                                        code: '04'
                                    }, {
                                        name: '閾侀棬鍏冲競',
                                        code: '04'
                                    }
                                ]
                            }, ]
                    }
                }, {
                    region: {
                        name: '鍙版咕',
                        code: '71',
                        state: [{
                            name:'鍙版咕', // 16涓競杈栧尯
                            code:'01',
                        }]
                    }
                }, {
                    region: {
                        name: '棣欐腐',
                        code: '81',
                        state: [{
                            name:'棣欐腐', // 16涓競杈栧尯
                            code:'01',
                        }]
                    }
                }, {
                    region: {
                        name: '婢抽棬',
                        code: '82',
                        state: [{
                            name:'婢抽棬', // 16涓競杈栧尯
                            code:'01',
                        }]
                    }
                }]
        }
    }
})
