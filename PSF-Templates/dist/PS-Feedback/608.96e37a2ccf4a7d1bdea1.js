"use strict";(self.webpackChunkps_feedback=self.webpackChunkps_feedback||[]).push([[608],{8608:(_,m,d)=>{d.r(m),d.d(m,{DashboardModule:()=>x});var l=d(5855),n=d(8583),h=d(7709),t=d(639),u=d(1652),Z=d(8002),a=d(1841);let g=(()=>{class i{constructor(o){this.http=o,this.apiURL=u.N.apiUrl}getVisitiorslist(){return this.http.get(this.apiURL+"visitors/list").pipe((0,Z.U)(o=>o))}addVisitors(o){return this.http.post(this.apiURL+"visitors/add",o).pipe((0,Z.U)(e=>(console.log("addedVisitor",e),e)))}}return i.\u0275fac=function(o){return new(o||i)(t.LFG(a.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var p=d(7988);function A(i,s){if(1&i&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.qZA()),2&i){const o=s.$implicit,e=s.index;t.xp6(2),t.Oqu(e+1),t.xp6(2),t.Oqu(t.xi3(5,8,o.createdAt,"d/M/yy h:mm a")),t.xp6(3),t.Oqu(o.visitorName),t.xp6(2),t.Oqu(o.visitorFatherName),t.xp6(2),t.Oqu(o.visitorPhone),t.xp6(2),t.Oqu(o.visitorAddress),t.xp6(2),t.Oqu(o.purpose),t.xp6(2),t.Oqu(o.attenderName)}}let c=(()=>{class i{constructor(o){this.visitorService=o,this.dtOptions={},this.visitors=[],this.dtTrigger=new h.xQ}ngOnInit(){this.dtOptions={pagingType:"full_numbers",lengthMenu:[5,10,15],processing:!0},this.getVisitorList()}getVisitorList(){this.visitorService.getVisitiorslist().subscribe(o=>{this.visitorResult=o,this.visitorList=this.visitorResult.results,console.log(this.visitorList),this.dtTrigger.next()})}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(g))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-visitor-list"]],decls:31,vars:3,consts:[[1,"row","mb-2","mb-xl-3"],[1,"col-auto","d-none","d-sm-block"],[1,"row"],[1,"col-xl-12","col-xxl-12","d-flex"],[1,"w-100"],[1,"card"],[1,"card-body"],["datatable","",1,"row-border","hover",3,"dtOptions","dtTrigger"],[4,"ngFor","ngForOf"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h3"),t.TgZ(3,"strong"),t._uU(4,"Visitor's List"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(5,"div",2),t.TgZ(6,"div",3),t.TgZ(7,"div",4),t.TgZ(8,"div",5),t.TgZ(9,"div",6),t.TgZ(10,"table",7),t.TgZ(11,"thead"),t.TgZ(12,"tr"),t.TgZ(13,"th"),t._uU(14,"Sr No."),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Visit Date"),t.qZA(),t.TgZ(17,"th"),t._uU(18," Visitor's Name "),t.qZA(),t.TgZ(19,"th"),t._uU(20," Visitor's Father Name"),t.qZA(),t.TgZ(21,"th"),t._uU(22," Visitor's Phone Number"),t.qZA(),t.TgZ(23,"th"),t._uU(24," Visitor's Address"),t.qZA(),t.TgZ(25,"th"),t._uU(26," Purpose of Visit"),t.qZA(),t.TgZ(27,"th"),t._uU(28," Attended Person"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"tbody"),t.YNc(30,A,18,11,"tr",8),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(10),t.Q6J("dtOptions",e.dtOptions)("dtTrigger",e.dtTrigger),t.xp6(20),t.Q6J("ngForOf",e.visitorList))},directives:[p.G,n.sg],pipes:[n.uU],styles:[""]}),i})();var r=d(665),T=d(2290);function q(i,s){1&i&&(t.TgZ(0,"small",21),t._uU(1,"Name is required"),t.qZA())}function f(i,s){1&i&&(t.TgZ(0,"small",21),t._uU(1,"Father's name is required"),t.qZA())}function V(i,s){1&i&&(t.TgZ(0,"small",21),t._uU(1,"Phone number is required with maximum length 10 digits"),t.qZA())}function N(i,s){1&i&&(t.TgZ(0,"small",21),t._uU(1,"Address is required"),t.qZA())}function U(i,s){1&i&&(t.TgZ(0,"small",21),t._uU(1,"Purpose is required"),t.qZA())}function b(i,s){1&i&&(t.TgZ(0,"small",21),t._uU(1,"Name is required"),t.qZA())}const F=[{path:"addVisitor",component:(()=>{class i{constructor(o,e,v,C,y){this.fb=o,this.toastr=e,this.router=v,this.visitorService=C,this.http=y,this.apiURL=u.N.apiUrl}ngOnInit(){this.addVisitorForm=this.fb.group({visitorName:new r.NI("",[r.kI.required]),fatherName:new r.NI("",[r.kI.required]),phoneNumber:new r.NI("",[r.kI.required,r.kI.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),address:new r.NI("",[r.kI.required]),purpose:new r.NI("",[r.kI.required]),attendedPerson:new r.NI("",[r.kI.required])})}addVisitor(){this.addVisitorForm.valid&&this.visitorService.addVisitors({visitorName:this.addVisitorForm.value.visitorName,visitorFatherName:this.addVisitorForm.value.fatherName,visitorPhone:this.addVisitorForm.value.phoneNumber,visitorAddress:this.addVisitorForm.value.address,purpose:this.addVisitorForm.value.purpose,attenderName:this.addVisitorForm.value.attendedPerson,status:0}).subscribe(e=>{console.log(e),e.success?(this.toastr.success(e.message),this.addVisitorForm.reset()):(this.toastr.error(e.message),this.addVisitorForm.reset())})}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(r.qu),t.Y36(T._W),t.Y36(l.F0),t.Y36(g),t.Y36(a.eN))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-visitor"]],decls:54,vars:8,consts:[[1,"content"],[1,"container-fluid","p-0"],[1,"row","mb-2","mb-xl-3"],[1,"col-auto","d-none","d-sm-block"],[1,"row"],[1,"col-xl-12","col-xxl-12","d-flex"],[1,"w-100"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"col-sm-6"],[1,"mb-3"],[1,"form-label"],["type","text","id","v-name","formControlName","visitorName",1,"form-control"],["class","text-danger",4,"ngIf"],["type","text","id","v-fname","formControlName","fatherName",1,"form-control"],["type","number","id","v-phone","formControlName","phoneNumber",1,"form-control"],["type","text","id","v-address","formControlName","address",1,"form-control"],["type","text","id","v-purpose","formControlName","purpose",1,"form-control"],["type","text","id","v-attender","formControlName","attendedPerson",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-danger"]],template:function(o,e){1&o&&(t.TgZ(0,"main",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h3"),t.TgZ(5,"strong"),t._uU(6,"Add Visitor"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",4),t.TgZ(8,"div",5),t.TgZ(9,"div",6),t.TgZ(10,"div",7),t.TgZ(11,"div",8),t.TgZ(12,"form",9),t.NdJ("ngSubmit",function(){return e.addVisitor()}),t.TgZ(13,"div",4),t.TgZ(14,"div",10),t.TgZ(15,"div",11),t.TgZ(16,"label",12),t._uU(17,"Visitor's Name"),t.qZA(),t._UZ(18,"input",13),t.YNc(19,q,2,0,"small",14),t.qZA(),t.qZA(),t.TgZ(20,"div",10),t.TgZ(21,"div",11),t.TgZ(22,"label",12),t._uU(23,"Visitor's Father Name"),t.qZA(),t._UZ(24,"input",15),t.YNc(25,f,2,0,"small",14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",4),t.TgZ(27,"div",10),t.TgZ(28,"div",11),t.TgZ(29,"label",12),t._uU(30,"Visitor's Phone"),t.qZA(),t._UZ(31,"input",16),t.YNc(32,V,2,0,"small",14),t.qZA(),t.qZA(),t.TgZ(33,"div",10),t.TgZ(34,"div",11),t.TgZ(35,"label",12),t._uU(36,"Visitor's Address"),t.qZA(),t._UZ(37,"input",17),t.YNc(38,N,2,0,"small",14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"div",4),t.TgZ(40,"div",10),t.TgZ(41,"div",11),t.TgZ(42,"label",12),t._uU(43,"Purpose of Visit"),t.qZA(),t._UZ(44,"input",18),t.YNc(45,U,2,0,"small",14),t.qZA(),t.qZA(),t.TgZ(46,"div",10),t.TgZ(47,"div",11),t.TgZ(48,"label",12),t._uU(49,"Attended Person"),t.qZA(),t._UZ(50,"input",19),t.YNc(51,b,2,0,"small",14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(52,"button",20),t._uU(53,"Add Visitor"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(12),t.Q6J("formGroup",e.addVisitorForm),t.xp6(7),t.Q6J("ngIf",e.addVisitorForm.get("visitorName").invalid&&e.addVisitorForm.get("visitorName").touched),t.xp6(6),t.Q6J("ngIf",e.addVisitorForm.get("fatherName").invalid&&e.addVisitorForm.get("fatherName").touched),t.xp6(7),t.Q6J("ngIf",e.addVisitorForm.get("phoneNumber").invalid&&e.addVisitorForm.get("phoneNumber").touched),t.xp6(6),t.Q6J("ngIf",e.addVisitorForm.get("address").invalid&&e.addVisitorForm.get("address").touched),t.xp6(7),t.Q6J("ngIf",e.addVisitorForm.get("purpose").invalid&&e.addVisitorForm.get("purpose").touched),t.xp6(6),t.Q6J("ngIf",e.addVisitorForm.get("attendedPerson").invalid&&e.addVisitorForm.get("attendedPerson").touched),t.xp6(1),t.Q6J("disabled",e.addVisitorForm.invalid))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,n.O5,r.wV],styles:[""]}),i})()},{path:"visitorList",component:c}];let x=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[n.ez,p.T,r.u5,r.UX,a.JF,l.Bz.forChild(F)]]}),i})()}}]);