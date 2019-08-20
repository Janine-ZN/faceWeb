window.onload = function() {
	var oTab1 = document.getElementById('table1');

	function step_num(count) {
		$("#span_nums").attr("length", '0');
		for(var i = 1; i < count + 1; i++) {
			$("#spanNext").before($('<span id="num' + i + '" ><a href="javascript:numPage(' + (i - 1) + ');">' + '&nbsp;' + i + '&nbsp;' + '</a></span>'));
		}
	}
	/*for循环添加数据faceset.html中的数据*/
	function addData() {
		for(var i = 1; i <= 300; i++) {
			//增加一行
			var oTr = document.createElement('tr');
			//增加第一列
			var oTd = document.createElement('td');
			oTd.innerHTML = '<label class="checkbox" style="position: relative;top:1px;"><input type="checkbox" id=""/><i></i></label>';
			oTr.appendChild(oTd);
			//增加第二列
			var oTd = document.createElement('td');
			oTd.innerHTML = 'VR201700' + i;
			oTr.appendChild(oTd);
			//增加第三列
			var oTd = document.createElement('td');
			oTd.innerHTML = '张一山' + i;
			oTr.appendChild(oTd);
			//增加第四列
			var oTd = document.createElement('td');
			oTd.innerHTML = '男';
			oTr.appendChild(oTd);
			//增加第五列
			var oTd = document.createElement('td');
			oTd.innerHTML = '31452619990000000';
			oTr.appendChild(oTd);
			//增加第六列
			var oTd = document.createElement('td');
			//			oTd.innerHTML = '<a class="tab-update">修改</a>&nbsp;&nbsp;<a class="tab-delete">删除</a>';
			oTd.innerHTML = '<a class="tab-query" id = "tab-query_' + i + '">查看详情' + i + '</a>';
			oTr.appendChild(oTd);
			//增加一行至表格中
			oTab1.tBodies[0].appendChild(oTr);

		}
	}
	addData();

	/*给删除添加点击事件*/
	$('.tab-delete').click(function() {
		$(this.parentNode.parentNode).remove();
	});

	/*给修改添加点击事件*/
	$('.tab-update').click(function() {

	});

	$('#tab-query_3').click(function() {

		var txt = '<div style = "text-align:center;"><form action="" method="post"><div>' +
			'<span style="position: relative;left: -100px;color: #8e8e8e;">姓名：</span>' +
			'<span style="position: relative;left: -100px;">李毅</span>' +
			'<span style="position: relative;left: 90px;color: #8e8e8e;">性别：</span>' +
			'<span style="position: relative;left: 90px;">男</span></div>' +
			'<div><span class="blacklist_ID_label">身份证号：</span><span name="" class="blacklist_ID_span">34222419801986</span></div>' +
			'<div><img src="img/jay1.jpg" class="blacklist_img" /></div>' +
			'<div><input type="button" class="blacklist_details_confirm" value="填好了，确认" />' +
			'<input type="reset" class="blacklist_details_reset" value="重置" /></div></form></div>';
		var option = {
			title: "查看人员信息",
			btn: parseInt("0011", 2),
			onOk: function() {
				console.log("确认啦");
			}
		}
		window.wxc.xcConfirm(txt, "custom", option);
	});

	/*全选*/
	function initTableCheckbox() {
		var $thr = $('table thead tr');
		var $checkAll = $thr.find('label');
		var $tbr = $('table tbody tr');
		/*设置表头的第一个多选按钮作为全选或者反选按钮*/
		$checkAll.click(function(event) {
			$('tbody').find('input').prop('checked', true);
			event.stopPropagation();
		});
		/*点击全选框单元格时，也会触发全选框的点击操作*/
		$('table thead tr th').click(function() {
			$(this).find('label').click();
		});
		/*点击每一行的选中复选框时*/
		$tbr.find('label').click(function(event) {
			$checkAll.prop('checked', $('tbody').find('input:checked').length == $tbr.length ? true : true);
			event.stopPropagation();
		});
		/*点击每一行时也触发该行的选中操作*/
		//		$tbr.click(function() {
		//			$(this).find('label').click();
		//		});
	}
	initTableCheckbox();

	/*分页功能开始*/
	var theTable = document.getElementById("table2");
	var totalPage = document.getElementById("spanTotalPage");
	var pageNum = document.getElementById("spanPageNum");
	var spanPre = document.getElementById("spanPre");
	var spanNext = document.getElementById("spanNext");
	var second = document.getElementById("second");

	var spanFirst = document.getElementById("spanFirst");
	var spanLast = document.getElementById("spanLast");
	var numberRowsInTable = theTable.rows.length;
	var pageSize = 12; //页面显示数据的条数
	var page = 1;

	//下一页
	function nextPage() {
		hideTable();
		currentRow = pageSize * page;
		maxRow = currentRow + pageSize;
		if(maxRow > numberRowsInTable) maxRow = numberRowsInTable;
		for(var i = currentRow; i < maxRow; i++) {
			theTable.rows[i].style.display = '';
		}
		page++;
		if(maxRow == numberRowsInTable) {
			nextText();
			lastText();
		}
		showPage();
		preLink();
		firstLink();
	}

	function numPage(page) { //跳转到指定页面，page接收点击的值
		hideTable();
		currentRow = pageSize * page;
		maxRow = currentRow + pageSize;
		if(maxRow > numberRowsInTable) maxRow = numberRowsInTable;
		for(var i = currentRow; i < maxRow; i++) {
			theTable.rows[i].style.display = '';
		}

		page++;
		if(maxRow == numberRowsInTable) {
			nextText();
			lastText();
		}
		showPage();
		preLink();
		firstLink();
	}

	/*跳转到指定页面*/
	var input_num = document.getElementById('input_num');
	var step_input_num = document.getElementById('step_input_num');
	/*跳转的点击事件*/
	step_input_num.onclick = function() {
		var getnum = input_num.value - 1;
		numPage(getnum);
	};
	/*输入框的键盘的回车事件*/
	input_num.onkeydown = function(ev) {
		var oEvent = ev || event;
		if(oEvent.keyCode == 13) {
			var getnum = input_num.value - 1;
			numPage(getnum);
		}
	};

	//第一页
	function firstPage() {
		hideTable();
		page = 1;
		for(var i = 0; i < pageSize; i++) {
			theTable.rows[i].style.display = '';
		}
		showPage();
		firstText();
		preText();
		nextLink();
		lastLink();
	}

	//最后一页
	function lastPage() {
		hideTable();
		page = pageCount();
		currentRow = pageSize * (page - 1);
		for(var i = currentRow; i < numberRowsInTable; i++) {
			theTable.rows[i].style.display = '';
		}
		showPage();
		preLink();
		nextText();
		firstLink();
		lastText();
	}

	function hideTable() {
		for(var i = 0; i < numberRowsInTable; i++) {
			theTable.rows[i].style.display = 'none';
		}
	}

	function showPage() {
		pageNum.innerHTML = page;
	}

	//总共页数
	function pageCount() {
		var count = 0;
		if(numberRowsInTable % pageSize != 0) count = 1;
		return parseInt(numberRowsInTable / pageSize) + count;
	}

	function nextLink() {
		spanNext.innerHTML = "<a href='javascript:nextPage();'>下页</a>";
	}

	function nextText() {
		spanNext.innerHTML = "下页";
	}

	function lastLink() {
		spanLast.innerHTML = "<a href='javascript:lastPage();'>尾页</a>";
	}

	function lastText() {
		spanLast.innerHTML = "尾页";
	}

	//只显示第一页的数据
	function firstPage() {
		for(var i = pageSize; i < numberRowsInTable; i++) {
			theTable.rows[i].style.display = 'none';
		}
		var count = pageCount();
		console.log("总页数==》" + count);
		totalPage.innerHTML = pageCount();
		pageNum.innerHTML = '1';
		//				numLink();
		step_num(count);
		nextLink();
		lastLink();
	}
	firstPage();

	/*分页功能结束*/
}