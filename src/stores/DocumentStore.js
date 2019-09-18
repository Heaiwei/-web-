import { observable, action } from "mobx";

class DocumentStore {
	api;
	constructor(api){
		this.api = api;
	}

	@observable DocumentLoading=true; //判断获取总条数的异步请求是否完成,true表示没有完成
	@observable DocumentItemLoading=true;  //判断请求当前页面8条数据的请求是否完成
	@observable DocumentDocisLoading=true;  //判断当前文档详细请求是否完成
	@observable DocumentDetails;     //文档详细内容

	@observable CurrentAllDocumItem=12;  //记录当前获取的条目总数

	@observable CurrentDocumentItem=[];     //当前获取到的8条文件，是一个json对象数组。

	@observable CurrentTypeName=[];      //当前列表的类型名数组

	//获取查询的数据
	@action search_info(doc_info){
		return this.api.get_doc_info(doc_info).then(
			action(data=>{
				if(!data.error){
					this.DocumentItemLoading=false;
					this.CurrentDocumentItem=data;
					//console.log(data);
					return Promise.resolve();
				}else {
					return Promise.reject();
				}
			})
		)
	}

	//获取typeName
	@action get_type_name(){
		return this.api.get_type_name().then(
			action(data=>{
				if(!data.error){
					this.CurrentTypeName=data;
					//console.log(this.CurrentTypeName);
					return Promise.resolve();
				}else {
					return Promise.reject();
				}
			})
		)
	}

	//获取下载界面详细内容
	@action get_Docum_info(documentId){
		return this.api.get_Document_info(documentId).then(
			action(data=>{
				if(!data.error){
					this.DocumentDocisLoading=false;
					this.DocumentDetails=data;
					console.log(this.DocumentDetails);
					return Promise.resolve();
				}else {
					return Promise.reject();
				}
			})
		)
	}

	//下载当前文件
	@action get_download_doc(documentId){
		return this.api.get_Download_doc(documentId).then(
			action(data=>{
				if(!data.error){
					console.log("hello"+data);
					return Promise.resolve();
				}else {
					return Promise.reject();
				}
			})
		)
	}

	//获取当前查询的总条数，默认为查询所有条目
	@action getAllDocum(documitem){
		return this.api.getalldocum(documitem).then(
			action(data=>{
				if(!data.error){
					this.DocumentLoading=false;
					console.log(data.fileNumber);
					this.CurrentAllDocumItem=(data.fileNumber+8-1)/8;
					if(this.CurrentAllDocumItem<1){
						this.CurrentAllDocumItem=1;
					}
					console.log("new state"+this.CurrentAllDocumItem);
					return Promise.resolve();
				}else {
					return Promise.reject();
				}
			})
		)
	}
}
export default DocumentStore;