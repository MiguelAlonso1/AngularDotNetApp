"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[484],{8484:(O,a,i)=>{i.r(a),i.d(a,{OrdersModule:()=>j});var n=i(177),d=i(4187),t=i(4438),h=i(5312),p=i(1626);let l=(()=>{class r{constructor(e){this.http=e,this.baseUrl=h.c.apiUrl}getOrdersForUser(){return this.http.get(this.baseUrl+"orders")}getOrderDetailed(e){return this.http.get(this.baseUrl+"orders/"+e)}static#t=this.\u0275fac=function(s){return new(s||r)(t.KVO(p.Qq))};static#e=this.\u0275prov=t.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var u=i(6722);function F(r,c){if(1&r&&(t.j41(0,"tr")(1,"th",16)(2,"div",17),t.nrm(3,"img",18),t.j41(4,"div",19)(5,"h5",20),t.EFF(6),t.k0s()()()(),t.j41(7,"td",21)(8,"strong"),t.EFF(9),t.nI1(10,"currency"),t.k0s()(),t.j41(11,"td",21)(12,"span",22),t.EFF(13),t.k0s()(),t.j41(14,"td",21)(15,"strong"),t.EFF(16),t.nI1(17,"currency"),t.k0s()()()),2&r){const e=c.$implicit;t.R7$(3),t.FS9("src",e.pictureUrl,t.B4B),t.FS9("alt",e.productName),t.R7$(3),t.SpI(" ",e.productName," "),t.R7$(3),t.JRh(t.bMT(10,6,e.price)),t.R7$(4),t.JRh(e.quantity),t.R7$(3),t.JRh(t.bMT(17,8,e.price*e.quantity))}}function m(r,c){if(1&r&&(t.j41(0,"div",2)(1,"div",3)(2,"div")(3,"div",4)(4,"table",5)(5,"thead")(6,"tr")(7,"th",6)(8,"div",7),t.EFF(9,"Product"),t.k0s()(),t.j41(10,"th",6)(11,"div",8),t.EFF(12,"Price"),t.k0s()(),t.j41(13,"th",6)(14,"div",8),t.EFF(15,"Quantity"),t.k0s()(),t.j41(16,"th",6)(17,"div",8),t.EFF(18,"Total"),t.k0s()()()(),t.j41(19,"tbody"),t.DNE(20,F,18,10,"tr",9),t.k0s()()()()(),t.j41(21,"div",10)(22,"div",11),t.EFF(23,"Order summary"),t.k0s(),t.j41(24,"div",12)(25,"ul",13)(26,"li",14)(27,"strong",15),t.EFF(28,"Order subtotal"),t.k0s(),t.j41(29,"strong"),t.EFF(30),t.nI1(31,"currency"),t.k0s()(),t.j41(32,"li",14)(33,"strong",15),t.EFF(34,"Shipping and handling"),t.k0s(),t.j41(35,"strong"),t.EFF(36),t.nI1(37,"currency"),t.k0s()(),t.j41(38,"li",14)(39,"strong",15),t.EFF(40,"Total"),t.k0s(),t.j41(41,"strong"),t.EFF(42),t.nI1(43,"currency"),t.k0s()()()()()()),2&r){const e=t.XpG();t.R7$(20),t.Y8G("ngForOf",e.order.orderItems),t.R7$(10),t.JRh(t.bMT(31,4,e.order.subtotal)),t.R7$(6),t.JRh(t.bMT(37,6,e.order.shippingPrice)),t.R7$(6),t.JRh(t.bMT(43,8,e.order.total))}}let g=(()=>{class r{constructor(e,s,o){this.orderService=e,this.route=s,this.bcService=o,this.bcService.set("@OrderDetailed"," ")}ngOnInit(){const e=this.route.snapshot.paramMap.get("id");e&&this.orderService.getOrderDetailed(+e).subscribe({next:s=>{this.order=s,this.bcService.set("@OrderDetailed",`Order# ${s.id} - ${s.status}`)}})}static#t=this.\u0275fac=function(s){return new(s||r)(t.rXU(l),t.rXU(d.nX),t.rXU(u.bA))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-order-detailed"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-8"],[1,"table-responsive"],[1,"table"],["scope","col",1,"border-0","bg-light"],[1,"p-2","text-uppercase"],[1,"py-2","text-uppercase"],[4,"ngFor","ngForOf"],[1,"col-4"],[1,"bg-light","px-4","py-3","text-uppercase","font-weight-bold"],[1,"p-4"],[1,"list-unstyled","mb-1"],[1,"d-flex","justify-content-between","py-3","border-bottom"],[1,"text-muted"],["scope","row"],[1,"p-2"],[1,"img-fluid",2,"max-height","50px",3,"src","alt"],[1,"ml-3","d-inline-block","align-middle"],[1,"mb-0"],[1,"align-middle"],[1,"font-weight-bold","px-2"]],template:function(s,o){1&s&&(t.j41(0,"div",0),t.DNE(1,m,44,10,"div",1),t.k0s()),2&s&&(t.R7$(),t.Y8G("ngIf",o.order))},dependencies:[n.Sq,n.bT,n.oe]})}return r})();function v(r,c){if(1&r&&(t.j41(0,"tr",6)(1,"th"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.nI1(5,"date"),t.k0s(),t.j41(6,"td"),t.EFF(7),t.nI1(8,"currency"),t.k0s(),t.j41(9,"td"),t.EFF(10),t.k0s()()),2&r){const e=c.$implicit;t.Mz_("routerLink","/orders/",e.id,""),t.R7$(2),t.SpI("# ",e.id,""),t.R7$(2),t.JRh(t.i5U(5,6,e.orderDate,"medium")),t.R7$(3),t.JRh(t.bMT(8,9,e.total)),t.R7$(3),t.JRh(e.status)}}const b=[{path:"",component:(()=>{class r{constructor(e){this.orderService=e,this.orders=[]}ngOnInit(){this.getOrders()}getOrders(){this.orderService.getOrdersForUser().subscribe({next:e=>this.orders=e})}static#t=this.\u0275fac=function(s){return new(s||r)(t.rXU(l))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-orders"]],decls:16,vars:1,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-12"],[1,"table","table-hover",2,"cursor","pointer"],[1,"thead-light"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(s,o){1&s&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"table",3)(4,"thead",4)(5,"tr")(6,"th"),t.EFF(7,"Order"),t.k0s(),t.j41(8,"th"),t.EFF(9,"Date"),t.k0s(),t.j41(10,"th"),t.EFF(11,"Total"),t.k0s(),t.j41(12,"th"),t.EFF(13,"Status"),t.k0s()()(),t.j41(14,"tbody"),t.DNE(15,v,11,11,"tr",5),t.k0s()()()()()),2&s&&(t.R7$(15),t.Y8G("ngForOf",o.orders))},dependencies:[n.Sq,d.Wk,n.oe,n.vh]})}return r})()},{path:":id",component:g,data:{breadcrumb:{alias:"OrderDetailed"}}}];let f=(()=>{class r{static#t=this.\u0275fac=function(s){return new(s||r)};static#e=this.\u0275mod=t.$C({type:r});static#r=this.\u0275inj=t.G2t({imports:[d.iI.forChild(b),d.iI]})}return r})(),j=(()=>{class r{static#t=this.\u0275fac=function(s){return new(s||r)};static#e=this.\u0275mod=t.$C({type:r});static#r=this.\u0275inj=t.G2t({imports:[n.MD,f]})}return r})()}}]);