(this["webpackJsonplist-user-repos"]=this["webpackJsonplist-user-repos"]||[]).push([[0],{43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(19),a=s.n(n),c=(s(43),s(9)),o=s(10),i=s(12),u=s(11),p=s(15),l=s(3),h=(s(44),s(45),s.p+"static/media/search.8e55e40c.svg"),j=s.p+"static/media/alert.162cee4a.svg",d=(s(46),s(21)),b=s.n(d),f=s(1),O=function(e){Object(i.a)(s,e);var t=Object(u.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(f.jsx)(p.b,{to:"/repos",className:"user-link",children:Object(f.jsxs)("button",{className:"user-wrapper",children:[Object(f.jsx)("img",{src:this.props.avatar,alt:"avatar",className:"user-avatar"}),Object(f.jsxs)("div",{className:"user-info",children:[Object(f.jsx)("h4",{className:"user-name",children:this.props.username}),Object(f.jsx)("div",{className:"user-description",children:Object(f.jsx)(b.a,{line:2,element:"div",truncateText:"...",text:this.props.description})})]})]})})}}]),s}(r.Component),m=s(16),v=s(13),x=s(18),g=s.n(x),y=s(26),N="GET_USER_INFO",k="GET_USER_REPOS",w="RESET_STATE",C=s(27),_=s.n(C),R=function(e){return function(){var t=Object(y.a)(g.a.mark((function t(s){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://api.github.com/users/".concat(e)).then((function(e){s({type:N,payload:e.data,status:e.status})})).catch((function(e){s({type:N,payload:e.response.status})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(){return function(e){e({type:w})}},D=function(e){return function(){var t=Object(y.a)(g.a.mark((function t(s){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://api.github.com/users/".concat(e,"/repos")).then((function(e){s({type:k,payload:e.data})})).catch((function(e){s({type:k,payload:e.response.status})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(e){Object(i.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(c.a)(this,s),(r=t.call(this,e)).onChange=function(e){e.preventDefault(),r.setState({username:e.target.value})},r.getUser=function(e){e.preventDefault(),r.props.getUserInfo(r.state.username),r.forceUpdate()},r.state={username:""},r}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.props.resetState()}},{key:"render",value:function(){var e=this.props.userInfo;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("form",{role:"search",className:"search-wrapper",autoComplete:"off",children:[Object(f.jsx)("input",{autoComplete:"false",name:"hidden",type:"text",style:{display:"none"}}),Object(f.jsx)("input",{type:"search",name:"search",placeholder:"Search Users",className:"search-input",onChange:this.onChange,value:this.state.username}),Object(f.jsx)("button",{className:"search-button",onClick:this.getUser,children:Object(f.jsx)("img",{src:h,alt:"search",className:"search-icon"})})]}),0!==Object.keys(this.props.userInfo).length&&Object(f.jsx)(O,{avatar:e.avatar_url,username:e.login,description:e.bio}),"number"===typeof this.props.userInfo&&Object(f.jsxs)("div",{className:"user-error",children:[Object(f.jsx)("img",{src:j,alt:"alert"}),"We couldn't load user's data. Please try again."]})]})}}]),s}(r.Component),E=Object(m.b)((function(e){return{userInfo:e.user}}),(function(e){return{getUserInfo:Object(v.b)(R,e),resetState:Object(v.b)(S,e)}}))(I),T=s.p+"static/media/back.3cc76821.svg",U=(s(71),function(e){Object(i.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(c.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).getDate=function(e){return new Date(e).toDateString()},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("button",{className:"repo-wrapper",onClick:function(){return window.open(e.props.url,"_blank").focus()},children:[Object(f.jsx)("h3",{className:"repo-name",children:this.props.name}),Object(f.jsx)("div",{className:"repo-description",children:Object(f.jsx)(b.a,{line:3,element:"div",truncateText:"...",text:this.props.description})}),Object(f.jsxs)("div",{className:"repo-created-date",children:["Created: ",this.getDate(this.props.createdDate)]}),Object(f.jsxs)("div",{className:"repo-info-wrapper",children:[Object(f.jsxs)("div",{className:"stargazers",children:["Stargazers: ",this.props.stargazers]}),Object(f.jsxs)("div",{className:"watchers",children:["Watchers: ",this.props.watchers]}),Object(f.jsxs)("div",{className:"forks",children:["Forks: ",this.props.forks]}),Object(f.jsxs)("div",{className:"repo-licence",children:["Licence: ",this.props.licence?this.props.licence:"None"]})]})]})}}]),s}(r.Component)),z=(s(72),function(e){Object(i.a)(s,e);var t=Object(u.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.props.getuserRepos(this.props.userInfo.login)}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(p.b,{to:"/list-user-repos",children:Object(f.jsx)("button",{className:"back-button",children:Object(f.jsx)("img",{src:T,alt:"Back button"})})}),0===this.props.userRepos.length&&Object(f.jsx)("div",{className:"no-repos",children:"This user doesn't have any repositories."}),Object(f.jsxs)("div",{className:"repos-list-wrapper",children:[this.props.userRepos.length>0&&this.props.userRepos.map((function(e){return Object(f.jsx)("div",{className:"repos-list-element",children:Object(f.jsx)(U,{name:e.name,description:e.description,createdDate:e.created_at,stargazers:e.stargazers_count,watchers:e.watchers_count,forks:e.forks_count,license:e.license,url:e.html_url})})})),"number"===typeof this.props.userRepos&&Object(f.jsxs)("div",{className:"repos-error",children:[Object(f.jsx)("img",{src:j,alt:"alert"}),"We couldn't load user's repos. Please go back and try again."]})]})]})}}]),s}(r.Component)),A=Object(m.b)((function(e){return{userInfo:e.user,userRepos:e.repos}}),(function(e){return{getuserRepos:Object(v.b)(D,e)}}))(z),P=function(e){Object(i.a)(s,e);var t=Object(u.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(p.a,{children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{path:"/list-user-repos",component:E,exact:!0}),Object(f.jsx)(l.a,{path:"/repos",component:A,exact:!0})]})})})}}]),s}(r.Component),W=s(37),B=Object(v.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return t.payload;case w:return{};default:return e}},repos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.payload;case w:return[];default:return e}}}),F=s(38),G=s.n(F),J=[W.a,G.a],M=v.a.apply(void 0,J)(v.d)(B);a.a.render(Object(f.jsx)(m.a,{store:M,children:Object(f.jsx)(P,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.47b594c5.chunk.js.map