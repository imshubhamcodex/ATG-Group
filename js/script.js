window.onload = function(){
	for(let i=0;i<=5;i++)
	document.getElementsByClassName('dropdown-content')[i].style.display = 'none';
	document.getElementsByClassName('nav-btn')[0].style.borderColor = 'black';
	for(let i = 0;i<5;i++)
	{		document.getElementsByClassName('nav-btn')[i].onclick = function()
		{
			document.getElementsByClassName('nav-btn')[i].style.borderColor = 'black';
			for(let j = 0;j<5;j++)
				if(i!=j)
					document.getElementsByClassName('nav-btn')[j].style.borderColor = '#DCDCDC';

			var text = document.getElementsByClassName('nav-btn')[i].textContent;
			changeContent(text);
		}
	}

	LogIn(1);
}

function toggle(){
	if(document.getElementsByClassName('dropdown-content')[0].style.display == 'none'){
		document.getElementsByClassName('dropdown-content')[0].style.display = 'block';
		document.getElementsByClassName('caret')[0].style.transform = 'rotate(180deg)';
	}
	
	else{
		document.getElementsByClassName('dropdown-content')[0].style.display = 'none';
		document.getElementsByClassName('caret')[0].style.transform = 'rotate(-360deg)';
	}
		
}

function togSecdrop(index){
		if(document.getElementsByClassName('dropdown-content')[index].style.display == 'none'){
			document.getElementsByClassName('dropdown-content')[index].style.display = 'block';
			for(let i=0;i<=5;i++)
			{
				if(i!=index)
					document.getElementsByClassName('dropdown-content')[i].style.display = 'none';
			}
		}
		
	else{
		document.getElementsByClassName('dropdown-content')[index].style.display = 'none';
	}
}

function changeContent(text){
	var title = document.getElementsByTagName('h4');
	for(let i=1;i<=5;i++){
		document.getElementsByClassName('box'+i.toString())[0].style.display = 'block';
	}
	if(text=='Article' || text=='Jobs' || text=='Event' || text=='Education' ){


	Array.from(title).forEach(function(ele,index){
		if(text ==='Event' )
			text = 'Meetup';
		if(ele.textContent != text)
		{
			console.log(text +"  "+ele.textContent )
			ele.parentNode.parentNode.parentNode.style.display = 'none';

		}
		else{
			ele.parentNode.parentNode.parentNode.style.gridRow = '2/3';
		}
	})

	}
	else{
		document.getElementsByClassName('box2')[0].style.gridRow = '2/3';
		document.getElementsByClassName('box3')[0].style.gridRow = '3/4';
		document.getElementsByClassName('box4')[0].style.gridRow = '4/5';
		document.getElementsByClassName('box5')[0].style.gridRow = '5/6';
	}

}
window.onclick = function(event){

	if(document.getElementById('account').style.display == 'none')
		document.getElementsByClassName('fix-image')[0].style.display = 'block';

	if(event.target == document.getElementById('m-signIn')){
		document.getElementsByClassName('open-m')[0].click();
		if(document.getElementById('c-pass').style.display == 'block'){
			let fname = document.getElementById('f-name').value;
			let lname = document.getElementById('l-name').value;

			if(fname == "" || lname == ""){
				alert("Invalid input field!");
				window.location.reload();
			}
			else{
				document.getElementById('edit-img').style.display='block';
				document.getElementById('btn-leave-group').textContent ="Leave Group";
				var name = fname +" "+ lname;
				document.getElementById('Name').innerHTML = `

					<b>Hi</b>, ${name} </h4>

				`;
			}
		}
	

	}

	if(event.target==document.getElementsByClassName('box6')[0] || event.target==document.getElementsByClassName('container')[0])
	{
		console.log('hi')
		for(let i=0;i<=5;i++)
		document.getElementsByClassName('dropdown-content')[i].style.display = 'none';
	}

	if(event.target == document.getElementById('nav').children[0])
	{
		document.getElementsByClassName('dropdown-content')[0].style.display = 'none';
		document.getElementsByClassName('caret')[0].style.transform = 'rotate(-360deg)';
	}
}

document.getElementById('m-signIn').onclick = function(){
	var ele = document.getElementById('account');
	ele.style.display = 'none';
	document.getElementsByClassName('fix-image')[0].style.display = 'block';

	
}

function LogIn(key){

	if(key==-1)
	{	
		document.getElementById('logorsin').textContent = "or, Sign Up";
		document.getElementById('logorsin').onclick = function(){
			SignUp(-1);
		}
	}

	document.getElementById('f-name').style.display = 'none';
	document.getElementById('l-name').style.display = 'none';
	document.getElementById('c-pass').style.display = 'none';
	document.getElementById('m-signIn').textContent ="Sign In";
	document.getElementById('m-head').textContent = "Sign In";
	document.getElementById('f-pass').style.display = 'block';
	document.getElementById('c-pass').style.display = 'none';
	document.getElementById('terms').style.display = 'none';

	document.getElementById('que').innerHTML = `

			Don't have account yet? <span id="ask" onclick="SignUp(0)" style="color:#0000ff;cursor:pointer">Create new for free!</span>

	`;
	

	if(key==1)
	document.getElementsByClassName('open-m')[0].click();

}
function SignUp(key){
	if(key==-1)
	{	
		document.getElementById('logorsin').textContent = "or, Sign In";
		document.getElementById('logorsin').onclick = function(){
			LogIn(-1);
		}

	}
	document.getElementById('f-name').style.display = 'inline';
	document.getElementById('l-name').style.display = 'inline';
	document.getElementById('c-pass').style.display = 'block';
	document.getElementById('m-signIn').textContent ="Create Account";
	document.getElementById('m-head').textContent = "Create Account";
	document.getElementById('f-pass').style.display = 'none';
	document.getElementById('c-pass').style.display = 'block';
	document.getElementById('terms').style.display = 'block';

	document.getElementById('que').innerHTML = `
			Already have an account? <span id="ask" onclick="LogIn(0)" style="color:#0000ff; cursor:pointer;">Sign In</span>
	`;
	if(key==1)
	document.getElementsByClassName('open-m')[0].click();
}

if(window.innerWidth<=480)
{
	for(let i=0;i<4;i++)
	{
		document.getElementsByClassName('fa-eye')[0].classList.remove("fa-eye")
	}
	
	document.getElementById('l-aerrow').style.display = "block"
	document.getElementById('link1').textContent = "Article";
	document.getElementById('link2').textContent = "Event";
	document.getElementById('link3').textContent = "Education";
	document.getElementById('link4').textContent = "Jobs";
	document.getElementById('link5').textContent = "All";
	document.getElementById('filter-box').textContent = "Filter : All";

	document.getElementById('link1').onclick = function(){
		document.getElementById('filter-box').textContent = "Filter : Article";
		document.getElementsByClassName('nav-btn')[1].click();
	} 
	document.getElementById('link2').onclick = function(){
		document.getElementById('filter-box').textContent = "Filter : Event";
		document.getElementsByClassName('nav-btn')[2].click();
	}
	document.getElementById('link3').onclick = function(){
		document.getElementById('filter-box').textContent = "Filter : Education";
		document.getElementsByClassName('nav-btn')[3].click();
	}
	document.getElementById('link4').onclick = function(){
		document.getElementById('filter-box').textContent = "Filter : Job";
		document.getElementsByClassName('nav-btn')[4].click();
	}
	document.getElementById('link5').onclick = function(){
		document.getElementById('filter-box').textContent = "Filter : All";
		changeContent('All');
	}

	function leaveJoin(){
		if(document.getElementById('edit-img').style.display=='none')
		{
			SignUp(1);
		}
		else{
			document.getElementById('edit-img').style.display='none';
			document.getElementById('btn-leave-group').textContent ="Join Group";
		}
	}

}
else{
	function leaveJoin(){
		if(document.getElementById('edit-img').style.display=='none')
		{
			document.getElementById('edit-img').style.display='block';
			document.getElementById('btn-leave-group').textContent ="Leave Group";
		}
		else{
			document.getElementById('edit-img').style.display='none';
			document.getElementById('btn-leave-group').textContent ="Join Group";
		}
	}
}
