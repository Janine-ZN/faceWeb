window.onload = function() {
				var oProgress_img = document.getElementById('progress_img');
				var oProgress = document.getElementById('progress');
				var oProgress_bar = document.getElementById('progress_bar');
				var oNumber_input = document.getElementById('number_input');

				var disX = 0; //只要左右可以拖动
				oProgress_img.onmousedown = function(ev) {
					var oEvent = ev || event;
					disX = oEvent.clientX - oProgress_img.offsetLeft;
					if(oProgress_img.setCapture) { //IE
						oProgress_img.onmousemove = mouseMove;
						oProgress_img.onmouseup = mouseUp;
						oProgress_img.setCapture(); //事件捕获，将整个浏览器的焦点都放在div上

					} else { //chrome FF
						document.onmousemove = mouseMove;
						document.onmouseup = mouseUp;
					}

					function mouseMove(ev) {
						var oEvent = ev || event;
						var l = oEvent.clientX - disX;
						if(l < 0) {
							l = 0;
						} else if(l > oProgress.offsetWidth - oProgress_img.offsetWidth) {
							l = oProgress.offsetWidth - oProgress_img.offsetWidth;
						}
						oProgress_img.style.left = l + 'px';
						var scale = l / (oProgress.offsetWidth - oProgress_img.offsetWidth);
						document.getElementById('number_input').value = Math.round(scale*100);
						oProgress_bar.style.opacity = 1;
						oProgress_bar.style.width=300*scale+'px';
					}

					function mouseUp() {
						this.onmousemove = null;
						this.onmouseup = null;
						if(releaseCapture) {
							oProgress_img.releaseCapture(); //取消事件捕获
						}

					}
					return false; //防止 chrome IE9 firefox浏览器的bug
				};
			};