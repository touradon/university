//header_home
function autoheader(){
	if($(".header").length>0 && $(".header2").length>0 && $(".home").length==0){
		if($(window).scrollTop()>$(".banner_frame").height()-$(".header").height()){
			//$(".header").removeClass("dark").addClass("light");
			$(".header").removeClass("showdiv");
			$(".header2").addClass("showdiv");
		}
		else{
			//$(".header").addClass("dark").removeClass("light");
			$(".header2").removeClass("showdiv");
			$(".header").addClass("showdiv");
		}
	}
}

$(window).scroll(function(){
	autoheader();	
})
autoheader();