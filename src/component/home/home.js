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
            tabList:[
              {
                id:1,
                selected: 'main',
                title: '主页',
                tab_icon_bg: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
                tab_selected_bg: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
              },
              {
                id:2,
                selected: 'news',
                title: '资讯',
                tab_icon_bg: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
                tab_selected_bg: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
              },
              {
                id:3,
                selected: 'chat',
                title: '聊天',
                tab_icon_bg: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
                tab_selected_bg: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
              },
              {
                id:4,
                selected: 'mine',
                title: '我的',
                tab_icon_bg: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  21px 21px no-repeat',
                tab_selected_bg: 'url(https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg) center center /  21px 21px no-repeat'
              }
            ]
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
      const tab_List = this.state.tabList
      const tabBarTemplate = tab_List.map((item, i) => {
          return (
            <TabBar.Item
          title={item.title}
          key={i}
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: `${item.tab_icon_bg}` }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: `${item.tab_selected_bg}` }}
          />
          }
          selected={this.state.selectedTab === `${item.selected}`}
          onPress={() => {
            this.setState({
              selectedTab: `${item.selected}`,
            });
          }}
          data-seed={item.id}
        >
          {this.renderContent()}
        </TabBar.Item>
          )
        })
        return (
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
              tabBarPosition="bottom"
            >
            {tabBarTemplate}
            </TabBar>
        )
    }
}

export default Home;
