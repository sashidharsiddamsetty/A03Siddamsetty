function book()
{
	//var cost=document.getElementById("ww").value;
	var cost = $("#ww").val();
	//var pl=document.getElementById("pl").value;
	var pl=$("#pl").val();
	//var de=document.getElementById("de").value;
	var de=$("#de").val();
	var be =mul(pl,de);
    var result=mul(be,cost);
//window.alert("Your travelling cost is: $"+result);
//window.alert("Have a safe travel");
//$("mla").append("the total cost is : $"+result);
document.getElementById("mla").innerHTML="The total cost of your travel: $"+result;
}
function mul(a,b){
    if(!isNaN(a) && !isNaN(b))
		return a*b;
	else
		throw Error("only numbers are allowed");
}


function validation()
      {
      
         if( document.forms["valid"]["Firstname"].value == "" )
         {
            window.alert( "Please provide your first name!" );
            document.validation.firstname.focus() ;
            return false;
         }
         
         if( document.forms["valid"]["Lastname"].value == "" )
         {
            window.alert( "Please provide your lastname!" );
            document.validation.lastname.focus() ;
            return false;
         }

         if( document.forms["valid"]["Gender"].value == "" )
         {
            window.alert( "Please provide your gender!" );
            document.validation.gender.focus() ;
            return false;
         }

         return (true);
     }

 function App()
 {
 	validation();
 	book();
 }
		 
