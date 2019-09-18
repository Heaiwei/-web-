import {observable} from "mobx";

class ForumModel{
	store;
	id;
	@observable myUsername;
	@observable time;
	@observable title;
	@observable content;
	@observable details;
	@observable Reply;
	
	constructor(store,id,myUsername,time,title,content,details,Reply){
		this.store = store;
		this.id = id;
		this.myUsername = myUsername;
		this.time=time;
		this.title=title;
		this.content=content;
		this.details=details;
		this.Reply=Reply;
	}

	static fromJS(store,object){
		return new ForumModel(
			store,
			object.id,
			object.myUsername,
			object.time,
			object.title,
			object.content,
			object.details,
			object.Reply
		)
	}
}
export default ForumModel;