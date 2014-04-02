function Session(){

};

Session.prototype.getOne = function(){
	return 1;
};

Session.prototype.makeElement = function (type, channel) {
	if(type == "video"){
		var vidEl = new videoChatElement();
		vidEl.initialize(channel,{video:true,audio:true});
		return vidEl;
	}
	else{
		return null;
	}
};
