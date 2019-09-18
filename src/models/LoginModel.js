import {observable, action} from "mobx";

class LoginModel{
    store;
    id;
    @observable user_name;
    @observable user_password;
    @observable myIntroduction;
    @observable mySkill;
    @observable myImage;

    constructor(store,id,user_name,user_password,myIntroduction,mySkill,myImage){
        this.store = store;
        this.id = id;
        this.user_name = user_name;
        this.user_password = user_password;
        this.myIntroduction=myIntroduction;
        this.mySkill=mySkill;
        this.myImage=myImage;
    }
    //根据json对象更新数据
    @action updateFromJS(json){
        this.user_name = json.user_name;
        this.user_password = json.user_password;
    }

    static fromJS(store,object){
        return new LoginModel(
            store,
            object.id,
            object.user_name,
            object.user_password,
            object.myIntroduction,
            object.mySkill,
            object.myImage
        )
    }

    /*static fromRegistJS(store,object){
        return new LoginModel(
            store,
            object.id,
            object.myUsername,
            object.myPassword
        )
    }*/
}
export default LoginModel;