import React from "react";
import ReactDom from "react-dom";
import fetchJsonp from "fetch-jsonp"

class BaiduSearch  extends React.Component{
	constructor () {
		super();
		this.state = {
			ipt: "",
			arr: []
		}
		this.iptChange = this.iptChange.bind(this)
	}
	iptChange (ev) {
		this.setState ({
			ipt: ev.target.value
		})
		console.log("111111111")
		console.log(this.state.ipt)
		// jsonp 请求
		let url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + ev.target.value
		fetchJsonp(url,{jsonpCallback:'cb'}).then((res) => {
			res.json().then( (data) => {
				console.log(data)
				this.setState({
					arr:data.s
				})
			})
		}).catch((res) => {
			console.log(res)
		})
	}
	render () {
		return (
			<div title="baidu_search">
				<input type="text" value={this.state.ipt} onChange={this.iptChange}/>
				<ul>
					{
						this.state.arr.map((item, index) => {
							return (
								<li key={index}>{item}</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

ReactDom.render(
	<div>
		<BaiduSearch></BaiduSearch>
	</div>,
	document.querySelector("#app")
)