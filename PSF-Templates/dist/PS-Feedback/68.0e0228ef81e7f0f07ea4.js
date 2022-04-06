"use strict";(self.webpackChunkps_feedback=self.webpackChunkps_feedback||[]).push([[68],{8068:(b,a,r)=>{r.r(a),r.d(a,{AuthModule:()=>A});var m=r(5855),g=r(8583),e=r(665),o=r(639),c=r(7556),u=r(2290);function p(t,s){1&t&&(o.TgZ(0,"small",21),o._uU(1,"Email is required"),o.qZA())}function f(t,s){1&t&&(o.TgZ(0,"small",21),o._uU(1,"Password is required (minimum length 6 digits)"),o.qZA())}let d=(()=>{class t{constructor(n,i,l,T){this.fb=n,this.auth=i,this.router=l,this.toastr=T}ngOnInit(){this.auth.isLoggedIn&&this.router.navigate(["/login"]),this.loginForm=this.fb.group({email:new e.NI("",[e.kI.required,e.kI.email]),password:new e.NI("",[e.kI.required,e.kI.minLength(6)])})}loginUser(){if(console.log(this.loginForm.value),this.loginForm.invalid)return this.router.navigate(["login"]),void this.toastr.error("Login First","Access Denied!");this.auth.psLogin(this.loginForm.value.email,this.loginForm.value.password).subscribe(l=>{console.log(l),200==l.status?(localStorage.setItem("token",l.token),this.toastr.success(l.psUserInfo),this.router.navigate(["./dashboard/visitorList"])):(console.log("err"),this.toastr.error(l.message))})}clickSub(){}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(e.qu),o.Y36(c.e),o.Y36(m.F0),o.Y36(u._W))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:29,vars:4,consts:[[1,"d-flex","w-100","bg-login"],[1,"container","d-flex","flex-column"],[1,"row","vh-100"],[1,"col-sm-10","col-md-8","col-lg-6","mx-auto","d-table","h-100"],[1,"d-table-cell","align-middle"],[1,"text-center","mt-4"],[1,"h2"],[1,"lead"],[1,"card"],[1,"card-body"],[1,"m-sm-4"],[1,"text-center"],["src","../../../assets/images/police-large.png","alt","Charles Hall","width","132","height","132",1,"img-fluid","rounded-circle"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["formControlName","email","type","email","name","email","placeholder","Enter your email",1,"form-control","form-control-lg"],["class","text-danger",4,"ngIf"],["formControlName","password","type","password","name","password","placeholder","Enter your password",1,"form-control","form-control-lg"],[1,"text-center","mt-3"],["href","","type","submit",1,"btn","btn-lg","btn-primary",3,"disabled","click"],[1,"text-danger"]],template:function(n,i){1&n&&(o.TgZ(0,"main",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"div",4),o.TgZ(5,"div",5),o.TgZ(6,"h1",6),o._uU(7,"Welcome back, PSF-Admin"),o.qZA(),o.TgZ(8,"p",7),o._uU(9," Sign in to your account to continue "),o.qZA(),o.qZA(),o.TgZ(10,"div",8),o.TgZ(11,"div",9),o.TgZ(12,"div",10),o.TgZ(13,"div",11),o._UZ(14,"img",12),o.qZA(),o.TgZ(15,"form",13),o.NdJ("ngSubmit",function(){return i.loginUser()}),o.TgZ(16,"div",14),o.TgZ(17,"label",15),o._uU(18,"Email"),o.qZA(),o._UZ(19,"input",16),o.YNc(20,p,2,0,"small",17),o.qZA(),o.TgZ(21,"div",14),o.TgZ(22,"label",15),o._uU(23,"Password"),o.qZA(),o._UZ(24,"input",18),o.YNc(25,f,2,0,"small",17),o.qZA(),o.TgZ(26,"div",19),o.TgZ(27,"button",20),o.NdJ("click",function(){return i.clickSub()}),o._uU(28,"Sign in"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&n&&(o.xp6(15),o.Q6J("formGroup",i.loginForm),o.xp6(5),o.Q6J("ngIf",i.loginForm.get("email").invalid&&i.loginForm.get("email").touched),o.xp6(5),o.Q6J("ngIf",i.loginForm.get("password").invalid&&i.loginForm.get("password").touched),o.xp6(2),o.Q6J("disabled",i.loginForm.invalid))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u,g.O5],styles:[""]}),t})(),h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-forget-password"]],decls:2,vars:0,template:function(n,i){1&n&&(o.TgZ(0,"p"),o._uU(1,"forget-password works!"),o.qZA())},styles:[""]}),t})();var Z=r(1841);const v=[{path:"",component:d},{path:"login",component:d},{path:"forget",component:h}];let A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[g.ez,Z.JF,e.UX,e.u5,m.Bz.forChild(v)]]}),t})()}}]);