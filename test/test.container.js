
//var Session = require('../session.js');
//console.log(Session);
var expect = chai.expect;

//console.log(js.Session);
document.addEventListener('polymer-ready', function() {
	var container = new WebRTCContainer();
	describe('Container', function(){
		container.initialize("test");
		describe('sessionid', function(){
			it('should be properly set after initialize', function(){
				expect(container.connection.sessionid).to.equal('test');
			})
		})
		describe('#addElements()', function(){
			container.addElements();
			
			it('should add a videochat element', function(){
				expect(container.vidEl).to.exist;
			});
			it('should add a textchat element', function(){
				expect(container.textEl).to.exist;
			});
			it('should add a map element', function(){
				expect(container.mapEl).to.exist;
			});
			
		});
		describe('VideochatElement', function(){
			it('should have proper sessionid', function(){
				expect(container.vidEl.connection.sessionid).to.equal('video_test');
			})
		})
		describe('TextchatElement', function(){
			it('should have proper sessionid', function(){
				expect(container.textEl.connection.sessionid).to.equal('text_test');
			})
		})
		describe('MapElement', function(){
			it('should have proper sessionid', function(){
				expect(container.mapEl.connection.sessionid).to.equal('map_test');
			})
		})
	})
})
