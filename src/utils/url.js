const BASE = "http://47.106.181.241:8081/ssm";
//http://gzs.free.idcfengye.com/ssm
//http://localhost:8081/ssm
//http://www.hawlover.club:8081/ssm
//http://47.106.181.241:8081

export default {


    //用户信息接口
    addUser:()=>BASE + "/register",     //注册用户接口
    login:()=>BASE +"/login",          //用户登录接口
    get_info:()=>BASE +"/person",    //获取用户所有信息
    changeinfo:()=>BASE +"/person/skill",  //用户简介和签名接口
    change_user_and_pass:()=>BASE +"/person/password", //用户修改密码和用户名接口
    post_images:()=>BASE +"/person/touxiang",        //用户上传头像

    //论坛接口
    findAllForumList:()=>BASE +"/Forum",

    //文档接口
    get_all_docum:()=>BASE +"/file/select/fileNumber",

    get_doc_info:()=>BASE + "/file/select",
    get_type_name:()=>BASE +"/file/selectType",
    get_document_info:()=>BASE +"/file/download",
    get_download_doc:(fileUrl)=>`/file/fileDownload?fileUrl=${fileUrl}`,
}