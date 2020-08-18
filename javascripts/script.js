$(document).ready(function(){
	$('.navLinks').click(function() {
		var section = $(this).attr("data-scroll");
		$('html, body').animate({
		scrollTop: $(section).offset().top
		}, 700);
	});
    $('#burger-container').on('click', function(){
        $(this).toggleClass('open');
		$('nav').slideToggle();
    });   


	$('form').on('submit', function(e){
		e.preventDefault();
		contactPost();

    
    
    
	});
});

   function contactPost()
   {
   	// return false;
   	// e.preventDefault();
   	// alert('hello');
   	 var data = $('form').serialize();
   	 // console.log(data);
   	 // alert('hello');
      $.ajax({

    	 // console.log(data);
    	url:'/contact',
    	dataType:'json',
    	data: data,
    	type: 'post',
    	success: function(data){
    		if(data.statusCode==200)
    		{
    			$('form')[0].reset();
    			grecaptcha.reset();
          $('#snackbar').toggleClass("show");
          setTimeout(function() {
        $('#snackbar').toggleClass("show");
    }, 3000);
    		}

    	}
    });

    // $("form").ajaxForm({url: '/contact', type: 'post'});
    // $.post('http://localhost:3000/contact', $('form').serialize());
    // console.log($('form').serialize());
	}



