var imgNo=0;
var beforeNo=0;
var timer;
var dur=1600;
var play=1;

function firstSlide(){
    $('#mainContent').css('overflow','hidden');
    $('mainImgWrap .section .mainImg').css({'left':'0','display':'none'});
    $('mainImgWrap .section:eq(0)').addClass('active');

    $('.active .mainImgBtn img').attr('src',$('.active .mainImgBtn img').attr('src').replace('_off','_on'));
    $('#mainImgWrap .active').css("width","60px");
    $('mainImgWrap .section:eq(0) .mainImg').fadeIn(dur, function(){
        timer=setTimeout('slide(1)',3000);
    });
}

function slide(a){
    clearTimeout(timer);
    $('#mainImgWrap .section .mainImg').stop();
	$('#mainImgWrap .section .mainImg').removeAttr("style");
	$('#mainImgWrap .section .mainImg').css({'left':'0','display':'none'});

	$('#mainImgWrap .section:eq('+beforeNo+') .mainImg').css('display','block').fadeOut(dur);

	$('.active').removeAttr("style");
	$('.active .mainImgBtn img').attr('src',$('.active .mainImgBtn img').attr('src').replace('_on','_off')); 
	$('#mainImgWrap .section').removeClass('active');
	$('#mainImgWrap .section:eq('+a+')').addClass('active');
	$('.active .mainImgBtn img').attr('src',$('.active .mainImgBtn img').attr('src').replace('_off','_on')); 
	$('#mainImgWrap .active').css("width","60px");

	$('#mainImgWrap .section:eq('+a+') .mainImg').fadeIn(dur, function() {
		beforeNo=a;
		if (a!=5) {
			a++;
		} else {
			a=0;
		}
		if (play!=0) {
			timer=setTimeout('slide('+a+')', 3000);// 메인 이미지 스크롤 속도
		}
	});
}

function btn() {
	/* 메인 버튼 */
	$('#mainImgWrap .mainImgBtn').bind('click',function() {
		if ($(this).parent().hasClass('stop')) {
			play=0;
			clearTimeout(timer);
		} else if ($(this).parent().hasClass('play')) {
			if (play==0) {
				var no=beforeNo;
				if (no!=5) {
					no++;
				} else {
					no=0;
				}
				play=1;
				timer=setTimeout('slide('+no+')', 3000);// 메인 이미지 스크롤 속도
			}
		} else if (!$(this).parent().hasClass('active')) {
			clearTimeout(timer);
			imgNo=$('#mainImgWrap .section .mainImgBtn').index($(this));
			slide(imgNo);
		}
		return false;
    });
}
