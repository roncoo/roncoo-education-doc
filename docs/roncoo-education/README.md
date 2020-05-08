# 官方文档
&emsp;&emsp;领课教育系统（roncoo-education）是基于领课网络多年的在线教育平台开发和运营经验打造出来的产品，致力于打造一个全行业都适用的分布式在线教育系统。
> 该文档只适用于开源版本
* 商业版请联系QQ: 513781560

## 快速入门
### 项目导入
系统部署分3个工程，每个单独导入
### 获取SQL脚本
为了方便维护数据库脚本，只在QQ群进行集中管理。所以需要加官方QQ群，[【请看这里的文档】](https://gitee.com/roncoocom/roncoo-education)
### 系统账号
#### 前端门户
* 普通用户: 13800138002 密码：123456
* 讲师用户: 13800138001 密码：123qwe
#### 管理后台
* 演示账号：13800000000 密码：123456 (演示环境提供的演示账号)
* 管理账号：18800000000 密码：123456 (演示环境不提供需本地运行)

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

## 本地开发
系统部署分3个工程，每个单独启动
### 后台接口(roncoo-education)
该工程采用spring-cloud分布式架构，需要按一定的顺序进行启动。
1. 启动应用
> 启动顺序为：注册中心 → 配置中心→ 模块工程 → 定时器 → 网关工程
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
## 常见问题
### 软件使用版本说明
* JDK：1.8.x 
* Nodejs：10.x 
* Maven：3.5.x 
* MySQL：5.7 
* Elasticsearch：6.2.2 
* Redis：3.2 
### 数据库如何加密
> 利用DruidUtil加密，该类在com.roncoo.education.user.service.test包下，也可以参考[【官方文档】](https://github.com/alibaba/druid/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#21-%E6%88%91%E5%B8%8C%E6%9C%9B%E5%8A%A0%E5%AF%86%E6%88%91%E7%9A%84%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AF%86%E7%A0%81%E6%80%8E%E4%B9%88%E5%8A%9E)
### 课程如何添加
> 系统存在用户、讲师，管理员角色，课程属于讲师，所以课程的添加在用户中心（前端门户系统），管理员只做课程的审核工作，只有通过审核的课程才能上架。
