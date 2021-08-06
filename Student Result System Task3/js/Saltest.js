
 $(document).ready(function(){

	$('#namevalue').hide();
	$('#degvalue').hide();
	$('#basicvalue').hide();
	$('#grdpyvalue').hide();
	$('#davalue').hide();
	$('#hravalue').hide();
	$('#ccavalue').hide();
	$('#trallowvalue').hide();
	$('#splallowvalue').hide();
	$('#othervalue').hide();
	$('#provfundvalue').hide();
	$('#provtaxvalue').hide();
	$('#incometaxvalue').hide();
	$('#lipvalue').hide();
	$('#kitsocvalue').hide();
	$('#revstampvalue').hide();

	var name_value = true;
	var deg_value = true;
	var basic_value = true;
	var grdpy_value = true;
	var da_value = true;
	var hra_value = true;
	var cca_value = true;
	var trallow_value = true;
	var splallow_value = true;
	var otherallow_value = true;
	var provfund_value = true;
	var provtax_value = true;
	var incometax_value = true;
	var tax_value = true;
	var kitsoc_value = true;
	var revstamp_value = true;

	$('#name').keyup(function(){
		name_check();
	});

	$('#deg').keyup(function(){
		deg_check();
	});
	$('#basic').keyup(function(){
		basic_check();
	});
	$('#grdpy').keyup(function(){
		grdpy_check();
	});

	$('#da').keyup(function(){
		da_check();
	});
	$('#hra').keyup(function(){
		hra_check();
	});
	$('#cca').keyup(function(){
		cca_check();
	});
	$('#trallow').keyup(function(){
		trallow_check();
	});
	$('#splallow').keyup(function(){
		splallow_check();
	});
	$('#otherallow').keyup(function(){
		otherallow_check();
	});
	$('#provfund').keyup(function(){
		provfund_check();
	});
	$('#provtax').keyup(function(){
		provtax_check();
	});
	$('#tax').keyup(function(){
		tax_check();
	});
	$('#lip').keyup(function(){
		lip_check();
	});

	$('#kitsoc').keyup(function(){
		kitsoc_check();
	});
	$('#revstamp').keyup(function(){
		revstamp_check();
	});

	function name_check()
	{
		var name_value = $('#name').val();

		if(name_value.length =='')
		{
			$('#namevalue').show();
			$('#namevalue').html("Please Enter Valid Name...");
			$('#namevalue').focus();
			$('#namevalue').css("color","red");
			$('#namevalue').toggle(4000);

			name_value = false;
			return false;
		}
		else
		{
			$('#namevalue').hide();
			

		}
	}

	function deg_check()
	{
		var deg_value = $('#deg').val();

		if(deg_value.length == '')
		{
			$('#degvalue').show();
			$('#degvalue').html("Please Enter Valid Degination..");
			$('#degvalue').focus();
			$('#degvalue').css("color","red");
			$('#degvalue').toggle(4000);

			deg_value = false;
			return false;
		}
		else{
			$('#degvalue').hide();
			

	}
		}

	function basic_check(){

		var basic_value = $('#basic').val();

		if(basic_value.length == '')
		{
			$('#basicvalue').show();
			$('#basicvalue').html("Please Enter Valid Basic Value..");
			$('#basicvalue').focus();
			$('#basicvalue').css("color","red");
			$('#basicvalue').toggle(4000);

			basic_value = false;
			return false;
		}
		else
		{
			$('#basicvalue').hide();
		}
	}	

		function grdpy_check()
	{
		var grdpy_value = $('#grdpy').val();

		if(grdpy_value.length == '')
		{
			$('#grdpyvalue').show();
			$('#grdpyvalue').html("Please Enter Valid GRDPY Value..");
			$('#grdpyvalue').focus();
			$('#grdpyvalue').css("color","red");
			$('#grdpyvalue').toggle(4000);

			grdpy_value = false;
			return false;
		}
		else{
			$('#grdpyvalue').hide();
			

	}
		}


		function da_check()
	{
		var da_value = $('#da').val();

		if(da_value.length == '')
		{
			$('#davalue').show();
			$('#davalue').html("Please Enter Valid DA Value..");
			$('#davalue').focus();
			$('#davalue').css("color","red");
			$('#davalue').toggle(4000);

			da_value = false;
			return false;
		}
		else{
			$('#davalue').hide();
			

	}
		}



		function hra_check()
	{
		var hra_value = $('#hra').val();

		if(hra_value.length == '')
		{
			$('#hravalue').show();
			$('#hravalue').html("Please Enter Valid HRA Value..");
			$('#hravalue').focus();
			$('#hravalue').css("color","red");
			$('#hravalue').toggle(4000);

			hra_value = false;
			return false;
		}
		else{
			$('#hravalue').hide();
			

	}
		}



		function cca_check()
	{
		var cca_value = $('#cca').val();

		if(cca_value.length == '')
		{
			$('#ccavalue').show();
			$('#ccavalue').html("Please Enter Valid CCA Value..");
			$('#ccavalue').focus();
			$('#ccavalue').css("color","red");
			$('#ccavalue').toggle(4000);

			cca_value = false;
			return false;
		}
		else{
			$('#ccavalue').hide();
			

	}
		}



		function trallow_check()
	{
		var trallow_value = $('#trallow').val();

		if(trallow_value.length == '')
		{
			$('#trallowvalue').show();
			$('#trallowvalue').html("Please Enter Valid TrallowAllow Value..");
			$('#trallowvalue').focus();
			$('#trallowvalue').css("color","red");
			$('#trallowvalue').toggle(4000);

			trallow_value = false;
			return false;
		}
		else{
			$('#trallowvalue').hide();
			

	}
		}


		function splallow_check()
	{
		var splallow_value = $('#splallow').val();

		if(splallow_value.length == '')
		{
			$('#splallowvalue').show();
			$('#splallowvalue').html("Please Enter Valid SpecialAllow Value..");
			$('#splallowvalue').focus();
			$('#splallowvalue').css("color","red");
			$('#splallowvalue').toggle(4000);

			splallow_value = false;
			return false;
		}
		else{
			$('#splallowvalue').hide();
			

	}
		}


		function otherallow_check()
	{
		var otherallow_value = $('#otherallow').val();

		if(otherallow_value.length == '')
		{
			$('#otherallowvalue').show();
			$('#otherallowvalue').html("Please Enter Valid OtherAllow Value..");
			$('#otherallowvalue').focus();
			$('#otherallowvalue').css("color","red");
			$('#otherallowvalue').toggle(4000);

			otherallow_value = false;
			return false;
		}
		else{
			$('#otherallowvalue').hide();
			

	}
		}



		function provfund_check()
	{
		var provfund_value = $('#provfund').val();

		if(provfund_value.length == '')
		{
			$('#provfundvalue').show();
			$('#provfundvalue').html("Please Enter Valid ProvFund Value..");
			$('#provfundvalue').focus();
			$('#provfundvalue').css("color","red");
			$('#provfundvalue').toggle(4000);

			provfund_value = false;
			return false;
		}
		else{
			$('#provfundvalue').hide();
			

	}
		}


		function provtax_check()
	{
		var provtax_value = $('#provtax').val();

		if(provtax_value.length == '')
		{
			$('#provtaxvalue').show();
			$('#provtaxvalue').html("Please Enter Valid ProvTax Value..");
			$('#provtaxvalue').focus();
			$('#provtaxvalue').css("color","red");
			$('#provtaxvalue').toggle(4000);

			provtax_value = false;
			return false;
		}
		else{
			$('#provtaxvalue').hide();
			

	}
		}


		function tax_check()
	{
		var tax_value = $('#tax').val();

		if(tax_value.length == '')
		{
			$('#incometaxvalue').show();
			$('#incometaxvalue').html("Please Enter Valid Tax Value..");
			$('#incometaxvalue').focus();
			$('#incometaxvalue').css("color","red");
			$('#incometaxvalue').toggle(4000);

			tax_value = false;
			return false;
		}
		else{
			$('#incometaxvalue').hide();
			

	}
		}


		function lip_check()
	{
		var lip_value = $('#lip').val();

		if(lip_value.length == '')
		{
			$('#lipvalue').show();
			$('#lipvalue').html("Please Enter Valid Lip Value..");
			$('#lipvalue').focus();
			$('#lipvalue').css("color","red");
			$('#lipvalue').toggle(4000);

			lip_value = false;
			return false;
		}
		else{
			$('#lipvalue').hide();
			

	}
		}



		function kitsoc_check()
	{
		var kitsoc_value = $('#kitsoc').val();

		if(kitsoc_value.length == '')
		{
			$('#kitsocvalue').show();
			$('#kitsocvalue').html("Please Enter Valid KitSoc Value..");
			$('#kitsocvalue').focus();
			$('#kitsocvalue').css("color","red");
			$('#kitsocvalue').toggle(4000);

			kitsoc_value = false;
			return false;
		}
		else{
			$('#kitsocvalue').hide();
			

	}
		}


		function revstamp_check()
	{
		var revstamp_value = $('#revstamp').val();

		if(revstamp_value.length == '')
		{
			$('#revstampvalue').show();
			$('#revstampvalue').html("Please Enter Valid Revstamp Value..");
			$('#revstampvalue').focus();
			$('#revstampvalue').css("color","red");
			$('#revstampvalue').toggle(4000);

			revstamp_value = false;
			return false;
		}
		else{
			$('#revstampvalue').hide();
			

	}
		}




$('#submit').click(function(){

	var name_value = true;
	var deg_value = true;
	var basic_value = true;
	var grdpy_value = true;
	var da_value = true;
	var hra_value = true;
	var cca_value = true;
	var trallow_value = true;
	var splallow_value = true;
	var otherallow_value = true;
	var provfund_value = true;
	var provtax_value = true;
	var incometax_value = true;
	var kitsoc_value = true;
	var revstamp_value = true;

			name_check();
			deg_check();
			basic_check();
			grdpy_check();
			da_check();
			hra_check();
			cca_check();
			trallow_check();
			splallow_check();
			otherallow_check();
			provfund_check();
			provtax_check();
			tax_check();
			lip_check();
			kitsoc_check();
			revstamp_check();


if((name_value == true ) && (deg_value == true) && (basic_value == true) && (grdpy_value == true)
&& (da_value == true) && (hra_value == true) && (cca_value == true) && (trallow_value == true)
&& (splallow_value == true) && (otherallow_value == true) && (provfund_value == true) && (provtax_value == true) 
&& (tax_value == true) && (lip_value == true) && (kitsoc_value == true) && (revstamp_value == true)) 	
{
	return true;
}		
else
{
	return false;
}


    	});


// function checkform()
// {
// 	var f = document.forms["Empreg"].elements;
// 	var cansubmit = false;
// 	for(var i=0; i < f.length; i++)
// 	 {
// 		if(f[i].value.length == 0 ) cansubmit =  false;
// 	 }
// 	if(cansubmit){
// 		document.getElementById('submit').disabled = false;
// 		}
// 	}


});