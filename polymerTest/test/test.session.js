
//var Session = require('../session.js');
//console.log(Session);
var expect = chai.expect;

//console.log(js.Session);
describe('Session', function(){
	var session = new Session();
	describe('#makeElement()', function(){
		var el = session.makeElement("video", "test");
		it('should return a video element with the correct channel', function(){
			assert.equal("test", el.channel);
		})
	})
	describe('#getOne()', function(){
		it("sould always return one", function(){
			expect(session.getOne()).to.equal(1);
		})
	})
})
