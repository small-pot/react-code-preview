(this["webpackJsonp@uiw/react-code-preview"]=this["webpackJsonp@uiw/react-code-preview"]||[]).push([[487],{1169:function(e,n,r){!function(e){"use strict";var n=["From","Sender","Reply-To","To","Cc","Bcc","Message-ID","In-Reply-To","References","Resent-From","Resent-Sender","Resent-To","Resent-Cc","Resent-Bcc","Resent-Message-ID","Return-Path","Received"],r=["Date","Subject","Comments","Keywords","Resent-Date"];e.registerHelper("hintWords","mbox",n.concat(r));var t=/^[ \t]/,a=/^From /,i=new RegExp("^("+n.join("|")+"): "),o=new RegExp("^("+r.join("|")+"): "),d=/^[^:]+:/,c=/^[^ ]+@[^ ]+/,s=/^.*?(?=[^ ]+?@[^ ]+)/,m=/^<.*?>/,u=/^.*?(?=<.*>)/;function p(e,n){if(e.sol()){if(n.inSeparator=!1,n.inHeader&&e.match(t))return null;if(n.inHeader=!1,n.header=null,e.match(a))return n.inHeaders=!0,n.inSeparator=!0,"atom";var r,p=!1;return(r=e.match(o))||(p=!0)&&(r=e.match(i))?(n.inHeaders=!0,n.inHeader=!0,n.emailPermitted=p,n.header=r[1],"atom"):n.inHeaders&&(r=e.match(d))?(n.inHeader=!0,n.emailPermitted=!0,n.header=r[1],"atom"):(n.inHeaders=!1,e.skipToEnd(),null)}if(n.inSeparator)return e.match(c)?"link":(e.match(s)||e.skipToEnd(),"atom");if(n.inHeader){var l=function(e){return"Subject"===e?"header":"string"}(n.header);if(n.emailPermitted){if(e.match(m))return l+" link";if(e.match(u))return l}return e.skipToEnd(),l}return e.skipToEnd(),null}e.defineMode("mbox",(function(){return{startState:function(){return{inSeparator:!1,inHeader:!1,emailPermitted:!1,header:null,inHeaders:!1}},token:p,blankLine:function(e){e.inHeaders=e.inSeparator=e.inHeader=!1}}})),e.defineMIME("application/mbox","mbox")}(r(56))}}]);
//# sourceMappingURL=487.c85d74f4.chunk.js.map