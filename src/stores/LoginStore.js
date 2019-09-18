import { observable, action } from "mobx";

class LoginStore{
    api;

    @observable status=false;  //判断是否登录，若用户名和密码都正确则将其状态设置为true。

    @observable isRegist=false; //判断是否注册成功；

    @observable CurrentUserImg=null;  //记录当前登录的用户头像；
    @observable CurrentUserInt=null;  //记录当前登录的用户简介；
    @observable CurrentUserSig=null;  //记录当前登录的用户签名；


    @observable isLoading=true;

    @observable loginTip = false;

    constructor(api){
        this.api = api;
    }

    //判断登录成功与否
    @action isAdmin(login){
        return this.api.login(login).then(
            action(data => {
                if (!data.error) {
                    if(data.power!=="失败"){
                        return this.status=true;
                    }else {
                        this.status=false;
                    }
                    if(this.status===false){
                        this.loginTip = true
                    }
                    console.log(data)
                    return Promise.resolve();
                } else {
                    return Promise.reject();
                }
            })
        );
    }
    //判断注册成功与否
    @action regist(user_name,user_password,configpassword){
        const regist={user_name:user_name,user_password:user_password}
        return this.api.addUser(regist).then(
            action(data => {
                if (!data.error) {
                    if (data.key === true) {
                        this.isRegist = true;
                        return alert("恭喜你，注册成功，请点击确认进行登录");
                    } else {
                        return alert("注册失败！,该用户已经注册");
                    }
                    //return Promise.resolve()
                } else {
                    return Promise.reject();
                }
            })
        )
    }

    //开始编写个人中心相关action 2019/8/7
    //获取当前登录用户的所有信息
    @action get_my_info(user_name){
        const myinfo={user_name:user_name};
        return this.api.get_info( myinfo).then(
            action(data => {
            if (!data.error) {
                //console.log(data);
                this.isLoading=false;
                this.CurrentUserImg=data.image;
                this.CurrentUserInt=data.user_show;
                this.CurrentUserSig=data.skill;
                //console.log(data);
                return Promise.resolve();
            } else {
                console.log("网络请求失败")
                return Promise.reject();
            }
        }))
    }
    //修改简介和签名
	@action change_info(info){
		return this.api.changeinfo(info).then(
			action(data => {
				if (!data.error) {
					//console.log("27367");
					if(data.key){
					    alert("简介和签名修改成功")
                    }else {
					    alert("修改失败，请检查是否未填写信息")
                    }
					return Promise.resolve();
				} else {
					return Promise.reject();
				}
			})
		)
	};
    //修改用户名和密码
    @action
    user_pass_config_change(info){
        return this.api.change_user_and_pass(info).then(
            action(data=>{
                if(!data.error){
                    if(data.key===0){
                        alert("新用户名重复，请重新输入");
                    }else if(data.key===1){
                        alert("原密码错误，请重新输入")
                    }else if(data.key===2){
                        alert("修改失败！！！")
                    }else if (data.key===3){
                        alert("修改成功！")
                    }
                    return Promise.resolve();
                }else {
                    return Promise.reject();
                }
            })
        )
    }

    //修改头像 8/10 finished
    post_images(formdata){
        return this.api.post_images(formdata).then(
            action(data=>{
                if(!data.error){
                    alert("图片上传成功！")
                    return Promise.resolve();
                }else {
                    return Promise.reject();
                }
            })
        )
    }
}
export default LoginStore;