(this["webpackJsonpopen-react-template-zshureih"]=this["webpackJsonpopen-react-template-zshureih"]||[]).push([[0],Array(22).concat([function(e,t,a){e.exports=a.p+"static/media/logo.76d12297.svg"},function(e,t,a){var i={"./cta-illustration.svg":37,"./feature-tile-icon-01.svg":38,"./feature-tile-icon-02.svg":39,"./feature-tile-icon-03.svg":40,"./feature-tile-icon-04.svg":41,"./feature-tile-icon-05.svg":42,"./feature-tile-icon-06.svg":43,"./features-split-image-01.png":44,"./features-split-image-02.png":45,"./features-split-image-03.png":46,"./illustration-section-01.svg":47,"./illustration-section-02.svg":48,"./logo.svg":22,"./video-placeholder.jpg":49,"./viva.png":50};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=23},,,,function(e,t,a){e.exports=a(52)},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/cta-illustration.3ce357e7.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.d9cb99ce.png"},function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.3c569239.png"},function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.87e4d053.png"},function(e,t,a){e.exports=a.p+"static/media/illustration-section-01.ea694903.svg"},function(e,t,a){e.exports=a.p+"static/media/illustration-section-02.63d0555d.svg"},function(e,t,a){e.exports=a.p+"static/media/video-placeholder.a622fc5d.jpg"},function(e,t,a){e.exports=a.p+"static/media/viva.d44bc218.png"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(24),o=a.n(r),s=a(11),l=a(7),c=a(2),m=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(s.a,Object.assign({},i,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},d=a(10),v=a(3),u=a.n(v),p=a(18),b=n.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(d.a)(a,2),o=r[0],s=r[1],l=Object(i.useState)([]),c=Object(d.a)(l,2),m=c[0],v=c[1],u=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!u())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=o-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){v(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(u()||(window.addEventListener("scroll",f),window.addEventListener("resize",h)),b())}),[m]);var g=function(){u()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",h))},f=Object(p.throttle)((function(){g(),b()}),30),h=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){g(),b()}),[o]),n.a.createElement(n.a.Fragment,null,e.children())}));b.propTypes={children:u.a.func.isRequired};var g=b,f=a(14),h=a(1),E=a.n(h),N=a(13),O=(a(6),function(e){var t=e.className,a=e.src,r=e.width,o=e.height,s=e.alt,l=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),v=Object(d.a)(m,2),u=v[0],p=v[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){g(b.current)}),[]);var g=function(e){var t,a,i=document.createElement("img");u||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return n.a.createElement("img",Object.assign({},l,{ref:b,className:t,src:a,width:r,height:o,alt:s,onLoad:function(){p(!0)}}))});O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var D=O,y=function(e){var t=e.className,a=e.navPosition,r=e.hideNav,o=(e.hideSignin,e.bottomOuterDivider),s=e.bottomDivider,l=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),m=Object(i.useState)(!1),v=Object(d.a)(m,2),u=v[0],p=v[1],b=Object(i.useRef)(null),g=Object(i.useRef)(null);Object(i.useEffect)((function(){return u&&f(),document.addEventListener("keydown",O),document.addEventListener("click",D),function(){document.removeEventListener("keydown",O),document.removeEventListener("click",D),h()}}));var f=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",p(!0)},h=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),p(!1)},O=function(e){u&&27===e.keyCode&&h()},D=function(e){b.current&&u&&!b.current.contains(e.target)&&e.target!==g.current&&h()},y=E()("site-header",o&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},l,{className:y}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:E()("site-header-inner",s&&"has-bottom-divider")},!r&&n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{ref:b,className:E()("header-nav",u&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},n.a.createElement("ul",{className:E()("list-reset text-xs",a&&"header-nav-".concat(a))},n.a.createElement("li",null,n.a.createElement(N.a,{to:"/#Experience",onClick:h},"Experience")),n.a.createElement("li",null,n.a.createElement(N.a,{to:"/#Research",onClick:h},"Research")),n.a.createElement("li",null,n.a.createElement(N.a,{to:"/#Classes",onClick:h},"Classes")))))))))};y.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var w=y,j=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(c.a)(e,["className","topOuterDivider","topDivider"]),o=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},r,{className:o}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:E()("site-footer-inner",i&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"}),n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement("div",{className:"footer-copyright"},"Template made by ",n.a.createElement("a",{href:"https://cruip.com"},"Cruip"),". All right reserved")))))};j.defaultProps={topOuterDivider:!1,topDivider:!1};var x=j,C=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(w,{navPosition:"right",className:"reveal-from-bottom"}),n.a.createElement("main",{className:"site-content"},t),n.a.createElement(x,null))},S=a(5),k={types:{topOuterDivider:u.a.bool,bottomOuterDivider:u.a.bool,topDivider:u.a.bool,bottomDivider:u.a.bool,hasBgColor:u.a.bool,invertColor:u.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},L={types:Object(S.a)({},k.types),defaults:Object(S.a)({},k.defaults)},A={types:Object(S.a)({},k.types,{invertMobile:u.a.bool,invertDesktop:u.a.bool,alignTop:u.a.bool,imageFill:u.a.bool}),defaults:Object(S.a)({},k.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},M={types:Object(S.a)({},k.types,{pushLeft:u.a.bool}),defaults:Object(S.a)({},k.defaults,{pushLeft:!1})},P=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=E()("button-group",t);return n.a.createElement("div",Object.assign({},a,{className:i}))},R=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,o=e.loading,s=e.wide,l=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),v=E()("button",i&&"button-".concat(i),r&&"button-".concat(r),o&&"is-loading",s&&"button-block",l&&"button-wide-mobile",t),u=a;return n.a.createElement(u,Object.assign({},d,{className:v,disabled:m}))};R.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var F=R,T=function(e){var t=e.className,a=e.children,r=e.handleClose,o=e.show,s=e.closeHidden,l=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",u),document.addEventListener("click",p),function(){document.removeEventListener("keydown",u),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){v()}),[d.show]);var v=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},u=function(e){27===e.keyCode&&r(e)},p=function(e){e.stopPropagation()},b=E()("modal",o&&"is-active",l&&"modal-video",t);return n.a.createElement(n.a.Fragment,null,o&&n.a.createElement("div",Object.assign({},d,{className:b,onClick:r}),n.a.createElement("div",{className:"modal-inner",onClick:p},l?n.a.createElement("div",{className:"responsive-video"},"iframe"===m?n.a.createElement("iframe",{title:"video",src:l,frameBorder:"0",allowFullScreen:!0}):n.a.createElement("video",{"v-else":!0,controls:!0,src:l})):n.a.createElement(n.a.Fragment,null,!s&&n.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),n.a.createElement("div",{className:"modal-content"},a)))))};T.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var B=Object(S.a)({},L.defaults),I=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,o=e.topDivider,s=e.bottomDivider,l=e.hasBgColor,m=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),u=Object(i.useState)(!1),p=Object(d.a)(u,2),b=(p[0],p[1],E()("hero section center-content",a&&"has-top-divider",r&&"has-bottom-divider",l&&"has-bg-color",m&&"invert-color",t)),g=E()("hero-inner section-inner",o&&"has-top-divider",s&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},v,{className:b}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:g},n.a.createElement("div",{className:"hero-content"},n.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Zeyad ",n.a.createElement("span",{className:"text-color-primary"},"Shureih")),n.a.createElement("div",{className:"container-xs"},n.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Master's of Computer Science Student at Oregon State University. Graduating in Spring 2022 with a focus on ",n.a.createElement("span",{className:"text-color-primary"},"Computer Vision"),",",n.a.createElement("span",{className:"text-color-primary"}," Interactive Robotics"),", and ",n.a.createElement("span",{className:"text-color-primary"},"Deep Learning"),".",n.a.createElement("br",null),"Seeking full time employment beginning in June 2022."),n.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},n.a.createElement(P,null,n.a.createElement(F,{tag:"a",color:"primary",wideMobile:!0,href:"https://github.com/zshureih/"},"View on Github"))))))))};I.defaultProps=B;var H=I,z=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,o=Object(c.a)(e,["className","data","children","tag"]),s=E()("section-header",t),l=r;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},o,{className:s}),n.a.createElement("div",{className:"container-xs"},i,a.title&&n.a.createElement(l,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))};z.defaultProps={children:null,tag:"h2"};var _=z,U=function(e){e.className,e.topOuterDivider,e.bottomOuterDivider,e.topDivider,e.bottomDivider,e.hasBgColor,e.invertColor,e.invertMobile,e.invertDesktop,e.alignTop,e.imageFill;var t=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]);return console.log(t),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(D,{src:a(23)("./"+t.content.icon),alt:"",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},t.content.title),n.a.createElement("p",{className:"m-0 text-sm"},t.content.text))))},G=Object(S.a)({},M.defaults),V=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,l=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=E()("features-tiles section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",l&&"invert-color",t),u=E()("features-tiles-inner section-inner",r&&"has-top-divider",o&&"has-bottom-divider"),p=E()("tiles-wrap center-content",m&&"push-left");return n.a.createElement("section",Object.assign({},d,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:u},n.a.createElement(_,{data:{title:"Relevant Courses",paragraph:"My most relevant classes from my time at Oregon State University"},className:"center-content"}),n.a.createElement("div",{className:p},n.a.createElement(U,{content:{icon:"feature-tile-icon-02.svg",title:"Deep Learning and Natural Language Processing",text:"Solutions to Natural Language Processing problems with LSTM, attention, encoders, and transformers"}}),n.a.createElement(U,{content:{icon:"feature-tile-icon-04.svg",title:"Intelligent Agents and Decision Making",text:"Fundamentals of Reinforcement Learning. Policy and Value Function iteration, Q-learning, Deep Q-Networks, distributed RL methods"}}),n.a.createElement(U,{content:{icon:"feature-tile-icon-01.svg",title:"Machine Learning and Data Mining",text:"Techniques in supervised and unsupervised machine learning. Clustering, Decision Trees, Regression, and Support Vector Machines"}}),n.a.createElement(U,{content:{icon:"feature-tile-icon-03.svg",title:"Intelligent Robotics",text:"Probabilistic robotics, Robotics Operating System (ROS), and SLAM algorithms"}}),n.a.createElement(U,{content:{icon:"feature-tile-icon-05.svg",title:"Artificial Intelligence",text:"Game-search algorithms, adversarial tree search, bayesian logistic regression"}})))))};V.defaultProps=G;var q=V,W=function(e){e.className,e.topOuterDivider,e.bottomOuterDivider,e.topDivider,e.bottomDivider,e.hasBgColor,e.invertColor,e.invertMobile,e.invertDesktop,e.alignTop;var t=e.imageFill,i=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]);return console.log(i),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},i.content.title),n.a.createElement("h3",{className:"mt-0 mb-12"},i.content.name),n.a.createElement("p",{className:"m-0"},i.content.description)),n.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",t&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(D,{src:a(23)("./"+i.content.image),alt:"",width:528,height:396})))},J=Object(S.a)({},A.defaults),Q=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,l=e.invertColor,m=e.invertMobile,d=e.invertDesktop,v=e.alignTop,u=(e.imageFill,Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"])),p=E()("features-split section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",l&&"invert-color",t),b=E()("features-split-inner section-inner",r&&"has-top-divider",o&&"has-bottom-divider"),g=E()("split-wrap",m&&"invert-mobile",d&&"invert-desktop",v&&"align-top");return n.a.createElement("section",Object.assign({},u,{className:p}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:b},n.a.createElement(_,{data:{title:"Research Projects",paragraph:"In my time at Oregon State University I have been lucky enough to work in quite a few different research groups. Scroll to read about my contributions to various publications."},className:"center-content"}),n.a.createElement("div",{className:g},n.a.createElement(W,{content:{title:"VIVA: Intefaces for Video Searching and Browsing",titleLink:"",name:"Undergraduate Deep Learning Research Assistant",description:"Trained various image classification and object detection models to support user exploration of video-data. Integrated said models into a Flask server so that through user input, pretrained models could be fine-tuned to cater to specific datasets",image:"viva.png"}})))))};Q.defaultProps=J;var K=Q,Y=function(e){e.className,e.topOuterDivider,e.bottomOuterDivider,e.topDivider,e.bottomDivider,e.hasBgColor,e.invertColor,e.invertMobile,e.invertDesktop,e.alignTop,e.imageFill;var t=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]);return console.log(t),n.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},t.content.role),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},t.content.year),n.a.createElement("p",null,t.content.company))),n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},t.content.text))))},Z=Object(S.a)({},M.defaults),$=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,l=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=E()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",l&&"invert-color",t),u=E()("testimonial-inner section-inner",r&&"has-top-divider",o&&"has-bottom-divider"),p=E()("tiles-wrap",m&&"push-left");return n.a.createElement("section",Object.assign({},d,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:u},n.a.createElement(_,{data:{title:"Work Experience",paragraph:"Over the past 3 years, I have been able to gain experience developing client and user facing code with various organizations."},className:"center-content"}),n.a.createElement("div",{className:p},n.a.createElement(Y,{content:{text:"Developed intelligent agents to solve complicated computer vision, physical reasoning, and interactive robotics problems to be presented to and evaluated by DARPA scientists. Delivered a top scoring physical hypothesis generator that recreates observed objects in a physics engine to predict object dynamics.",role:"GRA: AI Engineer",year:"2021 - Present",company:"Oregon State University Machine Common Sense Lab"}}),n.a.createElement(Y,{content:{text:"Designed and developed interfaces to communicate Q-learning based decision tree models, trained to play StarCraft2, to user-study participants.     Migrated offline application to Google Cloud Service hosted web-application.     Implemented and tested a user-state logging sytem in Javascript to allow research participants to recover their progress in case of network malfunction.",role:"Explainable AI Research Assistant",year:"2020 - 2021",company:"Oregon State University Explainable AI Lab"}}),n.a.createElement(Y,{content:{text:"Developed a full-stack web application and database management systems for the Oregon State Construction Contractor's Board. Migrated existing paper methods for certification approval newly developed web-platform. Developed and hosted applications with C#, Microsoft SQL Server, and Microsoft IIS",role:"Junior Full-Stack Developer",year:"2019 - 2020",company:"Center for Applied Systems and Software"}}),n.a.createElement(Y,{content:{text:"Utilized existing computer vision techniques to segment robot generated environment maps to allow for multi-agent responses to natural disasters. Developed SLAM algorithms to simultaneously generate and segment real-world maps.",role:"Robotics Research Assistant",year:"2019 - 2019",company:"Collaborative Robotics and Intelligent Systems Institute"}})))))};$.defaultProps=Z;var X=$,ee=function(e){var t=e.className,a=e.children,i=e.labelHidden,r=e.id,o=Object(c.a)(e,["className","children","labelHidden","id"]),s=E()("form-label",i&&"screen-reader",t);return n.a.createElement("label",Object.assign({},o,{className:s,htmlFor:r}),a)};ee.defaultProps={children:null,labelHidden:!1,id:null};var te=ee,ae=function(e){var t=e.children,a=e.className,i=e.status,r=Object(c.a)(e,["children","className","status"]),o=E()("form-hint",i&&"text-color-".concat(i),a);return n.a.createElement("div",Object.assign({},r,{className:o}),t)};ae.defaultProps={children:null,status:!1};var ie=ae,ne=function(){console.log("hello world")},re=function(e){var t=e.className,a=e.children,i=e.label,r=e.labelHidden,o=e.type,s=e.name,l=e.status,m=(e.disabled,e.value),d=e.formGroup,v=e.hasIcon,u=e.size,p=e.placeholder,b=e.rows,g=e.hint,f=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),h=E()(d&&""!==d&&("desktop"===d?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),N=E()("form-input",u&&"form-input-".concat(u),l&&"form-".concat(l),t),O="textarea"===o?"textarea":"input";return n.a.createElement(n.a.Fragment,null,i&&n.a.createElement(te,{labelHidden:r,id:f.id},i),n.a.createElement("div",{className:h},n.a.createElement(O,Object.assign({},f,{type:"textarea"!==o?o:null,className:N,name:s,disabled:!1,value:m,placeholder:p,rows:"textarea"===o?b:null,onSubmit:ne})),a),g&&n.a.createElement(ie,{status:l},g))};re.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var oe=re,se=Object(S.a)({},L.defaults,{split:!1}),le=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,l=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),v=E()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",l&&"invert-color",t),u=E()("cta-inner section-inner",r&&"has-top-divider",o&&"has-bottom-divider",m&&"cta-split");return n.a.createElement("section",Object.assign({},d,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:u},n.a.createElement("div",{className:"cta-slogan"},n.a.createElement("h3",{className:"m-0"},"Need to contact me? Leave your email here!")),n.a.createElement("div",{className:"cta-action"},n.a.createElement(oe,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},n.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};le.defaultProps=se;var ce=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(H,{className:"illustration-section-01"}),n.a.createElement(X,{id:"Experience",topDivider:!0}),n.a.createElement(K,{id:"Research",invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),n.a.createElement(q,{id:"Classes",topDivider:!0}))};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var me=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),n.a.createElement(g,{ref:e,children:function(){return n.a.createElement(s.c,null,n.a.createElement(m,{exact:!0,path:"/",component:ce,layout:C}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(51);var de=Object(l.a)();o.a.render(n.a.createElement(s.b,{history:de},n.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[27,1,2]]]);
//# sourceMappingURL=main.c1338df2.chunk.js.map