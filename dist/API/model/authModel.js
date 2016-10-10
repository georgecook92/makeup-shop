"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,n,t){return n&&e(o.prototype,n),t&&e(o,t),o}}(),_email2=require("../email/email.js"),_email3=_interopRequireDefault(_email2),bcrypt=require("bcrypt"),pool=require("../../../db/connect.js"),saltRounds=10,AuthModel=function(){function e(o,n,t){_classCallCheck(this,e),this.sql=o,this.data=n,this.res=t}return _createClass(e,[{key:"confirmUser",value:function(){var e=this;return new Promise(function(o,n){pool.getConnection(function(t,s){s.query(e.sql,[e.data.token],function(e,t){e&&(console.log(e),n({error:e}),s.release()),t.affectedRows>0?o({success:!0}):n({error:"not-exist"})})})})}},{key:"register",value:function(){var e=this;pool.getConnection(function(o,n){n.query(e.sql,[e.data.email],function(o,t){o&&(console.log(o),n.release()),t.length>0?(n.release(),e.res.status(422).json({error:"exists"})):bcrypt.genSalt(saltRounds,function(o,t){bcrypt.hash(e.data.password,t,function(o,t){e.data.password=t;var s=e.data,r=s.email,a=s.password,l=s.first_name,i=s.last_name,c=s.phone,u={email:r,password:a,first_name:l,last_name:i,phone:c};console.log("user",u),r&&a&&l&&i&&c?pool.getConnection(function(o,n){o&&console.log(o),n.query("INSERT INTO _users SET ?",u,function(o,t){if(o)console.log(o),n.release();else{var s="www.testsite.com",r="You are receiving this because you (or someone else) have signed up to the website.\n\nPlease click on the following link, or paste this into your browser to complete the process:\n\n"+s+"/confirmEmail/token\n\nOnce you have confirmed your account, you will be able to login.\n",a=new _email3.default(e.data.email,"userconfirmation@makeup.com","Confirm Account",r,e.res);a.sendTokenEmail(),n.release()}})}):(n.release(),e.res.status(422).json({error:"please provide all fields"}))})})})})}},{key:"login",value:function(){var e=this;pool.getConnection(function(o,n){o&&console.log(o),n.query(e.sql,[e.data.email],function(o,t){o&&(console.log(o),n.release()),t.length>0?bcrypt.compare(e.data.password,t[0].password,function(o,s){o&&(console.log(o),n.release()),s?(console.log("correct."),n.release(),console.log(t[0]),e.res.status(200).json({email:t[0].email,first_name:t[0].first_name,last_name:t[0].last_name,phone:t[0].phone})):(console.log("wrong."),n.release(),e.res.status(422).json({error:"Incorrect Password"}))}):(n.release(),e.res.status(422).json({error:"Email Not Registered"}))})})}}]),e}();exports.default=AuthModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2F1dGhNb2RlbC5qcyJdLCJuYW1lcyI6WyJfZW1haWwyIiwicmVxdWlyZSIsImJjcnlwdCIsInBvb2wiLCJzYWx0Um91bmRzIiwiQXV0aE1vZGVsIiwic3FsIiwiZGF0YSIsInJlcyIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJfdGhpcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0Q29ubmVjdGlvbiIsImVyciIsImNvbm5lY3Rpb24iLCJ0b2tlbiIsInJlc3VsdCIsImxvZyIsImVycm9yIiwicmVsZWFzZSIsImFmZmVjdGVkUm93cyIsInN1Y2Nlc3MiLCJfdGhpczIiLCJlbWFpbCIsImNvbnNvbGUiLCJsZW5ndGgiLCJqc29uIiwiZ2VuU2FsdCIsInNhbHQiLCJoYXNoIiwicGFzc3dvcmQiLCJfZGF0YSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwaG9uZSIsInVzZXIiLCJxdWVyeSIsInVybCIsInJlZ2lzdGVyRW1haWxDb250ZW50Iiwic2VuZFRva2VuRW1haWwiLCJjb21wYXJlIiwiX3RoaXMzIiwiY29tcGFyaXNvblZhbHVlIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiNGZBR0FBLFFBQUFDLFFBQUEsNkRBSElDLE9BQVNELFFBQVEsVUFDakJFLEtBQU9GLFFBQVEsMEJBQ2JHLFdBQWEsR0FHRUMscUJBRW5CLFFBQUFBLEdBQVlDLEVBQUtDLEVBQUtDLEdBQUtDLGdCQUFBQyxLQUFBTCxHQUo3QkssS0FBQUosSUFBQUEsRUFNSUksS0FBS0gsS0FBT0EsRUFDWkcsS0FBS0YsSUFBTUEsNkRBR0MsR0FBQUcsR0FBQUQsSUFDWixPQUFPLElBQUlFLFNBQVMsU0FBQ0MsRUFBUUMsR0FDM0JYLEtBQUtZLGNBQWUsU0FBQ0MsRUFBS0MsR0FmNUJmLEVBQVNELE1BQVFVLEVBQXJCTCxLQUFBSyxFQUFBSixLQUFBVyxPQUFBLFNBQUFGLEVBQUFHLEdBQ1dsQixJQUNMRyxRQUFOZ0IsSUFBQUosR0FpQllGLEdBQ0VPLE1BQU9MLElBYlFDLEVBQUFLLFdBQ3pCSCxFQUFBSSxhQUFBLEVBQ0toQixHQUNMaUIsU0FBQSxJQW9CUVYsR0FDRU8sTUFBTyx1REFYUEEsR0FBQUEsR0FBQUEsSUFES2xCLE1BQUFZLGNBQVAsU0FBQUMsRUFBQUMsR0FHQUEsRUFBQUEsTUFBQUEsRUFBV0ssS0FBWEcsRUFBQWxCLEtBQUFtQixPQUFBLFNBQUFWLEVBQUFHLEdBQ0RILElBQ0RXLFFBQUlSLElBQUFBLEdBQ0ZOLEVBQUFBLFdBSURNLEVBQU1TLE9BQUEsR0FDTGQsRUFBT1EsVUFDTEQsRUFBQUEsSUFBQUEsT0FBTyxLQUFBUSxNQUFBUixNQUFBLFlBR1ZuQixPQUFBNEIsUUFBQTFCLFdBQUEsU0FBQVksRUFBQWUsR0FsQkg3QixPQUFBOEIsS0FBQVAsRUFBQWxCLEtBQUEwQixTQUFBRixFQUFBLFNBQUFmLEVBQUFnQixHQUZKUCxFQUFBbEIsS0FBQTBCLFNBQUFELENBRUksSUFBQUUsR0F5QzREVCxFQUFLbEIsS0FBdERtQixFQXpDWFEsRUF5Q1dSLE1BQU9PLEVBekNsQkMsRUF5Q2tCRCxTQUFVRSxFQXpDNUJELEVBeUM0QkMsV0FBWUMsRUF6Q3hDRixFQXlDd0NFLFVBQVdDLEVBekNuREgsRUF5Q21ERyxNQUV6Q0MsR0FBUVosTUFBQUEsRUFuQmJPLFNBQUFBLEVBQUFFLFdBQUFBLEVBQUFDLFVBQUFBLEVBQUFDLE1BQUFBLEVBcUJDVixTQUFRUCxJQUFJLE9BQU9rQixHQW5CaEJDLEdBQU1OLEdBQVdFLEdBQTVCQyxHQUE4Q0MsRUFPMUNwQixLQUFBQSxjQUFBLFNBQUFELEVBQUFDLEdBQ0FELEdBQ0tXLFFBQUFQLElBQUFKLEdBR0RDLEVBQUFzQixNQUFBLDJCQUFBRCxFQUFBLFNBQUF0QixFQUFBRyxHQUNBLEdBQUtaLEVBc0JHb0IsUUFBUVAsSUFBSUosR0F4QitCQyxFQUlHSyxjQUpILENBSXZDVyxHQUFBQSxHQUp1QyxtQkFJN0JFLEVBSjZCLDBMQUFBSyxFQUFBLDRGQUFBZCxFQUlOVyxHQUFBQSxTQUFBQSxRQUpNWixFQUFBbEIsS0FBQW1CLE1BQUEsOEJBQUEsa0JBQUFlLEVBQUFoQixFQUFBakIsSUErQjNDa0IsR0FBTWdCLGlCQUNOekIsRUFBV0ssZ0JBMUNyQk4sRUFBS00sVUFFUEwsRUFBQUEsSUFBV0ssT0FBWCxLQUFBTyxNQUFBUixNQUFBLHVFQTJCVU0sR0FBQUEsR0FBQUEsSUFDRHhCLE1BQUFZLGNBQUEsU0FBQUMsRUFBQUMsR0E0QlRELEdBMUJRQyxRQUFBQSxJQUFBQSxHQUVJVSxFQUFBQSxNQUFBQSxFQUFBQSxLQUFRUCxFQUFSYixLQUFBbUIsT0FBQSxTQUFBVixFQUFBRyxHQUNBRixJQUNEVSxRQUFBUCxJQUFBSixHQUNDQyxFQUFBSyxXQUdBSCxFQUFBUyxPQUFJRixFQUlQeEIsT0FBQXlDLFFBWkRDLEVBQUFyQyxLQUFBMEIsU0FBQWQsRUFBQSxHQUFBYyxTQUFBLFNBQUFqQixFQUFBNkIsR0FjRDdCLElBQ0ZXLFFBQUFQLElBQUFKLEdBckNIQyxFQUFBSyxXQVhOdUIsR0FERmxCLFFBQUFQLElBQUEsWUF3RERILEVBQUFLLFVBMEJhSyxRQUFRUCxJQUFJRCxFQUFPLElBQ25CeUIsRUFBS3BDLElBQUlzQyxPQUFPLEtBQUtqQixNQUNuQkgsTUExQlJQLEVBQUEsR0FBQU8sTUFBQVMsV0FBQWhCLEVBQUEsR0FBQWdCLFdBNEJRQyxVQUFjakIsRUFBTyxHQUFHaUIsVUEzQmpDckIsTUFBY0ksRUFBQ0gsR0FBRHFCLFVBSWpCcEIsUUFBQUcsSUFBaUIsVUFDWEosRUFBS00sVUFDUEssRUFBUVAsSUFBSUosT0FBWixLQUFBYSxNQUFBUixNQUFBLDJCQUtBSixFQUFBSyxVQTZCQXNCLEVBQUtwQyxJQUFJc0MsT0FBTyxLQUFLakIsTUFBT1IsTUFBUyx1REF2STFCaEIiLCJmaWxlIjoibW9kZWwvYXV0aE1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdCcpO1xudmFyIHBvb2wgPSByZXF1aXJlKCcuLi8uLi8uLi9kYi9jb25uZWN0LmpzJyk7XG5jb25zdCBzYWx0Um91bmRzID0gMTA7XG5pbXBvcnQgRW1haWwgZnJvbSAnLi4vZW1haWwvZW1haWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoTW9kZWwge1xuXG4gIGNvbnN0cnVjdG9yKHNxbCwgZGF0YSxyZXMpIHtcbiAgICB0aGlzLnNxbCA9IHNxbDtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucmVzID0gcmVzO1xuICB9XG5cbiAgY29uZmlybVVzZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICAgIHBvb2wuZ2V0Q29ubmVjdGlvbiggKGVyciwgY29ubmVjdGlvbikgPT4ge1xuICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5KHRoaXMuc3FsLCBbdGhpcy5kYXRhLnRva2VuXSwgKGVycixyZXN1bHQpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdC5hZmZlY3RlZFJvd3MgPiAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgZXJyb3I6ICdub3QtZXhpc3QnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfSApXG4gICAgICB9ICk7XG4gICAgfSApO1xuICB9XG5cbiAgcmVnaXN0ZXIoKSB7XG4gICAgcG9vbC5nZXRDb25uZWN0aW9uKChlcnIsY29ubmVjdGlvbikgPT4ge1xuICAgICAgY29ubmVjdGlvbi5xdWVyeSh0aGlzLnNxbCwgW3RoaXMuZGF0YS5lbWFpbF0sIChlcnIscmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgdGhpcy5yZXMuc3RhdHVzKDQyMikuanNvbih7J2Vycm9yJzogJ2V4aXN0cyd9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBiY3J5cHQuZ2VuU2FsdChzYWx0Um91bmRzLCAoZXJyLCBzYWx0KSA9PiB7XG4gICAgICAgICAgICBiY3J5cHQuaGFzaCh0aGlzLmRhdGEucGFzc3dvcmQsIHNhbHQsIChlcnIsIGhhc2gpID0+IHtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhoYXNoKTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhLnBhc3N3b3JkID0gaGFzaDtcblxuICAgICAgICAgICAgICBsZXQge2VtYWlsLCBwYXNzd29yZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBwaG9uZX0gPSB0aGlzLmRhdGE7XG5cbiAgICAgICAgICAgICAgdmFyIHVzZXIgPSB7ZW1haWwsIHBhc3N3b3JkLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIHBob25lfTtcblxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXNlcicsdXNlcik7XG5cbiAgICAgICAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIWZpcnN0X25hbWUgfHwgIWxhc3RfbmFtZSB8fCAhcGhvbmUpIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcy5zdGF0dXMoNDIyKS5qc29uKCB7IFwiZXJyb3JcIiA6IFwicGxlYXNlIHByb3ZpZGUgYWxsIGZpZWxkc1wifSApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vcmVzLmpzb24oIHsgXCJzdWNjZXNzXCIgOiB0cnVlfSApO1xuXG4gICAgICAgICAgICAgICAgcG9vbC5nZXRDb25uZWN0aW9uKChlcnIsIGNvbm5lY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSgnSU5TRVJUIElOVE8gX3VzZXJzIFNFVCA/JywgdXNlciwgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSAnd3d3LnRlc3RzaXRlLmNvbSc7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2lzdGVyRW1haWxDb250ZW50ID0gJ1lvdSBhcmUgcmVjZWl2aW5nIHRoaXMgYmVjYXVzZSB5b3UgKG9yIHNvbWVvbmUgZWxzZSkgaGF2ZSBzaWduZWQgdXAgdG8gdGhlIHdlYnNpdGUuXFxuXFxuJyArICdQbGVhc2UgY2xpY2sgb24gdGhlIGZvbGxvd2luZyBsaW5rLCBvciBwYXN0ZSB0aGlzIGludG8geW91ciBicm93c2VyIHRvIGNvbXBsZXRlIHRoZSBwcm9jZXNzOlxcblxcbicgKyB1cmwgKyAnL2NvbmZpcm1FbWFpbC8nICsgJ3Rva2VuJyArICdcXG5cXG4nICsgJ09uY2UgeW91IGhhdmUgY29uZmlybWVkIHlvdXIgYWNjb3VudCwgeW91IHdpbGwgYmUgYWJsZSB0byBsb2dpbi5cXG4nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGVtYWlsID0gbmV3IEVtYWlsKHRoaXMuZGF0YS5lbWFpbCwgJ3VzZXJjb25maXJtYXRpb25AbWFrZXVwLmNvbScsICdDb25maXJtIEFjY291bnQnLCByZWdpc3RlckVtYWlsQ29udGVudCwgdGhpcy5yZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgICBlbWFpbC5zZW5kVG9rZW5FbWFpbCgpO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIHBvb2wuZ2V0Q29ubmVjdGlvbigoZXJyLGNvbm5lY3Rpb24pID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICAgIGNvbm5lY3Rpb24ucXVlcnkodGhpcy5zcWwsIFt0aGlzLmRhdGEuZW1haWxdLCAoZXJyLHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vZG8gc29tZXRoaW5nIGlmIGVtYWlsIGV4aXN0c1xuXG4gICAgICAgICAgLy8gTG9hZCBoYXNoIGZyb20geW91ciBwYXNzd29yZCBEQi5cbiAgICAgICAgICBiY3J5cHQuY29tcGFyZSh0aGlzLmRhdGEucGFzc3dvcmQsIHJlc3VsdFswXS5wYXNzd29yZCwgKGVyciwgY29tcGFyaXNvblZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb3JyZWN0LicpO1xuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdFswXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICBcImVtYWlsXCIgOiByZXN1bHRbMF0uZW1haWwsXG4gICAgICAgICAgICAgICAgICBcImZpcnN0X25hbWVcIiA6IHJlc3VsdFswXS5maXJzdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgXCJsYXN0X25hbWVcIiA6IHJlc3VsdFswXS5sYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgICBcInBob25lXCIgOiByZXN1bHRbMF0ucGhvbmVcbiAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd3JvbmcuJyk7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXMuc3RhdHVzKDQyMikuanNvbigge1wiZXJyb3JcIjogJ0luY29ycmVjdCBQYXNzd29yZCd9ICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgIHRoaXMucmVzLnN0YXR1cyg0MjIpLmpzb24oIHtcImVycm9yXCI6ICdFbWFpbCBOb3QgUmVnaXN0ZXJlZCd9ICk7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
