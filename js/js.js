jQuery(document).ready(function($){
    var element = $(".langs button");
    element.click(function() {
        element.css("background-color", "#2b2a29").removeClass("cat");
        $(this).css("background-color", "#c31d42").addClass("cat");
    })
    var newsbutton =$(".sign");
  // var newsblock =$(".sign-for-news form");

   /* newsbutton.click(function(){
        newsblock.css("display","block");
        newsbutton.click(function(){
            newsblock.css("display","none");
        })
    })*/

    newsbutton.click(function(){
        $(this).addClass("active").next().toggle();
    })
});