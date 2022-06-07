import { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtIndexes } from 'taro-ui'

// 按需引入 Taro UI
import 'taro-ui/dist/style/components/toast.scss'
import 'taro-ui/dist/style/components/indexes.scss'
import 'taro-ui/dist/style/components/list.scss'
import './command.scss'

export default class Command extends Component {

    componentWillMount() {
        this.state = {}
    }

    componentDidMount() {
        let that = this
        Taro.request({
            url: 'http://127.0.0.1:18091/command/name-list',
            success: function (res) {
                // 存储索引选择器需要的数据格式
                let list = []
                // 添加 A-Z 分别对应的集合
                for (let ascii = 65; ascii < 91; ascii++) {
                    let collection = {}
                    let letter = String.fromCharCode(ascii)
                    // 集合对外显示的标题
                    collection.title = letter
                    // 集合的 Key
                    collection.key = letter
                    // 集合包含的命令列表
                    collection.items = []
                    // 将命令添加到对应首字母的集合中
                    for (let i in res.data) {
                        if (res.data[i].substring(1, -1).toUpperCase() == letter) {
                            let item = {}
                            item.name = res.data[i]
                            collection.items.push(item)
                            break
                        }
                    }
                    // 如果该首字母下没有任何命令, 则不添加到 command 中
                    if (collection.items.length > 0) {
                        list.push(collection)
                    }
                }
                // 将 list 变量赋值给 state 中的 list
                that.setState({ list: list })
            }
        })
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    onClick(e) {
        Taro.navigateTo({
            url: '/pages/detail/detail?cmd=' + e.name
        })
    }

    render() {
        const list = this.state.list
        return (
            <View style="height:100vh">
                <AtIndexes list={list} onClick={this.onClick.bind(this)} isVibrate={false}>
                </AtIndexes>
            </View>
        )
    }
}
