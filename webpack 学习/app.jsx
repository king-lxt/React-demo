import React from "react";
import ReactDom from "react-dom";

// 用class类创建组件
// 数据传递
class Header extends React.Component{
	// 有数据就出现constructors
	constructor (props) {
		super ();
		console.log("11111111")
		console.log(props)
		// this 指向的是Header
		this.state = {
			num: "123456",
			str: "bmw7"
		}
	}
	render () {
		return (
			<div title="我是Header">
				<div>我是header组件</div>
				<div>我收到的数据是：{this.state.num}/{this.state.str}</div>
				<Nav num={this.state.num} str={this.state.str}></Nav>
			</div>
		)
	}
}

class Nav extends React.Component{
	constructor(props){
		super();
		console.log("222222222222")
		console.log(props)
		// 按钮2在这绑定this, 一般都在这里做，
		// 不管用不用都在这里 绑定一下
		this.show2 = this.show2.bind(this);
	}
	show(){
		alert("ok")
		console.log("this")
		console.log(this)
	}
	show2(){
		alert("按钮2")
		console.log("this")
		console.log(this)
	}
	render () {
		return (
			<div>
				<div>我是nav组件</div>
				<input type="button" value="按钮" onClick={this.show.bind(this)} />
				<input type="button" value="按钮2" onClick={this.show2} />
				<div>我是nav组件，我收到的数据：{this.props.num}</div>
			</div>
		)
	}
}

// 渲染
ReactDom.render(
	<div>
		<Header></Header>
	</div>,
	document.querySelector("#app")
)