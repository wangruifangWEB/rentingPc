$(function(){
//		$('.float').hide();
		$('.x').click(function(){
			$('.float').addClass('active');
			$('.float2').addClass('active')
		})
		$('.float2').click(function(){
			$('.float').removeClass('active');
			$('.float2').removeClass('active')
		})
	})