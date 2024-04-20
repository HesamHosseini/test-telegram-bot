const {axiosInstance} = require("./axios")

function sendMessage(messageObj, messageText) {
	return axiosInstance.get("sendMessage", {
		chat_id: messageObj.chat.id,
		text: messageText,
	})
}

function handleMessage(messageObj) {

	const messageText = messageObj.text || "";
	if (messageText.charAt(0) === "/") {
		const command = messageText.substring(1)

		switch (command) {
			case "start":
				return sendMessage(messageObj, "Sallllllllam")

			default :
				return sendMessage(messageObj, "لطفا از دستورات موجود استفاده کنید")

		}

	} else {
		return sendMessage(messageObj, messageText)
	}
}


module.exports = {handleMessage}