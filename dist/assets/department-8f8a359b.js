import{_ as m,m as c,a as _,o,c as a,b as t,F as p,r as g,t as r,w as u,d as h,v,e as b,n as f}from"./index-58808999.js";import{_ as D,a as k}from"./remove-c812daa3.js";import{_ as y}from"./doctors-7260acf5.js";const x={data(){return{toggle:!1,editToggle:!1,department:{}}},methods:{...c(["addDepartment","getAllDepartments","deleteDepartment","getDepartment","updateDepartment"]),postDepart(){this.department.title?(this.addDepartment(this.department),this.clear()):this.$store.commit("setNotif",{type:"warning",text:"Bo`lim nomini kiriting"})},clear(){this.toggle=!1,this.editToggle=!1,this.department={}},async edit(n){let e=await this.getDepartment(n);(e==null?void 0:e.status)==200&&(this.toggle=!0,this.editToggle=!0,this.department={...e.data})},remove(n){confirm("Qaroringiz qat'iymi?")&&this.deleteDepartment(n)},save(){this.updateDepartment(this.department),this.clear()}},computed:{..._(["departments"])},mounted(){this.getAllDepartments()}},C={class:"box"},T=t("div",{class:"d-flex justify-content-between align-items-center"},[t("div",{class:"title"},"Bo'limlar")],-1),B={class:"table"},w=t("thead",null,[t("tr",null,[t("th",null,"Nomi"),t("th",null,"Yaratilgan vaqt"),t("th")])],-1),q={align:"right"},A=["onClick"],K=t("img",{src:D},null,-1),N=[K],S=["onClick"],z=t("img",{src:k},null,-1),F=[z],M=t("img",{src:y,alt:""},null,-1),V=[M],Y={class:"modal__box"},j={class:"text-center mb-20"},E={class:"col-12 col-sm-12 mb-20"},G={class:"modal__footer"};function L(n,e,Q,U,l,i){return o(),a("section",null,[t("div",C,[T,t("table",B,[w,t("tbody",null,[(o(!0),a(p,null,g(n.departments,(s,H)=>(o(),a("tr",{key:s._id},[t("td",null,r(s.title),1),t("td",null,r(s.createdTime),1),t("td",q,[t("button",{onClick:d=>i.edit(s._id)},N,8,A),t("button",{onClick:d=>i.remove(s._id)},F,8,S)])]))),128))])])]),t("button",{class:"add",onClick:e[0]||(e[0]=s=>l.toggle=!0)},V),t("div",{class:f(` modal ${l.toggle?"open":""}`)},[t("div",Y,[t("h4",j,r(l.editToggle?"Bo`limni tahrirlash":"Yangi bo'lim qo'shish"),1),t("form",{id:"depart",onSubmit:e[3]||(e[3]=u(s=>l.editToggle?i.save():i.postDepart(),["prevent"]))},[t("div",E,[h(t("input",{class:"input",type:"text","onUpdate:modelValue":e[1]||(e[1]=s=>l.department.title=s),placeholder:"Bo'lim nomini kiriting",onKeypress:e[2]||(e[2]=b(s=>l.editToggle?i.save():i.postDepart(),["enter"]))},null,544),[[v,l.department.title]])])],32),t("div",G,[t("button",{class:"btn danger",onClick:e[4]||(e[4]=(...s)=>i.clear&&i.clear(...s))},"Bekor qilish"),l.editToggle?(o(),a("button",{key:1,class:"btn success hide btn__edit",onClick:e[6]||(e[6]=s=>i.save())}," Saqlash ")):(o(),a("button",{key:0,class:"btn success btn__add",onClick:e[5]||(e[5]=(...s)=>i.postDepart&&i.postDepart(...s))}," Kiritish "))])])],2)])}const P=m(x,[["render",L]]);export{P as default};