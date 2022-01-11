# 常见问题

## 数据库的密码如何加密？
> 利用DruidUtil加密，该类在com.roncoo.education.user.service.test包下，也可以参考[【官方文档】](https://github.com/alibaba/druid/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98#21-%E6%88%91%E5%B8%8C%E6%9C%9B%E5%8A%A0%E5%AF%86%E6%88%91%E7%9A%84%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AF%86%E7%A0%81%E6%80%8E%E4%B9%88%E5%8A%9E)

## 课程是如何添加和修改？
> 系统存在用户、讲师，管理员角色，课程属于讲师，所以课程的添加在用户中心（前端门户系统），管理员只做课程的审核工作，只有通过审核的课程才能上架。

## 课程播放流程
<img :src="$withBase('/static/kechengbofang.png')" alt="课程播放流程">
<img :src="$withBase('/static/bofangjianquan.png')" alt="播放鉴权流程 ">
<img :src="$withBase('/static/kechengxiadan.png')" alt="课程下单流程 ">
<img :src="$withBase('/static/xiadanhuitiao.png')" alt="下单回调流程">
