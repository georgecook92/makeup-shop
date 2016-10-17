"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,o,t){return o&&e(n.prototype,o),t&&e(n,t),n}}(),_email=require("../email/email.js"),_email2=_interopRequireDefault(_email),bcrypt=require("bcrypt"),pool=require("../../../db/connect.js"),saltRounds=10,AuthModel=function(){function e(n,o,t,r){_classCallCheck(this,e),this.sql=n,this.data=o,this.res=t,this.next=r}return _createClass(e,[{key:"confirmUser",value:function(){var e=this;pool.getConnection().then(function(n){return n.query(e.sql,[e.data.token]).then(function(o){if(console.log("result",o),!(o.affectedRows>0))throw n.connection.release(),new Error("Not Exist");n.connection.release(),e.res.status(200).json({success:!0})})}).catch(function(n){console.log(n),e.next(n)})}},{key:"register",value:function(){var e=this;pool.getConnection().then(function(n){return n.query(e.sql,[e.data.email]).then(function(o){if(o.length>0)throw new Error("Exists");try{bcrypt.genSalt(saltRounds,function(o,t){if(o)throw new Error(o);bcrypt.hash(e.data.password,t,function(o,t){if(o)throw new Error(o);e.data.password=t;var r=e.data,a=r.email,s=r.password,l=r.first_name,i=r.last_name,c=r.phone,u={email:a,password:s,first_name:l,last_name:i,phone:c};if(a&&s&&l&&i&&c)return pool.getConnection().then(function(n){return n.query("INSERT INTO _users SET ?",u).then(function(o){var t="www.testsite.com",r="You are receiving this because you (or someone else) have signed up to the website.\n\n Please click on the following link, or paste this into your browser to completethe process:\n\n"+t+"/confirmEmail/token \n\n Once you have confirmed your account, you will be able to login.\n",a=new _email2.default(e.data.email,"userconfirmation@makeup.com","Confirm Account",r,e.res);a.sendTokenEmail(),n.connection.release()})});throw n.connection.release(),console.log("error - not all fields"),new Error("Provide All Fields")})})}catch(n){console.log(n),e.next(n)}})}).catch(function(n){console.log(n),e.next(n)})}},{key:"login",value:function(){var e=this;pool.getConnection().then(function(n){return n.query(e.sql,[e.data.email]).then(function(o){o.length>0&&(console.log(o),bcrypt.compare(e.data.password,o[0].password,function(t,r){try{if(t)throw n.connection.release(),console.log(t),new Error(t);if(!r)throw console.log("wrong."),n.connection.release(),new Error("Incorrect Password");console.log("correct."),n.connection.release(),console.log(o[0]),e.res.status(200).json({email:o[0].email,first_name:o[0].first_name,last_name:o[0].last_name,phone:o[0].phone})}catch(n){console.log(n),e.next(n)}}))}).catch(function(n){console.log(n),e.next(n)})})}}]),e}();exports.default=AuthModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2F1dGhNb2RlbC5qcyJdLCJuYW1lcyI6WyJfZW1haWwiLCJyZXF1aXJlIiwiYmNyeXB0IiwicG9vbCIsInNhbHRSb3VuZHMiLCJBdXRoTW9kZWwiLCJzcWwiLCJkYXRhIiwicmVzIiwibmV4dCIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJfdGhpcyIsImdldENvbm5lY3Rpb24iLCJ0aGVuIiwiY29ubmVjdGlvbiIsInF1ZXJ5IiwidG9rZW4iLCJyZXN1bHQiLCJhZmZlY3RlZFJvd3MiLCJyZWxlYXNlIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIl90aGlzMiIsImVtYWlsIiwibGVuZ3RoIiwiZ2VuU2FsdCIsInNhbHQiLCJoYXNoIiwicGFzc3dvcmQiLCJfZGF0YSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwaG9uZSIsInVzZXIiLCJjb25uIiwidXJsIiwicmVnaXN0ZXJFbWFpbENvbnRlbnQiLCJfZW1haWwyIiwiZGVmYXVsdCIsInNlbmRUb2tlbkVtYWlsIiwiZSIsIl90aGlzMyIsImNvbXBhcmlzb25WYWx1ZSJdLCJtYXBwaW5ncyI6IjRmQUdBQSxPQUFBQyxRQUFBLDREQUhJQyxPQUFTRCxRQUFRLFVBQ2pCRSxLQUFPRixRQUFRLDBCQUNiRyxXQUFhLEdBR0VDLHFCQUVuQixRQUFBQSxHQUFZQyxFQUFLQyxFQUFLQyxFQUFLQyxHQUFNQyxnQkFBQUMsS0FBQU4sR0FKbkNNLEtBQUFMLElBQUFBLEVBTUlLLEtBQUtKLEtBQU9BLEVBQ1pJLEtBQUtILElBQU1BLEVBQ1hHLEtBQUtGLEtBQU9BLDZEQUdBLEdBQUFHLEdBQUFELElBQ1pSLE1BQUtVLGdCQUFnQkMsS0FBSyxTQUFBQyxHQWYxQmIsTUFBU0QsR0FBUWUsTUFBckJKLEVBQUFOLEtBQUFNLEVBQUFMLEtBQUFVLFFBQUFILEtBQUEsU0FBQUksR0FFTWQsR0FERkQsUUFBT0YsSUFBUSxTQUFBaUIsS0FD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LFNBQUFBLEdBQ0FZLFFBQUFBLElBQUFBLEdBQ0FxQixFQUFBdkMsS0FBQWlCLGdDQWhHS3JCIiwiZmlsZSI6Im1vZGVsL2F1dGhNb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBiY3J5cHQgPSByZXF1aXJlKCdiY3J5cHQnKTtcbnZhciBwb29sID0gcmVxdWlyZSgnLi4vLi4vLi4vZGIvY29ubmVjdC5qcycpO1xuY29uc3Qgc2FsdFJvdW5kcyA9IDEwO1xuaW1wb3J0IEVtYWlsIGZyb20gJy4uL2VtYWlsL2VtYWlsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aE1vZGVsIHtcblxuICBjb25zdHJ1Y3RvcihzcWwsIGRhdGEscmVzLCBuZXh0KSB7XG4gICAgdGhpcy5zcWwgPSBzcWw7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnJlcyA9IHJlcztcbiAgICB0aGlzLm5leHQgPSBuZXh0O1xuICB9XG5cbiAgY29uZmlybVVzZXIoKSB7XG4gICAgcG9vbC5nZXRDb25uZWN0aW9uKCkudGhlbihjb25uZWN0aW9uID0+IHtcbiAgICAgIHJldHVybiBjb25uZWN0aW9uLnF1ZXJ5KHRoaXMuc3FsLCBbdGhpcy5kYXRhLnRva2VuXSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KTtcbiAgICAgICAgaWYgKHJlc3VsdC5hZmZlY3RlZFJvd3MgPiAwKSB7XG4gICAgICAgICAgLy8gIGhvdyB0aGUgbXlzcWwgbGlicmFyeSBpcyB3cmFwcGVkIC0gc3RhY2tvdmVyZmxvd1xuICAgICAgICAgIGNvbm5lY3Rpb24uY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgdGhpcy5yZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICBcInN1Y2Nlc3NcIjogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vICBob3cgdGhlIG15c3FsIGxpYnJhcnkgaXMgd3JhcHBlZCAtIHN0YWNrb3ZlcmZsb3dcbiAgICAgICAgICBjb25uZWN0aW9uLmNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IEV4aXN0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgdGhpcy5uZXh0KGVycik7XG4gICAgfSk7XG4gIH1cblxuICByZWdpc3RlcigpIHtcbiAgICBwb29sLmdldENvbm5lY3Rpb24oKS50aGVuKGNvbm5lY3Rpb24gPT4ge1xuICAgICAgcmV0dXJuIGNvbm5lY3Rpb24ucXVlcnkodGhpcy5zcWwsIFt0aGlzLmRhdGEuZW1haWxdKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhpc3RzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGJjcnlwdC5nZW5TYWx0KHNhbHRSb3VuZHMsIChlcnIsIHNhbHQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJjcnlwdC5oYXNoKHRoaXMuZGF0YS5wYXNzd29yZCwgc2FsdCwgKGVyciwgaGFzaCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEucGFzc3dvcmQgPSBoYXNoO1xuXG4gICAgICAgICAgICAgICAgbGV0IHtlbWFpbCwgcGFzc3dvcmQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgcGhvbmV9ID0gdGhpcy5kYXRhO1xuXG4gICAgICAgICAgICAgICAgdmFyIHVzZXIgPSB7ZW1haWwsIHBhc3N3b3JkLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIHBob25lfTtcblxuICAgICAgICAgICAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFmaXJzdF9uYW1lIHx8ICFsYXN0X25hbWUgfHwgIXBob25lKSB7XG4gICAgICAgICAgICAgICAgICBjb25uZWN0aW9uLmNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIC0gbm90IGFsbCBmaWVsZHMnKTtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUHJvdmlkZSBBbGwgRmllbGRzJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBwb29sLmdldENvbm5lY3Rpb24oKS50aGVuKGNvbm4gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29ubi5xdWVyeSgnSU5TRVJUIElOVE8gX3VzZXJzIFNFVCA/JywgdXNlcikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9ICd3d3cudGVzdHNpdGUuY29tJztcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVnaXN0ZXJFbWFpbENvbnRlbnQgPSAnWW91IGFyZSByZWNlaXZpbmcgdGhpcyBiZWNhdXNlIHlvdSAob3Igc29tZW9uZSBlbHNlKSBoYXZlIHNpZ25lZCB1cCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAndG8gdGhlIHdlYnNpdGUuXFxuXFxuIFBsZWFzZSBjbGljayBvbiB0aGUgZm9sbG93aW5nIGxpbmssIG9yIHBhc3RlIHRoaXMgaW50byB5b3VyIGJyb3dzZXIgdG8gY29tcGxldGUnICtcbiAgICAgICAgICAgICAgICAgICAgICAgJ3RoZSBwcm9jZXNzOlxcblxcbicgKyB1cmwgKyAnL2NvbmZpcm1FbWFpbC90b2tlbiBcXG5cXG4gT25jZSB5b3UgaGF2ZSBjb25maXJtZWQgeW91ciBhY2NvdW50LCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAnIHlvdSB3aWxsIGJlIGFibGUgdG8gbG9naW4uXFxuJztcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1haWwgPSBuZXcgRW1haWwodGhpcy5kYXRhLmVtYWlsLCAndXNlcmNvbmZpcm1hdGlvbkBtYWtldXAuY29tJywgJ0NvbmZpcm0gQWNjb3VudCcsIHJlZ2lzdGVyRW1haWxDb250ZW50LCB0aGlzLnJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgZW1haWwuc2VuZFRva2VuRW1haWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25uLmNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB0aGlzLm5leHQoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHRoaXMubmV4dChlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgcG9vbC5nZXRDb25uZWN0aW9uKCkudGhlbigoY29ubmVjdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIGNvbm5lY3Rpb24ucXVlcnkodGhpcy5zcWwsIFt0aGlzLmRhdGEuZW1haWxdKS50aGVuKChyZXN1bHQpPT57XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgLy8gTG9hZCBoYXNoIGZyb20geW91ciBwYXNzd29yZCBEQi5cbiAgICAgICAgICBiY3J5cHQuY29tcGFyZSh0aGlzLmRhdGEucGFzc3dvcmQsIHJlc3VsdFswXS5wYXNzd29yZCwgKGVyciwgY29tcGFyaXNvblZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5jb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb3JyZWN0LicpO1xuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24uY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0WzBdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgIFwiZW1haWxcIiA6IHJlc3VsdFswXS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgIFwiZmlyc3RfbmFtZVwiIDogcmVzdWx0WzBdLmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgICBcImxhc3RfbmFtZVwiIDogcmVzdWx0WzBdLmxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgIFwicGhvbmVcIiA6IHJlc3VsdFswXS5waG9uZVxuICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3cm9uZy4nKTtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLmNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5jb3JyZWN0IFBhc3N3b3JkJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgdGhpcy5uZXh0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKCAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIHRoaXMubmV4dChlcnIpO1xuICAgICAgfSk7XG4gICAgfSlcblxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
