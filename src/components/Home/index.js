import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {Link} from "react-router-dom";
import {observable} from "mobx";
import LoginNavigation from './LoginNavigation/index'
import Head from './HeadNavigation/Head'
import "./style.css";

@inject("loginStore", "forumStore")
@observer
class Home extends Component {

	render() {
		return (
			<div className="Content">
				<Head/>
				<LoginNavigation/>
				<div className="Forum-Content">
					<div className="Father-content">
						<div className="Forum-Preview">
							<div className="Forum-Preview-Navi">
								<span id="Recommend-Pages">推&nbsp;荐</span>
								<span id="Attention-Pages">关&nbsp;注</span>
								<span id="Hot-Pages">热&nbsp;门</span>
							</div>
							<div className="Forum-Preview-Content">
								<div className="Forum">
									<span className="Forum-Title">SpringBoot环境搭建的常见问题</span>
									<p className="Forum-Matter">spring boot是最近非常流行的，在spring的框架上改进的框架。该框架的目的是为了提高开发人员的速度，降低配置的难度等等，极大了简化了开发流程。具体的详细的说明请参考官方文档。在日常工作中，由于需要搭建一套环境或者框架的机会非常的少，大部分都是在原有的基础上开发，所以当让你搭建一个简单的框架，就会出现各种各样的困难，比如说...</p>
									<div className="Forum-Bottom">
										<div className="Agree-Box">
											<button className="Agree-Img"/>
											<span className="Agree-Num">赞同120</span>
										</div>
										<div className="DisAgree-Box">
											<button className="DisAgree-Img"/>
										</div>
										<div className="Comment-Box">
											<button className="Comment-Img"/>
											<span className="Comment-Num">120条评论</span>
										</div>
										<div className="Share-Box">
											<button className="Share-Img"/>
											<span className="Share-Num">分享</span>
										</div>
										<div className="Collectioon-Box">
											<button className="Collectioon-Img"/>
											<span className="Collectioon-Num">收藏</span>
										</div>
										<div className="Report-Box">
											<button className="Report-Img"/>
											<span className="Report-Num">举报</span>
										</div>
									</div>
								</div>
								<div className="Forum">
									<span className="Forum-Title">SpringBoot环境搭建的常见问题</span>
									<p className="Forum-Matter">spring boot是最近非常流行的，在spring的框架上改进的框架。该框架的目的是为了提高开发人员的速度，降低配置的难度等等，极大了简化了开发流程。具体的详细的说明请参考官方文档。在日常工作中，由于需要搭建一套环境或者框架的机会非常的少，大部分都是在原有的基础上开发，所以当让你搭建一个简单的框架，就会出现各种各样的困难，比如说...</p>
									<div className="Forum-Bottom">
										<div className="Agree-Box">
											<button className="Agree-Img"/>
											<span className="Agree-Num">赞同120</span>
										</div>
										<div className="DisAgree-Box">
											<button className="DisAgree-Img"/>
										</div>
										<div className="Comment-Box">
											<button className="Comment-Img"/>
											<span className="Comment-Num">120条评论</span>
										</div>
										<div className="Share-Box">
											<button className="Share-Img"/>
											<span className="Share-Num">分享</span>
										</div>
										<div className="Collectioon-Box">
											<button className="Collectioon-Img"/>
											<span className="Collectioon-Num">收藏</span>
										</div>
										<div className="Report-Box">
											<button className="Report-Img"/>
											<span className="Report-Num">举报</span>
										</div>
									</div>
								</div>
								<div className="Forum">
									<span className="Forum-Title">SpringBoot环境搭建的常见问题</span>
									<p className="Forum-Matter">spring boot是最近非常流行的，在spring的框架上改进的框架。该框架的目的是为了提高开发人员的速度，降低配置的难度等等，极大了简化了开发流程。具体的详细的说明请参考官方文档。在日常工作中，由于需要搭建一套环境或者框架的机会非常的少，大部分都是在原有的基础上开发，所以当让你搭建一个简单的框架，就会出现各种各样的困难，比如说...</p>
									<div className="Forum-Bottom">
										<div className="Agree-Box">
											<button className="Agree-Img"/>
											<span className="Agree-Num">赞同120</span>
										</div>
										<div className="DisAgree-Box">
											<button className="DisAgree-Img"/>
										</div>
										<div className="Comment-Box">
											<button className="Comment-Img"/>
											<span className="Comment-Num">120条评论</span>
										</div>
										<div className="Share-Box">
											<button className="Share-Img"/>
											<span className="Share-Num">分享</span>
										</div>
										<div className="Collectioon-Box">
											<button className="Collectioon-Img"/>
											<span className="Collectioon-Num">收藏</span>
										</div>
										<div className="Report-Box">
											<button className="Report-Img"/>
											<span className="Report-Num">举报</span>
										</div>
									</div>
								</div>
								<div className="Forum">
									<span className="Forum-Title">SpringBoot环境搭建的常见问题</span>
									<p className="Forum-Matter">spring boot是最近非常流行的，在spring的框架上改进的框架。该框架的目的是为了提高开发人员的速度，降低配置的难度等等，极大了简化了开发流程。具体的详细的说明请参考官方文档。在日常工作中，由于需要搭建一套环境或者框架的机会非常的少，大部分都是在原有的基础上开发，所以当让你搭建一个简单的框架，就会出现各种各样的困难，比如说...</p>
									<div className="Forum-Bottom">
										<div className="Agree-Box">
											<button className="Agree-Img"/>
											<span className="Agree-Num">赞同120</span>
										</div>
										<div className="DisAgree-Box">
											<button className="DisAgree-Img"/>
										</div>
										<div className="Comment-Box">
											<button className="Comment-Img"/>
											<span className="Comment-Num">120条评论</span>
										</div>
										<div className="Share-Box">
											<button className="Share-Img"/>
											<span className="Share-Num">分享</span>
										</div>
										<div className="Collectioon-Box">
											<button className="Collectioon-Img"/>
											<span className="Collectioon-Num">收藏</span>
										</div>
										<div className="Report-Box">
											<button className="Report-Img"/>
											<span className="Report-Num">举报</span>
										</div>
									</div>
								</div>
								<div className="Forum">
									<span className="Forum-Title">SpringBoot环境搭建的常见问题</span>
									<p className="Forum-Matter">spring boot是最近非常流行的，在spring的框架上改进的框架。该框架的目的是为了提高开发人员的速度，降低配置的难度等等，极大了简化了开发流程。具体的详细的说明请参考官方文档。在日常工作中，由于需要搭建一套环境或者框架的机会非常的少，大部分都是在原有的基础上开发，所以当让你搭建一个简单的框架，就会出现各种各样的困难，比如说...</p>
									<div className="Forum-Bottom">
										<div className="Agree-Box">
											<button className="Agree-Img"/>
											<span className="Agree-Num">赞同120</span>
										</div>
										<div className="DisAgree-Box">
											<button className="DisAgree-Img"/>
										</div>
										<div className="Comment-Box">
											<button className="Comment-Img"/>
											<span className="Comment-Num">120条评论</span>
										</div>
										<div className="Share-Box">
											<button className="Share-Img"/>
											<span className="Share-Num">分享</span>
										</div>
										<div className="Collectioon-Box">
											<button className="Collectioon-Img"/>
											<span className="Collectioon-Num">收藏</span>
										</div>
										<div className="Report-Box">
											<button className="Report-Img"/>
											<span className="Report-Num">举报</span>
										</div>
									</div>
								</div>
								<div className="Forum">
									<span className="Forum-Title">SpringBoot环境搭建的常见问题</span>
									<p className="Forum-Matter">spring boot是最近非常流行的，在spring的框架上改进的框架。该框架的目的是为了提高开发人员的速度，降低配置的难度等等，极大了简化了开发流程。具体的详细的说明请参考官方文档。在日常工作中，由于需要搭建一套环境或者框架的机会非常的少，大部分都是在原有的基础上开发，所以当让你搭建一个简单的框架，就会出现各种各样的困难，比如说...</p>
									<div className="Forum-Bottom">
										<div className="Agree-Box">
											<button className="Agree-Img"/>
											<span className="Agree-Num">赞同120</span>
										</div>
										<div className="DisAgree-Box">
											<button className="DisAgree-Img"/>
										</div>
										<div className="Comment-Box">
											<button className="Comment-Img"/>
											<span className="Comment-Num">120条评论</span>
										</div>
										<div className="Share-Box">
											<button className="Share-Img"/>
											<span className="Share-Num">分享</span>
										</div>
										<div className="Collectioon-Box">
											<button className="Collectioon-Img"/>
											<span className="Collectioon-Num">收藏</span>
										</div>
										<div className="Report-Box">
											<button className="Report-Img"/>
											<span className="Report-Num">举报</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="Right-Preview">
							<div className="Person-Preview-Content">
								<div id="photo">
									<img className="img1" src="../img/bg1.jpg" alt=''/>
									<img className="img2" src="../img/bg2.jpg" alt=''/>
									<img className="img3" src="../img/bgp.png" alt=''/>
									<img className="img4" src="../img/bg3.jpg" alt=''/>
									<img className="img5" src="../img/bg1.jpg" alt=''/>
								</div>
							</div>
							<div className="Person-Rec-Attention">
								<span className="Recomment-Attention">推荐关注</span>
								<div className="Change-Box">
									<button className="Change-Img"/>
									<span className="Change-Pages">换一换</span>
								</div>
								<div className="Leaderboard-Box">
									<button className="Leaderboard-Img"/>
									<span className="Leaderboard-Pages">排行榜</span>
								</div>
							</div>
							<div className="Rec-Attention">
								<div className="Recomment-Man">
									<button className="Rec-Per-Img" src="../Icon/Default-Person-Img.png" alt=""/>
									<div className="Rec-Per-Info-Box">
										<p>穿着拖鞋挤地铁</p>
										<p>写了12篇帖子,125人关注</p>
									</div>
									<div className="Rec-Click-Box">
										<button/>
										<span>添加关注</span>
									</div>
									<div className="Ignore-Click-Box">
										<button/>
										<span>忽略此人</span>
									</div>
								</div>
								<div className="Recomment-Man">
									<button className="Rec-Per-Img" src="../Icon/Default-Person-Img.png" alt=""/>
									<div className="Rec-Per-Info-Box">
										<p>穿着拖鞋挤地铁</p>
										<p>写了12篇帖子,125人关注</p>
									</div>
									<div className="Rec-Click-Box">
										<button/>
										<span>添加关注</span>
									</div>
									<div className="Ignore-Click-Box">
										<button/>
										<span>忽略此人</span>
									</div>
								</div>
								<div className="Recomment-Man">
									<button className="Rec-Per-Img" src="../Icon/Default-Person-Img.png" alt=""/>
									<div className="Rec-Per-Info-Box">
										<p>穿着拖鞋挤地铁</p>
										<p>写了12篇帖子,125人关注</p>
									</div>
									<div className="Rec-Click-Box">
										<button/>
										<span>添加关注</span>
									</div>
									<div className="Ignore-Click-Box">
										<button/>
										<span>忽略此人</span>
									</div>
								</div>
								<div className="Recomment-Man">
									<button className="Rec-Per-Img" src="../Icon/Default-Person-Img.png" alt=""/>
									<div className="Rec-Per-Info-Box">
										<p>穿着拖鞋挤地铁</p>
										<p>写了12篇帖子,125人关注</p>
									</div>
									<div className="Rec-Click-Box">
										<button/>
										<span>添加关注</span>
									</div>
									<div className="Ignore-Click-Box">
										<button/>
										<span>忽略此人</span>
									</div>
								</div>
								<div className="Recomment-Man">
									<button className="Rec-Per-Img" src="../Icon/Default-Person-Img.png" alt=""/>
									<div className="Rec-Per-Info-Box">
										<p>穿着拖鞋挤地铁</p>
										<p>写了12篇帖子,125人关注</p>
									</div>
									<div className="Rec-Click-Box">
										<button/>
										<span>添加关注</span>
									</div>
									<div className="Ignore-Click-Box">
										<button/>
										<span>忽略此人</span>
									</div>
								</div>
								<div className="Recomment-Man">
									<button className="Rec-Per-Img" src="../Icon/Default-Person-Img.png" alt=""/>
									<div className="Rec-Per-Info-Box">
										<p>穿着拖鞋挤地铁</p>
										<p>写了12篇帖子,125人关注</p>
									</div>
									<div className="Rec-Click-Box">
										<button/>
										<span>添加关注</span>
									</div>
									<div className="Ignore-Click-Box">
										<button/>
										<span>忽略此人</span>
									</div>
								</div>
								<div className="Recomment-Man">
									<button className="Rec-Per-Img" src="../Icon/Default-Person-Img.png" alt=""/>
									<div className="Rec-Per-Info-Box">
										<p>穿着拖鞋挤地铁</p>
										<p>写了12篇帖子,125人关注</p>
									</div>
									<div className="Rec-Click-Box">
										<button/>
										<span>添加关注</span>
									</div>
									<div className="Ignore-Click-Box">
										<button/>
										<span>忽略此人</span>
									</div>
								</div>
								<div className="Recomment-Man">
									<button className="Rec-Per-Img" src="../Icon/Default-Person-Img.png" alt=""/>
									<div className="Rec-Per-Info-Box">
										<p>穿着拖鞋挤地铁</p>
										<p>写了12篇帖子,125人关注</p>
									</div>
									<div className="Rec-Click-Box">
										<button/>
										<span>添加关注</span>
									</div>
									<div className="Ignore-Click-Box">
										<button/>
										<span>忽略此人</span>
									</div>
								</div>
								<div className="Recomment-Man">
									<button className="Rec-Per-Img" src="../Icon/Default-Person-Img.png" alt=""/>
									<div className="Rec-Per-Info-Box">
										<p>穿着拖鞋挤地铁</p>
										<p>写了12篇帖子,125人关注</p>
									</div>
									<div className="Rec-Click-Box">
										<button/>
										<span>添加关注</span>
									</div>
									<div className="Ignore-Click-Box">
										<button/>
										<span>忽略此人</span>
									</div>
								</div>
								<div className="Recomment-Man">
									<button className="Rec-Per-Img" src="../Icon/Default-Person-Img.png" alt=""/>
									<div className="Rec-Per-Info-Box">
										<p>穿着拖鞋挤地铁</p>
										<p>写了12篇帖子,125人关注</p>
									</div>
									<div className="Rec-Click-Box">
										<button/>
										<span>添加关注</span>
									</div>
									<div className="Ignore-Click-Box">
										<button/>
										<span>忽略此人</span>
									</div>
								</div>
							</div>
							<div className="Filing-Info">
								<p>@CopyRightBy湖南科技大学大数据与人工智能研究室</p>
								<p>侵权举报网上有害信息举报专区</p>
								<p>应用工作申请|开通管理员</p>
								<p>违法和不良信息举报：010-82716601</p>
								<p>联系我们 © 2019 湖南科技大学大数据与人工智能研究室</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;
