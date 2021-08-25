# 部署文档
## 软件版本说明和安装文档
| 软件 | 版本 | 安装文档 |
|-|-|-|-|-|-|
| JDK | 1.8.x | [JDK安装文档](https://blog.roncoo.com/article/1380765558820368385)  |
|Nodejs | 12.x | [Nodejs安装文档](https://blog.roncoo.com/article/1380765558820368385) |
|MySQL | 5.7.x | [MySQL安装文档](https://blog.roncoo.com/article/1280781211745636354) |
|Elasticsearch | 6.2.2 | [Elasticsearch安装文档](https://blog.roncoo.com/article/1281405654742323202) |
|Redis | 3.2+ | [Redis安装文档](https://blog.roncoo.com/article/1281402533735550977) |
|FastDFS | 6.06 | [FastDFS安装文档](https://blog.roncoo.com/article/1275251133292867586) |
|Nacos | 1.3.2 | [Nacos安装文档](https://blog.roncoo.com/article/1430414119324229633) |

## 注册配置中心
### 1. 登录Nacos管理后台
默认地址：http://localhost:8848/nacos 默认账号密码：nacos/nacos

### 2. 创建命名空间
<img :src="$withBase('/static/nacos.jpg')" alt="nacos命名空间">

> 特别提醒：命名空间的ID应该设置与名称一致，方便记忆和使用。    
> 应用关联的是命名空间ID，不是名称，不是名称，不是名称。

### 3. 导入配置
<img :src="$withBase('/static/nacos-config.jpg')" alt="nacos配置">

> 导入之后需要修改对应的配置，例如数据库账号密码   
> 密码需要先加密（加密方法在开发指南中有说明）

## 后端项目说明
### 1.导入后端项目
自行操作即可

### 2. 修改配置
<img :src="$withBase('/static/roncoo-education.jpg')" alt="项目配置">

> 以roncoo-education-app-gateway为例，其他项目同理 

### 3. 启动项目
<img :src="$withBase('/static/roncoo-education-gateway.jpg')" alt="项目运行">

> 全部启动完成，可以访问：http://localhost:5840

## 前端项目说明
### 1. 导入前端项目

> 这里有2个前端项目，分别为：roncoo-education-admin 和 roncoo-education-web

### 2. admin项目说明
<img :src="$withBase('/static/roncoo-education-admin.jpg')" alt="项目运行">

> 修改网关地址，直接启动即可：npm run dev (先要安装依赖：npm install)    
> 若要部署到服务器，先要打包：npm run build 

### 3. web项目说明
<img :src="$withBase('/static/roncoo-education-web.jpg')" alt="项目运行">

> 修改网关地址，直接启动即可：npm run dev (先要安装依赖：npm install)    
> 若要部署到服务器，需要使用pm2来运行

