"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[422],{4422:(j,m,s)=>{s.r(m),s.d(m,{AccountModule:()=>G});var a=s(177),l=s(4187),r=s(4341),t=s(4438),u=s(978),c=s(6771);let d=(()=>{class e{constructor(o,i,n){this.accountService=o,this.router=i,this.activatedRoute=n,this.loginForm=new r.gE({email:new r.MJ("",[r.k0.required,r.k0.email]),password:new r.MJ("",r.k0.required)}),this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop"}onSubmit(){this.accountService.login(this.loginForm.value).subscribe({next:()=>this.router.navigateByUrl(this.returnUrl)})}static#t=this.\u0275fac=function(i){return new(i||e)(t.rXU(u.D),t.rXU(l.Ix),t.rXU(l.nX))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-login"]],decls:11,vars:7,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"ngSubmit","formGroup"],[1,"text-center","mb-4"],[1,"mb-3"],[3,"formControl","label"],[3,"formControl","label","type"],[1,"d-grid"],["type","submit",1,"btn","btn-lg","btn-primary","mt-3",3,"disabled"]],template:function(i,n){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"form",2),t.bIt("ngSubmit",function(){return n.onSubmit()}),t.j41(3,"div",3)(4,"h1",4),t.EFF(5,"Login"),t.k0s()(),t.nrm(6,"app-text-input",5)(7,"app-text-input",6),t.j41(8,"div",7)(9,"button",8),t.EFF(10,"Sign in"),t.k0s()()()()()),2&i&&(t.R7$(2),t.Y8G("formGroup",n.loginForm),t.R7$(4),t.Y8G("formControl",n.loginForm.controls.email)("label","Email Address"),t.R7$(),t.Y8G("formControl",n.loginForm.controls.password)("label","Password")("type","password"),t.R7$(2),t.Y8G("disabled",n.loginForm.invalid))},dependencies:[r.qT,r.BC,r.cb,r.l_,r.j4,c.f]})}return e})();var g=s(152),f=s(6697),h=s(5558),v=s(6354),b=s(980);function F(e,p){if(1&e&&(t.j41(0,"li"),t.EFF(1),t.k0s()),2&e){const o=p.$implicit;t.R7$(),t.SpI(" ",o," ")}}function y(e,p){if(1&e&&(t.j41(0,"ul",10),t.DNE(1,F,2,1,"li",11),t.k0s()),2&e){const o=t.XpG();t.R7$(),t.Y8G("ngForOf",o.errors)}}const C=[{path:"login",component:d},{path:"register",component:(()=>{class e{constructor(o,i,n){this.fb=o,this.accountService=i,this.router=n,this.errors=null,this.complexPassword="(?=^.{6,10}$)(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*s).*$",this.registerForm=this.fb.group({displayName:["",r.k0.required],email:["",[r.k0.required,r.k0.email],[this.validateEmailNotTaken()]],password:["",[r.k0.required,r.k0.pattern(this.complexPassword)]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe({next:()=>this.router.navigateByUrl("/shop"),error:o=>this.errors=o.errors})}validateEmailNotTaken(){return o=>o.valueChanges.pipe((0,g.B)(1e3),(0,f.s)(1),(0,h.n)(()=>this.accountService.checkEmailExists(o.value).pipe((0,v.T)(i=>i?{emailExists:!0}:null),(0,b.j)(()=>o.markAsTouched()))))}static#t=this.\u0275fac=function(i){return new(i||e)(t.rXU(r.ok),t.rXU(u.D),t.rXU(l.Ix))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-register"]],decls:13,vars:10,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"ngSubmit","formGroup"],[1,"text-center","mb-4"],[1,"mb-3"],[3,"formControl","label"],[3,"formControl","label","type"],["class","text-danger list-unstyled",4,"ngIf"],[1,"d-grid"],["type","submit",1,"btn","btn-lg","btn-primary","mt-3",3,"disabled"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(i,n){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"form",2),t.bIt("ngSubmit",function(){return n.onSubmit()}),t.j41(3,"div",3)(4,"h1",4),t.EFF(5,"Sign up"),t.k0s()(),t.nrm(6,"app-text-input",5)(7,"app-text-input",5)(8,"app-text-input",6),t.DNE(9,y,2,1,"ul",7),t.j41(10,"div",8)(11,"button",9),t.EFF(12,"Sign up"),t.k0s()()()()()),2&i&&(t.R7$(2),t.Y8G("formGroup",n.registerForm),t.R7$(4),t.Y8G("formControl",n.registerForm.controls.displayName)("label","Display Name"),t.R7$(),t.Y8G("formControl",n.registerForm.controls.email)("label","Email Address"),t.R7$(),t.Y8G("formControl",n.registerForm.controls.password)("label","Password")("type","password"),t.R7$(),t.Y8G("ngIf",n.errors),t.R7$(2),t.Y8G("disabled",n.registerForm.invalid))},dependencies:[a.Sq,a.bT,r.qT,r.BC,r.cb,r.l_,r.j4,c.f]})}return e})()}];let R=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.$C({type:e});static#r=this.\u0275inj=t.G2t({imports:[l.iI.forChild(C),l.iI]})}return e})();var S=s(3887);let G=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.$C({type:e});static#r=this.\u0275inj=t.G2t({imports:[a.MD,R,S.G]})}return e})()}}]);