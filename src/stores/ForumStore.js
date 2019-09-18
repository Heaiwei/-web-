import { observable, action} from "mobx";
import ForumModel from "../models/ForumModel"

class ForumStore{
	api;
	@observable forum=[];

	constructor(api){
		this.api = api;
	}

	@action getForum(id){
		if(this.forum.length===0){
			return this.api.findAllForumList().then(
				action(data=>{
					if(!data.error){
						this.forum.clear();
						data.forEach(item=>this.forum.push(ForumModel.fromJS(this,item)));
						return Promise.resolve();
					}
				})
			)
			//console.log("测试请求，长度："+this.forum.length);
			//return this.forum.find(item=>item.id == id);
		}
			//return this.forum.find(item=>item.id == id);
	}

	@action getForumList(){
		return this.api.findAllForumList().then(
			action(data=>{
				if(!data.error){
					//console.log(data);
					this.forum.clear();
					data.forEach(item=>this.forum.push(ForumModel.fromJS(this,item)));
					//console.log(this.forum.find(()=>1).Reply.length);
					return Promise.resolve();
				}
			})
		)
	}


}
export default ForumStore;