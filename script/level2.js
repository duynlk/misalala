	check=0,x="",y="";
	pass=0;
	second=0;
	
	if(sessionStorage.record==null)
	{
		score=0;	
	}else{
		score=sessionStorage.record;		
	}
	
	window.onload=record;
	
	function record()
	{
		document.getElementById("score").innerHTML=score;	
	}
	
	cat = ["img/dog/one.jpg","img/dog/two.jpg","img/dog/three.jpg","img/dog/four.jpg","img/dog/five.jpg","img/dog/six.jpg","img/dog/seven.jpg","img/dog/eight.jpg"];
	img = [];
	i=0;k=0;appear=0;
	
	for(i=1;i<=16;i++)
	{
		temp = cat[Math.floor(Math.random()*cat.length)];
		for(k=1;k<=i;k++)
		{
			if(img[k]==temp)
			{
				appear = 1;	
			}
		}
		
		if(appear!=1)
		{
			img[i] = temp;	
		}else if(appear==1)
		{
			img[i] = temp;
			cat.splice(cat.indexOf(img[i]),1);
			appear=0;
		}
	}
	
	timecount = setInterval(time,1000);
	
	function time()
	{
		if(second>=55 && second<=59)
		{
			document.getElementById("stt").innerHTML=second;
		}
		document.getElementById("second").innerHTML=second+"/60s";
		second++;
		if(second==61 && pass!=7)
		{
			document.getElementById("stt").innerHTML="<img src=img/lose.png width=150 height=150>";
			document.getElementById("playagain").style.display="block";
			check=2;
			clearTimeout(timecount);	
		}
	}
		
	function playagain()
	{
		location.reload();	
	}

	function plus()
	{
		document.getElementById("rescore").style.display="block";	
		document.getElementById("rescore").innerHTML="+100";
		setTimeout(function(){document.getElementById("rescore").style.display="none";},1000);	
	}
	
	function minus()
	{
		document.getElementById("rescore").style.display="block";	
		document.getElementById("rescore").innerHTML="-50";
		setTimeout(function(){document.getElementById("rescore").style.display="none";},1000);	
	}
	
	function show(obj)
	{
		switch(obj)
		{
			case "x1":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[1];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[1];
						y1 = document.getElementById(obj).id;
					}
				}
					break;	
					
			case "x2":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[2];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[2];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x3":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[3];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[3];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x4":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[4];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[4];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x5":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[5];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[5];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x6":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[6];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[6];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x7":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[7];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[7];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x8":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[8];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[8];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x9":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[9];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[9];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x10":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[10];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[10];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x11":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[11];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[11];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
			
			case "x12":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[12];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[12];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
			
			case "x13":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[13];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[13];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x14":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[14];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[14];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x15":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[15];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[15];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x16":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[16];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[16];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
		}
						
		if(x!=="" && y!=="" && x1!==y1)
		{
			if(x===y)
			{
				pass++;
				plus();
				score = score + 100;
				document.getElementById("score").innerHTML=score;
				if(pass===8)
				{
					sessionStorage.record=Number(score);
					clearTimeout(timecount);	
					setTimeout(function(){window.location.assign("level3.html");},2000);
				}
				switch(x)
				{
					case "img/dog/one.jpg":
						document.getElementById("ok1").style.opacity=0.4;
							break;
					case "img/dog/two.jpg":
						document.getElementById("ok2").style.opacity=0.4;
							break;
					case "img/dog/three.jpg":
						document.getElementById("ok3").style.opacity=0.4;
							break;	
					case "img/dog/four.jpg":
						document.getElementById("ok4").style.opacity=0.4;
							break;
					case "img/dog/five.jpg":
						document.getElementById("ok5").style.opacity=0.4;
							break;
					case "img/dog/six.jpg":
						document.getElementById("ok6").style.opacity=0.4;
							break;
					case "img/dog/seven.jpg":
						document.getElementById("ok7").style.opacity=0.4;
							break;
					case "img/dog/eight.jpg":
						document.getElementById("ok8").style.opacity=0.4;
							break;
				}
				setTimeout(function(){document.getElementById(x1).style.display="none";document.getElementById(y1).style.display="none";},500);
				setTimeout(function(){check=0;x=""; y="";},500);
			}else{
				minus();
				score = score - 50;
				document.getElementById("score").innerHTML=score;
				setTimeout(function(){document.getElementById(x1).src="img/emty2.jpg";document.getElementById(y1).src="img/emty2.jpg";},500);
				setTimeout(function(){check=0;x=""; y="";},500);
			}
		}else{
			check=1;	
		}
	}