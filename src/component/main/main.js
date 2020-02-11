import React from 'react';
import { SearchBar, WhiteSpace, Carousel, WingBlank, Grid  } from 'antd-mobile';

class Main extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            gridList: [
              {
                url:'../../../public/images/01.png',
                title: '二手房'
              },
              {
                url:'../../../public/images/02.png',
                title: '新房'
              },
              {
                url:'../../../public/images/03.png',
                title: '租房'
              },
              {
                url:'../../../public/images/04.png',
                title: '海外'
              },
              {
                url:'../../../public/images/05.png',
                title: '地图找房'
              },
              {
                url:'../../../public/images/06.png',
                title: '查公交'
              },
              {
                url:'../../../public/images/07.png',
                title: '计算器'
              },
              {
                url:'../../../public/images/08.png',
                title: '问答'
              }
            ]
        }
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
    render() {
        const data = this.state.gridList.map((item, i) => ({
            icon: `${item.url}`,
            text: `${item.title}`,
          }));
        return (
            <div>
                <SearchBar placeholder="Search" maxLength={8} />
                <WhiteSpace />
                <WingBlank>
                  <Carousel
                    autoplay={true}
                    infinite
                  >
                    {this.state.data.map(val => (
                      <a
                        key={val}
                        href="http://www.baidu.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                      >
                        <img
                          src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                          alt=""
                          style={{ width: '100%', verticalAlign: 'top' }}
                          onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                          }}
                        />
                      </a>
                    ))}
                  </Carousel>
                </WingBlank>
                <WhiteSpace />
                <WingBlank>
                    <Grid data={data} square={false} className="not-square-grid" />
                </WingBlank>
                
            </div>
        )
    }
}

export default Main;
