

### 技术栈

前端：html、css、less、ES6、webpack、vue-cli、vue2、vuex、vue-router、vue-resource

后端：Node、Mysql

### 项目运行方法

#### 注：前端使用ES6的很多新特性，所以NodeJs 必须是6.0稳定版本，我使用的版本是6.2.0

（1）git clone https://github.com/zymseo/VueNode.git

（2）npm install

（3）npm run dev

（4）安装mysql数据库，新建数据库tour，然后导入全部数据（此项目根目录下的tour.sql）

（5）浏览器访问：localhost:8080

（6）数据库tour_user表中的用户默认密码均为123456

### 使用PHP或JAVA等后端语言替换NodeJs的方法

此项目作为前后端分离开发的测试，后端只是提供增删改查的数据接口，所有的路由及控制器方法都由前端来完成，所以可以将Node替换为你想要的任何后端开发语言，具体方法如下：

（1）将项目下载到本地，并执行npm install之后，继续执行npm run build；

（2）build完成之后，会在项目根目录下生成dist目录，将dist目录下所有的文件拷贝到服务器根目录下，主域一般是localhost:80或127.0.0.1:80；

（3）在你的根目录下构建服务端，注意服务端接口要和前端接口保持一致；


### 目标功能

- [x] 登录、注册、密码修改（100%）
- [x] 个人中心信息展示、资料修改（100%）
- [x] 头像上传（100%）
- [x] app首页（100%）
- [x] app列表页——全球优惠券（100%）
- [x] 展示国家与地区列表（100%）
- [x] 每个国家与地区对应的优惠券、新闻、banner轮播图（100%）
- [x] 领取优惠券（100%）
- [x] 优惠券详情（100%）
- [x] 使用优惠券（100%）
- [x] 发布优惠券文字（100%）
- [x] 星级评价组件（100%）

### 目录结构

<pre>
├── build			// webpack及Node相关配置
├── config			// 项目dev和prod环境的配置
├── dist			// 项目build打包之后的目录
├── node_modules		// npm包
├── index.html			// 项目入口文件
├── package.json		// 项目描述文件
├── peoject.gif			// 项目GIF图
├── php_test			// 用PHP代替Node实现首页数据接口示例
├── server			// 后端目录
│   ├── account				// 登录、注册、找回密码等控制器
│   ├── get-coupon			// 领取优惠券控制器
│   ├── global-coupon			// 首页控制器
│   ├── global-coupon-list		// 全球优惠券列表页控制器 
│   └── personal			// 个人中心控制器，包括资料修改、头像上传等
├── src					// 前端目录
│   ├── assets				// 图片资源
│   ├── components			// 项目所有组件，每个文件头部都有组件名称注释
│   ├── router				// Vue路由
│   ├── store				// Vuex状态管理
│   ├── App.vue				// 主页面 
│   └── main.js				// Webpack 预编译入口
├── static			// 前端公用静态文件目录
│   ├── css         
│   ├── images          
│   ├── js     
│   ├── less         
│   └── upload
├── .babelrc			// ES6等babel的一些配置
├── .editorconfig		// 编辑器的一些配置
├── .eslintignore		// 忽略语法检查的目录文件，一般是忽略build和config目录
├── .eslintrc.js		// eslint的配置文件
├── // 关于项目目录各文件作用更加详细的介绍，请参考：http://www.zymseo.com/vue/488.html
</pre>

