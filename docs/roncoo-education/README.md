# 官方文档
&emsp;&emsp;领课教育（roncoo-education）是基于领课网络多年的在线教育平台开发和运营经验打造出来的产品，致力于打造一个全行业都适用的分布式在线教育系统。
> 该文档只适用于开源版本
* 商业版请联系QQ: 513781560

## 快速入门
### 项目导入
系统部署分3个工程，每个单独导入
### 系统账号
#### 前端门户
* 普通用户: 13800138002 密码：123456
* 讲师用户: 13800138001 密码：123qwe
#### 管理后台
管理员：13800000000 密码：123456

## 部署文档
系统部署分3个工程，每个单独部署
### 后台接口(roncoo-education)
该工程采用spring-cloud分布式架构，需要按一定的顺序进行启动。
1. 打包应用
> mvn clean pacakge
2. 启动应用
> 启动顺序为：注册中心 → 配置中心→ 模块工程 → 定时器 → 网关工程
### 运营系统(roncoo-education-admin)
该工程基于vue-element-admin
1. 打包应用
> npm install
>
> npm build
### 门户系统(roncoo-education-web)
该工程采用vue.js + nuxt.js
1. 打包应用
> npm install
>
> npm build

## 核心功能
### 课程设计说明
1. 课程添加功能：由讲师进行添加，功能在用户中心（roncoo-education-web）
2. 课程审核功能：由管理员审核，功能在运营后台（roncoo-education-admin）
### 课程播放流程
![课程播放流程](/static/kechengbofang.png)
### 播放鉴权流程 
![播放鉴权流程 ](/static/bofangjianquan.png)
### 课程下单流程 
![课程下单流程 ](/static/kechengxiadan.png)
### 下单回调流程
![下单回调流程](/static/xiadanhuitiao.png)

## 常见问题
### 数据库如何加密
> 利用DruidUtil加密，该类在com.roncoo.education.user.service.test包下，也可以参考[【官方文档】](https://github.com/alibaba/druid/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#21-%E6%88%91%E5%B8%8C%E6%9C%9B%E5%8A%A0%E5%AF%86%E6%88%91%E7%9A%84%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AF%86%E7%A0%81%E6%80%8E%E4%B9%88%E5%8A%9E)
