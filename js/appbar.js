$(function(){

    $('.appBarBtn').on({ //햄버거 버튼 
        click: function(){ //클릭이벤트가 발생했을 때
            $('.bar').toggleClass('addAppbar');
            $('.Mmenu').toggleClass('open');
        }
    })


})