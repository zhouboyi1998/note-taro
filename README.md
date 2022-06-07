<h1 align="center">📔 note-taro</h1>

### 📖 语言

简体中文 | [English](./README.en.md)

### ⌛ 开始

#### 安装依赖

```
npm install
```

#### 运行调式

* 使用 `package.json` 中，`Taro` 提供的 `dev:weapp` 命令 运行

```
npm run build:weapp -- --watch
```

* 打开微信开发者工具，导入项目
* 详情 -> 本地设置
  * 勾选 `不校验合法域名、web-view (业务域名)、TLS 版本以及 HTTPS 证书`
  * 否则无法访问本地 `127.0.0.1` 的后端服务
