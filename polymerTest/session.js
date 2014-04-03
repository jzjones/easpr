

function Session(){

};

document.addEventListener('polymer-ready', function() {

	Session.prototype.makeElement = function (type, channel) {
		if(type == "video"){
			var vidEl = new videoChatElement();
			vidEl.initialize(channel,{video:true,audio:true, screen: false, data: false});
			return vidEl;
		}
		else{
			return null;
		}
	};
})
