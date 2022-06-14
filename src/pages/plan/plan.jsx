import { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtTimeline } from 'taro-ui'

// 按需引入 Taro UI
import 'taro-ui/dist/style/components/timeline.scss'
import 'taro-ui/dist/style/components/icon.scss'
import './plan.scss'

export default class Plan extends Component {

    componentWillMount() {
        this.state = {}
    }

    componentDidMount() {
        let that = this
        Taro.request({
            url: 'http://127.0.0.1:18092/plan',
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
        return (
            <View style="margin-top:20px; margin-left:80px; margin-right:80px;">
                <AtTimeline
                    items={list}
                    customStyle={{ transformOrigin: 'top', transform: 'scale(1.4)' }}
                />
            </View>
        )
    }
}
