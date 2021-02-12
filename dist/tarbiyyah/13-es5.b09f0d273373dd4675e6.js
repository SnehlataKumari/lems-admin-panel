function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var b=0;b<e.length;b++){var a=e[b];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,b){return e&&_defineProperties(t.prototype,e),b&&_defineProperties(t,b),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{dm4Z:function(t,e,b){"use strict";b.r(e),b.d(e,"CandidateModule",(function(){return Pt}));var a,i=b("ofXK"),n=b("vrAG"),o=b("7rcH"),r=b("tyNb"),d=b("M9IT"),c=b("+0xr"),s=b("AytR"),l=b("ilPa"),u=b("fXoL"),m=b("mrSG"),p=b("2Vo4"),T=b("H+bZ"),U=b("3LUQ"),f=((a=function(){function t(e,b){_classCallCheck(this,t),this.api=e,this.alertService=b,this.$studentsList=new p.a([])}return _createClass(t,[{key:"getAllStudents",value:function(){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.api.get("/students").toPromise();case 2:e=t.sent,this.$studentsList.next(e.data);case 4:case"end":return t.stop()}}),t,this)})))}},{key:"deleteStudents",value:function(t){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var b=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(t){return Object(m.a)(b,void 0,void 0,regeneratorRuntime.mark((function e(){var b;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b="/students/".concat(t),e.next=3,this.api.delete(b).toPromise();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})))})));case 2:this.alertService.success("StudentDeleted successfully!"),this.getAllStudents();case 4:case"end":return e.stop()}}),e,this)})))}},{key:"fetchStudentById",value:function(t){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var b;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b="/students/".concat(t),e.next=3,this.api.get(b).toPromise();case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e,this)})))}}]),t}()).\u0275fac=function(t){return new(t||a)(u.Yb(T.a),u.Yb(U.a))},a.\u0275prov=u.Kb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),v=b("GnUH"),g=b("wGgj"),h=b("3Pt+");function L(t,e){1&t&&(u.Ub(0,"th",57),u.Lc(1,"Candidate Name"),u.Tb())}function C(t,e){if(1&t&&(u.Ub(0,"td",58),u.Lc(1),u.Tb()),2&t){var b=e.$implicit;u.Cb(1),u.Oc(" ",b.user.firstName," ",b.user.lastName,"")}}function w(t,e){1&t&&(u.Ub(0,"th",57),u.Lc(1,"Email Id"),u.Tb())}function y(t,e){if(1&t&&(u.Ub(0,"td",58),u.Lc(1),u.Tb()),2&t){var b=e.$implicit;u.Cb(1),u.Nc(" ",b.user.email," ")}}function P(t,e){1&t&&(u.Ub(0,"th",57),u.Lc(1,"Phone"),u.Tb())}function S(t,e){if(1&t&&(u.Ub(0,"td",58),u.Lc(1),u.Tb()),2&t){var b=e.$implicit;u.Cb(1),u.Nc("+91 ",b.user.phone," ")}}function x(t,e){1&t&&(u.Ub(0,"th",57),u.Lc(1,"Grade"),u.Tb())}function k(t,e){if(1&t&&(u.Ub(0,"td",58),u.Lc(1),u.Tb()),2&t){var b=e.$implicit;u.Cb(1),u.Nc(" ",b.user.grade," ")}}function R(t,e){1&t&&(u.Ub(0,"th",57),u.Lc(1,"Registration Date"),u.Tb())}function N(t,e){if(1&t&&(u.Ub(0,"td",58),u.Lc(1),u.hc(2,"date"),u.Tb()),2&t){var b=e.$implicit;u.Cb(1),u.Nc(" ",u.ic(2,1,b.user.createdAt)," ")}}function D(t,e){1&t&&(u.Ub(0,"th",57),u.Lc(1,"Action"),u.Tb())}function I(t,e){if(1&t){var b=u.Vb();u.Ub(0,"td",58),u.Ub(1,"div",59),u.Ub(2,"button",60),u.cc("click",(function(){u.Bc(b);var t=e.$implicit;return u.gc().selectStudent(t)})),u.Pb(3,"i",61),u.Lc(4," Delete "),u.Tb(),u.Ub(5,"button",62),u.cc("click",(function(){u.Bc(b);var t=e.$implicit;return u.gc().selectStudentProfile(t)})),u.Pb(6,"i",63),u.Lc(7," View "),u.Tb(),u.Ub(8,"button",64),u.Pb(9,"i",65),u.Lc(10,"Edit"),u.Tb(),u.Tb(),u.Tb()}if(2&t){var a=e.$implicit;u.Cb(8),u.oc("routerLink","/candidate/"+a.student._id+"/edit")}}function J(t,e){1&t&&u.Pb(0,"tr",66)}function F(t,e){1&t&&u.Pb(0,"tr",67)}function O(t,e){if(1&t&&(u.Ub(0,"ul"),u.Ub(1,"li"),u.Ub(2,"span"),u.Lc(3,"Parent Email"),u.Tb(),u.Tb(),u.Ub(4,"li"),u.Ub(5,"span"),u.Lc(6),u.Tb(),u.Tb(),u.Ub(7,"li"),u.Ub(8,"span"),u.Lc(9,"Parent Contact Number"),u.Tb(),u.Tb(),u.Ub(10,"li"),u.Ub(11,"span"),u.Lc(12),u.Tb(),u.Tb(),u.Tb()),2&t){var b=e.$implicit;u.Cb(6),u.Mc(b.email),u.Cb(6),u.Mc(b.mobileNumber)}}function A(t,e){if(1&t&&(u.Ub(0,"div",79),u.Ub(1,"h5"),u.Lc(2,"PARENT INFO"),u.Tb(),u.Jc(3,O,13,2,"ul",80),u.Tb()),2&t){var b=u.gc(2);u.Cb(3),u.oc("ngForOf",null==b.student?null:b.student.guardians)}}function G(t,e){if(1&t&&(u.Ub(0,"div",50),u.Ub(1,"div",68),u.Ub(2,"div",12),u.Ub(3,"div",69),u.Ub(4,"div",70),u.Ub(5,"div",59),u.Ub(6,"div",71),u.Pb(7,"img",72),u.Tb(),u.Ub(8,"div",73),u.Ub(9,"h5",74),u.Lc(10),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(11,"div",75),u.Ub(12,"div",3),u.Ub(13,"div",76),u.Ub(14,"div",12),u.Ub(15,"div",5),u.Ub(16,"div",77),u.Ub(17,"h5"),u.Lc(18,"EDUCATION INFO"),u.Tb(),u.Ub(19,"ul"),u.Ub(20,"li"),u.Ub(21,"span"),u.Lc(22,"Class"),u.Tb(),u.Tb(),u.Ub(23,"li"),u.Ub(24,"span"),u.Lc(25),u.Tb(),u.Tb(),u.Ub(26,"li"),u.Ub(27,"span"),u.Lc(28,"Board"),u.Tb(),u.Tb(),u.Ub(29,"li"),u.Ub(30,"span"),u.Lc(31),u.Tb(),u.Tb(),u.Ub(32,"li"),u.Ub(33,"span"),u.Lc(34,"Target"),u.Tb(),u.Tb(),u.Ub(35,"li"),u.Ub(36,"span"),u.Lc(37),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(38,"div",5),u.Jc(39,A,4,1,"div",78),u.Tb(),u.Tb(),u.Ub(40,"div",5),u.Ub(41,"div",77),u.Ub(42,"h5"),u.Lc(43,"CONTACT INFO"),u.Tb(),u.Ub(44,"ul"),u.Ub(45,"li"),u.Ub(46,"span"),u.Lc(47,"Email ID"),u.Tb(),u.Tb(),u.Ub(48,"li"),u.Ub(49,"span"),u.Lc(50),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb()),2&t){var b=u.gc();u.Cb(7),u.oc("src",null!=b.user&&b.user.profileImage?null==b.user?null:b.user.profileImage:"assets/images/icon/user_placeholder_header.svg",u.Ec),u.Cb(3),u.Oc("",null==b.user?null:b.user.firstName," ",null==b.user?null:b.user.lastName,""),u.Cb(15),u.Mc((null==b.student||null==b.student.education?null:b.student.education.grade)||"NA"),u.Cb(6),u.Mc((null==b.student||null==b.student.education?null:b.student.education.board)||"NA"),u.Cb(6),u.Mc((null==b.student||null==b.student.education?null:b.student.education.targetExam)||"NA"),u.Cb(2),u.oc("ngIf",b.student.guardians&&b.student.guardians.length),u.Cb(11),u.Mc(b.user.email)}}var _,j=function(){return[10,20,50]},E=["name","email","phone","grade","registeredOn","action"],z=["user.firstName","user.lastName","user.phone","user.email","student.grade"],B=((_=function(){function t(e){_classCallCheck(this,t),this.studentService=e,this.hostUrl=s.a.hostUrl,this.selectStudents=[],this.displayedColumns=E}return _createClass(t,[{key:"applyFilter",value:function(t){var e=t.target.value;this.dataSource=new c.k(Object(l.a)(this.students,e,{keys:z}))}},{key:"ngOnInit",value:function(){var t=this;this.studentService.getAllStudents(),this.studentService.$studentsList.subscribe((function(e){t.setDataSource(e)}))}},{key:"getTrueValues",value:function(t){return t?Reflect.ownKeys(t).filter((function(e){return!0===t[e]})).join(", "):null}},{key:"setDataSource",value:function(t){this.students=t,this.dataSource=new c.k(t)}},{key:"selectStudent",value:function(t){this.selectStudents=[t.student._id]}},{key:"selectStudentProfile",value:function(t){this.user=t.user,this.student=t.student}},{key:"deleteSelectedStudents",value:function(){console.log(this.selectStudents),this.studentService.deleteStudents(this.selectStudents)}}]),t}()).\u0275fac=function(t){return new(t||_)(u.Ob(f))},_.\u0275cmp=u.Ib({type:_,selectors:[["app-candidate"]],viewQuery:function(t,e){var b;1&t&&u.Hc(d.a,!0),2&t&&u.wc(b=u.dc())&&(e.paginator=b.first)},decls:93,vars:6,consts:[["id","candidatePage"],[1,"content-page"],[1,"content"],[1,"container-fluid"],[1,"row","page-title","mt-2","d-print-none"],[1,"col-md-12"],["aria-label","breadcrumb",1,"float-right","mt-1"],[1,"breadcrumb"],[1,"breadcrumb-item"],[1,"fw-600"],["aria-current","page",1,"breadcrumb-item","active"],[1,"mb-1","mt-0"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"row","m-b-20"],[1,"offset-md-7","col-md-5"],[1,"float-right","mb-3"],["routerLink","/candidate/add-candidate",1,"btn","btn-primary","btn-sm"],[1,"uil-plus-circle"],[1,"offset-md-9","col-md-3"],["type","text","placeholder","Search",1,"form-control",3,"keyup"],[1,"row","m-b-30"],[1,"mt-4","mat-elevation-z8","table-responsive"],["mat-table","",1,"table",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","email"],["matColumnDef","phone"],["matColumnDef","grade"],["matColumnDef","registeredOn"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["id","delete-modal","role","dialog",1,"modal","fade"],[1,"modal-dialog","modal-sm"],[1,"modal-body","text-center"],[1,"modal-content"],[1,"text-danger","fs-34","d-inline-block","uil","uil-trash-alt","mb-2"],[1,"row","m-t-15"],[1,"col-sm-12"],["type","button","data-target","#delete-sccess-modal","data-toggle","modal","data-dismiss","modal",1,"btn","btn-sm","btn-success","mr-1",3,"click"],["type","button","data-dismiss","modal",1,"btn","btn-sm","btn-danger","ml-1"],["id","reason",1,"modal","fade"],[1,"modal-dialog","modal-md"],[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],[1,"form-group"],["rows","7",1,"form-control"],[1,"margin-top-15","text-center"],["type","button","data-dismiss","modal",1,"btn","btn-success"],["id","view",1,"modal","fade"],["class","modal-body",4,"ngIf"],["mat-header-cell",""],["mat-cell",""],[1,"d-flex"],["data-target","#delete-modal","data-toggle","modal",1,"btn","btn-danger","mr-2","btn-sm",3,"click"],[1,"uil-trash","mr-2"],["data-target","#view","data-toggle","modal",1,"btn","btn-warning","mr-2","btn-sm",3,"click"],[1,"uil-eye","mr-2"],["type","button",1,"btn","btn-primary","btn-sm",3,"routerLink"],[1,"uil","uil-edit-alt","mr-2"],["mat-header-row",""],["mat-row",""],[1,"profile-view",2,"background-image","url(assets/images/icon/pattern.svg)","background-repeat","no-repeat"],[1,"col-md-8"],[1,"profile-view-left"],[1,"add-box","gal-box","image-upload","im-50"],["id","prof",1,"gal-result",3,"src"],[1,"ml-3","view-title"],[1,"white"],[1,"pt-48pt","pb-48pt"],[1,"profile-card","padding-33"],[1,"profile-view-ed-info"],["class","profile-view-ed-info border-right",4,"ngIf"],[1,"profile-view-ed-info","border-right"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(u.Pb(0,"app-header"),u.Pb(1,"app-sidebar"),u.Pb(2,"div",0),u.Ub(3,"div",1),u.Ub(4,"div",2),u.Ub(5,"div",3),u.Ub(6,"div",4),u.Ub(7,"div",5),u.Ub(8,"nav",6),u.Ub(9,"ol",7),u.Ub(10,"li",8),u.Ub(11,"a",9),u.Lc(12,"Candidate"),u.Tb(),u.Tb(),u.Ub(13,"li",10),u.Lc(14,"Candidate"),u.Tb(),u.Tb(),u.Tb(),u.Ub(15,"h4",11),u.Lc(16,"Candidate"),u.Tb(),u.Tb(),u.Tb(),u.Ub(17,"div",12),u.Ub(18,"div",13),u.Ub(19,"div",14),u.Ub(20,"div",15),u.Ub(21,"div",16),u.Ub(22,"div",17),u.Ub(23,"div",18),u.Ub(24,"button",19),u.Pb(25,"i",20),u.Lc(26," Add"),u.Tb(),u.Tb(),u.Tb(),u.Ub(27,"div",21),u.Ub(28,"input",22),u.cc("keyup",(function(t){return e.applyFilter(t)})),u.Tb(),u.Tb(),u.Tb(),u.Pb(29,"div",23),u.Ub(30,"div",24),u.Ub(31,"table",25),u.Sb(32,26),u.Jc(33,L,2,0,"th",27),u.Jc(34,C,2,2,"td",28),u.Rb(),u.Sb(35,29),u.Jc(36,w,2,0,"th",27),u.Jc(37,y,2,1,"td",28),u.Rb(),u.Sb(38,30),u.Jc(39,P,2,0,"th",27),u.Jc(40,S,2,1,"td",28),u.Rb(),u.Sb(41,31),u.Jc(42,x,2,0,"th",27),u.Jc(43,k,2,1,"td",28),u.Rb(),u.Sb(44,32),u.Jc(45,R,2,0,"th",27),u.Jc(46,N,3,3,"td",28),u.Rb(),u.Sb(47,33),u.Jc(48,D,2,0,"th",27),u.Jc(49,I,11,1,"td",28),u.Rb(),u.Jc(50,J,1,0,"tr",34),u.Jc(51,F,1,0,"tr",35),u.Tb(),u.Pb(52,"mat-paginator",36),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(53,"div",37),u.Ub(54,"div",38),u.Ub(55,"div",39),u.Ub(56,"div",40),u.Ub(57,"div",12),u.Ub(58,"div",5),u.Pb(59,"i",41),u.Ub(60,"h6"),u.Lc(61,"Are you sure want to delete?"),u.Tb(),u.Tb(),u.Tb(),u.Pb(62,"hr"),u.Ub(63,"div",42),u.Ub(64,"div",43),u.Ub(65,"button",44),u.cc("click",(function(){return e.deleteSelectedStudents()})),u.Lc(66,"Delete"),u.Tb(),u.Ub(67,"button",45),u.Lc(68,"Cancel"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(69,"div",46),u.Ub(70,"div",47),u.Ub(71,"form"),u.Ub(72,"div",40),u.Ub(73,"div",48),u.Ub(74,"h6",49),u.Lc(75,"Rejection Reason"),u.Tb(),u.Tb(),u.Ub(76,"div",50),u.Ub(77,"div",51),u.Ub(78,"label"),u.Lc(79,"Reason For Rejection"),u.Tb(),u.Ub(80,"textarea",52),u.Lc(81,"\n                  "),u.Tb(),u.Tb(),u.Ub(82,"div",53),u.Ub(83,"button",54),u.Lc(84,"Save"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(85,"div",55),u.Ub(86,"div",47),u.Ub(87,"form"),u.Ub(88,"div",40),u.Ub(89,"div",48),u.Ub(90,"h6",49),u.Lc(91,"View Requested Student"),u.Tb(),u.Tb(),u.Jc(92,G,51,8,"div",56),u.Tb(),u.Tb(),u.Tb(),u.Tb()),2&t&&(u.Cb(31),u.oc("dataSource",e.dataSource),u.Cb(19),u.oc("matHeaderRowDef",e.displayedColumns),u.Cb(1),u.oc("matRowDefColumns",e.displayedColumns),u.Cb(1),u.oc("pageSizeOptions",u.sc(5,j)),u.Cb(40),u.oc("ngIf",e.user&&e.student))},directives:[v.a,g.a,r.c,c.j,c.c,c.e,c.b,c.g,c.i,d.a,h.B,h.r,h.s,i.l,c.d,c.a,c.f,c.h,i.k],pipes:[i.e],styles:[""]}),_),H=b("lGQG"),M=b("yjpJ"),q=b("eQbi");function V(t,e){1&t&&u.Pb(0,"app-custom-password",24)}function Q(t,e){1&t&&u.Pb(0,"app-custom-password",25)}function Y(t,e){1&t&&(u.Ub(0,"small",26),u.Lc(1," Phone number must be 10 digits "),u.Tb())}function K(t,e){1&t&&(u.Ub(0,"span"),u.Lc(1,"Create Candidate"),u.Tb())}function X(t,e){1&t&&(u.Ub(0,"span"),u.Lc(1,"Update Candidate"),u.Tb())}var Z,W,tt=((W=function(){function t(e,b,a,i){_classCallCheck(this,t),this.authService=e,this.studentService=b,this.activatedRoute=a,this.fb=i,this.mobNumberPattern="^((\\+91-?)|0)?[0-9]{10}$"}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.activatedRoute.paramMap.subscribe((function(e){return Object(m.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var b;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.studentId=e.get("studentId"),t.next=3,this.studentService.fetchStudentById(this.studentId);case 3:b=t.sent,this.populateForm(b);case 5:case"end":return t.stop()}}),t,this)})))})),this.userRegistrationForm=this.fb.group({firstName:["",h.z.required],email:["",[h.z.required,h.z.email]],password:["",h.z.required],confirmPassword:["",h.z.required],phone:["",[h.z.required,h.z.pattern(this.mobNumberPattern)]],grade:["",h.z.required]},{validators:function(t){var e=t.value;return e.password!==e.confirmPassword?{passwordMatch:!1}:null}})}},{key:"populateForm",value:function(t){this.userRegistrationForm=this.fb.group({firstName:["",h.z.required],email:["",[h.z.required,h.z.email]],phone:["",[h.z.required,h.z.pattern(this.mobNumberPattern)]],grade:["",h.z.required]});var e=t.education||{};this.userRegistrationForm.patchValue(Object.assign(Object.assign({},t.userId),e))}},{key:"onSubmit",value:function(){var t=this.userRegistrationForm.value;this.studentId?this.authService.updateStudent(this.studentId,t):this.authService.registerNewStudent(t)}}]),t}()).\u0275fac=function(t){return new(t||W)(u.Ob(H.a),u.Ob(f),u.Ob(r.a),u.Ob(h.f))},W.\u0275cmp=u.Ib({type:W,selectors:[["app-candidate-registration"]],decls:53,vars:13,consts:[[1,"authentication-form","authentication-form1",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"form-control-label"],[1,"input-group","input-group-merge"],[1,"input-group-prepend"],[1,"input-group-text"],["src","assets/images/icon/name.svg","width","20px","height","20px"],["type","name","formControlName","firstName","id","name","placeholder","Enter Name",1,"form-control"],[3,"control"],[1,"form-group","mt-4"],["src","assets/images/icon/mail.svg","width","20px","height","20px"],["type","email","formControlName","email","id","email","placeholder","Enter E-amil Addresss",1,"form-control"],["label","Password","formControlName","password","placeholder","Enter Password",4,"ngIf"],["label","Confirm Password","formControlName","confirmPassword","placeholder","Enter Confirm Password",4,"ngIf"],[1,"styled-select","input-group","input-group-merge"],["src","assets/images/icon/course.svg","width","20px","height","20px"],["formControlName","grade",1,"minimal","form-control"],["src","assets/images/icon/mobile.svg","width","20px","height","20px"],[1,"minimal","form-control","phon-abs"],["type","number","formControlName","phone","placeholder","9865443333",1,"form-control","pad-97"],["id","passwordHelpBlock","class","form-text text-danger",4,"ngIf"],[1,"mt-4","form-group","mb-0","text-center"],[1,"btn","btn-block","btn-filled","form-btn",3,"disabled"],[4,"ngIf"],["label","Password","formControlName","password","placeholder","Enter Password"],["label","Confirm Password","formControlName","confirmPassword","placeholder","Enter Confirm Password"],["id","passwordHelpBlock",1,"form-text","text-danger"]],template:function(t,e){1&t&&(u.Ub(0,"form",0),u.cc("ngSubmit",(function(){return e.onSubmit()})),u.Ub(1,"div",1),u.Ub(2,"label",2),u.Lc(3,"Name"),u.Tb(),u.Ub(4,"div",3),u.Ub(5,"div",4),u.Ub(6,"span",5),u.Pb(7,"img",6),u.Tb(),u.Tb(),u.Pb(8,"input",7),u.Tb(),u.Pb(9,"show-errors",8),u.Tb(),u.Ub(10,"div",9),u.Ub(11,"label",2),u.Lc(12,"Email Address"),u.Tb(),u.Ub(13,"div",3),u.Ub(14,"div",4),u.Ub(15,"span",5),u.Pb(16,"img",10),u.Tb(),u.Tb(),u.Pb(17,"input",11),u.Tb(),u.Pb(18,"show-errors",8),u.Tb(),u.Jc(19,V,1,0,"app-custom-password",12),u.Pb(20,"show-errors",8),u.Jc(21,Q,1,0,"app-custom-password",13),u.Pb(22,"show-errors",8),u.Ub(23,"div",9),u.Ub(24,"label",2),u.Lc(25,"Select Grade/Group/Course"),u.Tb(),u.Ub(26,"div",14),u.Ub(27,"div",4),u.Ub(28,"span",5),u.Pb(29,"img",15),u.Tb(),u.Tb(),u.Ub(30,"select",16),u.Ub(31,"option"),u.Lc(32,"Select Grade/Group/Course"),u.Tb(),u.Ub(33,"option"),u.Lc(34,"Choose"),u.Tb(),u.Tb(),u.Tb(),u.Pb(35,"show-errors",8),u.Tb(),u.Ub(36,"div",9),u.Ub(37,"label",2),u.Lc(38,"Phone Number"),u.Tb(),u.Ub(39,"div",3),u.Ub(40,"div",4),u.Ub(41,"span",5),u.Pb(42,"img",17),u.Tb(),u.Tb(),u.Ub(43,"select",18),u.Ub(44,"option"),u.Lc(45,"+91"),u.Tb(),u.Tb(),u.Pb(46,"input",19),u.Tb(),u.Pb(47,"show-errors",8),u.Jc(48,Y,2,0,"small",20),u.Tb(),u.Ub(49,"div",21),u.Ub(50,"button",22),u.Jc(51,K,2,0,"span",23),u.Jc(52,X,2,0,"span",23),u.Tb(),u.Tb(),u.Tb()),2&t&&(u.oc("formGroup",e.userRegistrationForm),u.Cb(9),u.oc("control",e.userRegistrationForm.get("firstName")),u.Cb(9),u.oc("control",e.userRegistrationForm.get("email")),u.Cb(1),u.oc("ngIf",!e.studentId),u.Cb(1),u.oc("control",e.userRegistrationForm.get("password")),u.Cb(1),u.oc("ngIf",!e.studentId),u.Cb(1),u.oc("control",e.userRegistrationForm.get("confirmPassword")),u.Cb(13),u.oc("control",e.userRegistrationForm.get("grade")),u.Cb(12),u.oc("control",e.userRegistrationForm.get("phone")),u.Cb(1),u.oc("ngIf",e.userRegistrationForm.get("phone").hasError("pattern")&&e.userRegistrationForm.get("phone").touched),u.Cb(2),u.oc("disabled",e.userRegistrationForm.invalid),u.Cb(1),u.oc("ngIf",!e.studentId),u.Cb(1),u.oc("ngIf",e.studentId))},directives:[h.B,h.r,h.j,h.d,h.q,h.i,M.a,i.l,h.y,h.u,h.A,h.v,q.a],styles:[""]}),W),et=((Z=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){$(document).on("change",".fileInput",(function(t){var e=t.target.files[0];this.images=e,iEdit.open(e,!0,(function(e){$(t.target).closest(".profile-img").find(".result").attr("src",e)}))||alert("Whoops! That is not an image!")}))}}]),t}()).\u0275fac=function(t){return new(t||Z)},Z.\u0275cmp=u.Ib({type:Z,selectors:[["app-add-condidate"]],decls:54,vars:0,consts:[["id","candidatePage"],[1,"content-page"],[1,"content"],[1,"container-fluid"],[1,"row","page-title","mt-2","d-print-none"],[1,"col-md-12"],["aria-label","breadcrumb",1,"float-right","mt-1"],[1,"breadcrumb"],[1,"breadcrumb-item"],[1,"fw-600"],["aria-current","page",1,"breadcrumb-item","active"],[1,"mb-1","mt-0"],[1,"row"],[1,"col-12","col-md-12","col-sm-12","col-lg-12"],[1,"card"],[1,"card-body"],["id","delete-modal","role","dialog",1,"modal","fade"],[1,"modal-dialog","modal-sm"],[1,"modal-body","text-center"],[1,"text-danger","fs-34","d-inline-block","uil","uil-trash-alt","mb-2"],[1,"row","m-t-15"],[1,"col-sm-12"],["type","button","data-target","#delete-sccess-modal","data-toggle","modal","data-dismiss","modal",1,"btn","btn-sm","btn-success","mr-1"],["type","button","data-dismiss","modal",1,"btn","btn-sm","btn-danger","ml-1"],["id","reason",1,"modal","fade"],[1,"modal-dialog","modal-md"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],[1,"form-group"],["rows","7",1,"form-control"],[1,"margin-top-15","text-center"],["type","button","data-dismiss","modal",1,"btn","btn-success"]],template:function(t,e){1&t&&(u.Pb(0,"app-header"),u.Pb(1,"app-sidebar"),u.Pb(2,"div",0),u.Ub(3,"div",1),u.Ub(4,"div",2),u.Ub(5,"div",3),u.Ub(6,"div",4),u.Ub(7,"div",5),u.Ub(8,"nav",6),u.Ub(9,"ol",7),u.Ub(10,"li",8),u.Ub(11,"a",9),u.Lc(12,"Candidate"),u.Tb(),u.Tb(),u.Ub(13,"li",10),u.Lc(14,"Add Candidate"),u.Tb(),u.Tb(),u.Tb(),u.Ub(15,"h4",11),u.Lc(16,"Add Candidate"),u.Tb(),u.Tb(),u.Tb(),u.Ub(17,"div",12),u.Ub(18,"div",13),u.Ub(19,"div",14),u.Ub(20,"div",15),u.Ub(21,"div",12),u.Pb(22,"app-candidate-registration"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(23,"div",16),u.Ub(24,"div",17),u.Ub(25,"div",18),u.Ub(26,"div",12),u.Ub(27,"div",5),u.Pb(28,"i",19),u.Ub(29,"h6"),u.Lc(30,"Are you sure want to delete?"),u.Tb(),u.Tb(),u.Tb(),u.Pb(31,"hr"),u.Ub(32,"div",20),u.Ub(33,"div",21),u.Ub(34,"button",22),u.Lc(35,"Delete"),u.Tb(),u.Ub(36,"button",23),u.Lc(37,"Cancel"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(38,"div",24),u.Ub(39,"div",25),u.Ub(40,"form"),u.Ub(41,"div",26),u.Ub(42,"div",27),u.Ub(43,"h6",28),u.Lc(44,"Rejection Reason"),u.Tb(),u.Tb(),u.Ub(45,"div",29),u.Ub(46,"div",30),u.Ub(47,"label"),u.Lc(48,"Reason For Rejection"),u.Tb(),u.Ub(49,"textarea",31),u.Lc(50,"\n                  "),u.Tb(),u.Tb(),u.Ub(51,"div",32),u.Ub(52,"button",33),u.Lc(53,"Save"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb())},directives:[v.a,g.a,tt,h.B,h.r,h.s],styles:[""]}),Z);function bt(t,e){1&t&&(u.Ub(0,"th",63),u.Ub(1,"div",64),u.Pb(2,"input",65),u.Ub(3,"label",66),u.Lc(4,"Sr. No."),u.Tb(),u.Tb(),u.Tb())}function at(t,e){if(1&t&&(u.Ub(0,"td",67),u.Ub(1,"div",64),u.Pb(2,"input",65),u.Ub(3,"label",66),u.Lc(4),u.Tb(),u.Tb(),u.Tb()),2&t){var b=e.$implicit;u.Cb(4),u.Nc("",b.id,".")}}function it(t,e){1&t&&(u.Ub(0,"th",63),u.Lc(1,"Group Name"),u.Tb())}function nt(t,e){if(1&t&&(u.Ub(0,"td",67),u.Lc(1),u.Tb()),2&t){var b=e.$implicit;u.Cb(1),u.Nc(" ",b.uid," ")}}function ot(t,e){1&t&&(u.Ub(0,"th",63),u.Lc(1,"Group Details"),u.Tb())}function rt(t,e){if(1&t&&(u.Ub(0,"td",67),u.Lc(1),u.Tb()),2&t){var b=e.$implicit;u.Cb(1),u.Nc(" ",b.username," ")}}function dt(t,e){1&t&&(u.Ub(0,"th",63),u.Lc(1,"Associated Candidate"),u.Tb())}function ct(t,e){if(1&t&&(u.Ub(0,"td",67),u.Lc(1),u.Tb()),2&t){var b=e.$implicit;u.Cb(1),u.Nc(" ",b.eroll," ")}}function st(t,e){1&t&&(u.Ub(0,"th",63),u.Lc(1,"Action"),u.Tb())}function lt(t,e){1&t&&(u.Ub(0,"td",67),u.Ub(1,"div",68),u.Ub(2,"button",69),u.Pb(3,"i",70),u.Lc(4," Check "),u.Tb(),u.Ub(5,"button",71),u.Pb(6,"i",72),u.Lc(7," Delete "),u.Tb(),u.Ub(8,"button",73),u.Pb(9,"i",74),u.Lc(10,"Edit"),u.Tb(),u.Tb(),u.Tb())}function ut(t,e){1&t&&u.Pb(0,"tr",75)}function mt(t,e){1&t&&u.Pb(0,"tr",76)}var pt,Tt,Ut,ft,vt,gt=function(){return[10,20,50]},ht=((pt=function(){function t(){_classCallCheck(this,t),this.displayedColumns=["id","uid","username","eroll","assign"],this.dataSource=new c.k(Lt)}return _createClass(t,[{key:"ngOnInit",value:function(){this.dataSource.paginator=this.paginator}}]),t}()).\u0275fac=function(t){return new(t||pt)},pt.\u0275cmp=u.Ib({type:pt,selectors:[["app-c-group"]],viewQuery:function(t,e){var b;1&t&&u.Hc(d.a,!0),2&t&&u.wc(b=u.dc())&&(e.paginator=b.first)},decls:102,vars:5,consts:[["id","groupPage"],[1,"content-page"],[1,"content"],[1,"container-fluid"],[1,"row","page-title","mt-2","d-print-none"],[1,"col-md-12"],["aria-label","breadcrumb",1,"float-right","mt-1"],[1,"breadcrumb"],[1,"breadcrumb-item"],[1,"fw-600"],["aria-current","page",1,"breadcrumb-item","active"],[1,"mb-1","mt-0"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"row","m-b-20"],[1,"col-md-3"],[1,"form-control"],[1,"offset-md-4","col-md-5"],[1,"float-right"],["data-target","#add","data-toggle","modal",1,"btn","btn-primary","btn-sm","mr-3"],[1,"uil-plus-circle"],["id","btn-new-event",1,"btn","btn-sm","mr-3","btn-success"],[1,"uil","uil-export"],["data-target","#delete-modal","data-toggle","modal",1,"btn","btn-white","btn-sm","text-danger"],[1,"uil-trash"],[1,"row","m-b-30"],[1,"offset-md-9","col-md-3"],["type","text","placeholder","Search",1,"form-control"],[1,"mt-4","mat-elevation-z8","table-responsive"],["mat-table","",1,"table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","uid"],["matColumnDef","username"],["matColumnDef","eroll"],["matColumnDef","assign"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["id","delete-modal","role","dialog",1,"modal","fade"],[1,"modal-dialog","modal-sm"],[1,"modal-body","text-center"],[1,"text-danger","fs-34","d-inline-block","uil","uil-trash-alt","mb-2"],[1,"row","m-t-15"],[1,"col-sm-12"],["type","button","data-target","#delete-sccess-modal","data-toggle","modal","data-dismiss","modal",1,"btn","btn-sm","btn-success","mr-1"],["type","button","data-dismiss","modal",1,"btn","btn-sm","btn-danger","ml-1"],["id","add",1,"modal","fade"],[1,"modal-dialog","modal-md"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],[1,"form-group"],[1,"text-danger"],["type","text",1,"form-control"],["rows","8",1,"form-control"],[1,"margin-top-15","text-center"],["type","button","data-dismiss","modal",1,"btn","btn-success","mr-3"],["type","button","data-dismiss","modal",1,"btn","btn-primary"],["mat-header-cell",""],[1,"custom-control","custom-checkbox","mb-2"],["type","checkbox","id","customCheck1",1,"custom-control-input"],["for","customCheck1",1,"custom-control-label"],["mat-cell",""],[1,"d-flex"],["data-target","#delete-modal","data-toggle","modal",1,"btn","btn-warning","mr-2","btn-sm"],[1,"uil","uil-check","mr-2"],["data-target","#delete-modal","data-toggle","modal",1,"btn","btn-danger","mr-2","btn-sm"],[1,"uil-trash","mr-2"],["data-target","#","data-toggle","modal",1,"btn","btn-primary","btn-sm"],[1,"uil","uil-edit-alt","mr-2"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(u.Pb(0,"app-header"),u.Pb(1,"app-sidebar"),u.Pb(2,"div",0),u.Ub(3,"div",1),u.Ub(4,"div",2),u.Ub(5,"div",3),u.Ub(6,"div",4),u.Ub(7,"div",5),u.Ub(8,"nav",6),u.Ub(9,"ol",7),u.Ub(10,"li",8),u.Ub(11,"a",9),u.Lc(12,"Candidate"),u.Tb(),u.Tb(),u.Ub(13,"li",10),u.Lc(14,"Group"),u.Tb(),u.Tb(),u.Tb(),u.Ub(15,"h4",11),u.Lc(16,"Group"),u.Tb(),u.Tb(),u.Tb(),u.Ub(17,"div",12),u.Ub(18,"div",13),u.Ub(19,"div",14),u.Ub(20,"div",15),u.Ub(21,"div",16),u.Ub(22,"div",17),u.Ub(23,"select",18),u.Ub(24,"option"),u.Lc(25,"Select Filter"),u.Tb(),u.Ub(26,"option"),u.Lc(27,"Test Name"),u.Tb(),u.Ub(28,"option"),u.Lc(29,"Test Category"),u.Tb(),u.Tb(),u.Tb(),u.Ub(30,"div",19),u.Ub(31,"div",20),u.Ub(32,"button",21),u.Pb(33,"i",22),u.Lc(34," Add"),u.Tb(),u.Ub(35,"button",23),u.Pb(36,"i",24),u.Lc(37," Export"),u.Tb(),u.Ub(38,"button",25),u.Pb(39,"i",26),u.Lc(40," Delete "),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(41,"div",27),u.Ub(42,"div",28),u.Pb(43,"input",29),u.Tb(),u.Tb(),u.Ub(44,"div",30),u.Ub(45,"table",31),u.Sb(46,32),u.Jc(47,bt,5,0,"th",33),u.Jc(48,at,5,1,"td",34),u.Rb(),u.Sb(49,35),u.Jc(50,it,2,0,"th",33),u.Jc(51,nt,2,1,"td",34),u.Rb(),u.Sb(52,36),u.Jc(53,ot,2,0,"th",33),u.Jc(54,rt,2,1,"td",34),u.Rb(),u.Sb(55,37),u.Jc(56,dt,2,0,"th",33),u.Jc(57,ct,2,1,"td",34),u.Rb(),u.Sb(58,38),u.Jc(59,st,2,0,"th",33),u.Jc(60,lt,11,0,"td",34),u.Rb(),u.Jc(61,ut,1,0,"tr",39),u.Jc(62,mt,1,0,"tr",40),u.Tb(),u.Pb(63,"mat-paginator",41),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(64,"div",42),u.Ub(65,"div",43),u.Ub(66,"div",44),u.Ub(67,"div",12),u.Ub(68,"div",5),u.Pb(69,"i",45),u.Ub(70,"h6"),u.Lc(71,"Are you sure want to delete?"),u.Tb(),u.Tb(),u.Tb(),u.Pb(72,"hr"),u.Ub(73,"div",46),u.Ub(74,"div",47),u.Ub(75,"button",48),u.Lc(76,"Delete"),u.Tb(),u.Ub(77,"button",49),u.Lc(78,"Cancel"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(79,"div",50),u.Ub(80,"div",51),u.Ub(81,"form"),u.Ub(82,"div",52),u.Ub(83,"div",53),u.Ub(84,"h6",54),u.Lc(85,"Add Group"),u.Tb(),u.Tb(),u.Ub(86,"div",55),u.Ub(87,"div",56),u.Ub(88,"label"),u.Ub(89,"span",57),u.Lc(90,"*"),u.Tb(),u.Lc(91," Group Name"),u.Tb(),u.Pb(92,"input",58),u.Tb(),u.Ub(93,"div",56),u.Ub(94,"label"),u.Lc(95,"Group Details"),u.Tb(),u.Pb(96,"textarea",59),u.Tb(),u.Ub(97,"div",60),u.Ub(98,"button",61),u.Lc(99,"Save"),u.Tb(),u.Ub(100,"button",62),u.Lc(101,"Save & New"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb()),2&t&&(u.Cb(45),u.oc("dataSource",e.dataSource),u.Cb(16),u.oc("matHeaderRowDef",e.displayedColumns),u.Cb(1),u.oc("matRowDefColumns",e.displayedColumns),u.Cb(1),u.oc("pageSizeOptions",u.sc(4,gt)))},directives:[v.a,g.a,h.u,h.A,c.j,c.c,c.e,c.b,c.g,c.i,d.a,h.B,h.r,h.s,c.d,c.a,c.f,c.h],styles:[""]}),pt),Lt=[{id:"1",uid:"shivani",username:"data",eroll:"data"}],Ct=[{path:"candidate",component:B},{path:"add-candidate",component:et},{path:":studentId/edit",component:et},{path:"group",component:ht},{path:"document",component:(Ut=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),Ut.\u0275fac=function(t){return new(t||Ut)},Ut.\u0275cmp=u.Ib({type:Ut,selectors:[["app-c-document"]],decls:150,vars:0,consts:[["id","documentpage"],[1,"content-page"],[1,"content"],[1,"container-fluid"],[1,"row","page-title","mt-2","d-print-none"],[1,"col-md-12"],["aria-label","breadcrumb",1,"float-right","mt-1"],[1,"breadcrumb"],[1,"breadcrumb-item"],[1,"fw-600"],["aria-current","page",1,"breadcrumb-item","active"],[1,"mb-1","mt-0"],[1,"row"],[1,"col-12","col-md-8","col-sm-8","col-lg-8"],[1,"card"],[1,"card-body"],[1,"form-group"],[1,"text-danger"],["type","text",1,"form-control"],["rows","7",1,"form-control"],[1,"col-md-6"],[1,"form-control"],[1,"input-group"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"custom-file"],["type","file","id","inputGroupFile02",1,"custom-file-input"],["for","inputGroupFile02",1,"custom-file-label"],[1,"col-md-6","mx-auto"],[1,"mt-3","text-center","form-group"],[1,"btn","btn-success","mr-3","btn-sm"],[1,"btn","btn-primary","mr-3","btn-sm"],[1,"btn","btn-danger","btn-sm"],[1,"col-12","col-md-4","col-sm-4","col-lg-4"],[1,"table-responsive"],[1,"table","table-sm","mb-0"],[2,"width","10%"],["id","delete-modal","role","dialog",1,"modal","fade"],[1,"modal-dialog","modal-sm"],[1,"modal-body","text-center"],[1,"text-danger","fs-34","d-inline-block","uil","uil-trash-alt","mb-2"],[1,"row","m-t-15"],[1,"col-sm-12"],["type","button","data-target","#delete-sccess-modal","data-toggle","modal","data-dismiss","modal",1,"btn","btn-sm","btn-success","mr-1"],["type","button","data-dismiss","modal",1,"btn","btn-sm","btn-danger","ml-1"],["id","reason",1,"modal","fade"],[1,"modal-dialog","modal-md"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],[1,"modal-body"],[1,"margin-top-15","text-center"],["type","button","data-dismiss","modal",1,"btn","btn-success"]],template:function(t,e){1&t&&(u.Pb(0,"app-header"),u.Pb(1,"app-sidebar"),u.Pb(2,"div",0),u.Ub(3,"div",1),u.Ub(4,"div",2),u.Ub(5,"div",3),u.Ub(6,"div",4),u.Ub(7,"div",5),u.Ub(8,"nav",6),u.Ub(9,"ol",7),u.Ub(10,"li",8),u.Ub(11,"a",9),u.Lc(12,"Candidate"),u.Tb(),u.Tb(),u.Ub(13,"li",10),u.Lc(14,"Document"),u.Tb(),u.Tb(),u.Tb(),u.Ub(15,"h4",11),u.Lc(16,"Document"),u.Tb(),u.Tb(),u.Tb(),u.Ub(17,"div",12),u.Ub(18,"div",13),u.Ub(19,"div",14),u.Ub(20,"div",15),u.Ub(21,"div",12),u.Ub(22,"div",5),u.Ub(23,"div",16),u.Ub(24,"h6"),u.Lc(25,"Document Upload"),u.Tb(),u.Tb(),u.Tb(),u.Ub(26,"div",5),u.Ub(27,"div",16),u.Ub(28,"label"),u.Ub(29,"span",17),u.Lc(30,"*"),u.Tb(),u.Lc(31,"Document Name"),u.Tb(),u.Pb(32,"input",18),u.Tb(),u.Tb(),u.Ub(33,"div",5),u.Ub(34,"div",16),u.Ub(35,"label"),u.Lc(36,"Document Description"),u.Tb(),u.Pb(37,"textarea",19),u.Tb(),u.Tb(),u.Ub(38,"div",20),u.Ub(39,"div",16),u.Ub(40,"label"),u.Lc(41,"Choose Document Type"),u.Tb(),u.Ub(42,"select",21),u.Ub(43,"option"),u.Lc(44,"choose"),u.Tb(),u.Ub(45,"option"),u.Lc(46,"choose"),u.Tb(),u.Ub(47,"option"),u.Lc(48,"choose"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(49,"div",20),u.Ub(50,"div",16),u.Ub(51,"label"),u.Ub(52,"span",17),u.Lc(53,"*"),u.Tb(),u.Lc(54,"File Upload "),u.Ub(55,"small"),u.Lc(56,"(.Pdf,,Xls,.Doc,.Ppt,.Jpg,.Png)"),u.Tb(),u.Tb(),u.Ub(57,"div",22),u.Ub(58,"div",23),u.Ub(59,"span",24),u.Lc(60,"Upload"),u.Tb(),u.Tb(),u.Ub(61,"div",25),u.Pb(62,"input",26),u.Ub(63,"label",27),u.Lc(64,"Choose file"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(65,"div",20),u.Ub(66,"div",16),u.Ub(67,"label"),u.Lc(68,"Publish Online"),u.Tb(),u.Ub(69,"select",21),u.Ub(70,"option"),u.Lc(71,"Yes"),u.Tb(),u.Ub(72,"option"),u.Lc(73,"No"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(74,"div",20),u.Ub(75,"div",16),u.Ub(76,"label"),u.Lc(77,"Group"),u.Tb(),u.Ub(78,"select",21),u.Ub(79,"option"),u.Lc(80,"Choose"),u.Tb(),u.Ub(81,"option"),u.Lc(82,"Choose"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(83,"div",12),u.Ub(84,"div",28),u.Ub(85,"div",29),u.Ub(86,"button",30),u.Lc(87,"Save "),u.Tb(),u.Ub(88,"button",31),u.Lc(89,"Save & Next "),u.Tb(),u.Ub(90,"button",32),u.Lc(91,"Cancel "),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(92,"div",33),u.Ub(93,"div",14),u.Ub(94,"div",15),u.Ub(95,"div",34),u.Ub(96,"table",35),u.Ub(97,"thead"),u.Ub(98,"tr"),u.Ub(99,"th",36),u.Lc(100,"S.No."),u.Tb(),u.Ub(101,"th"),u.Lc(102,"Recently Added Documents"),u.Tb(),u.Tb(),u.Tb(),u.Ub(103,"tbody"),u.Ub(104,"tr"),u.Ub(105,"th"),u.Lc(106,"1"),u.Tb(),u.Ub(107,"td"),u.Lc(108,"Traning"),u.Tb(),u.Tb(),u.Ub(109,"tr"),u.Ub(110,"th"),u.Lc(111,"2"),u.Tb(),u.Ub(112,"td"),u.Lc(113,"Traning2"),u.Tb(),u.Tb(),u.Ub(114,"tr"),u.Ub(115,"th"),u.Lc(116,"3"),u.Tb(),u.Ub(117,"td"),u.Lc(118,"Traning3"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(119,"div",37),u.Ub(120,"div",38),u.Ub(121,"div",39),u.Ub(122,"div",12),u.Ub(123,"div",5),u.Pb(124,"i",40),u.Ub(125,"h6"),u.Lc(126,"Are you sure want to delete?"),u.Tb(),u.Tb(),u.Tb(),u.Pb(127,"hr"),u.Ub(128,"div",41),u.Ub(129,"div",42),u.Ub(130,"button",43),u.Lc(131,"Delete"),u.Tb(),u.Ub(132,"button",44),u.Lc(133,"Cancel"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(134,"div",45),u.Ub(135,"div",46),u.Ub(136,"form"),u.Ub(137,"div",47),u.Ub(138,"div",48),u.Ub(139,"h6",49),u.Lc(140,"Rejection Reason"),u.Tb(),u.Tb(),u.Ub(141,"div",50),u.Ub(142,"div",16),u.Ub(143,"label"),u.Lc(144,"Reason For Rejection"),u.Tb(),u.Ub(145,"textarea",19),u.Lc(146,"\n                  "),u.Tb(),u.Tb(),u.Ub(147,"div",51),u.Ub(148,"button",52),u.Lc(149,"Save"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb())},directives:[v.a,g.a,h.u,h.A,h.B,h.r,h.s],styles:[""]}),Ut)},{path:"candidate-import-data",component:(Tt=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),Tt.\u0275fac=function(t){return new(t||Tt)},Tt.\u0275cmp=u.Ib({type:Tt,selectors:[["app-candidate-import-data"]],decls:48,vars:0,consts:[["id","importpage"],[1,"content-page"],[1,"content"],[1,"container-fluid"],[1,"row","page-title","mt-2","d-print-none"],[1,"col-md-12"],["aria-label","breadcrumb",1,"float-right","mt-1"],[1,"breadcrumb"],[1,"breadcrumb-item"],[1,"fw-600"],["aria-current","page",1,"breadcrumb-item","active"],[1,"mb-1","mt-0"],[1,"col-md-9","mx-auto"],[1,"card"],[1,"card-body"],[1,"row"],[1,"col-md-3"],[1,"btn","btn-primary","btn-sm"],[1,"col-md-7","mx-auto"],[1,"form-group"],[1,"text-danger"],[1,"input-group"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"custom-file"],["type","file","id","inputGroupFile02",1,"custom-file-input"],["for","inputGroupFile02",1,"custom-file-label"],[1,"col-md-6","mx-auto"],[1,"mt-3","text-center","form-group"],[1,"btn","btn-success","btn-sm"],[1,"uil","uil-import"]],template:function(t,e){1&t&&(u.Pb(0,"app-header"),u.Pb(1,"app-sidebar"),u.Pb(2,"div",0),u.Ub(3,"div",1),u.Ub(4,"div",2),u.Ub(5,"div",3),u.Ub(6,"div",4),u.Ub(7,"div",5),u.Ub(8,"nav",6),u.Ub(9,"ol",7),u.Ub(10,"li",8),u.Ub(11,"a",9),u.Lc(12,"Candidate"),u.Tb(),u.Tb(),u.Ub(13,"li",10),u.Lc(14,"Import Data"),u.Tb(),u.Tb(),u.Tb(),u.Ub(15,"h4",11),u.Lc(16,"Import Data "),u.Tb(),u.Tb(),u.Tb(),u.Ub(17,"div",12),u.Ub(18,"div",13),u.Ub(19,"div",14),u.Ub(20,"div",15),u.Ub(21,"div",16),u.Ub(22,"button",17),u.Lc(23," Sample Data "),u.Tb(),u.Tb(),u.Tb(),u.Ub(24,"div",15),u.Ub(25,"div",5),u.Ub(26,"div",18),u.Ub(27,"div",19),u.Ub(28,"h6"),u.Lc(29,"Import Test"),u.Tb(),u.Tb(),u.Ub(30,"div",19),u.Ub(31,"label"),u.Ub(32,"span",20),u.Lc(33,"*"),u.Tb(),u.Lc(34," Upload Your File (.xls,.xlsx)"),u.Tb(),u.Ub(35,"div",21),u.Ub(36,"div",22),u.Ub(37,"span",23),u.Lc(38,"Upload"),u.Tb(),u.Tb(),u.Ub(39,"div",24),u.Pb(40,"input",25),u.Ub(41,"label",26),u.Lc(42,"Choose file"),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Ub(43,"div",27),u.Ub(44,"div",28),u.Ub(45,"button",29),u.Pb(46,"i",30),u.Lc(47," Add Test "),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb(),u.Tb())},directives:[v.a,g.a],styles:[""]}),Tt)}],wt=((ft=function t(){_classCallCheck(this,t)}).\u0275mod=u.Mb({type:ft}),ft.\u0275inj=u.Lb({factory:function(t){return new(t||ft)},imports:[[r.e.forChild(Ct)],r.e]}),ft),yt=b("PCNd"),Pt=((vt=function t(){_classCallCheck(this,t)}).\u0275mod=u.Mb({type:vt}),vt.\u0275inj=u.Lb({factory:function(t){return new(t||vt)},imports:[[i.c,yt.SharedModule,wt,n.a,o.a]]}),vt)}}]);