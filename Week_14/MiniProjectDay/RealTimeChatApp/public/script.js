const chatSection = document.getElementById("chat");
const messages = document.getElementById("messages");
const chatForm = document.getElementById("chatForm");
const input = document.getElementById("msg");
const nofityBtn = document.getElementById("notifyBtn");
const activeContainer = document.getElementById("activeUsers");
const loginInsteadBtn = document.getElementById("loginInstead");

const registerSection = document.getElementById("registration");
const registerForm = document.getElementById("registerForm");
const rFeed = document.getElementById("registerFeedback");

const loginSection = document.getElementById("login");
const loginForm = document.getElementById("loginForm");
const lFeed = document.getElementById("loginFeedback");

loginInsteadBtn.addEventListener("click", () => {
    registerSection.hidden = true;
    loginSection.hidden = false;
})


let alertsEnabled = false;
// Show a notification when a new message arrives:
const audio = new Audio('./ping.mp3');

async function enableNotifications(){ // ask for permission once
    if (!("Notification" in window)) return alert("Notifications not supported in this browser");

    const perm = await Notification.requestPermission(); // "granted" | "denied" | "default"
    alertsEnabled = (perm === "granted");
}

nofityBtn.addEventListener("click", enableNotifications);


// ------------------------ REGISTER SECTION ---------------------------------
registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const dataForm = new FormData(registerForm);

    const body = { username: dataForm.get("username"), email: dataForm.get("email"), password: dataForm.get("password") };

    try {
        const res = await fetch("/registration", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        const data = await res.json();

        if (!res.ok) {
            rFeed.textContent = data.error || "There was a problem registering you";
            return;
        }

        rFeed.textContent = "You have successfully registered. Log in with your credentials to start chatting.";
        registerSection.hidden = true;
        loginSection.hidden = false;
    } catch (err) {
        rFeed.textContent = "Network error, please try again later.";
    }
});

// ------------------------ LOG IN SECTION ---------------------------------
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const dataForm = new FormData(loginForm);

    const body = { email: dataForm.get("email"), password: dataForm.get("password") };

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        const data = await res.json();

        if (!res.ok) {
            lFeed.textContent = data.error || "There was a problem loging you in";
            return;
        }

        //  SUCCESSFULL LOGIN:
        const username = data.username;
        const myUsername = username;

        lFeed.textContent = `Welcome, ${username}!`;
        loginSection.hidden = true;
        chatSection.hidden = false;

        // ------------------------ CHAT SECTION ---------------------------------

        // create socket:
        const socket = io({ auth: { username } });

        // when connected:
        socket.on("connect", () => {
            append({ username: myUsername, text: "Connected"});
        });
        
        // handle incoming messages:
        socket.on("chat:message", ({ username, text }) => {
            // update chat UI
            append({ username, text });
            // only notify if message is from someone else
            const isMine = (username === myUsername);

            if (!isMine && alertsEnabled) {
                // show toast
                new Notification("New Message", { body: text, tag: "chat-lobby" });
                // play sound
                audio.currentTime = 0;
                audio.play().catch(() => {});
            }
        });

        // // send message to server on submit
        chatForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const text = input.value.trim();
            if (!text) return;

            socket.emit("chat:message", text);// send to server
            input.value = "";
        });

        // helper to append lines/messages to the message box
        function append({ username, text }){
            const li = document.createElement("li");
            li.classList.add("message");

            // if this message was sent by me, style it as mine
            li.classList.add(username === myUsername ? "mine" : "theirs");
            li.textContent = `${username}: ${text}`;

            messages.appendChild(li);

            // auto scroll to the bottom
            messages.scrollTop = messages.scrollHeight;
        };

        // Active users
        socket.on("active-users", (users) => {
            activeContainer.innerHTML = "";
            users.forEach((u) => {
                const li = document.createElement("li");
                li.textContent = u;
                activeContainer.appendChild(li);
            });
        });

    } catch (err) {
        lFeed.textContent = "Network error, please try again later.";
    }
});



