$(document).ready(function(){

    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){

        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    $('.list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let src = $(this).attr('data-src');
        $('.menu .row .image img').attr('src',src);
    });
    
    $("#orderNow").click(function(){
        $('#orderNow').addClass('oderNow').value('Ordered Successfuly ✓');
        window.open('./payment.html');
    });
    
    $('#1stProduct').click(function(){
        $('#1stProduct').html('Added To Cart ✓').addClass('addToCart');
    });

    $('#2ndProduct').click(function(){
        $('#2ndProduct').html('Added To Cart ✓').addClass('addToCart');
    });

    $('#3rdProduct').click(function(){
        $('#3rdProduct').html('Added To Cart ✓').addClass('addToCart');
        
    });
    $('#MenuCart').click(function(){
        $('#MenuCart').html('Added To Cart ✓').addClass('addToCart');
        window.open("./cart.html");
        
    });

    $('.add').click(function () {
		if ($(this).prev().val() < 3) {
    	$(this).prev().val(+$(this).prev().val() + 1);
		}
    });
    $('.sub').click(function () {
		if ($(this).next().val() > 1) {
    	if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
		}
    });


    

});

// function validateForm() {
//     var name = document.forms["orderForm"]["name"].value;
//     if (name == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }
