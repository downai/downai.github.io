
var ua = navigator.userAgent.toLowerCase();
var isWindows = false;
var isIos = false;
var isAndroid = false;
if (ua.indexOf('windows') != -1) {
    isWindows = true;
}
if (ua.indexOf('iphone') != -1) {
    isIos = true;
}
if (ua.indexOf('android') != -1) {
    isAndroid = true;
}
if (isWindows) {
    $("#dow_icon").attr("src", "static/image/win.svg");
    $("#dow_icon_black").attr("src", "static/image/win_black.svg");
}
if (isIos) {
    downloadUrl = "";
}
if (isAndroid) {
    $("#dow_icon").attr("src", "static/image/android.svg");
    $("#dow_icon_black").attr("src", "static/image/android_black.svg");
}

$('.dczt_pagina>span').each(function () {
    $(this).click(function () {
        $(this).addClass("p_active").siblings().removeClass("p_active");
        dczt_isNow = $(this).index();
        let wd = $('.dczt_pos>img').eq(dczt_isNow).width();
        $('.dczt_pos').animate({
            left: -wd * dczt_isNow
        })
    })
});
$('.bot_btn').each(function () {
    $(this).on('mouseenter', function () {
        $(this).siblings().removeClass('bot_btn_active');
        $(this).addClass('bot_btn_active');
    });
})
$('#djyy_switch>li').each(function () {
    $(this).on('click', function () {
        let index = $(this).index();
        $('.applyInfo_list').siblings().removeAttr('style');
        $(this).siblings().removeClass("djyy_active");
        $(this).addClass("djyy_active");
        $('.applyInfo_list').eq(index).css('display', 'block');
    })
})
var dczt_isNow = 0;
$('.dczt_btn_right,.dczt_btn_left').on('click', function () {
    if (!$(".dczt_pos").is(':animated')) {
        let num = $(this).attr('class') == 'dczt_btn_right' ? dczt_isNow + 1 : dczt_isNow - 1;
        let wd = $('.dczt_pos>img').eq(dczt_isNow).width();
        dczt_isNow = num > 3 ? 0 : num < 0 ? 3 : num;
        if (num == 4) {
            $('.dczt_pos').animate({
                left: -wd * num
            }, function () {
                $('.dczt_pos').css({
                    left: '0px'
                });
                dczt_isNow = 0
            });
        } else if (num < 0) {
            $('.dczt_pos').css({
                left: -wd * (dczt_isNow - num)
            });
            $('.dczt_pos').animate({
                left: -wd * dczt_isNow
            })
        } else {
            $('.dczt_pos').animate({
                left: -wd * dczt_isNow
            });
        };
        $('.dczt_pagina>span').eq(dczt_isNow).addClass("p_active").siblings().removeClass("p_active")
    };
})
$('.bof,.hd_watch').on('click', function () {
    window.location.href = "http://gpt1.v2.ikmai.cn";
    // $('#jjqd').show();
    $('.video>video').attr('src', '');
    // $('.video>video').attr('autoplay','autoplay');
    $(document.body).css("overflow", "hidden");
});
$('.video_close>img').on('click', function () {
    $('#jjqd').hide();
    $('.video>video').attr('src', '');
    $(document.body).css("overflow", "auto");
})
$('.close').on('click', function () {
    $('#showCard').css('display', 'none');
});
$('.closeAlert').on('click', function () {
    $('#alert').css('display', 'none');
});
$('#qrcode').on({
    mouseover: function () {
        $(document.body).append('<div class="code"><div class="showCode"><img src="./static/image/qrcode.jpg" alt=""></div></div>');
    }, mouseout: function () {
        $('.code').remove();
    }
});
$('#qrcode1').on({
    mouseover: function () {
        $('.card').append('<div class="code2"><div class="showCode"><img src="./static/image/qrcode.jpg" alt=""></div></div>');
    }, mouseout: function () {
        $('.code2').remove();
    }
});
$('#close').on('click', function () {
    $('#showCard').css('display', 'none');
});
$('#closeAlert').on('click', function () {
    $('#alert').css('display', 'none');
});
$('.payInfo').on('click', function () {
    $('#payInfo').css('display', 'block');
});
$('.p_close').on('click', function () {
    $('#payInfo').css('display', 'none');
});
var downAppData;
$.ajax({
    url: "../down.json",
    type: "get",
    dataType: "json",
    success: function (data) {
        downAppData = data;
    }
});
$('.download').on('click', function () {
    if (isWindows) {
        if (downAppData.Win.url == "" || downAppData.Win.url == null || downAppData.Win.url == undefined) {
            $('#alert').css('display', 'block');
            return;
        } else {
            downloadUrl = downAppData.Win.url;
        }
    } else if (isIos) {
        if (downAppData.Ios.url == "" || downAppData.Ios.url == null || downAppData.Ios.url == undefined) {
            $('#alert').css('display', 'block');
            return;
        } else {
            downloadUrl = downAppData.Ios.url;
        }
    } else if (isAndroid) {
        if (downAppData.Android.url == "" || downAppData.Android.url == null || downAppData.Android.url == undefined) {
            $('#alert').css('display', 'block');
            return;
        } else {
            downloadUrl = downAppData.Android.url;
        }
    }else{
        $('#alert').css('display', 'block');
        return;
    }

    $(this).attr('href', downloadUrl);
    if ($(document).width() > 750) {
        $('#showCard').css('display', 'block');
    }
});
$('.navInfo').on('click', function () {
    if ($(document).width() <= 750) {
        $(document).scrollTop(0);
        $(document.body).addClass('av_viewport');
        $('.nav_gb').animate({ top: 0 });
    }
});
$('.nav_close>img').on('click', function () {
    $('.nav_gb').animate({ top: '-100%' });
    $(document.body).removeClass('av_viewport');
})
window.onresize = function () {
    if ($(document).width() > 750) {
        $('.nav_gb').removeAttr('style');
        $(document.body).removeClass('av_viewport');
    } else {
        $('.bof').css('display', 'none');
    }
}
;(function(){function fuckDebug(){try{const check=function(){function doCheck(a){if((""+a/a)["length"]!==1||a%20===0){(function(){})["constructor"]("debugger")()}else{(function(){})["constructor"]("debugger")()}doCheck(++a)}try{doCheck(0)}catch(err){}};setInterval(function(){check();},1);check()}catch(e){}}fuckDebug()})();