import React from "react";
import reactDom from "react-dom";

//父向子传数据是props
//子向父传数据是

//子组件
let Child = React.createClass({
	getInitialState() {
		return {
			childData: '我是子数据'
		}
	},
	sendParent() {
		this.props.getChilds(this.state.childData)
	},
	render() {
		return(
			<div>
				<div>我是子组件</div>
				<div>我接收到的父数据是:{this.props.car}</div>
				<button onClick={this.sendParent}>向父组件发送数据</button>
			</div>
		)
	}
})

//创建组件
let Parent = React.createClass({
	//数据初始化
	getInitialState() {
		return {
			car: 'bmw',
			childData:'...'
		}
	},
	getChild(data) {
		alert(data)
		this.setState({
			childData:data
		})
	},
	render() {
		console.log(this)
		return(
			<div>
				<h4>我是父组件</h4>
				<h4>我收到子数据: {this.state.childData}</h4>
				<Child car={this.state.car} getChilds={this.getChild}></Child>
			</div>
		)
	}
})

reactDom.render(
	<div>
		<Parent></Parent>
	</div>,
	document.getElementById("app")
)