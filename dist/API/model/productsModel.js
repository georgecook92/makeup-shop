"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_general=require("../db/interaction/general.js"),Queries=_interopRequireWildcard(_general),pool=require("../db/connect.js"),ProductsModel=function(){function e(t,r,a){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";_classCallCheck(this,e),this.sql=s,this.data=t,this.res=r,this.next=a}return _createClass(e,[{key:"getAllByCat",value:function(){Queries.standardGetQuery(this.sql,[this.data.categoryId],this.next,this.res)}},{key:"getProduct",value:function(){Queries.standardGetQuery(this.sql,[this.data.productId],this.next,this.res)}},{key:"changeProductQuantity",value:function(){Queries.standardUpdateQuery(this.sql,[this.data.quantity,this.data.productId],this.next,this.res)}},{key:"changeDiscount",value:function(){Queries.standardUpdateQuery(this.sql,[this.data.discount,this.data.productId],this.next,this.res)}},{key:"changePrice",value:function(){Queries.standardUpdateQuery(this.sql,[this.data.price,this.data.productId],this.next,this.res)}}]),e}();exports.default=ProductsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Byb2R1Y3RzTW9kZWwuanMiXSwibmFtZXMiOlsiX2dlbmVyYWwiLCJyZXF1aXJlIiwiUXVlcmllcyIsInBvb2wiLCJQcm9kdWN0c01vZGVsIiwiZGF0YSIsInJlcyIsIm5leHQiLCJzcWwiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwic3RhbmRhcmRHZXRRdWVyeSIsImNhdGVnb3J5SWQiLCJwcm9kdWN0SWQiLCJzdGFuZGFyZFVwZGF0ZVF1ZXJ5IiwicXVhbnRpdHkiLCJkaXNjb3VudCIsInByaWNlIl0sIm1hcHBpbmdzIjoibW1CQUNBQSxTQUFBQyxRQUFBLGdDQUFZQywwQ0FEUkMsS0FBT0YsUUFBUSxvQkFHRUcseUJBQ25CLFFBQUFBLEdBQVlDLEVBQU1DLEVBQUtDLEdBQWdCLEdBQVZDLEdBQVVDLFVBQUFDLE9BQUEsR0FBQUMsU0FBQUYsVUFBQSxHQUFBQSxVQUFBLEdBQUosRUFBSUcsaUJBQUFDLEtBQUFULEdBQ3JDUyxLQUFLTCxJQUFNQSxFQUNYSyxLQUFLUixLQUFPQSxFQUNaUSxLQUFLUCxJQUFNQSxFQU5mTyxLQUFBTixLQUFBQSw2REFXSUwsUUFBUVksaUJBQWlCRCxLQUFLTCxLQUFNSyxLQUFLUixLQUFLVSxZQUFhRixLQUFLTixLQUFNTSxLQUFLUCwwQ0FaM0VILFFBQU9GLGlCQUFRWSxLQUFBTCxLQUFuQkssS0FBQVIsS0FBQVcsV0FBQUgsS0FBQU4sS0FBQU0sS0FBQVAscURBcUJJSixRQUFRZSxvQkFBb0JKLEtBQUtMLEtBQU1LLEtBQUtSLEtBQUthLFNBQVVMLEtBQUtSLEtBQUtXLFdBQVlILEtBQUtOLEtBQU1NLEtBQUtQLDhDQWZqR0osUUFBS0csb0JBQUxRLEtBQUFMLEtBQUFLLEtBQUFSLEtBQUFjLFNBQUFOLEtBQUFSLEtBQUFXLFdBQUFILEtBQUFOLEtBQUFNLEtBQUFQLDJDQXVCQUosUUFBUWUsb0JBQW9CSixLQUFLTCxLQUFNSyxLQUFLUixLQUFLZSxNQUFPUCxLQUFLUixLQUFLVyxXQUFZSCxLQUFLTixLQUFNTSxLQUFLUCw4QkExQjdFRiIsImZpbGUiOiJtb2RlbC9wcm9kdWN0c01vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBvb2wgPSByZXF1aXJlKCcuLi9kYi9jb25uZWN0LmpzJyk7XG5pbXBvcnQgKiBhcyBRdWVyaWVzIGZyb20gJy4uL2RiL2ludGVyYWN0aW9uL2dlbmVyYWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0c01vZGVsIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgcmVzLCBuZXh0LCBzcWwgPSAnJykge1xuICAgIHRoaXMuc3FsID0gc3FsO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5yZXMgPSByZXM7XG4gICAgdGhpcy5uZXh0ID0gbmV4dDtcbiAgfVxuXG4gIGdldEFsbEJ5Q2F0KCkge1xuICAgIFF1ZXJpZXMuc3RhbmRhcmRHZXRRdWVyeSh0aGlzLnNxbCwgW3RoaXMuZGF0YS5jYXRlZ29yeUlkXSwgdGhpcy5uZXh0LCB0aGlzLnJlcyk7XG4gIH1cblxuICBnZXRQcm9kdWN0KCkge1xuICAgIFF1ZXJpZXMuc3RhbmRhcmRHZXRRdWVyeSh0aGlzLnNxbCwgW3RoaXMuZGF0YS5wcm9kdWN0SWRdLCB0aGlzLm5leHQsIHRoaXMucmVzKTtcbiAgfVxuXG4gIC8vIEFETUlOIFBBTkVMIFNUVUZGXG4gIGNoYW5nZVByb2R1Y3RRdWFudGl0eSgpIHtcbiAgICBRdWVyaWVzLnN0YW5kYXJkVXBkYXRlUXVlcnkodGhpcy5zcWwsIFt0aGlzLmRhdGEucXVhbnRpdHksIHRoaXMuZGF0YS5wcm9kdWN0SWRdLCB0aGlzLm5leHQsIHRoaXMucmVzKTtcbiAgfVxuXG4gIGNoYW5nZURpc2NvdW50KCkge1xuICAgIFF1ZXJpZXMuc3RhbmRhcmRVcGRhdGVRdWVyeSh0aGlzLnNxbCwgW3RoaXMuZGF0YS5kaXNjb3VudCwgdGhpcy5kYXRhLnByb2R1Y3RJZF0sIHRoaXMubmV4dCwgdGhpcy5yZXMpO1xuICB9XG5cbiAgY2hhbmdlUHJpY2UoKSB7XG4gICAgUXVlcmllcy5zdGFuZGFyZFVwZGF0ZVF1ZXJ5KHRoaXMuc3FsLCBbdGhpcy5kYXRhLnByaWNlLCB0aGlzLmRhdGEucHJvZHVjdElkXSwgdGhpcy5uZXh0LCB0aGlzLnJlcyk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
