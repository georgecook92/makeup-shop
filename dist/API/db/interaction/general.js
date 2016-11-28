"use strict";function _asyncToGenerator(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){function n(a,o){try{var s=r[a](o),c=s.value}catch(e){return void t(e)}return s.done?void e(c):Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}Object.defineProperty(exports,"__esModule",{value:!0});var standardInsertQuery=exports.standardInsertQuery=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(r,t,n,a){var o,s,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=jwt.verify(a,secret),e.next=4,pool.getConnection();case 4:return s=e.sent,e.next=7,s.query(r,o.user_id);case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),n(e.t0);case 15:case"end":return e.stop()}},e,this,[[0,11]])}));return function(r,t,n,a){return e.apply(this,arguments)}}(),standardUpdateQuery=exports.standardUpdateQuery=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(r,t,n,a,o){var s,c,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=jwt.verify(a,secret),e.next=4,pool.getConnection();case 4:return c=e.sent,e.next=7,c.query(r,t);case 7:if(u=e.sent,!(u.affectedRows>0)){e.next=17;break}if(!(u.changedRows>0)){e.next=14;break}c.connection.release(),o.json({success:!0}),e.next=15;break;case 14:throw new Error("No Change");case 15:e.next=18;break;case 17:throw new Error("ID Not Found");case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0),n(e.t0);case 24:case"end":return e.stop()}},e,this,[[0,20]])}));return function(r,t,n,a,o){return e.apply(this,arguments)}}(),standardGetQueryToken=exports.standardGetQueryToken=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(r,t,n){var a,o,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=jwt.verify(n,secret),console.log(a),e.next=5,pool.getConnection();case 5:return o=e.sent,e.next=8,o.query(r,a.user_id);case 8:if(s=e.sent,!(s.length>0)){e.next=13;break}return e.abrupt("return",{success:!0,data:s});case 13:return e.abrupt("return",{success:!1});case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0),t(e.t0);case 20:case"end":return e.stop()}},e,this,[[0,16]])}));return function(r,t,n){return e.apply(this,arguments)}}(),standardRequiredLengthGetQuery=exports.standardRequiredLengthGetQuery=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(r,t,n,a,o){var s,c,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=jwt.verify(a,secret),console.log("Decoded",s),e.next=5,pool.getConnection();case 5:return c=e.sent,e.next=8,c.query(r,t);case 8:if(u=e.sent,!(u.length>0)){e.next=13;break}o.json(u),e.next=14;break;case 13:throw new Error("ID Not Found");case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0),n(e.t0);case 20:case"end":return e.stop()}},e,this,[[0,16]])}));return function(r,t,n,a,o){return e.apply(this,arguments)}}(),standardGetQuery=exports.standardGetQuery=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(r,t,n){var a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pool.getConnection();case 3:return a=e.sent,e.next=6,a.query(r,t);case 6:return o=e.sent,e.abrupt("return",o);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),n(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,10]])}));return function(r,t,n){return e.apply(this,arguments)}}(),pool=require("../connect.js"),jwt=require("jsonwebtoken"),secret=require("../../general/jwtSecret.js");
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiL2ludGVyYWN0aW9uL2dlbmVyYWwuanMiXSwibmFtZXMiOlsiX2NhbGxlZSIsIlNRTCIsImRhdGEiLCJuZXh0IiwidG9rZW4iLCJkZWNvZGVkIiwiY29ubmVjdGlvbiIsInJlc3VsdCIsInJlZ2VuZXJhdG9yUnVudGltZSIsIndyYXAiLCJfY29udGV4dCIsInByZXYiLCJqd3QiLCJ2ZXJpZnkiLCJzZWNyZXQiLCJwb29sIiwiZ2V0Q29ubmVjdGlvbiIsInNlbnQiLCJxdWVyeSIsInVzZXJfaWQiLCJhYnJ1cHQiLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJzdG9wIiwidGhpcyIsIl9jYWxsZWUyIiwicmVzIiwiX2NvbnRleHQyIiwiYWZmZWN0ZWRSb3dzIiwiY2hhbmdlZFJvd3MiLCJyZWxlYXNlIiwianNvbiIsInN1Y2Nlc3MiLCJFcnJvciIsIl9jYWxsZWUzIiwiX2NvbnRleHQzIiwic3RhbmRhcmRJbnNlcnRRdWVyeSIsImxlbmd0aCIsIl9jb250ZXh0NCIsIl9jb250ZXh0NSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiJnZUFJTyxRQUFBQSxHQUFtQ0MsRUFBS0MsRUFBTUMsRUFBTUMsR0FBcEQsR0FBQUMsR0FBQUMsRUFBQUMsQ0FBQSxPQUFBQyxvQkFBQUMsS0FBQSxTQUFBQyxHQUFBLE9BQUEsT0FBQUEsRUFBQUMsS0FBQUQsRUFBQVAsTUFBQSxJQUFBLEdBQUEsTUFBQU8sR0FBQUMsS0FBQSxFQUVDTixFQUFVTyxJQUFJQyxPQUFPVCxFQUFPVSxRQUY3QkosRUFBQVAsS0FBQSxFQUdzQlksS0FBS0MsZUFIM0IsS0FBQSxHQUFBLE1BR0dWLEdBSEhJLEVBQUFPLEtBQUFQLEVBQUFQLEtBQUEsRUFBQUcsRUFBQVksTUFBQWpCLEVBQUFJLEVBQUFjLFFBQUEsS0FBQSxHQUFBLE1BQUFaLEdBQUFHLEVBQUFPLEtBQUFQLEVBQUFVLE9BQUEsU0FBQWIsRUFBQSxLQUFBLElBQUFHLEVBQUFDLEtBQUEsR0FBQUQsRUFBQVcsR0FBQVgsRUFBQSxNQUFBLEdB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QSxHQUFBQSxFQUFBQSxNQUFBQSxHQTZESmdCLFFBQVFDLElBQVJpQixFQUFBbkIsSUFyRUdsQixFQUFBQSxFQUFBQSxHQVFDRyxLQUFBQSxJQUFBQSxJQUFBQSxNQUFBQSxNQUFBQSxHQUFBQSxTQUFBQSxFQUFBQSxPQUFBQSxFQUFBQSxtRUF4QkpTLEtBQU8wQixRQUFRLGlCQUNmN0IsSUFBTTZCLFFBQVEsZ0JBQ2QzQixPQUFTMkIsUUFBUSIsImZpbGUiOiJkYi9pbnRlcmFjdGlvbi9nZW5lcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBvb2wgPSByZXF1aXJlKCcuLi9jb25uZWN0LmpzJyk7XG52YXIgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XG52YXIgc2VjcmV0ID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJhbC9qd3RTZWNyZXQuanMnKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YW5kYXJkSW5zZXJ0UXVlcnkoU1FMLCBkYXRhLCBuZXh0LCB0b2tlbikge1xuICB0cnkge1xuICAgIHZhciBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgc2VjcmV0KTtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgcG9vbC5nZXRDb25uZWN0aW9uKCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeShTUUwsIGRlY29kZWQudXNlcl9pZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIG5leHQoZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YW5kYXJkVXBkYXRlUXVlcnkoU1FMLCBkYXRhLCBuZXh0LCB0b2tlbiwgcmVzKSB7XG5cbiAgdHJ5IHtcbiAgICB2YXIgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHNlY3JldCk7XG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHBvb2wuZ2V0Q29ubmVjdGlvbigpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoU1FMLCBkYXRhKTtcbiAgICBpZiAocmVzdWx0LmFmZmVjdGVkUm93cyA+IDApIHsgLy8gZXhpc3RzXG4gICAgICBpZiAocmVzdWx0LmNoYW5nZWRSb3dzID4gMCkgeyAvLyBjaGFuZ2VkIHF1YW50aXR5XG4gICAgICAgIGNvbm5lY3Rpb24uY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgIHJlcy5qc29uKHtzdWNjZXNzOiB0cnVlfSk7XG4gICAgICB9IGVsc2UgeyAvLyBleGlzdHMgYnV0IG5vIGNoYW5nZVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIENoYW5nZScpXG4gICAgICB9XG4gICAgfSBlbHNlIHsgLy8gZG9lcyBub3QgZXhpc3RcbiAgICAgIHRocm93IG5ldyBFcnJvcignSUQgTm90IEZvdW5kJyk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgbmV4dChlKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhbmRhcmRHZXRRdWVyeVRva2VuKFNRTCwgbmV4dCwgdG9rZW4pIHtcbiAgdHJ5IHtcbiAgICB2YXIgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHNlY3JldCk7XG4gICAgY29uc29sZS5sb2coZGVjb2RlZCk7XG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHBvb2wuZ2V0Q29ubmVjdGlvbigpO1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KFNRTCwgZGVjb2RlZC51c2VyX2lkKTtcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgbmV4dChlKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhbmRhcmRSZXF1aXJlZExlbmd0aEdldFF1ZXJ5KFNRTCwgZGF0YSwgbmV4dCwgdG9rZW4sIHJlcykge1xuXG4gIHRyeSB7XG4gICAgdmFyIGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLCBzZWNyZXQpO1xuICAgIGNvbnNvbGUubG9nKFwiRGVjb2RlZFwiLCBkZWNvZGVkKTtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgcG9vbC5nZXRDb25uZWN0aW9uKCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeShTUUwsIGRhdGEpO1xuICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgcmVzLmpzb24ocmVzdWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJRCBOb3QgRm91bmQnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBuZXh0KGUpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFuZGFyZEdldFF1ZXJ5KFNRTCwgZGF0YSwgbmV4dCkge1xuXG4gIHRyeSB7XG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHBvb2wuZ2V0Q29ubmVjdGlvbigpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoU1FMLCBkYXRhKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgbmV4dChlKTtcbiAgfVxufVxuIl19
