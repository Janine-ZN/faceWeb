window.onload = function() {
	/*导航栏*/
	var arr = [];
	arr[0] = document.getElementById('one');
	arr[1] = document.getElementById('two');
	arr[2] = document.getElementById('three');
	arr[3] = document.getElementById('four');
	arr[4] = document.getElementById('five');
	/*获取静态页面 */
	var list = [];
	list[0] = document.getElementById('tcp_change');
	list[1] = document.getElementById('ddns_change');
	list[2] = document.getElementById('pppoe_change');
	list[3] = document.getElementById('port_change');
	list[4] = document.getElementById('map_change');
	/*获取修改页面*/	
	var contenList=[];
	contenList[0]=document.getElementById('content_first');
	contenList[1]=document.getElementById('content_second');
	contenList[2]=document.getElementById('content_third');	
	contenList[3]=document.getElementById('content_fourth');
	contenList[4]=document.getElementById('content_fifth');
    //刷新后，显示导航栏第一个边框
	for(var n = 1; n < arr.length; n++) {
		arr[n].style.border = 'none';
		
	}
	for(var i = 0; i < arr.length; i++) {
		arr[i].index = i;
		arr[i].onclick = function() {
			//隐藏可编辑页面
			contenList[this.index].style.display = 'none';
			//显示静态页面
			list[this.index].style.display = 'block';
			//点击的导航栏的边框和背景颜色显示
			arr[this.index].style.border = '1px dashed #D5D5D5';
			arr[this.index].style.borderBottom = 'solid #FFF';
			arr[this.index].style.background='#FFF';
			//非点击状态的内容隐藏
			for(var j = 0; j < arr.length; j++) {
				if(j != this.index) {
					contenList[j].style.display = 'none';
					list[j].style.display = 'none';
					arr[j].style.border = 'none';
					arr[j].style.background='transparent';
				}
			} 
		};
	}
	/*按钮跳转*/
	
	for(var i=0;i<5;i++){
		//获取修改按钮和保存按钮
	var oChangeButton=list[i].getElementsByClassName('change_button')[0];
	var oSaveButton=contenList[i].getElementsByClassName('save')[0];
	//点击‘保存’按钮，显示静态页面
	oSaveButton.index=i;
	oSaveButton.onclick=function(){
		contenList[this.index].style.display = 'none';
		list[this.index].style.display = 'block';
	}
	//点击‘修改’按钮
	oChangeButton.index=i;
	oChangeButton.onclick=function(){
		//显示可编辑页面
		contenList[this.index].style.display = 'block';
		list[this.index].style.display = 'none';
		
		
		for(var h=0;h<5;h++){
			if(h!=this.index){
				list[h].style.display = 'none';
			}
		}
		//获取span内容和text input
		var oSpanGet=list[this.index].getElementsByClassName('span_get');
		var oInputGet=contenList[this.index].getElementsByClassName('input_get');
		for(var j=0;j<oInputGet.length;j++){
				oInputGet[j].value+=oSpanGet[j].innerHTML;
			}
	}
	}
		
}