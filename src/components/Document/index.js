import React,{Component} from 'react';
import {observer,inject} from "mobx-react";
import "./style.css"
import Pagination from './Pagination/index';
import {Link} from "react-router-dom";
import {observable} from "mobx";

@inject("documentStore")
@observer
class Document extends Component{
	componentDidMount() {
		//console.log(this.selectvalue);
		const currentitem={typeName:null,file_key:0,file_select:""};
		this.props.documentStore.getAllDocum(currentitem);
		this.props.documentStore.get_type_name();
	};

	@observable selectvalue;
	@observable hasclick=false;
	@observable currentPage=1;  //当前页
	@observable input_value="";  //当前输入值
	@observable search_click_times=0; //记录搜索按钮被点击的次数
	@observable currentTypeName=null;   //记录当前的类型名

	show_docum=()=>{
		if(this.props.documentStore.DocumentLoading){
			return null;
		}else {
			//console.log("undefined" === typeof this.selectvalue);//判断当前是否选择选择器
			return this.props.documentStore.CurrentDocumentItem.map(item=>(
				<div className="Document-Info" key={item.fileId} >
					<div className="Head-Content">
						<Link key={item.fileId} to={`/documentManage/${item.fileId}`}>
							<span className="Docum-Name">文档名:<strong>{item.fileName}</strong></span>
						</Link>
						<span className="Docum-Intro">简介:{item.fileShow}</span>
						<span className="Docum-Time">上传时间:{item.fileTime}</span>
					</div>
					<div className="Foot-Content">
						<span className="Docum-Size">文件大小:{item.volume}</span>
						<span className="Docum-Username">上传者:<strong>{item.userName}</strong></span>
						<span className="Docum-Down">下载次数:</span>
					</div>
				</div>
			))
		}
	};
	show_pagination=()=>{
		if(this.props.documentStore.DocumentLoading) {
			return null;
		}else{
			console.log("已搜索次数："+this.search_click_times);
			return <Pagination pageCallbackFn={this.getCurrentPage} pageConfig={this.props.documentStore.CurrentAllDocumItem} pageChange={this.currentPage}/>
		}
	};

	getCurrentPage=(currentPage)=>{
		if(currentPage!=null){
			this.currentPage=currentPage;
			//console.log(this.currentPage);
		}
		if(this.search_click_times===0){
			const docum_info={typeName:this.currentTypeName,currentPage:currentPage,pageSize:8,file_key:0,file_select:this.input_value};
			this.props.documentStore.search_info(docum_info);
		}else {
			if("undefined" === typeof this.selectvalue){
				const docum_info={typeName:this.currentTypeName,currentPage:this.currentPage,pageSize:8,file_key:1,file_select:this.input_value};
				const currentitem={typeName:this.currentTypeName,file_key:1,file_select:this.input_value};
				this.props.documentStore.getAllDocum(currentitem);
				this.props.documentStore.search_info(docum_info);
			}else if("undefined" !== typeof this.selectvalue){
				if(this.selectvalue==="文档名"){
					const docum_info={typeName:this.currentTypeName,currentPage:this.currentPage,pageSize:8,file_key:1,file_select:this.input_value};
					const currentitem={typeName:this.currentTypeName,file_key:1,file_select:this.input_value};
					this.props.documentStore.getAllDocum(currentitem);
					this.props.documentStore.search_info(docum_info);
				}else if(this.selectvalue==="上传者"){
					const docum_info={typeName:this.currentTypeName,currentPage:this.currentPage,pageSize:8,file_key:2,file_select:this.input_value};
					const currentitem={typeName:this.currentTypeName,file_key:2,file_select:this.input_value};
					this.props.documentStore.getAllDocum(currentitem);
					this.props.documentStore.search_info(docum_info);
				}
			}
		}
		return currentPage;
	};

	change_value=(e)=>{
		this.selectvalue=e.target.value;
	};
	has_change=()=>{
		this.hasclick=true;
	};
	get_input_value=(e)=>{
		this.input_value=e.target.value;
	};
	//查询
	search_info=()=>{
		this.search_click_times=this.search_click_times+1;
		this.currentPage=1;
		if(this.hasclick===false){
			const docum_info={typeName:this.currentTypeName,currentPage:this.currentPage,pageSize:8,file_key:1,file_select:this.input_value};
			const currentitem={typeName:this.currentTypeName,file_key:1,file_select:this.input_value};
			this.props.documentStore.getAllDocum(currentitem);
			this.props.documentStore.search_info(docum_info);
		}else if("undefined" === typeof this.selectvalue){
			const docum_info={typeName:this.currentTypeName,currentPage:this.currentPage,pageSize:8,file_key:1,file_select:this.input_value};
			const currentitem={typeName:this.currentTypeName,file_key:1,file_select:this.input_value};
			this.props.documentStore.getAllDocum(currentitem);
			this.props.documentStore.search_info(docum_info);
		}else if("undefined" !== typeof this.selectvalue){
			if(this.selectvalue==="文档名"){
				const docum_info={typeName:this.currentTypeName,currentPage:this.currentPage,pageSize:8,file_key:1,file_select:this.input_value};
				const currentitem={typeName:this.currentTypeName,file_key:1,file_select:this.input_value};
				this.props.documentStore.getAllDocum(currentitem);
				this.props.documentStore.search_info(docum_info);
			}else if(this.selectvalue==="上传者"){
				const docum_info={typeName:this.currentTypeName,currentPage:this.currentPage,pageSize:8,file_key:2,file_select:this.input_value};
				const currentitem={typeName:this.currentTypeName,file_key:2,file_select:this.input_value};
				this.props.documentStore.getAllDocum(currentitem);
				this.props.documentStore.search_info(docum_info);
			}
		}
	};
	get_type_name=()=>{
		return this.props.documentStore.CurrentTypeName.map(item=>(
				<a className="Choose-Tips" key={item.typeName} onClick={()=>this.choose_tips(item.typeName)}><span >{item.typeName}</span></a>
		))
	};
	choose_tips=(typename)=>{
		this.currentTypeName=typename;
		const docum_info={typeName:typename,currentPage:1,pageSize:8,file_key:0,file_select:""};
		const currentitem={typeName:typename,file_key:0,file_select:this.input_value};
		this.props.documentStore.getAllDocum(currentitem);
		this.props.documentStore.search_info(docum_info);
		//alert("功能开发中····")
	};
	choose_all=()=>{
		this.currentTypeName=null;
		const docum_info={typeName:this.currentTypeName,currentPage:1,pageSize:8,file_key:0,file_select:""};
		const currentitem={typeName:this.currentTypeName,file_key:0,file_select:this.input_value};
		this.props.documentStore.getAllDocum(currentitem);
		this.props.documentStore.search_info(docum_info);
		//alert("功能开发中····")
	};
	render() {
		//this.currentPage_changed(this.currentPage);
			return (
				<div className="Document-Details">
					<div className="Document-Border">
						<div className="Search-Navi">
							<span className="Search-Tips">提示:请根据文档名或者上传者搜索</span>
							<select className="Select-Search" value={this.selectvalue} onChange={this.change_value} onClick={this.has_change}>
								<option value="文档名">文档名</option>
								<option value="上传者">上传者</option>
							</select>
							<input className="Start-Search" type="text" value={this.input_value} onChange={this.get_input_value}></input>
							<button className="Search-Button" onClick={()=>this.search_info()}>点击搜索</button>
						</div>
						<div className="Docum-class">
							<span className="Search-Tips">文档分类:</span>
							<span className="Choose-Tips" onClick={()=>this.choose_all()}>全部</span>
							{this.get_type_name()}
						</div>
						<div className="Show-Docum">
							{this.show_docum()}
						</div>
						<div className="Docum-Pagination">
							{this.show_pagination()}
						</div>
					</div>
				</div>
			)
		}
}
export default Document;