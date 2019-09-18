import React,{Component} from 'react'
import {observer} from "mobx-react";
import {Link} from "react-router-dom";
import './style.css'

@observer
class ForumNavigation extends Component {
	render() {
		const {Itemforum} = this.props;
		//console.log(Itemforum.title)
		return (
			<div className="Introduce">
				<Link key={Itemforum.id} to={`/forum/${Itemforum.id}`}>
					<div className="Forum-Title">{Itemforum.title}</div>
				</Link>
				<div className="Forum-Name">{Itemforum.myUsername}</div>
				<div className="Forum-Time">{Itemforum.time}</div>
				<div className="Forum-Info">{Itemforum.content}</div>
				<div className="Forum-Index">
					<div className="Forum-Watch">></div>
					<Link key={Itemforum.id} to={`/forum/${Itemforum.id}`}>
						<div className="Watch-More">点击查看更多</div>
					</Link>
					<div className="Reply-Times-Icon"></div>
					<div className="Reply-Times">{Itemforum.Reply.length}人回复</div>
					<div className="Watch-Times-Icon"></div>
					<div className="Watch_Times">{Itemforum.Reply.length}人看过</div>
				</div>
			</div>
		)
	}
}
export default ForumNavigation;