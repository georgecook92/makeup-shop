"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,o){for(var s=0;s<o.length;s++){var n=o[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,s,n){return s&&e(o.prototype,s),n&&e(o,n),o}}(),_email2=require("../email/email.js"),_email3=_interopRequireDefault(_email2),bcrypt=require("bcrypt"),pool=require("../../../db/connect.js"),saltRounds=10,AuthModel=function(){function e(o,s,n){_classCallCheck(this,e),this.sql=o,this.data=s,this.res=n}return _createClass(e,[{key:"confirmUser",value:function(){var e=this;pool.getConnection(function(o,s){s.query(e.sql,[e.data.token],function(o,n){o&&(console.log(o),s.release()),n.affectedRows>0?e.res.status(200).json({success:!0}):e.res.status(404).json({success:!1})})})}},{key:"register",value:function(){var e=this;pool.getConnection(function(o,s){s.query(e.sql,[e.data.email],function(o,n){o&&(console.log(o),s.release()),n.length>0?(s.release(),e.res.status(422).json({error:"exists"})):bcrypt.genSalt(saltRounds,function(o,n){bcrypt.hash(e.data.password,n,function(o,n){e.data.password=n;var t=e.data,a=t.email,r=t.password,l=t.first_name,i=t.last_name,c=t.phone,u={email:a,password:r,first_name:l,last_name:i,phone:c};console.log("user",u),a&&r&&l&&i&&c?pool.getConnection(function(o,s){o&&console.log(o),s.query("INSERT INTO _users SET ?",u,function(o,n){if(o)console.log(o),s.release();else{var t="www.testsite.com",a="You are receiving this because you (or someone else) have signed up to the website.\n\nPlease click on the following link, or paste this into your browser to complete the process:\n\n"+t+"/confirmEmail/token\n\nOnce you have confirmed your account, you will be able to login.\n",r=new _email3.default(e.data.email,"userconfirmation@makeup.com","Confirm Account",a,e.res);r.sendTokenEmail(),s.release()}})}):(s.release(),e.res.status(422).json({error:"please provide all fields"}))})})})})}},{key:"login",value:function(){var e=this;pool.getConnection(function(o,s){o&&console.log(o),s.query(e.sql,[e.data.email],function(o,n){o&&(console.log(o),s.release()),n.length>0?bcrypt.compare(e.data.password,n[0].password,function(o,t){o&&(console.log(o),s.release()),t?(console.log("correct."),s.release(),console.log(n[0]),e.res.status(200).json({email:n[0].email,first_name:n[0].first_name,last_name:n[0].last_name,phone:n[0].phone})):(console.log("wrong."),s.release(),e.res.status(422).json({error:"Incorrect Password"}))}):(s.release(),e.res.status(422).json({error:"Email Not Registered"}))})})}}]),e}();exports.default=AuthModel;