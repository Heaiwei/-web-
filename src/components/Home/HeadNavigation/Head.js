import React,{Component} from 'react'
import {observer,inject} from "mobx-react";
import {Link} from "react-router-dom";


@inject("loginStore","storageStore")
@observer
class Head extends Component{
	render() {
		return(
			<div className="Forum-Content-First-Line">
				<div className="Head-Navi">
					<Link to={"/home"}><img className="hnust-img" src="../../img/hnust-01.jpg" alt=""/></Link>
					<Link to={"/home"}><span className="hnust-title">大数据与人工智能研究室</span></Link>
				</div>
				<Link to={"/home"}><span id="First-Pages">首&nbsp;页</span></Link>
				<span id="Forum-Pages">论&nbsp;坛</span>
				<span id="Active-Pages">动&nbsp;态</span>
				<div className="search">
					<input type="text" placeholder="搜索" className="Search-Info"/>
					<input type="button" className="search_btn"/>
				</div>
				<button id="Write-Pages">写文章</button>
				<button id="Send-Pages">发帖子</button>
				<button className="Notice-Info"/>
				<button className="My-Collection"/>
				<button className="Default-Img"/>
			</div>
		)
	}
}
export default Head;