function sendEmail() {
	
	var name = document.getElementById("fullname").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	var template_params = {
		"reply_to": "vardhmanwallpapers@gmail.com",
		"from_name": name,
		"subject": subject,
		"to_name": "Pranay Mehta",
		"email_addr": email,
		"message_html": message
	 }
	 
	 var service_id = "gmail";
	 var template_id = "template_TmCFTS5B";
	 emailjs.send(service_id, template_id, template_params);
	 alert("Your mail is send successfully");
	 name.value="";
	 email.value="";
	 subject="";
	 message="";
	 return false;
}