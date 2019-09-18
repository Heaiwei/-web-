import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { observer,inject } from "mobx-react";
//用户信息界面
// import Head from "../Common/Head/head";
// import Foot from '../Common/Foot/index';
import Login from "../Login";
import Regist from '../Regist';
import Home from '../Home';
import PersonInfo from '../PersonInfo';

//论坛界面
import Forum from '../Forum/index';

//文档信息界面
import Document from '../Document';
import DocumentManage from '../DocumentManage'

@inject("loginStore")
@observer
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        {/*<Head/>*/}
                        <Switch>
                            {/*用户信息路由*/}
                            <Route exact path="/" component={Login}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/regist" component={Regist}/>
                            <Route path="/personInfo" component={PersonInfo}/>

                            {/*论坛相关路由*/}
                            <Route path={`/forum/:id`} component={Forum}/>

                            {/*文档相关路由*/}
                            <Route path="/document" component={Document}/>
                            <Route path={`/documentManage/:fileId`} component={DocumentManage}/>
                        </Switch>
                    </div>
                </Router>
                {/*<Foot/>*/}
            </div>
        );
    }
}

export default App;