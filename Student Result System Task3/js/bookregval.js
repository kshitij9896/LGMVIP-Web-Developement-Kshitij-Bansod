


	$(document).ready(function(){

		$('#titleval').hide();
		$('#authorval').hide();
		$('#publcnvalue').hide();
		$('#booktypevalue').hide();
		$('#callnumvalue').hide();
		$('#issbnvalue').hide();
		$('#srcmsg').hide();
		$('#langvalue').hide();
		$('#pricevalue').hide();
		$('#discountvalue').hide();
		$('#billnovalue').hide();
		$('#remarkvalue').hide();
        
		var title_value = true;
		var author_value = true;
		var publcn_value = true;
		var booktype_value = true;
		var callnum_value = true;
		var issbn_value = true;
		var source_value = true;
		var lang_value = true;
		var price_value = true;
		var discount_value = true;
		var billno_value = true;
		var remark_value = true;
        


		$('#title').keyup(function()
		{
			titlename_check();
		});

		$('#author').keyup(function(){
			authorname_check();
		});

		$('#publcn').keyup(function(){
			publcn_check();
		});

		$('#booktype').keyup(function(){
			booktype_check();
		});

		$('#callnum').keyup(function(){
			callnum_check();
		});

		$('#isbn_issn').keyup(function(){
			isbn_check();
		});

		$('#src').keyup(function(){
			source_check();
		});

		$('#lang').keyup(function(){
			lang_check();
		});

		$('#price').keyup(function(){
			price_check();
		});

		$('#discount').keyup(function(){
			disc_check();
		});

		$('#billno').keyup(function(){
			billno_check();
		});

		$('#remark').keyup(function(){
			remark_check();
		});

        
    function titlename_check()
    {
    	var title_value = $('#title').val();
    
    	if(title_value.length == ''){
    		$('#titleval').show();
    		$('#titleval').html("<b>Please Enter Valid Book Name</b>..");
    		$('#titleval').focus();	
    		$('#titleval').css("color","red");
    		$('#titleval').toggle(4000);


    		title_value = false;
    		return false;	
    	}
    	else
    	{
    		$('#titleval').hide();
            
    	}
    }


    function authorname_check()
    {
    	var author_value = $('#author').val();

    	if(author_value.length == '')
    	{
    		$('#authorval').show();
    		$('#authorval').html("<b>Please Enter Valid Author Name..</b>");
    		$('#authorval').focus();
    		$('#authorval').css("color","red");
    		$('#authorval').toggle(4000);


    		author_value = false;
    		return false;
    	}
    	else
    	{
    		$('#authorval').hide();
    	}
    }

    function publcn_check()
    {
    	var publcn_value = $('#publcn').val();

    	if(publcn_value.length == '')
    	{
    		$('#publcnvalue').show();
    		$('#publcnvalue').html("<b>Please Enter Valid Publication Name..</b>");
    		$('#publcnvalue').focus();
    		$('#publcnvalue').css("color","red");
    		$('#publcnvalue').toggle(4000);

    	
    		publcn_value = false;
    		return false;
    	}
    	else
    		$('#publcnvalue').hide();

    }


    function booktype_check()
    {
    	var booktype_value = $('#booktype').val();

    	if(booktype_value.length == '')
    	{
    		$('#booktypevalue').show();
    		$('#booktypevalue').html("<b>Please Enter Valid Book Type..</b>");
    		$('#booktypevalue').focus();
    		$('#booktypevalue').css("color","red");
    		$('#booktypevalue').toggle(4000);


    		booktype_value = false;
    		return false;
    	}
    	else
    	{
    		$('#booktypevalue').hide();
    	}

    }


    function callnum_check()
    {
    	var callnum_value = $('#callnum').val();

    	if(callnum_value.length =='')
    	{
    		$('#callnumvalue').show();
    		$('#callnumvalue').html("<b>Please Enter Valid Callnum..</b>");
    		$('#callnumvalue').focus();
    		$('#callnumvalue').css("color","red");
    		$('#callnumvalue').toggle(4000);


    		callnum_value = false;
    		return false;
    	}
    	else
    		$('#callnumvalue').hide();
    }


    function isbn_check()
    {
    	var isbn_value = $('#isbn_issn').val();

    	if(isbn_value.length =='')
    	{
    		$('#issbnvalue').show();
    		$('#issbnvalue').html("<b>Please Enter Valid ISBN-ISSN value..</b>");
    		$('#isbnvalue').focus();
    		$('#issbnvalue').css("color","red");
    		$('#issbnvalue').toggle(4000);


    		isbn_value = false;
    		return false;
    	}
    	else
    		$('#issbnvalue').hide();
    }


   function source_check()
    {
    	var source_value = $('#src').val();

    	if(source_value.length =='')
    	{
    		$('#srcmsg').show();
    		$('#srcmsg').html("<b>Please Enter Valid Source..</b>");
    		$('#srcmsg').focus();
    		$('#srcmsg').css("color","red");
    		$('#srcmsg').toggle(4000);


    		source_value = false;
    		return false;
    	}
    	else
    		$('#srcmsg').hide();
    }

 
 

    function lang_check()
    {
    	var lang_value = $('#lang').val();

    	if(lang_value.length =='')
    	{
    		$('#langvalue').show();
    		$('#langvalue').html("<b>Please Enter Valid Language..</b>");
    		$('#langvalue').focus();
    		$('#langvalue').css("color","red");
    		$('#langvalue').toggle(4000);


    		lang_value = false;
    		return false;
    	}
    	else
    		$('#langvalue').hide();
    }

    function price_check()
    {
    	var price_value = $('#price').val();

    	if(price_value.length =='')
    	{
    		$('#pricevalue').show();
    		$('#pricevalue').html("<b>Please Enter Valid Price..</b>");
    		$('#pricevalue').focus();
    		$('#pricevalue').css("color","red");
    		$('#pricevalue').toggle(4000);


    		price_value = false;
    		return false;
    	}
    	else
    		$('#pricevalue').hide();
    }

    function disc_check()
    {
    	var discount_value = $('#discount').val();

    	if(discount_value.length =='')
    	{
    		$('#discountvalue').show();
    		$('#discountvalue').html("<b>Please Enter Valid Discount..</b>");
    		$('#discountvalue').focus();
    		$('#discountvalue').css("color","red");
  			$('#discountvalue').toggle(4000);


    		discount_value = false;
    		return false;
    	}
    	else
    		$('#discountvalue').hide();
    }


    function billno_check()
    {
    	var billno_value = $('#billno').val();

    	if(billno_value.length =='')
    	{
    		$('#billnovalue').show();
    		$('#billnovalue').html("<b>Please Enter Valid BillNo..</b>");
    		$('#billnovalue').focus();
    		$('#billnovalue').css("color","red");
    		$('#billnovalue').toggle(4000);


    		billno_value = false;
    		return false;
    	}
    	else
    		$('#billnovalue').hide();
    }



    function remark_check()
    {
    	var remark_value = $('#remark').val();

    	if(remark_value.length =='')
    	{
    		$('#remarkvalue').show();
    		$('#remarkvalue').html("<b>Please Enter Remark..</b>");
    		$('#remarkvalue').focus();
    		$('#remarkvalue').css("color","red");
    		$('#remarkvalue').toggle(4000);


    		remark_value = false;
    		return false;
    	}
    	else
    		$('#remarkvalue').hide();
    }


       	$('#submit').click(function(){

    		title_value = true;
			author_value = true;
			publcn_value = true;
			booktype_value = true;
			callnum_value = true;
			issbn_value = true;
			source_value = true;
			lang_value = true;
			price_value = true;
			discount_value = true;
			billno_value = true;
			remark_value = true;

			titlename_check();
			authorname_check();
			publcn_check();
			booktype_check();
			callnum_check();
			isbn_check();
			source_check();
			lang_check();
			price_check();
			disc_check();
			billno_check();
			remark_check();


if((title_value == true ) && (author_value == true) && (publcn_value == true) && (booktype_value == true)
&& (callnum_value == true) && (source_value == true) && (lang_value == true) && (price_value == true)
&& (discount_value == true) && (billno_value == true) && (remark_value == true)) 	
{
	return true;
}		
else
{
	return false;
}


    	});



	});
