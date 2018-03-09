


	// JAVASCRIPT
	function creation()
			{
				var uname = document.getElementById("_uname").value;
				var email = document.getElementById("_email").value;
				var pass = document.getElementById("_pass").value;
				var confirmed = document.getElementById("_passConfirm").value;
				if(uname == "")
				{
					alert("Please enter user name!");
					return;
				}
				else if(email == "")
				{
					alert("Please enter email!");
					return;
				}
				else if(pass == "" || pass != confirmed)
				{
					alert("Please provide a valid password that matches in both fields.")
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
				location.href = "/Users/Nnamdi/Documents/PratherWebApp/WebAppNewsPage-dev/iLoveNewsMain.html";
			}
			
	function login()
	{
				var uname = document.getElementById("_uname").value;
				var pass = document.getElementById("_pass").value;
				if(uname == "")
				{
					alert("Please provide a valid username.");
					return;
				}
				else if(pass == "")
				{
					alert("Please provide a valid password.")
					return;
				}
				
				document.forms["myForm"].submit();
				location.href = "/Users/Nnamdi/Documents/PratherWebApp/WebAppNewsPage-dev/iLoveNewsMain.html";
	}