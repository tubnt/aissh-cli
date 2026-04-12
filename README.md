# AISSH CLI

AI Server Control Plane — 命令行客户端。

支持通过 MCP SSE 协议连接 AISSH 服务端，执行远程服务器管理操作。

## 安装

```bash
# 通过 npx 直接运行（无需安装）
npx github:tubnt/aissh-cli --help

# 或全局安装
npm install -g github:tubnt/aissh-cli
```

## 支持平台

| 系统 | 架构 | 二进制文件 |
|------|------|-----------|
| Linux | x64 | aissh-linux-x64 |
| Linux | arm64 | aissh-linux-arm64 |
| macOS | x64 | aissh-darwin-x64 |
| macOS | arm64 (Apple Silicon) | aissh-darwin-arm64 |
| Windows | x64 | aissh-win32-x64.exe |

## 使用

```bash
# 查看版本
aissh version

# 查看帮助
aissh --help

# 配置服务端地址
aissh config set server https://your-aissh-server.com

# 配置令牌
aissh config set token YOUR_TOKEN

# 列出服务器
aissh servers list

# 执行远程命令
aissh exec run --server SERVER_ID --command "uname -a"
```

## 许可证

MIT
