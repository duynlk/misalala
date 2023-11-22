	
	if(sessionStorage.record==null)
	{
		score=0;	
	}else{
		score=sessionStorage.record;		
	}
	
	window.onload=function()
					{
						document.getElementById("score").innerHTML=score;	
					}
	
	setTimeout(function(){window.location.assign("index.html");},5000);