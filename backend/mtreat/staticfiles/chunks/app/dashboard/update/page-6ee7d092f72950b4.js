(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[683],{4816:(e,a,n)=>{Promise.resolve().then(n.bind(n,1609))},1609:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>d});var r=n(5155),t=n(2115),s=n(3391),l=n(7965),m=n(946),u=n(1014),i=n(6046),o=n(2651);function d(){let e=(0,i.useRouter)(),{loading:a,error:n}=(0,s.d4)(e=>e.auth),d=(0,s.d4)(e=>e.auth.user),[c,p]=(0,t.useState)({username:"",first_name:"",last_name:"",number:""});(0,t.useEffect)(()=>{d&&p({username:d.username||"",first_name:d.first_name||"",last_name:d.last_name||"",number:d.number?d.number.toString():""})},[d]);let h=e=>{let{name:a,value:n}=e.target;p(e=>({...e,[a]:n}))},b=async a=>{a.preventDefault();let n=c.number?parseInt(c.number,10):null;try{let a=localStorage.getItem("token");await o.A.put("http://localhost:8000/api/update/",{username:c.username,first_name:c.first_name,last_name:c.last_name,number:n||(null==d?void 0:d.number)},{headers:{Authorization:"Bearer ".concat(a)}}),e.push("/dashboard")}catch(e){}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(l.l,{className:"mt-[10px] w-[400px] flex flex-col gap-8",validationBehavior:"native",onSubmit:b,children:[(0,r.jsx)("div",{className:"items-center text-[20px] font-bold uppercase",children:"Update Information"}),n&&(0,r.jsx)("p",{children:n}),(0,r.jsx)(m.r,{isRequired:!0,errorMessage:"Please enter a valid username",label:"Username",labelPlacement:"outside",name:"username",placeholder:"Enter new username",type:"text",value:c.username,onChange:h}),(0,r.jsx)(m.r,{isRequired:!0,errorMessage:"Please enter a valid first name",label:"First Name",labelPlacement:"outside",name:"first_name",placeholder:"Enter new first name",type:"text",value:c.first_name,onChange:h}),(0,r.jsx)(m.r,{isRequired:!0,errorMessage:"Please enter a valid last name",label:"Last Name",labelPlacement:"outside",name:"last_name",placeholder:"Enter new last name",type:"text",value:c.last_name,onChange:h}),(0,r.jsx)(m.r,{isRequired:!0,errorMessage:"Please enter a valid phone number",label:"Phone Number",labelPlacement:"outside",name:"number",placeholder:"Enter new phone number",type:"number",value:c.number,onChange:h}),(0,r.jsx)("div",{className:"flex gap-2",children:(0,r.jsx)(u.T,{color:"primary",disabled:a,type:"submit",children:a?"Updating...":"Update"})})]})})}}},e=>{var a=a=>e(e.s=a);e.O(0,[13,14,384,214,441,517,358],()=>a(4816)),_N_E=e.O()}]);