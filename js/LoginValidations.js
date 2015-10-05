/**
 * 
 */

function resetData(input) {
	document.getElementById(input).value="";
	
}

function createNewAccount() 
{
	
	if((document.getElementById("userName").value.indexOf('@')==-1) || (document.getElementById("userName").value.indexOf('.')==-1) || (document.getElementById("userName").value==""))
	{
		alert("Please enter a valid Email ID");
	}
	
	else if(document.getElementById("pswrd").value != document.getElementById("pswrdVer2").value)
	{
		alert("Passwords do not match!!");
	}
	
	else
	{
		alert("Account Created successfully!!");
	}
	
	
}
