$(".images").on({
	
	mouseover:function(){
		
	
		$(this).animate({
        height: '370px',
        width: '320px'
    }, 200);
		
	},
	
	mouseout:function(){
		
		$(this).animate({
        height: '350px',
        width: '300px'
    }, 200);
		
	},
});





