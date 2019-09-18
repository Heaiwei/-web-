import { post ,imgpost} from '../utils/request'
import url from '../utils/url';

export default {
    login: login=>post(url.login(),login), //用户登录
    addUser:addUser=>post(url.addUser(),addUser),

    get_info:myinfo=>post(url.get_info(),myinfo), //获取用户所有信息

    changeinfo:info=>post(url.changeinfo(),info),  //修改用户描述

    change_user_and_pass:info=>post(url.change_user_and_pass(),info), //修改用户名和密码

    post_images:(data)=>imgpost(url.post_images(),data)
}