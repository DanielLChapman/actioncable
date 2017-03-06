App.messages = App.cable.subscriptions.create('MessagesChannel', {
	recieved: function(data) {
		$("#messages").removeClass('hidden')
		return $('#messages').appent(this.renderMessage(data));
	},
	
	renderMessage: function(data) {
		return "<p> <b>" + data.user + ": </b>" + data.message + "</p>";
	}
});