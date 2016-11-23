"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),_general=require("../db/interaction/general.js"),Queries=_interopRequireWildcard(_general),pool=require("../db/connect.js"),ProductsModel=function(){function e(t,r,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";_classCallCheck(this,e),this.sql=n,this.data=t,this.res=r,this.next=i,this.token=a}return _createClass(e,[{key:"getAllByCat",value:function(){Queries.standardRequiredLengthGetQuery(this.sql,[this.data.categoryId],this.next,this.token,this.res)}},{key:"getProduct",value:function(){Queries.standardRequiredLengthGetQuery(this.sql,[this.data.productId],this.next,this.token,this.res)}},{key:"changeProductQuantity",value:function(){Queries.standardUpdateQuery(this.sql,[this.data.quantity,this.data.productId],this.next,this.res)}},{key:"changeDiscount",value:function(){Queries.standardUpdateQuery(this.sql,[this.data.discount,this.data.productId],this.next,this.res)}},{key:"changePrice",value:function(){Queries.standardUpdateQuery(this.sql,[this.data.price,this.data.productId],this.next,this.res)}}]),e}();exports.default=ProductsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Byb2R1Y3RzTW9kZWwuanMiXSwibmFtZXMiOlsiX2dlbmVyYWwiLCJyZXF1aXJlIiwiUXVlcmllcyIsInBvb2wiLCJQcm9kdWN0c01vZGVsIiwiZGF0YSIsInJlcyIsIm5leHQiLCJ0b2tlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInNxbCIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJzdGFuZGFyZFJlcXVpcmVkTGVuZ3RoR2V0UXVlcnkiLCJjYXRlZ29yeUlkIiwicHJvZHVjdElkIiwic3RhbmRhcmRVcGRhdGVRdWVyeSIsInF1YW50aXR5IiwiZGlzY291bnQiLCJwcmljZSJdLCJtYXBwaW5ncyI6Im1tQkFDQUEsU0FBQUMsUUFBQSxnQ0FBWUMsMENBRFJDLEtBQU9GLFFBQVEsb0JBR0VHLHlCQUNuQixRQUFBQSxHQUFZQyxFQUFNQyxFQUFLQyxHQUE0QixHQUF0QkMsR0FBc0JDLFVBQUFDLE9BQUEsR0FBQUMsU0FBQUYsVUFBQSxHQUFBQSxVQUFBLEdBQWQsR0FBSUcsRUFBVUgsVUFBQUMsT0FBQSxHQUFBQyxTQUFBRixVQUFBLEdBQUFBLFVBQUEsR0FBSixFQUFJSSxpQkFBQUMsS0FBQVYsR0FDakRVLEtBQUtGLElBQU1BLEVBQ1hFLEtBQUtULEtBQU9BLEVBQ1pTLEtBQUtSLElBQU1BLEVBTmZRLEtBQUFQLEtBQUFBLEVBUUlPLEtBQUtOLE1BQVFBLDZEQUliTixRQUFRYSwrQkFBK0JELEtBQUtGLEtBQU1FLEtBQUtULEtBQUtXLFlBQWFGLEtBQUtQLEtBQU1PLEtBQUtOLE1BQU9NLEtBQUtSLDBDQUlyR0osUUFBUWEsK0JBQStCRCxLQUFLRixLQUFNRSxLQUFLVCxLQUFLWSxXQUFZSCxLQUFLUCxLQUFNTyxLQUFLTixNQUFPTSxLQUFLUixxREFLcEdKLFFBQVFnQixvQkFBb0JKLEtBQUtGLEtBQU1FLEtBQUtULEtBQUtjLFNBQVVMLEtBQUtULEtBQUtZLFdBQVlILEtBQUtQLEtBQU1PLEtBQUtSLDhDQWhCakdKLFFBQUtHLG9CQUFMUyxLQUFBRixLQUFBRSxLQUFBVCxLQUFBZSxTQUFBTixLQUFBVCxLQUFBWSxXQUFBSCxLQUFBUCxLQUFBTyxLQUFBUiwyQ0FJREosUUFBQWdCLG9CQUFBSixLQUFBRixLQUFBRSxLQUFBVCxLQUFBZ0IsTUFBQVAsS0FBQVQsS0FBQVksV0FBQUgsS0FBQVAsS0FBQU8sS0FBQVIsOEJBUGtCRiIsImZpbGUiOiJtb2RlbC9wcm9kdWN0c01vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBvb2wgPSByZXF1aXJlKCcuLi9kYi9jb25uZWN0LmpzJyk7XG5pbXBvcnQgKiBhcyBRdWVyaWVzIGZyb20gJy4uL2RiL2ludGVyYWN0aW9uL2dlbmVyYWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0c01vZGVsIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgcmVzLCBuZXh0LCB0b2tlbiA9ICcnLCBzcWwgPSAnJykge1xuICAgIHRoaXMuc3FsID0gc3FsO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5yZXMgPSByZXM7XG4gICAgdGhpcy5uZXh0ID0gbmV4dDtcbiAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gIH1cblxuICBnZXRBbGxCeUNhdCgpIHtcbiAgICBRdWVyaWVzLnN0YW5kYXJkUmVxdWlyZWRMZW5ndGhHZXRRdWVyeSh0aGlzLnNxbCwgW3RoaXMuZGF0YS5jYXRlZ29yeUlkXSwgdGhpcy5uZXh0LCB0aGlzLnRva2VuLCB0aGlzLnJlcyk7XG4gIH1cblxuICBnZXRQcm9kdWN0KCkge1xuICAgIFF1ZXJpZXMuc3RhbmRhcmRSZXF1aXJlZExlbmd0aEdldFF1ZXJ5KHRoaXMuc3FsLCBbdGhpcy5kYXRhLnByb2R1Y3RJZF0sIHRoaXMubmV4dCwgdGhpcy50b2tlbiwgdGhpcy5yZXMpO1xuICB9XG5cbiAgLy8gQURNSU4gUEFORUwgU1RVRkZcbiAgY2hhbmdlUHJvZHVjdFF1YW50aXR5KCkge1xuICAgIFF1ZXJpZXMuc3RhbmRhcmRVcGRhdGVRdWVyeSh0aGlzLnNxbCwgW3RoaXMuZGF0YS5xdWFudGl0eSwgdGhpcy5kYXRhLnByb2R1Y3RJZF0sIHRoaXMubmV4dCwgdGhpcy5yZXMpO1xuICB9XG5cbiAgY2hhbmdlRGlzY291bnQoKSB7XG4gICAgUXVlcmllcy5zdGFuZGFyZFVwZGF0ZVF1ZXJ5KHRoaXMuc3FsLCBbdGhpcy5kYXRhLmRpc2NvdW50LCB0aGlzLmRhdGEucHJvZHVjdElkXSwgdGhpcy5uZXh0LCB0aGlzLnJlcyk7XG4gIH1cblxuICBjaGFuZ2VQcmljZSgpIHtcbiAgICBRdWVyaWVzLnN0YW5kYXJkVXBkYXRlUXVlcnkodGhpcy5zcWwsIFt0aGlzLmRhdGEucHJpY2UsIHRoaXMuZGF0YS5wcm9kdWN0SWRdLCB0aGlzLm5leHQsIHRoaXMucmVzKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
