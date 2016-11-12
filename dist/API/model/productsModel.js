"use strict";function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}}(),_general=require("../db/interaction/general.js"),Queries=_interopRequireWildcard(_general),pool=require("../db/connect.js"),ProductsModel=function(){function t(e,r,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";_classCallCheck(this,t),this.sql=s,this.data=e,this.res=r,this.next=a,this.token=i}return _createClass(t,[{key:"getAllByCat",value:function(){Queries.standardGetQuery(this.sql,[this.data.categoryId],this.next,this.token,this.res)}},{key:"getProduct",value:function(){Queries.standardGetQuery(this.sql,[this.data.productId],this.next,this.token,this.res)}},{key:"changeProductQuantity",value:function(){Queries.standardUpdateQuery(this.sql,[this.data.quantity,this.data.productId],this.next,this.res)}},{key:"changeDiscount",value:function(){Queries.standardUpdateQuery(this.sql,[this.data.discount,this.data.productId],this.next,this.res)}},{key:"changePrice",value:function(){Queries.standardUpdateQuery(this.sql,[this.data.price,this.data.productId],this.next,this.res)}}]),t}();exports.default=ProductsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Byb2R1Y3RzTW9kZWwuanMiXSwibmFtZXMiOlsiX2dlbmVyYWwiLCJyZXF1aXJlIiwiUXVlcmllcyIsInBvb2wiLCJQcm9kdWN0c01vZGVsIiwiZGF0YSIsInJlcyIsIm5leHQiLCJ0b2tlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInNxbCIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJzdGFuZGFyZEdldFF1ZXJ5IiwiY2F0ZWdvcnlJZCIsInByb2R1Y3RJZCIsInN0YW5kYXJkVXBkYXRlUXVlcnkiLCJxdWFudGl0eSIsImRpc2NvdW50IiwicHJpY2UiXSwibWFwcGluZ3MiOiJtbUJBQ0FBLFNBQUFDLFFBQUEsZ0NBQVlDLDBDQURSQyxLQUFPRixRQUFRLG9CQUdFRyx5QkFDbkIsUUFBQUEsR0FBWUMsRUFBTUMsRUFBS0MsR0FBNEIsR0FBdEJDLEdBQXNCQyxVQUFBQyxPQUFBLEdBQUFDLFNBQUFGLFVBQUEsR0FBQUEsVUFBQSxHQUFkLEdBQUlHLEVBQVVILFVBQUFDLE9BQUEsR0FBQUMsU0FBQUYsVUFBQSxHQUFBQSxVQUFBLEdBQUosRUFBSUksaUJBQUFDLEtBQUFWLEdBQ2pEVSxLQUFLRixJQUFNQSxFQUNYRSxLQUFLVCxLQUFPQSxFQUNaUyxLQUFLUixJQUFNQSxFQU5mUSxLQUFBUCxLQUFBQSxFQVFJTyxLQUFLTixNQUFRQSw2REFJYk4sUUFBUWEsaUJBQWlCRCxLQUFLRixLQUFNRSxLQUFLVCxLQUFLVyxZQUFhRixLQUFLUCxLQUFNTyxLQUFLTixNQUFPTSxLQUFLUiwwQ0FJdkZKLFFBQVFhLGlCQUFpQkQsS0FBS0YsS0FBTUUsS0FBS1QsS0FBS1ksV0FBWUgsS0FBS1AsS0FBTU8sS0FBS04sTUFBT00sS0FBS1IscURBS3RGSixRQUFRZ0Isb0JBQW9CSixLQUFLRixLQUFNRSxLQUFLVCxLQUFLYyxTQUFVTCxLQUFLVCxLQUFLWSxXQUFZSCxLQUFLUCxLQUFNTyxLQUFLUiw4Q0FoQmpHSixRQUFLRyxvQkFBTFMsS0FBQUYsS0FBQUUsS0FBQVQsS0FBQWUsU0FBQU4sS0FBQVQsS0FBQVksV0FBQUgsS0FBQVAsS0FBQU8sS0FBQVIsMkNBSURKLFFBQUFnQixvQkFBQUosS0FBQUYsS0FBQUUsS0FBQVQsS0FBQWdCLE1BQUFQLEtBQUFULEtBQUFZLFdBQUFILEtBQUFQLEtBQUFPLEtBQUFSLDhCQVBrQkYiLCJmaWxlIjoibW9kZWwvcHJvZHVjdHNNb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBwb29sID0gcmVxdWlyZSgnLi4vZGIvY29ubmVjdC5qcycpO1xuaW1wb3J0ICogYXMgUXVlcmllcyBmcm9tICcuLi9kYi9pbnRlcmFjdGlvbi9nZW5lcmFsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdHNNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIHJlcywgbmV4dCwgdG9rZW4gPSAnJywgc3FsID0gJycpIHtcbiAgICB0aGlzLnNxbCA9IHNxbDtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucmVzID0gcmVzO1xuICAgIHRoaXMubmV4dCA9IG5leHQ7XG4gICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICB9XG5cbiAgZ2V0QWxsQnlDYXQoKSB7XG4gICAgUXVlcmllcy5zdGFuZGFyZEdldFF1ZXJ5KHRoaXMuc3FsLCBbdGhpcy5kYXRhLmNhdGVnb3J5SWRdLCB0aGlzLm5leHQsIHRoaXMudG9rZW4sIHRoaXMucmVzKTtcbiAgfVxuXG4gIGdldFByb2R1Y3QoKSB7XG4gICAgUXVlcmllcy5zdGFuZGFyZEdldFF1ZXJ5KHRoaXMuc3FsLCBbdGhpcy5kYXRhLnByb2R1Y3RJZF0sIHRoaXMubmV4dCwgdGhpcy50b2tlbiwgdGhpcy5yZXMpO1xuICB9XG5cbiAgLy8gQURNSU4gUEFORUwgU1RVRkZcbiAgY2hhbmdlUHJvZHVjdFF1YW50aXR5KCkge1xuICAgIFF1ZXJpZXMuc3RhbmRhcmRVcGRhdGVRdWVyeSh0aGlzLnNxbCwgW3RoaXMuZGF0YS5xdWFudGl0eSwgdGhpcy5kYXRhLnByb2R1Y3RJZF0sIHRoaXMubmV4dCwgdGhpcy5yZXMpO1xuICB9XG5cbiAgY2hhbmdlRGlzY291bnQoKSB7XG4gICAgUXVlcmllcy5zdGFuZGFyZFVwZGF0ZVF1ZXJ5KHRoaXMuc3FsLCBbdGhpcy5kYXRhLmRpc2NvdW50LCB0aGlzLmRhdGEucHJvZHVjdElkXSwgdGhpcy5uZXh0LCB0aGlzLnJlcyk7XG4gIH1cblxuICBjaGFuZ2VQcmljZSgpIHtcbiAgICBRdWVyaWVzLnN0YW5kYXJkVXBkYXRlUXVlcnkodGhpcy5zcWwsIFt0aGlzLmRhdGEucHJpY2UsIHRoaXMuZGF0YS5wcm9kdWN0SWRdLCB0aGlzLm5leHQsIHRoaXMucmVzKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
