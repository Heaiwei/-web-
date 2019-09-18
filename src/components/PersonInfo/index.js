import React,{Component} from 'react'
import {observable} from "mobx";
import {observer,inject} from "mobx-react";
import './style.css'

@inject("loginStore","storageStore")
@observer
class PersonInfo extends Component{
	constructor(props) {
		super(props);
		this.fileInput = React.createRef();
	}
	@observable choose_change_person_introduce=true; //默认显示修改简介内容
	@observable choose_change_person_username=false;
	@observable choose_change_person_userimage=false;

	@observable is_changed_pic=false;  //判断当前是否已经选择图片
	@observable is_changed_pic_again=1;

	@observable introduce_info="";
	@observable signature_info="";

	@observable new_username="";
	@observable current_password="";
	@observable new_password="";
	@observable config_new_password="";

	change_person_info=()=>{
		if(this.choose_change_person_introduce===true){
			return (
				<div>
					<div className="Person-Info">
						<div className="Person-Change-Introduce">
							<div className="Person-Text-Introduce">我的简介：</div>
							<textarea className="Person-Info-Input" name="Person-Info-Input"
									  onChange={this.change_info}
									  value={this.introduce_info}
							/>
						</div>
						<div className="Person-Change-Skill">
							<div className="Person-Text-Skill">个性签名：</div>
							<textarea className="Person-Skill-Input" name="Person-Skill-Input"
									  onChange={this.change_info}
									  value={this.signature_info}/>
						</div>
					</div>
					<div className="Person-Change-Button">
						<button className="Config-Change" onClick={()=>this.config_change()}>确认修改</button>
						<button className="Cancel-Change">取消修改</button>
					</div>
				</div>
			)
		}else if(this.choose_change_person_username===true){
			return (
				<div>
					<div className="Person-Info">
						<div className="Pserson-Username-Div">
							<div className="Pserson-Username-Text">用户名：</div>
							<input className="Pserson-Username-Input" name="Pserson-Username-Input"
								   placeholder={localStorage.key(0)}
								   onChange={this.change_user_and_password}
								   value={this.new_username}
							/>
						</div>
						<div className="Pserson-Password-Div">
							<div className="Pserson-Password-Text">原密码：</div>
							<input className="Pserson-Password-Input" name="Pserson-Password-Input"
								   placeholder="当前密码"
								   onChange={this.change_user_and_password}
								   value={this.current_password}
							/>
						</div>
						<div className="Pserson-NewPassword-Div">
							<div className="Pserson-NewPassword-Text">新密码：</div>
							<input className="Pserson-NewPassword-Input" name="Pserson-NewPassword-Input"
								   placeholder="新的密码"
								   onChange={this.change_user_and_password}
								   value={this.new_password}
							/>
						</div>
						<div className="Pserson-Config-NewPassword-Div">
							<div className="Pserson-Config-NewPassword-Text">确认密码：</div>
							<input className="Pserson-Config-NewPassword-Input" name="Pserson-Config-NewPassword-Input"
								   placeholder="确认密码"
								   onChange={this.change_user_and_password}
								   value={this.config_new_password}
							/>
						</div>
						<div className="Person-Username-Change-Button">
							<button className="Username-Config-Change" onClick={()=>this.user_pass_config_change()}>确认修改</button>
							<button className="Username-Cancel-Change">取消修改</button>
						</div>
					</div>
				</div>
			)
		}else if(this.choose_change_person_userimage===true){
			return (
				<div>
					<div className="Person-Info">
						{this.changeImg()}
						{/*<button className="Choose-Pic-Where">从本地选取头像</button>*/}
							<div>
								<input type="file" name='file' ref={this.fileInput} onChange={this.has_changed}/>
								<input type="button" value="上传" onClick={this.handleUpload}/>
							</div>
						<div className="Person-Pic-Change-Button">
							<button className="Pic-Config-Change">确认修改</button>
							<button className="Pic-Cancle-Change">取消修改</button>
						</div>
					</div>
				</div>
			)
		}
	};

	//修改用户简介和签名模块
	change_info=e=>{
		const name=e.target.name;
		if(name==="Person-Info-Input"){
			this.introduce_info=e.target.value;
		}else if(name==="Person-Skill-Input"){
			this.signature_info=e.target.value;
		}
	};

	config_change=()=>{
		if(this.introduce_info.length === 0||this.signature_info.length ===0){
			return(alert("修改信息不能为空，请输入修改内容"));
		}else {
			const info={user_show:this.introduce_info,skill:this.signature_info,user_name:localStorage.key(0)};
			this.props.loginStore.change_info(info)
		}
	};

	//修改账户密码模块
	change_user_and_password=(e)=>{
		const name=e.target.name;
		if(name==="Pserson-Username-Input"){
			this.new_username=e.target.value;
		}else if(name==="Pserson-Password-Input"){
			this.current_password=e.target.value;
		}else if(name==="Pserson-NewPassword-Input"){
			this.new_password=e.target.value;
		}else if(name==="Pserson-Config-NewPassword-Input"){
			this.config_new_password=e.target.value;
		}
	};
	user_pass_config_change=()=>{
		if(this.current_password===0||this.new_password===0||this.config_new_password===0){
			return alert("请填写所有字段");
		}else if(this.current_password!==this.props.storageStore.get(localStorage.key(0))){
			this.current_password=""
			return alert("原密码输入错误,重新输入！！！")
		}else if(this.new_password!==this.config_new_password){
			this.new_password="";
			this.config_new_password="";
			return alert("密码不一致，请重新输入！！！");
		}else {
			//发送请求！！！！
			const user_info={user_name:localStorage.key(0),user_password:this.current_password,new_user_name:this.new_username,new_user_password:this.new_password};
			alert("发送请求中····");
			this.props.loginStore.user_pass_config_change(user_info);
		}
	};

	//图片修改操作
	handleUpload = (e) => {
		e.preventDefault();
		if(!this.fileInput.current.files[0]){
			alert("请先选择文件！")
		}else{
			let file=this.fileInput.current.files[0];
			const formData = new FormData();
			formData.append('user_name',localStorage.key(0));
			formData.append('uploadfile',file);
			console.log(formData.get("uploadfile"));
			this.props.loginStore.post_images(formData);
		}
	};

	//判断是否已经选择了图片
	has_changed=()=>{
		this.is_changed_pic=true;
		this.is_changed_pic_again++;
	};
	//显示选择的图片预览
	changeImg=()=>{
		if(this.is_changed_pic===false&this.is_changed_pic_again===1){
			return <div className="Person-Pic-Div"></div>
		}else {
			let file=this.fileInput.current.files[0];
			try {
				const imgsrc=window.URL.createObjectURL(file);
				return <img id="imghead"src={imgsrc} className="Person-Pic-Div" alt="稍等"/>
			}catch (e) {
				return <div className="Person-Pic-Div"></div>
			}
		}
	};

	//逻辑表现模块
	Change_Introduce=()=>{
		this.choose_change_person_introduce=true;
		this.choose_change_person_username=false;
		this.choose_change_person_userimage=false;
	};
	Change_Username=()=>{
		this.choose_change_person_introduce=false;
		this.choose_change_person_username=true;
		this.choose_change_person_userimage=false;
	};
	Change_User_Img(){
		this.choose_change_person_introduce=false;
		this.choose_change_person_username=false;
		this.choose_change_person_userimage=true;
	}
	my_Skill(){
		if(this.props.loginStore.isLoading===false){
			return this.props.loginStore.CurrentUserSig;
		}else {
			this.props.loginStore.get_my_info(localStorage.key(0));//刷新页面的时候发起请求
		}
	};
	my_introduce=()=>{
		if(this.props.loginStore.isLoading===false){
			return this.props.loginStore.CurrentUserInt;
		}else {
			this.props.loginStore.get_my_info(localStorage.key(0));
		}
	};
	my_Icon=()=>{
		if(this.props.loginStore.isLoading===false){
			console.log("http://47.106.181.241:8081/ssm/images/touxiang/"+this.props.loginStore.CurrentUserImg);
			return ("http://47.106.181.241:8081/ssm/images/touxiang/"+this.props.loginStore.CurrentUserImg);
		}else {
			this.props.loginStore.get_my_info(localStorage.key(0)); //用户刷新页面的时候发请求
		}
	};
	render() {
			return (
				<div className="PersonInfo-Details">
					<div className="Head-Introduce">
						<div className="User-Icon-Div">
							<img className="User-Icon" alt="稍等" src={this.my_Icon()}/>
						</div>
						<div className="My-Name">{localStorage.key(0)}</div>
						<div className="My-Skill">
							<div className="My-Skill-In">我的简介：</div>
							<div className="My-Skill-Details">{this.my_Skill()}</div>
						</div>
						<div className="My-Introduce">
							<div className="My-Introduce-Name">个性签名：</div>
							<div className="My-Introduce-Details">{this.my_introduce()}</div>
						</div>
					</div>
					<div className="Person-Choose">
						<div className="Change-Introduce" onClick={() => this.Change_Introduce()}>
							<div className="Change-Introduce-Div">修改个人简介</div>
						</div>
						<div className="Change-Username-password" onClick={() => this.Change_Username()}>
							<div className="Change-Username-password-Div">修改用户名和密码</div>
						</div>
						<div className="Change-User-Img" onClick={() => this.Change_User_Img()}>
							<div className="Change-User-Img-Div">修改头像</div>
						</div>
					</div>
					{this.change_person_info()}
				</div>
			)
	}
}
export default PersonInfo;