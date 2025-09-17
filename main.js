/* ### SELECTING ALL ELEMENTS & TARGETING ### */
const send_btn = document.querySelector("#send-btn");
const user_input = document.querySelector("#message-input");
const chat_window = document.querySelector("#chat-window");

// ### MESSAGE SENDING FUNCTIONALITY ###
const sendMsg = () => {
  const user_message = user_input.value.trim();

  if (user_message !== "") {
    const message_element = document.createElement("div");
    message_element.classList.add("message");
    message_element.innerText = user_message;
    chat_window.appendChild(message_element);
    chat_window.scrollTop = chat_window.scrollHeight;
  }

  user_input.value = "";
};

// ### EVENT LISTENER TO 'SEND' BUTTON ###
send_btn.addEventListener("click", sendMsg);

// ### EVENT LISTENER TO 'ENTER' KEY ###
user_input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    sendMsg();
  }
});
