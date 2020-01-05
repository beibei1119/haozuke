import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import './home.css'
import { TabBar } from 'antd-mobile';
import Mine from '../mine/mine';
import Main from '../main/main';
import Chat from '../chat/chat';
import News from '../news/news';

class Home extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            selectedTab: 'main',
            hidden: false,
          };
    }
    renderContent() {
      const swithcTab = this.state.selectedTab;
      switch(swithcTab) {
        case 'main': 
          return <Main />
          break;
        case 'news':
          return <News />
          break;
        case 'chat':
          return <Chat />
          break;
        case 'mine':
          return <Mine />
          break
        default:
          break;
      }
      }
    render() {
        return (
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
              tabBarPosition="bottom"
            >
              <TabBar.Item
                title="Life"
                key="Life"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selected={this.state.selectedTab === 'main'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'main',
                  });
                }}
                data-seed="logId"
              >
                {this.renderContent()}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="Koubei"
                key="Koubei"
                selected={this.state.selectedTab === 'news'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'news',
                  });
                }}
                data-seed="logId1"
              >
                {this.renderContent()}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="Friend"
                key="Friend"
                selected={this.state.selectedTab === 'chat'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'chat',
                  });
                }}
              >
                {this.renderContent()}
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="My"
                key="my"
                selected={this.state.selectedTab === 'mine'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'mine',
                  });
                }}
              >
                {this.renderContent()}
              </TabBar.Item>
            </TabBar>
        )
    }
}

export default Home;
