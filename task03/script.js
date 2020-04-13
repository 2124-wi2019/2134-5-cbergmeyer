/*Craig Bergmeyer
Script.js
INFO 2134
Thoendel
April 12, 2020*/


window.addEventListener('load', function() {

	// get the element for the click funcion and call onClick
	let actionCreate = document.getElementById('actionCreate');
	actionCreate.addEventListener('click', onClick);
	// get the element for the click funcion and call onClickComplete
	letActionComplete = document.getElementById('sctionComplete');
	actionComplete.addEventListener('click', onClickComplete);


	function onClick(){
		//start the promise	 didn't include reject since there was no condition for rejection
		let promise = new Promise((resolve)=>{
			//set the timeout (didn't include reject)
			setTimeout(() => {
		  		{
		    	resolve()
		   		 } 
		    		
  			}, 1000);		
		//hide the action create and make the action complete visible after the delay
		}).then(()=>{
			document.getElementById('actionCreate').className = 'hidden';
			document.getElementById('actionComplete').className = 'visible';

		});

	}
	// function to reset the page back to original
	function onClickComplete(){
		document.getElementById('actionCreate').className = 'visible';
		document.getElementById('actionComplete').className = 'hidden';
	}





});