"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){function n(o,a){try{var c=r[o](a),u=c.value}catch(e){return void t(e)}return c.done?void e(u):Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}var _cartModel=require("../model/cartModel.js"),_cartModel2=_interopRequireDefault(_cartModel),express=require("express"),router=express.Router();router.get("/getCart",function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(r,t,n){var o,a,c,u,s,i,d,_,l,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o="SELECT * FROM _cart where user_id = ?",a=r.get("Authorization")||"",c=new _cartModel2.default(r.body,n,a,o),e.next=5,c.checkCartExist();case 5:if(u=e.sent,console.log("cart exist",u),!u.success){e.next=17;break}return s="SELECT * FROM _cart inner join _cart_product on _cart_product.cart_id = _cart.cart_id where user_id = ?",i=new _cartModel2.default(r.body,n,a,s),e.next=12,i.getCart();case 12:d=e.sent,d.success&&t.json(d),t.json(d),e.next=24;break;case 17:return _="insert into _cart SET user_id=?",l=new _cartModel2.default(r.body,n,a,_),e.next=21,l.createCart();case 21:f=e.sent,t.json({success:!1}),console.log("CREATED",f);case 24:case"end":return e.stop()}},e,void 0)}));return function(r,t,n){return e.apply(this,arguments)}}()),module.exports=router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9jYXJ0LmpzIl0sIm5hbWVzIjpbIl9jYXJ0TW9kZWwiLCJyZXF1aXJlIiwiZXhwcmVzcyIsInJvdXRlciIsIlJvdXRlciIsImdldCIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwicmVxIiwicmVzIiwibmV4dCIsImVtYWlsQ2hlY2tTUUwiLCJ0b2tlbiIsIk1vZGVsIiwiY2FydEV4aXN0IiwiZ2V0Q2FydFNRTCIsImNhcnRNb2RlbCIsInJlc3VsdCIsImNyZWF0ZUNhcnRTUUwiLCJDcmVhdGVDYXJ0TW9kZWwiLCJjcmVhdGVkQ2FydCIsIndyYXAiLCJfY29udGV4dCIsInByZXYiLCJfY2FydE1vZGVsMiIsImRlZmF1bHQiLCJib2R5IiwiY2hlY2tDYXJ0RXhpc3QiLCJzZW50IiwiY29uc29sZSIsImxvZyIsImdldENhcnQiLCJzdWNjZXNzIiwianNvbiIsImNyZWF0ZUNhcnQiLCJzdG9wIiwidW5kZWZpbmVkIiwiX3giLCJfeDIiLCJfeDMiLCJhcHBseSIsInRoaXMiLCJhcmd1bWVudHMiXSwibWFwcGluZ3MiOiJrWUFFQSxHQUFBQSxZQUFBQyxRQUFBLHdFQUZJQyxRQUFVRCxRQUFRLFdBQ2xCRSxPQUFTRCxRQUFRRSxRQUdyQkQsUUFBT0UsSUFBSSxXQUFYLFdBQUEsR0FBQUMsR0FBQUMsa0JBQUFDLG1CQUFBQyxLQUF1QixRQUFBQyxHQUFPQyxFQUFLQyxFQUFLQyxHQUFqQixHQUFBQyxHQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxFQUFBQyxDQUFBLE9BQUFmLG9CQUFBZ0IsS0FBQSxTQUFBQyxHQUFBLE9BQUEsT0FBQUEsRUFBQUMsS0FBQUQsRUFBQVosTUFBQSxJQUFBLEdBQUEsTUFDakJDLEdBQWdCLHdDQUNoQkMsRUFBUUosRUFBSU4sSUFBSSxrQkFBb0IsR0FDcENXLEVBQVEsR0FBQVcsYUFBQUMsUUFBY2pCLEVBQUlrQixLQUFNaEIsRUFBTUUsRUFBT0QsR0FINUJXLEVBQUFaLEtBQUEsRUFJQ0csRUFBTWMsZ0JBSlAsS0FBQSxHQUFBLEdBSWpCYixFQUppQlEsRUFBQU0sS0FLckJDLFFBQVFDLElBQUksYUFBY2hCLElBUnhCZCxFQUFTRCxRQUdVLENBQUF1QixFQUFBWixLQUFBLEVBQUEsT0FBQSxNQVFiSyxHQUFhLDBHQUNmQyxFQUFZLEdBQUFRLGFBQUFDLFFBQWNqQixFQUFJa0IsS0FBTWhCLEVBQU1FLEVBQU9HLEdBVGxDTyxFQUFBWixLQUFBLEdBQXZCTSxFQUFBZSxTQUF1QixLQUFBLElBQWhCN0IsRUFBZ0JvQixFQUFBTSxLQUF2QlgsRUFBQWUsU0FBdUJ2QixFQUFBd0IsS0FBQWhCLEdBQUFSLEVBQUF3QixLQUFBaEIsR0FBQUssRUFBQVosS0FBQSxFQUFBLE1BQUEsS0FBQSxJQUFBLE1BQUFRLEdBQUEsa0NBQ2pCUCxFQURpQixHQUFBYSxhQUFBQyxRQUNEakIsRUFBQWtCLEtBQUFoQixFQUFBRSxFQUFBTSxHQURDSSxFQUFBWixLQUFBLEdBRURTLEVBQVJlLFlBRlMsS0FBQSxJQUVqQnRCLEVBRmlCVSxFQUFBTSxLQUdqQmYsRUFBQUEsTUFBQUEsU0FBUSxJQUhTZ0IsUUFBQUMsSUFBQSxVQUFBVixFQUFBLEtBQUEsSUFBQSxJQUFBLE1BQUEsTUFBQUUsR0FBQWEsU0FBQTVCLEVBQUE2QixVQUF2QixPQUFBLFVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsTUFBQXBDLEdBQUFxQyxNQUFBQyxLQUFBQyxnQkFJTTVCLE9BQUFBLFFBQUFBIiwiZmlsZSI6InJvdXRlcy9jYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbmltcG9ydCBDYXJ0TW9kZWwgZnJvbSAnLi4vbW9kZWwvY2FydE1vZGVsLmpzJztcblxucm91dGVyLmdldCgnL2dldENhcnQnLCBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgdmFyIGVtYWlsQ2hlY2tTUUwgPSAnU0VMRUNUICogRlJPTSBfY2FydCB3aGVyZSB1c2VyX2lkID0gPyc7XG4gIHZhciB0b2tlbiA9IHJlcS5nZXQoJ0F1dGhvcml6YXRpb24nKSB8fCBcIlwiO1xuICB2YXIgTW9kZWwgPSBuZXcgQ2FydE1vZGVsKHJlcS5ib2R5LCBuZXh0LCB0b2tlbiwgZW1haWxDaGVja1NRTCk7XG4gIHZhciBjYXJ0RXhpc3QgPSBhd2FpdCBNb2RlbC5jaGVja0NhcnRFeGlzdCgpO1xuICBjb25zb2xlLmxvZyhcImNhcnQgZXhpc3RcIiwgY2FydEV4aXN0KTtcblxuICBpZiAoY2FydEV4aXN0LnN1Y2Nlc3MpIHtcbiAgICBjb25zdCBnZXRDYXJ0U1FMID0gJ1NFTEVDVCAqIEZST00gX2NhcnQgaW5uZXIgam9pbiBfY2FydF9wcm9kdWN0IG9uIF9jYXJ0X3Byb2R1Y3QuY2FydF9pZCA9IF9jYXJ0LmNhcnRfaWQgd2hlcmUgdXNlcl9pZCA9ID8nO1xuICAgIHZhciBjYXJ0TW9kZWwgPSBuZXcgQ2FydE1vZGVsKHJlcS5ib2R5LCBuZXh0LCB0b2tlbiwgZ2V0Q2FydFNRTCk7XG4gICAgdmFyIHJlc3VsdCA9IGF3YWl0IGNhcnRNb2RlbC5nZXRDYXJ0KCk7XG4gICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByZXMuanNvbihyZXN1bHQpO1xuICAgIH1cbiAgICByZXMuanNvbihyZXN1bHQpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjcmVhdGVDYXJ0U1FMID0gJ2luc2VydCBpbnRvIF9jYXJ0IFNFVCB1c2VyX2lkPT8nO1xuICAgIHZhciBDcmVhdGVDYXJ0TW9kZWwgPSBuZXcgQ2FydE1vZGVsKHJlcS5ib2R5LCBuZXh0LCB0b2tlbiwgY3JlYXRlQ2FydFNRTCk7XG4gICAgY29uc3QgY3JlYXRlZENhcnQgPSBhd2FpdCBDcmVhdGVDYXJ0TW9kZWwuY3JlYXRlQ2FydCgpO1xuICAgIHJlcy5qc29uKHtcInN1Y2Nlc3NcIjogZmFsc2V9KTtcbiAgICBjb25zb2xlLmxvZyhcIkNSRUFURURcIiwgY3JlYXRlZENhcnQpO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
