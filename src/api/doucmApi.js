import { post ,get} from '../utils/request'
import url from '../utils/url';

export default {
	getalldocum:getalldocum=>post(url.get_all_docum(),getalldocum), //获得总的页码数目
	get_doc_info:getdocinfo=>post(url.get_doc_info(),getdocinfo),   //获得当前页面的数据

	get_type_name:()=>get(url.get_type_name()),   //获得所有文档分类

	get_Document_info:get_document_info=>post(url.get_document_info(),get_document_info), //获得文档详情

	get_Download_doc:(fileUrl)=>get(url.get_download_doc(fileUrl)),    //下载文档
}