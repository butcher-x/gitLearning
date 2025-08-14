# Git协作学习项目

这是一个用于演示Git远程协作开发流程的示例项目。

## 项目简介

本项目是一个简单的Web应用，用于学习和演示：
- Git分支管理
- 远程协作开发
- 合并冲突处理
- Pull Request流程
- 代码审查流程

## 项目结构

```
gitLearn/
├── index.html          # 主页面
├── css/
│   └── style.css       # 主样式文件
├── js/
│   └── main.js         # 主JavaScript文件
├── README.md           # 项目说明
└── .gitignore          # Git忽略文件
```

## 功能模块

### 已完成功能
- [x] 基础项目结构
- [x] 响应式页面布局
- [x] 基础样式设计

### 开发中功能
- [ ] 头部组件优化 (feature/header)
- [ ] 导航菜单功能 (feature/navigation)  
- [ ] 页面底部信息 (feature/footer)

## 开发流程

### 分支策略
- `main`: 主分支，稳定版本
- `develop`: 开发分支，集成开发中的功能
- `feature/*`: 功能分支，开发具体功能
- `hotfix/*`: 热修复分支，紧急修复

### 协作流程
1. 从develop分支创建功能分支
2. 在功能分支上开发新功能
3. 提交代码并推送到远程仓库
4. 创建Pull Request
5. 代码审查
6. 合并到develop分支

## 如何运行

1. 克隆项目到本地
```bash
git clone https://github.com/butcher-x/gitLearning.git
cd gitLearning
```

2. 直接在浏览器中打开index.html文件

## 贡献指南

1. Fork本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 提交规范

使用Conventional Commits规范：
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构代码
- `test`: 测试相关

## 版本历史

- v1.0.0 - 初始版本，基础项目结构

## 许可证

MIT License
