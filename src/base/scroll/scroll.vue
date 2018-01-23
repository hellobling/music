<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default {
		props: {
			probeType: {
				type: Number,
				default: 1
			},
			click: {
				type: Boolean,
				default: true
			},
			data: {
				type: Array,
				default: null
			},
			listenScroll: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
			// 保证在DOM渲染完毕后初始化better-scroll
			setTimeout(() => {
				this._initScroll()
			}, 20)
		},
		methods: {
			_initScroll() {
				if (!this.$refs.wrapper) {
					return
				}
				// better-scroll的初始化
				this.scroll = new BScroll(this.$refs.wrapper, {
					probeType: this.probeType,
					click: this.click
				})
				if (this.listenScroll) {
					let me = this
					this.scroll.on('scroll', (pos) => {
						me.$emit('scroll', pos)
					})
				}
			},
			enable() {
				// 代理better-scroll的enable方法
				this.scroll && this.scroll.enable()
			},
			disable() {
				// 代理better-scroll的disable方法
				this.scroll && this.scroll.disable()
			},
			refresh() {
				// 代理better-scroll的refresh方法
				this.scroll && this.scroll.refresh()
			},
			scrollTo() {
				this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
			},
			scrollToElement() {
				this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
			}
		},
		watch: {
			// 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
			data() {
				setTimeout(() => {
					this.refresh()
				}, 20)
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/styluss">
	
</style>