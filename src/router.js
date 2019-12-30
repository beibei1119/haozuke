import React from "react";
import Login from "./component/login/login"
import Home from "./component/home/home"
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";

class routerCom extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Redirect to="/login" />
                </Switch>
            </Router>
        )
    }
}
export default routerCom