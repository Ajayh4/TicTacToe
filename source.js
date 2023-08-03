var ch=0;
var st=[false,false,false,false,false,false,false,false,false];
var val=[0,0,0,0,0,0,0,0,0];
const reset = (x) => {
	document.getElementsByClassName('main')[0].style.display="none";
	document.getElementsByClassName('main2')[0].style.display="block";
	if(x=="X")
		document.getElementById('result').innerHTML="Match Drawn";
	else
		document.getElementById('result').innerHTML=x+" Won the Game";
}
const bol = (a,b,c) => {
	return val[a]==val[b] && val[b]==val[c];
}
const start = () => {
	ch=0;
	st=[false,false,false,false,false,false,false,false,false];
	val=[0,0,0,0,0,0,0,0,0];
	for(var i=1;i<=9;i++)
	{
		var x="id"+i;
		document.getElementById(x).style.backgroundImage="";
	}
	document.getElementsByClassName('main')[0].style.display="block";
	document.getElementsByClassName('main')[0].style.display="flex";
	document.getElementsByClassName('main2')[0].style.display="none";
	document.getElementById('result').innerHTML="";
}
const check= () => {
	if(bol(0,1,2))
	{
		if(val[0]==1)
			reset('A');
		else if(val[0]==2)
			reset('B');

	}
	else if(bol(3,4,5))
	{
		if(val[3]==1)
			reset('A');
		else if(val[3]==2)
			reset('B');
	}
	else if(bol(6,7,8))
	{
		if(val[6]==1)
			reset('A');
		else if(val[6]==2)
			reset('B');
	}
	else if(bol(0,3,6))
	{
		if(val[0]==1)
			reset('A');
		else if(val[0]==2)
			reset('B');

	}
	else if(bol(1,4,7))
	{
		if(val[1]==1)
			reset('A');
		else if(val[1]==2)
			reset('B');
	}
	else if(bol(2,5,8))
	{
		if(val[2]==1)
			reset('A');
		else if(val[2]==2)
			reset('B');
	}
	else if(bol(0,4,8))
	{
		if(val[0]==1)
			reset('A');
		else if(val[0]==2)
			reset('B');
	}
	else if(bol(2,4,6))
	{
		if(val[2]==1)
			reset('A');
		else if(val[2]==2)
			reset('B');
	}
	else
	{
		var c=0;
		for(var i=0;i<9;i++)
		{
			if(val[i]!=0)
				c+=1;
		}
		console.log(c);
		if(c==9)
			reset("X");
	}
}
const cha = (a) =>{
	var p="id"+a;
	console.log(p);
	if(st[a-1]==false)
	{
		ch+=1;
		st[a-1]=true;
		if(ch%2==1)
		{
			document.getElementById(p).style.backgroundImage="url(img.png)";
			val[a-1]=1;
			check();
		}
		else
		{
			document.getElementById(p).style.backgroundImage="url(img2.png)";
			val[a-1]=2;
			check();
		}
	}
}