$(document).ready(function(){
  $(".scroll").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();


      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } // End if
  });
});

$(".horia").on('mouseover',function(){
    
    $(this).animate({opacity:0.5});
    $(this).attr("id","scripttt");
});

$(".horia").on('mouseout',function(){
    
    $(this).animate({opacity:1});
    $(this).removeAttr("id","scripttt");
});


var karim = $("#price").attr("value");

$("#cart").on({

            click:function(){
                
            yolo = (karim* $("#quant").val())/100;
                
      $.ajax({
       
       type:'GET',
       url:'review.xml',
       type:'xml',
       success:function(response){
            $(response).find("order").each(function(){
                                           
            $("#lazzy").html($(this).find("thanks").text() + yolo + "$");
                
 } )} })},
   
});

$.ajax({
	
	type:'GET',
	url:'about.json',
	dataType:'json',
	success: function(response){
		
		$.each(response, function(index,data){
			$.each(data, function(index,info){
				$.each(info, function(index,about){
					
						$("#aboutUs").html(about.aboutus)
					
				})
				
			})
			
		})
		
	}
	
})