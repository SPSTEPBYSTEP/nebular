(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"4Ssn":function(l,n,t){"use strict";var e=t("CcnG");t("S+eJ"),t.d(n,"d",function(){return u}),t.d(n,"h",function(){return a}),t.d(n,"a",function(){return r}),t.d(n,"e",function(){return o}),t.d(n,"c",function(){return i}),t.d(n,"g",function(){return s}),t.d(n,"b",function(){return c}),t.d(n,"f",function(){return b});var u=e.sb({encapsulation:2,styles:[],data:{}});function a(l){return e.Ob(0,[e.Db(null,0)],null,null)}var r=e.sb({encapsulation:2,styles:[],data:{}});function o(l){return e.Ob(0,[e.Db(null,0)],null,null)}var i=e.sb({encapsulation:2,styles:[],data:{}});function s(l){return e.Ob(0,[e.Db(null,0)],null,null)}var c=e.sb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"]],data:{}});function b(l){return e.Ob(0,[e.Db(null,0),e.Db(null,1),e.Db(null,2),e.Db(null,3)],null,null)}},c2hK:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),a=t("pMnS"),r=t("7s4d"),o=["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 0 4rem;flex:1 0 4rem}"],i=t("aJCS"),s=t("jXul"),c=function(){return function(){this.label="Loading"}}(),b=e.sb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.title-placeholder[_ngcontent-%COMP%]{height:1.8rem;margin-bottom:.5rem;width:80%}.text-placeholder[_ngcontent-%COMP%]{height:4rem;margin-bottom:1rem}.link-placeholder[_ngcontent-%COMP%]{height:1.25rem;width:5rem}.nb-theme-default   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:rgba(235,239,245,.6)}.nb-theme-cosmic   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:rgba(47,41,107,.6)}.nb-theme-corporate   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:rgba(241,245,248,.6)}"]],data:{}});function d(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,0,"div",[["class","title-placeholder"]],null,null,null,null,null)),(l()(),e.ub(1,0,null,null,0,"div",[["class","text-placeholder"]],null,null,null,null,null)),(l()(),e.ub(2,0,null,null,0,"div",[["class","link-placeholder"]],null,null,null,null,null))],null,null)}var h=t("67Y/"),p=t("vubp"),g=function(){function l(l){this.http=l}return l.prototype.load=function(l,n){var t=(l-1)%7*n;return this.http.get("assets/data/news.json").pipe(Object(h.a)(function(l){return l.splice(t,n)}),Object(p.a)(1500))},l}(),m=function(){return function(){}}(),f=e.sb({encapsulation:2,styles:[],data:{}});function E(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,6,"article",[],null,null,null,null,null)),(l()(),e.ub(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Mb(2,null,["",""])),(l()(),e.ub(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Mb(4,null,["",""])),(l()(),e.ub(5,0,null,null,1,"a",[],[[1,"href",4]],null,null,null,null)),(l()(),e.Mb(-1,null,["Read full article"]))],null,function(l,n){var t=n.component;l(n,2,0,t.post.title),l(n,4,0,t.post.text),l(n,5,0,t.post.link)})}var x=t("4Ssn"),w=t("S+eJ"),v=t("66B6"),y=t("eBxF"),O=t("kztb"),S=t("V+dw"),P=t("Ip0R"),C=t("t/Na"),A=t("dEwP"),T=t("t9fZ"),N=t("Qgas");function I(l,n,t){return 0===t?[n]:(l.push(n),l)}t("cwSc");var k=function(){function l(l,n,t,e,u,a,r){this.newsService=l,this.router=n,this.route=t,this.scrollService=e,this.layoutService=u,this.platformId=a,this.window=r,this.news=[],this.topPlaceholders=[],this.bottomPlaceholders=[],this.pageSize=10,this.loadingNext=!1,this.loadingPrevious=!1,Object(P.B)(this.platformId)&&this.window.history.scrollRestoration&&(this.initialScrollRestoration=r.history.scrollRestoration,history.scrollRestoration="manual")}return l.prototype.ngOnInit=function(){var l=this.route.snapshot.queryParams.page;this.startPage=l?Number.parseInt(l,10):100,this.pageToLoadNext=this.startPage},l.prototype.ngOnDestroy=function(){this.initialScrollRestoration&&(this.window.history.scrollRestoration=this.initialScrollRestoration)},l.prototype.updateUrl=function(l){this.router.navigate(["."],{queryParams:{page:l},replaceUrl:!0,relativeTo:this.route,queryParamsHandling:"merge"})},l.prototype.loadPrevious=function(){var l=this;this.loadingPrevious||1===this.startPage||(this.loadingPrevious=!0,this.topPlaceholders=new Array(this.pageSize),this.restoreScrollPosition(),this.startPage--,this.newsService.load(this.startPage,this.pageSize).subscribe(function(n){var t;l.topPlaceholders=[],(t=l.news).unshift.apply(t,n),l.loadingPrevious=!1},function(n){return l.startPage++}))},l.prototype.loadNext=function(){var l=this;this.loadingNext||(this.loadingNext=!0,this.bottomPlaceholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.bottomPlaceholders=[],(t=l.news).push.apply(t,n),l.loadingNext=!1,l.pageToLoadNext++}))},l.prototype.restoreScrollPosition=function(){var l=this;Object(A.a)(this.layoutService.getDimensions(),this.scrollService.getPosition(),this.listItems.changes.pipe(Object(T.a)(1)),this.layoutService.getDimensions(),this.scrollService.getPosition()).pipe(Object(N.a)(I,[])).subscribe(function(n){var t=n[4].y,e=n[3].scrollHeight-n[0].scrollHeight;n[1].y+e!==t&&l.scrollService.scrollTo(null,t+e)})},l}(),F=t("ZYCi"),M=t("MGne"),z=e.sb({encapsulation:0,styles:[o],data:{}});function L(l){return e.Ob(0,[(l()(),e.ub(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,i.d,i.b)),e.tb(1,49152,[[3,4]],0,s.b,[],null,null),(l()(),e.ub(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.tb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Eb(n,1).role),l(n,2,0,e.Eb(n,3).label)})}function j(l){return e.Ob(0,[(l()(),e.ub(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,i.d,i.b)),e.tb(1,49152,[[3,4]],0,s.b,[],null,null),(l()(),e.ub(2,0,null,0,1,"nb-news-post",[],null,null,null,E,f)),e.tb(3,49152,null,0,m,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Eb(n,1).role)})}function R(l){return e.Ob(0,[(l()(),e.ub(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,i.d,i.b)),e.tb(1,49152,[[3,4]],0,s.b,[],null,null),(l()(),e.ub(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.tb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Eb(n,1).role),l(n,2,0,e.Eb(n,3).label)})}function _(l){return e.Ob(0,[e.Kb(671088640,1,{listItems:1}),(l()(),e.ub(1,0,null,null,13,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,x.f,x.b)),e.tb(2,49152,null,0,w.b,[],null,null),(l()(),e.ub(3,0,null,2,11,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""],["nbListPageTracker",""]],[[1,"role",0]],[[null,"topThreshold"],[null,"bottomThreshold"],[null,"pageChange"],[null,"scroll"]],function(l,n,t){var u=!0,a=l.component;return"scroll"===n&&(u=!1!==e.Eb(l,7).onElementScroll()&&u),"topThreshold"===n&&(u=!1!==a.loadPrevious()&&u),"bottomThreshold"===n&&(u=!1!==a.loadNext()&&u),"pageChange"===n&&(u=!1!==a.updateUrl(t)&&u),u},i.c,i.a)),e.tb(4,49152,null,0,s.a,[],null,null),e.tb(5,4341760,null,1,v.a,[],{pageSize:[0,"pageSize"],startPage:[1,"startPage"]},{pageChange:"pageChange"}),e.Kb(603979776,2,{listItems:1}),e.tb(7,4341760,null,1,y.a,[e.k,O.a,S.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold",topThreshold:"topThreshold"}),e.Kb(603979776,3,{listItems:1}),(l()(),e.lb(16777216,null,0,1,null,L)),e.tb(10,278528,null,0,P.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.lb(16777216,null,0,1,null,j)),e.tb(12,278528,null,0,P.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.lb(16777216,null,0,1,null,R)),e.tb(14,278528,null,0,P.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,5,0,t.pageSize,t.startPage),l(n,7,0,500,""),l(n,10,0,t.topPlaceholders),l(n,12,0,t.news),l(n,14,0,t.bottomPlaceholders)},function(l,n){l(n,1,1,[e.Eb(n,2).xxsmall,e.Eb(n,2).xsmall,e.Eb(n,2).small,e.Eb(n,2).medium,e.Eb(n,2).large,e.Eb(n,2).xlarge,e.Eb(n,2).xxlarge,e.Eb(n,2).active,e.Eb(n,2).disabled,e.Eb(n,2).primary,e.Eb(n,2).info,e.Eb(n,2).success,e.Eb(n,2).warning,e.Eb(n,2).danger,e.Eb(n,2).hasAccent,e.Eb(n,2).primaryAccent,e.Eb(n,2).infoAccent,e.Eb(n,2).successAccent,e.Eb(n,2).warningAccent,e.Eb(n,2).dangerAccent,e.Eb(n,2).activeAccent,e.Eb(n,2).disabledAccent]),l(n,3,0,e.Eb(n,4).role)})}function D(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,2,"ng-component",[],null,null,null,_,z)),e.Jb(512,null,g,g,[C.c]),e.tb(2,245760,null,0,k,[g,F.l,F.a,O.a,S.a,e.C,M.f],null,null)],function(l,n){l(n,2,0)},null)}var W=e.qb("ng-component",k,D,{},{},[]),q=function(){function l(l){this.newsService=l,this.firstCard={news:[],placeholders:[],loading:!1,pageToLoadNext:1},this.secondCard={news:[],placeholders:[],loading:!1,pageToLoadNext:1},this.pageSize=10}return l.prototype.loadNext=function(l){l.loading||(l.loading=!0,l.placeholders=new Array(this.pageSize),this.newsService.load(l.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.placeholders=[],(t=l.news).push.apply(t,n),l.loading=!1,l.pageToLoadNext++}))},l}(),J=e.sb({encapsulation:0,styles:[o,["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}nb-card[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 1 45%;flex:1 1 45%;margin:0 2.5%}nb-card.own-scroll[_ngcontent-%COMP%]{height:30rem}"]],data:{}});function K(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,i.d,i.b)),e.tb(1,49152,[[1,4]],0,s.b,[],null,null),(l()(),e.ub(2,0,null,0,1,"nb-news-post",[],null,null,null,E,f)),e.tb(3,49152,null,0,m,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Eb(n,1).role)})}function $(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,i.d,i.b)),e.tb(1,49152,[[1,4]],0,s.b,[],null,null),(l()(),e.ub(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.tb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Eb(n,1).role),l(n,2,0,e.Eb(n,3).label)})}function U(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,i.d,i.b)),e.tb(1,49152,[[2,4]],0,s.b,[],null,null),(l()(),e.ub(2,0,null,0,1,"nb-news-post",[],null,null,null,E,f)),e.tb(3,49152,null,0,m,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Eb(n,1).role)})}function B(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,i.d,i.b)),e.tb(1,49152,[[2,4]],0,s.b,[],null,null),(l()(),e.ub(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.tb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Eb(n,1).role),l(n,2,0,e.Eb(n,3).label)})}function H(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,12,"nb-card",[["class","own-scroll"]],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,x.f,x.b)),e.tb(1,49152,null,0,w.b,[],null,null),(l()(),e.ub(2,0,null,0,2,"nb-card-header",[],null,null,null,x.h,x.d)),e.tb(3,49152,null,0,w.d,[],null,null),(l()(),e.Mb(-1,0,[" Own scroll "])),(l()(),e.ub(5,0,null,2,7,"nb-list",[["nbInfiniteList",""]],[[1,"role",0]],[[null,"bottomThreshold"],[null,"scroll"]],function(l,n,t){var u=!0,a=l.component;return"scroll"===n&&(u=!1!==e.Eb(l,7).onElementScroll()&&u),"bottomThreshold"===n&&(u=!1!==a.loadNext(a.firstCard)&&u),u},i.c,i.a)),e.tb(6,49152,null,0,s.a,[],null,null),e.tb(7,4341760,null,1,y.a,[e.k,O.a,S.a],{threshold:[0,"threshold"]},{bottomThreshold:"bottomThreshold"}),e.Kb(603979776,1,{listItems:1}),(l()(),e.lb(16777216,null,0,1,null,K)),e.tb(10,278528,null,0,P.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.lb(16777216,null,0,1,null,$)),e.tb(12,278528,null,0,P.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.ub(13,0,null,null,12,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,x.f,x.b)),e.tb(14,49152,null,0,w.b,[],null,null),(l()(),e.ub(15,0,null,0,2,"nb-card-header",[],null,null,null,x.h,x.d)),e.tb(16,49152,null,0,w.d,[],null,null),(l()(),e.Mb(-1,0,[" Window scroll "])),(l()(),e.ub(18,0,null,2,7,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""]],[[1,"role",0]],[[null,"bottomThreshold"],[null,"scroll"]],function(l,n,t){var u=!0,a=l.component;return"scroll"===n&&(u=!1!==e.Eb(l,20).onElementScroll()&&u),"bottomThreshold"===n&&(u=!1!==a.loadNext(a.secondCard)&&u),u},i.c,i.a)),e.tb(19,49152,null,0,s.a,[],null,null),e.tb(20,4341760,null,1,y.a,[e.k,O.a,S.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold"}),e.Kb(603979776,2,{listItems:1}),(l()(),e.lb(16777216,null,0,1,null,U)),e.tb(23,278528,null,0,P.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.lb(16777216,null,0,1,null,B)),e.tb(25,278528,null,0,P.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,7,0,500),l(n,10,0,t.firstCard.news),l(n,12,0,t.firstCard.placeholders),l(n,20,0,500,""),l(n,23,0,t.secondCard.news),l(n,25,0,t.secondCard.placeholders)},function(l,n){l(n,0,1,[e.Eb(n,1).xxsmall,e.Eb(n,1).xsmall,e.Eb(n,1).small,e.Eb(n,1).medium,e.Eb(n,1).large,e.Eb(n,1).xlarge,e.Eb(n,1).xxlarge,e.Eb(n,1).active,e.Eb(n,1).disabled,e.Eb(n,1).primary,e.Eb(n,1).info,e.Eb(n,1).success,e.Eb(n,1).warning,e.Eb(n,1).danger,e.Eb(n,1).hasAccent,e.Eb(n,1).primaryAccent,e.Eb(n,1).infoAccent,e.Eb(n,1).successAccent,e.Eb(n,1).warningAccent,e.Eb(n,1).dangerAccent,e.Eb(n,1).activeAccent,e.Eb(n,1).disabledAccent]),l(n,5,0,e.Eb(n,6).role),l(n,13,1,[e.Eb(n,14).xxsmall,e.Eb(n,14).xsmall,e.Eb(n,14).small,e.Eb(n,14).medium,e.Eb(n,14).large,e.Eb(n,14).xlarge,e.Eb(n,14).xxlarge,e.Eb(n,14).active,e.Eb(n,14).disabled,e.Eb(n,14).primary,e.Eb(n,14).info,e.Eb(n,14).success,e.Eb(n,14).warning,e.Eb(n,14).danger,e.Eb(n,14).hasAccent,e.Eb(n,14).primaryAccent,e.Eb(n,14).infoAccent,e.Eb(n,14).successAccent,e.Eb(n,14).warningAccent,e.Eb(n,14).dangerAccent,e.Eb(n,14).activeAccent,e.Eb(n,14).disabledAccent]),l(n,18,0,e.Eb(n,19).role)})}function Y(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,2,"ng-component",[],null,null,null,H,J)),e.Jb(512,null,g,g,[C.c]),e.tb(2,49152,null,0,q,[g],null,null)],null,null)}var G=e.qb("ng-component",q,Y,{},{},[]),Q=function(){function l(l){this.newsService=l,this.news=[],this.placeholders=[],this.pageSize=10,this.pageToLoadNext=1,this.loading=!1}return l.prototype.loadNext=function(){var l=this;this.loading||(this.loading=!0,this.placeholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.placeholders=[],(t=l.news).push.apply(t,n),l.loading=!1,l.pageToLoadNext++}))},l}(),V=e.sb({encapsulation:0,styles:[o],data:{}});function Z(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,i.d,i.b)),e.tb(1,49152,[[1,4]],0,s.b,[],null,null),(l()(),e.ub(2,0,null,0,1,"nb-news-post",[],null,null,null,E,f)),e.tb(3,49152,null,0,m,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Eb(n,1).role)})}function X(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,i.d,i.b)),e.tb(1,49152,[[1,4]],0,s.b,[],null,null),(l()(),e.ub(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.tb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Eb(n,1).role),l(n,2,0,e.Eb(n,3).label)})}function ll(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,9,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,x.f,x.b)),e.tb(1,49152,null,0,w.b,[],null,null),(l()(),e.ub(2,0,null,2,7,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""]],[[1,"role",0]],[[null,"bottomThreshold"],[null,"scroll"]],function(l,n,t){var u=!0,a=l.component;return"scroll"===n&&(u=!1!==e.Eb(l,4).onElementScroll()&&u),"bottomThreshold"===n&&(u=!1!==a.loadNext()&&u),u},i.c,i.a)),e.tb(3,49152,null,0,s.a,[],null,null),e.tb(4,4341760,null,1,y.a,[e.k,O.a,S.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold"}),e.Kb(603979776,1,{listItems:1}),(l()(),e.lb(16777216,null,0,1,null,Z)),e.tb(7,278528,null,0,P.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.lb(16777216,null,0,1,null,X)),e.tb(9,278528,null,0,P.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,4,0,500,""),l(n,7,0,t.news),l(n,9,0,t.placeholders)},function(l,n){l(n,0,1,[e.Eb(n,1).xxsmall,e.Eb(n,1).xsmall,e.Eb(n,1).small,e.Eb(n,1).medium,e.Eb(n,1).large,e.Eb(n,1).xlarge,e.Eb(n,1).xxlarge,e.Eb(n,1).active,e.Eb(n,1).disabled,e.Eb(n,1).primary,e.Eb(n,1).info,e.Eb(n,1).success,e.Eb(n,1).warning,e.Eb(n,1).danger,e.Eb(n,1).hasAccent,e.Eb(n,1).primaryAccent,e.Eb(n,1).infoAccent,e.Eb(n,1).successAccent,e.Eb(n,1).warningAccent,e.Eb(n,1).dangerAccent,e.Eb(n,1).activeAccent,e.Eb(n,1).disabledAccent]),l(n,2,0,e.Eb(n,3).role)})}function nl(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,2,"ng-component",[],null,null,null,ll,V)),e.Jb(512,null,g,g,[C.c]),e.tb(2,49152,null,0,Q,[g],null,null)],null,null)}var tl=e.qb("ng-component",Q,nl,{},{},[]),el=t("1Ei1"),ul=t("VnD/"),al=t("FA0J"),rl=function(){function l(l,n,t,e,u,a){this.newsService=l,this.router=n,this.route=t,this.scrollService=e,this.platformId=u,this.window=a,this.news=[],this.placeholders=[],this.pageSize=10,this.loadingNext=!1,this.loadingPrevious=!1,Object(P.B)(this.platformId)&&this.window.history.scrollRestoration&&(this.initialScrollRestoration=a.history.scrollRestoration,history.scrollRestoration="manual")}return l.prototype.ngOnInit=function(){var l=this.route.snapshot.queryParams.page;this.startPage=l?Number.parseInt(l,10):1,this.pageToLoadNext=this.startPage},l.prototype.ngOnDestroy=function(){this.initialScrollRestoration&&(this.window.history.scrollRestoration=this.initialScrollRestoration)},l.prototype.updateUrl=function(l){this.router.navigate(["."],{queryParams:{page:l},replaceUrl:!0,relativeTo:this.route,queryParamsHandling:"merge"})},l.prototype.loadPrevious=function(){var l=this;this.loadingPrevious||1===this.startPage||(this.loadingPrevious=!0,this.newsService.load(this.startPage-1,this.pageSize).subscribe(function(n){var t;(t=l.news).unshift.apply(t,n),l.loadingPrevious=!1,l.restoreScrollPosition(),l.startPage--}))},l.prototype.loadNext=function(){var l=this;this.loadingNext||(this.loadingNext=!0,this.placeholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.placeholders=[],(t=l.news).push.apply(t,n),l.loadingNext=!1,l.pageToLoadNext++}))},l.prototype.restoreScrollPosition=function(){var l=this,n=this.listItems.length>0?this.listItems.first.nativeElement:null;this.listItems.changes.pipe(Object(h.a)(function(){return l.listItems.first.nativeElement}),Object(ul.a)(function(l){return l!==n}),Object(T.a)(1)).subscribe(function(){for(var t=0,e=0,u=l.listItems.toArray();e<u.length;e++){var a=u[e].nativeElement;if(a===n)break;t+=Object(al.b)(a)}l.scrollService.scrollTo(null,t)})},l}(),ol=e.sb({encapsulation:0,styles:[o],data:{}});function il(l){return e.Ob(0,[(l()(),e.ub(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,i.d,i.b)),e.tb(1,49152,[[3,4]],0,s.b,[],null,null),(l()(),e.ub(2,0,null,0,1,"nb-news-post",[],null,null,null,E,f)),e.tb(3,49152,null,0,m,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Eb(n,1).role)})}function sl(l){return e.Ob(0,[(l()(),e.ub(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,i.d,i.b)),e.tb(1,49152,[[3,4]],0,s.b,[],null,null),(l()(),e.ub(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.tb(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Eb(n,1).role),l(n,2,0,e.Eb(n,3).label)})}function cl(l){return e.Ob(0,[e.Kb(671088640,1,{listItems:1}),(l()(),e.ub(1,0,null,null,13,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,x.f,x.b)),e.tb(2,49152,null,0,w.b,[],null,null),(l()(),e.ub(3,16777216,null,2,1,"div",[],[[2,"nb-spinner-container",null]],null,null,null,null)),e.tb(4,81920,null,0,el.a,[e.S,e.j,e.F,e.k],{nbSpinner:[0,"nbSpinner"]},null),(l()(),e.ub(5,0,null,2,9,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""],["nbListPageTracker",""]],[[1,"role",0]],[[null,"topThreshold"],[null,"bottomThreshold"],[null,"pageChange"],[null,"scroll"]],function(l,n,t){var u=!0,a=l.component;return"scroll"===n&&(u=!1!==e.Eb(l,9).onElementScroll()&&u),"topThreshold"===n&&(u=!1!==a.loadPrevious()&&u),"bottomThreshold"===n&&(u=!1!==a.loadNext()&&u),"pageChange"===n&&(u=!1!==a.updateUrl(t)&&u),u},i.c,i.a)),e.tb(6,49152,null,0,s.a,[],null,null),e.tb(7,4341760,null,1,v.a,[],{pageSize:[0,"pageSize"],startPage:[1,"startPage"]},{pageChange:"pageChange"}),e.Kb(603979776,2,{listItems:1}),e.tb(9,4341760,null,1,y.a,[e.k,O.a,S.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold",topThreshold:"topThreshold"}),e.Kb(603979776,3,{listItems:1}),(l()(),e.lb(16777216,null,0,1,null,il)),e.tb(12,278528,null,0,P.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.lb(16777216,null,0,1,null,sl)),e.tb(14,278528,null,0,P.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,4,0,t.loadingPrevious),l(n,7,0,t.pageSize,t.startPage),l(n,9,0,500,""),l(n,12,0,t.news),l(n,14,0,t.placeholders)},function(l,n){l(n,1,1,[e.Eb(n,2).xxsmall,e.Eb(n,2).xsmall,e.Eb(n,2).small,e.Eb(n,2).medium,e.Eb(n,2).large,e.Eb(n,2).xlarge,e.Eb(n,2).xxlarge,e.Eb(n,2).active,e.Eb(n,2).disabled,e.Eb(n,2).primary,e.Eb(n,2).info,e.Eb(n,2).success,e.Eb(n,2).warning,e.Eb(n,2).danger,e.Eb(n,2).hasAccent,e.Eb(n,2).primaryAccent,e.Eb(n,2).infoAccent,e.Eb(n,2).successAccent,e.Eb(n,2).warningAccent,e.Eb(n,2).dangerAccent,e.Eb(n,2).activeAccent,e.Eb(n,2).disabledAccent]),l(n,3,0,e.Eb(n,4).isSpinnerExist),l(n,5,0,e.Eb(n,6).role)})}function bl(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,2,"ng-component",[],null,null,null,cl,ol)),e.Jb(512,null,g,g,[C.c]),e.tb(2,245760,null,0,rl,[g,F.l,F.a,O.a,e.C,M.f],null,null)],function(l,n){l(n,2,0)},null)}var dl=e.qb("ng-component",rl,bl,{},{},[]),hl=t("gIcY"),pl=t("n81q"),gl=t("i6JN"),ml=t("0AKQ"),fl=t("YNTD"),El=function(){return function(){}}();t.d(n,"InfiniteListModuleNgFactory",function(){return xl});var xl=e.rb(u,[],function(l){return e.Bb([e.Cb(512,e.j,e.fb,[[8,[a.a,r.a,W,G,tl,dl]],[3,e.j],e.y]),e.Cb(4608,P.p,P.o,[e.v,[2,P.E]]),e.Cb(4608,hl.A,hl.A,[]),e.Cb(1073742336,P.c,P.c,[]),e.Cb(1073742336,pl.a,pl.a,[]),e.Cb(1073742336,hl.y,hl.y,[]),e.Cb(1073742336,hl.i,hl.i,[]),e.Cb(1073742336,F.p,F.p,[[2,F.v],[2,F.l]]),e.Cb(1073742336,gl.a,gl.a,[]),e.Cb(1073742336,ml.a,ml.a,[]),e.Cb(1073742336,fl.a,fl.a,[]),e.Cb(1073742336,El,El,[]),e.Cb(1073742336,u,u,[]),e.Cb(1024,F.j,function(){return[[{path:"infinite-list-placeholders.component",component:k},{path:"infinite-list-scroll-modes.component",component:q},{path:"infinite-list-showcase.component",component:Q},{path:"infinite-news-list.component",component:rl}]]},[])])})}}]);