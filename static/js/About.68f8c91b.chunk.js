(this.webpackJsonptestreactapp=this.webpackJsonptestreactapp||[]).push([[0],Array(77).concat([function(n,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return r}));var a=t(2),i=function(n){return"\n  background: ".concat(n?"#2f2f2f":"#f9f9f9",";\n  color: ").concat(n?a.a.WHITE:a.a.BLACK,";\n  min-height: 80vh;\n  padding: 2rem 8% 3rem;\n  transition: .3s ease all;\n")},r=function(n){return"\n  box-shadow: 0px 4px 12px -2px ".concat(n?"#000000ad":"#171717c9",";")}},,,,,,,function(n,e,t){n.exports=t.p+"static/media/Me.ba436a8f.JPG"},function(n,e,t){n.exports=t.p+"static/media/jin_chiu_cv_en.ceaaa5af.pdf"},function(n,e,t){n.exports=t.p+"static/media/jin_chiu_cv_mandarin.c873859f.pdf"},,function(n,e,t){n.exports=t.p+"static/media/web_0.77b4c25c.png"},function(n,e,t){n.exports=t.p+"static/media/mobile_0.0a87fe4c.png"},function(n,e,t){n.exports=t.p+"static/media/draft_0.ff79a66d.png"},function(n,e,t){n.exports=t.p+"static/media/draft_1.d8c3a3d9.png"},function(n,e,t){n.exports=t.p+"static/media/switchColor.f26f3e04.gif"},function(n,e,t){n.exports=t.p+"static/media/pantone333333.5e95a55e.png"},function(n,e,t){n.exports=t.p+"static/media/pantonef9f9f9.3c20a300.png"},function(n,e,t){n.exports=t.p+"static/media/animation1.74c794d2.gif"},function(n,e,t){n.exports=t.p+"static/media/animation2.8b175514.gif"},function(n,e,t){n.exports=t.p+"static/media/animation3.08d2ac2c.gif"},function(n,e,t){n.exports=t.p+"static/media/w_l.eb711010.png"},function(n,e,t){n.exports=t.p+"static/media/w_m.7c2f2e4c.png"},function(n,e,t){n.exports=t.p+"static/media/w_s.d6226e36.png"},function(n,e,t){n.exports=t.p+"static/media/b_l.ddd1a7a3.png"},function(n,e,t){n.exports=t.p+"static/media/b_m.5568148d.png"},function(n,e,t){n.exports=t.p+"static/media/b_s.e7d7ff26.png"},function(n,e,t){n.exports=t.p+"static/media/w2_l.ddc2963d.png"},function(n,e,t){n.exports=t.p+"static/media/w2_m.338c6a88.png"},function(n,e,t){n.exports=t.p+"static/media/w2_s.dda8f239.png"},function(n,e,t){n.exports=t.p+"static/media/b2_l.42f8bab6.png"},function(n,e,t){n.exports=t.p+"static/media/b2_m.ec3ce35e.png"},function(n,e,t){n.exports=t.p+"static/media/b2_s.72d93d6e.png"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(n,e,t){n.exports=t.p+"static/media/sigininPage1.cd5847dd.png"},function(n,e,t){n.exports=t.p+"static/media/sigininPage2.8e5b6405.png"},function(n,e,t){n.exports=t.p+"static/media/creditCardCheckout2.9efca6d1.png"},function(n,e,t){n.exports=t.p+"static/media/calculator.4fee52f5.png"},function(n,e,t){n.exports=t.p+"static/media/appIcon.8d9f885e.png"},function(n,e,t){n.exports=t.p+"static/media/errorPage.249b804b.png"},function(n,e,t){n.exports=t.p+"static/media/musicPlayer.3ef5f255.png"},function(n,e,t){n.exports=t.p+"static/media/boo.155e1afa.mp4"},function(n,e,t){n.exports=t.p+"static/media/cinemaApp.0faf417c.mp4"},function(n,e,t){n.exports=t.p+"static/media/d3Practice.8cc143c8.mov"},,function(n,e,t){"use strict";t.r(e);var a=t(8),i=t(0),r=t.n(i),c=t(9),o=t(16),s=t(35),m=t(77),l=t(2),d="Rebas is a brand that work in cooperation with baseball leagues in Taiwan. It updates the information related to baseball games correctly whenever the game is hold. Attempting to building a digital community for baseball-aholic.\n\nI were in charge of UI design and frontend coding in this project. During the preliminary project, I made a website mockup with Sketch, and started implementing coding tasks with React after completed the design.",p="In this version, the main features are the matchup section and the reports section. Therefore, after discussed with the client, we decided to remove the map section which is at the bottom of the wireframe temporarily.\n\nConsidering web accessibility in all kinds of screen size and mobile size, I simplified the matchup rather than using common  tree diagram. Through such design, it can display team logo and score more clearly, furthermore, clients may put as many games as they want without worrying about space limitation.";function f(){var n=Object(a.a)(["\n  display: flex;\n  align-items: flex-end;\n  .label{\n    margin: 0 0.5rem 0 0;\n  }\n  .tag-box{\n    display: flex;\n    .tag{\n      box-shadow: 0px 3px 6px 0px ",";\n      padding: 0.2rem 0.5rem;\n      border-radius: 5px;\n      color: ",";\n      background: ",";\n      font-size: 0.8rem;\n    }\n    div:not(:first-child){\n      margin: 0 0.6rem;\n    }\n  }\n\n  @media "," {\n   flex-direction: column;\n   align-items: center;\n   .tag-box{\n    flex-direction: column;\n    align-items: center;\n    margin: 0.5rem;\n     .tag{\n      margin: 0.5rem 0 0;\n     }\n    }\n  }\n"]);return f=function(){return n},n}var u=c.a.div(f(),(function(n){return n.isDark?"#4ea59f":"#676767"}),(function(n){return n.isDark?l.a.BLACK:l.a.WHITE}),l.a.LIGHT_GRAY,l.d.XS),g=function(n){var e=n.label,t=n.tags,a=n.isDark;return r.a.createElement(u,{isDark:a},e&&r.a.createElement("div",{className:"label"},e),r.a.createElement("div",{className:"tag-box"},t.map((function(n){return r.a.createElement("div",{className:"tag"},n)}))))};g.defaultProps={tags:[]};var h=t(88),b=t.n(h),x=t(89),w=t.n(x),v=t(90),E=t.n(v),y=t(91),N=t.n(y);function k(){var n=Object(a.a)(["\n  ",";\n  padding: 5rem 18% 6rem;\n  display: flex;\n  flex-direction: column;\n  letter-spacing: 1.5px;\n  font-size: ",";\n  img{\n    ",";\n  }\n  .wrapper{\n    .subtitle{\n      opacity: 0.5;\n      font-size: ",";\n      margin: 0 0 0.6rem;\n    }\n    .title{\n      opacity: 0.7;\n      letter-spacing: 2px;\n      font-size: ",";\n      margin: 0 0 2rem;\n      line-height: 2rem;\n    }\n    .content{\n      display: flex;\n      flex-direction: column;\n      .text{\n        white-space: pre-line;\n        line-height: 1.5rem;\n        word-wrap:break-word;\n      }\n    }\n  &:not(:first-child){\n    &:before{\n      content: '';\n      display: inline-block;\n      width: 100%;\n      height: 1px;\n      opacity: 0.3;\n      margin: 6rem 0;\n      background: ",";\n      }\n    }\n  }\n\n  .visit-btn{\n    margin: 4rem 0 0;\n    width: 6.5rem;\n    padding: 2rem 0.8rem 0.8rem;\n    background: ",";\n    color: ",";\n    cursor: pointer;\n    position: relative;\n    &--line{\n      border: 1px solid ",";;\n      width: 95%;\n      height: 95%;\n      position: absolute;\n      top: 8px;\n      right: 10px;\n      &:hover{\n        transition: .5s ease all;\n        transform: translateX(-4px);\n      }\n    }\n  }\n\n  .drafts{\n    display: flex;\n    justify-content: space-around;\n    margin: 3rem 0 0;\n    img{\n      width: 40%;\n    }\n  }\n\n  .screenshots{\n    display: flex;\n    justify-content: center;\n    position: relative;\n    margin: 3rem 0 0;\n    img{\n      width: 100%;\n    }\n    &--web{\n    width: 75%;\n    }\n    &--mob{\n      width: 20%;\n      transform: scale(0.65);\n      position: absolute;\n      top: -20rem;\n      right: -1rem;\n    }\n  }\n\n  @media "," {\n    padding: 4rem 12% 6rem;\n    font-size: ",";\n    .wrapper{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      .subtitle{\n        text-align: center;\n      }\n      .title{\n        letter-spacing: 2px;\n        font-size: ",";\n        margin: 0 0 1.5rem;\n        text-align: center;\n      }\n      .content{\n        display: flex;\n        flex-direction: column;\n        .text{\n          white-space: pre-line;\n          line-height: 1.5rem;\n          word-wrap:break-word;\n          text-align: center;\n        }\n      }\n      &:not(:first-child){\n        &:before{\n          margin: 4rem 0;\n          }\n        }\n      }\n    .visit-btn{\n      align-self: center;\n    }\n    .drafts{\n      flex-direction: column;\n      align-items: center;\n      margin: 2rem 0 0;\n      img{\n        width: 70%;\n        &:not(:first-child){\n          margin: 1.5rem 0 0;\n        }\n      }\n    }\n    .screenshots{\n      margin: 2rem 0 0;\n      justify-content: unset;\n      img{\n        width: 100%;\n      }\n      &--web{\n      width: 90%;\n      }\n      &--mob{\n        width: 25%;\n        transform: scale(0.65);\n        position: absolute;\n        top: -7rem;\n        right: -1.5rem;\n      }\n    }\n  }\n"]);return k=function(){return n},n}var D=c.a.div(k(),(function(n){return m.a(n.isDark)}),l.c.WEB.BASE,(function(n){return m.b(n.isDark)}),l.c.MOB.BASE,l.c.WEB.TITLE,(function(n){return n.isDark?l.a.WHITE:l.a.BLACK}),l.a.LIGHT_GRAY,(function(n){return n.isDark?l.a.BLACK:l.a.WHITE}),(function(n){return n.isDark?l.a.WHITE:l.a.BLACK}),l.d.XS,l.c.MOB.BASE,l.c.MOB.TITLE),O=Object(s.a)(Object(o.c)((function(n){return{isDark:n.common.isDark}}),{}))((function(n){var e=n.isDark;return r.a.createElement(D,{isDark:e},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"subtitle"},"| React\u3001Styled-Components\u3001Axios\u3001Sketch\u3001Illustrator |"),r.a.createElement("div",{className:"title"},"Intorduction"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"text"},d),r.a.createElement("div",{className:"visit-btn",onClick:function(){return window.open("https://www.rebas.tw/")}},"Visit Site \u21c0",r.a.createElement("div",{className:"visit-btn--line"})))),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"title"},"Design Concept"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"text"},p))),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"title"},"The wireframes that client provided"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"drafts"},r.a.createElement("img",{src:E.a,alt:!0}),r.a.createElement("img",{src:N.a,alt:!0})))),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"title"},"Full size screenshot"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"screenshots"},r.a.createElement("div",{className:"screenshots--web"},r.a.createElement("img",{src:b.a,alt:""})),r.a.createElement("div",{className:"screenshots--mob"},r.a.createElement("img",{src:w.a,alt:""}))))))}));e.default=O},function(n,e,t){"use strict";t.r(e);var a=t(8),i=t(0),r=t.n(i),c=t(9),o=t(16),s=t(35),m=t(156),l=t(18),d=t(77),p=t(2),f=t(13);function u(){var n=Object(a.a)(["\n  display: flex;\n  align-items: flex-start;\n  text-decoration: none;\n  color: ",";\n  background: ",";\n  margin: 1rem;\n  padding: 1rem 2rem;\n  height: 12rem;\n  box-shadow: 0px 5px 16px -1px ",";\n  border-radius: 5px;\n  letter-spacing: 2px;\n  position: relative;\n\n  &.disabled{\n    box-shadow: 0px 4px 6px -1px ",";\n    opacity: 0.4;\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n\n  &:hover{\n    opacity: 0.8;\n    transform: translateY(5px);\n    box-shadow: 0px 4px 6px -1px ",";\n    transition: .5s ease all;\n  }\n\n  .number{\n    font-family: ",";\n    font-size: 3.5rem;\n    width: 15%;\n\n  }\n\n  .wrapper{\n    display: flex;\n    height: 100%;\n    width: 85%;\n  }\n\n  .title{\n    font-family: ",";\n    font-size: ",";\n    background: ",";\n    margin: 0.6rem 1.8rem 0 0rem;\n    padding: 2.8rem 1rem 0.8rem 2rem;\n    text-align: end;\n    width: 45%;\n    height: 60%;\n    word-break: break-word;\n    line-height: 3rem;\n    white-space: pre-line;\n  }\n\n  .info{\n    display: flex;\n    flex-direction: column;\n    margin: 1.2rem 0rem;\n    width: 55%;\n    &--year{\n      margin: 0 0 0.5rem;\n      font-size: 0.8rem;\n      opacity: 0.4;\n    }\n    &--desc{\n      opacity: 0.75;\n      font-size: 0.8rem;\n      letter-spacing: 1px;\n      line-height: 24px;\n      word-break: break-word;\n      white-space: pre-line;\n    }\n  }\n\n  @media "," {\n    .title{\n      font-size: 1.6rem;\n    }\n  }\n\n  @media "," {\n    .number{\n      width: 12%;\n    }\n    .wrapper{\n      width: 88%;\n    }\n    .title{\n      margin: 0.6rem 3rem 0 0rem;\n      width: 30%;\n      padding: 2.8rem 1.5rem 1rem 2rem;\n    }\n    .info{\n      margin: 1.2rem 0rem;\n      width: 70%;\n      &--desc{\n        line-height: 26px;\n      }\n    }\n  }\n\n  @media "," {\n    height: 15rem;\n    padding: 2rem;\n    align-items:space-around;\n    .number{\n      font-size: 2.8rem;\n      width: 15%;\n    }\n    .wrapper{\n      flex-direction: column;\n      width: 85%;\n    }\n    .title{\n      text-align: initial;\n      margin: 0rem 0rem 1rem;\n      width: auto;\n      height: 30%;\n      font-size: 1.5rem;\n      padding: 1.5rem 1rem 1rem;\n      line-height: 2.5rem;\n    }\n    .info{\n      width: auto;\n      margin: 0rem 0.6rem;\n      &--year{\n        margin: 0.2rem 0;\n      }\n    }\n  }\n"]);return u=function(){return n},n}var g=Object(c.a)(f.b)(u(),(function(n){return n.isDark?p.a.WHITE:p.a.BLACK}),(function(n){return n.isDark?p.a.BLACK:p.a.WHITE}),(function(n){return n.isDark?n.bc:"#c7c7c7"}),(function(n){return n.isDark?n.bc:"#c7c7c7"}),(function(n){return n.isDark?n.bc:"#c7c7c7"}),p.b.PROJECT_NO,p.b.PROJECT_NO,(function(n){return n.titleSize||"1.8rem"}),(function(n){return n.bc}),p.d.M,p.d.S,p.d.XS),h=function(n){var e=n.isDark,t=n.num,a=n.item,i=a.title,c=a.desc,o=a.path,s=a.year,m=a.bc,l=a.titleSize,d=a.disabled;return r.a.createElement(g,{to:o,bc:m,isDark:e,titleSize:l,className:d?"disabled":""},r.a.createElement("div",{className:"number"},t),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"title"},i),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info--year"},s),r.a.createElement("div",{className:"info--desc"},c))))},b=[{title:"Rebas",desc:"Official Site\nResponsive Design",path:"/portfolio/rebas",year:"2020",bc:"#d2adad",titleSize:"2rem"},{title:"Portfolio Website",desc:"Github Page\nPersonal Online Portfolio\nResponsive Design",path:"/portfolio/myWeb",year:"2020",bc:"#95aba9",titleSize:"1.5rem"},{title:"Daily Practice",desc:"UI/UX Practice\nCoding Practice",path:"/portfolio/dailyPractice",year:"2017 - present",bc:"#679fb5"},{title:"Others",desc:"Some things I made in daily. \n\n(Building)\nNot ready yet",path:"/portfolio/others",year:"2017 - present",bc:"#e2d887",titleSize:"2rem",disabled:!0}];function x(){var n=Object(a.a)(["\n  ",";\n  padding: 4rem 8%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .project-box{\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    width: 100%;\n  }\n  .projects{\n    width: 45%\n  }\n\n  @media "," {\n    .projects{\n      width: 50%\n    }\n  }\n\n  @media "," {\n    flex-flow: column nowrap;\n    justify-content: unset;\n    align-items: center;\n    padding: 3rem 5%;\n    .projects{\n      width: 100%\n    }\n  }\n"]);return x=function(){return n},n}var w=c.a.div(x(),(function(n){return d.a(n.isDark)}),p.d.M,p.d.S),v={setHamMenuStatus:l.b},E=Object(s.a)(Object(o.c)((function(n){return{isDark:n.common.isDark}}),v))((function(n){var e=n.isDark,t=n.setHamMenuStatus;return Object(i.useEffect)((function(){m.a("isBack")(n.location.state)&&t(!1)}),[]),r.a.createElement(w,{isDark:e},r.a.createElement("div",{className:"project-box"},b.map((function(n,t){return r.a.createElement("div",{className:"projects"},r.a.createElement(h,{isDark:e,item:n,num:t+1,disabled:n.disabled}))}))))}));e.default=E},function(n,e,t){"use strict";t.r(e);var a=t(8),i=t(0),r=t.n(i),c=t(9),o=t(16),s=t(35),m=t(77),l=t(2),d=t(84),p=t.n(d),f=t(85),u=t.n(f),g=t(86),h=t.n(g),b={ME:p.a,CV_EN:u.a,CV_MANDARIN:h.a,INTRO:"Hi, I'm Jin.\n\nCame from a developer background and have a passion for UI design."};t(87);function x(){var n=Object(a.a)(["\n  ",";\n  padding: 5rem 18% 6rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  letter-spacing: 1px;\n  img{\n    width: 100%\n  }\n  .wrapper{\n    width: 90%;\n    height: 26rem;\n    background: ",";\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n  }\n\n  .left{\n    display: flex;\n    flex-direction: column;\n    width: 45%;\n    margin: 3rem 0 0;\n    align-items: flex-start;\n    &--title{\n      margin: 0 0 2rem -2.5rem ;\n      font-family: ",";\n      letter-spacing: 3px;\n      font-size: 2.5rem;\n      font-weight: 600;\n    }\n    &--content{\n      margin: 0 0 2.5rem 2rem;\n      white-space: pre-line;\n      font-family: ",";\n      line-height: 1.5rem;\n    }\n  }\n\n  .right{\n    width: 45%;\n    align-self: center;\n    margin: 0 1.5rem 0 0;\n  }\n\n  .resume-btn{\n    letter-spacing: 1.5px;\n    margin: 1.2rem 0 0 2rem;\n    font-size: ",";\n    background: ",";\n    color: ",";\n    padding: 0.6rem 0.8rem;\n    cursor: pointer;\n    position: relative;\n    .line{\n      border: 1px solid;\n      border-color: ","; \n      position: absolute;\n      width: 100%;\n      height: 115%;\n      top: -8px;\n      left: -6px;\n      opacity: 0;\n    }\n    &:hover{\n      .line{\n        opacity: 0.8;\n        transition: .6s ease all;\n      }\n    }\n  }\n\n\n  @media "," {\n    padding: 6% 10%;\n\n    .wrapper{\n      width: 100%;\n    }\n  }\n\n  @media (max-width: 769px) {\n    padding: 12% 10%;\n    .wrapper{\n      width: 100%;\n      height: 52rem;\n      flex-direction: column;\n      align-items: center;\n      letter-spacing: 2px;\n    }\n    .left{\n      align-items: center;\n      width: 55%;\n      &--title{\n        margin: -4.8rem 0 4rem 0rem;\n        font-weight: 700;\n      }\n      &--content{\n        text-align: center;\n        margin: 0 0 2rem;\n        line-height: 2rem;\n        width: 100%;\n      }\n    }\n    .right{\n      width: 50%;\n      margin: 5rem 0 0;\n    }\n    .resume-btn{\n      margin: 1.5rem 0 0;\n    }\n  }\n\n  @media "," {\n    padding: 22% 10%;\n    .wrapper{\n      height: 45rem;\n    }\n    .left{\n      align-items: center;\n      width: 88%;\n      &--title{\n        font-size: 2.2rem;\n      }\n      &--content{\n        margin: 0 0 1.5rem;\n        letter-spacing: 1.2px;\n      }\n    }\n    .right{\n      width: 80%;\n      margin: 3rem 0 0;\n    }\n  }\n"]);return x=function(){return n},n}var w=c.a.div(x(),(function(n){return m.a(n.isDark)}),l.a.LIGHT_GRAY,l.b.PROJECT_NAME,l.b.PROJECT_NAME,l.c.MOB.BASE,l.a.GRAY,(function(n){return n.isDark?l.a.BLACK:l.a.WHITE}),(function(n){return n.isDark?l.a.WHITE:l.a.BLACK}),l.d.S,l.d.XS),v=Object(s.a)(Object(o.c)((function(n){return{isDark:n.common.isDark}}),{}))((function(n){var e=n.isDark;function t(n){"en"===n?window.open(b.CV_EN):window.open(b.CV_MANDARIN)}return r.a.createElement(w,{isDark:e},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"left--title"},"ABOUT ME"),r.a.createElement("div",{className:"left--content"},b.INTRO),r.a.createElement("div",{className:"resume-btn",onClick:function(){return t("en")}},"View my resume (English)",r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"resume-btn",onClick:function(){return t("mandarin")}},"View my resume (Mandarin)",r.a.createElement("div",{className:"line"}))),r.a.createElement("div",{className:"right"},r.a.createElement("img",{src:b.ME,alt:""}))))}));e.default=v},function(n,e,t){"use strict";t.r(e);var a=t(8),i=t(0),r=t.n(i),c=t(9),o=t(16),s=t(35),m=t(77),l=t(2),d=t(92),p=t.n(d),f=t(93),u=t.n(f),g=t(94),h=t.n(g),b=t(95),x=t.n(b),w=t(96),v=t.n(w),E=t(97),y=t.n(E),N=t(98),k=t.n(N),D=t(99),O=t.n(D),_=t(100),I=t.n(_),A=t(101),C=t.n(A),S=t(102),T=t.n(S),j=t(103),z=t.n(j),B=t(104),R=t.n(B),L=t(105),M=t.n(L),P=t(106),W=t.n(P),K=t(107),H=t.n(K),X=t(108),G=t.n(X),J=t(109),V=t.n(J),Y="In the beginning, I struggled with the choice of dark or light color which represent fresh and steady vibes as the key vision of the website. Both of them are the impressions I would like to express to everyone from the website.\n\nTherefore, it was finally designed to present by switchable method which is able to let users decide by themselves according to their preferences. It make the website to be more flexible as well.",U="Finally, I decide to use black and white to represent dark and light.\n\nRather than basic black and white, I chose the colors that have a little gray tone in it. Which make the visualization more natural and softer than original.",F="Smooth animations can impove accessibility and efficiency of user experiencement.",q={switchColor:p.a,pantone333333:u.a,pantonef9f9f9:h.a,animation1:x.a,animation2:v.a,animation3:y.a,w_l:k.a,w_m:O.a,w_s:I.a,b_l:C.a,b_m:T.a,b_s:z.a,w2_l:R.a,w2_m:M.a,w2_s:W.a,b2_l:H.a,b2_m:G.a,b2_s:V.a};function Q(){var n=Object(a.a)(["\n  ",";\n  padding: 5rem 18% 6rem;\n  display: flex;\n  flex-direction: column;\n  letter-spacing: 1.5px;\n  font-size: ",";\n  img{\n    width: 100%;\n    ",";\n  }\n  .wrapper{\n    .subtitle{\n      opacity: 0.5;\n      font-size: ",";\n      margin: 0 0 0.6rem;\n    }\n    .title{\n      opacity: 0.7;\n      letter-spacing: 2px;\n      font-size: ",";\n      margin: 0 0 2rem;\n      line-height: 2rem;\n    }\n    .content{\n      display: flex;\n      flex-direction: column;\n      &--text{\n        white-space: pre-line;\n        line-height: 1.8rem;\n        word-break: break-word;\n        width: 100%\n      }\n    }\n    .text-n-img{\n      display: flex;\n      flex-direction: row;\n      width: 100%;\n      &:not(:first-child){\n        margin: 5rem 0 0;\n      }\n      &--text{\n        white-space: pre-line;\n        line-height: 1.8rem;\n        word-break: break-word;\n        width: 60%;\n      }\n    }\n    \n  &:not(:first-child){\n    &:before{\n      content: '';\n      display: inline-block;\n      width: 100%;\n      height: 1px;\n      opacity: 0.3;\n      margin: 6rem 0;\n      background: ",";\n      }\n    }\n  }\n\n  .img{\n    &--switchColor{\n      width: 25%;\n      margin: 0 2rem;\n    }\n  }\n\n  .pantone-box{\n    display: flex;\n    width: 45%;\n    margin: 0 2rem 0 0;\n    &--pantone{\n      margin: 0 0.5rem;\n    }\n  }\n  \n  .animation-box{\n    display: flex;\n    justify-content: space-around;\n    margin: 4rem 0 0;\n    &--animation{\n      &-1{\n        width: 18%;\n      }\n      &-2{\n        width: 30%;\n      }\n      &-3{\n        width: 20%;\n      }\n    }\n  }\n\n  .screenshot-box{\n    display: flex;\n    align-items: center;\n    margin: 4rem 0 2rem;\n    position: relative;\n    &--L{\n      margin: 0 0 0 9%;\n      width: 75%;\n    }\n    &--M{\n      position: absolute;\n      width: 25%;\n      right: -5%;\n      bottom: 0%;\n    }\n    &--S{\n      position: absolute;\n      width: 10%;\n      bottom: 0%;\n      left: 0%;\n      z-index: 2;\n    }\n  }\n\n  @media "," {\n    padding: 2rem 10% 6rem;\n    font-size: ",";\n    .wrapper{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      &:not(:first-child){\n        &:before{\n          margin: 4rem 0;\n          }\n        }\n      .subtitle{\n        text-align: center;\n      }\n      .title{\n        letter-spacing: 2px;\n        font-size: ",";\n        margin: 0 0 1.8rem;\n        text-align: center;\n      }\n      .content{\n        display: flex;\n        flex-direction: column;\n        &--text{\n          text-align: center;\n          width: 100%;\n        }\n      }\n      .text-n-img{\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        align-items: center;\n        &:not(:first-child){\n          margin: 3rem 0 0;\n        }\n        &--text{\n          text-align: center;\n          width: 100%;\n        }\n      }\n    }\n    .img{\n      &--switchColor{\n        width: 55%;\n        margin: 1rem 0 0;\n      }\n    }\n    .pantone-box{\n      width: 80%;\n      margin: 0 0 1rem;\n      &--pantone{\n        margin: 0 0.2rem;\n      }\n    }\n    .animation-box{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: unset;\n      margin: 2rem 0 0;\n      div:not(:first-child){\n        margin: 1rem 0 0;\n      }\n      &--animation{\n        margin: 1.5rem 0;\n        &-1{\n          width: 30%;\n        }\n        &-2{\n          width: 70%;\n        }\n        &-3{\n          width: 50%;\n        }\n      }\n    }\n    .screenshot-box{\n      display: flex;\n      margin: 3rem 0 2rem;\n      position: relative;\n      &--L{\n        margin: 0 0 0 6.5%;\n        width: 85%;\n      }\n      &--M{\n        position: absolute;\n        width: 25%;\n        right: -8%;\n        bottom: 0%;\n      }\n      &--S{\n        position: absolute;\n        width: 10%;\n        bottom: 0%;\n        left: -2%;\n        z-index: 2;\n      }\n    }\n  }\n"]);return Q=function(){return n},n}var Z=c.a.div(Q(),(function(n){return m.a(n.isDark)}),l.c.WEB.BASE,(function(n){return m.b(n.isDark)}),l.c.MOB.BASE,l.c.WEB.TITLE,(function(n){return n.isDark?l.a.WHITE:l.a.BLACK}),l.d.XS,l.c.MOB.BASE,l.c.MOB.TITLE),$=Object(s.a)(Object(o.c)((function(n){return{isDark:n.common.isDark}}),{}))((function(n){var e=n.isDark;return r.a.createElement(Z,{isDark:e},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"subtitle"},"| React\u3001Styled-Components |"),r.a.createElement("div",{className:"title"},"Design Concept"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"text-n-img"},r.a.createElement("div",{className:"text-n-img--text"},Y),r.a.createElement("div",{className:"img--switchColor"},r.a.createElement("img",{src:q.switchColor,alt:""}))),r.a.createElement("div",{className:"text-n-img"},r.a.createElement("div",{className:"pantone-box"},r.a.createElement("div",{className:"pantone-box--pantone"},r.a.createElement("img",{src:q.pantonef9f9f9,alt:""})),r.a.createElement("div",{className:"pantone-box--pantone"},r.a.createElement("img",{src:q.pantone333333,alt:""}))),r.a.createElement("div",{className:"text-n-img--text"},U)))),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"title"},"Interaction"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content--text"},F),r.a.createElement("div",{className:"animation-box"},r.a.createElement("div",{className:"animation-box--animation-1"},r.a.createElement("img",{src:q.animation1,alt:""})),r.a.createElement("div",{className:"animation-box--animation-2"},r.a.createElement("img",{src:q.animation2,alt:""})),r.a.createElement("div",{className:"animation-box--animation-3"},r.a.createElement("img",{src:q.animation3,alt:""}))))),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"title"},"Full size screenshot"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"screenshot-box"},r.a.createElement("div",{className:"screenshot-box--S"},r.a.createElement("img",{src:q.w_s,alt:""})),r.a.createElement("div",{className:"screenshot-box--L"},r.a.createElement("img",{src:q.w_l,alt:""})),r.a.createElement("div",{className:"screenshot-box--M"},r.a.createElement("img",{src:q.w_m,alt:""}))),r.a.createElement("div",{className:"screenshot-box"},r.a.createElement("div",{className:"screenshot-box--L"},r.a.createElement("img",{src:q.b_l,alt:""})),r.a.createElement("div",{className:"screenshot-box--M"},r.a.createElement("img",{src:q.b_m,alt:""})),r.a.createElement("div",{className:"screenshot-box--S"},r.a.createElement("img",{src:q.b_s,alt:""}))),r.a.createElement("div",{className:"screenshot-box"},r.a.createElement("div",{className:"screenshot-box--S"},r.a.createElement("img",{src:q.w2_s,alt:""})),r.a.createElement("div",{className:"screenshot-box--L"},r.a.createElement("img",{src:q.w2_l,alt:""})),r.a.createElement("div",{className:"screenshot-box--M"},r.a.createElement("img",{src:q.w2_m,alt:""}))),r.a.createElement("div",{className:"screenshot-box"},r.a.createElement("div",{className:"screenshot-box--L"},r.a.createElement("img",{src:q.b2_l,alt:""})),r.a.createElement("div",{className:"screenshot-box--M"},r.a.createElement("img",{src:q.b2_m,alt:""})),r.a.createElement("div",{className:"screenshot-box--S"},r.a.createElement("img",{src:q.b2_s,alt:""}))))))}));e.default=$},function(n,e,t){"use strict";t.r(e);var a=t(8),i=t(0),r=t.n(i),c=t(9),o=t(16),s=t(35),m=t(156),l=t(110),d=t.n(l),p=t(128),f=t.n(p),u=t(77),g=t(2),h=t(146),b=t.n(h),x=t(147),w=t.n(x),v=t(148),E=t.n(v),y=t(149),N=t.n(y),k=t(150),D=t.n(k),O=t(151),_=t.n(O),I=t(152),A=t.n(I),C=t(153),S=t.n(C),T=t(154),j=t.n(T),z=t(155),B=[{label:"D3.js Practice",id:"d3Practice",videoName:[t.n(z).a],videoSize:"100%",year:"Coding | 2020",desc:[{title:"WORK",content:"D3\u3001React\u3001Styled-Components"}]},{label:"Music Player",id:"musicPlayer",imgName:[A.a],year:"Design | 2018",desc:[{title:"WORK",content:"Mockup"},{title:"TOOL",content:"Illustrator\u3001Adobe XD"}]},{label:"Error Page",id:"errorPage",imgName:[_.a],year:"Design | 2018",desc:[{title:"WORK",content:"Mockup\u3001Responsive Design"},{title:"TOOL",content:"Adobe XD"}]},{label:"App Icon",id:"appicon",imgName:[D.a],year:"Design | 2018",desc:[{title:"WORK",content:"Design"},{title:"TOOL",content:"Illustrator"}]},{label:"Car App",id:"carApp",videoName:[S.a],videoSize:"50%",year:"Design | 2018",desc:[{title:"WORK",content:"Mockup\u3001Prototype"},{title:"TOOL",content:"Illustrator\u3001Adobe XD"}]},{label:"Cinema App",id:"cinemaApp",videoName:[j.a],videoSize:"50%",year:"Design | 2018",desc:[{title:"WORK",content:"Mockup\u3001Prototype"},{title:"TOOL",content:"Illustrator\u3001Adobe XD"}]},{label:"Credit Card Checkout",id:"creditCardCheckout",imgName:[E.a],year:"Design | 2017",desc:[{title:"WORK",content:"Mockup\u3001Responsive Design"},{title:"TOOL",content:"Illustrator\u3001Adobe XD"}]},{label:"Sign In Page #1",id:"signInPage1",imgName:[w.a],year:"Design | 2017",desc:[{title:"WORK",content:"Mockup\u3001Responsive Design"},{title:"TOOL",content:"Adobe XD"}]},{label:"Sign In Page #2",id:"signInPage2",imgName:[b.a],year:"Design | 2017",desc:[{title:"WORK",content:"Mockup"},{title:"TOOL",content:"Adobe XD"}]},{label:"Calculator",id:"calculator",imgName:[N.a],year:"Design | 2017",desc:[{title:"WORK",content:"Mockup"},{title:"TOOL",content:"Adobe XD"}]}];function R(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  &:not(:first-child){\n    margin: 4rem 0 0;\n  }\n  .title{\n    letter-spacing: 2px;\n    font-size: 1.2rem;\n    margin: 0 0 2rem;\n    background: ",";\n    color: ",";\n    padding: 0.8rem 2rem;\n    width: 100%;\n  }\n  .content{\n    display: flex;\n    width: 100%;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .desc{\n    display: flex;\n    flex-direction: column;\n    margin: 0.6rem 0 0 6%;\n    width: 35%;\n    &--year{\n      width: auto;\n      font-size: 0.8rem;\n      opacity: 0.4;\n    }\n    &--box{\n      padding: 0 0 0 1rem;\n      border-left: 3px solid ",";\n      margin: 1.2rem 0 0rem;\n      &--title{\n        margin: 0.3rem 0;\n        opacity: 0.5;\n        font-weight: 900;\n        font-size: 0.8rem;\n      }\n      &--content{\n        word-wrap:break-word;\n        line-height: 1.5rem;\n      }\n    }\n  }\n  .img-box{\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n    align-items: center;\n    img{\n      width: 100%;\n      &:not(:first-child){\n      margin: 2rem 0 0;\n      }\n    }\n  }\n\n  @media "," {\n    .title{\n      width: 90%;\n    }\n    .content{\n      width: 95%;\n    }\n  }\n  @media "," {\n    &:not(:first-child){\n    margin: 2rem 0 0;\n  }\n    .title{\n      width: 88%;\n      padding: 0.8rem 1.2rem;\n    }\n    .content{\n      flex-direction: column;\n      justify-content: unset;\n      align-items: center;\n    }\n    .img-box{\n      width: 95%;\n    }\n    .desc{\n      width: auto;\n      flex-direction: row;\n      align-self: flex-start;\n      align-items: flex-start;\n      flex-wrap: wrap;\n      margin: 1.5rem 0 0 0.6rem;\n      &--year{\n        width: 100%;\n        margin: 1rem 0 0.6rem;\n      }\n      &--box{\n        padding: 0 0 0 0.6rem;\n        margin: 0.8rem 1.5rem 0.8rem 0;\n      }\n    }\n  }\n"]);return R=function(){return n},n}function L(){var n=Object(a.a)(["\n  ",";\n  display: flex;\n  letter-spacing: 1.5px;\n  font-size: ",";\n  justify-content: space-around;\n  video, img{\n    ",";\n    outline: none;\n  }\n  .menu-box{\n    width: 18%;\n    position: relative;\n    .menu{\n      display: flex;\n      flex-direction: column;\n      color: ",";\n      background: ",";\n      box-shadow: 0px 5px 10px 0px ",";\n      padding: 1rem 0;\n      border-radius: 5px;\n      position: sticky;\n      top: 5%;\n      &--item{\n        opacity: 0.5;\n        line-height: 1.5rem;\n        padding: 0.4rem 1rem 0.4rem 2rem;\n        cursor: pointer;\n        margin: 1rem 0;\n        margin-left: -2.5px;\n        cursor: pointer;\n        &.current{\n          opacity: 1;\n          border-left: 6px solid ",";\n          transition: .4s ease all;\n        }\n        &:hover{\n          opacity: 0.8;\n          transition: .4s ease all;\n        }\n      }\n    }\n  }\n  \n  .right-box{\n    display: flex;\n    flex-direction: column;\n    width: 68%;\n    letter-spacing: 2px;\n  }\n\n  @media "," {\n    .menu-box{\n      width: 22%;\n    }\n    .right-box{\n      width: 100%;\n    }\n  }\n\n  @media "," {\n    .menu-box{\n      display: none;\n    }\n  }\n"]);return L=function(){return n},n}var M=c.a.div(L(),(function(n){return u.a(n.isDark)}),g.c.WEB.BASE,(function(n){return u.b(n.isDark)}),(function(n){return n.isDark?g.a.WHITE:g.a.BLACK}),(function(n){return n.isDark?g.a.BLACK:g.a.WHITE}),(function(n){return n.isDark?"#4ea59f5c":"#c7c7c796"}),g.a.GRAY,g.d.S,g.d.XS),P=c.a.div(R(),g.a.GRAY,(function(n){return n.isDark?g.a.BLACK:g.a.WHITE}),g.a.LIGHT_GRAY,g.d.S,g.d.XS),W=Object(s.a)(Object(o.c)((function(n){return{isDark:n.common.isDark}}),{}))((function(n){var e=n.isDark;return r.a.createElement(M,{isDark:e},r.a.createElement("div",{className:"menu-box"},r.a.createElement(f.a,{items:B.map((function(n){return"anchor--".concat(n.id)})),currentClassName:"current",className:"menu"},B.map((function(n){return r.a.createElement("div",{className:"menu--item",onClick:function(){return function(n){var e=document.querySelector("#anchor--".concat(n));e&&e.scrollIntoView({behavior:"smooth"})}(n.id)}},n.label)})))),r.a.createElement("div",{className:"right-box"},B.map((function(n){return r.a.createElement(P,null,r.a.createElement("div",{className:"title",id:"anchor--".concat(n.id)},n.label),r.a.createElement("div",{className:"content"},m.a("imgName")(n)&&r.a.createElement("div",{className:"img-box"},n.imgName.map((function(n){return r.a.createElement("img",{src:n,alt:""})}))),m.a("videoName")(n)&&r.a.createElement("div",{className:"img-box"},n.videoName.map((function(e){return r.a.createElement(d.a,{url:e,width:n.videoSize,height:"auto",controls:!0})}))),r.a.createElement("div",{className:"desc"},r.a.createElement("div",{className:"desc--year"},n.year),n.desc.map((function(n){return r.a.createElement("div",{className:"desc--box"},r.a.createElement("div",{className:"desc--box--title"},n.title),r.a.createElement("div",{className:"desc--box--content"},n.content))})))))}))))}));e.default=W}])]);
//# sourceMappingURL=About.68f8c91b.chunk.js.map