(function(){var t={459:function(t,e,i){var r={"./Logo.png":303,"./Photo.png":753,"./blog-details-banner.jpg":64,"./blog-details-img01.png":282,"./blog-details-img02.png":382,"./blog01.png":454,"./blog02.png":234,"./blog03.png":897,"./blog04.png":689,"./blog05.png":719,"./blog06.png":447,"./blog_banner01.jpg":739,"./blog_latest-post.png":576,"./project-banner.jpg":567,"./project-details-banner.jpg":153,"./project-details-photo01.png":737,"./project-details-photo02.png":166,"./project-details-photo03.png":174,"./project-photo01.png":650,"./project-photo02.png":271,"./project-photo03.png":297,"./project-photo04.png":770,"./project-photo05.png":455,"./project-photo06.png":638,"./project-photo07.png":395,"./project-photo08.png":846,"./project01.png":560,"./project02.png":961,"./project03.png":860,"./project04.png":347};function o(t){var e=s(t);return i(e)}function s(t){if(!i.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=s,t.exports=o,o.id=459},279:function(t,e,i){"use strict";var r=i(144),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("BodyContent",[e("Header"),e("router-view"),e("Footer")],1)],1)},s=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body-content"},[e("BackLines"),t._t("default")],2)},a=[],c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"back-lines"},t._l(t.lineList,(function(i,r){return e("div",{key:`key${i}`,staticClass:"back-line",style:t.getStyle(r)})})),0)},l=[],g={name:"BackLines",data(){return{lineList:[0,400,800,1200],styleLeft:[{left:0},{left:0},{left:0},{left:0}]}},mounted(){},methods:{getStyle(t){return this.styleLeft[t].left=`calc((100% - 1200px) / 2 + ${this.lineList[t]}px)`,this.styleLeft[t]}}},m=g,u=i(1),d=(0,u.Z)(m,c,l,!1,null,"6d30d178",null),p=d.exports,h={name:"BodyContent",data(){return{}},components:{BackLines:p},mounted(){},methods:{}},b=h,v=(0,u.Z)(b,n,a,!1,null,"59a54ca7",null),_=v.exports,f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("div",{staticClass:"header__logo"},[e("div",{staticClass:"header__logo_img"},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:i(303),alt:""}})])],1),e("router-link",{attrs:{to:"/"}},[e("p",{staticClass:"header__caption"},[t._v("Interno")])])],1),e("menu",{staticClass:"menu"},[e("router-link",{attrs:{to:"/home"}},[e("p",[t._v("Home")])]),e("router-link",{attrs:{to:"/project"}},[e("p",[t._v("Project")])]),e("router-link",{attrs:{to:"/blog"}},[e("p",[t._v("Blog")])])],1)])},C=[],A={name:"HeaderComponent"},j=A,x=(0,u.Z)(j,f,C,!1,null,"134a5077",null),w=x.exports,S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer__left"},[t._m(0),e("p",[t._v("It is a long established fact that a reader will be distracted lookings.")]),e("div",{staticClass:"footer__socials"},[e("a",{attrs:{href:"#"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])]),e("a",{attrs:{href:"#"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512"}},[e("path",{attrs:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}})])])])]),t._m(1),e("div"),t._m(2)])},y=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer__logo"},[e("img",{attrs:{src:i(303),alt:""}}),e("p",[t._v("Interno")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer__middle"},[e("p",{staticClass:"footer__caption"},[t._v("Pages")]),e("p",{staticClass:"footer__content"},[t._v("Home")]),e("p",{staticClass:"footer__content"},[t._v("Project")]),e("p",{staticClass:"footer__content"},[t._v("Blog")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer__right"},[e("p",{staticClass:"footer__caption"},[t._v("Contact")]),e("p",{staticClass:"footer__content"},[t._v("55 East Birchwood Ave. Brooklyn, New York 11201")]),e("p",{staticClass:"footer__content"},[t._v("contact@interno.com")]),e("p",{staticClass:"footer__content"},[t._v("(123) 456 - 7890")])])}],B={name:"FooterComponent",data(){return{}},mounted(){},methods:{}},k=B,I=(0,u.Z)(k,S,y,!1,null,"f3037a9c",null),P=I.exports,L={name:"App",components:{BodyContent:_,Header:w,Footer:P}},T=L,D=(0,u.Z)(T,o,s,!1,null,null,null),H=D.exports,M=i(345),E=function(){var t=this,e=t._self._c;return e("div",[e("main",{staticClass:"main"},[e("div",{staticClass:"main__banner"},[e("div",{staticClass:"main__banner-intro"},[e("h1",[t._v("Let Your Home Be Unique")]),e("p",[t._v("There are many variations of the passages of lorem Ipsum fromavailable, majority.")]),e("router-link",{staticClass:"main__button",attrs:{to:"project",tag:"button"}},[e("p",[t._v("Get Started")]),e("svg",{attrs:{width:"19",height:"17",viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{id:"Vector",d:"M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887",stroke:"#CDA274","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"round"}})])])],1)]),t._m(0)]),e("CounterComponent"),e("BlogComponent")],1)},W=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"projects"},[e("div",{staticClass:"projects__heading"},[e("h2",[t._v("Follow Our Projects")]),e("p",[t._v(" It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points. ")])]),e("div",{staticClass:"projects__list"},[e("div",{staticClass:"projects__item"},[e("div",{staticClass:"border-top-right"},[e("img",{attrs:{src:i(560),alt:"1"}})]),e("h3",[t._v("Modern Kitchan")]),e("p",[t._v("Decor / Artchitecture")])]),e("div",{staticClass:"projects__item"},[e("div",{staticClass:"border-top-left"},[e("img",{attrs:{src:i(961),alt:"2"}})]),e("h3",[t._v("Modern Kitchan")]),e("p",[t._v("Decor / Artchitecture")])]),e("div",{staticClass:"projects__item"},[e("div",{staticClass:"border-bottom-right"},[e("img",{attrs:{src:i(860),alt:"3"}})]),e("h3",[t._v("Modern Kitchan")]),e("p",[t._v("Decor / Artchitecture")])]),e("div",{staticClass:"projects__item"},[e("div",{staticClass:"border-bottom-left"},[e("img",{attrs:{src:i(347),alt:"4"}})]),e("h3",[t._v("Modern Kitchan")]),e("p",[t._v("Decor / Artchitecture")])])])])}],R=function(){var t=this,e=t._self._c;return e("section",{staticClass:"blog"},[t._m(0),e("div",{staticClass:"blog__list"},t._l(t.blogs,(function(i,r){return e("div",{key:r,staticClass:"blog__item",class:{blog__item_selected:i.isSelected}},[e("div",{staticClass:"blog__pic"},[e("img",{attrs:{src:i.img,alt:i.alt}})]),e("p",[t._v(t._s(i.text)),e("br"),t._v(t._s(i.text2))]),e("div",{staticClass:"blog__nav"},[e("p",[t._v("26 December,2022")]),e("a",{attrs:{href:"blog-details.html"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"52",height:"53",viewBox:"0 0 52 53",fill:"none"}},[e("circle",{attrs:{cx:"26",cy:"26.267",r:"26",fill:"#F4F0EC"}}),e("path",{attrs:{d:"M23.7714 32.9527L29.7143 26.267L23.7714 19.5813",stroke:"#292F36","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])})),0)])},G=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"projects__heading"},[e("h2",[t._v("Articles & News")]),e("p",[t._v(" It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using. ")])])}],F={name:"BlogComponent",data(){return{blogs:[{img:i(454),alt:"blog1",text:"Let’s Get Solution For Building Construction",text2:"Work",data:"26 December,2022",isSelected:!1},{img:i(234),alt:"blog2",text:"Low Cost Latest Invented Interior Designing",text2:"Ideas.",data:"22 December,2022",isSelected:!0},{img:i(897),alt:"blog3",text:"Best For Any Office & Business Interior",text2:"Solution",data:"25 December,2022",isSelected:!1}]}},computed:{isSelected(t){return t?"blog__item_selected":""}}},N=F,q=(0,u.Z)(N,R,G,!1,null,"7bc22c39",null),Z=q.exports,O=function(){var t=this,e=t._self._c;return e("section",{staticClass:"counter"},[e("div",{staticClass:"counter__content"},t._l(t.arr,(function(i,r){return e("div",{key:r,staticClass:"counter__item"},[e("p",[t._v(t._s(i.count))]),e("p",{staticClass:"counter__text"},[t._v(t._s(i.name))]),r<t.arr.length-1?e("div",{staticClass:"counter__line"}):t._e()])})),0)])},K=[],U={name:"CounterComponent",data(){return{arr:[{count:12,name:"Years Of Experiance"},{count:85,name:"Success Project"},{count:15,name:"Active Project"},{count:95,name:"Happy Customers"}]}},mounted(){},methods:{}},V=U,Y=(0,u.Z)(V,O,K,!1,null,"9da85a00",null),Q=Y.exports,z={name:"HomePageComponent",data(){return{}},mounted(){},methods:{revert(){this.message=this.message.split("").reverse().join("")}},components:{CounterComponent:Q,BlogComponent:Z}},X=z,J=(0,u.Z)(X,E,W,!1,null,"d44acd90",null),$=J.exports,tt=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"categories"},[e("CategoriesComponent",{on:{"change-category":t.changeCategory}})],1),e("main",{staticClass:"project-page"},[e("ProjectsListComponent",{attrs:{"current-projects":t.currentCategory}}),e("PaginationComponent",{attrs:{"total-pages":t.totalPages,"in-page":t.currentPage},on:{"out-page":t.outPage}})],1)])},et=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"project-page__banner"},[e("div",{staticClass:"project-page__banner-intro"},[e("h1",[t._v("Our Project")]),e("p",[t._v("Home / Project")])])])}],it=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"frame"},t._l(t.categories,(function(i,r){return e("div",{key:r},[e("div",{class:t.isSelected(r),on:{click:function(e){return t.select(r)}}},[e("p",[t._v(t._s(i))])])])})),0)])},rt=[],ot={name:"CategoriesComponent",data(){return{categories:["Bathroom","Bed Room","Kitchen","Living Area"],selected:1}},mounted(){this.select(this.selected)},methods:{isSelected(t){return t===this.selected?"button":"text"},select(t){this.selected=t,this.$emit("change-category",this.categories[this.selected])}},computed:{}},st=ot,nt=(0,u.Z)(st,it,rt,!1,null,"d264ba2a",null),at=nt.exports,ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"project-list"},[e("div",{staticClass:"left"},t._l(t.leftSide,(function(t){return e("ProjectItemComponent",{key:t.id,attrs:{"img-width":t.imgWidth,"img-height":t.imgHeight,"img-src":t.imgSrc,"img-alt":t.imgAlt,title:t.title,breadcrumbs:t.breadcrumbs}})})),1),e("div",{staticClass:"right"},t._l(t.rightSide,(function(t){return e("ProjectItemComponent",{key:t.id,attrs:{"img-width":t.imgWidth,"img-height":t.imgHeight,"img-src":t.imgSrc,"img-alt":t.imgAlt,title:t.title,breadcrumbs:t.breadcrumbs}})})),1)])},lt=[],gt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"project-item",style:[t.styleWidth]},[e("div",{style:[t.styleWidth,t.styleHeight]},[e("img",{attrs:{src:t.imgSrc,alt:t.imgAlt}})]),e("div",{staticClass:"description"},[e("div",[e("h2",{staticClass:"title"},[t._v(t._s(t.title))]),e("p",{staticClass:"text"},[t._v(t._s(t.breadcrumbs))])]),e("router-link",{attrs:{to:"project-details"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 70 70",fill:"none"}},[e("circle",{attrs:{cx:"35",cy:"35",r:"35",fill:"#F4F0EC"}}),e("path",{attrs:{d:"M32 44L40 35L32 26",stroke:"#292F36","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1)])},mt=[],ut={name:"ProjectItemComponent",props:{imgSrc:String,imgAlt:String,imgWidth:Number,imgHeight:Number,title:String,breadcrumbs:String},data(){return{styleWidth:{width:"auto"},styleHeight:{height:"auto"}}},mounted(){this.imgWidth>0&&(this.styleWidth.width=this.imgWidth+"px"),this.imgHeight>0&&(this.styleHeight.height=this.imgHeight+"px")},computed:{},methods:{}},dt=ut,pt=(0,u.Z)(dt,gt,mt,!1,null,"7867d5d3",null),ht=pt.exports;function bt(){return{bathrooms:[{id:1,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"bathrooms 1",title:"Minimal Bedroom table",breadcrumbs:"Bathroom / Artchitecture"},{id:2,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"bathrooms 2",title:"Minimal Bedroom table",breadcrumbs:"Decor / Artchitecture"},{id:3,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"bathrooms 3",title:"Classic Minimal Bedroom",breadcrumbs:"Decor / Artchitecture"},{id:4,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"bathrooms 4",title:"Modern Bedroom",breadcrumbs:"Decor / Artchitecture"},{id:5,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"bathrooms 5",title:"Minimal Bedroom table",breadcrumbs:"Decor / Artchitecture"},{id:6,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"bathrooms 6",title:"System Table",breadcrumbs:"Decor / Artchitecture"},{id:7,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"bathrooms 7",title:"Modern Medroom",breadcrumbs:"Decor / Artchitecture"},{id:8,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"bathrooms 8",title:"Modern Bedroom",breadcrumbs:"Decor / Artchitecture"}],bedrooms:[{id:1,imgWidth:585,imgHeight:0,imgSrc:i(650),imgAlt:"project 1 1",title:"Minimal Bedroom table",breadcrumbs:"Decor / Artchitecture"},{id:2,imgWidth:585,imgHeight:0,imgSrc:i(271),imgAlt:"project 1 1",title:"Minimal Bedroom table",breadcrumbs:"Decor / Artchitecture"},{id:3,imgWidth:585,imgHeight:0,imgSrc:i(297),imgAlt:"project 1 1",title:"Classic Minimal Bedroom",breadcrumbs:"Decor / Artchitecture"},{id:4,imgWidth:585,imgHeight:0,imgSrc:i(770),imgAlt:"project 1 1",title:"Modern Bedroom",breadcrumbs:"Decor / Artchitecture"},{id:5,imgWidth:585,imgHeight:0,imgSrc:i(455),imgAlt:"project 1 1",title:"Minimal Bedroom table",breadcrumbs:"Decor / Artchitecture"},{id:6,imgWidth:585,imgHeight:0,imgSrc:i(638),imgAlt:"project 1 1",title:"System Table",breadcrumbs:"Decor / Artchitecture"},{id:7,imgWidth:585,imgHeight:0,imgSrc:i(395),imgAlt:"project 1 1",title:"Modern Medroom",breadcrumbs:"Decor / Artchitecture"},{id:8,imgWidth:585,imgHeight:0,imgSrc:i(846),imgAlt:"project 1 1",title:"Modern Bedroom",breadcrumbs:"Decor / Artchitecture"}],kithens:[{id:1,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"kitchen 1",title:"Minimal Bedroom table",breadcrumbs:"Kitchen / Artchitecture"},{id:2,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"kitchen 2",title:"Minimal Bedroom table",breadcrumbs:"Kitchen / Artchitecture"},{id:3,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"kitchen 3",title:"Classic Minimal Bedroom",breadcrumbs:"Kitchen / Artchitecture"},{id:4,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"kitchen 4",title:"Modern Bedroom",breadcrumbs:"Kitchen / Artchitecture"},{id:5,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"kitchen 5",title:"Minimal Bedroom table",breadcrumbs:"Kitchen / Artchitecture"},{id:6,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"kitchen 6",title:"System Table",breadcrumbs:"Kitchen / Artchitecture"},{id:7,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"kitchen 7",title:"Modern Medroom",breadcrumbs:"Kitchen / Artchitecture"},{id:8,imgWidth:585,imgHeight:0,imgSrc:"",imgAlt:"kitchen 8",title:"Modern Bedroom",breadcrumbs:"Kitchen / Artchitecture"}],livingAreas:[{id:1,imgWidth:585,imgHeight:0,imgSrc:i(650),imgAlt:"project 1 1",title:"Minimal Bedroom table",breadcrumbs:"Living Area / Artchitecture"},{id:2,imgWidth:585,imgHeight:0,imgSrc:i(271),imgAlt:"project 1 1",title:"Minimal Bedroom table",breadcrumbs:"Living Area / Artchitecture"},{id:3,imgWidth:585,imgHeight:0,imgSrc:i(297),imgAlt:"project 1 1",title:"Classic Minimal Bedroom",breadcrumbs:"Living Area / Artchitecture"},{id:4,imgWidth:585,imgHeight:0,imgSrc:i(770),imgAlt:"project 1 1",title:"Modern Bedroom",breadcrumbs:"Living Area / Artchitecture"},{id:5,imgWidth:585,imgHeight:0,imgSrc:i(455),imgAlt:"project 1 1",title:"Minimal Bedroom table",breadcrumbs:"Living Area / Artchitecture"},{id:6,imgWidth:585,imgHeight:0,imgSrc:i(638),imgAlt:"project 1 1",title:"System Table",breadcrumbs:"Living Area / Artchitecture"},{id:7,imgWidth:585,imgHeight:0,imgSrc:i(395),imgAlt:"project 1 1",title:"Modern Medroom",breadcrumbs:"Living Area / Artchitecture"},{id:8,imgWidth:585,imgHeight:0,imgSrc:i(846),imgAlt:"project 1 1",title:"Modern Bedroom",breadcrumbs:"Living Area / Artchitecture"}]}}function vt(t,e){return At(bt().bathrooms,t,e)}function _t(t,e){return At(bt().bedrooms,t,e)}function ft(t,e){return At(bt().kithens,t,e)}function Ct(t,e){return At(bt().livingAreas,t,e)}function At(t,e,i){const r={data:[],pages:0};r.pages=t.length/i+1;for(let o=(e-1)*i;o<t.length;o++){const s=t[o];if(r.data.push(s),o>=e*i)break}return r}var jt={name:"ProjectsListComponent",props:{currentProjects:String},data(){return{currentPage:1,pageLimit:8}},mounted(){},methods:{projects(){switch(this.currentProjects){case"Bathroom":return vt(this.currentPage,this.pageLimit);case"Bed Room":return _t(this.currentPage,this.pageLimit);case"Kitchen":return ft(this.currentPage,this.pageLimit);case"Living Area":return Ct(this.currentPage,this.pageLimit)}return{data:[],pages:0}}},components:{ProjectItemComponent:ht},computed:{leftSide(){const t=this.projects();return t.data.filter(((t,e)=>e%2===0))},rightSide(){const t=this.projects();return t.data.filter(((t,e)=>e%2===1))}}},xt=jt,wt=(0,u.Z)(xt,ct,lt,!1,null,"645f7dd6",null),St=wt.exports,yt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},t._l(t.items,(function(i,r){return e("div",{key:r,staticClass:"pagination__item",on:{click:function(e){return t.changePage(i)}}},[e("div",{staticClass:"pagination__number"},["next"!==i.type?e("p",[t._v(t._s(i.page))]):t._e()]),"current"===i.type?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"53",height:"52",viewBox:"0 0 53 52",fill:"none"}},[e("circle",{attrs:{cx:"26.5",cy:"26",r:"26",fill:"#F4F0EC"}})]):t._e(),"normal"===i.type?e("svg",{style:{cursor:"auto"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"53",height:"52",viewBox:"0 0 53 52",fill:"none"}},[e("circle",{attrs:{cx:"26.5",cy:"26",r:"25.5",stroke:"#CDA274"}})]):t._e(),"next"===i.type?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"53",height:"52",viewBox:"0 0 53 52",fill:"none"}},[e("circle",{attrs:{cx:"26.5",cy:"26",r:"25.5",stroke:"#CDA274"}}),e("path",{attrs:{d:"M23.5571 32L29.5 25.3143L23.5571 18.6286",stroke:"#292F36","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]):t._e()])})),0)},Bt=[],kt={name:"PaginationComponent",props:{totalPages:Number,inPage:Number},data(){return{}},mounted(){},computed:{items(){const t=[];let e=Math.max(this.inPage-2,1);const i=Math.min(e+4,this.totalPages);e=Math.max(i-4,1);for(let r=e;r<=i;r++)r===this.inPage?t.push({page:r<=9?"0"+r:r,type:"current"}):t.push({page:r<=9?"0"+r:r,type:"normal"});return i<this.totalPages&&t.push({page:"0"+Math.min(this.inPage+2,i),type:"next"}),t}},methods:{changePage(t){"current"!==t.type&&this.$emit("out-page",t)}}},It=kt,Pt=(0,u.Z)(It,yt,Bt,!1,null,"0df3be80",null),Lt=Pt.exports,Tt={name:"ProjectPageComponent",data(){return{currentCategory:"",currentPage:1,totalPages:7}},mounted(){},methods:{changeCategory(t){this.currentCategory=t},outPage(t){this.currentPage=Number(t.page)}},components:{CategoriesComponent:at,ProjectsListComponent:St,PaginationComponent:Lt}},Dt=Tt,Ht=(0,u.Z)(Dt,tt,et,!1,null,"30e23cbe",null),Mt=Ht.exports,Et=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"project-details-page__banner"}),e("main",{staticClass:"project-details-page"},[e("div",{staticClass:"project-details-page__text"},[e("p",{staticClass:"project-details-page__title"},[t._v(t._s(t.GET_CURRENT_TITLE))]),e("p",{staticClass:"project-details-page__content"},[t._v(" "+t._s(t.GET_CURRENT_CONTENT)+" ")])]),e("div",{staticClass:"project-details-page__img"},[e("img",{attrs:{src:t.img,alt:""}})]),e("div",{staticClass:"project-details-page__slider"},[e("div",{staticClass:"project-details-page__switcher"},[e("SwitcherComponent",{on:{switch:t.onSwith}})],1)])])])},Wt=[],Rt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"switcher"},t._l([1,2,3],(function(i){return e("div",{staticClass:"circle",class:{selected:t.switcherSelected===i},on:{click:function(e){return t.changePage(i)}}})})),0)},Gt=[],Ft={name:"SwitcherComponent",data(){return{switcherSelected:1,interval:null,timeout:null}},mounted(){this.StartSwith()},methods:{StartSwith(){this.interval=setInterval((()=>{3===this.switcherSelected?this.switcherSelected=1:this.switcherSelected++,this.$emit("switch",this.switcherSelected)}),3e3)},changePage(t){this.interval&&(clearInterval(this.interval),this.interval=null),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(this.StartSwith,6e3),this.switcherSelected=t,this.$emit("switch",this.switcherSelected)}}},Nt=Ft,qt=(0,u.Z)(Nt,Rt,Gt,!1,null,"b5ab5e34",null),Zt=qt.exports,Ot=i(629),Kt={name:"ProjectDetailsPageComponent",data(){return{img:i(166)}},mounted(){},methods:{onSwith(t){this.SET_CURRENT_ID(t-1),this.img=i(459)("./"+this.GET_CURRENT_IMAGE)},...(0,Ot.OI)(["SET_CURRENT_ID"])},components:{SwitcherComponent:Zt},computed:{...(0,Ot.Se)(["GET_CURRENT_TITLE","GET_CURRENT_CONTENT","GET_CURRENT_IMAGE"])}},Ut=Kt,Vt=(0,u.Z)(Ut,Et,Wt,!1,null,"5bb78809",null),Yt=Vt.exports,Qt=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("main",{staticClass:"blog-page__main"},[e("div",{staticClass:"blog-page__post"},[e("h2",[t._v("Latest Post")]),e("div",{staticClass:"blog-page__post-content"},[t._m(1),e("div",{staticClass:"blog-page__post-text"},[e("h3",[t._v("Low Cost Latest Invented Interior Designing Ideas")]),e("p",[t._v(" Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. ")]),e("p",[t._v("Lorem Ipsum is not simply random text. It has roots in a piece of classica.")]),e("div",{staticClass:"blog-page__post-next"},[e("p",[t._v("26 December,2022")]),e("router-link",{attrs:{to:"blog-details"}},[e("svg",{attrs:{width:"52",height:"53",viewBox:"0 0 52 53",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{id:"&#62;"}},[e("circle",{attrs:{id:"Ellipse",cx:"26",cy:"26.5",r:"26",fill:"#F4F0EC"}}),e("path",{attrs:{id:"Vector",d:"M23.771 33.1855L29.7139 26.4998L23.771 19.8141",stroke:"#292F36","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])],1)])])]),e("section",{staticClass:"blog-page__articles"},[e("h2",[t._v("Articles & News")]),e("div",{staticClass:"blog__list"},t._l(t.blogs,(function(i,r){return e("div",{key:r,staticClass:"blog__item",class:{blog__item_selected:i.isSelected}},[e("div",{staticClass:"blog__pic"},[e("img",{attrs:{src:i.img,alt:i.alt}})]),e("p",[t._v(t._s(i.text)),e("br"),t._v(t._s(i.text2))]),e("div",{staticClass:"blog__nav"},[e("p",[t._v("26 December,2022")]),e("router-link",{attrs:{to:"blog-details"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"52",height:"53",viewBox:"0 0 52 53",fill:"none"}},[e("circle",{attrs:{cx:"26",cy:"26.267",r:"26",fill:"#F4F0EC"}}),e("path",{attrs:{d:"M23.7714 32.9527L29.7143 26.267L23.7714 19.5813",stroke:"#292F36","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1)])})),0)]),e("PaginationComponent",{attrs:{"in-page":t.currentPage,"total-pages":t.totalPages},on:{"out-page":t.outPage}})],1)])},zt=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"blog-page__banner"},[e("div",{staticClass:"blog-page__banner-intro"},[e("h1",[t._v("Articles & News")]),e("p",[t._v("Home / Blog")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-page__post-img"},[e("img",{attrs:{src:i(576),alt:"latest post"}})])}],Xt={name:"BlogPageComponent",data(){return{currentPage:1,totalPages:9,blogs:[{img:i(454),alt:"blog1",text:"Let’s Get Solution For Building Construction",text2:"Work",data:"26 December,2022",isSelected:!1},{img:i(234),alt:"blog2",text:"Low Cost Latest Invented Interior Designing",text2:"Ideas.",data:"22 December,2022",isSelected:!0},{img:i(897),alt:"blog3",text:"Best For Any Office & Business Interior",text2:"Solution",data:"25 December,2022",isSelected:!1},{img:i(689),alt:"blog4",text:"Let’s Get Solution For Building Construction",text2:"Work",data:"26 December,2022",isSelected:!1},{img:i(719),alt:"blog5",text:"Low Cost Latest Invented Interior Designing",text2:"Ideas.",data:"22 December,2022",isSelected:!1},{img:i(447),alt:"blog6",text:"Best For Any Office & Business Interior",text2:"Solution",data:"25 December,2022",isSelected:!1}]}},mounted(){},methods:{outPage(t){this.currentPage=Number(t.page)}},components:{PaginationComponent:Lt}},Jt=Xt,$t=(0,u.Z)(Jt,Qt,zt,!1,null,"fe564882",null),te=$t.exports,ee=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"blog-details-page__banner"}),e("main",{staticClass:"blog-details-page"},[e("BlogDetails")],1)])},ie=[],re=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bdp-blog-details"},[e("div",{staticClass:"bdp-blog-list"},[e("BlogListComponent",{attrs:{tag:t.currentTag}})],1),e("div",{staticClass:"bdp-blog-tags"},[e("p",[t._v("Tags")]),t._l(t.tags,(function(i){return e("button",{key:i,staticClass:"bdp-blog-tags__btn",class:t.currentTag===i?"bdp-blog-tags__btn_active":"",on:{click:function(e){return t.setCurrentTag(i)}}},[t._v(" "+t._s(i)+" ")])}))],2)])},oe=[];function se(){return[{blogId:"101",title:"Let’s Get Solution for Building Construction Work",content:`\n            <div class="bdp-blog__img">\n              <img src="${i(282)}" alt="" />\n            </div>\n            <div class="bdp-blog__date">\n              <p>26 December,2022</p>\n              <p>Interior / Home / Decore</p>\n            </div>\n            <p>\n              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular\n              belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered\n              alteration in some form, by injecthumour, or randomised words which don't look even slightly\n              believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet\n              tend to repeat predefined chunks as necessary.\n            </p>\n            <div class="blog__quotes">\n              <p>“</p>\n              <p>The details are not the details. They make the design.</p>\n            </div>\n            `,tags:["Kitchen"]},{blogId:"102",title:"Design sprints are great",content:` <p>\n        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular\n        belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n      </p>\n      <div class="text-reference">\n        <p>1</p>\n        <p>\n          Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the\n          majority have suffered.\n        </p>\n      </div>\n      <div class="text-reference">\n        <p>2</p>\n        <p>\n          Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the\n          majority have suffered.\n        </p>\n      </div>\n      <div class="text-reference">\n        <p>3</p>\n        <p>\n          Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the\n          majority have suffered.\n        </p>\n      </div>\n      <div class="bdp-blog__img">\n        <img src="${i(382)}" alt="" />\n      </div>\n      <p>\n        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular\n        belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n      </p>`,tags:["Kitchen"]},{blogId:"103",title:"title 103",content:"content 103",tags:["Bedroom"]},{blogId:"104",title:"title 104",content:"content 104",tags:["Bedroom"]},{blogId:"105",title:"title 105",content:"content 105",tags:["Building","Bedroom"]},{blogId:"106",title:"title 106",content:"content 106",tags:["Architecture"]},{blogId:"107",title:"title 107",content:"content 107",tags:["Kitchen Planning"]},{blogId:"108",title:"title 108",content:"content 108",tags:["Kitchen Planning"]},{blogId:"109",title:"title 109",content:"content 109",tags:["Children's Room"]},{blogId:"110",title:"title 110",content:"content 110",tags:["Children's Room"]}]}function ne(){const t=["Kitchen"],e=se();for(let i=0;i<e.length;i++)e[i].tags.forEach((e=>{t.includes(e)||t.push(e)}));return t}function ae(t){return se().filter((e=>e.tags.includes(t)))}var ce=function(){var t=this,e=t._self._c;return e("div",t._l(t.showBlogs,(function(t){return e("BlogComponent",{key:t.blogId,attrs:{blog:t}})})),1)},le=[],ge=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bdp-blog"},[e("p",{staticClass:"bdp-blog__caption"},[t._v(t._s(t.blog.title))]),e("div",{staticClass:"bdp-blog__content",domProps:{innerHTML:t._s(t.blog.content)}})])},me=[],ue={name:"BlogComponent",props:{blog:{blogId:String,title:String,content:String,tags:[String]}},data(){return{currentBlog:{}}},mounted(){},methods:{}},de=ue,pe=(0,u.Z)(de,ge,me,!1,null,"4995c41d",null),he=pe.exports,be={name:"BlogListComponent",props:{tag:String},data(){return{}},components:{BlogComponent:he},computed:{showBlogs(){return ae(this.tag)}}},ve=be,_e=(0,u.Z)(ve,ce,le,!1,null,"d270e09e",null),fe=_e.exports,Ce={name:"BlogDetailsComponent",data(){return{currentTag:"",tags:[]}},components:{BlogListComponent:fe},mounted(){this.tags=ne(),this.currentTag=this.tags[0]},methods:{setCurrentTag(t){this.currentTag=t}}},Ae=Ce,je=(0,u.Z)(Ae,re,oe,!1,null,"56075364",null),xe=je.exports,we={name:"BlogDetailsPageComponent",data(){return{}},components:{BlogDetails:xe},mounted(){},methods:{}},Se=we,ye=(0,u.Z)(Se,ee,ie,!1,null,"f387c232",null),Be=ye.exports;r.ZP.use(M.ZP);const ke=[{path:"/home",name:"home",component:$},{path:"/project-details",name:"projectdetails",component:Yt},{path:"/project",name:"project",component:Mt},{path:"/blog-details*",name:"blogdetails",component:Be},{path:"/blog",name:"blog",component:te},{path:"/",name:"root",component:$}],Ie=new M.ZP({mode:"history",base:"/",routes:ke,scrollBehavior(){document.getElementById("app").scrollIntoView({behavior:"smooth"})}});var Pe=Ie;r.ZP.use(Ot.ZP);var Le=new Ot.ZP.Store({state:{projects:[{title:"Minimal Look Bedrooms",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam\n      sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi\n      fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem\n      suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id,\n      pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in\n      viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",img:"project-details-photo01.png"},{title:"Minimal Look Bedrooms 2",content:"2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam\n      sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi\n      fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem\n      suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id,\n      pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in\n      viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",img:"project-details-photo02.png"},{title:"Minimal Look Bedrooms 3",content:"3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam\n      sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi\n      fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem\n      suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id,\n      pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in\n      viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",img:"project-details-photo03.png"}],currentProjectId:0},getters:{GET_CURRENT_TITLE(t){return t.projects[t.currentProjectId].title},GET_CURRENT_CONTENT(t){return t.projects[t.currentProjectId].content},GET_CURRENT_IMAGE(t){return t.projects[t.currentProjectId].img}},mutations:{SET_CURRENT_ID(t,e){t.currentProjectId=e}},actions:{},modules:{}});r.ZP.config.productionTip=!1,new r.ZP({router:Pe,store:Le,render:function(t){return t(H)}}).$mount("#app")},303:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBzZdNTsJAGIbfb6a4xhvACYSwcmVvgCdAuEEjGpe41wRuUH8u4A1wZ6IhxBPYG8jaQD87LRIBK8zQTnk20/T3yTfvtF8JlnjxvcqBLLkAH4GoQoya2s/gihoJOTH2vXIoS6dAeBI9JhpR/u/8zEXeHruuYGpGm+1ND89FRAlIUI8ZLgzYWeTVv6w5DvdNBXYWiTMgpBcFr4cMcGDA2L+qsAyHmCc+CwQ0Gfnn7VDOxpyhhLbI6L57DSl8aKyGbdk6I7FERnkwFslbYisRGxIbRUYPF1409GGBVBG1RNXqQA7B/IvUVZO8J+xIpIqoXGT9ntjE2tTMp+QDllmrSChDK+FcZaki815iiAJYqojqJ1AQCxFVDcOeYhIVNsCOLEQEizPowBwQyG20bg8brZuqmE2rRHiGIXFGkkbX+dS4bvI1m9aPO4Pg9051HxbOkCnp0HWIK5J02zrw06qEot4ZTEJBdzDgZ2qaOhdFH8Eg7RAjfIe5CLsoGKG6cFj8pqSKSKkfrDwQ8b/oHiCI9qYixedDIcC0HyK2G6A0tP/08uIbPKiGAh1lxW4AAAAASUVORK5CYII="},753:function(t,e,i){"use strict";t.exports=i.p+"img/Photo.db482261.png"},64:function(t,e,i){"use strict";t.exports=i.p+"img/blog-details-banner.360b1063.jpg"},282:function(t,e,i){"use strict";t.exports=i.p+"img/blog-details-img01.3aa27084.png"},382:function(t,e,i){"use strict";t.exports=i.p+"img/blog-details-img02.99387557.png"},454:function(t,e,i){"use strict";t.exports=i.p+"img/blog01.cad77a23.png"},234:function(t,e,i){"use strict";t.exports=i.p+"img/blog02.4cdecb04.png"},897:function(t,e,i){"use strict";t.exports=i.p+"img/blog03.c44bc4b8.png"},689:function(t,e,i){"use strict";t.exports=i.p+"img/blog04.3ee33008.png"},719:function(t,e,i){"use strict";t.exports=i.p+"img/blog05.beed51f4.png"},447:function(t,e,i){"use strict";t.exports=i.p+"img/blog06.cce12703.png"},739:function(t,e,i){"use strict";t.exports=i.p+"img/blog_banner01.aa99d2f2.jpg"},576:function(t,e,i){"use strict";t.exports=i.p+"img/blog_latest-post.387f1513.png"},567:function(t,e,i){"use strict";t.exports=i.p+"img/project-banner.4e35b872.jpg"},153:function(t,e,i){"use strict";t.exports=i.p+"img/project-details-banner.51a9ff0c.jpg"},737:function(t,e,i){"use strict";t.exports=i.p+"img/project-details-photo01.9f7b9f02.png"},166:function(t,e,i){"use strict";t.exports=i.p+"img/project-details-photo02.3f12a393.png"},174:function(t,e,i){"use strict";t.exports=i.p+"img/project-details-photo03.1376f08b.png"},650:function(t,e,i){"use strict";t.exports=i.p+"img/project-photo01.0f376a7c.png"},271:function(t,e,i){"use strict";t.exports=i.p+"img/project-photo02.cc2ea3c4.png"},297:function(t,e,i){"use strict";t.exports=i.p+"img/project-photo03.216faaa4.png"},770:function(t,e,i){"use strict";t.exports=i.p+"img/project-photo04.6df0484f.png"},455:function(t,e,i){"use strict";t.exports=i.p+"img/project-photo05.ccec6be9.png"},638:function(t,e,i){"use strict";t.exports=i.p+"img/project-photo06.37ff3021.png"},395:function(t,e,i){"use strict";t.exports=i.p+"img/project-photo07.f36b3a80.png"},846:function(t,e,i){"use strict";t.exports=i.p+"img/project-photo08.d2c8d5b3.png"},560:function(t,e,i){"use strict";t.exports=i.p+"img/project01.292ef64d.png"},961:function(t,e,i){"use strict";t.exports=i.p+"img/project02.f736cf00.png"},860:function(t,e,i){"use strict";t.exports=i.p+"img/project03.a003cd02.png"},347:function(t,e,i){"use strict";t.exports=i.p+"img/project04.84d4a5d1.png"}},e={};function i(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,r,o,s){if(!r){var n=1/0;for(g=0;g<t.length;g++){r=t[g][0],o=t[g][1],s=t[g][2];for(var a=!0,c=0;c<r.length;c++)(!1&s||n>=s)&&Object.keys(i.O).every((function(t){return i.O[t](r[c])}))?r.splice(c--,1):(a=!1,s<n&&(n=s));if(a){t.splice(g--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var g=t.length;g>0&&t[g-1][2]>s;g--)t[g]=t[g-1];t[g]=[r,o,s]}}(),function(){i.d=function(t,e){for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,s,n=r[0],a=r[1],c=r[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(c)var g=c(i)}for(e&&e(r);l<n.length;l++)s=n[l],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(g)},r=self["webpackChunkhw_vue_14"]=self["webpackChunkhw_vue_14"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(279)}));r=i.O(r)})();
//# sourceMappingURL=app.c15a9ad9.js.map