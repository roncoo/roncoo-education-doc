# 开发指南
&emsp;&emsp;领课教育系统（roncoo-education）是基于领课网络多年的在线教育平台开发和运营经验打造出来的产品，致力于打造一个全行业都适用的分布式在线教育系统。
> 该文档只适用于开源版
* 商业版可联系: 15820530994（微信同号）

## 快速入门
### 项目工程说明
系统部署分3个工程，每个单独导入

领课教育系统(roncoo-education)：[码云地址](https://gitee.com/roncoocom/roncoo-education) | [Github地址](https://github.com/roncoo/roncoo-education)

前端门户工程(roncoo-education-web)：[码云地址](https://gitee.com/roncoocom/roncoo-education-web) | [Github地址](https://github.com/roncoo/roncoo-education-web)

后台管理工程(roncoo-education-admin)：[码云地址](https://gitee.com/roncoocom/roncoo-education-admin) | [Github地址](https://github.com/roncoo/roncoo-education-admin)

### 获取SQL脚本
为了方便维护，数据库SQL脚本目前只在QQ的群文件里面共享。[【加QQ群，免费获取SQL脚本】](https://gitee.com/roncoocom/roncoo-education#%E5%AE%98%E6%96%B9qq%E7%BE%A4%E5%8A%A0%E7%BE%A4%E5%85%8D%E8%B4%B9%E8%8E%B7%E5%8F%96sql%E8%84%9A%E6%9C%AC)

### 系统账号说明
#### 前端门户
* 普通用户: 13800138002 密码：123456
* 讲师用户: 13800138001 密码：123qwe

#### 管理后台
* 演示账号：13800000000 密码：123456 (演示环境提供的演示账号)
* 管理账号：18800000000 密码：123456 (演示环境不提供需本地运行)

#### 演示环境
* [门户演示环境（需要龙果学院账号授权登录）](http://edu.os.roncoo.com/)
* [后台演示环境（默认演示账号登录）](http://edu.os.roncoo.com/admin/)

## 常见问题
### 软件版本说明
| 软件 | 版本 | 安装文档 |
|-|-|-|-|-|-|
| JDK | 1.8.x | [JDK安装文档](https://blog.roncoo.com/article/1380765558820368385)  |
|Nodejs | 12.x | [Nodejs安装文档](https://blog.roncoo.com/article/1380765558820368385) |
|MySQL | 5.7.x | [MySQL安装文档](https://blog.roncoo.com/article/1280781211745636354) |
|Elasticsearch | 6.2.2 | [Elasticsearch安装文档](https://blog.roncoo.com/article/1281405654742323202) |
|Redis | 3.2+ | [Redis安装文档](https://blog.roncoo.com/article/1281402533735550977) |
|FastDFS | 6.06 | [FastDFS安装文档](https://blog.roncoo.com/article/1275251133292867586) |

### 服务器配置说明
| 硬件 | 配置 | 说明 |
|-|-|-|-|
| 最小配置 | 1核，6GB | MySQL分配：512MB， Elasticsearch分配：512MB |

### 数据库如何加密？
> 利用DruidUtil加密，该类在com.roncoo.education.user.service.test包下，也可以参考[【官方文档】](https://github.com/alibaba/druid/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#21-%E6%88%91%E5%B8%8C%E6%9C%9B%E5%8A%A0%E5%AF%86%E6%88%91%E7%9A%84%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AF%86%E7%A0%81%E6%80%8E%E4%B9%88%E5%8A%9E)
### 课程在哪里添加？
> 系统存在用户、讲师，管理员角色，课程属于讲师，所以课程的添加在用户中心（前端门户系统），管理员只做课程的审核工作，只有通过审核的课程才能上架。

## 核心功能
### 课程设计说明
1. 课程添加功能：由讲师进行添加，功能在用户中心（roncoo-education-web）
2. 课程审核功能：由管理员审核，功能在运营后台（roncoo-education-admin）
### 课程播放流程
<img :src="$withBase('/static/kechengbofang.png')" alt="课程播放流程">
<img :src="$withBase('/static/bofangjianquan.png')" alt="播放鉴权流程 ">
<img :src="$withBase('/static/kechengxiadan.png')" alt="课程下单流程 ">
<img :src="$withBase('/static/xiadanhuitiao.png')" alt="下单回调流程">

## 本地开发
系统部署分3个工程，每个单独启动
### 后台接口(roncoo-education)
该工程采用spring-cloud分布式架构，需要按一定的顺序进行启动。
1. 启动应用 
> 启动顺序为：Nacos → 模块工程 → 定时器 → 网关工程
2. 安装注册中心 
* Nacos需要单独下载：[推荐使用：nacos-server-1.3.2](https://github.com/alibaba/nacos/releases/download/1.3.2/nacos-server-1.3.2.zip)
3. 导入配置
* [nacos_configs.zip](https://gitee.com/roncoocom/roncoo-education/blob/master/nacos_configs.zip)，导入之后按需修改即可。
### 运营系统(roncoo-education-admin)
该工程基于vue-element-admin
1. 本地启动
```
# 依赖安装
npm install
# 本地运行
npm run dev
```
### 门户系统(roncoo-education-web)
该工程采用vue.js + nuxt.js
1. 打包应用
```
# 依赖安装
npm install
# 本地运行
npm run dev
```
## 生产部署
### 后台系统(roncoo-education)
> 后台系统部署方式：打包上传运行
1. 应用打包
```
mvn clean pacakge
```
2. 应用上传
> 上传对应的jar到服务器即可
3. 应用启动
> 可以直接执行jar或者java -jar启动，注意启动顺序
```
 ./server-eureka.jar
或者
java -jar server-eureka.jar
 ```
### 运营系统(roncoo-education-admin)
> 运营系统部署方式：反向代理部署
1. 依赖安装
```
npm install
```
2. 应用打包
```
npm run build
```
3. 应用上传
> 打包完成，直接上传dist目录即可
4. 应用发布
> 利用nginx做转发即可，nginx配置如下
```
server {
    listen       80;
    server_name  localhost;

    # 配置请求后端的接口
    location /apis {
        proxy_pass   http://roncoo-education-api/;
    }

    # 执行dist目录
    location / {
        root   /opt/nginx/html/admin;
        index  index.html;
    }
}
```
### 门户系统(roncoo-education-web)
> 门户系统部署方式：使用 **pm2** 来运行，需要安装node.js
1. pm2安装（全局安装）
```
npm install pm2 -g
```
2. 应用上传
> 这里建议上传所有的源代码，在服务器中进行安装依赖和编译
3. 依赖安装
```
npm install
```
4. 应用编译
```
npm run build
```
5. 应用运行
```
PORT=10000 pm2 start npm --name roncoo-education-web -- run dev
# 参数说明
# PORT=10000 运行启动的端口
# -- name roncoo-education-web 名称识别
# -- run dev 环境识别
# 特别提醒：可以使用nginx进行反向代理
```
