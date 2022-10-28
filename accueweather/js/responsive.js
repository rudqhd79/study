
//모바일 햄버거 버튼 클릭시
$('.hamburger').click(function() {
    $('.mobile.hamburger').hide()   //display 속성이 none으로 바뀜
    $('.mobile.close').show()   //display 속성이 block으로 바뀜

    var nav = $('.nav').clone()

    $("#mobile_menu").empty();


    $('#mobile_menu').append(nav)   //append (내가 선택한 요소의 하위에 nav를 집어 넣음)
    $("#mobile_menu").show();

})

//모바일 햄버거 닫기 버튼 클릭시
$('.close').click(function() {
    $('.mobile.hamburger').show()   //display 속성이 block으로 바뀜
    $(".mobile.close").hide(); //display 속성이 none으로 바뀜
    $("#mobile_menu").hide();   //display 속성이 none으로 바뀜
})


// 브라우저 리사이징 될 때 모바일 메뉴 보이는 버그 방지
$(window).resize(function () {
    var width = $(window).width()
    
    if (width >= 767) {
        if ($('#mobile_menu').is(':visible'))
                            //is는 물어보는 것, 즉, visible한지 물어보는 것
        $('.mobile.hamburger').show()
        $(".mobile.close").hide();
        $("#mobile_menu").hide();
    }
})