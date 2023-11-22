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
	
	cat = ["img/total/1.jpg","img/total/2.jpg","img/total/3.jpg","img/total/4.jpg","img/total/5.jpg","img/total/6.jpg","img/total/7.jpg","img/total/8.jpg","img/total/9.jpg","img/total/10.jpg","img/total/11.jpg","img/total/12.jpg","img/total/13.jpg","img/total/14.jpg","img/total/15.jpg","img/total/16.jpg","img/total/16.jpg","img/total/17.jpg","img/total/18.jpg"];
	img = [];
	i=0;k=0;appear=0;
	
	for(i=1;i<=36;i++)
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
		if(second>=110 && second<=119)
		{
			document.getElementById("stt").innerHTML=second;
		}
		document.getElementById("second").innerHTML=second+"/120s";
		second++;
		if(second>120 && pass!=7)
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
			
			case "x17":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[17];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[17];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x18":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[18];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[18];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x19":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[19];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[19];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
			
			case "x20":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[20];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[20];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x21":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[21];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[21];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x22":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[22];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[22];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x23":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[23];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[23];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x24":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[24];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[24];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x25":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[25];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[25];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x26":
				if(check<2)
				{
					check+=1;
					
					if(x==="")
					{
						x = document.getElementById(obj).src=img[26];
						x1 = document.getElementById(obj).id;
					}else{
						y = document.getElementById(obj).src=img[26];
						y1 = document.getElementById(obj).id;
					}
				}
					break;
					
			case "x27":
			if(check<2)
			{
				check+=1;
				
				if(x==="")
				{
					x = document.getElementById(obj).src=img[27];
					x1 = document.getElementById(obj).id;
				}else{
					y = document.getElementById(obj).src=img[27];
					y1 = document.getElementById(obj).id;
				}
			}
				break;
				
			case "x28":
			if(check<2)
			{
				check+=1;
				
				if(x==="")
				{
					x = document.getElementById(obj).src=img[28];
					x1 = document.getElementById(obj).id;
				}else{
					y = document.getElementById(obj).src=img[28];
					y1 = document.getElementById(obj).id;
				}
			}
				break;
				
			case "x29":
			if(check<2)
			{
				check+=1;
				
				if(x==="")
				{
					x = document.getElementById(obj).src=img[29];
					x1 = document.getElementById(obj).id;
				}else{
					y = document.getElementById(obj).src=img[29];
					y1 = document.getElementById(obj).id;
				}
			}
				break;
				
			case "x30":
			if(check<2)
			{
				check+=1;
				
				if(x==="")
				{
					x = document.getElementById(obj).src=img[30];
					x1 = document.getElementById(obj).id;
				}else{
					y = document.getElementById(obj).src=img[30];
					y1 = document.getElementById(obj).id;
				}
			}
				break;
				
			case "x31":
			if(check<2)
			{
				check+=1;
				
				if(x==="")
				{
					x = document.getElementById(obj).src=img[31];
					x1 = document.getElementById(obj).id;
				}else{
					y = document.getElementById(obj).src=img[31];
					y1 = document.getElementById(obj).id;
				}
			}
				break;
				
			case "x32":
			if(check<2)
			{
				check+=1;
				
				if(x==="")
				{
					x = document.getElementById(obj).src=img[32];
					x1 = document.getElementById(obj).id;
				}else{
					y = document.getElementById(obj).src=img[32];
					y1 = document.getElementById(obj).id;
				}
			}
				break;
				
			case "x33":
			if(check<2)
			{
				check+=1;
				
				if(x==="")
				{
					x = document.getElementById(obj).src=img[33];
					x1 = document.getElementById(obj).id;
				}else{
					y = document.getElementById(obj).src=img[33];
					y1 = document.getElementById(obj).id;
				}
			}
				break;
				
			case "x34":
			if(check<2)
			{
				check+=1;
				
				if(x==="")
				{
					x = document.getElementById(obj).src=img[34];
					x1 = document.getElementById(obj).id;
				}else{
					y = document.getElementById(obj).src=img[34];
					y1 = document.getElementById(obj).id;
				}
			}
				break;
				
			case "x35":
			if(check<2)
			{
				check+=1;
				
				if(x==="")
				{
					x = document.getElementById(obj).src=img[35];
					x1 = document.getElementById(obj).id;
				}else{
					y = document.getElementById(obj).src=img[35];
					y1 = document.getElementById(obj).id;
				}
			}
				break;
				
			case "x36":
			if(check<2)
			{
				check+=1;
				
				if(x==="")
				{
					x = document.getElementById(obj).src=img[36];
					x1 = document.getElementById(obj).id;
				}else{
					y = document.getElementById(obj).src=img[36];
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
				if(pass===18)
				{
					sessionStorage.record=score;
					clearTimeout(timecount);	
					setTimeout(function(){window.location.assign("end.html");},2000);
				}
				plus();
				score = score + 100;
				document.getElementById("score").innerHTML=score;
				switch(x)
				{
					case "img/total/1.jpg":
						document.getElementById("ok1").style.opacity=0.4;
							break;
					case "img/total/2.jpg":
						document.getElementById("ok2").style.opacity=0.4;
							break;
					case "img/total/3.jpg":
						document.getElementById("ok3").style.opacity=0.4;
							break;
					case "img/total/4.jpg":
						document.getElementById("ok4").style.opacity=0.4;
							break;
					case "img/total/5.jpg":
						document.getElementById("ok5").style.opacity=0.4;
							break;
					case "img/total/6.jpg":
						document.getElementById("ok6").style.opacity=0.4;
							break;
					case "img/total/7.jpg":
						document.getElementById("ok7").style.opacity=0.4;
							break;
					case "img/total/8.jpg":
						document.getElementById("ok8").style.opacity=0.4;
							break;
					case "img/total/9.jpg":
						document.getElementById("ok9").style.opacity=0.4;
							break;
					case "img/total/10.jpg":
						document.getElementById("ok10").style.opacity=0.4;
							break;
					case "img/total/11.jpg":
						document.getElementById("ok11").style.opacity=0.4;
							break;
					case "img/total/12.jpg":
						document.getElementById("ok12").style.opacity=0.4;
							break;
					case "img/total/13.jpg":
						document.getElementById("ok13").style.opacity=0.4;
							break;
					case "img/total/14.jpg":
						document.getElementById("ok14").style.opacity=0.4;
							break;
					case "img/total/15.jpg":
						document.getElementById("ok15").style.opacity=0.4;
							break;		
					case "img/total/16.jpg":
						document.getElementById("ok16").style.opacity=0.4;
							break;
					case "img/total/17.jpg":
						document.getElementById("ok17").style.opacity=0.4;
							break;
					case "img/total/18.jpg":
						document.getElementById("ok18").style.opacity=0.4;
							break;
					
				}
				setTimeout(function(){document.getElementById(x1).style.display="none";document.getElementById(y1).style.display="none";},500);
				setTimeout(function(){check=0;x=""; y="";},500);
			}else{
				minus();
				score = score - 50;
				document.getElementById("score").innerHTML=score;
				setTimeout(function(){document.getElementById(x1).src="img/emty3.jpg";document.getElementById(y1).src="img/emty3.jpg";},500);
				setTimeout(function(){check=0;x=""; y="";},500);
			}
		}else{
			check=1;	
		}
	}