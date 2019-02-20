var mySwiper = new Swiper('.swiper-container', {
	direction: 'vertical', // 垂直切换选项
	loop: false, // 循环模式选项

	// 如果需要分页器
	pagination: {
		el: '.swiper-pagination',
	},
	on: {
		slideChangeTransitionEnd: function() {
			if (this.activeIndex === 0) {
				settu1int()
			} else {
				settu1rem()
			}
			}
		},
})
	function settu1int() {
			$(".tu1").addClass("active").siblings(".tu2").addClass("active")
		}

		function settu1rem() {
			$(".tu1").removeClass("active").siblings(".tu2").removeClass("active")
		}

