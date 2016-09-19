$(function(){
    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#000'],
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        menu: '#menu',
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('.section2').find('p').delay(500).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
            }
            if(index == 3){
                $('.section3').find('p').delay(500).animate({
                    bottom: '0'
                }, 1500, 'easeOutExpo');
            }
            if(index == 4){
                $('.section4').find('p').fadeIn(2000);
            }
        },
        onLeave: function(index, direction){
            if(index == '2'){
                $('.section2').find('p').delay(500).animate({
                    left: '-120%'
                }, 1500, 'easeOutExpo');
            }
            if(index == '3'){
                $('.section3').find('p').delay(500).animate({
                    bottom: '-120%'
                }, 1500, 'easeOutExpo');
            }
            if(index == '4'){
                $('.section4').find('p').fadeOut(2000);
            }
        }
    });
});