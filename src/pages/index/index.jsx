import { Component } from 'react'
import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtGrid, AtProgress } from 'taro-ui'

// 按需引入 Taro UI
import 'taro-ui/dist/style/components/grid.scss'
import 'taro-ui/dist/style/components/progress.scss'
import 'taro-ui/dist/style/components/icon.scss'
import './index.scss'

export default class Index extends Component {

    componentWillMount() {
        this.state = {}
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    onClick(e) {
        // 根据点击的栅格跳转到对应的页面
        Taro.navigateTo({
            url: e.url
        })
    }

    render() {
        return (
            <View>
                <AtGrid mode="square" hasBorder={false} onClick={this.onClick.bind(this)} columnNum={2} data={
                    [
                        {
                            iconInfo: { 'value': 'at-icon at-icon-bullet-list', 'size': 60, 'color': '#AB15FF' },
                            value: 'Command',
                            url: '/pages/command/command'
                        },
                        {
                            iconInfo: { 'value': 'at-icon at-icon-search', 'size': 60, 'color': '#6190E8' },
                            value: 'Search',
                            url: '/pages/search/search'
                        },
                        {
                            iconInfo: { 'value': 'at-icon at-icon-bell', 'size': 60, 'color': '#E93B3D' },
                            value: 'Plan',
                            url: '/pages/plan/plan'
                        },
                        {
                            iconInfo: { 'value': 'at-icon at-icon-tag', 'size': 60, 'color': '#FFC701' },
                            value: 'Tip',
                            url: '/pages/tip/tip'
                        },
                        {
                            iconInfo: { 'value': 'at-icon at-icon-message', 'size': 60, 'color': '#15DEFF' },
                            value: 'Message',
                            url: '/pages/message/message'
                        },
                        {
                            iconInfo: { 'value': 'at-icon at-icon-help', 'size': 60, 'color': '#179C2D' },
                            value: 'Help',
                            url: '/pages/help/help'
                        }
                    ]
                }/>
                <AtProgress percent={100} status="progress" color="#E93B3D" strokeWidth={10} isHidePercent={true}/>
                <Text>&nbsp;</Text>
                <AtProgress percent={100} status="progress" color="#FFC701" strokeWidth={10} isHidePercent={true}/>
                <Text>&nbsp;</Text>
                <AtProgress percent={100} status="progress" color="#179C2D" strokeWidth={10} isHidePercent={true}/>
                <Text>&nbsp;</Text>
                <AtProgress percent={100} status="progress" color="#6190E8" strokeWidth={10} isHidePercent={true}/>
            </View>
        )
    }
}
