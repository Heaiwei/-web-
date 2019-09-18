import LoginStore from './LoginStore';
import HeadStore from './HeadStore';
import ForumStore from './ForumStore';
import StorageStore from './StorageStore';
import DocumentStore from './DocumentStore'

import loginApi from "../api/loginApi";
import forumApi from "../api/forumApi";
import documApi from "../api/doucmApi"


const headStore=new HeadStore();
const storageStore=new StorageStore();
const loginStore = new LoginStore(loginApi);
const forumStore=new ForumStore(forumApi);
const documentStore=new DocumentStore(documApi);
const stores = {
    headStore,
    loginStore,
    forumStore,
    storageStore,
    documentStore
};
export default stores;