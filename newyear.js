


document.addEventListener('DOMContentLoaded',()=>{

	document.querySelector('#button1').disabled = true;

	document.querySelector('#input').onkeyup = ()=>{
		let input = document.querySelector('#input');
		if(input.value.length > 0){
			document.querySelector('#button1').disabled = false;
		}else{
			document.querySelector('#button1').disabled = true;
		}
	}



	document.querySelector('#button1').onclick = ()=>{
		document.querySelector('#welcome1').style.display = 'block';
		let input = document.querySelector('#input').value;
		document.querySelector('#input-h3').innerHTML = input.toUpperCase();
		document.querySelector('#input').value= '';
		document.querySelector('#button1').disabled = true;
	}

	document.querySelector('#read-more').onclick = ()=>{
		document.querySelector('#welcome2').style.display = 'block';
		document.querySelector('#icon-p').style.display = 'none';
		document.querySelector('#read-more').innerHTML = 'HAPPY 2022!!!';
	}
	
})