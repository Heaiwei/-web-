import {observable,action} from "mobx";

class HeadStore{
	@observable onAboutTouch=false;
	@observable onDownTouch=false;
	@observable onPostTouch=false;

	@action mouseOnAboutItem(onAboutTouch){
		this.onAboutTouch=onAboutTouch
	};
	@action mouseOnDownItem(onDownTouch){
		this.onDownTouch=onDownTouch
	};
	@action mouseOnPostItem(onPostTouch){
		this.onPostTouch=onPostTouch
	};

}
export default HeadStore;