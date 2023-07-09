$(function () {

    $('.appBarBtn').on({ //햄버거버튼에
        click: function () { //클릭이벤트가 발생했을때
            $('.bar').toggleClass('addAppBar');
            $('.Mmenu').toggleClass('open');
        }
    })
});