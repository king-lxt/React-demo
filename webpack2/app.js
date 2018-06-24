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
	show(n,ev){
		// show 方法传参的时候  需要用bind绑定this指向
		alert("调用方法成功!" + " " + n)
		console.log(ev)
		//这里是操作的虚拟dom
		ev.target.style.background='red'
		//修改数据
		this.setState({
			arr:[1,2,3,4,5,6,7,8]
		})
		//这个是在操作真实的dom
		this.refs.h.style.background = 'red'
	},
	render() {
		console.log(this)
		return(
			<div>
				<h4>我是Header</h4>
				<Nav car="bmw" objects={{a:10}} json={this.state.json} arr = {this.state.arr}></Nav>
				//ref 用来收录真实dom
				<button ref="btn1" onClick={this.show.bind(this,12)}>调用方法</button>
				<h5 ref="h">ref的用途</h5>
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