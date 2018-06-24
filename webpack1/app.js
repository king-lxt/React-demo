import React from "react";
import reactDom from "react-dom";

//穿件子组件
let Nav = React.createClass({
	render(){
		return (
			<div>
				<ul>
					<li>首页</li>
					<li>关于</li>
					<li>列表</li>
				</ul>
				<div>我接收到的父数据是:{this.props.car}</div>
				<div>我接收到的父对象的数据是:{this.props.objects.a}</div>
				<div>我接收到的父对象的json数据是:{this.props.json.c}</div>
				<ul>
					{
						this.props.arr.map(function(val,index){
							return (
								<li key={index}>{val}</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
})

//创建组件
let Header = React.createClass({
	//数据初始化
	getInitialState(){
		return {
			json:{c:3,d:4},
			arr:[1,2,3,4,5]
		}
	},
	show(){
		alert("调用方法成功!")
		//修改数据
		this.setState({
			arr:[1,2,3,4,5,6,7,8]
		})
	},
	render() {
		console.log(this)
		return(
			<div>
				<h4>我是Header</h4>
				<Nav car="bmw" objects={{a:10}} json={this.state.json} arr = {this.state.arr}></Nav>
				<button onClick={this.show}>调用方法</button>
			</div>
		)
	}
})

let Content = React.createClass({
	render(){
		return (
			<div>
				<h4>我是Content组件</h4>	
			</div>
		)
	}
})

let Footer = React.createClass({
	render(){
		return (
			<div>
				<h4>我是Footer组件</h4>
			</div>
		)
	}
})

reactDom.render(
	<div>
		<Header></Header>
		<Content></Content>
		<Footer></Footer>
	</div>,
	document.getElementById("app")
)