# 本地开发
&emsp;&emsp;领课教育系统（roncoo-education）是基于领课网络多年的在线教育平台开发和运营经验打造出来的产品，致力于打造一个全行业都适用的分布式在线教育系统。
> 该文档只适用于开源版
* 商业版可联系: 15820530994（微信同号）

## 项目说明
* 系统部署分3个工程，每个单独导入

领课教育系统(roncoo-education)：[码云地址](https://gitee.com/roncoocom/roncoo-education) | [Github地址](https://github.com/roncoo/roncoo-education)

前端门户工程(roncoo-education-web)：[码云地址](https://gitee.com/roncoocom/roncoo-education-web) | [Github地址](https://github.com/roncoo/roncoo-education-web)

后台管理工程(roncoo-education-admin)：[码云地址](https://gitee.com/roncoocom/roncoo-education-admin) | [Github地址](https://github.com/roncoo/roncoo-education-admin)

数据库SQL脚本：[【加QQ群，马上获取SQL脚本】](https://gitee.com/roncoocom/roncoo-education#%E5%AE%98%E6%96%B9qq%E7%BE%A4%E5%8A%A0%E7%BE%A4%E5%85%8D%E8%B4%B9%E8%8E%B7%E5%8F%96sql%E8%84%9A%E6%9C%AC)

## 安装文档
| 软件 | 版本 | 安装文档 |
|-|-|-|-|-|-|
| JDK | 1.8.x | [JDK安装文档](https://blog.roncoo.com/article/1380765558820368385)  |
|Nodejs | 12.x | [Nodejs安装文档](https://blog.roncoo.com/article/1380765558820368385) |
|Nacos | 1.4.2 | [Nacos安装文档](https://blog.roncoo.com/article/1430414119324229633) |
|MySQL | 5.7.x | [MySQL安装文档](https://blog.roncoo.com/article/1280781211745636354) |
|Elasticsearch | 7.6.2 | [Elasticsearch安装文档](https://blog.roncoo.com/article/1281405654742323202) |
|Redis | 3.2+ | [Redis安装文档](https://blog.roncoo.com/article/1281402533735550977) |
|FastDFS | 6.06 | [FastDFS安装文档](https://blog.roncoo.com/article/1275251133292867586) |

## 注册配置中心
### 1. 登录Nacos管理后台
默认地址：http://localhost:8848/nacos 默认账号密码：nacos/nacos

### 2. 创建命名空间
<img :src="$withBase('/static/nacos.jpg')" alt="nacos命名空间">

特别提醒：命名空间的ID应该设置与名称一致，方便记忆和使用。    
> 应用关联的是 **命名空间ID**，**不是名称，不是名称，不是名称**。

### 3. 导入配置
<img :src="$withBase('/static/nacos-config.jpg')" alt="nacos配置">

导入之后需要修改对应的配置，例如：MySQL账号密码，Redis密码   
> MySQL密码需要先加密（加密方法在开发指南中有说明）

## 后端项目说明
### 1.导入后端项目
自行操作即可

### 2. 修改配置
<img :src="$withBase('/static/roncoo-education.jpg')" alt="项目配置">

> 以roncoo-education-app-gateway为例，其他项目同理

### 3. 启动项目
<img :src="$withBase('/static/roncoo-education-gateway.jpg')" alt="项目运行">

> 全部启动完成，可以访问：http://localhost:5840     
> 特别说明：同时启动所有应用，很耗内存。建议启动的控制应用内存的大小，分配256M即可。

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

## 系统账号说明
### 前端门户
* 普通用户: 13800138002 密码：123456
* 讲师用户: 13800138001 密码：123qwe

### 管理后台
* 演示账号：13800000000 密码：123456 (演示环境提供的演示账号)
* 管理账号：18800000000 密码：123456 (演示环境不提供需本地运行)

### 演示环境
* [门户演示环境（需要龙果学院账号授权登录）](http://edu.os.roncoo.com/)
* [后台演示环境（默认演示账号登录）](http://edu.os.roncoo.com/admin/)
