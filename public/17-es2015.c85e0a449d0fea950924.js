(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{L6id:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class s{}var i=u("pMnS"),r=u("oBZk"),t=u("s7LF"),o=u("ZZ/e"),a=u("SVse"),b=u("xOQr");class c{constructor(l){this.todoService=l,this.slideOpts={initialSlide:1,speed:400,slidesPerView:2,grabCursor:!0,breakpoints:{640:{slidesPerView:1,spaceBetween:20},520:{slidesPerView:1,spaceBetween:20}}}}ngOnInit(){this.todoService.getTodos().subscribe(l=>{console.log("Todoss",l),this.todos=l})}scrollTo(l){document.querySelector("#"+l).scrollIntoView({behavior:"smooth"})}onWindowScroll(){let l=document.getElementsByClassName("sticky");0!=l.length&&(l[0].style.background="#000",l[0].style.height="100px")}}var d=e.pb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:#000}.modalDialog[_ngcontent-%COMP%]{position:fixed;font-family:Arial,Helvetica,sans-serif;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.92);z-index:99999;opacity:0;-webkit-transition:opacity .4s ease-in;transition:opacity .4s ease-in;pointer-events:none}.modalDialog[_ngcontent-%COMP%]:target{opacity:1;pointer-events:auto}.modalDialog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:80%;position:relative;margin:10% auto;padding:5px 20px 13px;border-radius:10px;background:#fff0;background:-o-linear-gradient(#fff,#999);-webkit-transition:opacity .4s ease-in;transition:opacity .4s ease-in}.close[_ngcontent-%COMP%]{background:#606061;color:#fff;line-height:25px;position:absolute;right:-12px;text-align:center;top:-10px;width:24px;text-decoration:none;font-weight:700;border-radius:12px;box-shadow:1px 1px 3px #000}.close[_ngcontent-%COMP%]:hover{background:#00d9ff}"]],data:{}});function g(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,26,"div",[],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,25,"div",[["class","modalDialog"]],[[8,"id",0]],null,null,null,null)),(l()(),e.rb(2,0,null,null,24,"div",[],null,null,null,null,null)),(l()(),e.rb(3,0,null,null,1,"a",[["class","close"],["href","/home#close"],["title","Close"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["X"])),(l()(),e.rb(5,0,null,null,1,"h2",[["class","text-center fucsia-text"]],null,null,null,null,null)),(l()(),e.Kb(6,null,["",""])),(l()(),e.rb(7,0,null,null,19,"div",[["style","max-width:769px;margin:0 auto;"]],null,null,null,null,null)),(l()(),e.rb(8,0,null,null,4,"h5",[["class","text-justify white-text"]],null,null,null,null,null)),(l()(),e.rb(9,0,null,null,3,"ion-textarea",[["class","textatea-modal"],["disabled",""]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var s=!0;return"ionBlur"===n&&(s=!1!==e.Db(l,12)._handleBlurEvent(u.target)&&s),"ionChange"===n&&(s=!1!==e.Db(l,12)._handleInputEvent(u.target)&&s),s}),r.jb,r.D)),e.Hb(5120,null,t.f,(function(l){return[l]}),[o.Mb]),e.qb(11,49152,null,0,o.xb,[e.h,e.k,e.x],{disabled:[0,"disabled"],value:[1,"value"]},null),e.qb(12,16384,null,0,o.Mb,[e.k],null,null),(l()(),e.rb(13,0,null,null,13,"h4",[["class","white-text"]],null,null,null,null,null)),(l()(),e.rb(14,0,null,null,1,"b",[["class","fucsia-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Fecha:"])),(l()(),e.Kb(16,null,[" "," "])),e.Gb(17,2),(l()(),e.rb(18,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(19,0,null,null,1,"b",[["class","fucsia-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Hora:"])),(l()(),e.Kb(21,null,[" "," "])),e.Gb(22,2),(l()(),e.rb(23,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(24,0,null,null,1,"b",[["class","fucsia-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Direcci\xf3n:"])),(l()(),e.Kb(26,null,[" "," "]))],(function(l,n){l(n,11,0,"",e.vb(1,"",n.context.$implicit.description,""))}),(function(l,n){l(n,1,0,e.vb(1,"openModal",n.context.$implicit.id,"")),l(n,6,0,n.context.$implicit.task);var u=e.Lb(n,16,0,l(n,17,0,e.Db(n.parent,0),n.context.$implicit.date,"dd MMMM"));l(n,16,0,u);var s=e.Lb(n,21,0,l(n,22,0,e.Db(n.parent,0),n.context.$implicit.hour,"h:mm a"));l(n,21,0,s),l(n,26,0,n.context.$implicit.direction)}))}function h(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,27,"ion-slide",[],null,null,null,r.gb,r.A)),e.qb(1,49152,null,0,o.pb,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,25,"ion-row",[],null,null,null,r.eb,r.y)),e.qb(3,49152,null,0,o.ib,[e.h,e.k,e.x],null,null),(l()(),e.rb(4,0,null,0,5,"ion-col",[["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(5,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(6,0,null,0,2,"h2",[["class","fucsia-text bold"]],null,null,null,null,null)),(l()(),e.Kb(7,null,["","."])),e.Gb(8,2),(l()(),e.rb(9,0,null,0,0,"img",[["alt","Grace Watts"],["class","bordes-redondos"],["width","200px"]],[[8,"src",4]],null,null,null,null)),(l()(),e.rb(10,0,null,0,17,"ion-col",[["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(11,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(12,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(13,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(14,0,null,0,1,"h2",[["class","fucsia-text bold"]],null,null,null,null,null)),(l()(),e.Kb(15,null,["",""])),(l()(),e.rb(16,0,null,0,3,"ion-textarea",[["disabled",""]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var s=!0;return"ionBlur"===n&&(s=!1!==e.Db(l,19)._handleBlurEvent(u.target)&&s),"ionChange"===n&&(s=!1!==e.Db(l,19)._handleInputEvent(u.target)&&s),s}),r.jb,r.D)),e.Hb(5120,null,t.f,(function(l){return[l]}),[o.Mb]),e.qb(18,49152,null,0,o.xb,[e.h,e.k,e.x],{disabled:[0,"disabled"],value:[1,"value"]},null),e.qb(19,16384,null,0,o.Mb,[e.k],null,null),(l()(),e.rb(20,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(21,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(22,0,null,0,5,"a",[["class","white-text"]],[[8,"href",4]],null,null,null,null)),(l()(),e.Kb(-1,null,["| "])),(l()(),e.rb(24,0,null,null,2,"ion-button",[["class","boton-leer"]],null,null,null,r.I,r.c)),e.qb(25,49152,null,0,o.j,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["leer m\xe1s"])),(l()(),e.Kb(-1,null,[" |"]))],(function(l,n){l(n,5,0,"12"),l(n,11,0,"12"),l(n,18,0,"",e.vb(1,"",n.context.$implicit.description,""))}),(function(l,n){var u=e.Lb(n,7,0,l(n,8,0,e.Db(n.parent,0),n.context.$implicit.date,"dd MMM"));l(n,7,0,u),l(n,9,0,e.vb(1,"",n.context.$implicit.img,"")),l(n,15,0,n.context.$implicit.task),l(n,22,0,e.vb(1,"/home#openModal",n.context.$implicit.id,""))}))}function m(l){return e.Mb(0,[e.Fb(0,a.e,[e.s]),(l()(),e.rb(1,0,null,null,275,"ion-content",[],null,null,null,r.N,r.h)),e.qb(2,49152,null,0,o.t,[e.h,e.k,e.x],{scrollEvents:[0,"scrollEvents"]},null),(l()(),e.rb(3,0,null,0,45,"div",[["class","sticky"]],null,null,null,null,null)),(l()(),e.rb(4,0,null,null,44,"ion-header",[],null,null,null,r.S,r.m)),e.qb(5,49152,null,0,o.A,[e.h,e.k,e.x],null,null),(l()(),e.rb(6,0,null,0,42,"ion-toolbar",[],null,null,null,r.lb,r.F)),e.qb(7,49152,null,0,o.Bb,[e.h,e.k,e.x],null,null),(l()(),e.rb(8,0,null,0,3,"ion-buttons",[["class","icon-menu-movil"],["slot","end"]],null,null,null,r.J,r.d)),e.qb(9,49152,null,0,o.k,[e.h,e.k,e.x],null,null),(l()(),e.rb(10,0,null,0,1,"ion-menu-button",[],null,null,null,r.bb,r.w)),e.qb(11,49152,null,0,o.Q,[e.h,e.k,e.x],null,null),(l()(),e.rb(12,0,null,0,33,"ion-grid",[["class","menu-pc"]],null,null,null,r.R,r.l)),e.qb(13,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.rb(14,0,null,0,31,"ion-row",[],null,null,null,r.eb,r.y)),e.qb(15,49152,null,0,o.ib,[e.h,e.k,e.x],null,null),(l()(),e.rb(16,0,null,0,3,"ion-col",[["size","2"]],null,null,null,r.M,r.g)),e.qb(17,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(18,0,null,0,1,"a",[["href","/home"]],null,null,null,null,null)),(l()(),e.rb(19,0,null,null,0,"img",[["alt","SomosUSA"],["class","logo"],["src","/assets/img/logo.svg"]],null,null,null,null,null)),(l()(),e.rb(20,0,null,0,18,"ion-col",[["size","8"]],null,null,null,r.M,r.g)),e.qb(21,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(22,0,null,0,16,"h2",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" | "])),(l()(),e.rb(24,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.scrollTo("section1")&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Inicio"])),(l()(),e.Kb(-1,null,[" | "])),(l()(),e.rb(27,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.scrollTo("section2")&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Sobre nosotros"])),(l()(),e.Kb(-1,null,[" | "])),(l()(),e.rb(30,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.scrollTo("section3")&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Clases"])),(l()(),e.Kb(-1,null,[" | "])),(l()(),e.rb(33,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.scrollTo("section4")&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Eventos"])),(l()(),e.Kb(-1,null,[" | "])),(l()(),e.rb(36,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.scrollTo("section5")&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Contacto"])),(l()(),e.Kb(-1,null,[" | "])),(l()(),e.rb(39,0,null,0,6,"ion-col",[["size","2"]],null,null,null,r.M,r.g)),e.qb(40,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(41,0,null,0,4,"h2",[["class","text-right"]],null,null,null,null,null)),(l()(),e.rb(42,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),e.rb(43,0,null,null,0,"img",[["alt","Facebook"],["class","icon-social"],["src","/assets/img/icons/facebook.svg"]],null,null,null,null,null)),(l()(),e.rb(44,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),e.rb(45,0,null,null,0,"img",[["alt","Instagram"],["class","icon-social"],["src","/assets/img/icons/instagram.svg"]],null,null,null,null,null)),(l()(),e.rb(46,0,null,0,2,"ion-title",[["class","text-center"]],null,null,null,r.kb,r.E)),e.qb(47,49152,null,0,o.zb,[e.h,e.k,e.x],null,null),(l()(),e.rb(48,0,null,0,0,"img",[["alt","SomosUSA"],["class","logo-movil"],["src","/assets/img/logo.svg"]],null,null,null,null,null)),(l()(),e.rb(49,0,null,0,0,"img",[["alt","Franja Derecha"],["class","franja-derecha"],["src","/assets/img/franja-derecha.svg"]],null,null,null,null,null)),(l()(),e.rb(50,0,null,0,0,"img",[["alt","Franja Izquierda"],["class","franja-izquierda"],["src","/assets/img/franja-izquierda.svg"]],null,null,null,null,null)),(l()(),e.rb(51,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(52,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(53,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(54,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(55,0,null,0,3,"div",[["class","banner text-center"],["id","section1"]],null,null,null,null,null)),(l()(),e.rb(56,0,null,null,1,"h2",[["class","white-text bold"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["MARINERA"])),(l()(),e.rb(58,0,null,null,0,"img",[["alt","Pareja"],["src","/assets/img/banner-pareja.png"]],null,null,null,null,null)),(l()(),e.rb(59,0,null,0,66,"div",[["class","container-general"],["id","section2"]],null,null,null,null,null)),(l()(),e.rb(60,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(61,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(62,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(63,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(64,0,null,null,15,"ion-grid",[],null,null,null,r.R,r.l)),e.qb(65,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.rb(66,0,null,0,13,"ion-row",[],null,null,null,r.eb,r.y)),e.qb(67,49152,null,0,o.ib,[e.h,e.k,e.x],null,null),(l()(),e.rb(68,0,null,0,8,"ion-col",[["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(69,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(70,0,null,0,1,"h2",[["class","fucsia-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Sombre Nosotros"])),(l()(),e.rb(72,0,null,0,4,"h5",[["class","text-justify white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Somos Usa es una academia formada en el mes de Agosto 2019 creada por dos amantes del baila como lo es Jenner interesado por el baile marinera a sus 9 a\xf1os desde su ciudad de origen Chiclayo, Per\xfa y Liliana que desde los 10 a\xf1os ha disfrutado esta danza tradicional desde la capital Lima, Per\xfa. Luego de retirarse por alg\xfan tiempo, volvieron en el a\xf1o 2013 y esta vez para despertar en otros la pasi\xf3n por el baile en su nueva casa Florida USA y as\xed es como nace nuestra "])),(l()(),e.rb(74,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(75,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Academia Somos Usa. "])),(l()(),e.rb(77,0,null,0,2,"ion-col",[["class","text-center"],["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(78,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(79,0,null,0,0,"img",[["alt","Pareja 2"],["src","/assets/img/pareja2.png"],["style","margin-top:-50px;"],["width","100%"]],null,null,null,null,null)),(l()(),e.rb(80,0,null,null,45,"ion-grid",[],null,null,null,r.R,r.l)),e.qb(81,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.rb(82,0,null,0,43,"ion-row",[],null,null,null,r.eb,r.y)),e.qb(83,49152,null,0,o.ib,[e.h,e.k,e.x],null,null),(l()(),e.rb(84,0,null,0,3,"ion-col",[["class","text-center"],["size","12"]],null,null,null,r.M,r.g)),e.qb(85,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(86,0,null,0,1,"h2",[["class","fucsia-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Directores"])),(l()(),e.rb(88,0,null,0,18,"ion-col",[["class","directores-area"],["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(89,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(90,0,null,0,16,"ion-row",[],null,null,null,r.eb,r.y)),e.qb(91,49152,null,0,o.ib,[e.h,e.k,e.x],null,null),(l()(),e.rb(92,0,null,0,2,"ion-col",[["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(93,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(94,0,null,0,0,"img",[["alt","Grace Watts"],["class","directores"],["src","/assets/img/grace-watts.png"]],null,null,null,null,null)),(l()(),e.rb(95,0,null,0,11,"ion-col",[["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(96,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(97,0,null,0,3,"h2",[["class","white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["GRACE"])),(l()(),e.rb(99,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" WATTS"])),(l()(),e.rb(101,0,null,0,1,"h4",[["class","white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Directora"])),(l()(),e.rb(103,0,null,0,1,"a",[],null,null,null,null,null)),(l()(),e.rb(104,0,null,null,0,"img",[["alt","Facebook"],["class","icon-social"],["src","/assets/img/icons/facebook.svg"]],null,null,null,null,null)),(l()(),e.rb(105,0,null,0,1,"a",[],null,null,null,null,null)),(l()(),e.rb(106,0,null,null,0,"img",[["alt","Instagram"],["class","icon-social"],["src","/assets/img/icons/instagram.svg"]],null,null,null,null,null)),(l()(),e.rb(107,0,null,0,18,"ion-col",[["class","directores-area"],["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(108,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(109,0,null,0,16,"ion-row",[],null,null,null,r.eb,r.y)),e.qb(110,49152,null,0,o.ib,[e.h,e.k,e.x],null,null),(l()(),e.rb(111,0,null,0,2,"ion-col",[["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(112,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(113,0,null,0,0,"img",[["alt","Jordan White"],["class","directores"],["src","/assets/img/jordan-white.png"]],null,null,null,null,null)),(l()(),e.rb(114,0,null,0,11,"ion-col",[["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(115,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(116,0,null,0,3,"h2",[["class","white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["JORDAN"])),(l()(),e.rb(118,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" WHITE"])),(l()(),e.rb(120,0,null,0,1,"h4",[["class","white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Profesor"])),(l()(),e.rb(122,0,null,0,1,"a",[],null,null,null,null,null)),(l()(),e.rb(123,0,null,null,0,"img",[["alt","Facebook"],["class","icon-social"],["src","/assets/img/icons/facebook.svg"]],null,null,null,null,null)),(l()(),e.rb(124,0,null,0,1,"a",[],null,null,null,null,null)),(l()(),e.rb(125,0,null,null,0,"img",[["alt","Instagram"],["class","icon-social"],["src","/assets/img/icons/instagram.svg"]],null,null,null,null,null)),(l()(),e.rb(126,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(127,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(128,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(129,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(130,0,null,0,47,"div",[["id","section3"],["style","background-color: #cc008347;"]],null,null,null,null,null)),(l()(),e.rb(131,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(132,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(133,0,null,null,42,"div",[["class","container-general"]],null,null,null,null,null)),(l()(),e.rb(134,0,null,null,41,"ion-grid",[],null,null,null,r.R,r.l)),e.qb(135,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.rb(136,0,null,0,5,"ion-row",[],null,null,null,r.eb,r.y)),e.qb(137,49152,null,0,o.ib,[e.h,e.k,e.x],null,null),(l()(),e.rb(138,0,null,0,3,"ion-col",[["class","text-center"],["size","12"]],null,null,null,r.M,r.g)),e.qb(139,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(140,0,null,0,1,"h2",[["class","white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Clases de Baile"])),(l()(),e.rb(142,0,null,0,16,"ion-row",[],null,null,null,r.eb,r.y)),e.qb(143,49152,null,0,o.ib,[e.h,e.k,e.x],null,null),(l()(),e.rb(144,0,null,0,5,"ion-col",[["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(145,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(146,0,null,0,1,"h2",[["class","fucsia-claro-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Clases Privada"])),(l()(),e.rb(148,0,null,0,1,"h5",[["class","text-justify white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Las clases privadas son una excelente alternativa a la hora de aprender a bailar. La atenci\xf3n personal te permitir\xe1 saber d\xf3nde est\xe1n tus errores y c\xf3mo solucionarlos. Tu instructor ser\xe1 capaz de identificar los problemas y centrarse espec\xedficamente en las \xe1reas que necesitan mejorar. Esto es especialmente cr\xedtico para la t\xe9cnica aplicada a cada movimiento. "])),(l()(),e.rb(150,0,null,0,2,"ion-col",[["style","max-width:50px;"]],null,null,null,r.M,r.g)),e.qb(151,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.rb(152,0,null,0,0,"hr",[],null,null,null,null,null)),(l()(),e.rb(153,0,null,0,5,"ion-col",[["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(154,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(155,0,null,0,1,"h2",[["class","fucsia-claro-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Clases en Grupo"])),(l()(),e.rb(157,0,null,0,1,"h5",[["class","text-justify white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Durante milenios, los bailarines utilizaban este arte para comunicarse e incrementar la cohesi\xf3n social en el seno de un grupo cultural. Es por ello que hoy en d\xeda, los core\xf3grafos transmiten esta cultura del baile grupal a sus alumnos para poder unificar y tener el control de todo el grupo adem\xe1s de ser divertido compartir con todos tus compa\xf1eros. "])),(l()(),e.rb(159,0,null,0,16,"ion-row",[],null,null,null,r.eb,r.y)),e.qb(160,49152,null,0,o.ib,[e.h,e.k,e.x],null,null),(l()(),e.rb(161,0,null,0,5,"ion-col",[["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(162,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(163,0,null,0,1,"h2",[["class","fucsia-claro-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Entretenimiento para Ni\xf1os"])),(l()(),e.rb(165,0,null,0,1,"h5",[["class","text-justify white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" A los ni\xf1os, desde muy peque\xf1itos, les encanta bailar. Es escuchar m\xfasica y ponerse a bailar, enseguida su cuerpo empieza a moverse. El baile es una actividad que debemos fomentar porque les beneficia, tanto desde el punto de vista f\xedsico como ps\xedquico. As\xed que ellos tambi\xe9n son bienvenidos a nuestra academia. "])),(l()(),e.rb(167,0,null,0,2,"ion-col",[["style","max-width:50px;"]],null,null,null,r.M,r.g)),e.qb(168,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.rb(169,0,null,0,0,"hr",[],null,null,null,null,null)),(l()(),e.rb(170,0,null,0,5,"ion-col",[["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(171,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(172,0,null,0,1,"h2",[["class","fucsia-claro-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Eventos Corporativo"])),(l()(),e.rb(174,0,null,0,1,"h5",[["class","text-justify white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Participamos en eventos, si amas el baile marinera y quieres que participemos podemos hacerlo incluyendo corporativos, ferias, congresos, espect\xe1culos privados, fiestas, shows, posibilidad de crear coreograf\xedas interactivas. Creamos y adaptamos espect\xe1culos de baile en funci\xf3n a lo que necesites. "])),(l()(),e.rb(176,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(177,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(178,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(179,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.gb(16777216,null,0,1,null,g)),e.qb(181,278528,null,0,a.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.rb(182,0,null,0,21,"div",[["class","container-general"],["id","section4"]],null,null,null,null,null)),(l()(),e.rb(183,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(184,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(185,0,null,null,0,"img",[["alt","Eventos"],["class","fondo-eventos"],["src","/assets/img/eventos.png"]],null,null,null,null,null)),(l()(),e.rb(186,0,null,null,15,"ion-grid",[],null,null,null,r.R,r.l)),e.qb(187,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.rb(188,0,null,0,5,"ion-row",[],null,null,null,r.eb,r.y)),e.qb(189,49152,null,0,o.ib,[e.h,e.k,e.x],null,null),(l()(),e.rb(190,0,null,0,3,"ion-col",[["class","text-center"],["size","12"]],null,null,null,r.M,r.g)),e.qb(191,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(192,0,null,0,1,"h2",[["class","white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Eventos"])),(l()(),e.rb(194,0,null,0,7,"ion-row",[],null,null,null,r.eb,r.y)),e.qb(195,49152,null,0,o.ib,[e.h,e.k,e.x],null,null),(l()(),e.rb(196,0,null,0,5,"ion-col",[["size","12"]],null,null,null,r.M,r.g)),e.qb(197,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(198,0,null,0,3,"ion-slides",[["pager","true"]],null,null,null,r.hb,r.B)),e.qb(199,49152,null,0,o.qb,[e.h,e.k,e.x],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),e.gb(16777216,null,0,1,null,h)),e.qb(201,278528,null,0,a.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.rb(202,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(203,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(204,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(205,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(206,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(207,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(208,0,null,0,32,"div",[["id","section5"],["style","background-color: #cc008347;"]],null,null,null,null,null)),(l()(),e.rb(209,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(210,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(211,0,null,null,29,"div",[["class","container-general"]],null,null,null,null,null)),(l()(),e.rb(212,0,null,null,28,"ion-grid",[],null,null,null,r.R,r.l)),e.qb(213,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.rb(214,0,null,0,9,"ion-row",[],null,null,null,r.eb,r.y)),e.qb(215,49152,null,0,o.ib,[e.h,e.k,e.x],null,null),(l()(),e.rb(216,0,null,0,7,"ion-col",[],null,null,null,r.M,r.g)),e.qb(217,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.rb(218,0,null,0,1,"h2",[["class","white-text text-center"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Contacto"])),(l()(),e.rb(220,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(221,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.rb(222,0,null,0,1,"h5",[["class","white-text text-justify"],["style","max-width:600px;margin:0 auto;"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Si necesitas contactarte con nosotros puedes hacerlos a trav\xe9s de nuestros n\xfameros tel\xe9fonicos, direcci\xf3n y correo. Estaremos encantados de responder cualquier duda. "])),(l()(),e.rb(224,0,null,0,16,"ion-row",[["class","text-center"]],null,null,null,r.eb,r.y)),e.qb(225,49152,null,0,o.ib,[e.h,e.k,e.x],null,null),(l()(),e.rb(226,0,null,0,4,"ion-col",[["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(227,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(228,0,null,0,0,"img",[["alt","Grace Watts"],["src","/assets/img/icons/ubicacion.svg"],["width","30%"]],null,null,null,null,null)),(l()(),e.rb(229,0,null,0,1,"h3",[["class","white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["lorem inpsu"])),(l()(),e.rb(231,0,null,0,4,"ion-col",[["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(232,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(233,0,null,0,0,"img",[["alt","Grace Watts"],["src","/assets/img/icons/correo.svg"],["width","30%"]],null,null,null,null,null)),(l()(),e.rb(234,0,null,0,1,"h3",[["class","white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["SomosUsa@gmail.com"])),(l()(),e.rb(236,0,null,0,4,"ion-col",[["size","12"],["size-md",""]],null,null,null,r.M,r.g)),e.qb(237,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.rb(238,0,null,0,0,"img",[["alt","Grace Watts"],["src","/assets/img/icons/whatsapp.svg"],["width","30%"]],null,null,null,null,null)),(l()(),e.rb(239,0,null,0,1,"h3",[["class","white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["lorem inpsu"])),(l()(),e.rb(241,0,null,0,35,"div",[["class","container-general"]],null,null,null,null,null)),(l()(),e.rb(242,0,null,null,32,"ion-grid",[],null,null,null,r.R,r.l)),e.qb(243,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.rb(244,0,null,0,30,"ion-row",[["class","text-center"]],null,null,null,r.eb,r.y)),e.qb(245,49152,null,0,o.ib,[e.h,e.k,e.x],null,null),(l()(),e.rb(246,0,null,0,28,"ion-col",[],null,null,null,r.M,r.g)),e.qb(247,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.rb(248,0,null,0,0,"img",[["alt","SomosUSA"],["src","/assets/img/logo.svg"],["width","100px"]],null,null,null,null,null)),(l()(),e.rb(249,0,null,0,16,"h5",[["class","text-center white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" | "])),(l()(),e.rb(251,0,null,null,1,"a",[["class","white-text"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.scrollTo("section1")&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Inicio"])),(l()(),e.Kb(-1,null,[" | "])),(l()(),e.rb(254,0,null,null,1,"a",[["class","white-text"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.scrollTo("section2")&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Sobre nosotros"])),(l()(),e.Kb(-1,null,[" | "])),(l()(),e.rb(257,0,null,null,1,"a",[["class","white-text"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.scrollTo("section3")&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Clases"])),(l()(),e.Kb(-1,null,[" | "])),(l()(),e.rb(260,0,null,null,1,"a",[["class","white-text"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.scrollTo("section4")&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Eventos"])),(l()(),e.Kb(-1,null,[" | "])),(l()(),e.rb(263,0,null,null,1,"a",[["class","white-text"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.scrollTo("section5")&&e),e}),null,null)),(l()(),e.Kb(-1,null,["Contacto"])),(l()(),e.Kb(-1,null,[" | "])),(l()(),e.rb(266,0,null,0,1,"a",[],null,null,null,null,null)),(l()(),e.rb(267,0,null,null,0,"img",[["alt","Facebook"],["class","icon-social"],["src","/assets/img/icons/facebook.svg"]],null,null,null,null,null)),(l()(),e.Kb(-1,0,[" \xa0 "])),(l()(),e.rb(269,0,null,0,1,"a",[],null,null,null,null,null)),(l()(),e.rb(270,0,null,null,0,"img",[["alt","Instagram"],["class","icon-social"],["src","/assets/img/icons/instagram.svg"]],null,null,null,null,null)),(l()(),e.rb(271,0,null,0,3,"h5",[["class","white-text"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" \xa9 2025. Developed by "])),(l()(),e.rb(273,0,null,null,1,"a",[["class","white-text"],["href","https://tagastudios.com/"],["target","_blank"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["TAGA STUDIOS"])),(l()(),e.rb(275,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(276,0,null,null,0,"br",[],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,2,0,!0),l(n,17,0,"2"),l(n,21,0,"8"),l(n,40,0,"2"),l(n,69,0,"12"),l(n,78,0,"12"),l(n,85,0,"12"),l(n,89,0,"12"),l(n,93,0,"12"),l(n,96,0,"12"),l(n,108,0,"12"),l(n,112,0,"12"),l(n,115,0,"12"),l(n,139,0,"12"),l(n,145,0,"12"),l(n,154,0,"12"),l(n,162,0,"12"),l(n,171,0,"12"),l(n,181,0,u.todos),l(n,191,0,"12"),l(n,197,0,"12"),l(n,199,0,u.slideOpts,"true"),l(n,201,0,u.todos),l(n,227,0,"12"),l(n,232,0,"12"),l(n,237,0,"12")}),null)}function x(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,1,"app-home",[],null,[[null,"ionScroll"]],(function(l,n,u){var s=!0;return"ionScroll"===n&&(s=!1!==e.Db(l,1).onWindowScroll()&&s),s}),m,d)),e.qb(1,114688,null,0,c,[b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var p=e.nb("app-home",c,x,{},{},[]),k=u("iInd");u.d(n,"HomePageModuleNgFactory",(function(){return z}));var z=e.ob(s,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[i.a,p]],[3,e.j],e.v]),e.Bb(4608,a.m,a.l,[e.s,[2,a.t]]),e.Bb(4608,t.n,t.n,[]),e.Bb(4608,o.a,o.a,[e.x,e.g]),e.Bb(4608,o.Gb,o.Gb,[o.a,e.j,e.p]),e.Bb(4608,o.Jb,o.Jb,[o.a,e.j,e.p]),e.Bb(1073742336,a.c,a.c,[]),e.Bb(1073742336,t.m,t.m,[]),e.Bb(1073742336,t.d,t.d,[]),e.Bb(1073742336,o.Db,o.Db,[]),e.Bb(1073742336,k.o,k.o,[[2,k.t],[2,k.m]]),e.Bb(1073742336,s,s,[]),e.Bb(1024,k.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);