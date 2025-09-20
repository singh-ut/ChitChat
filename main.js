// REQUIRED ALL ELEMENTS
const chat_window = document.querySelector("#chat-window");
const message_input = document.querySelector("#message-input");
const send_button = document.querySelector("#send-btn");

// FUNCTION FOR DISPLAYING MESSAGES
const displayMsgs = (message) => {
  const msgElement = document.createElement("div");
  msgElement.classList.add("message");
  msgElement.innerText = message;
  chat_window.appendChild(msgElement);
};

// FUNCTION FOR SENDING MESSAGE
const sendMsg = () => {
  const trimmedMsg = message_input.value.trim();

  if (trimmedMsg !== "") {
    displayMsgs(trimmedMsg);

    const messages = JSON.parse(localStorage.getItem("chatMsgs")) || [];

    messages.push(trimmedMsg);

    localStorage.setItem("chatMsgs", JSON.stringify(messages));

    message_input.value = "";
  }
};

// GETTING ALL SAVED MESSAGES IN LOCAL STORAGE (IF ANY)
document.addEventListener("DOMContentLoaded", () => {
  const savedMessagesJson = localStorage.getItem("chatMsgs");

  if (savedMessagesJson) {
    const savedMessages = JSON.parse(localStorage.getItem("chatMsgs"));

    savedMessages.forEach((msg) => {
      displayMsgs(msg);
    });
  }

  send_button.addEventListener("click", sendMsg);

  message_input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      sendMsg();
    }
  });
});

chat_window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const deletePermission = prompt(
    `Do you want to delete the message? (type yes to delete)`
  );

  if (deletePermission === "yes") {
    const storageSaved = JSON.parse(localStorage.getItem("chatMsgs"));
    const remaining = storageSaved.filter(
      (item) => e.target.innerText !== item
    );
    localStorage.setItem("chatMsgs", JSON.stringify(remaining));

    chat_window.removeChild(e.target);
  }
});
