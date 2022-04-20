"use strict";(self.webpackChunkps_feedback=self.webpackChunkps_feedback||[]).push([[608],{8608:(y,p,d)=>{d.r(p),d.d(p,{DashboardModule:()=>x});var Z=d(5855),n=d(8583),c=d(7709),t=d(639),g=d(1652),l=d(8002),m=d(1841);let h=(()=>{class i{constructor(e){this.http=e,this.apiURL=g.N.apiUrl}getVisitiorslist(){return this.http.get(this.apiURL+"visitors/list").pipe((0,l.U)(e=>e))}addVisitors(e){return this.http.post(this.apiURL+"visitors/add",e).pipe((0,l.U)(o=>(console.log("addedVisitor",o),o)))}getVListById(e){return this.http.get(this.apiURL+"visitors/list/"+e).pipe((0,l.U)(o=>(console.log("visitorsList",o),o)))}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(m.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var v=d(7988);function A(i,r){if(1&i&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.qZA()),2&i){const e=r.$implicit,o=r.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(t.xi3(5,8,e.createdAt,"d/M/yy h:mm a")),t.xp6(3),t.Oqu(e.visitorName),t.xp6(2),t.Oqu(e.visitorFatherName),t.xp6(2),t.Oqu(e.visitorPhone),t.xp6(2),t.Oqu(e.visitorAddress),t.xp6(2),t.Oqu(e.purpose),t.xp6(2),t.Oqu(e.attenderName)}}let f=(()=>{class i{constructor(e){this.visitorService=e,this.dtOptions={},this.visitors=[],this.dtTrigger=new c.xQ,this.visitorList=[],this.userInfo=JSON.parse(localStorage.getItem("psUserInfo")||"[]"),console.log(this.userInfo)}ngOnInit(){this.dtOptions={pagingType:"full_numbers",lengthMenu:[5,10,15],processing:!0},this.getVisitorList()}getVisitorList(){console.log(this.userInfo._id),this.visitorService.getVListById(this.userInfo._id).subscribe(e=>{console.log(e),this.visitorList=e.results,this.dtTrigger.next()})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(h))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-visitor-list"]],decls:31,vars:3,consts:[[1,"row","mb-2","mb-xl-3"],[1,"col-auto","d-none","d-sm-block"],[1,"row"],[1,"col-xl-12","col-xxl-12","d-flex"],[1,"w-100"],[1,"card"],[1,"card-body"],["datatable","",1,"row-border","hover",3,"dtOptions","dtTrigger"],[4,"ngFor","ngForOf"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h3"),t.TgZ(3,"strong"),t._uU(4,"Visitor's List"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(5,"div",2),t.TgZ(6,"div",3),t.TgZ(7,"div",4),t.TgZ(8,"div",5),t.TgZ(9,"div",6),t.TgZ(10,"table",7),t.TgZ(11,"thead"),t.TgZ(12,"tr"),t.TgZ(13,"th"),t._uU(14,"Sr No."),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Visit Date"),t.qZA(),t.TgZ(17,"th"),t._uU(18," Visitor's Name "),t.qZA(),t.TgZ(19,"th"),t._uU(20," Visitor's Father Name"),t.qZA(),t.TgZ(21,"th"),t._uU(22," Visitor's Phone Number"),t.qZA(),t.TgZ(23,"th"),t._uU(24," Visitor's Address"),t.qZA(),t.TgZ(25,"th"),t._uU(26," Purpose of Visit"),t.qZA(),t.TgZ(27,"th"),t._uU(28," Attended Person"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"tbody"),t.YNc(30,A,18,11,"tr",8),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(10),t.Q6J("dtOptions",o.dtOptions)("dtTrigger",o.dtTrigger),t.xp6(20),t.Q6J("ngForOf",o.visitorList))},directives:[v.G,n.sg],pipes:[n.uU],styles:[""]}),i})();var s=d(665),T=d(2290);function q(i,r){1&i&&(t.TgZ(0,"small",21),t._uU(1,"Name is required"),t.qZA())}function V(i,r){1&i&&(t.TgZ(0,"small",21),t._uU(1,"Father's name is required"),t.qZA())}function N(i,r){1&i&&(t.TgZ(0,"small",21),t._uU(1,"Phone number is required with maximum length 10 digits"),t.qZA())}function U(i,r){1&i&&(t.TgZ(0,"small",21),t._uU(1,"Address is required"),t.qZA())}function b(i,r){1&i&&(t.TgZ(0,"small",21),t._uU(1,"Purpose is required"),t.qZA())}function F(i,r){1&i&&(t.TgZ(0,"small",21),t._uU(1,"Name is required"),t.qZA())}const I=[{path:"addVisitor",component:(()=>{class i{constructor(e,o,u,a,_){this.fb=e,this.toastr=o,this.router=u,this.visitorService=a,this.http=_,this.apiURL=g.N.apiUrl,this.userInfo=JSON.parse(localStorage.getItem("psUserInfo")||"[]"),console.log(this.userInfo)}ngOnInit(){this.addVisitorForm=this.fb.group({visitorName:new s.NI("",[s.kI.required]),fatherName:new s.NI("",[s.kI.required]),phoneNumber:new s.NI("",[s.kI.required,s.kI.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),address:new s.NI("",[s.kI.required]),purpose:new s.NI("",[s.kI.required]),attendedPerson:new s.NI("",[s.kI.required])})}addVisitor(){if(this.addVisitorForm.valid){let e={visitorName:this.addVisitorForm.value.visitorName,visitorFatherName:this.addVisitorForm.value.fatherName,visitorPhone:this.addVisitorForm.value.phoneNumber,visitorAddress:this.addVisitorForm.value.address,purpose:this.addVisitorForm.value.purpose,attenderName:this.addVisitorForm.value.attendedPerson,status:0,psId:this.userInfo._id,psName:this.userInfo.psName};console.log(e),this.visitorService.addVisitors(e).subscribe(o=>{console.log(o),o.success?(this.toastr.success(o.message),this.addVisitorForm.reset(),this.router.navigate(["dashboard/visitorList"])):(this.toastr.error(o.message),this.addVisitorForm.reset())})}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(s.qu),t.Y36(T._W),t.Y36(Z.F0),t.Y36(h),t.Y36(m.eN))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-visitor"]],decls:54,vars:8,consts:[[1,"content"],[1,"container-fluid","p-0"],[1,"row","mb-2","mb-xl-3"],[1,"col-auto","d-none","d-sm-block"],[1,"row"],[1,"col-xl-12","col-xxl-12","d-flex"],[1,"w-100"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"col-sm-6"],[1,"mb-3"],[1,"form-label"],["type","text","id","v-name","formControlName","visitorName",1,"form-control"],["class","text-danger",4,"ngIf"],["type","text","id","v-fname","formControlName","fatherName",1,"form-control"],["type","text","id","v-phone","formControlName","phoneNumber","maxlength","10",1,"form-control",3,"keypress"],["type","text","id","v-address","formControlName","address",1,"form-control"],["type","text","id","v-purpose","formControlName","purpose",1,"form-control"],["type","text","id","v-attender","formControlName","attendedPerson",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-danger"]],template:function(e,o){1&e&&(t.TgZ(0,"main",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h3"),t.TgZ(5,"strong"),t._uU(6,"Add Visitor"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",4),t.TgZ(8,"div",5),t.TgZ(9,"div",6),t.TgZ(10,"div",7),t.TgZ(11,"div",8),t.TgZ(12,"form",9),t.NdJ("ngSubmit",function(){return o.addVisitor()}),t.TgZ(13,"div",4),t.TgZ(14,"div",10),t.TgZ(15,"div",11),t.TgZ(16,"label",12),t._uU(17,"Visitor's Name"),t.qZA(),t._UZ(18,"input",13),t.YNc(19,q,2,0,"small",14),t.qZA(),t.qZA(),t.TgZ(20,"div",10),t.TgZ(21,"div",11),t.TgZ(22,"label",12),t._uU(23,"Visitor's Father Name"),t.qZA(),t._UZ(24,"input",15),t.YNc(25,V,2,0,"small",14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",4),t.TgZ(27,"div",10),t.TgZ(28,"div",11),t.TgZ(29,"label",12),t._uU(30,"Visitor's Phone"),t.qZA(),t.TgZ(31,"input",16),t.NdJ("keypress",function(a){return a.charCode>=48&&a.charCode<58}),t.qZA(),t.YNc(32,N,2,0,"small",14),t.qZA(),t.qZA(),t.TgZ(33,"div",10),t.TgZ(34,"div",11),t.TgZ(35,"label",12),t._uU(36,"Visitor's Address"),t.qZA(),t._UZ(37,"input",17),t.YNc(38,U,2,0,"small",14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"div",4),t.TgZ(40,"div",10),t.TgZ(41,"div",11),t.TgZ(42,"label",12),t._uU(43,"Purpose of Visit"),t.qZA(),t._UZ(44,"input",18),t.YNc(45,b,2,0,"small",14),t.qZA(),t.qZA(),t.TgZ(46,"div",10),t.TgZ(47,"div",11),t.TgZ(48,"label",12),t._uU(49,"Attended Person"),t.qZA(),t._UZ(50,"input",19),t.YNc(51,F,2,0,"small",14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(52,"button",20),t._uU(53,"Add Visitor"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(12),t.Q6J("formGroup",o.addVisitorForm),t.xp6(7),t.Q6J("ngIf",o.addVisitorForm.get("visitorName").invalid&&o.addVisitorForm.get("visitorName").touched),t.xp6(6),t.Q6J("ngIf",o.addVisitorForm.get("fatherName").invalid&&o.addVisitorForm.get("fatherName").touched),t.xp6(7),t.Q6J("ngIf",o.addVisitorForm.get("phoneNumber").invalid&&o.addVisitorForm.get("phoneNumber").touched),t.xp6(6),t.Q6J("ngIf",o.addVisitorForm.get("address").invalid&&o.addVisitorForm.get("address").touched),t.xp6(7),t.Q6J("ngIf",o.addVisitorForm.get("purpose").invalid&&o.addVisitorForm.get("purpose").touched),t.xp6(6),t.Q6J("ngIf",o.addVisitorForm.get("attendedPerson").invalid&&o.addVisitorForm.get("attendedPerson").touched),t.xp6(1),t.Q6J("disabled",o.addVisitorForm.invalid))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,n.O5,s.nD],styles:[""]}),i})()},{path:"visitorList",component:f}];let x=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[n.ez,v.T,s.u5,s.UX,m.JF,Z.Bz.forChild(I)]]}),i})()}}]);