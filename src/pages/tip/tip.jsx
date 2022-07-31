import { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton, AtCard } from 'taro-ui'

// 按需引入 Taro UI
import 'taro-ui/dist/style/components/card.scss'
import 'taro-ui/dist/style/components/button.scss'
import './tip.scss'

export default class Tip extends Component {

    componentWillMount() {
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        let that = this
        Taro.request({
            url: 'http://127.0.0.1:18094/card',
            success: function (res) {
                // 将返回的 JSON 数组赋值给 state 中的 list
                that.setState({ list: res.data })
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
        const list = this.state.list
        const AtCardList = []
        for (let i = 0; i < list.length; i++) {
            AtCardList.push(
                <AtCard title={list[i].title} extra={list[i].extra} note={list[i].tip}>
                    {list[i].content}
                </AtCard>
            )
        }
        return (
            <View>
                <View>
                    {AtCardList}
                </View>
                <View style="margin-top:20px;">
                    <AtButton>Add Tip</AtButton>
                </View>
            </View>
        )
    }
}
