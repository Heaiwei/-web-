//定义一个提供登录状态存储在本地的模块
import {action} from "mobx";

class Storage{
	@action
	set(key,value){
		localStorage.setItem(key,JSON.stringify(value));
	};
	@action
	get(key){
		return JSON.parse(localStorage.getItem(key));
	};
	@action
	remove(key){
		localStorage.removeItem(key)
	}
};
export default Storage;