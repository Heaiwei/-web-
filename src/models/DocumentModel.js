import {observable} from "mobx";

class DocumentModel {
	store;
	fileId;
	@observable fileName;  //文档名
	@observable fileShow;  //文档简介
	@observable fileTime;  //上传时间;
	@observable volume;    //文档大小
	@observable userName;  //上传者
	@observable state;     //文档状态，分为待审核，已通过，未通过

	constructor(store,fileId,fileName,fileShow,fileTime,volume,userName,state){
		this.store = store;
		this.fileId = fileId;
		this.fileName = fileName;
		this.fileShow = fileShow;
		this.fileTime = fileTime;
		this.volume=volume;
		this.userName=userName;
		this.state=state;
	}
	static fromJS(store,object){
		return new DocumentModel(
			store,
			object.fileId,
			object.fileName,
			object.fileShow,
			object.fileTime,
			object.volume,
			object.userName,
			object.state
		)
	}
}
export default DocumentModel;