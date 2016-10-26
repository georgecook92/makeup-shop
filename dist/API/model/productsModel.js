"use strict";function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),_general=require("../db/interaction/general.js"),Queries=_interopRequireWildcard(_general),pool=require("../db/connect.js"),ProductsModel=function(){function t(e,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";_classCallCheck(this,t),this.sql=o,this.data=e,this.res=n,this.next=r}return _createClass(t,[{key:"getAllByCat",value:function(){var t=this;pool.getConnection().then(function(e){e.query(t.sql,[t.data.categoryId]).then(function(e){try{if(!(e.length>0))throw new Error("ID Not Found");t.res.json(e)}catch(e){console.log(e),t.next(e)}})}).catch(function(e){console.log(e),t.next(e)})}},{key:"getProduct",value:function(){var t=this;pool.getConnection().then(function(e){e.query(t.sql,[t.data.productId]).then(function(e){try{if(!(e.length>0))throw new Error("ID Not Found");t.res.json(e)}catch(e){console.log(e),t.next(e)}})}).catch(function(e){console.log(e),t.next(e)})}},{key:"changeProductQuantity",value:function(){Queries.standardUpdateQuery(this.sql,[this.data.quantity,this.data.productId],this.next,this.res)}},{key:"changeDiscount",value:function(){Queries.standardUpdateQuery(this.sql,[this.data.discount,this.data.productId],this.next,this.res)}}]),t}();exports.default=ProductsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Byb2R1Y3RzTW9kZWwuanMiXSwibmFtZXMiOlsiX2dlbmVyYWwiLCJyZXF1aXJlIiwiUXVlcmllcyIsInBvb2wiLCJQcm9kdWN0c01vZGVsIiwiZGF0YSIsInJlcyIsIm5leHQiLCJzcWwiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiX3RoaXMiLCJnZXRDb25uZWN0aW9uIiwidGhlbiIsImNvbm5lY3Rpb24iLCJxdWVyeSIsImNhdGVnb3J5SWQiLCJyZXN1bHQiLCJFcnJvciIsImpzb24iLCJlIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiX3RoaXMyIiwicHJvZHVjdElkIiwic3RhbmRhcmRVcGRhdGVRdWVyeSIsInF1YW50aXR5Il0sIm1hcHBpbmdzIjoibW1CQUNBQSxTQUFBQyxRQUFBLGdDQUFZQywwQ0FEUkMsS0FBT0YsUUFBUSxvQkFHRUcseUJBQ25CLFFBQUFBLEdBQVlDLEVBQU1DLEVBQUtDLEdBQWdCLEdBQVZDLEdBQVVDLFVBQUFDLE9BQUEsR0FBQUMsU0FBQUYsVUFBQSxHQUFBQSxVQUFBLEdBQUosRUFBSUcsaUJBQUFDLEtBQUFULEdBQ3JDUyxLQUFLTCxJQUFNQSxFQUNYSyxLQUFLUixLQUFPQSxFQUNaUSxLQUFLUCxJQUFNQSxFQU5mTyxLQUFBTixLQUFBQSw2REFVZ0IsR0FBQU8sR0FBQUQsSUFDWlYsTUFBS1ksZ0JBQWdCQyxLQUFLLFNBQUFDLEdBQ3hCQSxFQUFXQyxNQUFNSixFQUFLTixLQUFNTSxFQUFLVCxLQUFLYyxhQUFhSCxLQUFLLFNBQUFJLEdBQ3RELElBQ0UsS0FBSUEsRUFBT1YsT0FBUyxHQVpUTixLQWVILElBQUlpQixPQUFNLGVBbEJqQnBCLEdBQUFBLElBQVFxQixLQUFBRixHQUlZWixNQUFVZSxHQWlCL0JDLFFBQVFDLElBQUlGLEdBakJtQlQsRUFBQVAsS0FBQWdCLFFBR3JDRyxNQUFLcEIsU0FBQUEsR0FDTGtCLFFBQUFDLElBQVlsQixHQUNiTyxFQUFBUCxLQUFBb0IsMENBdUJZLEdBQUFDLEdBQUFmLElBckJDVixNQUFBWSxnQkFBQUMsS0FBQSxTQUFBQyxHQXVCVkEsRUFBV0MsTUFBTVUsRUFBS3BCLEtBQU1vQixFQUFLdkIsS0FBS3dCLFlBQVliLEtBQUssU0FBQUksR0F0QnpEakIsSUFDRWMsS0FBQUEsRUFBV0MsT0FBTSxHQUdYLEtBQUEsSUFBS1osT0FBTCxlQUZKc0IsR0FBSXRCLElBQUFnQixLQUFBRixHQUlBLE1BQUFHLEdBQ0RDLFFBQUFDLElBQUFGLEdBQ0ZLLEVBQUNyQixLQUFBZ0IsUUFJSEcsTUFYRCxTQUFBQyxHQVlESCxRQWJEQyxJQWNPRSxHQUNMSCxFQUFBQSxLQUFRQyxxREE0QlZ2QixRQUFRNEIsb0JBQW9CakIsS0F2QmpCTCxLQUFBSyxLQUFBUixLQUFBMEIsU0FBQWxCLEtBQUFSLEtBQUF3QixXQUFBaEIsS0FBQU4sS0FBQU0sS0FBQVAsOENBRVRXLFFBQUFBLG9CQUFzQlQsS0FBS0EsS0FBQ0ssS0FBS1IsS0FBS3dCLFNBQVliLEtBQUtYLEtBQUF3QixXQUFVaEIsS0FBQU4sS0FBQU0sS0FBQVAsOEJBL0JsREYiLCJmaWxlIjoibW9kZWwvcHJvZHVjdHNNb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBwb29sID0gcmVxdWlyZSgnLi4vZGIvY29ubmVjdC5qcycpO1xuaW1wb3J0ICogYXMgUXVlcmllcyBmcm9tICcuLi9kYi9pbnRlcmFjdGlvbi9nZW5lcmFsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdHNNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIHJlcywgbmV4dCwgc3FsID0gJycpIHtcbiAgICB0aGlzLnNxbCA9IHNxbDtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucmVzID0gcmVzO1xuICAgIHRoaXMubmV4dCA9IG5leHQ7XG4gIH1cblxuICBnZXRBbGxCeUNhdCgpIHtcbiAgICBwb29sLmdldENvbm5lY3Rpb24oKS50aGVuKGNvbm5lY3Rpb24gPT4ge1xuICAgICAgY29ubmVjdGlvbi5xdWVyeSh0aGlzLnNxbCwgW3RoaXMuZGF0YS5jYXRlZ29yeUlkXSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXMuanNvbihyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lEIE5vdCBGb3VuZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgIHRoaXMubmV4dChlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB0aGlzLm5leHQoZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFByb2R1Y3QoKSB7XG4gICAgcG9vbC5nZXRDb25uZWN0aW9uKCkudGhlbihjb25uZWN0aW9uID0+IHtcbiAgICAgIGNvbm5lY3Rpb24ucXVlcnkodGhpcy5zcWwsIFt0aGlzLmRhdGEucHJvZHVjdElkXSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXMuanNvbihyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lEIE5vdCBGb3VuZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgIHRoaXMubmV4dChlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB0aGlzLm5leHQoZXJyKTtcbiAgICB9KTtcbiAgfVxuICAvLyBBRE1JTiBQQU5FTCBTVFVGRlxuXG4gIGNoYW5nZVByb2R1Y3RRdWFudGl0eSgpIHtcbiAgICBRdWVyaWVzLnN0YW5kYXJkVXBkYXRlUXVlcnkodGhpcy5zcWwsIFt0aGlzLmRhdGEucXVhbnRpdHksIHRoaXMuZGF0YS5wcm9kdWN0SWRdLCB0aGlzLm5leHQsIHRoaXMucmVzKTtcbiAgfVxuXG4gIGNoYW5nZURpc2NvdW50KCkge1xuICAgIFF1ZXJpZXMuc3RhbmRhcmRVcGRhdGVRdWVyeSh0aGlzLnNxbCwgW3RoaXMuZGF0YS5kaXNjb3VudCwgdGhpcy5kYXRhLnByb2R1Y3RJZF0sIHRoaXMubmV4dCwgdGhpcy5yZXMpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
