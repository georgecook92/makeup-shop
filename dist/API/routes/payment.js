"use strict";var express=require("express"),router=express.Router(),config=require("../db/config.js");router.post("/createPayment",function(e,r){var o=require("stripe")(config.stripeSecret),t="gbp",n=e.body,c=n.amount,s=n.description,i=null;o.tokens.create({card:{number:"4000058260000005",exp_month:12,exp_year:2018,cvc:"123"}}).then(function(e){console.log("created token",e),i=e}).catch(function(e){console.log("error from creating token",e)});var u=o.charges.create({amount:c,currency:t,description:s,source:i});u.then(function(e){console.log("response from stripe",e),r.json(e)}).catch(function(e){console.log("error from stripe",e),r.json(e)})}),module.exports=router;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9wYXltZW50LmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwicm91dGVyIiwiUm91dGVyIiwiY29uZmlnIiwicmVxIiwicmVzIiwicG9zdCIsImN1cnJlbmN5IiwiX3JlcSRib2R5Iiwic3RyaXBlU2VjcmV0Iiwic3RyaXBlIiwidG9rZW5zIiwiYW1vdW50IiwiZGVzY3JpcHRpb24iLCJleHBfbW9udGgiLCJzdHJpcGVUb2tlbiIsImNyZWF0ZSIsInRoZW4iLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiY2hhcmdlcyIsInNvdXJjZSIsInJlc3BvbnNlIiwiY2hhcmdlIl0sIm1hcHBpbmdzIjoiWUFBQSxJQUFJQSxTQUFVQyxRQUFRLFdBQ2xCQyxPQUFTRixRQUFRRyxTQURqQkgsT0FBQUEsUUFBVUMsa0JBRWRDLFFBQUlFLEtBQUFBLGlCQUFpQixTQUFBQyxFQUFBQyxHQUVyQkosR0FBT0ssR0FBS04sUUFBQSxVQUFrQkcsT0FBQ0MsY0FHckJHLEVBQVcsTUFMckJDLEVBSW1DTCxFQUFPTSxLQUFsQ0MsRUFKUkYsRUFJUUUsT0FBU1YsRUFKakJRLEVBSWlCUixZQUNQTyxFQUFOLElBSHdDRyxHQUFBQyxPQUlSUCxRQUF4QlEsTUFBUUMsT0FKd0IsbUJBU2xDQyxVQUFhLEdBSmZDLFNBQWMsS0FDWEosSUFBT0ssU0FFUkMsS0FBQSxTQUFBQyxHQUNBQyxRQUFBQyxJQUFBLGdCQUZJRixHQUdKSCxFQUFZRyxJQUNaRyxNQUFPLFNBQUFDLEdBSkhILFFBQUFDLElBQUEsNEJBQUFFLElBUVJQLElBQUFBLEdBQWNHLEVBQWRLLFFBQUFQLFFBQ0VLLE9BQUFBLEVBQ0ZGLFNBQUFBLEVBWEZOLFlBQUFBLEVBa0JJVyxPQUFRVCxHQUZSUixHQUFBQSxLQUFBQSxTQUFBQSxHQUNBTSxRQUFBQSxJQUFBQSx1QkFIaUNZLEdBSWpDRCxFQUFBQSxLQUFRVCxLQUpaTSxNQUFBLFNBQUFDLEdBV0VILFFBQVFDLElBQUksb0JBQXFCRSxHQUpuQ0ksRUFBT1QsS0FBTUssT0FLWGpCLE9BQUFBLFFBQVNpQiIsImZpbGUiOiJyb3V0ZXMvcGF5bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vZGIvY29uZmlnLmpzJyk7XG5cbnJvdXRlci5wb3N0KCcvY3JlYXRlUGF5bWVudCcsIChyZXEsIHJlcykgPT4ge1xuXG4gICAgdmFyIHN0cmlwZSA9IHJlcXVpcmUoXCJzdHJpcGVcIikoY29uZmlnLnN0cmlwZVNlY3JldCk7XG4gICAgY29uc3QgY3VycmVuY3kgPSBcImdicFwiO1xuICAgIGNvbnN0IHsgYW1vdW50LCBkZXNjcmlwdGlvbiB9ID0gcmVxLmJvZHk7XG4gICAgbGV0IHN0cmlwZVRva2VuID0gbnVsbDtcbiAgICBzdHJpcGUudG9rZW5zLmNyZWF0ZSh7XG4gICAgICAgIGNhcmQ6IHtcbiAgICAgICAgICBcIm51bWJlclwiOiAnNDAwMDA1ODI2MDAwMDAwNScsXG4gICAgICAgICAgXCJleHBfbW9udGhcIjogMTIsXG4gICAgICAgICAgXCJleHBfeWVhclwiOiAyMDE4LFxuICAgICAgICAgIFwiY3ZjXCI6ICcxMjMnXG4gICAgICAgIH1cbiAgICB9KS50aGVuKCAodG9rZW4pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVkIHRva2VuJywgdG9rZW4pO1xuICAgICAgc3RyaXBlVG9rZW4gPSB0b2tlbjtcbiAgICB9ICkuY2F0Y2goIChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGZyb20gY3JlYXRpbmcgdG9rZW4nLCBlcnJvcik7XG4gICAgfSApXG5cbiAgICBjb25zdCBjaGFyZ2UgPSBzdHJpcGUuY2hhcmdlcy5jcmVhdGUoe1xuICAgICAgICBhbW91bnQsXG4gICAgICAgIGN1cnJlbmN5LFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgc291cmNlOiBzdHJpcGVUb2tlblxuICAgIH0pO1xuXG4gICAgY2hhcmdlLnRoZW4oIChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlIGZyb20gc3RyaXBlJywgcmVzcG9uc2UpO1xuICAgICAgcmVzLmpzb24ocmVzcG9uc2UpO1xuICAgIH0gKS5jYXRjaCggKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgZnJvbSBzdHJpcGUnLCBlcnJvcik7XG4gICAgICByZXMuanNvbihlcnJvcik7XG4gICAgfSApO1xuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iXX0=
