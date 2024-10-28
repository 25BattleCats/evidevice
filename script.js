// パスワードチェックとシーン移動
function login() {
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;

    if (password === "") {
        document.querySelector(".login-content").classList.add("hidden");
        const loadingAnimation = document.getElementById("loadingAnimation");
        loadingAnimation.classList.remove("hidden");

        // ローディングアニメーション後デスクトップに移行
        setTimeout(() => {
            document.getElementById("loginScene").classList.add("hidden");
            document.getElementById("desktopScene").classList.remove("hidden");
        }, 500);
    } else {
        passwordInput.value = "";
        alert("パスワードが違います。");
    }
}

// LIENアプリを開く
function openLienApp() {
    document.getElementById("desktopScene").classList.add("hidden");
    document.getElementById("talkScene").classList.remove("hidden");
}

// トークシーンに戻るボタン
function returnToDesktop() {
    document.getElementById("talkScene").classList.add("hidden");
    document.getElementById("desktopScene").classList.remove("hidden");
}

// チャットを開く
function openChat(contactName) {
    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML = "";  // チャット内容をクリア

    // テストメッセージ
    const messages = [
        { sender: "ジュン", text: `こんにちは、${contactName}さん！`, icon: "user-icon.png" },
        { sender: contactName, text: "こんにちは、ジュン！", icon: `${contactName.toLowerCase()}-icon.png` }
    ];

    // メッセージを表示
    messages.forEach(msg => {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message", msg.sender === "ジュン" ? "right" : "left");
        messageDiv.innerHTML = `<img src="${msg.icon}" alt="${msg.sender}アイコン"> ${msg.text}`;
        chatBox.appendChild(messageDiv);
    });
}
