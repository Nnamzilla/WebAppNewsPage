


	// JAVASCRIPT
	function creation()
			{
				var uname = document.getElementById("_uname").value;
				var email = document.getElementById("_email").value;
				var pass = document.getElementById("_pass").value;
				var confirmed = document.getElementById("_confirmed").value;
				if(email == "")
				{
					alert("Please enter a valid email address.");
					return;
				}
				if(uname == "")
				{
					alert("Please enter user name!");
					return;
				}
				else if(pass == "")
				{
					alert("Please enter password!")
					return;
				}
				else if (confirmed == "" || confirmed != pass)
				{
					alert("Please make sure your password is the same in both fields.")
					return;
				}
				
				var atSign = false;
				for(var i = 0; i < email.length; i++)
				{
					if(email[i] == "@")
					{
						atSign = true;
						break;
					}
				}
				if(atSign == false)
				{
					alert("Please enter a valid email address.");
						return;
				}
				
				document.forms["myForm"].submit();
				alert("Name: " + name + "  " + "\nEmail: " + email + "\nComment: " + comment);
			}