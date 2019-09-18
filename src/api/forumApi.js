import { get } from '../utils/request'
import url from '../utils/url';

export default {
	findAllForumList: ()=>get(url.findAllForumList()),
}