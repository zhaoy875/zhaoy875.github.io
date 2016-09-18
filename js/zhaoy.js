// time:20160918
// author:zhaoy875


(function(){
console.group();
	console.log('%c !!!报告,发现敌军！ | ू•ૅ㉨•́)ᵎᵎᵎ ','font-size:30px;text-shadow:0 0 10px #fff;color:#795548;padding:0 2em');
	console.log('%c╭( ′• o •′ )╭☞要找此人请拨“ MTU1NTEwNjA2NTU= ”或扣扣:“ MTE3NDQ5OTYwMg== ”  http://zhaoy.site','font-size:16px;color:#111;text-shadow:0 0 5px #333;padding:0 2em');
console.groupEnd();

	! function(e, t, a) {
		// 定义任务
		function n() {
			c(heart_css),
				o(),
				r()
		}

		function r() {
			for (var e = 0; e < d.length; e++)
				d[e].alpha <= 0 ? (t.body.removeChild(d[e].el),
					d.splice(e, 1)) : (d[e].y--,
					//d[e].scale += .004,
					// d[e].alpha -= .013,//层次效果递进
					d[e].scale += .008,
					d[e].alpha -= .015,
					d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999");
			requestAnimationFrame(r)
		}

		// 点击事件
		function o() {
			var t = "function" == typeof e.onclick && e.onclick;
			e.onclick = function(e) {
				t && t(),
					i(e)
			}
		}

		function i(e) {
			// var wraper = t.createElement("div");
			var a = t.createElement("div");
			a.innerHTML = '<div class="heart111"></div>';
			a.className = "wrap";

			d.push({
					el: a,
					x: e.clientX - 5,
					y: e.clientY - 5,
					scale: 1,
					alpha: 1,
					color: s()
				}),
				t.body.appendChild(a)
		}
		// 创建样式标签style
		function c(e) {
			var a = t.createElement("style");
			a.type = "text/css";
			try {
				a.appendChild(t.createTextNode(e))
			} catch (n) {
				a.styleSheet.cssText = e
			}
			t.getElementsByTagName("head")[0].appendChild(a)
		}
		// 生成随机颜色
		function s() {
			// ~是按位取反运算（经过位运算的都会自动变成整数，去除小数点），~~是取反两次
			return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
		}

		// 星星css样式
		var heart_css = ".wrap{position:fixed;margin:5em;transform:rotate(45deg);-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);transform-origin:center center}.heart111{width:80px;height:80px;position:relative;background:#000}.heart111:after,.heart111:before{content:'';width:inherit;height:inherit;position:absolute;top:0;left:0;background:inherit;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%}.heart111:after{top:-40px}.heart111:before{left:-40px}";

		var d = [];
		e.requestAnimationFrame = function() {
				return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
					setTimeout(e, 1e3 / 60)
				}
			}(),
			n()
			// n()执行任务
	}(window, document);
})();
