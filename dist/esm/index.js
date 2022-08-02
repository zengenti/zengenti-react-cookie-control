import e,{createContext as o,useContext as n,useState as t,useEffect as l,useMemo as i,useRef as c}from"react";import a,{css as r,ThemeProvider as d}from"styled-components";const s=o({analytics:!1,defaultCookiePreferences:{analytics:!1,functional:!1,marketing:!1},functional:!1,marketing:!1,set:()=>{},showCookieControl:!1,showUpdatePreferences:!1,toggleShowUpdatePreferences:()=>{}}),u=()=>{const e=n(s),[o,c]=t(e.analytics),[a,r]=t(e.functional),[d,u]=t(e.marketing),[p,m]=t(!1),v=()=>{m(!0)};return l((()=>{c(e.analytics),r(e.functional),u(e.marketing)}),[e]),l((()=>{p&&(e.set({analytics:o,functional:a,marketing:d}),m(!1))}),[o,e,a,d,p]),i((()=>({acceptAll:()=>{c(!0),r(!0),u(!0),v()},analytics:o,declineAll:()=>{c(!1),r(!1),u(!1),v()},defaultCookiePreferences:e.defaultCookiePreferences,functional:a,marketing:d,setAnalytics:c,setFunctional:r,setMarketing:u,showUpdatePreferences:e.showUpdatePreferences,showCookieControl:e.showCookieControl,toggleShowUpdatePreferences:e.toggleShowUpdatePreferences,updatePreferences:v})),[o,e,a,d])},p=a.button``,m=({className:o,label:n="Cookie Preferences"})=>{const{showCookieControl:t,toggleShowUpdatePreferences:l}=u();return t?null:e.createElement(p,{className:o,onClick:()=>l()},n)},v=e=>{const o=(()=>{var e;if("undefined"==typeof window)return{};const o=null===(e=document.cookie)||void 0===e?void 0:e.trim();return o.length>0?o.split(";").reduce(((e,o)=>{const n=o.split("="),t=n[0].trim(),l=n[1].trim();return Object.assign(Object.assign({},e),{[t]:l})}),{}):{}})();return o[e]},f=(e,o,n)=>{if("undefined"!=typeof window&&navigator.cookieEnabled)if(0===n)document.cookie=`${e} = ${o}`;else{const t=new Date;t.setTime(t.getTime()+24*(n||1)*60*60*1e3);const l="expires="+t.toUTCString();document.cookie=`${e} = ${o}; ${l}`}};const g={background:"#fff",button:{borderRadius:"2px",borderWidth:"1px",borderColor:"#1d5fc2",color:"#1d5fc2",fontSize:"16px",lineHeight:"24px",padding:"16px 24px",solid:{background:"#1d5c90",color:"#fff",hover:{background:"#00304d",color:"#fff"}}},containerWidth:"1280px",divideColor:"#ddd",heading:{color:"#002033",fontFamily:"Poppins, Arial, sans-serif",fontSize:"20px",fontWeight:"500",lineHeight:"24px"},iconColor:"#444",linkColor:"#1d5fc2",text:{color:"#444",fontFamily:"Poppins, Arial, sans-serif",fontSize:"16px",fontWeight:"400",lineHeight:"24px"},toggle:{off:{background:"#ccc",hover:"#999"},on:{background:"#1d5c90",hover:"#00304d"}}},h=a.div`
  ${({theme:e})=>{var o,n,t,l,i;return r`
    background: ${null==e?void 0:e.background};
    bottom: 0;
    box-shadow: 0px 0px 24px rgba(127, 154, 198, 0.2);
    left: 0;
    max-height: 70vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 16px;
    position: fixed;
    right: 0;

    .zen-cc-cc__inner {
      margin: auto;
      max-width: ${null==e?void 0:e.containerWidth};
      width: 100%;
    }

    .zen-cc-cc__close {
      text-align: right;
    }

    .zen-cc-cc__flex {
      margin-top: 8px;
      @media only screen and (min-width: 800px) {
        display: flex;
        align-items: flex-start;

        > *:first-child {
          padding-right: 32px;
        }
      }
    }

    .zen-cc-cc__content {
      color: ${null===(o=null==e?void 0:e.text)||void 0===o?void 0:o.color};
      font-family: ${null===(n=null==e?void 0:e.text)||void 0===n?void 0:n.fontFamily};
      font-size: ${null===(t=null==e?void 0:e.text)||void 0===t?void 0:t.fontSize};
      font-weight: ${null===(l=null==e?void 0:e.text)||void 0===l?void 0:l.fontWeight};
      line-height: ${null===(i=null==e?void 0:e.text)||void 0===i?void 0:i.lineHeight};
      max-width: 800px;

      a {
        color: ${null==e?void 0:e.linkColor};
        &:focus {
          outline: transparent;
          box-shadow: 0 0 0 3px #4c9aff !important;
        }
      }
    }

    .zen-cc-cc__toggles {
      margin: 8px -16px 0 -16px;
      display: flex;
      flex-wrap: wrap;

      .zen-cc-toggle {
        margin: 16px 16px 0 16px;
      }
    }

    .zen-cc-cc__buttons {
      margin: 8px -16px 0 -16px;
      display: flex;
      flex-wrap: wrap;

      @media only screen and (min-width: 800px) {
        margin-top: -8px;
      }
    }

    .zen-cc-cc__button-wrap {
      margin: 16px 16px 0 16px;

      @media only screen and (min-width: 800px) {
        display: flex;
        flex-basis: 50%;
        margin: 16px 0 0 0;

        &:last-child {
          flex-basis: 100%;
        }

        button {
          flex-basis: 100%;
          margin: 0 16px;
        }
      }
    }
    .sr-only {
      height: 1px;
      left: -10000px;
      overflow: hidden;
      position: absolute;
      top: auto;
      width: 1px;
    }
  `}}
`,b=a.span`
  ${({theme:e})=>{var o,n,t,l,i,c,a,d;return r`
    display: inline-block;
    min-height: 24px;
    position: relative;

    input {
      height: 1px;
      left: -10000px;
      margin: -1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      width: 1px;
    }

    label {
      cursor: pointer;
      display: block;
      font-size: 16px;
      line-height: 24px;
      padding-left: 48px;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      &::before {
        background: ${null===(n=null===(o=null==e?void 0:e.toggle)||void 0===o?void 0:o.off)||void 0===n?void 0:n.background};
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 3px 0 inset;
        height: 24px;
        left: 0;
        outline: 2px solid transparent;
        transition: all 250ms ease-in-out;
        width: 40px;
      }

      &::after {
        background: #fff;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.9) 1px 1px 3px 0;
        height: 16px;
        left: 4px;
        transition: left 200ms ease-in-out;
        width: 16px;
      }
    }

    &.checked {
      label::before {
        background: ${null===(l=null===(t=null==e?void 0:e.toggle)||void 0===t?void 0:t.on)||void 0===l?void 0:l.background};
      }
      label::after {
        left: 20px;
      }

      &:hover {
        label::before {
          background: ${null===(c=null===(i=null==e?void 0:e.toggle)||void 0===i?void 0:i.on)||void 0===c?void 0:c.hover};
        }
      }
    }

    &:hover {
      label::before {
        /* outline-color: blue; */
        background: ${null===(d=null===(a=null==e?void 0:e.toggle)||void 0===a?void 0:a.off)||void 0===d?void 0:d.hover};
      }
    }

    input:focus + label {
      outline: transparent;
      box-shadow: 0 0 0 3px #4c9aff !important;
    }
  `}}
`,x=({id:o,isChecked:n,label:t,onClick:l})=>e.createElement(b,{className:"zen-cc-toggle "+(n?"checked":"")},e.createElement("input",{checked:n,className:"zen-cc-toggle__checkbox",id:o,onChange:e=>l(),type:"checkbox"}),e.createElement("label",{className:"zen-cc-toggle__label",htmlFor:o},t)),k=a.button`
  ${({theme:e})=>{var o,n,t,l,i,c,a,d,s,u,p,m,v,f,g,h,b,x;return e.button.customStyles?r`
          ${e.button.customStyles}
        `:r`
          background: none;
          border-radius: 2px;
          border: ${null===(o=null==e?void 0:e.button)||void 0===o?void 0:o.borderWidth} solid
            ${null===(n=null==e?void 0:e.button)||void 0===n?void 0:n.borderColor};
          color: ${null===(t=null==e?void 0:e.button)||void 0===t?void 0:t.color};
          cursor: pointer;
          display: inline-block;
          font-size: ${null===(l=null==e?void 0:e.button)||void 0===l?void 0:l.fontSize};
          font-weight: ${null===(i=null==e?void 0:e.button)||void 0===i?void 0:i.fontWeight};
          line-height: ${null===(c=null==e?void 0:e.button)||void 0===c?void 0:c.lineHeight};
          margin: 0px;
          padding: ${null===(a=null==e?void 0:e.button)||void 0===a?void 0:a.padding};
          text-decoration: none;
          transition: all 300ms ease 0s;
          &:focus {
            outline: transparent;
            box-shadow: 0 0 0 3px #4c9aff !important;
          }
          &.solid {
            background: ${null===(s=null===(d=null==e?void 0:e.button)||void 0===d?void 0:d.solid)||void 0===s?void 0:s.background};
            color: ${null===(p=null===(u=null==e?void 0:e.button)||void 0===u?void 0:u.solid)||void 0===p?void 0:p.color};
            &:hover {
              background: ${null===(f=null===(v=null===(m=null==e?void 0:e.button)||void 0===m?void 0:m.solid)||void 0===v?void 0:v.hover)||void 0===f?void 0:f.background};
              color: ${null===(b=null===(h=null===(g=null==e?void 0:e.button)||void 0===g?void 0:g.solid)||void 0===h?void 0:h.hover)||void 0===b?void 0:b.color};
            }
          }
          &.hollow {
            &:hover {
              box-shadow: ${null===(x=null==e?void 0:e.button)||void 0===x?void 0:x.borderColor} 0px 0px 0px 1px inset;
            }
          }
        `}}
`,w=({label:o,onClick:n,type:t="solid"})=>e.createElement(k,{className:`zen-cc-button ${t}`,onClick:n},o),y=a.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  color: ${e=>{var o;return null===(o=e.theme)||void 0===o?void 0:o.iconColor}};
  font-size: 32px;
    line-height: 40px;
  &:focus {
    outline: transparent;
    box-shadow: 0 0 0 3px #4c9aff !important;
  }
  .sr-only {
    height: 1px;
    left: -10000px;
    overflow: hidden;
    position: absolute;
    top: auto;
    width: 1px;
  }
`,_=({onClick:o})=>e.createElement(y,{onClick:o},e.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.997.997 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.997.997 0 0 0 1.41 1.41L12 13.41l4.89 4.89a.997.997 0 0 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z",fill:"#002033"})),e.createElement("span",{className:"sr-only"},"Close cookie banner")),C=({content:o})=>{const{acceptAll:n,analytics:t,declineAll:i,defaultCookiePreferences:c,functional:a,marketing:r,setAnalytics:d,setFunctional:s,setMarketing:p,showCookieControl:m,updatePreferences:v}=u();return l((()=>{m&&(d(c.analytics),s(c.functional),p(c.marketing))}),[m]),m?e.createElement(h,{className:"zen-cc-cc","data-nosnippet":!0},e.createElement("h2",{className:"sr-only"},"Cookie control banner"),e.createElement("div",{className:"zen-cc-cc__inner"},e.createElement("div",{className:"zen-cc-cc__close"},e.createElement(_,{onClick:()=>v()})),e.createElement("div",{className:"zen-cc-cc__flex"},e.createElement("div",null,o&&e.createElement("div",{className:"zen-cc-cc__content",dangerouslySetInnerHTML:{__html:o}}),e.createElement("div",{className:"zen-cc-cc__toggles"},e.createElement(x,{id:"cc-marketing",isChecked:r,label:"Marketing",onClick:()=>p((e=>!e))}),e.createElement(x,{id:"cc-functional",isChecked:a,label:"Functional",onClick:()=>s((e=>!e))}),e.createElement(x,{id:"cc-analytics",isChecked:t,label:"Analytics",onClick:()=>d((e=>!e))}))),e.createElement("div",{className:"zen-cc-cc__buttons"},e.createElement("div",{className:"zen-cc-cc__button-wrap"},e.createElement(w,{label:"Accept all",onClick:()=>n(),type:"hollow"})),e.createElement("div",{className:"zen-cc-cc__button-wrap"},e.createElement(w,{label:"Decline all",onClick:()=>i(),type:"hollow"})),e.createElement("div",{className:"zen-cc-cc__button-wrap"},e.createElement(w,{label:"Save preferences",onClick:()=>v()})))))):null},z=a.div`
  ${({theme:e})=>{var o,n,t,l,i,c,a,d,s,u;return r`
    .zen-cc-up__modal {
      background: ${null==e?void 0:e.background};
      bottom: 0;
      box-shadow: 0px 0px 24px rgba(127, 154, 198, 0.2);
      left: 100%;
      max-width: 90vw;
      overflow: hidden;
      padding: 16px 0;
      position: fixed;
      top: 0;
      transition: transform 400ms ease-in-out;
      width: 350px;
    }

    &.open {
      &::before {
        content: '';
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.25);
        z-index: 99;
      }
      & > .zen-cc-up__modal {
        transform: translateX(-100%);
      }
    }

    &.closed > .zen-cc-up__modal {
      transform: translateX(0);
      box-shadow: none;
    }

    .zen-cc-up__inner {
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 0 16px;
    }

    .zen-cc-up__close {
      text-align: right;
    }

    .zen-cc-up__section {
      border-bottom: 1px solid ${null==e?void 0:e.divideColor};
      padding: 24px 0;
    }

    .zen-cc-up__title {
      color: ${null===(o=null==e?void 0:e.heading)||void 0===o?void 0:o.color};
      font-family: ${null===(n=null==e?void 0:e.heading)||void 0===n?void 0:n.fontFamily};
      font-size: ${null===(t=null==e?void 0:e.heading)||void 0===t?void 0:t.fontSize};
      font-weight: ${null===(l=null==e?void 0:e.heading)||void 0===l?void 0:l.fontWeight};
      line-height: ${null===(i=null==e?void 0:e.heading)||void 0===i?void 0:i.lineHeight};
    }

    .zen-cc-up__summary,
    .zen-cc-up__content {
      color: ${null===(c=null==e?void 0:e.text)||void 0===c?void 0:c.color};
      font-family: ${null===(a=null==e?void 0:e.text)||void 0===a?void 0:a.fontFamily};
      font-size: ${null===(d=null==e?void 0:e.text)||void 0===d?void 0:d.fontSize};
      font-weight: ${null===(s=null==e?void 0:e.text)||void 0===s?void 0:s.fontWeight};
      line-height: ${null===(u=null==e?void 0:e.text)||void 0===u?void 0:u.lineHeight};
      margin-top: 16px;

      a {
        color: ${null==e?void 0:e.linkColor};
      }
    }

    .zen-cc-toggle {
      margin-top: 16px;
    }

    .zen-cc-up__save {
      margin-top: 24px;
    }
    .sr-only {
      height: 1px;
      left: -10000px;
      overflow: hidden;
      position: absolute;
      top: auto;
      width: 1px;
    }
  `}}
`,E=({isChecked:o,label:n,onClick:t,summary:l,title:i})=>l||n?e.createElement("div",{className:"zen-cc-up__section"},e.createElement("div",{className:"zen-cc-up__title"},i),l&&e.createElement("div",{className:"zen-cc-up__summary",dangerouslySetInnerHTML:{__html:l}}),n&&t&&e.createElement(x,{id:`cp-${n.toLowerCase().replace(/ /g,"-")}`,isChecked:!!o,label:n,onClick:t})):null,$=o=>{const{analytics:n,marketing:t,functional:i,setAnalytics:a,setMarketing:r,setFunctional:d,showUpdatePreferences:s,toggleShowUpdatePreferences:p,updatePreferences:m}=u(),v=c(null);return l((()=>{const e=window.getComputedStyle(document.body).overflow,o=e=>v.current&&!v.current.contains(e.target)&&s&&p();return s?(window.scrollTo({top:0,behavior:"smooth"}),document.body.style.overflow="hidden",setTimeout((()=>document.addEventListener("click",o,!1)),100)):document.removeEventListener("click",o,!1),()=>{document.body.style.overflow=e,document.removeEventListener("click",o,!1)}}),[s,p]),s?e.createElement(z,{"data-nosnippet":!0,className:"zen-cc-up "+(s?"open":"closed")},e.createElement("h2",{className:"sr-only"},"Cookie control banner"),e.createElement("div",{className:"zen-cc-up__modal",ref:v},e.createElement("div",{className:"zen-cc-up__inner"},e.createElement("div",{className:"zen-cc-up__close"},e.createElement(_,{onClick:()=>p()})),o.content&&e.createElement("div",{className:"zen-cc-up__section",dangerouslySetInnerHTML:{__html:o.content}}),e.createElement(E,{summary:o.necessary,title:"Necessary Cookies"}),e.createElement(E,{isChecked:i,label:"Functional",onClick:()=>d(!i),summary:o.functional,title:"Functional Cookies"}),e.createElement(E,{isChecked:n,label:"Analytics",onClick:()=>a(!n),summary:o.analytics,title:"Analytical Cookies"}),e.createElement(E,{isChecked:t,label:"Marketing",onClick:()=>r(!t),summary:o.marketing,title:"Marketing Cookies"}),e.createElement("div",{className:"zen-cc-up__save"},e.createElement(w,{label:"Save Preferences",onClick:()=>{m(),p()}}))))):null},N=({cookieControl:o,defaultCookiePreferences:n,updatePreferences:c,theme:a})=>r=>u=>{var p=
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(t=Object.getOwnPropertySymbols(e);l<t.length;l++)o.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(n[t[l]]=e[t[l]])}return n}(u,[]);const[m,h]=t(!1),[b,x]=t(!1),[k,w]=t(!1),[y,_]=t(!1),[z,E]=t(!1),[N,P]=t([]);l((()=>{const e=v("zen-cc");if(e){const{analytics:o,functional:n,marketing:t}=JSON.parse(e);h(!!o),x(!!n),w(!!t)}else _(!0)}),[]),l((()=>{if("undefined"!=typeof window&&2===N.length){const e=N[0],o=N[1];N&&Object.keys(e).some((n=>e[n]&&!o[n]))&&window.location.reload(),P((e=>[...e.slice(1)]))}}),[N]);const S=i((()=>({analytics:m,defaultCookiePreferences:n,marketing:k,functional:b,set:({analytics:e,functional:o,marketing:n})=>{h(e),x(o),w(n),_(!1),f("zen-cc",JSON.stringify({analytics:e,functional:o,marketing:n}),90),P((t=>[...t,{analytics:e,functional:o,marketing:n}]))},showCookieControl:y,showUpdatePreferences:z,toggleShowUpdatePreferences:()=>E((e=>!e))})),[m,b,k,y,z]);return e.createElement(s.Provider,{value:S},e.createElement(d,{theme:Object.assign(Object.assign({},g),a)},e.createElement(C,Object.assign({},o)),e.createElement($,Object.assign({},c))),e.createElement(r,Object.assign({},p)))};export{m as ToggleUpdatePreferences,v as getCookieValue,f as setCookieValue,u as useCookieControl,N as withCookieProvider};
//# sourceMappingURL=index.js.map
