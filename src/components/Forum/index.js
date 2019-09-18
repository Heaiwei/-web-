import React,{Component} from 'react'
import {observer,inject} from "mobx-react";
import {Link} from "react-router-dom";
import "./style.css"

@inject("forumStore")
@observer
class Forum extends Component{
	render() {
		const {match,forumStore}=this.props;
		const forumId = match.params.id;
		const forum = forumStore.getForum(forumId);
		//console.log(forum)
		return(
			<div className="Forum-Details">
				<div className="Forum-Back-Div">
					<Link to={"/home"}>
						<button className="Forum-Back">
							返回
						</button>
					</Link>
				</div>
				<div className="Forum-Details-Div">{forum.content}</div>
			</div>
		)
	}
}
export default Forum;