$(document).ready(function(){
	$('#tabs div:first').show();
	$('#tabs ul li:first').addClass('active');
	$('#tabs ul.tab_type02 li a').click(function(){
		$('#tabs ul li a').removeClass('active');
		$(this).addClass('active');
		var currentTab = $(this).attr('href');
		$('#tabs div.tabCont').hide();
		$(currentTab).show();
		return false;
	});
});

$(document).ready(function(){
	var article = $('.faq>.faqBody>.article');
	article.addClass('hide02');
	article.find('.a').hide();
	$('.faq>.faqBody>.article>.q>a').click(function(){
		$('.faq>.faqBody>.article>.q>a').removeClass('active');
		var myArticle = $(this).parents('.article:first');
		if(myArticle.hasClass('hide02')){
			article.addClass('hide02').removeClass('show');
			article.find('.a').slideUp(100);
			myArticle.removeClass('hide02').addClass('show');
			myArticle.find('.a').slideDown(100);
			$(this).addClass('active');
		} else {
			myArticle.removeClass('show').addClass('hide02');
			myArticle.find('.a').slideUp(100);
			$(this).removeClass('active');
		}
		return false;
	});
});

jQuery(document).ready(function(){
	//초기화 실행
	gnbInit(gnbDep1);
	//마우스커서와 포커스가 메뉴 영역을 벗어났을때 GNB 초기화
	$("#utilMenu, #container,#header_inner h1, #header_bann, #footer").mouseover(function(){
		gnbInit(gnbDep1);
		
	}).focusin(function(){
		$(this).mouseover();
	});

	//GNB mouseover, onfocus 이벤트 처리
	$("#gnb > li > a").mouseover(function(){
		var cnt = gnbDep1;

		for(var i=0; i<$("#gnb > li").size(); i++){
			if($("#gnb > li:eq("+ i +")")[0] == $(this).parent()[0]){
				cnt = i+1;
			}
		}
		if(cnt == gnbDep1){
			gnbInit(cnt);
		} else {
			gnbInit(cnt, "");
		}
	}).focusin(function(){
		$(this).mouseover();
	});

	//선택한 SNB를 active(활성화) 시킨다.
	function gnbInit(dep1){
		$("#gnb > li > ul").hide();
		$("#gnb > li").removeClass('snbOn');
		$("#gnb > li").removeClass("active");
		$("#gnb > li:eq("+(dep1-1)+")").addClass("active");
		$("#gnb > li > ul > li").removeClass("active");
	}
	$(document).ready(function(){
		$("#gnb li li a img").css({'margin-top':'0'})
		//현제 선택한 1dep의 서브만 활성화 시킨다.
		$("#gnb > li a").mouseover(function() {
			$(this).parent('li').find('ul').show()
		});
		//1뎁스에 마우스올렸을경우 2뎁스 활성화
		$("#gnb > li a").mouseover(function() {
			$(this).parent().addClass('snbOn');
			$(this).parent().find('ul').show();
		});
		//2뎁스 메뉴
		$("#gnb li li").hover(function() {
			$(this).find('img').css({'margin-top':'-13px'});
		}, function() {
			$(this).find('img').css({'margin-top':'0'});
		});
	})
});

$(document).ready(function(){
	if (gnbDep1==4) {
		$('#bannWrap .bann:eq(0)').insertAfter($('#bannWrap .bann:eq(1)'));
	}
	$('#bannWrap .bann:eq(0)').addClass('on');
	$('#rarrow, #larrow').click(function() {
		var thisNo=$('#bannWrap .bann').index($('#bannWrap .on'));
		$('#bannWrap .on').removeClass('on');
		if (thisNo==0) {
			$('#bannWrap .bann:eq(1)').addClass('on');
		} else {
			$('#bannWrap .bann:eq(0)').addClass('on');
		}
		return false;
	});
	$('#bannWrap .bann a').focusin(function() {
		$('#bannWrap .on').removeClass('on');
		$(this).parent().addClass('on');
	});
});