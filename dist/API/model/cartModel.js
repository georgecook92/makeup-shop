"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var s=t[a](o),u=s.value}catch(e){return void r(e)}return s.done?void e(u):Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_general=require("../db/interaction/general.js"),Queries=_interopRequireWildcard(_general),pool=require("../db/connect.js"),secret=require("../general/jwtSecret.js"),jwt=require("jsonwebtoken"),CartModel=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";_classCallCheck(this,e),this.sql=a,this.data=t,this.next=r,this.token=n}return _createClass(e,[{key:"checkCartExist",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Queries.standardGetQueryToken(this.sql,this.next,this.token);case 2:return t=e.sent,console.log("RESULT Model",t),e.abrupt("return",t);case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"createCart",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Queries.standardInsertQuery(this.sql,[],this.next,this.token);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"getCart",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Queries.standardGetQueryToken(this.sql,this.next,this.token);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"checkCartProduct",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=jwt.verify(this.token,secret),e.next=4,pool.getConnection();case 4:return r=e.sent,e.next=7,r.query(this.sql,[this.data.cart_id,this.data.product_id]);case 7:return n=e.sent,e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),this.next(e.t0);case 15:case"end":return e.stop()}},e,this,[[0,11]])}));return e}()},{key:"updateCartProduct",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=jwt.verify(this.token,secret),e.next=4,pool.getConnection();case 4:return r=e.sent,console.log("SQL",this.sql),e.next=8,r.query(this.sql,[this.data.quantity,this.data.cart_id,this.data.product_id]);case 8:return n=e.sent,e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),this.next(e.t0);case 16:case"end":return e.stop()}},e,this,[[0,12]])}));return e}()},{key:"addToCart",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=jwt.verify(this.token,secret),e.next=4,pool.getConnection();case 4:return r=e.sent,e.next=7,r.query(this.sql,this.data);case 7:return n=e.sent,e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),this.next(e.t0);case 15:case"end":return e.stop()}},e,this,[[0,11]])}));return e}()},{key:"deleteFromCart",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=jwt.verify(this.token,secret),e.next=4,pool.getConnection();case 4:return r=e.sent,e.next=7,r.query(this.sql,[this.data.cart_id,this.data.product_id]);case 7:return n=e.sent,e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),this.next(e.t0);case 15:case"end":return e.stop()}},e,this,[[0,11]])}));return e}()}]),e}();exports.default=CartModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2NhcnRNb2RlbC5qcyJdLCJuYW1lcyI6WyJfZ2VuZXJhbCIsInJlcXVpcmUiLCJRdWVyaWVzIiwicG9vbCIsInNlY3JldCIsImp3dCIsIkNhcnRNb2RlbCIsImRhdGEiLCJuZXh0IiwidG9rZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzcWwiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwic3RhbmRhcmRHZXRRdWVyeVRva2VuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInN0YW5kYXJkSW5zZXJ0UXVlcnkiLCJ2ZXJpZnkiLCJnZXRDb25uZWN0aW9uIiwiY29ubmVjdGlvbiIsInF1ZXJ5IiwiY2FydF9pZCIsInByb2R1Y3RfaWQiLCJfY29udGV4dDQiLCJ0MCIsImRlY29kZWQiLCJxdWFudGl0eSIsIl9jb250ZXh0NSIsIl9jb250ZXh0NiIsIl9jb250ZXh0NyJdLCJtYXBwaW5ncyI6Imc1QkFDQUEsU0FBQUMsUUFBQSxnQ0FBWUMsMENBRFJDLEtBQU9GLFFBQVEsb0JBRWZHLE9BQVNILFFBQVEsMkJBQ2pCSSxJQUFNSixRQUFRLGdCQUVHSyxxQkFDbkIsUUFBQUEsR0FBWUMsRUFBTUMsR0FBNEIsR0FBdEJDLEdBQXNCQyxVQUFBQyxPQUFBLEdBQUFDLFNBQUFGLFVBQUEsR0FBQUEsVUFBQSxHQUFkLEdBQUlHLEVBQVVILFVBQUFDLE9BQUEsR0FBQUMsU0FBQUYsVUFBQSxHQUFBQSxVQUFBLEdBQUosRUFBSUksaUJBQUFDLEtBQUFULEdBQzVDUyxLQUFLRixJQUFNQSxFQU5mRSxLQUFBUixLQUFBQSxFQVFJUSxLQUFLUCxLQUFPQSxFQVJKTixLQUFBQSxNQVNLTyw4UUFJUVAsUUFBUWMsc0JBQXNCRCxLQUFLRixJQUFLRSxLQUFLUCxLQUFNTyxLQUFLTixvQkFBdkVRLFVBQ05DLFFBQVFDLElBQUksZUFBZ0JGLHFCQUNyQkEsK1NBZFVmLFFBQUFrQixvQkFBckJMLEtBQUFGLE9BQUFFLEtBQUFQLEtBQUFPLEtBQUFOLG9CQUFJTCw0QkFDTUgsNFNBR3NDQyxRQUFBYyxzQkFBQUQsS0FBQUYsSUFBQUUsS0FBQVAsS0FBQU8sS0FBQU4sb0JBQXRCQSw0QkFBc0JRLHlUQUV2Q1YsRUFBTEYsSUFBQWdCLE9BQUFOLEtBQUFOLE1BQUFMLGlCQUNBRCxLQUFBbUIsNkJBQUtkLG1CQUNMZSxFQUFBQyxNQUFBVCxLQUFBRixLQUFBRSxLQUFBUixLQUFBa0IsUUFBQVYsS0FBQVIsS0FBQW1CLDBCQUFLakIsNEJBQ05RLHFDQXlCR0MsUUFBUUMsSUFBUlEsRUFBQUMsSUFDQWIsS0FBS1AsS0FBTG1CLEVBQUFDLHFVQU1JQyxFQUFVeEIsSUFBSWdCLE9BQU9OLEtBQUtOLE1BQU9MLGlCQUNaRCxLQUFLbUIsNkJBQXhCQyxVQUNOTCxRQUFRQyxJQUFJLE1BQU9KLEtBQUtGLGNBL0JMWCxFQUFRYyxNQUFBQSxLQUFBQSxLQUFzQkQsS0FBS0YsS0FBS2lCLFNBQVdmLEtBQUtOLEtBZ0NJZ0IsUUFBU1YsS0FBS1IsS0FBS21CLDBCQUE1RlQsNEJBQ0NBLHFDQWpDSEEsUUFBQUEsSUFBQUEsRUFBQUEsSUFvQ0pGLEtBQUtQLEtBQUx1QixFQUFBSCw2VEFNSUMsRUFBVXhCLElBQUlnQixPQUFPTixLQUFLTixNQUFPTCxpQkFDWkQsS0FBS21CLDZCQUF4QkMsbUJBQ2VBLEVBQVdDLE1BQU1ULEtBQUtGLElBQUtFLEtBQUtSLG1CQUEvQ1UsNEJBQ0NBLHFDQUVQQyxRQUFRQyxJQUFSYSxFQUFBSixJQUNBYixLQUFLUCxLQUFMd0IsRUFBQUosa1VBTUlDLEVBQVV4QixJQUFJZ0IsT0FBT04sS0FBS04sTUFBT0wsaUJBQ1pELEtBQUttQiw2QkFBeEJDLG1CQUNlQSxFQUFXQyxNQUFNVCxLQUFLRixLQUFNRSxLQUFLUixLQUFLa0IsUUFBU1YsS0FBS1IsS0FBS21CLDBCQUF4RVQsNEJBQ0NBLHFDQUVQQyxRQUFRQyxJQUFSYyxFQUFBTCxJQUNBYixLQUFLUCxLQUFMeUIsRUFBQUwsZ0dBckVldEIiLCJmaWxlIjoibW9kZWwvY2FydE1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBvb2wgPSByZXF1aXJlKCcuLi9kYi9jb25uZWN0LmpzJyk7XG5pbXBvcnQgKiBhcyBRdWVyaWVzIGZyb20gJy4uL2RiL2ludGVyYWN0aW9uL2dlbmVyYWwuanMnO1xudmFyIHNlY3JldCA9IHJlcXVpcmUoJy4uL2dlbmVyYWwvand0U2VjcmV0LmpzJyk7XG52YXIgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIG5leHQsIHRva2VuID0gJycsIHNxbCA9ICcnKSB7XG4gICAgdGhpcy5zcWwgPSBzcWw7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLm5leHQgPSBuZXh0O1xuICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgfVxuXG4gIGFzeW5jIGNoZWNrQ2FydEV4aXN0KCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFF1ZXJpZXMuc3RhbmRhcmRHZXRRdWVyeVRva2VuKHRoaXMuc3FsLCB0aGlzLm5leHQsIHRoaXMudG9rZW4pO1xuICAgIGNvbnNvbGUubG9nKFwiUkVTVUxUIE1vZGVsXCIsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZUNhcnQoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUXVlcmllcy5zdGFuZGFyZEluc2VydFF1ZXJ5KHRoaXMuc3FsLCBbXSwgdGhpcy5uZXh0LCB0aGlzLnRva2VuKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYXN5bmMgZ2V0Q2FydCgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBRdWVyaWVzLnN0YW5kYXJkR2V0UXVlcnlUb2tlbih0aGlzLnNxbCwgdGhpcy5uZXh0LCB0aGlzLnRva2VuKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYXN5bmMgY2hlY2tDYXJ0UHJvZHVjdCgpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGRlY29kZWQgPSBqd3QudmVyaWZ5KHRoaXMudG9rZW4sIHNlY3JldCk7XG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgcG9vbC5nZXRDb25uZWN0aW9uKCk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KHRoaXMuc3FsLCBbdGhpcy5kYXRhLmNhcnRfaWQsIHRoaXMuZGF0YS5wcm9kdWN0X2lkXSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgdGhpcy5uZXh0KGUpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUNhcnRQcm9kdWN0KCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgZGVjb2RlZCA9IGp3dC52ZXJpZnkodGhpcy50b2tlbiwgc2VjcmV0KTtcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBwb29sLmdldENvbm5lY3Rpb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU1FMXCIsIHRoaXMuc3FsKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkodGhpcy5zcWwsIFt0aGlzLmRhdGEucXVhbnRpdHksIHRoaXMuZGF0YS5jYXJ0X2lkLCB0aGlzLmRhdGEucHJvZHVjdF9pZF0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHRoaXMubmV4dChlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBhZGRUb0NhcnQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBkZWNvZGVkID0gand0LnZlcmlmeSh0aGlzLnRva2VuLCBzZWNyZXQpO1xuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHBvb2wuZ2V0Q29ubmVjdGlvbigpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSh0aGlzLnNxbCwgdGhpcy5kYXRhKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB0aGlzLm5leHQoZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZGVsZXRlRnJvbUNhcnQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBkZWNvZGVkID0gand0LnZlcmlmeSh0aGlzLnRva2VuLCBzZWNyZXQpO1xuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHBvb2wuZ2V0Q29ubmVjdGlvbigpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSh0aGlzLnNxbCwgW3RoaXMuZGF0YS5jYXJ0X2lkLCB0aGlzLmRhdGEucHJvZHVjdF9pZF0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHRoaXMubmV4dChlKTtcbiAgICB9XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
