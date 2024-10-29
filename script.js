// パスワードチェックとシーン移動
function login() {
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;

    if (password === "") {
        document.querySelector(".forgot-password").textContent = "ようこそ";
    
        document.querySelector(".login-content").classList.add("fade-out");
        const loadingAnimation = document.getElementById("loadingAnimation");
        loadingAnimation.classList.remove("hidden");

        // ローディングアニメーション後デスクトップに移行
        setTimeout(() => {
            document.getElementById("loginScene").classList.add("hidden");
            document.getElementById("desktopScene").classList.remove("hidden");
        }, 300);
    } else {
        passwordInput.value = "";
        alert("パスワードが違います。");
    }
}

// LIENアプリを開く
function openLienApp() {
    document.querySelector("body").style["background-color"] = "#29d042";

    document.getElementById("desktopScene").classList.add("fade-out");

    setTimeout(() => {
        document.getElementById("desktopScene").classList.add("hidden");
        document.getElementById("desktopScene").classList.remove("fade-out");
        document.getElementById("talkScene").classList.remove("hidden");
    }, 300);
}

// トークシーンに戻るボタン
function returnToDesktop() {
    document.querySelector("body").style["background-color"] = "black";

    document.getElementById("talkScene").classList.add("fade-out");

    setTimeout(() => {
        document.getElementById("talkScene").classList.add("hidden");
        document.getElementById("talkScene").classList.remove("fade-out");
        document.getElementById("desktopScene").classList.remove("hidden");
    }, 300);
}

const allMessages = [
    [
        { author: 1, content: "あのさ、来週飲みいかね？", time: "2024/3/18 17:35" },
        { author: 0, content: "どうしてまたいきなり", time: "2024/3/18 19:17" },
        { author: 1, content: "相楽から誘われてさ、他にも5,6人こえるらしいよ" },
        { author: 1, content: "これる", time: "2024/3/18 20:19" },
        { author: 0, content: "相楽って、また急だな" },
        { author: 0, content: "連絡とってたん？", time: "2024/3/18 20:20" },
        { author: 1, content: "いや、ほとんど連絡とってなかったけど" },
        { author: 1, content: "この前久しぶりに連絡きてさ、飲もうぜって", time: "2024/3/18 20:22" },
        { author: 0, content: "まあいいや、そうと決まれば予定空けとくわ" },
        { author: 0, content: "来週のいつよ？", time: "2024/3/18 20:31" },
        { author: 1, content: "まだ確定したわけじゃないけど、24の夜になると思う", time: "2024/3/18 20:33" },
        { author: 0, content: "ok,basyokimattaraosiete", time: "2024/3/18 20:40" },

        { author: 1, content: "決まったよ" },
        { author: 1, content: "24の18時から、駅前のとりふかな", time: "2024/3/21 14:01" },
        { author: 0, content: "あの最近できたとこか", time: "2024/3/21 18:48" },
        { author: 1, content: "そうそう、予約はとってあるって", time: "2024/3/21 19:27" },
        { author: 0, content: "だれがくるん？", time: "2024/3/21 19:34" },
        { author: 0, content: "佐藤とかくんの？" },
        { author: 0, content: "宮路とかもくんの？ww", time: "2024/3/21 19:35" },
        { author: 1, content: "おいwやめとけってw" },
        { author: 1, content: "とりあえず、誰がくんのかは来てからのお楽しみってことで" },
        { author: 1, content: "じゃ、そこんとこよろしく", time: "2024/3/21 21:36" },
        { author: 0, content: "ok　寝坊しないように気を付けるわ", time: "2024/3/21 22:03" },
        { author: 1, content: "殴るぞw", time: "2024/3/21 22:57" },

        { author: 1, content: "久しぶり、おれやで", time: "2024/ 9/6 19:47" },
        { author: 0, content: "んな詐欺みたいな", time: "2024/ 9/6 19:48" },
        { author: 1, content: "突然で申し訳ないんだけどさ、今度話せない？" },
        { author: 1, content: "相談したいことがあってさ", time: "2024/ 9/6 19:50" },
        { author: 0, content: "いやまあいいけどさ" },
        { author: 0, content: "忙しいからそんなにタイミング取れないかも", time: "2024/ 9/6 19:50" },
        { author: 1, content: "わかった", time: "2024/ 9/6 19:51" },
        { author: 0, content: "今度の土曜の夜とかどう？", time: "2024/ 9/6 19:52" },
        { author: 1, content: "今週の土曜とか空いてたりしない？", time: "2024/ 9/6 19:52" },
        { author: 1, content: "www", time: "2024/ 9/6 19:52" },
        { author: 0, content: "w", time: "2024/ 9/6 19:53" },
        { author: 0, content: "ok、じゃあそれで", time: "2024/ 9/6 19:53" },
        { author: 1, content: "マジでありがとう" },
        { author: 1, content: "ほんと助かるわ", time: "2024/ 9/6 19:54" },
        { author: 0, content: "そしたら家でいい？なんかいろいろ用意しとくからさ", time: "2024/ 9/6 19:57" },
        { author: 1, content: "おっけー、俺もなんか買っていくわ", time: "2024/ 9/6 19:57" },
        { author: 0, content: "じゃあ七時ぐらいにうち来てよ", time: "2024/ 9/6 19:58" },
        { author: 1, content: "わかった、サンキュー", time: "2024/ 9/6 19:58" }
    ], [
        { author: 0, content: "ちょやめてやはずいじゃん" },
        { author: 0, content: "履歴消すわ", time: "2024/ 9/6 19:48" },
        { author: 1, content: "ごめんって別に晒さないから安心してや", time: "2024/ 9/6 19:48" },
        { author: 0, content: "さらさないならいいや" },
        { author: 0, content: "ドーナツで、穴を開け忘れる反則", time: "2024/ 9/6 19:48" },
        { author: 1, content: "これはさすがにひどいな（）" },
        { author: 1, content: "さらしていい？" },
        { author: 1, content: "てか晒すわ（）", time: "2024/ 9/6 19:48" },
        { author: 0, content: "やめてやごめんって", time: "2024/ 9/6 19:48" },
        { author: 1, content: "Ｚで晒したら万バズしたわ（） ありがと" },
        { author: 0, content: "最悪すぎるんだけどw" }
    ], [
        { author: 1, content: "いいビジネスがあるんだけど、5分で簡単に始められるから、興味があったらこのリンクにアクセスしてくれよ！" }
    ], [
        { author: 1, content: "いつもの鯖でゲームしてるから、良かったら来て" },
        { author: 1, content: "人数が足りなくてさ", time: "2024/ 9/6 19:48" },
        { author: 0, content: "今日の仕事があと一時間ぐらいで終わるから終わったら行くわ", time: "2024/ 9/6 19:48" },
        { author: 1, content: "ありがとな！　待ってるわ" }
    ], [
        { author: 1, content: "助けてもらってもいいですか？明日が無いんです。どうですか？" }
    ], [
        { author: 1, content: "ぼくの最新あるばむがリリースされたよ～　みんな聞いてみてね～<br>htttps:/Utube.com/1wdk32r" },
        { author: 1, content: "今日の22:00から配信やるよ～　なんとあの配信者さんとコラボ！？　見てね～" }
    ], [
        { author: 1, content: "申し訳ないんだけどさ、事務作業少しやってくれない？" },
        { author: 1, content: "明日までにやんなきゃなんだけど、プレゼンのスライド作らなきゃでさ" },
        { author: 1, content: "今度飯おごるから！頼む！" },
        { author: 0, content: "食べ放題な" },
        { author: 1, content: "全然いいよ！マジで助かるわ！" },
        { author: 1, content: "そしたら仕事のメールで送るからさ！そこからお願い！ありがとう！" },
        { author: 0, content: "別にいいよw " },
        { author: 0, content: "また今度俺のも手伝ってや～" }
    ], [
        { author: 1, content: "今日のクーポン　アソコカラファイン　全品30%on" },
        { author: 1, content: "今日のクーポン　MOUS burger ポテト　有料" },
        { author: 1, content: "今日のクーポン　エイトトゥウェルブ　はちチキ　全種類200%on" },
        { author: 1, content: "今日のクーポン　ヤマモト電機　蛍光灯　70本無料" }
    ], [
        { author: 1, content: "明日使う書類、今日中にデータ送ってって言ってたけどさ、印刷までお願いしちゃっていい？" },
        { author: 1, content: "取引先とのコミュニケーションが長引いちゃいそうでさ、お得意様だからちゃんとしなきゃいけなくて" },
        { author: 0, content: "了解です！軽い仕事なので僕がやっておきますね！　20部でいいんですよね？" },
        { author: 1, content: "25部お願いしていい？一応多めに刷っておいて！" },
        { author: 0, content: "了解です！先輩のデスクにおいておきますね！" },
        { author: 0, content: "置いておきました！" },
        { author: 1, content: "ありがとう！後はやっておくから任せて！" }
    ], [
        { author: 0, content: "お誕生日おめでとう！" },
        { author: 1, content: "ありがと～" },
        { author: 1, content: "わざわざごめんね～プレゼントまでもらっちゃって" },
        { author: 0, content: "全然いいよ～ぜひ使ってね～" }
    ], [
        { author: 0, content: "よろしくお願いいたします！" },
        { author: 1, content: "こちらこそよろしくおねがいします！" }
    ], [
        { author: 1, content: "友達登録ありがとうございます！かくさとうちゃんの公式LIENです！" }
    ], [
        { author: 1, content: "友達登録ありがとね～！こおりさとうちゃんの公式LIENだよ〜！" }
    ], [
        { author: 1, content: "友達登録していただきありがとうございます" }
    ], [
        { author: 1, content: "このアイドルめっちゃよくね<br>https://Utube.com/239qefg9a" },
        { author: 0, content: "めっちゃええな" },
        { author: 0, content: "登録してきたわw" }
    ], [
        { author: 1, content: "今から送るリンクに書かれている3つの事を実践するだけで半年で社長になれる！<br>https://sasuganinote.com/Koh_minagawa/23aef7" }
    ]
];

const authorName = [
    "ジュン",
    "Naoya Senda",
    "もちづき",
    "内藤@実績多数！投資セミナー",
    "mz",
    "michel sarah",
    "Aくん　公式",
    "中原　俊",
    "LIENクーポン",
    "Yuka Kimishima",
    "桃佳",
    "瀬良　涼朶",
    "kakusatouchan　しゅがめる公式",
    "koorisatouchan　しゅがめる公式",
    "koorisatouchan　しゅがめる公式",
    "KYO",
    "KOH MINAGAWA@半年社長"
];

const authorIcon = [
    "image/icon-jun.png",
    "icon/senda.png",
    "icon/",
    "icon/Naito.png",
    "icon/mz.PNG",
    "icon/mic.png",
    "icon/Akun.png",
    "icon/senpai.png",
    "icon/coupon.png",
    "icon/",
    "icon/momo.png",
    "icon/",
    "icon/",
    "icon/",
    "icon/",
    "icon/",
    "icon/"
];

for (let i = 1; i < authorName.length; i++) {
    let contactList = document.getElementById("contactList");
    contactList.innerHTML += `<div onclick="openChat('${i}')" class="contact-button"><img src="${authorIcon[i]}" class="contact-icon"><p>${authorName[i]}<br><span class="latest-message">${allMessages[i-1][allMessages[i-1].length-1].content}</span></p></div>`;
}

// チャットを開く
function openChat(contactName) {
    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML = "";

    document.getElementById("contactName").textContent = authorName[contactName];

    const messages = allMessages[contactName-1];

    // メッセージを表示
    messages.forEach(msg => {
        const messageDiv = document.createElement("div");
        const author = (msg.author === 0 ? 0 : contactName);
        messageDiv.classList.add("chat-message", author === 0 ? "right" : "left");
        messageDiv.innerHTML = `<img src="${authorIcon[author]}" > ${msg.content}`;
        if(msg.time) messageDiv.innerHTML += `<p>${authorName[author]} ・ ${msg.time}</p>`;
        else messageDiv.innerHTML += `<p>${authorName[author]}</p>`;
        chatBox.appendChild(messageDiv);
    });
}
