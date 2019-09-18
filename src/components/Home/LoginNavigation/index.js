import React,{Component} from 'react'
import {observer,inject} from "mobx-react";
import {Link} from "react-router-dom";
import './style.css'

@inject("loginStore","storageStore")
@observer
class LoginNavigation extends Component{
	componentDidMount() {
		if(localStorage.length===0){
			this.props.loginStore.status=false;
		}else {
			this.props.loginStore.status=true;
		}
	}
	My_Avatar=()=>{
		if(this.props.loginStore.isLoading===false){
			//console.log("http://47.106.181.241:8081/ssm/images/touxiang/"+this.props.loginStore.CurrentUserImg);
			return ("http://47.106.181.241:8081/ssm/images/touxiang/"+this.props.loginStore.CurrentUserImg);
		}else {
			this.props.loginStore.get_my_info(localStorage.key(0)); //用户刷新页面的时候发请求
		}
	};
	/*setLogout=()=>{
		localStorage.clear();
		this.props.loginStore.status=false;
	};

	my_current_username=()=>{
		return localStorage.key(0);
	};

	my_info=()=>{
		this.props.loginStore.get_my_info(localStorage.key(0));
	};*/
	render() {
		if(this.props.loginStore.status===false) {
			return (
				<div className="Login">
					{/*<div className="Head-Navi">
						<Link to={"/home"}><img className="hnust-img" src="../../img/hnust-01.jpg" alt=""/></Link>
						<Link to={"/home"}><span className="hnust-title">大数据与人工智能研究室</span></Link>
					</div>*/}
					<div className="login-info">
						<Link to={"/"}><div className="Click-Login">您还未登录，点击登录</div></Link>
					</div>
					<div className="Web-Navi">
						<div className="My-Navi">
							<span>快捷导航</span>
						</div>
						<Link to={"/home"}><div className="Head-Pages">
							<img className="Head-Pages-Icon" src="../../Icon/Head-Pages.png" alt=""/>
							<span className="Head-Pages-Span">首页</span>
						</div></Link>
						<div className="Forum-Pages">
							<img className="Forum-Pages-Icon" src="../../Icon/Forum-Pages.png" alt=""/>
							<span className="Forum-Pages-Span">论坛</span>
						</div>
						<div className="Article-Pages">
							<img className="Article-Pages-Icon" src="../../Icon/Article-Pages.png" alt=""/>
							<span className="Article-Pages-Span">精彩文章</span>
						</div>
						<Link to={"/document"}><div className="Doc-Pages">
							<img className="Doc-Pages-Icon" src="../../Icon/Doc-Pages.png" alt=""/>
							<span className="Doc-Pages-Span">共享文档</span>
						</div></Link>
						<div className="Team-Dynamics-Pages">
							<img className="Team-Dynamics-Pages-Icon" src="../../Icon/Team-Dyna.png" alt=""/>
							<span className="Team-Dynamics-Pages-Span">团队动态</span>
						</div>
						<Link to={"/personInfo"}><div className="Person-Info-Pages">
							<img className="Person-Info-Pages-Icon" src="../../Icon/Person-info.png" alt=""/>
							<span className="Person-Info-Span">个人中心</span>
						</div></Link>
						<div className="Feedback-Pages">
							<img className="Feedback-Pages-Icon" src="../../Icon/Feedback.png" alt=""/>
							<span className="Feedback-Span">BUG反馈</span>
						</div>
					</div>
					<div className="Other-Choose">
						<div className="Other-Navi">
							<span>其他</span>
						</div>
						<div className="About-Us">
							<img className="About-Us-Icon" src="../../Icon/About-Us.png" alt=""/>
							<span className="About-Us-Span">关于我们</span>
						</div>
						<div className="Source-Code">
							<img className="Source-Code-Icon" src="../../Icon/Source-Code.png" alt=""/>
							<span className="Source-Code-Span">网站源码</span>
						</div>
						<div className="Development-ing">
							<img className="Development-ing-Icon" src="../../Icon/Development.png" alt=""/>
							<span className="Development-ing-Span">开发ing</span>
						</div>
					</div>
					<div className="Other-Link">
						<div className="Friend-Link">
							<span>友情链接</span>
						</div>
						<div className="Hnust-Web">
							<img className="Hnust-Web-Icon" src="../../Icon/Hnust-Web.png" alt=""/>
							<span className="Hnust-Web-Span">科大官网</span>
						</div>
					</div>
					<div className="clearfloat"></div>
				</div>
			)
		}else if(this.props.loginStore.status===true){
			return (
				<div className="Login">
					<div className="Head-Navi">
						<img className="hnust-img" src="../../img/hnust-01.jpg" alt=""/>
						<span className="hnust-title">大数据与人工智能研究室</span>
					</div>
					<div className="login-info">
						<Link to={"/personInfo"}>
							<img className="My-Avatar" src={this.My_Avatar()} alt="稍等"/>
							<span className="My-Name">{localStorage.key(0)}</span>
						</Link>
					</div>
					<div className="Web-Navi">
						<div className="My-Navi">
							<span>快捷导航</span>
						</div>
						<div className="Head-Pages">
							<img className="Head-Pages-Icon" src="../../Icon/Head-Pages.png" alt=""/>
							<span className="Head-Pages-Span">首页</span>
						</div>
						<div className="Forum-Pages">
							<img className="Forum-Pages-Icon" src="../../Icon/Forum-Pages.png" alt=""/>
							<span className="Forum-Pages-Span">论坛</span>
						</div>
						<div className="Article-Pages">
							<img className="Article-Pages-Icon" src="../../Icon/Article-Pages.png" alt=""/>
							<span className="Article-Pages-Span">精彩文章</span>
						</div>
						<div className="Doc-Pages">
							<img className="Doc-Pages-Icon" src="../../Icon/Doc-Pages.png" alt=""/>
							<span className="Doc-Pages-Span">共享文档</span>
						</div>
						<div className="Team-Dynamics-Pages">
							<img className="Team-Dynamics-Pages-Icon" src="../../Icon/Team-Dyna.png" alt=""/>
							<span className="Team-Dynamics-Pages-Span">团队动态</span>
						</div>
						<div className="Person-Info-Pages">
							<img className="Person-Info-Pages-Icon" src="../../Icon/Person-info.png" alt=""/>
							<span className="Person-Info-Span">个人中心</span>
						</div>
						<div className="Feedback-Pages">
							<img className="Feedback-Pages-Icon" src="../../Icon/Feedback.png" alt=""/>
							<span className="Feedback-Span">BUG反馈</span>
						</div>
					</div>
					<div className="Other-Choose">
						<div className="Other-Navi">
							<span>其他</span>
						</div>
						<div className="About-Us">
							<img className="About-Us-Icon" src="../../Icon/About-Us.png" alt=""/>
							<span className="About-Us-Span">关于我们</span>
						</div>
						<div className="Source-Code">
							<img className="Source-Code-Icon" src="../../Icon/Source-Code.png" alt=""/>
							<span className="Source-Code-Span">网站源码</span>
						</div>
						<div className="Development-ing">
							<img className="Development-ing-Icon" src="../../Icon/Development.png" alt=""/>
							<span className="Development-ing-Span">开发ing</span>
						</div>
					</div>
					<div className="Other-Link">
						<div className="Friend-Link">
							<span>友情链接</span>
						</div>
						<div className="Hnust-Web">
							<img className="Hnust-Web-Icon" src="../../Icon/Hnust-Web.png" alt=""/>
							<span className="Hnust-Web-Span">科大官网</span>
						</div>
					</div>
					<div className="clearfloat"></div>
				</div>
			)
		}
	}
}
export default LoginNavigation;