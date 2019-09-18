import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import { observable} from "mobx";
import {Redirect,Link} from "react-router-dom";
import "./style.css";

@inject("loginStore","storageStore")
@observer
class Login extends Component {

	@observable user_name="";
	@observable user_password="";

	accountChange = e => {
		const name = e.target.name;
		if(name==="account"){
			this.user_name = e.target.value;
		}
		if(name === "password"){
			this.user_password = e.target.value;
		}
		this.props.loginStore.loginTip = false;
	};
	showLoginTip() {
		if (this.props.loginStore.loginTip) {
			return (
				"账号或密码错误"
			)
		}
	}

	handleClick = () => {
		if(this.user_name.length === 0||this.user_password.length ===0){
			return(alert("账户名或者密码不能为空，请重新输入"));
		}
		const login={user_name:this.user_name,user_password:this.user_password};
		this.props.loginStore.isAdmin(login)
	};

	render() {
		if(this.props.loginStore.status){
			if(localStorage.length===0){
				this.props.storageStore.set(this.user_name,this.user_password);
			}else if(this.user_name!==localStorage.key(0)||this.user_password!==this.props.storageStore.get(localStorage.key(0))){
				localStorage.clear();
				this.props.storageStore.set(this.user_name,this.user_password);
				console.log(localStorage)
			}
			//console.log(localStorage);  //localStorage无敌！！！
			return <Redirect to={"/home"}/>    //注意：<Redirect/>组件必须放在render()函数内部才能调用
		}
		return (
			<div>
				<div className="loginBody">
					<div className="loginBody-content">
						<div className="login">
							<span className="loginBody-title">用户登录</span>
							<div className="login-tip">{this.showLoginTip()}</div>
							<div className="userName">
								<input
									type="text"
									placeholder="用户名"
									name="account"
									value={this.user_name}
									onChange={this.accountChange}
								/>
							</div>
							<div className="userName">
								<input
									type="password"
									placeholder="密   码"
									name="password"
									value={this.user_password }
									onChange={this.accountChange}
									/>
							</div>
							<button
								className="button-login"
								onClick={this.handleClick}>登&nbsp;&nbsp;&nbsp;录</button>
							<Link to="/regist">
								<button className="register">注&nbsp;&nbsp;&nbsp;册</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Login;
