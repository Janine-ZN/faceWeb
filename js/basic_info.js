window.onload = function() {
		
	//基本信息
	var oForm = document.getElementById('basic_form');
	var oBaInput = oForm.getElementsByClassName('text_input');
	var oBasChange = document.getElementById('bas_change');
	var oBasSpan = oBasChange.getElementsByClassName('span_right');
	var oBasButton = document.getElementById('bas_button');
	var obasContent = document.getElementById('basic_content');
	var oSave=document.getElementById('save_id');
	oBasButton.onclick = function() {//console.log("oBasSpan[1].innerHTML===>" + oBasSpan[1].innerText);
		obasContent.style.display = 'block';
		oBasChange.style.display = 'none';
		for(var i = 0; i < oBasSpan.length; i++) {
			oBaInput[i].value = oBaInput[i].value+oBasSpan[i].innerHTML;
		}
	
	}
	oSave.onclick=function(){
		obasContent.style.display = 'none';
		oBasChange.style.display = 'block';
	}
	
}