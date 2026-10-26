# 从句子开始 · 英语语法地图

中文初学者语法手册，6 章、32 个主题，每节包含中文解释、结构、中英例句、易错提醒、每节 4 道练习及造句草稿。无构建依赖，静态文件在 `dist/`。句子基础章包含及物／不及物动词和双宾语常用搭配。

在线访问：[英语语法地图](https://0use.net/EnglishLearn/)

首页提供可点击的语法框架图；共 128 道练习，包含逐题解析、结果统计和错题重练。例句直接展示语法拆解。

## 部署

推送到 `main` 后，GitHub Actions 自动将 `dist/` 部署到 GitHub Pages。也可以在 Actions 中手动运行 `Deploy GitHub Pages`。无需安装依赖或配置密钥。

## 本地打开

在此目录运行 `python -m http.server 4173 --directory dist`，然后访问 http://localhost:4173 。也可直接打开 dist/index.html。

## 数据

已读、收藏和草稿保存在浏览器 localStorage，不跨设备同步。不接入 AI，无 API 密钥，无服务器数据存储。

## 内容

课程数据在 dist/lessons.js，补充题目在 dist/exercises.js，答题交互在 dist/practice.js，页面在 dist/app.js，样式在 dist/style.css。讲解与例句是面向初学者的原创入门内容，非穷尽性参考语法。
