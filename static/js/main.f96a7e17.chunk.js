(this["webpackJsonpopen-react-template-zshureih"]=this["webpackJsonpopen-react-template-zshureih"]||[]).push([[0],Array(22).concat([function(e,t,a){e.exports=a.p+"static/media/logo.76d12297.svg"},function(e,t,a){var i={"./cta-illustration.svg":37,"./feature-tile-icon-01.svg":38,"./feature-tile-icon-02.svg":39,"./feature-tile-icon-03.svg":40,"./feature-tile-icon-04.svg":41,"./feature-tile-icon-05.svg":42,"./feature-tile-icon-06.svg":43,"./features-split-image-01.png":44,"./features-split-image-02.png":45,"./features-split-image-03.png":46,"./illustration-section-01.svg":47,"./illustration-section-02.svg":48,"./lam_xai.png":49,"./logo.svg":22,"./thesis_poster.png":50,"./video-placeholder.jpg":51,"./viva.png":52,"./xai.png":53};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=23},,,,function(e,t,a){e.exports=a(55)},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/cta-illustration.3ce357e7.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.d9cb99ce.png"},function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.3c569239.png"},function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.87e4d053.png"},function(e,t,a){e.exports=a.p+"static/media/illustration-section-01.ea694903.svg"},function(e,t,a){e.exports=a.p+"static/media/illustration-section-02.63d0555d.svg"},function(e,t,a){e.exports=a.p+"static/media/lam_xai.271bcdcf.png"},function(e,t,a){e.exports=a.p+"static/media/thesis_poster.6a733640.png"},function(e,t,a){e.exports=a.p+"static/media/video-placeholder.a622fc5d.jpg"},function(e,t,a){e.exports=a.p+"static/media/viva.d44bc218.png"},function(e,t,a){e.exports=a.p+"static/media/xai.70ca6e65.png"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(24),o=a.n(r),s=a(11),l=a(7),c=a(2),d=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(s.a,Object.assign({},i,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},m=a(10),u=a(3),v=a.n(u),p=a(18),g=n.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(m.a)(a,2),o=r[0],s=r[1],l=Object(i.useState)([]),c=Object(m.a)(l,2),d=c[0],u=c[1],v=function(){return d.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},g=function(){if(!v())for(var e=function(e){var t=d[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=o-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<d.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof d&&d.length>0&&(v()||(window.addEventListener("scroll",b),window.addEventListener("resize",f)),g())}),[d]);var h=function(){v()&&(window.removeEventListener("scroll",b),window.removeEventListener("resize",f))},b=Object(p.throttle)((function(){h(),g()}),30),f=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){h(),g()}),[o]),n.a.createElement(n.a.Fragment,null,e.children())}));g.propTypes={children:v.a.func.isRequired};var h=g,b=a(14),f=a(1),E=a.n(f),y=a(13),N=(a(6),function(e){var t=e.className,a=e.src,r=e.width,o=e.height,s=e.alt,l=Object(c.a)(e,["className","src","width","height","alt"]),d=Object(i.useState)(!1),u=Object(m.a)(d,2),v=u[0],p=u[1],g=Object(i.useRef)(null);Object(i.useEffect)((function(){h(g.current)}),[]);var h=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return n.a.createElement("img",Object.assign({},l,{ref:g,className:t,src:a,width:r,height:o,alt:s,onLoad:function(){p(!0)}}))});N.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var O=N,w=function(e){var t=e.className,a=e.navPosition,r=e.hideNav,o=(e.hideSignin,e.bottomOuterDivider),s=e.bottomDivider,l=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),d=Object(i.useState)(!1),u=Object(m.a)(d,2),v=u[0],p=u[1],g=Object(i.useRef)(null),h=Object(i.useRef)(null);Object(i.useEffect)((function(){return v&&b(),document.addEventListener("keydown",N),document.addEventListener("click",O),function(){document.removeEventListener("keydown",N),document.removeEventListener("click",O),f()}}));var b=function(){document.body.classList.add("off-nav-is-active"),g.current.style.maxHeight=g.current.scrollHeight+"px",p(!0)},f=function(){document.body.classList.remove("off-nav-is-active"),g.current&&(g.current.style.maxHeight=null),p(!1)},N=function(e){v&&27===e.keyCode&&f()},O=function(e){g.current&&v&&!g.current.contains(e.target)&&e.target!==h.current&&f()},w=E()("site-header",o&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},l,{className:w}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:E()("site-header-inner",s&&"has-bottom-divider")},!r&&n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{ref:g,className:E()("header-nav",v&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},n.a.createElement("ul",{className:E()("list-reset text-xs",a&&"header-nav-".concat(a))},n.a.createElement("li",null,n.a.createElement(y.a,{to:"/#Experience",onClick:f},"Experience")),n.a.createElement("li",null,n.a.createElement(y.a,{to:"/#Research",onClick:f},"Research")),n.a.createElement("li",null,n.a.createElement(y.a,{to:"/#Classes",onClick:f},"Classes")))))))))};w.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var D=w,x=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(c.a)(e,["className","topOuterDivider","topDivider"]),o=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},r,{className:o}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:E()("site-footer-inner",i&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"}),n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement("div",{className:"footer-copyright"},"Template made by ",n.a.createElement("a",{href:"https://cruip.com"},"Cruip"),". All right reserved")))))};x.defaultProps={topOuterDivider:!1,topDivider:!1};var j=x,C=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(D,{navPosition:"right",className:"reveal-from-bottom"}),n.a.createElement("main",{className:"site-content"},t),n.a.createElement(j,null))},k=a(5),S={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},L={types:Object(k.a)({},S.types),defaults:Object(k.a)({},S.defaults)},A={types:Object(k.a)({},S.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(k.a)({},S.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},P={types:Object(k.a)({},S.types,{pushLeft:v.a.bool}),defaults:Object(k.a)({},S.defaults,{pushLeft:!1})},R=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=E()("button-group",t);return n.a.createElement("div",Object.assign({},a,{className:i}))},M=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,o=e.loading,s=e.wide,l=e.wideMobile,d=e.disabled,m=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=E()("button",i&&"button-".concat(i),r&&"button-".concat(r),o&&"is-loading",s&&"button-block",l&&"button-wide-mobile",t),v=a;return n.a.createElement(v,Object.assign({},m,{className:u,disabled:d}))};M.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var T=M,I=function(e){var t=e.className,a=e.children,r=e.handleClose,o=e.show,s=e.closeHidden,l=e.video,d=e.videoTag,m=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[m.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&r(e)},p=function(e){e.stopPropagation()},g=E()("modal",o&&"is-active",l&&"modal-video",t);return n.a.createElement(n.a.Fragment,null,o&&n.a.createElement("div",Object.assign({},m,{className:g,onClick:r}),n.a.createElement("div",{className:"modal-inner",onClick:p},l?n.a.createElement("div",{className:"responsive-video"},"iframe"===d?n.a.createElement("iframe",{title:"video",src:l,frameBorder:"0",allowFullScreen:!0}):n.a.createElement("video",{"v-else":!0,controls:!0,src:l})):n.a.createElement(n.a.Fragment,null,!s&&n.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),n.a.createElement("div",{className:"modal-content"},a)))))};I.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var F=Object(k.a)({},L.defaults),B=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,o=e.topDivider,s=e.bottomDivider,l=e.hasBgColor,d=e.invertColor,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),v=Object(i.useState)(!1),p=Object(m.a)(v,2),g=(p[0],p[1],E()("hero section center-content",a&&"has-top-divider",r&&"has-bottom-divider",l&&"has-bg-color",d&&"invert-color",t)),h=E()("hero-inner section-inner",o&&"has-top-divider",s&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},u,{className:g}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:h},n.a.createElement("div",{className:"hero-content"},n.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Zeyad ",n.a.createElement("span",{className:"text-color-primary"},"Shureih")),n.a.createElement("div",{className:"container-xs"},n.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Master's Student in Computer Science at Oregon State University. Graduating in Spring 2022 with a focus on ",n.a.createElement("span",{className:"text-color-primary"},"Computer Vision"),",",n.a.createElement("span",{className:"text-color-primary"}," Interactive Robotics"),", and ",n.a.createElement("span",{className:"text-color-primary"},"Deep Learning"),".",n.a.createElement("br",null),"Seeking full time employment beginning in June 2022."),n.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},n.a.createElement(R,null,n.a.createElement(T,{tag:"a",color:"primary",wideMobile:!0,href:"https://www.linkedin.com/in/zeyad-shureih-122541122/?lipi=urn%3Ali%3Apage%3Aprofile_view_index_index%3BVDcyu%2FVeSBe6MLPIEukoQw%3D%3D"},"View on LinkedIn"),n.a.createElement(T,{tag:"a",color:"high",wideMobile:!0,href:"https://github.com/zshureih/"},"View on Github"),n.a.createElement(T,{tag:"a",color:"primary",wideMobile:!0,href:"../../assets/documents/zeyadShureihResume.pdf",download:!0},"View Resume"))))))))};B.defaultProps=F;var _=B,H=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,o=Object(c.a)(e,["className","data","children","tag"]),s=E()("section-header",t),l=r;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},o,{className:s}),n.a.createElement("div",{className:"container-xs"},i,a.title&&n.a.createElement(l,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))};H.defaultProps={children:null,tag:"h2"};var V=H,z=function(e){e.className,e.topOuterDivider,e.bottomOuterDivider,e.topDivider,e.bottomDivider,e.hasBgColor,e.invertColor,e.invertMobile,e.invertDesktop,e.alignTop,e.imageFill;var t=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]);return console.log(t),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(O,{src:a(23)("./"+t.content.icon),alt:"",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},t.content.title),n.a.createElement("p",{className:"m-0 text-sm"},t.content.text))))},U=Object(k.a)({},P.defaults),G=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,l=e.invertColor,d=e.pushLeft,m=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("features-tiles section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",l&&"invert-color",t),v=E()("features-tiles-inner section-inner",r&&"has-top-divider",o&&"has-bottom-divider"),p=E()("tiles-wrap center-content",d&&"push-left");return n.a.createElement("section",Object.assign({},m,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:v},n.a.createElement(V,{data:{title:"Relevant Courses",paragraph:"My most relevant classes from my time at Oregon State University"},className:"center-content"}),n.a.createElement("div",{className:p},n.a.createElement(z,{content:{icon:"feature-tile-icon-02.svg",title:"Deep Learning and Natural Language Processing",text:"Solutions to Natural Language Processing problems with LSTM, attention, encoders, and transformers in PyTorch"}}),n.a.createElement(z,{content:{icon:"feature-tile-icon-04.svg",title:"Intelligent Agents and Decision Making",text:"Fundamentals of Reinforcement Learning. Policy and Value Function iteration, Q-learning, Deep Q-Networks, distributed RL methods"}}),n.a.createElement(z,{content:{icon:"feature-tile-icon-01.svg",title:"Machine Learning and Data Mining",text:"Techniques in supervised and unsupervised machine learning. Clustering, Decision Trees, Regression, and Support Vector Machines"}}),n.a.createElement(z,{content:{icon:"feature-tile-icon-04.svg",title:"Intelligent Robotics",text:"Probabilistic robotics, Robotics Operating System (ROS) for Python, and SLAM algorithms"}}),n.a.createElement(z,{content:{icon:"feature-tile-icon-04.svg",title:"Artificial Intelligence",text:"Game-search algorithms, adversarial tree search, bayesian logistic regression"}}),n.a.createElement(z,{content:{icon:"feature-tile-icon-06.svg",title:"Advanced Web Development",text:"Front-end development with React. Webhooks and API integration"}})))))};G.defaultProps=U;var q=G,K=function(e){e.className,e.topOuterDivider,e.bottomOuterDivider,e.topDivider,e.bottomDivider,e.hasBgColor,e.invertColor,e.invertMobile,e.invertDesktop,e.alignTop;var t=e.imageFill,i=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]);console.log(i);var r=i.content.image.map((function(e){return n.a.createElement("div",{key:e},n.a.createElement(O,{src:a(23)("./"+e),alt:"image",width:528,height:396}),n.a.createElement("br",null))}));return n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},i.content.title),n.a.createElement("h3",{className:"mt-0 mb-12"},n.a.createElement("a",{href:i.content.titleLink},i.content.name)),n.a.createElement("p",{className:"m-0 text-xxs text-color-primary"},"Faculty Advisors: ",n.a.createElement("span",{className:"text-color-high"},i.content.faculty)),n.a.createElement("br",null),n.a.createElement("p",{className:"m-0"},i.content.description),n.a.createElement("br",null),n.a.createElement("p",{className:"m-0 text-xxs text-color-high"},n.a.createElement("span",{className:"text-color-primary"},"Keywords: "),i.content.keywords)),n.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",t&&"split-item-image-fill"),"data-reveal-container":".split-item"},r))},W=Object(k.a)({},A.defaults),J=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,l=e.invertColor,d=e.invertMobile,m=e.invertDesktop,u=e.alignTop,v=(e.imageFill,Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"])),p=E()("features-split section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",l&&"invert-color",t),g=E()("features-split-inner section-inner",r&&"has-top-divider",o&&"has-bottom-divider"),h=E()("split-wrap",d&&"invert-mobile",m&&"invert-desktop",u&&"align-top");return n.a.createElement("section",Object.assign({},v,{className:p}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:g},n.a.createElement(V,{data:{title:"Research Projects",paragraph:"In my time at Oregon State University I have been lucky enough to work in quite a few different research groups. Scroll to read about my contributions to various publications, and some passion projects."},className:"center-content"}),n.a.createElement("div",{className:h},n.a.createElement(K,{content:{title:"Honors Thesis - DARPA Machine Common Sense Evaluation Team",titleLink:"https://ir.library.oregonstate.edu/concern/honors_college_theses/xd07h140g",name:"Solving Physical Reasoning Problems in Simulated Environments",description:"Integrated PyBullet, a low-resource physics SDK, with an object detection model, allowing it the ability to form it's own hypothesis about how the world around it will change. The agent was evaluated by the DARPA Machine Common Sense research team and performed best out of 3 competing agents. Further research includes object tracking, physical reconstruction, and interactive tasks.",image:["thesis_poster.png"],faculty:"Dr. Alan Fern, Dr. Fuxin Li",keywords:"Computer Vision, Graphical Reconstruction, Physical Reasoning"}}),n.a.createElement(K,{content:{title:"Oregon State University Senior Capstone",titleLink:"https://events.engineering.oregonstate.edu/expo2021/project/interfaces-video-search-and-browsing",name:"VIVA: Interfaces for Searching and Browsing Video",description:"Trained various image classification and object detection models to support user exploration of video-data. Integrated said models into a Flask server so that through user input, pretrained models could be fine-tuned to cater to specific datasets.",image:["viva.png"],faculty:"Dr. Minsuk Kahng",keywords:"Deep Learning, Computer Vision, HCI, Tensorflow/Keras"}}),n.a.createElement(K,{content:{title:"Undergraduate Research - Intefaces for Explainable AI",name:"Identifying Reasoning Flaws in Planning-Based RL Using Tree Explanations",titleLink:"https://conf.researchr.org/details/chase-2021/chase-2021-papers/5/Doing-COVID-era-Controlled-Studies-with-Humans-Tales-from-the-Trenches",description:"Collaborated with faculty and doctoral candidates to design an interface capable of communicating planning-based reinforcement learning to an average person with explanations in the form of a decision tree. Made design decisions partially influenced by information extracted through automated analysis of agent decision trees. In response to the COVID-19 global pandemic, the existing desktop application written for Electron was migrated to a Google Cloud Services hosted Node.js application. This enabled us to conduct a remote user interface study with participants all over the world, collecting session data for quantitative analysis. Study results have been published in two papers, with another on the way. All research was funded and evaluated by DARPA.",image:["xai.png","lam_xai.png"],faculty:"Dr. Minsuk Kahng, Dr. Alan Fern, Dr. Margaret Burnett",keywords:"UI Design, User Session Logging, Node.js, Google Cloud Services, Electron"}})))))};J.defaultProps=W;var Q=J,Y=function(e){e.className,e.topOuterDivider,e.bottomOuterDivider,e.topDivider,e.bottomDivider,e.hasBgColor,e.invertColor,e.invertMobile,e.invertDesktop,e.alignTop,e.imageFill,e.github;var t=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill","github"]);return console.log(t),n.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-16 mb-0"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},t.content.role),n.a.createElement("br",null),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("span",{className:"testimonial-item-name text-color-low"},t.content.year),n.a.createElement("p",null,t.content.company))),n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},t.content.text)),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-16 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("span",{className:"testimonial-item-name text-color-primary"},"Keywords/Technologies:"),n.a.createElement("p",{className:"text-color-low"},t.content.keywords)))))},Z=Object(k.a)({},P.defaults),$=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,l=e.invertColor,d=e.pushLeft,m=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",l&&"invert-color",t),v=E()("testimonial-inner section-inner",r&&"has-top-divider",o&&"has-bottom-divider"),p=E()("tiles-wrap",d&&"push-left");return n.a.createElement("section",Object.assign({},m,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:v},n.a.createElement(V,{data:{title:"Work Experience",paragraph:"Over the past 3 years, I have been able to gain experience in software engineering and artificial intelligence predominantly through research"},className:"center-content"}),n.a.createElement("div",{className:p},n.a.createElement(Y,{content:{text:"Developed intelligent agents to solve complicated computer vision, physical reasoning, and interactive robotics problems to be presented to     and evaluated by DARPA scientists. Delivered a top scoring physical hypothesis generator that recreates observed objects     in a physics engine to predict object dynamics.",role:"Gratuate Research Assistant: AI Software Engineer",year:"2021 - Present",company:"Oregon State University Machine Common Sense Lab",keywords:"PyBullet, OpenCV, Tensorflow, Linux"},github:!0}),n.a.createElement(Y,{content:{text:"Designed and developed interfaces to communicate Q-learning based decision tree models, trained to play StarCraft2, to user-study participants.     Migrated offline application to Google Cloud Service hosted web-application.     Implemented and tested a user-state logging sytem in Javascript to allow research participants to recover their progress in case of network malfunction.",role:"Explainable AI Research Assistant",year:"2020 - 2021",company:"Oregon State University Explainable AI Lab",keywords:"Google Cloud Services, Node.js, Javascript, jquery"}}),n.a.createElement(Y,{content:{text:"Developed a full-stack web application, designed microservice APIs, and managed both application and database deployment for the Oregon State Construction Contractor's Board. Migrated existing paper methods for certification approval to newly developed web-platform.",role:"Junior Full-Stack Developer",year:"2019 - 2020",company:"Center for Applied Systems and Software",keywords:"Microsoft .Net Core, Microsoft SQL Server, Microsoft IIS, C#, Github, DevOps"}}),n.a.createElement(Y,{content:{text:"Utilized existing computer vision techniques to segment robot generated environment maps to allow for multi-agent responses to natural disasters. Used ROS to navigate and map physical environments with Pioneer robots.",role:"Robotics Research Assistant",year:"2018 - 2019",company:"Collaborative Robotics and Intelligent Systems Institute",keywords:"Python, ROS, OpenCV, Linux"}})))))};$.defaultProps=Z;var X=$,ee=function(e){var t=e.className,a=e.children,i=e.labelHidden,r=e.id,o=Object(c.a)(e,["className","children","labelHidden","id"]),s=E()("form-label",i&&"screen-reader",t);return n.a.createElement("label",Object.assign({},o,{className:s,htmlFor:r}),a)};ee.defaultProps={children:null,labelHidden:!1,id:null};var te=ee,ae=function(e){var t=e.children,a=e.className,i=e.status,r=Object(c.a)(e,["children","className","status"]),o=E()("form-hint",i&&"text-color-".concat(i),a);return n.a.createElement("div",Object.assign({},r,{className:o}),t)};ae.defaultProps={children:null,status:!1};var ie=ae,ne=function(){console.log("hello world")},re=function(e){var t=e.className,a=e.children,i=e.label,r=e.labelHidden,o=e.type,s=e.name,l=e.status,d=(e.disabled,e.value),m=e.formGroup,u=e.hasIcon,v=e.size,p=e.placeholder,g=e.rows,h=e.hint,b=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),f=E()(m&&""!==m&&("desktop"===m?"form-group-desktop":"form-group"),u&&""!==u&&"has-icon-"+u),y=E()("form-input",v&&"form-input-".concat(v),l&&"form-".concat(l),t),N="textarea"===o?"textarea":"input";return n.a.createElement(n.a.Fragment,null,i&&n.a.createElement(te,{labelHidden:r,id:b.id},i),n.a.createElement("div",{className:f},n.a.createElement(N,Object.assign({},b,{type:"textarea"!==o?o:null,className:y,name:s,disabled:!1,value:d,placeholder:p,rows:"textarea"===o?g:null,onSubmit:ne})),a),h&&n.a.createElement(ie,{status:l},h))};re.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var oe=re,se=Object(k.a)({},L.defaults,{split:!1}),le=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,l=e.invertColor,d=e.split,m=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=E()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",l&&"invert-color",t),v=E()("cta-inner section-inner",r&&"has-top-divider",o&&"has-bottom-divider",d&&"cta-split");return n.a.createElement("section",Object.assign({},m,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:v},n.a.createElement("div",{className:"cta-slogan"},n.a.createElement("h3",{className:"m-0"},"Need to contact me? Leave your email here!")),n.a.createElement("div",{className:"cta-action"},n.a.createElement(oe,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},n.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};le.defaultProps=se;var ce=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(_,{className:"illustration-section-01"}),n.a.createElement(X,{id:"Experience",topDivider:!0}),n.a.createElement(Q,{id:"Research",invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),n.a.createElement(q,{id:"Classes",topDivider:!0}))};b.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var de=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){b.a.set({page:e}),b.a.pageview(e)}(a)}),[t]),n.a.createElement(h,{ref:e,children:function(){return n.a.createElement(s.c,null,n.a.createElement(d,{exact:!0,path:"/",component:ce,layout:C}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(54);var me=Object(l.a)();o.a.render(n.a.createElement(s.b,{history:me},n.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[27,1,2]]]);
//# sourceMappingURL=main.f96a7e17.chunk.js.map