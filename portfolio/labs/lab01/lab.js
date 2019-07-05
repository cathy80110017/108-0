/*

*/


function start(e) {
	var abc=[
		{
			name:'陳',
			cns:'1-5D73',
			big5:'B3AF',
			unicode:'9673'
		},
		{
			name:'佳',
			cns:'1-4B6F',
			big5:'A8CE',
			unicode:'4F73'
		},
		{
			name:'吟',
			cns:'1-4957',
			big5:'A775',
			unicode:'541F'
		}
	];
	var ele = document.getElementById('div1');

	for(var i=0;i<3;i++){
		ele.innerHTML += abc[i].name;
		ele.innerHTML += 'CNS=';
		ele.innerHTML += abc[i].cns;
		ele.innerHTML += 'Big5=';
		ele.innerHTML += abc[i].big5;
		ele.innerHTML += 'Unicode=';
		ele.innerHTML += abc[i].unicode;
		ele.innerHTML += '<br>';
	}
}
/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
