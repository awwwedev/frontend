(function(t){function e(e){for(var o,i,c=e[0],s=e[1],l=e[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},a={app:0},r=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-1654c7db":"11e2e1d7","chunk-3a79f51c":"d25fc048","chunk-4b8f9394":"ac48a57c","chunk-aa16f3c0":"0b221ff9"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-1654c7db":1,"chunk-3a79f51c":1,"chunk-4b8f9394":1,"chunk-aa16f3c0":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-1654c7db":"85227add","chunk-3a79f51c":"e38d44e6","chunk-4b8f9394":"55f47d16","chunk-aa16f3c0":"019c68b3"}[t]+".css",a=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===a)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var o=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[t],m.parentNode.removeChild(m),n(r)},m.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}a[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/frontend/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0f24":function(t,e,n){},1664:function(t,e,n){"use strict";var o=n("2b0e"),i=new o["a"];e["a"]=i},"1e5e":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAdCAYAAAC5UQwxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTEyLTA1VDE2OjE0OjM2KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMi0xN1QwMjo1OToxNiswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMi0xN1QwMjo1OToxNiswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplZGRmODU2Yi0wZTE2LWQ4NDItOWQ1MS0yOTM2MWFjOGE2YmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZWRkZjg1NmItMGUxNi1kODQyLTlkNTEtMjkzNjFhYzhhNmJiIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZWRkZjg1NmItMGUxNi1kODQyLTlkNTEtMjkzNjFhYzhhNmJiIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplZGRmODU2Yi0wZTE2LWQ4NDItOWQ1MS0yOTM2MWFjOGE2YmIiIHN0RXZ0OndoZW49IjIwMjAtMTItMDVUMTY6MTQ6MzYrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6GEx0ZAAACLUlEQVRIib3WTYhPURjH8c94mbFQappZkFIKIaRBjc2Ul8ZCYTliLGbEZpBQylvKivJWFpLkLdlIEqJIZiymKZSRtyykLGyHJjONxfnfunO6//nfO2PmV7f+z3Oec77n3v9zzvNUDQ0NmUhNgYbrb0eKaUQz5mASfuA5nhaF9bQuC8AyWoiLWJsxdhg92IOuItBJZfxH0VsGlqgBnbg8VuA5nCywxk7cGy2wFXsj3y8cwXqswT58i2I243hRYDXORuN3UI9TeCYky3nMxZko9oSQWLmA09CG2tTYQ7SMMPcgLkW+jrzAZmyJxvZXmoxD+J2yN+YFNmBpyt+FTzmAfbifshegLg9wpvBfJcoDS/QhsuszoyLgAAZT/uoCwJrIHsyMioBf8T3lX1kA2Jj63R+tUxbYafgVNU+OBMAS4Wwm6safPMDXuB2NXcWMCsCbkX2jQvywg/+oBE5Ujy9YnTFvPj4antl/cbcSMK4W7XifsuuEz92LF0JCNGJFxlpTheqyvQiwFxvwOPIvKj2VtA2TsbVcQFa1eILFQqGtpD7ELUMLrhUBEt50trDjV0K6JxoQim87puNBxvwduJK18EgVH26VnprSBpIWI31/bhIqSVys20qb2512lnvDWP3C5fA5giVah5cZ/l24MBpgHjUZfqwSdeD0eAAJZ7Y7w39A6Br+OxBW4U2Gf9Z4AWE53qXsn0pXZ6UsHYuahF6oFseEhFM10a3+eH3SsvoH8WppK+wTC4UAAAAASUVORK5CYII="},2259:function(t,e,n){"use strict";n("812e")},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.4900b663.png"},6187:function(t,e,n){"use strict";n("eb26")},6621:function(t){t.exports=JSON.parse('{"realty":[{"id":1,"img_path":"/frontend/img/objects/town.png","name":"Lorem ipsum dolor sit amet","area":19.8,"price":550,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eos libero minima porro quod! Accusamus animi consectetur dicta doloremque doloribus dolorum, fugit id laboriosam, nemo pariatur quo reprehenderit unde veniam.","images":["/frontend/img/objects/town.png","/frontend/img/objects/town1.png","/frontend/img/objects/town2.png","/frontend/img/objects/town3.png","/frontend/img/objects/town4.png"]},{"id":2,"img_path":"/frontend/img/objects/town1.png","name":"Lorem ipsum dolor sit amet","area":30,"price":230,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eos libero minima porro quod! Accusamus animi consectetur dicta doloremque doloribus dolorum, fugit id laboriosam, nemo pariatur quo reprehenderit unde veniam.","images":["/frontend/img/objects/town.png","/frontend/img/objects/town1.png","/frontend/img/objects/town2.png","/frontend/img/objects/town3.png","/frontend/img/objects/town4.png"]},{"id":3,"img_path":"/frontend/img/objects/town2.png","name":"Lorem ipsum dolor sit amet","area":10,"price":450,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eos libero minima porro quod! Accusamus animi consectetur dicta doloremque doloribus dolorum, fugit id laboriosam, nemo pariatur quo reprehenderit unde veniam.","images":["/frontend/img/objects/town.png","/frontend/img/objects/town1.png","/frontend/img/objects/town2.png","/frontend/img/objects/town3.png","/frontend/img/objects/town4.png"]},{"id":4,"img_path":"/frontend/img/objects/town3.png","name":"Lorem ipsum dolor sit amet","area":15.12,"price":112,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eos libero minima porro quod! Accusamus animi consectetur dicta doloremque doloribus dolorum, fugit id laboriosam, nemo pariatur quo reprehenderit unde veniam.","images":["/frontend/img/objects/town.png","/frontend/img/objects/town1.png","/frontend/img/objects/town2.png","/frontend/img/objects/town3.png","/frontend/img/objects/town4.png"]},{"id":5,"img_path":"/frontend/img/objects/town4.png","name":"Lorem ipsum dolor sit amet","area":22.3,"price":760,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eos libero minima porro quod! Accusamus animi consectetur dicta doloremque doloribus dolorum, fugit id laboriosam, nemo pariatur quo reprehenderit unde veniam.","images":["/frontend/img/objects/town.png","/frontend/img/objects/town1.png","/frontend/img/objects/town2.png","/frontend/img/objects/town3.png","/frontend/img/objects/town4.png"]},{"id":6,"img_path":"/frontend/img/objects/town.png","name":"Lorem ipsum dolor sit amet","area":17.86,"price":364.34,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eos libero minima porro quod! Accusamus animi consectetur dicta doloremque doloribus dolorum, fugit id laboriosam, nemo pariatur quo reprehenderit unde veniam.","images":["/frontend/img/objects/town.png","/frontend/img/objects/town1.png","/frontend/img/objects/town2.png","/frontend/img/objects/town3.png","/frontend/img/objects/town4.png"]},{"id":7,"img_path":"/frontend/img/objects/town1.png","name":"Lorem ipsum dolor sit amet","area":11.12,"price":412,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eos libero minima porro quod! Accusamus animi consectetur dicta doloremque doloribus dolorum, fugit id laboriosam, nemo pariatur quo reprehenderit unde veniam.","images":["/frontend/img/objects/town.png","/frontend/img/objects/town1.png","/frontend/img/objects/town2.png","/frontend/img/objects/town3.png","/frontend/img/objects/town4.png"]},{"id":8,"img_path":"/frontend/img/objects/town2.png","name":"Lorem ipsum dolor sit amet","area":33.2,"price":214,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eos libero minima porro quod! Accusamus animi consectetur dicta doloremque doloribus dolorum, fugit id laboriosam, nemo pariatur quo reprehenderit unde veniam.","images":["/frontend/img/objects/town.png","/frontend/img/objects/town1.png","/frontend/img/objects/town2.png","/frontend/img/objects/town3.png","/frontend/img/objects/town4.png"]}],"news":[{"photo":"/frontend/img/objects/town.png","header":"Как правильно составить обращение","content":"По данным регионального управления Росстата, граждане довольно активно обращаются в органы государственной власти, местного самоуправления и к их должностным лицам. Подавляющее большинство составляют обращения о нарушениях прав граждан в сферах трудового, жилищного законодательства, ЖКХ, здравоохранения, образования, по пенсионным вопросам, на нарушения земельного законодательства, прав малого и среднего бизнеса."},{"photo":"/frontend/img/objects/town1.png","header":"Как правильно составить обращение","content":"По данным регионального управления Росстата, граждане довольно активно обращаются в органы государственной власти, местного самоуправления и к их должностным лицам. Подавляющее большинство составляют обращения о нарушениях прав граждан в сферах трудового, жилищного законодательства, ЖКХ, здравоохранения, образования, по пенсионным вопросам, на нарушения земельного законодательства, прав малого и среднего бизнеса."},{"photo":"/frontend/img/objects/town2.png","header":"Как правильно составить обращение","content":"По данным регионального управления Росстата, граждане довольно активно обращаются в органы государственной власти, местного самоуправления и к их должностным лицам. Подавляющее большинство составляют обращения о нарушениях прав граждан в сферах трудового, жилищного законодательства, ЖКХ, здравоохранения, образования, по пенсионным вопросам, на нарушения земельного законодательства, прав малого и среднего бизнеса."},{"photo":"/frontend/img/objects/town3.png","header":"Как правильно составить обращение","content":"По данным регионального управления Росстата, граждане довольно активно обращаются в органы государственной власти, местного самоуправления и к их должностным лицам. Подавляющее большинство составляют обращения о нарушениях прав граждан в сферах трудового, жилищного законодательства, ЖКХ, здравоохранения, образования, по пенсионным вопросам, на нарушения земельного законодательства, прав малого и среднего бизнеса."},{"photo":"/frontend/img/objects/town4.png","header":"Как правильно составить обращение","content":"По данным регионального управления Росстата, граждане довольно активно обращаются в органы государственной власти, местного самоуправления и к их должностным лицам. Подавляющее большинство составляют обращения о нарушениях прав граждан в сферах трудового, жилищного законодательства, ЖКХ, здравоохранения, образования, по пенсионным вопросам, на нарушения земельного законодательства, прав малого и среднего бизнеса."}],"sliderSlides":[{"image":"/frontend/img/objects/town.png","content":"Производственные помещения, цеха, бизнес центр и много других дополнительных зданий и  сооружений в совокупности создают технопарк со всей инфраструктурой.","header":"Аренда офисов и производсвенных помещений"},{"image":"/frontend/img/objects/town.png","content":"Производственные помещения, цеха, бизнес центр и много других дополнительных зданий и  сооружений в совокупности создают технопарк со всей инфраструктурой.","header":"Аренда офисов и производсвенных помещений"},{"image":"/frontend/img/objects/town.png","content":"Производственные помещения, цеха, бизнес центр и много других дополнительных зданий и  сооружений в совокупности создают технопарк со всей инфраструктурой.","header":"Аренда офисов и производсвенных помещений"},{"image":"/frontend/img/objects/town.png","content":"Производственные помещения, цеха, бизнес центр и много других дополнительных зданий и  сооружений в совокупности создают технопарк со всей инфраструктурой.","header":"Аренда офисов и производсвенных помещений"},{"image":"/frontend/img/objects/town.png","content":"Производственные помещения, цеха, бизнес центр и много других дополнительных зданий и  сооружений в совокупности создают технопарк со всей инфраструктурой.","header":"Аренда офисов и производсвенных помещений"}],"contacts":[{"id":1,"header":"Менеджер проекта","content":"+7(978) 801-43-83","type":"phone","is_rent_depart":false},{"id":2,"header":"email","content":"elena@sferos.com","type":"email","is_rent_depart":false},{"id":3,"header":"email","content":"irina@sferos.com","type":"email","is_rent_depart":false},{"id":4,"header":"","content":"+7 (978) 734-58-55","type":"phone","is_rent_depart":true},{"id":5,"header":"","content":"+7 (978) 268-72-55","type":"phone","is_rent_depart":true},{"id":6,"header":"","content":"+7 (978) 734-58-99","type":"phone","is_rent_depart":true},{"id":7,"header":"","content":"+7 (918) 473-08-39","type":"phone","is_rent_depart":true}],"realtyType":[{"id":1,"name":"Ангары"},{"id":2,"name":"Офисы"},{"id":4,"name":"Офисные блоки"},{"id":3,"name":"Склады"},{"id":5,"name":"Офисные блоки"}]}')},"672e":function(t,e,n){},"6bcd":function(t,e,n){},7698:function(t,e,n){"use strict";n("0f24")},"812e":function(t,e,n){},8579:function(t,e,n){"use strict";n("6bcd")},"886b":function(t,e,n){},"8ccb":function(t,e,n){},aa01:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABRCAYAAABBuPE1AAAFFElEQVR4nO2cTWwbRRTH//vhjziundB8tSFtqVoJIYHUguASCalHQKKcuSBxggMXKk4ceueE4MQFFc6ISgikCpVL6YEDnFqEqjSkgZC2+ayd+Gu9M+hNnCa4Xm/WfsQ79vwkR4qyu975eXbevHnjWFLKzwC8DcCHoRNcAF/Qj+MARo3CrpiyARQ0bkBcKNqDboALI5IJI5IJI5IJI5IJI5IJI5IJI5IJI5IJI5IJI5IJI5IJI5IJI5IJI5IJI5IJty9acUCKNR9rlTrKnkBNCHi+hC8lLFjqd0gAVtO1JFCuCzw3lsF0Nhn4Rn0v8sZSAdfvPcLvqyUsbdVQqPqo+gJ1sSPRlzvuhJSB1/hnvYJLszP45NVTgcf0rcgf5jfw1e0VXL+3iS3PRz7pIpu0kbBtJB0LKceGZe11wOaOuJ/NYR+21e6IPhX53o/z+PLWAww5Nk7mUkg4FkRwhwvFtS0k7AESSY/rW1f/wPfzG3hhLPNYYDcSD0pfiXz32pyS+NJkVo15hyFwl76Z/ly5/RBf31rBuYlhFUQO0aGiL0Q+KHn4+MYiTo+kETKU/W/0hcjPf1tWMo8OuYf6OO9He5EblTq+ubOGZ3JpFWx6hfYiv7u7jj83K8ilnJ7eh/ZR+5flLaRcG7JNZnIQ6Oyga1DwCuvtWoukpt3drCCfdjuK0jTR3vZ8LBVr6nzKeKwWyfZ2oYaq38ciH5Y83N+uIeNGD9UkcaXkqVz7necncH4ii7EhF1ZTKkgTqZIncH4y2/56ke8gRqyXPWx7Amkn+lC/VfPhCYkrr53FhRP5rhuldbChx80XEiHrCU9Ahy8WqvjgxWMsEqG7SNHhedQTaVx9/TTfRmWtRVJvFGphNhq0HjmRSWBsKMF2L3r3SImOojWdRxE6afM1X2uRnabVstFwzrxca5HdTMFll+c3o7VImgtSCaB3GfYeWouk6WNcGqC1SCqPCpUjRztvN23OMy50xD6zmX9UwdxGBZlE4zNv1J4p4t5c2vmulRsxamRcG9W6xKe/LmMk5bQdGmjBolyXePPMKGaOpAKPi73ID39awNU7qzie+28jdsfGqczOXDBKp0y7thJ0+eZi6EIw/bm4XoZ98Vm8f24q8Dgtcu3xbBLjTZNnaqDTyA2jBpvdSTyVJlptrmh+nwULmBxuP3mPvcihhK2EOQGPb7cRO2xQEEIik3RwbDh4uwp0CDZUmO9yzbYraJltOOFgPNO+R8ZeZK/niLS5Kp908FS6/cNrtvWFQDvWqB40YkR2R82XGEm5cEIGUyMyhJovVL08jNiLjLr6zU1NyNDxETqI9EVvZVKwCxsfoYPIav3JggL3Elg7aOo1mgoXGfsJOW1Jub9WUiVR7KXaqpdmkw6eziZVDSYKllo5svBXoaqqkC1n5Y3V9yLVzQ+wuBF7kZdnZ/DGmVHkU65q765IWqj4+e8iri1sHGgM2w99JFtVHxfPHsWJXAqtNgHSe1R8qaL1hZPhlcbYi5ydzqlXK16eOoJv51aRF05gCtkKKpptVuv46JVpnMoFr+hEQevpD8mgzQGdbldZK3ts96L3BgFBX/PovAjGuQtQ+ypij6eZjzGZDRNGJBNGJBNGJBNGJBMDK9JsWWHCtSz14mIgRe6Uckkm3zXNo82ECTZMGJFMGJFMGJFMGJFMGJFMGJFMGJFMDKRISmjqUsJj3C9IItt/f7ZPYf5/QFkqx65SHXzQRLLWe4DVfwG3P5/btc5MvgAAAABJRU5ErkJggg=="},c7ec:function(t,e){t.exports="data:image/png;base64,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"},ca9a:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n("d4ec"),i=n("bee2"),a=n("262e"),r=n("2caf"),c=n("9ab4"),s=n("1157"),l=n.n(s),u=n("60a3"),d=function(t){Object(a["a"])(n,t);var e=Object(r["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"scrollTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;setTimeout((function(){var n,o,i=l()([document.documentElement,document.body]);t instanceof HTMLElement?n=null===(o=l()(t).offset())||void 0===o?void 0:o.top:n=t;i.stop().animate({scrollTop:n+e},{duration:2e3})}),500)}}]),n}(Object(u["c"])());d=Object(c["a"])([u["a"]],d)},cd49:function(t,e,n){"use strict";n.r(e);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main"},[n("NavBar"),n("Header"),n("router-view",{staticClass:"main__view"}),n("Footer")],1)},a=[],r=n("d4ec"),c=n("262e"),s=n("2caf"),l=n("9ab4"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"header__container container container_big"},[n("router-link",{attrs:{to:{name:"home"}}},[n("ibg",{staticClass:"header__logo",attrs:{src:t.logoPng}})],1),n("Burger",{staticClass:"header__burger",on:{click:t.handleShowMenu}}),t.isXSM?t._e():n("nav",{staticClass:"header__nav nav"},[n("NavLinks",{staticClass:"nav__links",scopedSlots:t._u([{key:"link",fn:function(e){var o=e.link;return[o.isLink?n("router-link",{staticClass:"nav__link",attrs:{to:{name:o.routeName}}},[t._v(" "+t._s(o.displayName)+" ")]):n("span",{staticClass:"cursor-pointer nav__link"},[t._v(t._s(o.displayName))])]}}],null,!1,264504899)})],1),t.isXSM?t._e():n("Search",{staticClass:"header__search"})],1)])},d=[],m=n("5530"),p=n("bee2"),f=n("60a3"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"burger",on:{click:function(e){return t.$emit("click")}}},[n("span")])},b=[],g=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(r["a"])(this,n),e.apply(this,arguments)}return n}(f["f"]);g=Object(l["a"])([Object(f["a"])({})],g);var v=g,w=v,j=(n("fe1e"),n("2877")),y=Object(j["a"])(w,h,b,!1,null,"51908b93",null),k=y.exports,A=n("4ffd"),O=n.n(A),I=n("1664"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.links,(function(e,o){return n("li",{key:o,on:{click:function(n){return t.onClickNavLink(e.id)}}},[t._t("link",[e.isLink?n("router-link",{attrs:{to:{name:e.routeName}}},[t._v(" "+t._s(e.displayName)+" ")]):n("span",{staticClass:"cursor-pointer"},[t._v(t._s(e.displayName))])],{link:e})],2)})),0)},_=[],R=(n("b0c0"),[{displayName:"О технопарке",routeName:"home",id:1},{displayName:"Аренда",routeName:"catalog",id:2,isLink:!0},{displayName:"Новости",routeName:"index",id:3},{displayName:"Контакты",routeName:"index",id:4}]),S={data:function(){return{links:R}}},W=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(r["a"])(this,n),e.apply(this,arguments)}return Object(p["a"])(n,[{key:"onClickNavLink",value:function(t){var e=this,n="home"===this.$route.name;3===t?n?I["a"].$emit("scroll-to-news"):this.goToHome().then((function(){e.$nextTick((function(){I["a"].$emit("scroll-to-news")}))})):1===t?n?I["a"].$emit("scroll-to-info"):this.goToHome():4===t&&(n?I["a"].$emit("scroll-to-contacts"):this.goToHome().then((function(){e.$nextTick((function(){I["a"].$emit("scroll-to-contacts")}))})))}},{key:"goToHome",value:function(){return this.$router.push({name:"home"})}}]),n}(f["f"]);W=Object(l["a"])([Object(f["a"])({mixins:[S]})],W);var L=W,E=L,J=Object(j["a"])(E,C,_,!1,null,"aa5ae5e2",null),N=J.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("input",{ref:"input",staticClass:"search__input input_null",style:{width:this.alwaysOpen?t.fullSize?"85%":"200px":0},attrs:{type:"text",id:"search"},on:{blur:function(e){t.showInput=!1}}}),n("span",{ref:"placeholder",staticClass:"search__placeholder cursor-pointer",style:{width:this.alwaysOpen?0:"60px"},on:{click:function(e){t.showInput=!0}}},[t._v("Поиск")]),n("ibg",{staticClass:"search__icon cursor-pointer",attrs:{src:t.searchPng}})],1)},M=[],Z=n("1e5e"),B=n.n(Z),x=n("1157"),U=n.n(x),z=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(r["a"])(this,n),t=e.apply(this,arguments),t.showInput=!1,t}return Object(p["a"])(n,[{key:"watchShowInput",value:function(t){if(!this.alwaysOpen){var e=U()(this.$refs["input"]),n=U()(this.$refs["placeholder"]);t?n.animate({width:0},{duration:"fast",complete:function(){e.animate({width:200},{duration:"fast",done:function(){e.trigger("focus")}})}}):e.animate({width:0},{duration:"fast",complete:function(){n.animate({width:60})}})}}}]),n}(f["f"]);Object(l["a"])([Object(f["d"])({type:Boolean,default:function(){return!1}})],z.prototype,"alwaysOpen",void 0),Object(l["a"])([Object(f["d"])({type:Boolean,default:function(){return!1}})],z.prototype,"fullSize",void 0),Object(l["a"])([Object(f["g"])("showInput")],z.prototype,"watchShowInput",null),z=Object(l["a"])([Object(f["a"])({data:function(){return{searchPng:B.a}}})],z);var F=z,T=F,Q=(n("8579"),Object(j["a"])(T,G,M,!1,null,"2faf3e8f",null)),D=Q.exports,q=n("2f62"),Y=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(r["a"])(this,n),e.apply(this,arguments)}return Object(p["a"])(n,[{key:"handleShowMenu",value:function(){I["a"].$emit("nav-bar-show")}},{key:"isXSM",get:function(){return this.$windowWidth<=500}}]),n}(f["f"]);Y=Object(l["a"])([Object(f["a"])({components:{Search:D,NavLinks:N,Burger:k},data:function(){return{logoPng:O.a}},computed:Object(m["a"])({},Object(q["b"])("common",{$windowWidth:"windowWidth"}))})],Y);var P=Y,V=P,H=(n("7698"),Object(j["a"])(V,u,d,!1,null,"0bab4fbe",null)),K=H.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"footer",staticClass:"footer"},[n("div",{staticClass:"footer__container container"},[n("div",{staticClass:"footer__flex-wrapper flex-wrapper"},[n("div",{staticClass:"footer__col footer__col_first"},[t._m(0),n("ul",{staticClass:"contacts-list"},[t._l(t.contacts,(function(e,o){return n("li",{key:o,staticClass:"contacts-list__item"},[n("span",{staticClass:"contacts-list__name"},[t._v(t._s(e.header))]),n("span",{staticClass:"contacts-list__dote"},[t._v(":")]),n("a",{staticClass:"contacts-list__value link link_white",attrs:{href:e.content.includes("@")?"mail-to:"+e.content:"tel:"+e.content}},[t._v(t._s(e.content))])])})),t.emails.length?n("li",{staticClass:"contacts-list__item"},[n("span",{staticClass:"contacts-list__name"},[t._v("e-mail")]),n("span",{staticClass:"contacts-list__dote"},[t._v(":")]),t._l(t.emails,(function(e,o){return n("a",{key:o,ref:"emails",refInFor:!0,staticClass:"contacts-list__value link link_white contacts-list__value_email",attrs:{href:"mail-to:"+e}},[t._v(t._s(e))])}))],2):t._e()],2)]),n("div",{staticClass:"footer__col footer__col_second"},[n("div",{staticClass:"social-link"},[n("ibg",{attrs:{src:t.fImg}}),n("a",{staticClass:"stretched-link",attrs:{href:""}})],1),n("div",{staticClass:"social-link"},[n("ibg",{attrs:{src:t.vkImg}}),n("a",{staticClass:"stretched-link",attrs:{href:""}})],1)]),n("div",{staticClass:"footer__col footer__col_third"},[n("div",{staticClass:"departments"},[n("p",{staticClass:"footer__departments"},[t._v("Отдел аренды:")]),n("ul",{staticClass:"departments__list"},t._l(t.rentDepartContacts,(function(e,o){return n("li",{key:o,staticClass:"departments__item"},t._l(e,(function(e,o){return n("a",{key:o,staticClass:"link link_white",attrs:{href:"tel:"+e.content}},[t._v(t._s(e.content))])})),0)})),0)])])])])])},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"footer__address"},[n("a",{staticClass:"link link_white",attrs:{href:"https://yandex.ru/maps/959/sevastopol/?ll=33.482039%2C44.582682&mode=search&oid=243991293869&ol=biz&z=17.92",target:"_blank"}},[t._v("г. Севастополь, ул. Фиолентовское шоссе, 1/2")])])}],tt=(n("4160"),n("caad"),n("fb6a"),n("2532"),n("159b"),n("c7ec")),et=n.n(tt),nt=n("aa01"),ot=n.n(nt),it=n("ca9a"),at=n("6621"),rt=function(){function t(){Object(r["a"])(this,t)}return Object(p["a"])(t,null,[{key:"getList",value:function(t){return new Promise((function(t){t({data:at.contacts})}))}}]),t}(),ct=rt,st=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(r["a"])(this,n),t=e.apply(this,arguments),t.contacts=[],t.rentDepartContacts=[],t.emails=[],t}return Object(p["a"])(n,[{key:"created",value:function(){var t=this;I["a"].$on("scroll-to-contacts",(function(){t.scrollTo(t.$refs["footer"])})),ct.getList().then((function(e){var n=0,o=[];e.data.forEach((function(e){var i;e.is_rent_depart?(o.push(e),2==++n&&(n=0,t.rentDepartContacts.push(o),o=[])):(null===(i=e.content)||void 0===i?void 0:i.includes("@"))?t.emails.push(e.content):t.contacts.push(e)}))}))}},{key:"watchEmails",value:function(){var t=this;this.$nextTick((function(){U()(t.refEmails.slice(0,t.refEmails.length-1)).after(U()("<span>",{text:","}).css("margin-right",5))}))}},{key:"beforeDestroy",value:function(){I["a"].$off("scroll-to-contacts")}}]),n}(Object(f["c"])(it["a"]));Object(l["a"])([Object(f["e"])("emails")],st.prototype,"refEmails",void 0),Object(l["a"])([Object(f["g"])("emails")],st.prototype,"watchEmails",null),st=Object(l["a"])([Object(f["a"])({data:function(){return{vkImg:et.a,fImg:ot.a}}})],st);var lt=st,ut=lt,dt=(n("dc0c"),Object(j["a"])(ut,X,$,!1,null,"2551477a",null)),mt=dt.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"nav-bar",direction:"1500"}},[t.visible?n("aside",{ref:"nav-bar",staticClass:"nav-bar",on:{click:t.handleClick}},[n("div",{ref:"body",staticClass:"nav-bar__body"},[n("div",{staticClass:"nav-bar__header header"},[n("div",{staticClass:"flex-wrapper flex-wrapper_J-SB"},[n("ibg",{staticClass:"header__logo",attrs:{src:t.logoImg}}),n("span",{staticClass:"header__cross cross",on:{click:t.handleClose}})],1)]),t.$windowWidth<=500?n("Search",{staticClass:"nav-bar__search",attrs:{"always-open":"","full-size":""}}):t._e(),n("NavLinks",{staticClass:"nav-bar__links-list",on:{click:t.handleClose},scopedSlots:t._u([{key:"link",fn:function(e){var o=e.link;return[o.isLink?n("router-link",{staticClass:"nav-bar__link",attrs:{to:{name:o.routeName}}},[t._v(" "+t._s(o.displayName)+" ")]):n("span",{staticClass:"cursor-pointer nav-bar__link",on:{click:t.handleClose}},[t._v(t._s(o.displayName))])]}}],null,!1,2288157370)})],1)]):t._e()])},ft=[],ht=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(r["a"])(this,n),t=e.apply(this,arguments),t.visible=!1,t}return Object(p["a"])(n,[{key:"mounted",value:function(){var t=this;I["a"].$on("nav-bar-hide",(function(){t.hide()})),I["a"].$on("nav-bar-show",(function(){t.show()}))}},{key:"show",value:function(){this.visible=!0}},{key:"hide",value:function(){this.visible=!1}},{key:"handleClick",value:function(t){var e=U()(this.$refs["nav-bar"]);e.get(0)===t.target&&this.hide()}},{key:"handleClose",value:function(){this.hide()}},{key:"watchShow",value:function(t){t?U()("body").css("overflow","hidden"):U()("body").css("overflow","")}},{key:"watchRoute",value:function(){this.hide()}}]),n}(f["f"]);Object(l["a"])([Object(f["g"])("visible")],ht.prototype,"watchShow",null),Object(l["a"])([Object(f["g"])("$route")],ht.prototype,"watchRoute",null),ht=Object(l["a"])([Object(f["a"])({components:{Search:D,NavLinks:N},mixins:[S],data:function(){return{logoImg:O.a}},computed:Object(m["a"])({},Object(q["b"])("common",{$windowWidth:"windowWidth"}))})],ht);var bt=ht,gt=bt,vt=(n("6187"),Object(j["a"])(gt,pt,ft,!1,null,"91847f26",null)),wt=vt.exports,jt=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(r["a"])(this,n),e.apply(this,arguments)}return n}(f["f"]);jt=Object(l["a"])([Object(f["a"])({components:{NavBar:wt,Footer:mt,Header:K},metaInfo:{title:"Аренда помещений Севастополь",titleTemplate:"%s | Ассоциация Технопарк Маяк",meta:[{vmid:"keywords",name:"keywords",content:"Технопарк Маяк, Ассоциация Технопарк Маяк"}]}})],jt);var yt=jt,kt=yt,At=(n("2259"),Object(j["a"])(kt,i,a,!1,null,"1d0c71a4",null)),Ot=At.exports,It=n("8c4f"),Ct=[{path:"/",name:"home",component:function(){return n.e("chunk-3a79f51c").then(n.bind(null,"8d73"))}},{path:"/catalog",name:"catalog",component:function(){return n.e("chunk-1654c7db").then(n.bind(null,"3b3d"))}},{path:"/view-realty/:category/:id",name:"viewRealty",component:function(){return n.e("chunk-aa16f3c0").then(n.bind(null,"5535"))}}],_t=Ct;o["a"].use(It["a"]);var Rt=new It["a"]({mode:"history",base:"/frontend/",routes:_t,scrollBehavior:function(){return{y:0}}}),St=Rt,Wt=n("6fc5"),Lt=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(r["a"])(this,n),t=e.apply(this,arguments),t._windowWidth=0,t}return Object(p["a"])(n,[{key:"setWindowWidth",value:function(){this._windowWidth=window.innerWidth}},{key:"windowWidth",get:function(){return this._windowWidth}}]),n}(Wt["c"]);Object(l["a"])([Wt["b"]],Lt.prototype,"setWindowWidth",null),Lt=Object(l["a"])([Object(Wt["a"])({name:"common",namespaced:!0})],Lt);var Et=Lt,Jt=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(r["a"])(this,n),t=e.apply(this,arguments),t._queryParams={},t}return Object(p["a"])(n,[{key:"setQueryParams",value:function(t){this._queryParams=t}},{key:"queryParams",get:function(){return this._queryParams}}]),n}(Wt["c"]);Object(l["a"])([Wt["b"]],Jt.prototype,"setQueryParams",null),Jt=Object(l["a"])([Object(Wt["a"])({name:"QueryParams",namespaced:!0})],Jt);var Nt=Jt;o["a"].use(q["a"]);var Gt=new q["a"].Store({state:{},mutations:{},actions:{init:function(){var t=this;addEventListener("resize",(function(){t.commit("common/setWindowWidth")})),this.commit("common/setWindowWidth")}},modules:{common:Et,queryParams:Nt}}),Mt=(n("672e"),n("b725"),n("2bb9"),n("0086")),Zt=n.n(Mt),Bt=n("58ca");n("4ec9"),n("3ca3"),n("ddb0");o["a"].directive("scroll-to",{inserted:function(t,e){var n=!1,o=function o(){window.scrollY+window.innerHeight>U()(t).position().top&&(e.value(t),n=!0),n&&window.removeEventListener("scroll",o)};window.addEventListener("scroll",o)}});var xt=new Map,Ut=!1,zt=function t(){xt.forEach((function(e,n){var o,i=U()(n);window.scrollY+window.innerHeight>(null===(o=i.offset())||void 0===o?void 0:o.top)&&(U()(n).addClass(e),xt.delete(n),xt.size||(removeEventListener("scroll",t),Ut=!1))}))};o["a"].directive("animate-to-on-scroll",{bind:function(t,e){var n,o,i,a,r=U()(t);(null===(n=e.arg)||void 0===n?void 0:n.includes("right"))?r.addClass("anim-slide-from-right"):(null===(o=e.arg)||void 0===o?void 0:o.includes("left"))?r.addClass("anim-slide-from-left"):(null===(i=e.arg)||void 0===i?void 0:i.includes("top"))?r.addClass("anim-slide-from-top"):(null===(a=e.arg)||void 0===a?void 0:a.includes("bot"))&&r.addClass("anim-slide-from-bot"),r.addClass("anim-slide"),xt.set(t,"anim-slide-from_end"),Ut||(Ut=!0,addEventListener("scroll",zt))}}),o["a"].use(Bt["a"]),o["a"].use(Zt.a),o["a"].config.productionTip=!1,o["a"].component("ibg",(function(){return n.e("chunk-4b8f9394").then(n.bind(null,"015c"))})),Gt.dispatch("init"),new o["a"]({router:St,store:Gt,render:function(t){return t(Ot)}}).$mount("#app")},dc0c:function(t,e,n){"use strict";n("8ccb")},eb26:function(t,e,n){},fe1e:function(t,e,n){"use strict";n("886b")}});
//# sourceMappingURL=app.cd6c9d0a.js.map