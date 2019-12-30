import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import './login.css'
import { NavBar, Flex, WhiteSpace, List, InputItem, WingBlank, Button, Toast } from 'antd-mobile';

class Login extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            uname: '',
            pwd: ''
        }
    }
    changeValue = (k, v) => {
        this.setState({
            [k] : v
        })
    }
    logIn = () => {
        var {history} = this.props
        if(this.state.uname && this.state.pwd) {
            if(this.state.uname !== 'admin' || this.state.pwd !== '123456') {
                Toast.fail('账号或密码错误 !!!', 1.5);
            } else {
                Toast.success('登录成功 !!!', 1, history.push("/"));
            }
        } else {
            Toast.fail('账号或密码不能为空 !!!', 1.5);
        }
        
    }
    render() {
        return (
            <Flex direction='column'>
            <Flex.Item>
                <WhiteSpace size="xs" />
                <WingBlank>
                    <NavBar mode="dark">登录</NavBar>
                </WingBlank>
            </Flex.Item>
            <Flex.Item>
                <WhiteSpace size="xs" />
                <WingBlank>
                    <List>
                        <InputItem clear onChange={(v) => {this.changeValue('uname', v)}} value={this.state.uname}>账号</InputItem>
                        <InputItem clear onChange={(v) => {this.changeValue('pwd', v)}} value={this.state.pwd}>密码</InputItem>
                        <Button onClick={this.logIn} type="primary">登录</Button><WhiteSpace />
                    </List>
                </WingBlank>
            </Flex.Item>
          </Flex>
        )
    }
}

export default Login;
