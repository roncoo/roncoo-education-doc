# 生产部署
&emsp;&emsp;领课教育系统（roncoo-education）是基于领课网络多年的在线教育平台开发和运营经验打造出来的产品，致力于打造一个全行业都适用的分布式在线教育系统。
> 该文档只适用于开源版，请先看**本地开发**流程

* 商业版可联系: 15820530994（微信同号）

## 服务器配置说明
|      项目      | 最小内存分配 |      说明      |
|       -       |     -      |       -       |
| MySQL         | 512MB      | innodb_buffer_pool_size |
| Elasticsearch | 512MB      | jvm.options|
| Nacos         | 512MB      | 单机部署默认512MB |
| 应用           | 256MB      | 每个应用单独设置 |

## 后台系统(roncoo-education)
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
## 运营系统(roncoo-education-admin)
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
## 门户系统(roncoo-education-web)
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
