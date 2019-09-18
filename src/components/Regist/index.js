import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import { observable} from "mobx";
import {Redirect} from "react-router-dom";
import {Link} from "react-router-dom";
import "./style.css";

@inject("loginStore")
@observer
class Regist extends Component {

	@observable id;
	@observable name;
	@observable Username = "";
	@observable Password = "";
	@observable ConfigPassword = "";

	 handleAccountValue = e => {
		this.Username =e.target.value;
	};
	 handlePasswordValue = e => {
		this.Password= e.target.value;
	};

	 handleConfigValue = e => {
		this.ConfigPassword = e.target.value;
	};

	handleClick = e => {
		if(this.Username.length === 0||this.Password.length ===0){
			return(alert("账户名或者密码不能为空，请重新输入"));
		}else if(this.ConfigPassword.length===0){
			return(alert("请填写确认密码"))
		}else if (this.Password !== this.ConfigPassword) {
			return(alert("密码不匹配"));
		}else {
			this.props.loginStore.regist(this.Username,this.Password,this.ConfigPassword)
		}
	};

	render() {
		if (this.props.loginStore.isRegist){
			return <Redirect to={"/"}/>
		}
		return (
				<div className="registBody">
					<div className="registBody-content">
						<div className="regist">
							<span className="registBody-title">用户注册</span>
							<div className="userName">
								<input type="text"
									   placeholder="用户名"
									   onChange={this.handleAccountValue}
									   value={this.Username}/>
							</div>
							<div className="userPassword">
								<input type="password"
									   placeholder="密   码"
									   onChange={this.handlePasswordValue}
									   value={this.Password}
								/>
							</div>
							<div className="userPassword">
								<input type="password"
									   placeholder="确认密码"
									   onChange={this.handleConfigValue}
									   value={this.ConfigPassword}/>
							</div>
							<button type="submit"
								    className="button-regist"
									onClick={this.handleClick}>注&nbsp;&nbsp;&nbsp;册</button>
						    <Link to="/">
								<button className="button-back">登&nbsp;&nbsp;&nbsp;录</button>
						    </Link>
						</div>
					</div>
				</div>
		)
	}
}

export default Regist;
