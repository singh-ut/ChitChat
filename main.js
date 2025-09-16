/* ### SELECTING ALL ELEMENTS USING 'querySelector' ### */
const send_btn = document.querySelector("#send-btn");
const user_input = document.querySelector("#message-input");

// ### MESSAGE SENDING FUNCTIONALITY ###
const sendMsg = () => {
  const user_message = user_input.value.trim();

  console.log(user_message);

  user_input.value = "";
};

// ### EVENT LISTENER TO 'SEND' BUTTON ###
send_btn.addEventListener("click", sendMsg);
