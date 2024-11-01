// 初期設定
const latestActive = new Date().getTime();
wrongPassword = 0;

const loginScene = document.getElementById("loginScene");
const desktopScene = document.getElementById("desktopScene");
const talkScene = document.getElementById("talkScene");
currentScece = loginScene;


// フェードインして画面を移動
function changeScene(toScene, backgroundColor) {
    document.querySelector("body").style["background-color"] = backgroundColor;
    document.querySelector("body").inert = 1;
    currentScece.classList.add("fade-out");

    setTimeout(() => {
        currentScece.classList.add("hidden");
        currentScece.classList.remove("fade-out");
        toScene.classList.remove("hidden");
        currentScece = toScene;
        document.querySelector("body").inert = 0;
    }, 400);
}


function moveToSecret(scene) {
    wrongPassword = 0;

    document.querySelector(".login-content").classList.add("fade-out");
    document.querySelector("#loadingAnimation").classList.remove("hidden");

    setTimeout(() => {
        document.querySelector(".login-content").classList.remove("fade-out");
        document.querySelector("#loadingAnimation").classList.add("hidden");

        document.querySelector(".login-content").classList.add("hidden");
        document.querySelector(".login-content").classList.remove("hidden");

        if (scene) {
            document.querySelector("#secretVarify").classList.add("hidden");
            document.querySelector("#varify").classList.remove("hidden");
        } else {
            document.querySelector("#varify").classList.add("hidden");
            document.querySelector("#secretVarify").classList.remove("hidden");
        }

        currentScece = desktopScene;
    }, 300);
}


// パスワードチェックとシーン移動
document.querySelector("#secretQuestion").addEventListener("click", () => {
    moveToSecret();
});
document.querySelector("#pinQuestion").addEventListener("click", () => {
    moveToSecret(1);
});

function login() {
    document.getElementById("password").value = "";
    wrongPassword++;

    alert("PINが違います。");

    if (wrongPassword >= 2) {
        moveToSecret();
    }
}

function secretLogin() {
    const passwordInput = document.getElementById("secretPassword");

    if (passwordInput.value === "0302") {
        document.querySelector(".login-content").classList.add("fade-out");
        document.querySelector("#loadingAnimation").classList.remove("hidden");
        document.querySelector("#welcome").classList.remove("hidden");

        setTimeout(() => {
            document.querySelector("#loginScene").classList.add("hidden");

            document.querySelector(".login-content").classList.remove("fade-out");
            document.querySelector("#loadingAnimation").classList.add("hidden");
            document.querySelector("#welcome").classList.add("hidden");

            document.querySelector("#desktopScene").classList.remove("hidden");
            currentScece = desktopScene;
        }, 300);
    } else {
        passwordInput.value = "";
        alert("誕生日が違います。");
    }
}


// 一定時間操作がない場合ロック画面へ

let lastActivityTime = Date.now(), timeoutID;

function trackInactivity() {
    const currentTime = Date.now();
    if (currentScece != loginScene && currentTime - lastActivityTime >= 30000) {
        document.querySelector("#varify").classList.remove("hidden");
        document.querySelector("#secretVarify").classList.add("hidden");
        document.querySelector("#password").value = "";
        document.querySelector("#secretPassword").value = "";

        document.querySelector("#contactName").textContent = "";
        document.querySelector("#chatBox").innerHTML = `<img src="image/icon-lien2.png" class="centered-talk">
            <p class="centered-talk">トーク履歴はここに表示されます</p>`;

        changeScene(loginScene, "#000");
    }
    timeoutID = requestAnimationFrame(trackInactivity);
}

timeoutID = requestAnimationFrame(trackInactivity);

function resetActivity() {
    lastActivityTime = Date.now();
}

window.addEventListener("mousemove", resetActivity);
window.addEventListener("keydown", resetActivity);
window.addEventListener("click", resetActivity);
window.addEventListener("scroll", resetActivity);


// LIENアプリを開く
function openLienApp() {
    changeScene(talkScene, "#005663");
}

// トークシーンに戻るボタン
function returnToDesktop() {
    changeScene(desktopScene, "#000");
}

const allMessages = [
    [
        { author: 1, content: "送信された音源<br>[音源.mp3] 1時間30分<br>インターネットに接続されてないため再生できません", time: "24/11/01 23:00", timeImportant: true }
    ], [
        { author: 1, content: "久しぶり、おれやで", time: "24/10/28 19:34" },
        { author: 0, content: "んな詐欺みたいな", time: "24/10/28 19:48" },
        { author: 1, content: "突然で申し訳ないんだけどさ、<br>今度話せない？<br>相談したいことがあってさ", time: "24/10/28 19:50" },
        { author: 0, content: "いやまぁいいけどさ<br>忙しいくて、タイミングとれないかも", time: "24/10/28 19:50" },
        { author: 1, content: "わかった", time: "24/10/28 19:51" },
        { author: 0, content: "10/31 とかどう？", time: "24/10/28 19:52" },
        { author: 1, content: "10/31 とか空いてたりしない？", time: "24/10/28 19:52" },
        { author: 0, content: "www<br>ok、じゃあそれで", time: "24/10/28 19:53" },
        { author: 1, content: "マジでありがとう<br>ほんと助かるわ", time: "24/10/28 19:54" },
        { author: 0, content: "そしたら家でいい？<br>なんかいろいろ用意しとくからさ", time: "24/10/28 19:57" },
        { author: 1, content: "オッケー、俺もなんか買ってくわ", time: "24/10/28 19:57" },
        { author: 0, content: "じゃ、17 時ぐらいにうちに来てよ", time: "24/10/28 19:58" },
        { author: 1, content: "わかった、サンキュー", time: "24/10/28 19:58" },
        { author: 1, image: "image/pictureee.png", time: "24/10/31 17:50" },
        { author: 1, content: "さっきの写真な", time: "24/10/31 17:50" },
        { author: 0, content: "ありがと", time: "24/10/31 17:58" }
    ], [
        { author: 1, content: "申し訳無いんだけどさ、<br>事務作業少しやってくれない？", time: "24/10/21 10:02" },
        { author: 1, content: "明日までにやんなきゃだけど<br>プレゼンのスライド作らなきゃでさ", time: "24/10/21 10:03" },
        { author: 1, content: "今度飯おごるから！頼む！", time: "24/10/21 10:05" },
        { author: 0, content: "食べ放題な", time: "24/10/21 10:12" },
        { author: 1, content: "全然いいよ！マジで助かるわ！", time: "24/10/21 10:13" },
        { author: 1, content: "そしたらメールで送るからさ、そこからお願い！<br>ありがとう！", time: "24/10/21 10:15" },
        { author: 0, content: "別にいいよw<br>また今度俺のも手伝ってや～", time: "24/10/21 10:21" }
    ], [
        { author: 1, content: "本日のクーポンは...<br>#ドッカラファイン 全品 30% on", time: "24/10/10 19:18" },
        { author: 1, content: "本日のクーポンは...<br>#MgMg burger ポテト 有料", time: "24/10/03 18:46" },
        { author: 1, content: "本日のクーポンは...<br>#エイトテン はちチキ 全種 200% on", time: "24/09/26 11:12" },
        { author: 1, content: "本日のクーポンは...<br>#オンボロ電機(株) 無料", time: "24/09/19 19:29" }
    ], [
        { author: 1, content: "いつもの鯖でゲームしてるから<br>良かったら来て<br>人数が足りなくてさ", time: "24/09/06 19:28" },
        { author: 0, content: "仕事があと一時間くらいでおわるから<br>終わったら行くわ", time: "24/09/06 19:47" },
        { author: 1, content: "ありがとな！待ってるわ", time: "24/09/06 19:48" }
    ], [
        { author: 1, content: "ぼくの最新あるばむがリリース！<br>絶対きいてよ～", time: "24/08/26 18:26" },
        { author: 1, content: "今日の 22時から配信!!<br>謎の配信者 Z とコラボ！", time: "24/08/28 14:30" }
    ], [
        { author: 0, content: "よろしくお願いいたします！", time: "24/03/12 17:31" },
        { author: 1, content: "こちらこそよろしくおねがいします。", time: "24/03/12 17:32" }
    ], [
        { author: 1, content: "簡単にできるいいビジネスがあるんだ<br>このサイトにアクセスしてくれよな！", time: "24/02/12 14:47" },
        { author: 1, content: "https:/tpshtpppstps1729.io", time: "24/02/12 14:47" }
    ], [
        { author: 1, content: "今から送るリンクに書かれている３つのことを実践するだけで半年で社長になれる！？<br>httttps://sarahsarah.com/23", time: "21/06/30 4:54" }
    ], [
        { author: 0, content: "しかも今日は俺の誕生日だし<br>なんかプレゼントないわけ？", time: "13/03/02 16:06" },
        { author: 0, content: "いやー、卒業式だるかったわー<br>", time: "13/03/02 16:06" },
        { author: 0, content: "バカ留年乙w<br>小学校からやり直せよお前", time: "13/03/03 21:28" }
    ]
];

const authorName = [
    "ジュン",
    "unknown",
    "N.千田",
    "中原 俊",
    "LIEN クーポン",
    "ミヤモト",
    "ターン∀",
    "モモ",
    "内藤 投資ゼミ",
    "サラ@半年社長",
    "宮路 凛人"
];

const authorIcon = [
    "icon/jun.png",
    "icon/unko.png",
    "icon/senda.png",
    "icon/nakahara.png",
    "icon/coupon.png",
    "icon/mz.PNG",
    "icon/turn.png",
    "icon/momo.png",
    "icon/naito.png",
    "icon/mic.png",
    "icon/miyaji.png"
];

for (let i = 1; i < authorName.length; i++) {
    let contactList = document.getElementById("contactList");
    const latestMsg = allMessages[i - 1][allMessages[i - 1].length - 1].image ? "画像が送信されました" : allMessages[i - 1][allMessages[i - 1].length - 1].content;
    contactList.innerHTML += `<div onclick="openChat('${i}')" class="contact-button"><img src="${authorIcon[i]}" class="contact-icon"><p>${authorName[i]}<br><span class="latest-message">${latestMsg}</span></p></div>`;
}

// チャットを開く
function openChat(contactName) {
    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML = "";

    document.getElementById("contactName").textContent = authorName[contactName];

    const messages = allMessages[contactName - 1];

    // メッセージを表示
    messages.forEach(msg => {
        const messageDiv = document.createElement("div");
        const author = (msg.author === 0 ? 0 : contactName);
        messageDiv.classList.add("chat-message", author === 0 ? "right" : "left");

        if (msg.image) {
            messageDiv.innerHTML = `<img class="author-icon" src="${authorIcon[author]}" > <img class="embed" src="${msg.image}" >`;
        } else {
            messageDiv.innerHTML = `<img class="author-icon" src="${authorIcon[author]}" > ${msg.content}`;
        }
        messageDiv.innerHTML += `<p>${authorName[author]}` + (msg.time ?
            (` ・ <span` + (msg.timeImportant ? ` class="time-important"` : ``) + `>${msg.time}</span>`)
            : ``) + `</p>`;

        chatBox.appendChild(messageDiv);
    });

    setTimeout(() => {
        chatBox.scroll(0, chatBox.scrollHeight - chatBox.clientHeight);
    }, 100);
}
