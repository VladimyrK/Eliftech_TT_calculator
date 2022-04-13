"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[497],{118:function(n,e,t){t.d(e,{Z:function(){return i}});var a=t(184);var r=function(n){var e=n.id,t=n.bankName,r=n.interestRate,i=n.maxLoan,o=n.minPayment,u=n.loanTerm,l=n.onDeleteBank,m=n.onEditBank,c=n.downPayment,s=n.initialLoan,d=n.monthPayment;return(0,a.jsxs)("li",{children:[(0,a.jsxs)("p",{children:[t," - Interest rate: ",r,"%; Maximum loan: ",i,"$; Minimum payment: ",o,"$; Loan term: ",u," months;"]}),c&&(0,a.jsxs)("p",{children:["----- My credit - Down payment: ",c,"$; Initial loan:"," ",s,"$; Month payment: ",d,"$"]}),(0,a.jsx)("button",{type:"button",onClick:function(){return l(e)},children:"Delete"}),(0,a.jsx)("button",{type:"button",onClick:function(){return m(e)},children:"Edit"})]})};var i=function(n){var e=n.items,t=n.onDeleteBank,i=n.onEditBank;return(0,a.jsx)("ul",{children:e.map((function(n){var e=n.id,o=n.bankName,u=n.interestRate,l=n.maxLoan,m=n.minPayment,c=n.loanTerm,s=n.monthPayment,d=n.downPayment,f=n.initialLoan;return(0,a.jsx)(r,{id:e,bankName:o,interestRate:u,maxLoan:l,minPayment:m,loanTerm:c,monthPayment:s,downPayment:d,onDeleteBank:t,onEditBank:i,initialLoan:f},e)}))})}},570:function(n,e,t){t.d(e,{Z:function(){return r}});var a=t(184);var r=function(n){var e=n.type,t=n.placeholder,r=void 0===t?"":t,i=n.name,o=n.value,u=n.onChange;return(0,a.jsxs)("label",{children:[i,(0,a.jsx)("input",{type:e,placeholder:r,name:i,value:o,onChange:u,required:!0})]})}},497:function(n,e,t){t.r(e),t.d(e,{default:function(){return c}});var a=t(982),r=t(885),i=t(791),o=t(570),u=t(184);var l=function(n){var e=n.banks,t=n.onSubmit,a=n.onCancel,l=n.editedBank,m=(0,i.useState)(""),c=(0,r.Z)(m,2),s=c[0],d=c[1],f=(0,i.useState)(""),h=(0,r.Z)(f,2),b=h[0],y=h[1],k=(0,i.useState)(""),p=(0,r.Z)(k,2),x=p[0],v=p[1];(0,i.useEffect)((function(){l&&(d(l.downPayment),y(l.initialLoan),v(l.bankName))}),[l]);var w=function(){d(""),y("")};return(0,u.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),x){var a=e.find((function(n){return n.bankName===x})),r=a.interestRate,i=a.loanTerm,o=a.bankName,u=a.maxLoan,l=a.minPayment,m=a.id,c=b*(r/100/12)*Math.pow(1+r/100/12,i)/(Math.pow(1+r/100/12,i)-1);t({bankName:o,interestRate:r,maxLoan:u,minPayment:l,loanTerm:i,id:m,monthPayment:c,downPayment:s,initialLoan:b}),w()}else alert("Please, select bank from drop-down list in the form")},children:[(0,u.jsxs)("select",{required:!0,defaultValue:"default",onChange:function(n){return v(n.currentTarget.value)},children:[(0,u.jsx)("option",{value:"default",disabled:!0,children:"Select bank"}),e.map((function(n){return(0,u.jsx)("option",{value:n.bankName,children:n.bankName},n.id)}))]}),(0,u.jsx)(o.Z,{type:"number",placeholder:"$",name:"Initial loan",value:b,onChange:function(n){return y(n.currentTarget.value)}}),(0,u.jsx)(o.Z,{type:"number",placeholder:"$",name:"Down payment",value:s,onChange:function(n){return d(n.currentTarget.value)}}),l?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("button",{type:"button",onClick:function(){return a(w)},children:"Cancel"}),(0,u.jsx)("button",{type:"submit",children:"Edit"})]}):(0,u.jsx)("button",{type:"submit",children:"Calculate"})]})},m=t(118);function c(n){var e=n.banks,t=(0,i.useState)(""),o=(0,r.Z)(t,2),c=o[0],s=o[1],d=(0,i.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem("myBanks")))&&void 0!==n?n:[]})),f=(0,r.Z)(d,2),h=f[0],b=f[1];(0,i.useEffect)((function(){window.localStorage.setItem("myBanks",JSON.stringify(h))}),[h]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Mortgage calculator page"}),(0,u.jsx)(l,{banks:e,onCancel:function(n){s(""),n()},onSubmit:function(n){h.find((function(e){return e.bankName.toLowerCase()===n.bankName.toLowerCase()}))&&!c?alert("This bank name already in banks"):+n.maxLoan<+n.initialLoan?alert("Your initial loan is higher then maximum loan (".concat(n.maxLoan,"$) of this bank")):+n.minPayment>+n.downPayment?alert("Your down payment is lower then minimum down payment (".concat(n.minPayment,"$) of this bank")):function(n){c&&b((function(n){return n.filter((function(n){return n.id!==c.id}))})),b((function(e){return[].concat((0,a.Z)(e),[n])})),s("")}(n)},editedBank:c}),(0,u.jsx)("h2",{children:"My banks"}),(0,u.jsx)(m.Z,{items:h,onDeleteBank:function(n){return b((function(e){return e.filter((function(e){return e.id!==n}))}))},onEditBank:function(n){return s(h.find((function(e){return e.id===n})))}})]})}},982:function(n,e,t){t.d(e,{Z:function(){return i}});var a=t(907);var r=t(181);function i(n){return function(n){if(Array.isArray(n))return(0,a.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,r.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=497.f7b4ccff.chunk.js.map