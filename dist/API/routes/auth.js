"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _authModel=require("../model/authModel.js"),_authModel2=_interopRequireDefault(_authModel),_rateLimit=require("../general/rateLimit"),express=require("express"),router=express.Router();router.post("/login",_rateLimit.createAccountLimiter,function(e,r,t){var o="select * from `_users` where `email` = ?",u=new _authModel2.default(e.body,r,t,o);u.login()}),router.post("/register",function(e,r,t){var o="select * from `_users` where `email` = ?",u="INSERT INTO _users SET ?",s=new _authModel2.default(e.body,r,t,o,u);s.register()}),router.put("/confirmUser",function(e,r,t){var o="update _users set `verified` = 1, `token` = NULL where `token` = ?",u=new _authModel2.default(e.body,r,t,o);u.confirmUser()}),router.put("/changePassword",function(e,r,t){if(e.body.user_id){var o="update _users set `password` = ? where `user_id` = ?",u=new _authModel2.default(e.body,r,t,o);u.changePassword(e.body.user_id)}else if(e.body.token){var s="update _users set `password` = ? where `token` = ?",a="update _users set `token` = NULL where `token` = ?",d=new _authModel2.default(e.body,r,t,s,a);d.changePassword(e.body.token)}}),router.put("/forgotPassword",function(e,r,t){var o="update _users set `token` = ? where `email` = ?",u=new _authModel2.default(e.body,r,t,o);u.forgotPasswordSetup()}),module.exports=router;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9hdXRoLmpzIl0sIm5hbWVzIjpbIl9hdXRoTW9kZWwiLCJyZXF1aXJlIiwiX3JhdGVMaW1pdCIsImV4cHJlc3MiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJjcmVhdGVBY2NvdW50TGltaXRlciIsInJlcSIsInJlcyIsIm5leHQiLCJNb2RlbCIsIl9hdXRoTW9kZWwyIiwiZGVmYXVsdCIsImJvZHkiLCJlbWFpbENoZWNrU1FMIiwibG9naW4iLCJwb3N0IiwiaW5zZXJ0U1FMIiwicHV0IiwidXBkYXRlQ29uZmlybVVzZXJTUUwiLCJ1c2VyX2lkIiwiY2hhbmdlUGFzc3dvcmRTUUwiLCJjb25maXJtVXNlciIsInRva2VuIiwiZm9yZ290UGFzc3dvcmRTUUwiLCJyZW1vdmVUb2tlblNRTCIsIkZvcmdvdE1vZGVsIiwiZm9yZ290dGVuUGFzc3dvcmRTUUwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoicUZBRUEsR0FBQUEsWUFBQUMsUUFBQSx3RUFFQUMsV0FBQUQsUUFBQSx3QkFKSUUsUUFBVUYsUUFBUSxXQUNsQkcsT0FBU0QsUUFBUUUsUUFEckJELFFBQUlELEtBQUFBLFNBQUpELFdBQUFJLHFCQUFBLFNBQUFDLEVBQUFDLEVBQUFDLEdBQ0EsR0FBSUwsR0FBaUJDLDJDQVdmSyxFQUFRLEdBQUFDLGFBQUFDLFFBQWNMLEVBQUlNLEtBQU1MLEVBQUtDLEVBQU1LLEVBQy9DSixHQUFNSyxVQUxSWCxPQUFBWSxLQUFBLFlBQUEsU0FBQVQsRUFBQUMsRUFBQUMsR0FTRSxHQUFJSyxHQUFnQiwyQ0FQdEJWLEVBQVksMkJBQ05VLEVBQUFBLEdBQUFBLGFBQUFBLFFBQWdCUCxFQUFBTSxLQUFBTCxFQUFBQyxFQUFBSyxFQUFwQkcsRUFDQVAsR0FBSUEsYUFXTk4sT0FBT2MsSUFBSSxlQUFnQixTQUFDWCxFQUFLQyxFQUFLQyxHQVB0Q0wsR0FBQUEsR0FBeUIscUVBQ25CVSxFQUFBQSxHQUFBQSxhQUFBQSxRQUFnQlAsRUFBQU0sS0FBQUwsRUFBQUMsRUFBQVUsRUFDcEJULEdBQUlPLGdCQUdMYixPQUxEYyxJQUFBLGtCQUFBLFNBQUFYLEVBQUFDLEVBQUFDLEdBY0UsR0FBSUYsRUFBSU0sS0FBS08sUUFBUyxDQVB4QmhCLEdBQU9jLEdBQW9CLHVEQUNyQkMsRUFBQUEsR0FBQUEsYUFBQUEsUUFBdUJaLEVBQUFNLEtBQUFMLEVBQUFDLEVBQUFZLEVBQzNCWCxHQUFJQSxlQUFRSCxFQUFBTSxLQUFBTyxhQUNORSxJQUFBQSxFQUFBQSxLQUFOQyxNQUFBLENBSEYsR0FBQUMsR0FBQSxxREFhUUMsRUFBaUIscURBUGxCUCxFQUFJLEdBQUFQLGFBQUFDLFFBQW1CTCxFQUFDQSxLQUFLQyxFQUFLQyxFQUFTZSxFQUFBQyxFQUNoREMsR0FBYU4sZUFBU2IsRUFBQU0sS0FBQVUsVUFJckJuQixPQUpEYyxJQUlPLGtCQUFvQixTQUFBWCxFQUFBQyxFQUFBQyxHQUN6QixHQUFBa0IsR0FBd0Isa0RBQ3hCakIsRUFBSWUsR0FBQUEsYUFBQUEsUUFBaUJsQixFQUFBTSxLQUFBTCxFQUFBQyxFQUFBa0IsRUFDckJqQixHQUFJZ0Isd0JBR1BFLE9BWERDLFFBQUF6QiIsImZpbGUiOiJyb3V0ZXMvYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5pbXBvcnQgQXV0aE1vZGVsIGZyb20gJy4uL21vZGVsL2F1dGhNb2RlbC5qcyc7XG5cbmltcG9ydCB7Y3JlYXRlQWNjb3VudExpbWl0ZXJ9IGZyb20gJy4uL2dlbmVyYWwvcmF0ZUxpbWl0JztcblxuLy8gQ0hBTkdFIFNFTkQgR1JJRCAqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vIGNoYW5nZSBwYXNzd29yZCAodHJ5IGFuZCBtYWtlIHRoaXMgd29yayBmb3IgYm90aCAoaWUgYWJvdmUgYXMgd2VsbCkpXG5cbnJvdXRlci5wb3N0KCcvbG9naW4nLCBjcmVhdGVBY2NvdW50TGltaXRlciwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHZhciBlbWFpbENoZWNrU1FMID0gJ3NlbGVjdCAqIGZyb20gYF91c2Vyc2Agd2hlcmUgYGVtYWlsYCA9ID8nO1xuICB2YXIgTW9kZWwgPSBuZXcgQXV0aE1vZGVsKHJlcS5ib2R5LCByZXMsIG5leHQsIGVtYWlsQ2hlY2tTUUwpO1xuICBNb2RlbC5sb2dpbigpO1xufSk7XG5cbnJvdXRlci5wb3N0KCcvcmVnaXN0ZXInLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdmFyIGVtYWlsQ2hlY2tTUUwgPSAnc2VsZWN0ICogZnJvbSBgX3VzZXJzYCB3aGVyZSBgZW1haWxgID0gPyc7XG4gIHZhciBpbnNlcnRTUUwgPSAnSU5TRVJUIElOVE8gX3VzZXJzIFNFVCA/JztcbiAgdmFyIE1vZGVsID0gbmV3IEF1dGhNb2RlbChyZXEuYm9keSwgcmVzLCBuZXh0LCBlbWFpbENoZWNrU1FMLCBpbnNlcnRTUUwpO1xuICBNb2RlbC5yZWdpc3RlcigpO1xufSk7XG5cbnJvdXRlci5wdXQoJy9jb25maXJtVXNlcicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICB2YXIgdXBkYXRlQ29uZmlybVVzZXJTUUwgPSAndXBkYXRlIF91c2VycyBzZXQgYHZlcmlmaWVkYCA9IDEsIGB0b2tlbmAgPSBOVUxMIHdoZXJlIGB0b2tlbmAgPSA/JztcbiAgdmFyIE1vZGVsID0gbmV3IEF1dGhNb2RlbChyZXEuYm9keSwgcmVzLCBuZXh0LCB1cGRhdGVDb25maXJtVXNlclNRTCk7XG4gIE1vZGVsLmNvbmZpcm1Vc2VyKCk7XG59KTtcblxucm91dGVyLnB1dCgnL2NoYW5nZVBhc3N3b3JkJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGlmIChyZXEuYm9keS51c2VyX2lkKSB7XG4gICAgdmFyIGNoYW5nZVBhc3N3b3JkU1FMID0gJ3VwZGF0ZSBfdXNlcnMgc2V0IGBwYXNzd29yZGAgPSA/IHdoZXJlIGB1c2VyX2lkYCA9ID8nO1xuICAgIHZhciBNb2RlbCA9IG5ldyBBdXRoTW9kZWwocmVxLmJvZHksIHJlcywgbmV4dCwgY2hhbmdlUGFzc3dvcmRTUUwpO1xuICAgIE1vZGVsLmNoYW5nZVBhc3N3b3JkKHJlcS5ib2R5LnVzZXJfaWQpO1xuICB9IGVsc2UgaWYgKHJlcS5ib2R5LnRva2VuKSB7XG4gICAgdmFyIGZvcmdvdFBhc3N3b3JkU1FMID0gJ3VwZGF0ZSBfdXNlcnMgc2V0IGBwYXNzd29yZGAgPSA/IHdoZXJlIGB0b2tlbmAgPSA/JztcbiAgICB2YXIgcmVtb3ZlVG9rZW5TUUwgPSAndXBkYXRlIF91c2VycyBzZXQgYHRva2VuYCA9IE5VTEwgd2hlcmUgYHRva2VuYCA9ID8nO1xuICAgIHZhciBGb3Jnb3RNb2RlbCA9IG5ldyBBdXRoTW9kZWwocmVxLmJvZHksIHJlcywgbmV4dCwgZm9yZ290UGFzc3dvcmRTUUwsIHJlbW92ZVRva2VuU1FMKTtcbiAgICBGb3Jnb3RNb2RlbC5jaGFuZ2VQYXNzd29yZChyZXEuYm9keS50b2tlbik7XG4gIH1cbn0pO1xuXG5yb3V0ZXIucHV0KCcvZm9yZ290UGFzc3dvcmQnLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdmFyIGZvcmdvdHRlblBhc3N3b3JkU1FMID0gJ3VwZGF0ZSBfdXNlcnMgc2V0IGB0b2tlbmAgPSA/IHdoZXJlIGBlbWFpbGAgPSA/JztcbiAgdmFyIE1vZGVsID0gbmV3IEF1dGhNb2RlbChyZXEuYm9keSwgcmVzLCBuZXh0LCBmb3Jnb3R0ZW5QYXNzd29yZFNRTCk7XG4gIE1vZGVsLmZvcmdvdFBhc3N3b3JkU2V0dXAoKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcbiJdfQ==
