import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { AtList, AtListItem } from 'taro-ui'

// 按需引入 Taro UI
import "taro-ui/dist/style/components/article.scss";
import "taro-ui/dist/style/components/list.scss";
import './detail.scss'

export default class Detail extends Component {

  componentWillMount() {
    this.state = {
      data: {
        Command: "",
        Usage: "",
        Params: []
      }
    }
  }

  componentDidMount() {
    let that = this;
    let cmd = getCurrentInstance().router.params.cmd;
    // 获取命令详情
    Taro.request({
      url: "http://127.0.0.1:18091/note/command/one/" + cmd,
      success: function (res) {
        that.setState({data: res.data});
      }
    })
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    const data = this.state.data;
    return (
      <View className='at-article'>
        <View className='at-article__h1'>
          {data.Command}
        </View>
        <View className='at-article__info'>
          {data.Usage}
        </View>
        <View className='at-article__info'>
          <AtList>
            {
              data.Params.map(
                item => <AtListItem title={`${item.Param} : ${item.Description}`}></AtListItem>
              )
            }
          </AtList>
        </View>
      </View>
    )
  }
}