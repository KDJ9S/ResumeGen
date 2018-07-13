/**
 *
 * 鍏ㄥ眬閫氱敤js
 * common.info:瀛樻斁鍏ㄥ眬閫氱敤灞炴€�
 * 鐩綍鐨勫搴攋s浜や簰锛� 璇峰啓鍦ㄥ搴旂殑cvresume.main.xxx_event鏂规硶閲屽幓锛屽瑕佹柊澧�,鍛藉悕瑙勫垯锛歝vresume.main.鐩綍鍚峗event
 *
 * */

var cvCommon = cvCommon || {};
cvCommon.main = cvCommon.main || {};

//--鍏ㄥ眬鍙傛暟
cvCommon.info = {

}

cvCommon.main = {
    getUrlParamsValue:function(name){//---鑾峰彇url涓寚瀹氬弬鏁扮殑鍊�
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) return (r[2]); return null;
    },
    sideBtn:function(){    //---渚ц竟鏍忔寜閽�
        var sideBtn = '<div class="side-box">' +
            '<div class="side-case" onclick="window.open(\'http://www.capabcv.com/resumecase\')">' +
            '<p class="side-btn"></p>' +
            '<div class="side-cont">绠€鍘嗚寖鏂�</div>' +
            '</div>' +
            '<div class="side-wechat">' +
            '<p class="side-btn"></p>' +
            '<div class="side-cont">' +
            '<a href="http://www.capabcv.com/payit/payresumedown.aspx" class="side-member"></a>' +
            '<div class="wechat-box"><img src="http://www.capabcv.com/Images/ResumeV2/editPage/qrcode_lingxiancap.jpg" alt=""><p>鎵爜鍏虫敞寰俊鍏紬鍙�</p></div>' +
            '<div class="side-kefu">' +
            '<span>瀹㈡湇閭锛歭ingxiankf@capablist.com</span>' +
            '<span>鏈嶅姟鏃堕棿锛氬懆涓€鑷冲懆浜� 9:00 - 17:30</span>' +
            '<span>濡傛湁鐤戦棶锛岃鍙嶉鍒伴偖绠憋紝鎴戜滑浼氬強鏃跺洖澶�</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="side-help" onclick="window.open(\'http://www.capabcv.com/ResumeV2/help.html\')">' +
            '<p class="side-btn"></p>' +
            '<div class="side-cont">甯姪涓績</div>' +
            '</div>' +
            '<div class="side-feedback" onclick="window.open(\'http://www.capabcv.com/ResumeV2/feedback.html\')">' +
            ' <p class="side-btn"></p>' +
            '<div class="side-cont">闂鍙嶉</div>' +
            '</div>' +
            '<div class="side-gotop">' +
            '<p class="side-btn"></p>' +
            '<div class="side-cont">鍥炲埌椤堕儴</div>' +
            '</div>' +
            '</div>';
        $("body").append(sideBtn);
        $(".side-gotop").click(function(){$('html, body').animate({scrollTop:0}, 500);});
        var min_height = 200;
        $(window).scroll(function(){
            var s = $(window).scrollTop();
            if(s > min_height){
                $(".side-gotop").fadeIn(100);
            }else{
                $(".side-gotop").fadeOut(100);
            };
        });
    },
}
