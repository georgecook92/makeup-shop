"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function o(r,s){try{var a=n[r](s),c=a.value}catch(e){return void t(e)}return a.done?void e(c):Promise.resolve(c).then(function(e){o("next",e)},function(e){o("throw",e)})}return o("next")})}}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),_email=require("../email/email.js"),_email2=_interopRequireDefault(_email),bcrypt=require("bcrypt"),pool=require("../db/connect.js"),saltRounds=10,randomstring=require("randomstring"),AuthModel=function(){function e(n,t,o){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";_classCallCheck(this,e),this.sql=r,this.data=n,this.res=t,this.next=o,this.secondSQL=s}return _createClass(e,[{key:"forgotPasswordSetup",value:function(){var e=this;pool.getConnection().then(function(n){var t=randomstring.generate({length:20,charset:"hex"});return n.query(e.sql,[t,e.data.email]).then(function(o){if(!(o.changedRows>0))throw n.connection.release(),new Error("User Does Not Exist");n.connection.release();var r="www.testsite.com",s="You are receiving this because you have requested to reset your password. Please click on the following link, or paste this into your browser to completethe process:\n\n"+r+"/resetForgottenPassword/"+t+"\n\n After confirming your password you will be able to login.\n",a=new _email2.default(e.data.email,"forgotten-password@makeup.com","Forgotten Password",s,e.res);a.sendTokenEmail()}).catch(function(n){n&&(console.log(n),e.next(n))})})}},{key:"changePassword",value:function(e){var n=this;pool.getConnection().then(function(t){try{bcrypt.genSalt(saltRounds,function(o,r){if(o)throw new Error(o);bcrypt.hash(n.data.password,r,function(o,r){if(o)throw new Error(o);return n.data.password=r,t.query(n.sql,[n.data.password,e]).then(function(o){if(console.log(o),!(o.changedRows>0))throw t.connection.release(),new Error("User Does Not Exist");"string"==typeof e&&t.query(n.secondSQL,[e]).then(function(e){if(!(e.changedRows>0))throw t.connection.release(),new Error("User Does Not Exist");t.connection.release(),n.res.status(200).json({success:!0})}).catch(function(e){throw t.connection.release(),new Error("User Does Not Exist")}),t.connection.release(),n.res.status(200).json({success:!0})}).catch(function(e){console.log(e),n.next(e)})})})}catch(e){console.log(e),n.next(e)}}).catch(function(e){console.log(e),n.next(e)})}},{key:"confirmUser",value:function(){function e(){return n.apply(this,arguments)}var n=_asyncToGenerator(regeneratorRuntime.mark(function e(){var n,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pool.getConnection();case 3:return n=e.sent,e.next=6,n.query(this.sql,[this.data.token]);case 6:if(t=e.sent,console.log(t.changedRows),!(t.changedRows>0)){e.next=13;break}n.connection.release(),this.res.status(200).json({success:!0}),e.next=15;break;case 13:throw n.connection.release(),new Error("User Does Not Exist");case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0),this.next(e.t0);case 21:case"end":return e.stop()}},e,this,[[0,17]])}));return e}()},{key:"register",value:function(){var e=this,n=this.data,t=n.email,o=n.password,r=n.first_name,s=n.last_name,a=n.phone,c={email:t,password:o,first_name:r,last_name:s,phone:a},i=randomstring.generate({length:20,charset:"hex"});c.token=i;try{if(!(t&&o&&r&&s&&a))throw console.log("error - not all fields"),new Error("Provide All Fields");pool.getConnection().then(function(n){return n.query(e.sql,[e.data.email]).then(function(t){if(t.length>0)throw n.connection.release(),new Error("Exists");try{bcrypt.genSalt(saltRounds,function(t,o){if(t)throw n.connection.release(),new Error(t);bcrypt.hash(e.data.password,o,function(t,o){if(t)throw n.connection.release(),new Error(t);return c.password=o,pool.getConnection().then(function(n){return n.query("INSERT INTO _users SET ?",c).then(function(t){var o="www.testsite.com",r="You are receiving this because you (or someone else) have signed up to the website.\n\n Please click on the following link, or paste this into your browser to completethe process:\n\n"+o+"/confirmEmail/"+c.token+"\n\n Once you have confirmed your account, you will be able to login.\n",s=new _email2.default(e.data.email,"userconfirmation@makeup.com","Confirm Account",r,e.res);s.sendTokenEmail(),n.connection.release()})})})})}catch(n){console.log(n),e.next(n)}})}).catch(function(n){console.log(n),e.next(n)})}catch(e){console.log(e),this.next(e)}}},{key:"login",value:function(){var e=this;pool.getConnection().then(function(n){return n.query(e.sql,[e.data.email]).then(function(t){t.length>0&&bcrypt.compare(e.data.password,t[0].password,function(o,r){try{if(o)throw n.connection.release(),console.log(o),new Error(o);if(!r)throw n.connection.release(),new Error("Incorrect Password");n.connection.release(),console.log(t[0]),e.res.status(200).json({user_id:t[0].user_id,email:t[0].email,first_name:t[0].first_name,last_name:t[0].last_name,phone:t[0].phone})}catch(n){console.log(n),e.next(n)}})}).catch(function(n){console.log(n),e.next(n)})})}}]),e}();exports.default=AuthModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2F1dGhNb2RlbC5qcyJdLCJuYW1lcyI6WyJfZW1haWwiLCJyZXF1aXJlIiwiYmNyeXB0IiwicG9vbCIsInNhbHRSb3VuZHMiLCJyYW5kb21zdHJpbmciLCJBdXRoTW9kZWwiLCJkYXRhIiwicmVzIiwibmV4dCIsInNxbCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInNlY29uZFNRTCIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJfdGhpcyIsImdldENvbm5lY3Rpb24iLCJ0aGVuIiwiY29ubmVjdGlvbiIsImdlbmVyYXRlIiwicXVlcnkiLCJ0b2tlbiIsImVtYWlsIiwicmVzdWx0IiwiY2hhbmdlZFJvd3MiLCJyZWxlYXNlIiwiRXJyb3IiLCJ1cmwiLCJfZW1haWwyIiwiZGVmYXVsdCIsImVtYWlsQ29udGVudCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImlkZW50aWZpZXIiLCJfdGhpczIiLCJnZW5TYWx0Iiwic2FsdCIsImhhc2giLCJwYXNzd29yZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJlIiwiX2NvbnRleHQiLCJ0MCIsIl90aGlzMyIsIl9kYXRhIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInBob25lIiwidXNlciIsImNoYXJzZXQiLCJyZWdpc3RlclRva2VuIiwiY29ubiIsInJlZ2lzdGVyRW1haWxDb250ZW50Iiwic2VuZFRva2VuRW1haWwiLCJfdGhpczQiLCJjb21wYXJpc29uVmFsdWUiXSwibWFwcGluZ3MiOiJ5eUJBSUFBLE9BQUFDLFFBQUEsNERBSklDLE9BQVNELFFBQVEsVUFDakJFLEtBQU9GLFFBQVEsb0JBQ2JHLFdBQWEsR0FDYkMsYUFBZUosUUFBUSxnQkFHUksscUJBRnJCLFFBQUFBLEdBQUFDLEVBQUFDLEVBQUFDLEdBQUEsR0FBQUMsR0FBQUMsVUFBQUMsT0FBQSxHQUFBQyxTQUFBRixVQUFBLEdBQUFBLFVBQUEsR0FBQSxHQUFBRyxFQUFBSCxVQUFBQyxP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LFNBQUFDLEdBQ0ZDLFFBQUFDLElBQUFGLEdBQ0YyQixFQUFBcEQsS0FBQXlCLGdDQWpPRTVCIiwiZmlsZSI6Im1vZGVsL2F1dGhNb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBiY3J5cHQgPSByZXF1aXJlKCdiY3J5cHQnKTtcbnZhciBwb29sID0gcmVxdWlyZSgnLi4vZGIvY29ubmVjdC5qcycpO1xuY29uc3Qgc2FsdFJvdW5kcyA9IDEwO1xuY29uc3QgcmFuZG9tc3RyaW5nID0gcmVxdWlyZSgncmFuZG9tc3RyaW5nJyk7XG5pbXBvcnQgRW1haWwgZnJvbSAnLi4vZW1haWwvZW1haWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoTW9kZWwge1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEsIHJlcywgbmV4dCwgc3FsID0gJycsIHNlY29uZFNRTCA9ICcnKSB7XG4gICAgdGhpcy5zcWwgPSBzcWw7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnJlcyA9IHJlcztcbiAgICB0aGlzLm5leHQgPSBuZXh0O1xuICAgIHRoaXMuc2Vjb25kU1FMID0gc2Vjb25kU1FMO1xuICB9XG5cbiAgZm9yZ290UGFzc3dvcmRTZXR1cCgpIHtcbiAgICBwb29sLmdldENvbm5lY3Rpb24oKS50aGVuKGNvbm5lY3Rpb24gPT4ge1xuICAgICAgdmFyIHRva2VuID0gcmFuZG9tc3RyaW5nLmdlbmVyYXRlKHtcbiAgICAgICAgbGVuZ3RoOiAyMCxcbiAgICAgICAgY2hhcnNldDogJ2hleCdcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbm5lY3Rpb24ucXVlcnkodGhpcy5zcWwsIFt0b2tlbiwgdGhpcy5kYXRhLmVtYWlsXSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LmNoYW5nZWRSb3dzID4gMCkge1xuICAgICAgICAgIGNvbm5lY3Rpb24uY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgdmFyIHVybCA9ICd3d3cudGVzdHNpdGUuY29tJztcbiAgICAgICAgICB2YXIgZW1haWxDb250ZW50ID0gJ1lvdSBhcmUgcmVjZWl2aW5nIHRoaXMgYmVjYXVzZSB5b3UgaGF2ZSByZXF1ZXN0ZWQgdG8gcmVzZXQgeW91ciBwYXNzd29yZC4gJyArXG4gICAgICAgICAgJ1BsZWFzZSBjbGljayBvbiB0aGUgZm9sbG93aW5nIGxpbmssIG9yIHBhc3RlIHRoaXMgaW50byB5b3VyIGJyb3dzZXIgdG8gY29tcGxldGUnICtcbiAgICAgICAgICAgJ3RoZSBwcm9jZXNzOlxcblxcbicgKyB1cmwgKyAnL3Jlc2V0Rm9yZ290dGVuUGFzc3dvcmQvJyArIHRva2VuICsgJ1xcblxcbiBBZnRlciBjb25maXJtaW5nIHlvdXIgcGFzc3dvcmQnICtcbiAgICAgICAgICAgJyB5b3Ugd2lsbCBiZSBhYmxlIHRvIGxvZ2luLlxcbic7XG4gICAgICAgICAgdmFyIGVtYWlsID0gbmV3IEVtYWlsKHRoaXMuZGF0YS5lbWFpbCwgJ2ZvcmdvdHRlbi1wYXNzd29yZEBtYWtldXAuY29tJywgJ0ZvcmdvdHRlbiBQYXNzd29yZCcsIGVtYWlsQ29udGVudCwgdGhpcy5yZXMpO1xuICAgICAgICAgIGVtYWlsLnNlbmRUb2tlbkVtYWlsKCk7IC8vIHRoaXMgc2VuZHMgYSByZXNwb25zZSBhbHNvXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgRG9lcyBOb3QgRXhpc3QnKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB0aGlzLm5leHQoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gIHtcbiAgLy8gICAgIGJjcnlwdC5nZW5TYWx0KHNhbHRSb3VuZHMsIChlcnIsIHNhbHQpID0+IHtcbiAgLy8gICAgICAgaWYgKGVycikge1xuICAvLyAgICAgICAgIHJlamVjdChlcnIpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICAgIGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0LCAoZXJyLCBoYXNoKSA9PiB7XG4gIC8vICAgICAgICAgaWYgKGVycikge1xuICAvLyAgICAgICAgICAgcmVqZWN0KGVycik7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICAgIHJlc29sdmUoaGFzaCk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSlcbiAgLy8gfVxuICAvL1xuICAvLyB1cGRhdGVQYXNzd29yZChjb25uZWN0aW9uLCBwYXNzd29yZCwgaWRlbnRpZmllcikge1xuICAvLyAgIHJldHVybiBjb25uZWN0aW9uLnF1ZXJ5KHRoaXMuc3FsLCBbcGFzc3dvcmQsIGlkZW50aWZpZXJdKVxuICAvLyB9XG4gIC8vIHJlbW92ZVRva2VuKGNvbm5lY3Rpb24sIGlkZW50aWZpZXIpIHtcbiAgLy8gICByZXR1cm4gY29ubmVjdGlvbi5xdWVyeSh0aGlzLnNlY29uZFNRTCwgW2lkZW50aWZpZXJdKTtcbiAgLy8gfVxuICAvLyBjaGFuZ2VQYXNzd29yZE5ldyhpZGVudGlmaWVyKSB7XG4gIC8vICAgdmFyIGdldENvbm5lY3Rpb24gPSBwb29sLmdldENvbm5lY3Rpb24oKTtcbiAgLy8gICB2YXIgaGFzaFBhc3N3b3JkID0gZ2V0Q29ubmVjdGlvbi50aGVuKGNvbm5lY3Rpb24gPT4ge1xuICAvLyAgICAgcmV0dXJuIHRoaXMuaGFzaFBhc3N3b3JkKHRoaXMuZGF0YS5wYXNzd29yZCk7XG4gIC8vICAgfSk7XG4gIC8vICAgdmFyIHVwZGF0ZVBhc3N3b3JkID0gUHJvbWlzZS5hbGwoW2dldENvbm5lY3Rpb24sIGhhc2hQYXNzd29yZF0pLnNwcmVhZCgoY29ubmVjdGlvbiwgcGFzc3dvcmQpID0+IHtcbiAgLy8gICAgIHJldHVybiB0aGlzLnVwZGF0ZVBhc3N3b3JkKGNvbm5lY3Rpb24sIHBhc3N3b3JkLCBpZGVudGlmaWVyKTtcbiAgLy8gICB9KTtcbiAgLy8gICB2YXIgcmVtb3ZlVG9rZW4gPSBQcm9taXNlLmFsbChbZ2V0Q29ubmVjdGlvbiwgaGFzaFBhc3N3b3JkLCB1cGRhdGVQYXNzd29yZF0pLnNwcmVhZCgoY29ubmVjdGlvbiwgcGFzc3dvcmQsIHJlc3VsdCkgPT4ge1xuICAvLyAgICAgaWYgKHJlc3VsdC5jaGFuZ2VkUm93cyA+IDApIHsgLy8gaWYgdGhlIGlkZW50aWZpZXIgd2FzIHRoZSB0b2tlbiAtIGRvIGFub3RoZXIgcXVlcnkgd2hpY2ggcmVtb3ZlcyB0aGUgdG9rZW5cbiAgLy8gICAgICAgaWYgKHR5cGVvZiBpZGVudGlmaWVyID09PSAnc3RyaW5nJykge1xuICAvLyAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZVRva2VuKGNvbm5lY3Rpb24sIGlkZW50aWZpZXIpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vICAgcmVtb3ZlVG9rZW4udGhlbigoKSA9PiB7XG4gIC8vICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2dldENvbm5lY3Rpb25dKS5zcHJlYWQoY29ubmVjdGlvbiA9PiB7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIGNoYW5nZVBhc3N3b3JkKGlkZW50aWZpZXIpIHtcbiAgICBwb29sLmdldENvbm5lY3Rpb24oKS50aGVuKGNvbm5lY3Rpb24gPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYmNyeXB0LmdlblNhbHQoc2FsdFJvdW5kcywgKGVyciwgc2FsdCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBiY3J5cHQuaGFzaCh0aGlzLmRhdGEucGFzc3dvcmQsIHNhbHQsIChlcnIsIGhhc2gpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGEucGFzc3dvcmQgPSBoYXNoO1xuICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb24ucXVlcnkodGhpcy5zcWwsIFt0aGlzLmRhdGEucGFzc3dvcmQsIGlkZW50aWZpZXJdKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuY2hhbmdlZFJvd3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGlkZW50aWZpZXIgd2FzIHRoZSB0b2tlbiAtIGRvIGFub3RoZXIgcXVlcnkgd2hpY2ggcmVtb3ZlcyB0aGUgdG9rZW5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlkZW50aWZpZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5KHRoaXMuc2Vjb25kU1FMLCBbaWRlbnRpZmllcl0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jaGFuZ2VkUm93cyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uLmNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24uY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIERvZXMgTm90IEV4aXN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIERvZXMgTm90IEV4aXN0Jyk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLmNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVXNlciBEb2VzIE5vdCBFeGlzdCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgdGhpcy5uZXh0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHRoaXMubmV4dChlKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHRoaXMubmV4dChlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgY29uZmlybVVzZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBjb25uZWN0aW9uID0gYXdhaXQgcG9vbC5nZXRDb25uZWN0aW9uKCk7XG4gICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSh0aGlzLnNxbCwgW3RoaXMuZGF0YS50b2tlbl0pO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmNoYW5nZWRSb3dzKTtcbiAgICAgIGlmIChyZXN1bHQuY2hhbmdlZFJvd3MgPiAwKSB7XG4gICAgICAgIC8vICBob3cgdGhlIG15c3FsIGxpYnJhcnkgaXMgd3JhcHBlZCAtIHN0YWNrb3ZlcmZsb3dcbiAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgdGhpcy5yZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICBob3cgdGhlIG15c3FsIGxpYnJhcnkgaXMgd3JhcHBlZCAtIHN0YWNrb3ZlcmZsb3dcbiAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIERvZXMgTm90IEV4aXN0Jyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB0aGlzLm5leHQoZSk7XG4gICAgfVxuICAgIC8vIHBvb2wuZ2V0Q29ubmVjdGlvbigpLnRoZW4oY29ubmVjdGlvbiA9PiB7XG4gICAgLy8gICByZXR1cm4gY29ubmVjdGlvbi5xdWVyeSh0aGlzLnNxbCwgW3RoaXMuZGF0YS50b2tlbl0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3Jlc3VsdCcsIHJlc3VsdCk7XG4gICAgLy8gICAgIGlmIChyZXN1bHQuY2hhbmdlZFJvd3MgPiAwKSB7XG4gICAgLy8gICAgICAgLy8gIGhvdyB0aGUgbXlzcWwgbGlicmFyeSBpcyB3cmFwcGVkIC0gc3RhY2tvdmVyZmxvd1xuICAgIC8vICAgICAgIGNvbm5lY3Rpb24uY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgLy8gICAgICAgdGhpcy5yZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgLy8gICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgLy8gICAgICAgfSk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgLy8gIGhvdyB0aGUgbXlzcWwgbGlicmFyeSBpcyB3cmFwcGVkIC0gc3RhY2tvdmVyZmxvd1xuICAgIC8vICAgICAgIGNvbm5lY3Rpb24uY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIERvZXMgTm90IEV4aXN0Jyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pO1xuICAgIC8vIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIC8vICAgdGhpcy5uZXh0KGVycik7XG4gICAgLy8gfSk7XG4gIH1cblxuICByZWdpc3RlcigpIHtcbiAgICB2YXIge2VtYWlsLCBwYXNzd29yZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBwaG9uZX0gPSB0aGlzLmRhdGE7XG4gICAgdmFyIHVzZXIgPSB7ZW1haWwsIHBhc3N3b3JkLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIHBob25lfTtcbiAgICB2YXIgcmVnaXN0ZXJUb2tlbiA9IHJhbmRvbXN0cmluZy5nZW5lcmF0ZSh7XG4gICAgICBsZW5ndGg6IDIwLFxuICAgICAgY2hhcnNldDogJ2hleCdcbiAgICB9KTtcbiAgICB1c2VyLnRva2VuID0gcmVnaXN0ZXJUb2tlbjtcbiAgICB0cnkge1xuICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIWZpcnN0X25hbWUgfHwgIWxhc3RfbmFtZSB8fCAhcGhvbmUpIHtcbiAgICAgICAgLy8gdG8gZG8gd2l0aCB0aGUgbm9kZS1teXNxbCBsaWJyYXJ5XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciAtIG5vdCBhbGwgZmllbGRzJyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUHJvdmlkZSBBbGwgRmllbGRzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb29sLmdldENvbm5lY3Rpb24oKS50aGVuKGNvbm5lY3Rpb24gPT4ge1xuICAgICAgICAgIHJldHVybiBjb25uZWN0aW9uLnF1ZXJ5KHRoaXMuc3FsLCBbdGhpcy5kYXRhLmVtYWlsXSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGNvbm5lY3Rpb24uY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhpc3RzJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJjcnlwdC5nZW5TYWx0KHNhbHRSb3VuZHMsIChlcnIsIHNhbHQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBiY3J5cHQuaGFzaCh0aGlzLmRhdGEucGFzc3dvcmQsIHNhbHQsIChlcnIsIGhhc2gpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24uY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdXNlci5wYXNzd29yZCA9IGhhc2g7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb29sLmdldENvbm5lY3Rpb24oKS50aGVuKGNvbm4gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25uLnF1ZXJ5KCdJTlNFUlQgSU5UTyBfdXNlcnMgU0VUID8nLCB1c2VyKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gJ3d3dy50ZXN0c2l0ZS5jb20nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2lzdGVyRW1haWxDb250ZW50ID0gJ1lvdSBhcmUgcmVjZWl2aW5nIHRoaXMgYmVjYXVzZSB5b3UgKG9yIHNvbWVvbmUgZWxzZSkgaGF2ZSBzaWduZWQgdXAgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAndG8gdGhlIHdlYnNpdGUuXFxuXFxuIFBsZWFzZSBjbGljayBvbiB0aGUgZm9sbG93aW5nIGxpbmssIG9yIHBhc3RlIHRoaXMgaW50byB5b3VyIGJyb3dzZXIgdG8gY29tcGxldGUnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAndGhlIHByb2Nlc3M6XFxuXFxuJyArIHVybCArICcvY29uZmlybUVtYWlsLycgKyB1c2VyLnRva2VuICsgJ1xcblxcbiBPbmNlIHlvdSBoYXZlIGNvbmZpcm1lZCB5b3VyIGFjY291bnQsJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJyB5b3Ugd2lsbCBiZSBhYmxlIHRvIGxvZ2luLlxcbic7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1haWwgPSBuZXcgRW1haWwodGhpcy5kYXRhLmVtYWlsLCAndXNlcmNvbmZpcm1hdGlvbkBtYWtldXAuY29tJywgJ0NvbmZpcm0gQWNjb3VudCcsIHJlZ2lzdGVyRW1haWxDb250ZW50LCB0aGlzLnJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbC5zZW5kVG9rZW5FbWFpbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29ubi5jb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB0aGlzLm5leHQoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB0aGlzLm5leHQoZSk7XG4gICAgfVxuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgcG9vbC5nZXRDb25uZWN0aW9uKCkudGhlbihjb25uZWN0aW9uID0+IHtcbiAgICAgIHJldHVybiBjb25uZWN0aW9uLnF1ZXJ5KHRoaXMuc3FsLCBbdGhpcy5kYXRhLmVtYWlsXSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyBMb2FkIGhhc2ggZnJvbSB5b3VyIHBhc3N3b3JkIERCLlxuICAgICAgICAgIGJjcnlwdC5jb21wYXJlKHRoaXMuZGF0YS5wYXNzd29yZCwgcmVzdWx0WzBdLnBhc3N3b3JkLCAoZXJyLCBjb21wYXJpc29uVmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLmNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRbMF0pO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgdXNlcl9pZDogcmVzdWx0WzBdLnVzZXJfaWQsXG4gICAgICAgICAgICAgICAgICBlbWFpbDogcmVzdWx0WzBdLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogcmVzdWx0WzBdLmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgICBsYXN0X25hbWU6IHJlc3VsdFswXS5sYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgICBwaG9uZTogcmVzdWx0WzBdLnBob25lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luY29ycmVjdCBQYXNzd29yZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICB0aGlzLm5leHQoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIHRoaXMubmV4dChlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
