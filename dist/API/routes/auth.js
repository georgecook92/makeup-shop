"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _authModel=require("../model/authModel.js"),_authModel2=_interopRequireDefault(_authModel),_rateLimit=require("../general/rateLimit"),express=require("express"),router=express.Router();router.post("/login",_rateLimit.createAccountLimiter,function(e,r,t){var o="select * from `_users` where `email` = ?",u=new _authModel2.default(e.body,r,t,o);u.login()}),router.post("/register",function(e,r,t){var o="select * from `_users` where `email` = ?",u=new _authModel2.default(e.body,r,t,o);u.register()}),router.put("/confirmUser",function(e,r,t){var o="update _users set `verified` = 1, `token` = NULL where `token` = ?",u=new _authModel2.default(e.body,r,t,o);u.confirmUser()}),router.put("/changePassword",function(e,r,t){if(e.body.user_id){var o="update _users set `password` = ? where `user_id` = ?",u=new _authModel2.default(e.body,r,t,o);u.changePassword(e.body.user_id)}else if(e.body.token){var s="update _users set `password` = ? where `token` = ?",a="update _users set `token` = NULL where `token` = ?",d=new _authModel2.default(e.body,r,t,s,a);d.changePassword(e.body.token)}}),router.put("/forgotPassword",function(e,r,t){var o="update _users set `token` = ? where `email` = ?",u=new _authModel2.default(e.body,r,t,o);u.forgotPasswordSetup()}),module.exports=router;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9hdXRoLmpzIl0sIm5hbWVzIjpbIl9hdXRoTW9kZWwiLCJyZXF1aXJlIiwiX3JhdGVMaW1pdCIsImV4cHJlc3MiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJjcmVhdGVBY2NvdW50TGltaXRlciIsInJlcSIsInJlcyIsIm5leHQiLCJNb2RlbCIsIl9hdXRoTW9kZWwyIiwiZGVmYXVsdCIsImJvZHkiLCJlbWFpbENoZWNrU1FMIiwibG9naW4iLCJwb3N0IiwicHV0IiwidXBkYXRlQ29uZmlybVVzZXJTUUwiLCJ1c2VyX2lkIiwiY2hhbmdlUGFzc3dvcmRTUUwiLCJjb25maXJtVXNlciIsInRva2VuIiwiZm9yZ290UGFzc3dvcmRTUUwiLCJyZW1vdmVUb2tlblNRTCIsIkZvcmdvdE1vZGVsIiwiZm9yZ290dGVuUGFzc3dvcmRTUUwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoicUZBRUEsR0FBQUEsWUFBQUMsUUFBQSx3RUFFQUMsV0FBQUQsUUFBQSx3QkFKSUUsUUFBVUYsUUFBUSxXQUNsQkcsT0FBU0QsUUFBUUUsUUFEckJELFFBQUlELEtBQUFBLFNBQUpELFdBQUFJLHFCQUFBLFNBQUFDLEVBQUFDLEVBQUFDLEdBQ0EsR0FBSUwsR0FBaUJDLDJDQVdmSyxFQUFRLEdBQUFDLGFBQUFDLFFBQWNMLEVBQUlNLEtBQU1MLEVBQUtDLEVBQU1LLEVBQy9DSixHQUFNSyxVQUxSWCxPQUFBWSxLQUFBLFlBQUEsU0FBQVQsRUFBQUMsRUFBQUMsR0FTRSxHQUFJSyxHQUFnQiwyQ0FQdEJWLEVBQVksR0FBQU8sYUFBQUMsUUFBWkwsRUFBQU0sS0FBQUwsRUFBQUMsRUFBQUssRUFDRUosR0FBSUksYUFHTFYsT0FKRGEsSUFBQSxlQUFBLFNBQUFWLEVBQUFDLEVBQUFDLEdBYUUsR0FBSVMsR0FBdUIscUVBUDdCZCxFQUFZLEdBQUFPLGFBQUFDLFFBQWFMLEVBQUFNLEtBQUFMLEVBQUFDLEVBQUFTLEVBQ3ZCUixHQUFJSSxnQkFHTFYsT0FKRGEsSUFBQSxrQkFBQSxTQUFBVixFQUFBQyxFQUFBQyxHQWFFLEdBQUlGLEVBQUlNLEtBQUtNLFFBQVMsQ0FQeEJmLEdBQU9hLEdBQW9CLHVEQUNyQkMsRUFBQUEsR0FBQUEsYUFBQUEsUUFBdUJYLEVBQUFNLEtBQUFMLEVBQUFDLEVBQUFXLEVBQzNCVixHQUFJQSxlQUFRSCxFQUFBTSxLQUFBTSxhQUNORSxJQUFBQSxFQUFBQSxLQUFOQyxNQUFBLENBSEYsR0FBQUMsR0FBQSxxREFhUUMsRUFBaUIscURBUGxCUCxFQUFJLEdBQUFOLGFBQUFDLFFBQW1CTCxFQUFDQSxLQUFLQyxFQUFLQyxFQUFTYyxFQUFBQyxFQUNoREMsR0FBYU4sZUFBU1osRUFBQU0sS0FBQVMsVUFJckJsQixPQUpEYSxJQUlPLGtCQUFvQixTQUFBVixFQUFBQyxFQUFBQyxHQUN6QixHQUFBaUIsR0FBd0Isa0RBQ3hCaEIsRUFBSWMsR0FBQUEsYUFBQUEsUUFBaUJqQixFQUFBTSxLQUFBTCxFQUFBQyxFQUFBaUIsRUFDckJoQixHQUFJZSx3QkFHUEUsT0FYREMsUUFBQXhCIiwiZmlsZSI6InJvdXRlcy9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbmltcG9ydCBBdXRoTW9kZWwgZnJvbSAnLi4vbW9kZWwvYXV0aE1vZGVsLmpzJztcblxuaW1wb3J0IHtjcmVhdGVBY2NvdW50TGltaXRlcn0gZnJvbSAnLi4vZ2VuZXJhbC9yYXRlTGltaXQnO1xuXG4vLyBDSEFOR0UgU0VORCBHUklEICoqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy8gY2hhbmdlIHBhc3N3b3JkICh0cnkgYW5kIG1ha2UgdGhpcyB3b3JrIGZvciBib3RoIChpZSBhYm92ZSBhcyB3ZWxsKSlcblxucm91dGVyLnBvc3QoJy9sb2dpbicsIGNyZWF0ZUFjY291bnRMaW1pdGVyLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdmFyIGVtYWlsQ2hlY2tTUUwgPSAnc2VsZWN0ICogZnJvbSBgX3VzZXJzYCB3aGVyZSBgZW1haWxgID0gPyc7XG4gIHZhciBNb2RlbCA9IG5ldyBBdXRoTW9kZWwocmVxLmJvZHksIHJlcywgbmV4dCwgZW1haWxDaGVja1NRTCk7XG4gIE1vZGVsLmxvZ2luKCk7XG59KTtcblxucm91dGVyLnBvc3QoJy9yZWdpc3RlcicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB2YXIgZW1haWxDaGVja1NRTCA9ICdzZWxlY3QgKiBmcm9tIGBfdXNlcnNgIHdoZXJlIGBlbWFpbGAgPSA/JztcbiAgdmFyIE1vZGVsID0gbmV3IEF1dGhNb2RlbChyZXEuYm9keSwgcmVzLCBuZXh0LCBlbWFpbENoZWNrU1FMKTtcbiAgTW9kZWwucmVnaXN0ZXIoKTtcbn0pO1xuXG5yb3V0ZXIucHV0KCcvY29uZmlybVVzZXInLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdmFyIHVwZGF0ZUNvbmZpcm1Vc2VyU1FMID0gJ3VwZGF0ZSBfdXNlcnMgc2V0IGB2ZXJpZmllZGAgPSAxLCBgdG9rZW5gID0gTlVMTCB3aGVyZSBgdG9rZW5gID0gPyc7XG4gIHZhciBNb2RlbCA9IG5ldyBBdXRoTW9kZWwocmVxLmJvZHksIHJlcywgbmV4dCwgdXBkYXRlQ29uZmlybVVzZXJTUUwpO1xuICBNb2RlbC5jb25maXJtVXNlcigpO1xufSk7XG5cbnJvdXRlci5wdXQoJy9jaGFuZ2VQYXNzd29yZCcsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBpZiAocmVxLmJvZHkudXNlcl9pZCkge1xuICAgIHZhciBjaGFuZ2VQYXNzd29yZFNRTCA9ICd1cGRhdGUgX3VzZXJzIHNldCBgcGFzc3dvcmRgID0gPyB3aGVyZSBgdXNlcl9pZGAgPSA/JztcbiAgICB2YXIgTW9kZWwgPSBuZXcgQXV0aE1vZGVsKHJlcS5ib2R5LCByZXMsIG5leHQsIGNoYW5nZVBhc3N3b3JkU1FMKTtcbiAgICBNb2RlbC5jaGFuZ2VQYXNzd29yZChyZXEuYm9keS51c2VyX2lkKTtcbiAgfSBlbHNlIGlmIChyZXEuYm9keS50b2tlbikge1xuICAgIHZhciBmb3Jnb3RQYXNzd29yZFNRTCA9ICd1cGRhdGUgX3VzZXJzIHNldCBgcGFzc3dvcmRgID0gPyB3aGVyZSBgdG9rZW5gID0gPyc7XG4gICAgdmFyIHJlbW92ZVRva2VuU1FMID0gJ3VwZGF0ZSBfdXNlcnMgc2V0IGB0b2tlbmAgPSBOVUxMIHdoZXJlIGB0b2tlbmAgPSA/JztcbiAgICB2YXIgRm9yZ290TW9kZWwgPSBuZXcgQXV0aE1vZGVsKHJlcS5ib2R5LCByZXMsIG5leHQsIGZvcmdvdFBhc3N3b3JkU1FMLCByZW1vdmVUb2tlblNRTCk7XG4gICAgRm9yZ290TW9kZWwuY2hhbmdlUGFzc3dvcmQocmVxLmJvZHkudG9rZW4pO1xuICB9XG59KTtcblxucm91dGVyLnB1dCgnL2ZvcmdvdFBhc3N3b3JkJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHZhciBmb3Jnb3R0ZW5QYXNzd29yZFNRTCA9ICd1cGRhdGUgX3VzZXJzIHNldCBgdG9rZW5gID0gPyB3aGVyZSBgZW1haWxgID0gPyc7XG4gIHZhciBNb2RlbCA9IG5ldyBBdXRoTW9kZWwocmVxLmJvZHksIHJlcywgbmV4dCwgZm9yZ290dGVuUGFzc3dvcmRTUUwpO1xuICBNb2RlbC5mb3Jnb3RQYXNzd29yZFNldHVwKCk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iXX0=
