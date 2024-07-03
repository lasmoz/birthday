// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
       "送给我",      
        "最可爱的臭宝",
        "虽然我的拍照技术不是很好",
        "哈哈~",
        "这是我们在一起的",
        "第六个生日了哦",
        "还要和你一起度过好多好多个生日",
        "虽然我有时候还是会惹你生气",
        "但我会一直努力的",
        "未来的我们会更加幸福",
        "对了",
        "还要把我家臭宝喂饱饱",
        "然后抱走",
        "哈哈",
        "有你陪在我身边",
        "就是最浪漫的事",
        "我还有好多好多话想对你说",
        "留在余生慢慢对你讲",
        "mua（づ￣3￣）づ╭❤～",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/aixin.jpg",
        "最可爱的臭宝": "./imgs/keai.jpg",
        "虽然我的拍照技术不是很好": "./imgs/jishu.jpg",
        "哈哈~": "./imgs/haha~.jpg",
        "这是我们在一起的": "./imgs/yaofan.jpg",
        "第六个生日了哦": "./imgs/6.jpg",
        "还要和你一起度过好多好多个生日": "./imgs/yiqi.jpg",
        "虽然我有时候还是会惹你生气": "./imgs/weiqu.jpg",
        "但我会一直努力的": "./imgs/nuli.jpg",
        "未来的我们会更加幸福": "./imgs/xingfu.jpg",
        "对了": "./imgs/goutou.jpg",
        "还要把我家臭宝喂饱饱": "./imgs/weibaobao.jpg",
        "然后抱走": "./imgs/baozou.jpg",
        "哈哈": "./imgs/haha.jpg",
        "有你陪在我身边": "./imgs/peiban.jpg",
        "就是最浪漫的事": "./imgs/langman.jpg",
        "我还有好多好多话想对你说": "./imgs/jianghua.jpg",
        "留在余生慢慢对你讲": "./imgs/yusheng.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "气球",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
