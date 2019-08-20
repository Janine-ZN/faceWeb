$(document).ready(function() {

	// 添加人脸库
	$("#add_rep").click(function() {
		var txt = '<div style = "text-align:center;"><form action="" method="post"><div>' +
			'<label class="blacklist_name">人脸库名称：</label>' +
			'<input class="blacklist_name_input" placeholder="输入名字" type="text" name="" /></div>' +
			'<div><label class="blacklist_threshold">阈值：</label>' +
			'<input class="blacklist_threshold_input" id="con_input_4" placeholder="20-100之间" type="text" name="" /></div>' +
			'<div><label class="blacklist_note">备注：</label>' +
			'<input class="blacklist_note_input" placeholder="输入备注信息" type="text" name="" /></div>' +
			'<div><input type="button" class="add_confirm" value="填好了，确认" />' +
			'<input type="reset" class="add_reset" value="重置" /></div></form></div>';
		var option = {
			title: "添加人脸库",
			btn: parseInt("0011", 2),
			onOk: function() {
				console.log("确认啦");
			}
		}
		window.wxc.xcConfirm(txt, "custom", option);
	});
	// 添加人员信息
	$("#add_peo").click(function() {

		var txt = '<div style = "text-align:center;"><form action="" method="post"><div><label class="blacklist_username">姓名：</label>' +
			'<input class="blacklist_username_input" id="con_input_3" placeholder="输入名字" type="text" name="" />' +
			'<label class="blacklist_sex">性别：</label><select class="blacklist_sex_select" id="jump_select_1">' +
			'<option value="性别选择" style="text-align: right;">性别选择</option><option value="男">男</option>' +
			'<option value="女">女</option><option value="未知">未知</option></select></div><div>' +
			'<label class="blacklist_ID_number">身份证号：</label>' +
			'<input class="blacklist_ID_number_input" id="con_input_4" placeholder="输入身份证信息" type="text" name="" />' +
			'</div><div class="input_dashed_img"><label class="dialog_label_img">上传图片 ：</label>' +
			'<img src="img/load.png" style="margin-top: 20px;" /></div><div>' +
			'<input type="button" class="blacklist_add_confirm" value="填好了，确认" onclick="test1234();"/>' +
			'<input type="reset" class="blacklist_add_reset" value="重置" /></div></form></div>';

		var option = {
			title: "添加人员信息",
			btn: parseInt("0011", 2),
			onOk: function() {
				console.log("确认啦");
			}
		}
		window.wxc.xcConfirm(txt, "custom", option);
	});

	// 导入
	$("#import_info_btn").click(function() {
		var txt = '<div style="text-align:center;" class="import_info"><form action="" method="post">' +
			'<div class="import_info_progress"><div class="im_progress1"><img src="img/im_progress1.png" />' +
			'<label>基础信息</label></div><div class="unim_progress2"><img src="img/unim_progress2.png" />' +
			'<label>上传照片</label></div><div class="unim_progress3"><img src="img/unim_progress3.png" />' +
			'<label>导入成功</label></div><div class="import_progress"><div class="import_progress_bar"></div>' +
			'</div></div><div class="input_dashed_excel"><label class="dialog_label_excel">上传Excel文件 ：</label>' +
			'<img src="img/im_progress_e.png" style="margin-top: 20px;" /></div><div  class="blacklist_im_btn">' +
			'<input id="blacklist_im_submit" type="button" class="blacklist_im_submit" value="传好了，下一步" onclick = "import_info();"/>' +
			'<input type="reset" class="blacklist_im_reset" value="取消" /></div></form></div>';
		var option = {
			title: "批量导入",
			btn: parseInt("0011", 2),
			onOk: function() {
				console.log("确认啦");
			}
		}
		window.wxc.xcConfirm(txt, "custom", option);
	});

	//详细信息
	$("#edit_peo").click(function() {
		
		var txt = '<div style = "text-align:center;"><form action="" method="post"><div>' +
			'<span style="position: relative;left: -100px;color: #8e8e8e;">姓名：</span>'+
			'<span style="position: relative;left: -100px;">李毅</span>' +
			'<span style="position: relative;left: 90px;color: #8e8e8e;">性别：</span>'+
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
	
	//摄像机维护界面的格式化操作弹框
	$(".progress_reset").click(function() {
		console.log("执行成功");
		//操作成功的弹框内容
		var txt = '<div class="video-dialog-reset">'
				  +'<span><img src="../../img/reset.png"/></span>'
					+'<label>格式化成功！</label>'
					+'<button class="con_button_reset" type="button" onclick="location_reset();">确认</button></div>';
		//操作失败的弹框内容
		var txt2 = '<div class="video-dialog-reset">'
						+'<span><img src="../../img/reseterror.png"/></span>'
						+'<label>格式化失败！</label><button class="confirm" type="button">确认</button>'
						+'<button class="con_button_restart" type="button">重新格式化</button></div>';
		var option = {
			title: "格式化操作",
			btn: parseInt("0011", 2),
			onOk: function() {
				console.log("确认啦");
			}
		}
		window.wxc.xcConfirm(txt2, "custom", option);
	});

});