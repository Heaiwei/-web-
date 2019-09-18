import React,{Component} from 'react'
import {observer,inject} from "mobx-react";
import {observable} from "mobx";
import './style.css';

@inject("documentStore")
@observer
class DocumentManage extends Component{
	componentDidMount() {
		const {match,documentStore}=this.props;
		this.currentDocId=match.params.fileId;
		//const get_docum_Id ={file_id:match.params.fileId};
		const get_docum_Id={currentPage:1,pageSize:8,file_name:"werytuyi"}
		this.props.documentStore.get_Docum_info(get_docum_Id);
	}

	@observable currentDocId; //获得当前文档ID

	@observable showDocDownload=true;
	@observable showDocUpload=false;
	@observable showDocResource=false;
	@observable showDocCheck=false;
	/*document_Icon=()=>{
		if(this.props.loginStore.isLoading===false){
			return ("/images/touxiang/"+this.props.loginStore.CurrentUserImg);
		}else {
			this.props.loginStore.get_my_info(localStorage.key(0));
		}
	};*/
	//文档下载接口，有问题待解决：现在改为a标签下载
	/*download_doc=()=>{
		//获取fileUrl
		if(this.props.documentStore.DocumentDocisLoading){
			return null;
		}else {
			this.props.documentStore.DocumentDetails.fileUrl;
			console.log(this.props.documentStore.DocumentDetails.fileUrl);
			this.props.documentStore.get_download_doc(this.props.documentStore.DocumentDetails.fileUrl)
		}
	};*/
	get_my_resource_detail=()=>{
		if(this.showDocDownload){
			if(this.props.documentStore.DocumentDocisLoading){
				console.log("123");
				return null;
			}else {
				return (
					<div className="Doc-Manage-Change-Content">
						<div className="Doc-Manage-Details">
							<p className="info">文档名：{this.props.documentStore.DocumentDetails.fileName}</p>
							<p className="info">文档大小：{this.props.documentStore.DocumentDetails.volume}</p>
							<p className="info">上传时间：{this.props.documentStore.DocumentDetails.fileTime}</p>
							<p className="info">上传者：{this.props.documentStore.DocumentDetails.userName}</p>
							<p className="info">下载次数：{this.props.documentStore.DocumentDetails.number}</p>
						</div>
						<div className="Doc-Manage-Pic">
							{/*<img className="Document-Icon" alt="稍等" src={this.document_Icon()}/>*/}
						</div>
						<div className="Doc-Manage-About">
							<div className="Docum-Use-Info">文件描述：{this.props.documentStore.DocumentDetails.detailed}</div>
						</div>
						<div className="Config-Button-Div">
							<a className="Config-Button" href={"http://www.hawlover.club:8080/ssm/file/fileDownload?fileUrl="+this.props.documentStore.DocumentDetails.fileUrl}>确认下载</a>
						</div>
					</div>
				)
			}
		} else if (this.showDocUpload) {
			return (
				<div className="Doc-Manage-Change-Content">
					<div className="Doc-Manage-Doc-Upload">
						<div className="Doc-Manage-Doc-Upload-Info-And-Pic">
							<div className="Doc-Manage-Doc-Upload-Info">
								<p className="Doc-Manage-Upload-Man">上传者:</p>
								<p className="Doc-Manage-Upload-Introduce">文档简介:</p>
								<select className="Doc-Manage-Select">
									<option value="666">666</option>
									<option value="Java">Java</option>
									<option value="前端">前端</option>
									<option value="Python">Python</option>
								</select>
							</div>
							<div className="Doc-Manage-Doc-Upload-Pic-Div">
								<div className="Doc-Manage-Doc-Upload-Pic" >

								</div>
							</div>
						</div>
						<div className="Doc-Manage-Doc-description"></div>
						{/*<div>确认上传</div>
						<div>取消上传</div>*/}
					</div>
				</div>
			)
		} else if (this.showDocResource) {
			return (
				<div className="Doc-Manage-Change-Content">
					<div>文档资源</div>
				</div>
			)
		}else if(this.showDocCheck){
			return (
				<div className="Doc-Manage-Change-Content">
					<div>文档审核</div>
				</div>
			)
		}
	};
	//点击item时改变状态函数
	change_doc_down=()=>{
		this.showDocDownload=true;
		this.showDocUpload=false;
		this.showDocResource=false;
		this.showDocCheck=false
	};
	change_doc_upload=()=>{
		this.showDocDownload=false;
		this.showDocUpload=true;
		this.showDocResource=false;
		this.showDocCheck=false
	};
	change_doc_res=()=>{
		this.showDocDownload=false;
		this.showDocUpload=false;
		this.showDocResource=true;
		this.showDocCheck=false;
	};
	change_doc_check=()=>{
		this.showDocDownload=false;
		this.showDocUpload=false;
		this.showDocResource=false;
		this.showDocCheck=true;
	};
	render() {
			return(
				<div className="DocumentManage-Details">
					<div className="Doc-Manage-Content">
						<div className="Doc-Manage-Navi">
							<a className="Doc-Manage-Info" onClick={()=>this.change_doc_down()}><span>文档下载</span></a>
							<a className="Doc-Manage-Info" onClick={()=>this.change_doc_upload()}><span>文档上传</span></a>
							<a className="Doc-Manage-Info" onClick={()=>this.change_doc_res()}><span>我的资源</span></a>
							<a className="Doc-Manage-Info" onClick={()=>this.change_doc_check()}><span>文档审核</span></a>
						</div>
						{this.get_my_resource_detail()}
					</div>
				</div>
			)
	}
}
export default DocumentManage;