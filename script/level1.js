	
	check=0,x="",y="";
	score=0,pass=0;
	second=0;
	
	window.onload=record;
	
	function record()
	{
		document.getElementById("score").innerHTML=score;	
	}
	
	cat = ["img/cat/one.jpg","img/cat/two.jpg","img/cat/three.jpg","img/cat/four.jpg","img/cat/lucky.jpg"];
	img = [];
	i=0;k=0;appear=0;
	
	for(i=1;i<=9;i++)
	{
		temp = cat[Math.floor(Math.random()*cat.length)];
		if(temp=="img/cat/lucky.jpg")
		{
			img[i] = temp;
			cat.splice(cat.indexOf("img/cat/lucky.jpg"),1);	
		}else{
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
	}
	
	timecount = setInterval(time,1000);
	
	function time()
	{
		if(second>=25 && second<=29)
		{
			document.getElementById("stt").innerHTML=second;
		}
		document.getElementById("second").innerHTML=second+"/30s";
		second++;
		if(second==31 && pass!=4)
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

	function plus1000()
	{
		document.getElementById("rescore").style.display="block";	
		document.getElementById("rescore").innerHTML="+1000";
		setTimeout(function(){document.getElementById("rescore").style.display="none";},1000);	
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
	
	function hide()
	{
		document.getElementById("x1").style.display="none";
		document.getElementById("x2").style.display="none";
		document.getElementById("x3").style.display="none";
		document.getElementById("x4").style.display="none";
		document.getElementById("x5").style.display="none";
		document.getElementById("x6").style.display="none";
		document.getElementById("x7").style.display="none";
		document.getElementById("x8").style.display="none";
		document.getElementById("x9").style.display="none";	
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
		}
						
						
		if(x==="img/cat/lucky.jpg")
		{
			check=2;
			document.getElementById("ok5").style.opacity=0.4;
			plus1000();
			score = score + 1000;
			document.getElementById("score").innerHTML=score;
			sessionStorage.record=Number(score);				
			setTimeout(function(){document.getElementById(x1).style.display="none";},500);
			setTimeout(function(){check=0;x=""; y="";},500);
		}else if(y==="img/cat/lucky.jpg")
		{
			check=2;
			document.getElementById("ok5").style.opacity=0.4;
			plus1000();
			score = score + 1000;
			document.getElementById("score").innerHTML=score;
			sessionStorage.record=Number(score);
			setTimeout(function(){document.getElementById(x1).src="img/emty.jpg";document.getElementById(y1).style.display="none";},500);
			setTimeout(function(){check=0;x=""; y="";},500);
		}else if(x!=="" && y!=="" && x1!==y1)
		{
			if(x===y)
			{
				pass++;
				plus();
				score = score + 100;
				document.getElementById("score").innerHTML=score;
				if(pass===4)
				{
					sessionStorage.record=Number(score);
					clearTimeout(timecount);	
					setTimeout(function(){window.location.assign("level2.html");},2000);
				}
				switch(x)
				{
					case "img/cat/one.jpg":
						document.getElementById("ok1").style.opacity=0.4;
							break;
					case "img/cat/two.jpg":
						document.getElementById("ok2").style.opacity=0.4;
							break;
					case "img/cat/three.jpg":
						document.getElementById("ok3").style.opacity=0.4;
							break;	
					case "img/cat/four.jpg":
						document.getElementById("ok4").style.opacity=0.4;
							break;
				}
				setTimeout(function(){document.getElementById(x1).style.display="none";document.getElementById(y1).style.display="none";},500);
				setTimeout(function(){check=0;x=""; y="";},500);
			}else{
				minus();
				score = score - 50;
				document.getElementById("score").innerHTML=score;
				setTimeout(function(){document.getElementById(x1).src="img/emty.jpg";document.getElementById(y1).src="img/emty.jpg";},500);
				setTimeout(function(){check=0;x=""; y="";},500);
			}
		}else{
			check=1;	
		}
	}