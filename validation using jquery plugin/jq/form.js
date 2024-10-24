$(function(){
    $('form').validate(
    {
	
	rules: {	
	    name : {
		required : true,
	  	minlength : 3
	    },
	    num : {
		required : true,
		minlength : 10,
		maxlength : 10
	    },
	    email : {
		minlength : 5,
		email : true,
	        required : true
	    },
	    dob : {
		required : true
	    },
	    age : {
		required : true,
	 	range : [1,100]
	    },
	    gender : {
		required : true
	    },
	    pass : {
		required : true
	    },
	    cpass : {
		equalTo : "#pass",
		required : true
	    },
	}, 
	
	messages: {
	    name : {
		required : "Please enter your name",
		minlength : "Minimum length of your name should be 3"
	    },
	    num : {
		required : "Please enter your mobile number",
		maxlength : "Mobile number should contain 10 digits"
	    },
	    email : {
		required : "Please enter your email-ID"
	    },
	    dob : {
		
	    },
	    age : {
		range : "Your age should be within 100"
	    },
	    gender : {},
	    pass : {},
	    cpass : {},	
	},
	 highlight: function(element) {
            $(element).removeClass('valid').addClass('invalid');
        },
        unhighlight: function(element) {
            $(element).removeClass('invalid').addClass('valid');
        },
	submitHandler : function(form){
	    form.submit();
	}
	
    });
});