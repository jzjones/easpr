
//var Session = require('../session.js');
//console.log(Session);
var expect = chai.expect;

//console.log(js.Session);
document.addEventListener('polymer-ready', function() {

	describe('Session', function(){
		var session = new Session();
		describe('#makeElement()', function(){
			var vidEl = session.makeElement("video", "test");
			
			it('should return an element with the correct channel', function(){
				expect(vidEl.connection.channel).to.equal("test");
			})
			it('should return an element with the correct session type', function(){
				expect(vidEl.connection.session.video).to.equal(true);
				expect(vidEl.connection.session.audio).to.equal(true);
				expect(vidEl.connection.session.data).to.equal(false);
				expect(vidEl.connection.session.screen).to.equal(false);
			})
		})
	})
})
