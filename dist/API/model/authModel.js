"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(s,a){try{var o=t[s](a),c=o.value}catch(e){return void n(e)}return o.done?void e(c):Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_email=require("../email/email.js"),_email2=_interopRequireDefault(_email),bcrypt=require("bcrypt"),pool=require("../db/connect.js"),saltRounds=10,randomstring=require("randomstring"),jwt=require("jsonwebtoken"),secret=require("../general/jwtSecret.js"),AuthModel=function(){function e(t,n,r){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";_classCallCheck(this,e),this.sql=s,this.data=t,this.res=n,this.next=r,this.secondSQL=a}return _createClass(e,[{key:"hashPassword",value:function(e){return new Promise(function(t,n){bcrypt.genSalt(saltRounds,function(r,s){r&&n(r),bcrypt.hash(e,s,function(e,r){e&&n(e),t(r)})})})}},{key:"comparePassword",value:function(e,t){return new Promise(function(n,r){bcrypt.compare(e,t,function(e,t){e&&r(e),n(t)})})}},{key:"forgotPasswordSetup",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,s,a,o,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pool.getConnection();case 3:return t=e.sent,n=randomstring.generate({length:20,charset:"hex"}),e.next=7,t.query(this.sql,[n,this.data.email]);case 7:if(r=e.sent,!(r.changedRows>0)){e.next=19;break}return t.connection.release(),s="www.testsite.com",a="You are receiving this because you have requested to reset your password. Please click on the following link, or paste this into your browser to completethe process:\n\n"+s+"/resetForgottenPassword/"+n+"\n\n After confirming your password you will be able to login.\n",o=new _email2.default(this.data.email,"forgotten-password@makeup.com","Forgotten Password",a,this.res),e.next=15,o.sendTokenEmail();case 15:c=e.sent,c&&this.res.json({success:"Email has been sent"}),e.next=21;break;case 19:throw t.connection.release(),new Error("User Does Not Exist");case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(0),console.log(e.t0),this.next(e.t0);case 27:case"end":return e.stop()}},e,this,[[0,23]])}));return e}()},{key:"changePassword",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,s,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.hashPassword(this.data.password);case 3:return n=e.sent,e.next=6,pool.getConnection();case 6:return r=e.sent,e.next=9,r.query(this.sql,[n,t]);case 9:if(s=e.sent,!(s.changedRows>0)){e.next=28;break}if("string"!=typeof t){e.next=24;break}return e.next=14,r.query(this.secondSQL,[t]);case 14:if(a=e.sent,!(a.changedRows>0)){e.next=20;break}r.connection.release(),this.res.status(200).json({success:!0}),e.next=22;break;case 20:throw r.connection.release(),new Error("User Does Not Exist");case 22:e.next=26;break;case 24:r.connection.release(),this.res.status(200).json({success:!0});case 26:e.next=30;break;case 28:throw r.connection.release(),new Error("User Does Not Exist");case 30:e.next=36;break;case 32:e.prev=32,e.t0=e.catch(0),console.log(e.t0),this.next(e.t0);case 36:case"end":return e.stop()}},e,this,[[0,32]])}));return e}()},{key:"confirmUser",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pool.getConnection();case 3:return t=e.sent,e.next=6,t.query(this.sql,[this.data.token]);case 6:if(n=e.sent,!(n.changedRows>0)){e.next=12;break}t.connection.release(),this.res.status(200).json({success:!0}),e.next=14;break;case 12:throw t.connection.release(),new Error("User Does Not Exist");case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0),this.next(e.t0);case 20:case"end":return e.stop()}},e,this,[[0,16]])}));return e}()},{key:"register",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,s,a,o,c,i,u,l,h,p;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.data,n=t.email,r=t.password,s=t.first_name,a=t.last_name,o=t.phone,c={email:n,password:r,first_name:s,last_name:a,phone:o},i=randomstring.generate({length:20,charset:"hex"}),c.token=i,e.next=12,pool.getConnection();case 12:return u=e.sent,e.next=15,u.query(this.sql,[this.data.email]);case 15:if(l=e.sent,!(l.length>0)){e.next=21;break}throw u.connection.release(),new Error("Exists");case 21:return e.next=23,this.hashPassword(this.data.password);case 23:return h=e.sent,c.password=h,e.next=27,u.query(this.secondSQL,c);case 27:p=e.sent,console.log("insert result",p),p.affectedRows&&this.res.json({success:!0}),u.connection.release();case 31:e.next=37;break;case 33:e.prev=33,e.t0=e.catch(0),console.log(e.t0),this.next(e.t0);case 37:case"end":return e.stop()}},e,this,[[0,33]])}));return e}()},{key:"login",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,s,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pool.getConnection();case 3:return t=e.sent,e.next=6,t.query(this.sql,[this.data.email]);case 6:if(n=e.sent,!(n.length>0)){e.next=22;break}return r=n[0].user_id,e.next=11,this.comparePassword(this.data.password,n[0].password);case 11:if(s=e.sent,!s){e.next=18;break}a=jwt.sign({user_id:r},secret,{expiresIn:1440}),t.connection.release(),this.res.status(200).json({user_id:n[0].user_id,email:n[0].email,first_name:n[0].first_name,last_name:n[0].last_name,phone:n[0].phone,token:a}),e.next=20;break;case 18:throw t.connection.release(),new Error("Incorrect Password");case 20:e.next=24;break;case 22:throw t.connection.release(),new Error("User Does Not Exist");case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(0),console.log(e.t0),this.next(e.t0);case 30:case"end":return e.stop()}},e,this,[[0,26]])}));return e}()}]),e}();exports.default=AuthModel;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2F1dGhNb2RlbC5qcyJdLCJuYW1lcyI6WyJfZW1haWwiLCJyZXF1aXJlIiwiYmNyeXB0IiwicG9vbCIsInNhbHRSb3VuZHMiLCJyYW5kb21zdHJpbmciLCJqd3QiLCJzZWNyZXQiLCJBdXRoTW9kZWwiLCJkYXRhIiwicmVzIiwibmV4dCIsInNxbCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInNlY29uZFNRTCIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwic2FsdCIsImhhc2giLCJkYlBhc3N3b3JkIiwiY29tcGFyZSIsInBhc3N3b3JkIiwiY29tcGFyaXNvblZhbHVlIiwiZ2V0Q29ubmVjdGlvbiIsImNvbm5lY3Rpb24iLCJxdWVyeSIsInRva2VuIiwiZW1haWwiLCJyZXN1bHQiLCJjaGFuZ2VkUm93cyIsInJlbGVhc2UiLCJ1cmwiLCJlbWFpbENvbnRlbnQiLCJQcm9taXNlIiwiZW1haWxSZXNwb25zZSIsInN1Y2Nlc3MiLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJfY29udGV4dCIsInQwIiwiaWRlbnRpZmllciIsImhhc2hQYXNzd29yZCIsImdlbmVyYXRlIiwiY2hhcnNldCIsImpzb24iLCJzdGF0dXMiLCJfY29udGV4dDIiLCJfY29udGV4dDMiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicGhvbmUiLCJ1c2VyIiwicmVnaXN0ZXJUb2tlbiIsImVtYWlsQ2hlY2tSZXN1bHQiLCJpbnNlcnRSZXN1bHQiLCJhZmZlY3RlZFJvd3MiLCJfY29udGV4dDQiLCJ1c2VyX2lkIiwiY29tcGFyZVBhc3N3b3JkIiwibWF0Y2giLCJzaWduIiwiZXhwaXJlc0luIiwic2Vjb25kUmVzdWx0IiwiX2NvbnRleHQ1Il0sIm1hcHBpbmdzIjoieXlCQUlBQSxPQUFBQyxRQUFBLDREQUpJQyxPQUFTRCxRQUFRLFVBQ2pCRSxLQUFPRixRQUFRLG9CQUNiRyxXQUFhLEdBQ2JDLGFBQWVKLFFBQVEs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T0MsRUFBTyxHQUFHRCxNQUNqQnNCLFdBQVlyQixFQUFPLEdBQUdxQixXQUN0QkMsVUFBV3RCLEVBQU8sR0FBR3NCLFVBQ3JCQyxNQUFPdkIsRUFBTyxHQUFHdUIsTUF6R2pCM0IsTUFBQUEsaUNBQzBCQSxHQUExQkEsV0FBQU0sVUE2R0ksR0FBSU0sT0FBTSwyREFHbEJaLEdBQVdBLFdBQVdNLFVBNUdsQk4sR0FBQUEsT0FBQUEsaUZBZ0hOYSxRQUFRQyxJQUFSMEIsRUFBQXhCLElBQ0EzQixLQUFLUCxLQUFMMEQsRUFBQXhCLGdHQXZNTnJDIiwiZmlsZSI6Im1vZGVsL2F1dGhNb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBiY3J5cHQgPSByZXF1aXJlKCdiY3J5cHQnKTtcbnZhciBwb29sID0gcmVxdWlyZSgnLi4vZGIvY29ubmVjdC5qcycpO1xuY29uc3Qgc2FsdFJvdW5kcyA9IDEwO1xuY29uc3QgcmFuZG9tc3RyaW5nID0gcmVxdWlyZSgncmFuZG9tc3RyaW5nJyk7XG5pbXBvcnQgRW1haWwgZnJvbSAnLi4vZW1haWwvZW1haWwuanMnO1xudmFyIGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xudmFyIHNlY3JldCA9IHJlcXVpcmUoJy4uL2dlbmVyYWwvand0U2VjcmV0LmpzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhNb2RlbCB7XG5cbiAgY29uc3RydWN0b3IoZGF0YSwgcmVzLCBuZXh0LCBzcWwgPSAnJywgc2Vjb25kU1FMID0gJycpIHtcbiAgICB0aGlzLnNxbCA9IHNxbDtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucmVzID0gcmVzO1xuICAgIHRoaXMubmV4dCA9IG5leHQ7XG4gICAgdGhpcy5zZWNvbmRTUUwgPSBzZWNvbmRTUUw7XG4gIH1cblxuICBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gIHtcbiAgICAgIGJjcnlwdC5nZW5TYWx0KHNhbHRSb3VuZHMsIChlcnIsIHNhbHQpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0LCAoZXJyLCBoYXNoKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUoaGFzaCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbXBhcmVQYXNzd29yZChwYXNzd29yZCwgZGJQYXNzd29yZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgZGJQYXNzd29yZCwgKGVyciwgY29tcGFyaXNvblZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKGNvbXBhcmlzb25WYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGZvcmdvdFBhc3N3b3JkU2V0dXAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBwb29sLmdldENvbm5lY3Rpb24oKTtcbiAgICAgIGNvbnN0IHRva2VuID0gcmFuZG9tc3RyaW5nLmdlbmVyYXRlKHtcbiAgICAgICAgbGVuZ3RoOiAyMCxcbiAgICAgICAgY2hhcnNldDogJ2hleCdcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSh0aGlzLnNxbCwgW3Rva2VuLCB0aGlzLmRhdGEuZW1haWxdKTtcbiAgICAgIGlmIChyZXN1bHQuY2hhbmdlZFJvd3MgPiAwKSB7XG4gICAgICAgIGNvbm5lY3Rpb24uY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICd3d3cudGVzdHNpdGUuY29tJztcbiAgICAgICAgdmFyIGVtYWlsQ29udGVudCA9ICdZb3UgYXJlIHJlY2VpdmluZyB0aGlzIGJlY2F1c2UgeW91IGhhdmUgcmVxdWVzdGVkIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuICcgK1xuICAgICAgICAnUGxlYXNlIGNsaWNrIG9uIHRoZSBmb2xsb3dpbmcgbGluaywgb3IgcGFzdGUgdGhpcyBpbnRvIHlvdXIgYnJvd3NlciB0byBjb21wbGV0ZScgK1xuICAgICAgICAgJ3RoZSBwcm9jZXNzOlxcblxcbicgKyB1cmwgKyAnL3Jlc2V0Rm9yZ290dGVuUGFzc3dvcmQvJyArIHRva2VuICsgJ1xcblxcbiBBZnRlciBjb25maXJtaW5nIHlvdXIgcGFzc3dvcmQnICtcbiAgICAgICAgICcgeW91IHdpbGwgYmUgYWJsZSB0byBsb2dpbi5cXG4nO1xuICAgICAgICB2YXIgZW1haWwgPSBuZXcgRW1haWwodGhpcy5kYXRhLmVtYWlsLCAnZm9yZ290dGVuLXBhc3N3b3JkQG1ha2V1cC5jb20nLCAnRm9yZ290dGVuIFBhc3N3b3JkJywgZW1haWxDb250ZW50LCB0aGlzLnJlcyk7XG4gICAgICAgIGNvbnN0IGVtYWlsUmVzcG9uc2UgPSBhd2FpdCBlbWFpbC5zZW5kVG9rZW5FbWFpbCgpO1xuICAgICAgICBpZiAoZW1haWxSZXNwb25zZSkge1xuICAgICAgICAgIHRoaXMucmVzLmpzb24oe3N1Y2Nlc3M6ICdFbWFpbCBoYXMgYmVlbiBzZW50J30pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25uZWN0aW9uLmNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgRG9lcyBOb3QgRXhpc3QnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHRoaXMubmV4dChlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBjaGFuZ2VQYXNzd29yZChpZGVudGlmaWVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGhhc2ggPSBhd2FpdCB0aGlzLmhhc2hQYXNzd29yZCh0aGlzLmRhdGEucGFzc3dvcmQpO1xuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHBvb2wuZ2V0Q29ubmVjdGlvbigpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSh0aGlzLnNxbCwgW2hhc2gsIGlkZW50aWZpZXJdKTtcbiAgICAgIGlmIChyZXN1bHQuY2hhbmdlZFJvd3MgPiAwKSB7XG4gICAgICAgIC8vIGlmIHRoZSBpZGVudGlmaWVyIHdhcyB0aGUgdG9rZW4gLSBkbyBhbm90aGVyIHF1ZXJ5IHdoaWNoIHJlbW92ZXMgdGhlIHRva2VuXG4gICAgICAgIGlmICh0eXBlb2YgaWRlbnRpZmllciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb25zdCBzZWNvbmRSZXN1bHQgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KHRoaXMuc2Vjb25kU1FMLCBbaWRlbnRpZmllcl0pO1xuICAgICAgICAgIGlmIChzZWNvbmRSZXN1bHQuY2hhbmdlZFJvd3MgPiAwKSB7XG4gICAgICAgICAgICBjb25uZWN0aW9uLmNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgdGhpcy5yZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25uZWN0aW9uLmNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIERvZXMgTm90IEV4aXN0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgeyAvLyBub3JtYWwgY2hhbmdlIHBhc3N3b3JkIC0gc2VuZCBzdWNjZXNzXG4gICAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICB0aGlzLnJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIERvZXMgTm90IEV4aXN0Jyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB0aGlzLm5leHQoZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY29uZmlybVVzZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBjb25uZWN0aW9uID0gYXdhaXQgcG9vbC5nZXRDb25uZWN0aW9uKCk7XG4gICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSh0aGlzLnNxbCwgW3RoaXMuZGF0YS50b2tlbl0pO1xuICAgICAgaWYgKHJlc3VsdC5jaGFuZ2VkUm93cyA+IDApIHtcbiAgICAgICAgLy8gIGhvdyB0aGUgbXlzcWwgbGlicmFyeSBpcyB3cmFwcGVkIC0gc3RhY2tvdmVyZmxvd1xuICAgICAgICBjb25uZWN0aW9uLmNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICB0aGlzLnJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gIGhvdyB0aGUgbXlzcWwgbGlicmFyeSBpcyB3cmFwcGVkIC0gc3RhY2tvdmVyZmxvd1xuICAgICAgICBjb25uZWN0aW9uLmNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXIgRG9lcyBOb3QgRXhpc3QnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHRoaXMubmV4dChlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyByZWdpc3RlcigpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHtlbWFpbCwgcGFzc3dvcmQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgcGhvbmV9ID0gdGhpcy5kYXRhO1xuICAgICAgdmFyIHVzZXIgPSB7ZW1haWwsIHBhc3N3b3JkLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIHBob25lfTtcbiAgICAgIGNvbnN0IHJlZ2lzdGVyVG9rZW4gPSByYW5kb21zdHJpbmcuZ2VuZXJhdGUoe1xuICAgICAgICBsZW5ndGg6IDIwLFxuICAgICAgICBjaGFyc2V0OiAnaGV4J1xuICAgICAgfSk7XG4gICAgICB1c2VyLnRva2VuID0gcmVnaXN0ZXJUb2tlbjtcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBwb29sLmdldENvbm5lY3Rpb24oKTtcbiAgICAgIGNvbnN0IGVtYWlsQ2hlY2tSZXN1bHQgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KHRoaXMuc3FsLCBbdGhpcy5kYXRhLmVtYWlsXSk7XG4gICAgICBpZiAoZW1haWxDaGVja1Jlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbm5lY3Rpb24uY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhpc3RzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBoYXNoID0gYXdhaXQgdGhpcy5oYXNoUGFzc3dvcmQodGhpcy5kYXRhLnBhc3N3b3JkKTtcbiAgICAgICAgdXNlci5wYXNzd29yZCA9IGhhc2g7XG4gICAgICAgIGNvbnN0IGluc2VydFJlc3VsdCA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkodGhpcy5zZWNvbmRTUUwsIHVzZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImluc2VydCByZXN1bHRcIiwgaW5zZXJ0UmVzdWx0KTtcbiAgICAgICAgaWYgKGluc2VydFJlc3VsdC5hZmZlY3RlZFJvd3MpIHtcbiAgICAgICAgICB0aGlzLnJlcy5qc29uKHtcInN1Y2Nlc3NcIjogdHJ1ZX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFyIHVybCA9ICd3d3cudGVzdHNpdGUuY29tJztcbiAgICAgICAgLy8gdmFyIHJlZ2lzdGVyRW1haWxDb250ZW50ID0gJ1lvdSBhcmUgcmVjZWl2aW5nIHRoaXMgYmVjYXVzZSB5b3UgKG9yIHNvbWVvbmUgZWxzZSkgaGF2ZSBzaWduZWQgdXAgJyArXG4gICAgICAgIC8vICd0byB0aGUgd2Vic2l0ZS5cXG5cXG4gUGxlYXNlIGNsaWNrIG9uIHRoZSBmb2xsb3dpbmcgbGluaywgb3IgcGFzdGUgdGhpcyBpbnRvIHlvdXIgYnJvd3NlciB0byBjb21wbGV0ZScgK1xuICAgICAgICAvLyAgJ3RoZSBwcm9jZXNzOlxcblxcbicgKyB1cmwgKyAnL2NvbmZpcm1FbWFpbC8nICsgdXNlci50b2tlbiArICdcXG5cXG4gT25jZSB5b3UgaGF2ZSBjb25maXJtZWQgeW91ciBhY2NvdW50LCcgK1xuICAgICAgICAvLyAgJyB5b3Ugd2lsbCBiZSBhYmxlIHRvIGxvZ2luLlxcbic7XG4gICAgICAgIC8vIHZhciBFbWFpbCA9IG5ldyBFbWFpbCh0aGlzLmRhdGEuZW1haWwsICd1c2VyY29uZmlybWF0aW9uQG1ha2V1cC5jb20nLCAnQ29uZmlybSBBY2NvdW50JywgcmVnaXN0ZXJFbWFpbENvbnRlbnQsIHRoaXMucmVzKTtcbiAgICAgIC8vICAgY29uc3QgZW1haWxSZXNwb25zZSA9IGF3YWl0IEVtYWlsLnNlbmRUb2tlbkVtYWlsKCk7XG4gICAgICAgIC8vIGlmIChlbWFpbFJlc3BvbnNlKSB7XG4gICAgICAgIC8vICAgdGhpcy5yZXMuanNvbih7c3VjY2VzczogJ0VtYWlsIGhhcyBiZWVuIHNlbnQnfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHRoaXMubmV4dChlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBsb2dpbigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHBvb2wuZ2V0Q29ubmVjdGlvbigpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSh0aGlzLnNxbCwgW3RoaXMuZGF0YS5lbWFpbF0pO1xuXG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgdXNlcl9pZCA9IHJlc3VsdFswXS51c2VyX2lkO1xuICAgICAgICBjb25zdCBtYXRjaCA9IGF3YWl0IHRoaXMuY29tcGFyZVBhc3N3b3JkKHRoaXMuZGF0YS5wYXNzd29yZCwgcmVzdWx0WzBdLnBhc3N3b3JkKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7dXNlcl9pZH0sIHNlY3JldCwge1xuICAgICAgICAgIGV4cGlyZXNJbjogMTQ0MCAvLyBleHBpcmVzIGluIDI0IGhvdXJzXG4gICAgICAgIH0pO1xuXG4gICAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICB0aGlzLnJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgIHVzZXJfaWQ6IHJlc3VsdFswXS51c2VyX2lkLFxuICAgICAgICAgICAgZW1haWw6IHJlc3VsdFswXS5lbWFpbCxcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IHJlc3VsdFswXS5maXJzdF9uYW1lLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiByZXN1bHRbMF0ubGFzdF9uYW1lLFxuICAgICAgICAgICAgcGhvbmU6IHJlc3VsdFswXS5waG9uZSxcbiAgICAgICAgICAgIHRva2VuOiB0b2tlblxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbm5lY3Rpb24uY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmNvcnJlY3QgUGFzc3dvcmQnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIERvZXMgTm90IEV4aXN0Jyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB0aGlzLm5leHQoZSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
