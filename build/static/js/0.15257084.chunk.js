(this["webpackJsonpiv-engineering-frontend"]=this["webpackJsonpiv-engineering-frontend"]||[]).push([[0],{171:function(t,e,n){"use strict";var o=n(37);n.d(e,"a",(function(){return o.a}))},172:function(t,e,n){"use strict";n.d(e,"a",(function(){return R}));var o=n(6),c=n(1),r=n(185),i=n.n(r),m=n(20),u=n(4),_=document.querySelector("#modal-root"),a=(document.querySelector("#modal-root-submit"),function(t){var e=t.onToggle,n=t.children;return Object(c.useEffect)((function(){var t=function(t){"Escape"===t.code&&e()};return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}),[e]),Object(m.createPortal)(Object(u.jsx)("div",{className:i.a.modalBackdrop,onClick:function(t){t.currentTarget===t.target&&e()},children:Object(u.jsx)("div",{className:i.a.modalContent,children:n})}),_)}),s=n(11),b=n(27),l=n(186),h=n.n(l),p=n(171);function x(t){var e=t.onToggle,n=Object(s.c)(b.a),o=Object(p.a)(n).submit;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{type:"button",onClick:function(t){t.preventDefault(),e()},className:" ".concat(h.a.submitButton),children:Object(u.jsx)("p",{children:o.text})})})}var f=n(187),j=n.n(f),d=n(188),F=n.n(d);function S(t){var e=t.arg;return Object(u.jsx)("div",{children:Object(u.jsx)("b",{className:F.a.alert,children:e})})}var O=n(189),C=n.n(O),k=n(183),g=n.n(k),v=n(177);function I(t){var e=t.name,n=t.email,o=(t.tel,t.handleChange),c=Object(s.c)(b.a),r=Object(p.a)(c).submitForm,i=g.a.generate(),m=g.a.generate();return Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{className:C.a.formField,children:[Object(u.jsx)("input",{className:C.a.formInput,name:"name",id:i,type:"text",value:e,onChange:o}),Object(u.jsx)("label",{className:C.a.inputLabel,htmlFor:i,children:r.name}),Object(u.jsx)("svg",{className:C.a.inputIcon,children:Object(u.jsx)("use",{href:v.a+"#person"})})]}),Object(u.jsxs)("li",{className:C.a.formField,children:[Object(u.jsx)("input",{className:C.a.formInput,name:"email",id:m,type:"email",value:n,onChange:o}),Object(u.jsx)("label",{className:C.a.inputLabel,htmlFor:m,children:r.email}),Object(u.jsx)("svg",{className:C.a.inputIcon,children:Object(u.jsx)("use",{href:v.a+"#email"})})]})]})})}var M=n(198),w=n.n(M);function N(t){var e=t.comment,n=t.handleChange,o=Object(s.c)(b.a),c=Object(p.a)(o).submitForm,r=g.a.generate();return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:w.a.comments,children:[Object(u.jsx)("textarea",{className:"".concat(w.a.formInput," ").concat(w.a.commentContent),type:"text",id:r,name:"comment",value:e,onChange:n,placeholder:" "}),Object(u.jsx)("label",{className:w.a.inputLabel,htmlFor:r,children:c.comments}),Object(u.jsx)("svg",{className:w.a.inputIcon,children:Object(u.jsx)("use",{href:v.a+"#icon-keyboard"})})]})})}var B=n(199),L=n.n(B);function T(t){var e=t.licence,n=t.email,o=t.statusLicenceChange,c=Object(s.c)(b.a),r=Object(p.a)(c).submitForm;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{className:L.a.checkboxContainer,children:[Object(u.jsx)("input",{className:L.a.check,type:"checkbox",name:"licence",checked:e,onChange:o}),Object(u.jsx)("span",{className:L.a.licence,children:r.licence})]}),Object(u.jsx)("button",{className:L.a.button,type:"submit",disabled:!e||!n,children:r.submit})]})}var y=function(t){var e=t.onSubmit,n=Object(c.useState)(""),r=Object(o.a)(n,2),i=r[0],m=r[1],_=Object(c.useState)(""),a=Object(o.a)(_,2),l=a[0],h=a[1],x=Object(c.useState)(""),f=Object(o.a)(x,2),d=f[0],F=f[1],O=Object(c.useState)(!1),C=Object(o.a)(O,2),k=C[0],g=C[1],v=Object(c.useState)(""),M=Object(o.a)(v,2),w=M[0],B=M[1],L=Object(c.useState)(""),y=Object(o.a)(L,2),G=y[0],V=y[1],D=Object(s.c)(b.a),J=Object(p.a)(D).submitForm,R=function(t){var e=t.currentTarget,n=e.name,o=e.value;switch(n){case"name":return m(o);case"email":return F(o);case"licence":return g(o);case"error":return B(o);case"comment":return V(o);default:console.log("\u0422\u0438\u043f \u043f\u043e\u043b\u044f ".concat(n," \u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f"))}};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("b",{className:j.a.formTitle,children:J.title}),Object(u.jsxs)("form",{className:j.a.main,onSubmit:function(t){t.preventDefault(),e({name:i,email:d,licence:k,comment:G}),m(""),h(""),F(""),g(!1),V("")},children:[Object(u.jsx)(I,{name:i,email:d,tel:l,handleChange:R}),Object(u.jsx)(N,{comment:G,handleChange:R}),Object(u.jsx)(T,{licence:k,email:d,statusLicenceChange:function(t){g(t.currentTarget.checked)}})]}),w&&Object(u.jsx)(S,{arg:w})]})},G=n(200),V=n.n(G),D=n(54),J=a;function R(){var t=D.a.addContact,e=Object(s.b)(),n=Object(c.useState)(!1),r=Object(o.a)(n,2),i=r[0],m=r[1],_=Object(c.useCallback)((function(){m(!i)}),[i]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("section",{className:V.a.submit,children:[Object(u.jsx)(x,{onToggle:_}),i&&Object(u.jsx)(J,{onToggle:_,children:Object(u.jsx)(y,{onSubmit:function(n){e(t(n)),_()}})})]})})}},176:function(t,e,n){"use strict";var o,c,r,i=n(191),m="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){r=!1}function _(t){if(t){if(t!==o){if(t.length!==m.length)throw new Error("Custom alphabet for shortid must be "+m.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+m.length+" unique characters. These characters were not unique: "+e.join(", "));o=t,u()}}else o!==m&&(o=m,u())}function a(){return r||(r=function(){o||_(m);for(var t,e=o.split(""),n=[],c=i.nextValue();e.length>0;)c=i.nextValue(),t=Math.floor(c*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return o||m},characters:function(t){return _(t),o},seed:function(t){i.seed(t),c!==t&&(u(),c=t)},lookup:function(t){return a()[t]},shuffled:a}},177:function(t,e,n){"use strict";e.a=n.p+"static/media/sprite.1747684c.svg"},183:function(t,e,n){"use strict";t.exports=n(190)},185:function(t,e,n){t.exports={section:"Modal_section__3NJ4M",container:"Modal_container__3qbJ0",title:"Modal_title__1_YPZ",subtitle:"Modal_subtitle__2vlTY","app-bar":"Modal_app-bar__34Grq",items:"Modal_items__32HzC",userMenu:"Modal_userMenu__wSFaN",h3:"Modal_h3__1J9DW",button:"Modal_button__2h-4K",modalBackdrop:"Modal_modalBackdrop__3oi56",modalContent:"Modal_modalContent__2RZx5"}},186:function(t,e,n){t.exports={section:"SubmitButton_section__JmwAH",container:"SubmitButton_container__3phXF",title:"SubmitButton_title__9vGjC",subtitle:"SubmitButton_subtitle__mRjc5","app-bar":"SubmitButton_app-bar__l-Hb9",items:"SubmitButton_items__2Stof",userMenu:"SubmitButton_userMenu__3ovGa",h3:"SubmitButton_h3__J-2__",button:"SubmitButton_button__2IpkG",submitButton:"SubmitButton_submitButton__UTfVo"}},187:function(t,e,n){t.exports={section:"FormSubmit_section__1f7uz",container:"FormSubmit_container__2ps5p",title:"FormSubmit_title__3jk4A",subtitle:"FormSubmit_subtitle__pxXcS","app-bar":"FormSubmit_app-bar__3mFvm",items:"FormSubmit_items__1hxrj",userMenu:"FormSubmit_userMenu__3M_Tq",h3:"FormSubmit_h3__1MXQC",button:"FormSubmit_button__rUMNy",formInput:"FormSubmit_formInput__K_LbD",inputIcon:"FormSubmit_inputIcon__1yEMV",inputLabel:"FormSubmit_inputLabel__3dKiD",checkboxButtons:"FormSubmit_checkboxButtons__10OR8",checkboxItem:"FormSubmit_checkboxItem__2cCWI",checkboxContainer:"FormSubmit_checkboxContainer__tLWv1",checkbox:"FormSubmit_checkbox__2o87H",checkboxLabel:"FormSubmit_checkboxLabel__2hoIm",checkboxContent:"FormSubmit_checkboxContent__ceGhT",licence:"FormSubmit_licence__1hsws",commentContent:"FormSubmit_commentContent__3ioDT",formField:"FormSubmit_formField__2b8_A",formTitle:"FormSubmit_formTitle__3EJek",comments:"FormSubmit_comments__Y6ihj"}},188:function(t,e,n){t.exports={alert:"Alert_alert__tqihO"}},189:function(t,e,n){t.exports={section:"InputForm_section__LrlGK",container:"InputForm_container__3pJxy",title:"InputForm_title__1S30N",subtitle:"InputForm_subtitle__3x8Za","app-bar":"InputForm_app-bar__VgIrk",items:"InputForm_items__3glIC",userMenu:"InputForm_userMenu__jUJb3",h3:"InputForm_h3__mttdW",button:"InputForm_button__2-LVQ",formInput:"InputForm_formInput__2zjCc",inputIcon:"InputForm_inputIcon__2EJAi",inputLabel:"InputForm_inputLabel__1bBoS",checkboxButtons:"InputForm_checkboxButtons__2XsOn",checkboxItem:"InputForm_checkboxItem__1T24J",checkboxContainer:"InputForm_checkboxContainer__3YSbx",checkbox:"InputForm_checkbox__2XTkW",checkboxLabel:"InputForm_checkboxLabel__F9xfD",checkboxContent:"InputForm_checkboxContent__Ppqgx",licence:"InputForm_licence__yvTWF",commentContent:"InputForm_commentContent__wgZAi",formField:"InputForm_formField__3D0GB",formTitle:"InputForm_formTitle__1hg6h",comments:"InputForm_comments__3MQDl"}},190:function(t,e,n){"use strict";var o=n(176),c=n(192),r=n(196),i=n(197)||0;function m(){return c(i)}t.exports=m,t.exports.generate=m,t.exports.seed=function(e){return o.seed(e),t.exports},t.exports.worker=function(e){return i=e,t.exports},t.exports.characters=function(t){return void 0!==t&&o.characters(t),o.shuffled()},t.exports.isValid=r},191:function(t,e,n){"use strict";var o=1;t.exports={nextValue:function(){return(o=(9301*o+49297)%233280)/233280},seed:function(t){o=t}}},192:function(t,e,n){"use strict";var o,c,r=n(193);n(176);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===c?o++:(o=0,c=n),e+=r(7),e+=r(t),o>0&&(e+=r(o)),e+=r(n)}},193:function(t,e,n){"use strict";var o=n(176),c=n(194),r=n(195);t.exports=function(t){for(var e,n=0,i="";!e;)i+=r(c,o.get(),1),e=t<Math.pow(16,n+1),n++;return i}},194:function(t,e,n){"use strict";var o,c="object"===typeof window&&(window.crypto||window.msCrypto);o=c&&c.getRandomValues?function(t){return c.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=o},195:function(t,e){t.exports=function(t,e,n){for(var o=(2<<Math.log(e.length-1)/Math.LN2)-1,c=-~(1.6*o*n/e.length),r="";;)for(var i=t(c),m=c;m--;)if((r+=e[i[m]&o]||"").length===+n)return r}},196:function(t,e,n){"use strict";var o=n(176);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+o.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},197:function(t,e,n){"use strict";t.exports=0},198:function(t,e,n){t.exports={section:"CommentsForm_section__2Ul2-",container:"CommentsForm_container__QeKsZ",title:"CommentsForm_title__2MWeW",subtitle:"CommentsForm_subtitle__3ZVlZ","app-bar":"CommentsForm_app-bar__2zuHb",items:"CommentsForm_items__3ThuG",userMenu:"CommentsForm_userMenu__1A-6D",h3:"CommentsForm_h3__3XaYu",button:"CommentsForm_button__2_-bc",checkboxButtons:"CommentsForm_checkboxButtons__2jU1V",checkboxItem:"CommentsForm_checkboxItem__1Zntn",checkboxContainer:"CommentsForm_checkboxContainer__29Ph7",checkbox:"CommentsForm_checkbox__1ws8y",checkboxLabel:"CommentsForm_checkboxLabel__1OS1o",checkboxContent:"CommentsForm_checkboxContent__1R-O2",licence:"CommentsForm_licence__2TrgP",formInput:"CommentsForm_formInput__3vs3A",inputIcon:"CommentsForm_inputIcon__28hjP",inputLabel:"CommentsForm_inputLabel__3Dk2G",commentContent:"CommentsForm_commentContent__3XFxm",formField:"CommentsForm_formField__ault6",formTitle:"CommentsForm_formTitle__aWtSm",comments:"CommentsForm_comments__2hVwP"}},199:function(t,e,n){t.exports={section:"SubmitForm_section__1mYDG",container:"SubmitForm_container__i1t_g",title:"SubmitForm_title__2IKRG",subtitle:"SubmitForm_subtitle__3gGek","app-bar":"SubmitForm_app-bar__21V1K",items:"SubmitForm_items__2ZiNa",userMenu:"SubmitForm_userMenu__BrOxG",h3:"SubmitForm_h3__gd1o4",button:"SubmitForm_button__1qMaV",checkboxButtons:"SubmitForm_checkboxButtons__1xcV0",checkboxItem:"SubmitForm_checkboxItem__3RI6L",checkboxContainer:"SubmitForm_checkboxContainer__22WYn",checkbox:"SubmitForm_checkbox__2K6PE",checkboxLabel:"SubmitForm_checkboxLabel__1gY8w",checkboxContent:"SubmitForm_checkboxContent__jN0Jd",licence:"SubmitForm_licence__TZyG0",formInput:"SubmitForm_formInput__1rIF-",inputIcon:"SubmitForm_inputIcon__31wsw",inputLabel:"SubmitForm_inputLabel__2BOeK",commentContent:"SubmitForm_commentContent__3d1v2",formField:"SubmitForm_formField__yHGTs",formTitle:"SubmitForm_formTitle__vNQiI",comments:"SubmitForm_comments__1ZSkC"}},200:function(t,e,n){t.exports={section:"Submit_section__3Gdci",container:"Submit_container__3cd87",title:"Submit_title__2hozO",subtitle:"Submit_subtitle__3jRhA","app-bar":"Submit_app-bar__3FtAv",items:"Submit_items__BvF3t",userMenu:"Submit_userMenu__3XZrr",h3:"Submit_h3__3o7Hm",button:"Submit_button__1RORn",submit:"Submit_submit__3ehF8"}}}]);
//# sourceMappingURL=0.15257084.chunk.js.map