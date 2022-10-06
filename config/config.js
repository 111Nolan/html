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
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */
    skills: [
        ["C++", 85, "red"],
        ["Python", 77, "blue"],
        ["SQL", 75, "#1abc9c"],
        ["PHP", 65, "yellow"],
        ["Java", 70, "pink"],
        ["Linux", 85 , "rgba(0,0,0)"],
        ["密码学", 70, "rgba(0,0,120)"],
        ["Web安全", 83, "rgba(10,255,30)"],
        ["二进制安全", 70, "rgba(200,130,10)"]
    ],

    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>熟练使用C++，对于容器、地址、指针等抽象概念理解透彻</li>" +
        "     <li>掌握Python，可以使用Python实现各密码算法</li>" +
        "     <li>良好的算法基础</li>" +
        "     <li>掌握各种高级数据结构</li>" +
        "     <li>熟悉SQL语句编写及调优</li>" +
        "     <li>了解JVM原理</li>" +
        "     <li>熟悉HTML、CSS、JavaScript、PHP及相应的前端知识</li>" +
        "     <li>熟悉Linux各类命令</li>" +
        "     <li>掌握Shell编程及调试</li>" +
        "     <li>厚实的计算机网络、操作系统基础</li>" +
        "     <li>理解Linux操作系统内核</li>" +
        "     <li>熟悉缓存、消息等机制</li>" +
        "     <li>了解分布式系统的设计与应用</li>" +
        "     <li>良好的密码学基础</li>" +
        "     <li>熟悉Web安全方向</li>" +
        "     <li>掌握二进制安全方向</li>" +
        " </ul>",

    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/pro-1.png", "http://1.15.234.109:8000/", "个人博客", "这里记录了我的Java后端学习笔记<br>持续更新"],
        ["./images/pro-2.png", "https://github.com/happysnaker/Gobang", "智能人机对战五子棋", "采用C++编写的智能五子棋人机对战<br>2021/7/23"],
        ["https://pic3.zhimg.com/80/v2-d9766956d5c85c2780e4c5008fd946ca_1440w.jpg", "https://github.com/happysnaker/StudentsManageSystem", "学生管理系统", "C语言+AVL树+多重双向表实现"]
    ],

    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [

        ["2022/4/1 — 2022/8/10", "<br>华为国创项目",
            "<p><strong>OpenEuler操作系统软件迁移</strong></p>" +
            "<p>作为负责人主动组织华为国创项目，出色地完成了OpenEuler操作系统软件迁移任务。</p>" +
            "<p></p>"
        ],

        ["2022/6/1 — 至今", "<br>国家级大学生创新创业",
            "<p><strong>基于边缘智能的医疗病理图像检测关键技术研究</strong></p>" +
            "<p>2022年作为国家级大创团队核心成员成功申报项目，在团队中负责算法方向</p>" +
            "<p></p>"
        ]
    ],

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