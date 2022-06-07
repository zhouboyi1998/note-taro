import { Component } from 'react'
import { View } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { AtList, AtListItem } from 'taro-ui'

// 按需引入 Taro UI
import 'taro-ui/dist/style/components/article.scss'
import 'taro-ui/dist/style/components/list.scss'
import './detail.scss'

export default class Detail extends Component {

    componentWillMount() {
        this.state = {
            data: {
                command: '',
                usage: '',
                params: []
            }
        }
    }

    componentDidMount() {
        let that = this
        let cmd = getCurrentInstance().router.params.cmd
        // 获取命令详情
        Taro.request({
            url: 'http://127.0.0.1:18091/command/select' + cmd,
            success: function (res) {
                that.setState({ data: res.data })
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
        const data = this.state.data
        return (
            <View className="at-article">
                <View className="at-article__h1">
                    {data.command}
                </View>
                <View className="at-article__info">
                    {data.usage}
                </View>
                <View className="at-article__p">
                    <AtList>
                        {
                            data.params.map(
                                item => <AtListItem title={`${item.param}`} note={`${item.description}`}/>
                            )
                        }
                    </AtList>
                </View>
            </View>
        )
    }
}
