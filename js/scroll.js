$(function () {
    let title = $('.met-index > h1');
    let name = $('.met-news > h1');
    let des = $('.met-index > p');
    let lis = $('.met-news > ul >li');
    let one = $('.delay-one'),
        two = $('.delay-two'),
        three = $('.delay-three'),
        four = $('.delay-four');

    $(window).scroll(function () {
        let tops = $(window).scrollTop();
        let min =title.offset().top-700;
        let mins =name.offset().top-700;
        if(tops>min){
            title.addClass('hot');
            des.addClass('desHot');
        }
        if(tops>mins){
            name.addClass('hot');
            lis.addClass('move');
            one.addClass('delay-100');
            two.addClass('delay-200');
            three.addClass('delay-300');
            four.addClass('delay-400');
        }
    })

});