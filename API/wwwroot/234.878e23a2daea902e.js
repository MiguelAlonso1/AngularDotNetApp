"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[234],{8234:(b,m,o)=>{o.r(m),o.d(m,{BasketModule:()=>y});var i=o(177),r=o(4187),t=o(4438),u=o(8997),d=o(7870),p=o(9692);function l(e,I){1&e&&(t.j41(0,"div")(1,"p"),t.EFF(2,"There are no items in your basket"),t.k0s()())}function k(e,I){if(1&e){const n=t.RV6();t.qex(0),t.j41(1,"div",2)(2,"div",3)(3,"app-basket-summary",4),t.bIt("addItem",function(a){t.eBV(n);const c=t.XpG();return t.Njj(c.incrementQuantity(a))})("removeItem",function(a){t.eBV(n);const c=t.XpG();return t.Njj(c.removeItem(a))}),t.k0s()(),t.j41(4,"div",3)(5,"div",5),t.nrm(6,"app-order-totals"),t.j41(7,"div",6)(8,"a",7),t.EFF(9," Proceed to checkout "),t.k0s()()()()(),t.bVm()}}const v=[{path:"",component:(()=>{class e{constructor(n){this.basketService=n}incrementQuantity(n){this.basketService.addItemToBasket(n)}removeItem(n){this.basketService.removeItemFromBasket(n.id,n.quantity)}static#t=this.\u0275fac=function(s){return new(s||e)(t.rXU(u.S))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-basket"]],decls:5,vars:6,consts:[[1,"container","mt-5"],[4,"ngIf"],[1,"container"],[1,"row"],[3,"addItem","removeItem"],[1,"col-6","offset-6"],[1,"d-grid"],["routerLink","/checkout",1,"btn","btn-outline-primary","py-2"]],template:function(s,a){1&s&&(t.j41(0,"div",0),t.DNE(1,l,3,0,"div",1),t.nI1(2,"async"),t.DNE(3,k,10,0,"ng-container",1),t.nI1(4,"async"),t.k0s()),2&s&&(t.R7$(),t.Y8G("ngIf",null===t.bMT(2,2,a.basketService.basketSource$)),t.R7$(2),t.Y8G("ngIf",t.bMT(4,4,a.basketService.basketSource$)))},dependencies:[i.bT,r.Wk,d.R,p.M,i.Jj]})}return e})()}];let f=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({imports:[r.iI.forChild(v),r.iI]})}return e})();var h=o(3887);let y=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({imports:[i.MD,f,h.G]})}return e})()}}]);