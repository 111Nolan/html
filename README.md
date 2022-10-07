## 关于

我认为每一个人都需要一个简历网*页以介绍自己，可以作为面试时的加分项，也可以放置在您的个人网站之中。

这是一款响应式炫酷而优雅的个人简历网页，电脑与手机均适用，无需联网，纯前端HTML+CSS+JavaScript实现，可用于个人简历、个人网站、个人简介或学习使用，可以通过配置文件自动生成属于你自己的网页。

## 演示

[网页演示地址](https://happysnaker.github.io/Resume/)

在手机或平板或电脑上查看该网页。

## 项目结构

前往[happysnaker/Resume-Web-Page项目仓库](https://github.com/happysnaker/Resume-Web-Page)clone项目，保存在你自己的文件中。

Resume文件下：

config文件包含了项目的配置文件。

CSS文件下personal-info-main.css为主要的CSS代码，personal-info-animate.css为项目的动画CSS代码，其余CSS文件为引用库。

JS文件下personal-info-main.js为主要的JS代码，其余js文件为引用库。

images文件包含了可能用上的图片。

svg文件下包含了一些图标。

index.html为网页的入口。

## 配置

**在./config/config.js文件中配置您的信息以自动生成属于你自己的网页，遵循JavaScript对象声明规范，注意格式，对象变量中间不要漏写逗号，对象变量结尾不要多写逗号。**

```javascript
var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "郑伊健",
    sex: "男",
    age: "21",
    phone: "13075950485",
    email: "1054275877@qq.com",
    address: "福建福州",
    qq: "1054275877",
    log: "JES",
    excpect_work: "C++/网络安全渗透",


    /*在这里配置首页的座右铭集合*/
    motto: [
            "跳舞吧，像没有人在看一样。",
            "去爱吧，像不曾受过一次伤一样。",
            "唱歌吧，像没有人在听一样。",
            "工作吧，像不需要钱一样。",
            "生活吧，像今天是世界末日一样。"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "求你指教我们怎样数算自己的日子，<br>" +
                "好叫我们得着智慧的心。<br>" +
                "你好，我是郑伊健，中国矿业大学信息安全专业大三在读生<br>" +
                "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我叫郑伊健，性别男，中国矿业大学大学信息安全专业大三在读。</p>" +
        "<p>我目前是20级信息安全专业年级第一，擅长C++编程，有着厚实的计算机网络基础，熟练掌握Linux操作系统使用。</p>" +
        "<p>我的爱好是跑步、听音乐，喜欢一个人安静，同样也喜欢和朋友一起玩耍。</p>" +
        "<p>看看我的个人介绍吧!</p>",



    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2020-2021", "国家奖学金",""],
        ["2020-2021", "优秀学生",""],
        ["2021-2022", "校级服务标兵",""],
        ["2021.12", "ARM CHINA杯 工程认知比赛一等奖",""],
        ["2022.6", "江苏省高等数学竞赛三等奖",""],
        ["2022.7", "中国矿业大学程序设计学科竞赛二等奖",""],
        ["2021.12", "中国矿业大学《线性代数》竞赛三等奖",""],
        ["2021.10", "中国矿业大学网络空间安全大赛三等奖",""],
        ["2022.3", "中国矿业大学基础课大学物理学习之星",""],
        ["2021.12", "CAD设计竞赛一等奖",""],
        ["2021.5", "五一数学建模一等奖",""],
    ],

    /**
     * 在这里填写社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 放置数量 <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "https://leetcode.cn/u/111-u96/", "我的力扣主页"],
        ["./svg/github.svg", "https://github.com/", "我的GitHub主页"],
        ["./svg/QQ.svg", "https://user.qzone.qq.com/1054275877/infocenter","我的QQ空间"],
        ["./svg/知乎.svg", "https://www.zhihu.com/people/hao-de-72-70-44", "我的知乎主页"],
        ["./svg/csdn.svg", "https://blog.csdn.net/m0_60739087?spm=1000.2115.3001.5343", "我的csdn主页"]
    ],

    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]
}

**如果不需要配置该文件，请注释掉./JS/personal-info-main.js文件中顶层4行代码.**

```function
function addScript(url) {
    document.write("<script language=javascript src=./config/config.js></script>");
}
addScript();
```

## 参阅

### 引用库

[Bootstrap · The most popular HTML, CSS, and JS library in the world. (getbootstrap.com)](https://getbootstrap.com/)

[AOS - Animate on scroll library (michalsnik.github.io)](http://michalsnik.github.io/aos/)

[anime.js官网_免费、灵活的轻型JavaScript动画库 | animejs](https://www.animejs.cn/)

[jQuery](https://jquery.com/)

### 其他

[burc-li/timeLine: 纯CSS时间轴 (github.com)](https://github.com/burc-li/timeLine)

[VincentGarreau/particles.js: A lightweight JavaScript library for creating particles (github.com)](https://github.com/VincentGarreau/particles.js)
