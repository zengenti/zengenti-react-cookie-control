import e,{createContext as n,useContext as o,useState as t,useEffect as i,useMemo as l,useRef as c}from"react";import a,{css as r,ThemeProvider as d}from"styled-components";const s=n({defaultCookiePreferences:{analytics:!1,advertising:!1,functional:!1,marketing:!1},analytics:!1,advertising:!1,functional:!1,marketing:!1,isCookieControlVisible:!1,isUpdatePreferencesVisible:!1,doToggleUpdatePreferences:()=>{},set:()=>{}}),u=()=>{const e=o(s),[n,c]=t(e.analytics),[a,r]=t(e.advertising),[d,u]=t(e.functional),[v,p]=t(e.marketing),[m,f]=t(!1),g=()=>{f(!0)};return i((()=>{c(e.analytics),r(e.advertising),u(e.functional),p(e.marketing)}),[e]),i((()=>{if(m){const o={analytics:n,advertising:a,functional:d,marketing:v};e.set(o),f(!1)}}),[e,n,a,d,v,m]),l((()=>({acceptAll:()=>{c(!0),r(!0),u(!0),p(!0),g()},declineAll:()=>{c(!1),r(!1),u(!1),p(!1),g()},defaultCookiePreferences:e.defaultCookiePreferences,analytics:n,advertising:a,functional:d,marketing:v,setAnalytics:c,setAdvertising:r,setFunctional:u,setMarketing:p,isUpdatePreferencesVisible:e.isUpdatePreferencesVisible,isCookieControlVisible:e.isCookieControlVisible,doToggleUpdatePreferences:e.doToggleUpdatePreferences,doUpdatePreferences:g})),[n,a,d,v,e])},v=a.button``,p=({className:n,label:o="Cookie Preferences"})=>{const{isCookieControlVisible:t,doToggleUpdatePreferences:i}=u();return t?null:e.createElement(v,{className:n,onClick:()=>i()},o)},m=()=>{var e;if("undefined"==typeof window||!navigator.cookieEnabled)return{};const n=null===(e=document.cookie)||void 0===e?void 0:e.trim();return n.length>0?n.split(";").reduce(((e,n)=>{const o=n.split("="),t=o[0].trim(),i=o[1].trim();return Object.assign(Object.assign({},e),{[t]:i})}),{}):{}},f=e=>m()[e],g=(e,n,o,t)=>{if("undefined"==typeof window)return;if(!navigator.cookieEnabled)return;const i=t?`; path = ${t}`:"",l=0===o?"":(e=>{const n=new Date;return n.setTime(n.getTime()+24*e*60*60*1e3),"; expires="+n.toUTCString()})(o||1);document.cookie=`${e} = ${n}${l}${i}`};"function"==typeof SuppressedError&&SuppressedError;const b={background:"#fff",button:{borderRadius:"2px",borderWidth:"1px",borderColor:"#1d5fc2",color:"#1d5fc2",fontSize:"16px",lineHeight:"24px",padding:"16px 24px",solid:{background:"#1d5c90",color:"#fff",hover:{background:"#00304d",color:"#fff"}}},containerWidth:"1280px",divideColor:"#ddd",heading:{color:"#002033",fontFamily:"Poppins, Arial, sans-serif",fontSize:"20px",fontWeight:"500",lineHeight:"24px"},iconColor:"#444",linkColor:"#1d5fc2",text:{color:"#444",fontFamily:"Poppins, Arial, sans-serif",fontSize:"16px",fontWeight:"400",lineHeight:"24px"},toggle:{off:{background:"#ccc",hover:"#999"},on:{background:"#1d5c90",hover:"#00304d"}}},h=a.div`
  ${({theme:e})=>{var n,o,t,i,l;return r`
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
      color: ${null===(n=null==e?void 0:e.text)||void 0===n?void 0:n.color};
      font-family: ${null===(o=null==e?void 0:e.text)||void 0===o?void 0:o.fontFamily};
      font-size: ${null===(t=null==e?void 0:e.text)||void 0===t?void 0:t.fontSize};
      font-weight: ${null===(i=null==e?void 0:e.text)||void 0===i?void 0:i.fontWeight};
      line-height: ${null===(l=null==e?void 0:e.text)||void 0===l?void 0:l.lineHeight};
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
`,x=a.span`
  ${({theme:e})=>{var n,o,t,i,l,c,a,d;return r`
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
        background: ${null===(o=null===(n=null==e?void 0:e.toggle)||void 0===n?void 0:n.off)||void 0===o?void 0:o.background};
        border-radius: 20px;
        height: 24px;
        left: 0;
        outline: 2px solid transparent;
        transition: all 250ms ease-in-out;
        width: 40px;
      }

      &::after {
        background: #fff;
        border-radius: 50%;
        height: 16px;
        left: 4px;
        transition: left 200ms ease-in-out;
        width: 16px;
      }
    }

    &.checked {
      label::before {
        background: ${null===(i=null===(t=null==e?void 0:e.toggle)||void 0===t?void 0:t.on)||void 0===i?void 0:i.background};
      }
      label::after {
        left: 20px;
      }

      &:hover {
        label::before {
          background: ${null===(c=null===(l=null==e?void 0:e.toggle)||void 0===l?void 0:l.on)||void 0===c?void 0:c.hover};
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
`,k=({id:n,isChecked:o,label:t,onClick:i})=>e.createElement(x,{className:"zen-cc-toggle "+(o?"checked":"")},e.createElement("input",{checked:o,className:"zen-cc-toggle__checkbox",id:n,onChange:e=>{i&&i(e)},type:"checkbox"}),e.createElement("label",{className:"zen-cc-toggle__label",htmlFor:n},t)),y=a.button`
  ${({theme:e})=>{var n,o,t,i,l,c,a,d,s,u,v,p,m,f,g,b,h,x;return e.button.customStyles?r`
          ${e.button.customStyles}
        `:r`
          background: none;
          border-radius: 2px;
          border: ${null===(n=null==e?void 0:e.button)||void 0===n?void 0:n.borderWidth} solid
            ${null===(o=null==e?void 0:e.button)||void 0===o?void 0:o.borderColor};
          color: ${null===(t=null==e?void 0:e.button)||void 0===t?void 0:t.color};
          cursor: pointer;
          display: inline-block;
          font-size: ${null===(i=null==e?void 0:e.button)||void 0===i?void 0:i.fontSize};
          font-weight: ${null===(l=null==e?void 0:e.button)||void 0===l?void 0:l.fontWeight};
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
            color: ${null===(v=null===(u=null==e?void 0:e.button)||void 0===u?void 0:u.solid)||void 0===v?void 0:v.color};
            &:hover {
              background: ${null===(f=null===(m=null===(p=null==e?void 0:e.button)||void 0===p?void 0:p.solid)||void 0===m?void 0:m.hover)||void 0===f?void 0:f.background};
              color: ${null===(h=null===(b=null===(g=null==e?void 0:e.button)||void 0===g?void 0:g.solid)||void 0===b?void 0:b.hover)||void 0===h?void 0:h.color};
            }
          }
          &.hollow {
            &:hover {
              box-shadow: ${null===(x=null==e?void 0:e.button)||void 0===x?void 0:x.borderColor} 0px 0px 0px 1px inset;
            }
          }
        `}}
`,w=({id:n,label:o,onClick:t,type:i="solid"})=>e.createElement(y,{id:n,className:`zen-cc-button ${i}`,onClick:t},o),C=a.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  color: ${e=>{var n;return null===(n=e.theme)||void 0===n?void 0:n.iconColor}};
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
`,_=({onClick:n})=>e.createElement(C,{onClick:n},e.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.997.997 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.997.997 0 0 0 1.41 1.41L12 13.41l4.89 4.89a.997.997 0 0 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z",fill:"#002033"})),e.createElement("span",{className:"sr-only"},"Close cookie banner")),E=({content:n})=>{const{acceptAll:o,declineAll:t,defaultCookiePreferences:l,analytics:c,advertising:a,functional:r,marketing:d,setAnalytics:s,setAdvertising:v,setFunctional:p,setMarketing:m,isCookieControlVisible:f,doUpdatePreferences:g}=u();return i((()=>{f&&(s(l.analytics),v(l.advertising),p(l.functional),m(l.marketing))}),[f]),f?e.createElement(h,{className:"zen-cc-cc","data-nosnippet":!0},e.createElement("h2",{className:"sr-only"},"Cookie control banner"),e.createElement("div",{className:"zen-cc-cc__inner"},e.createElement("div",{className:"zen-cc-cc__close"},e.createElement(_,{onClick:()=>g()})),e.createElement("div",{className:"zen-cc-cc__flex"},e.createElement("div",null,n&&e.createElement("div",{className:"zen-cc-cc__content",dangerouslySetInnerHTML:{__html:n}}),e.createElement("div",{className:"zen-cc-cc__toggles"},e.createElement(k,{id:"cc-advertising",isChecked:a,label:"Advertising",onClick:()=>v((e=>!e))}),e.createElement(k,{id:"cc-analytics",isChecked:c,label:"Analytics",onClick:()=>s((e=>!e))}),e.createElement(k,{id:"cc-functional",isChecked:r,label:"Functional",onClick:()=>p((e=>!e))}),e.createElement(k,{id:"cc-marketing",isChecked:d,label:"Marketing",onClick:()=>m((e=>!e))}))),e.createElement("div",{className:"zen-cc-cc__buttons"},e.createElement("div",{className:"zen-cc-cc__button-wrap"},e.createElement(w,{id:"zen-cc-accept-all",label:"Accept all",onClick:()=>o(),type:"hollow"})),e.createElement("div",{className:"zen-cc-cc__button-wrap"},e.createElement(w,{id:"zen-cc-decline-all",label:"Decline all",onClick:()=>t(),type:"hollow"})),e.createElement("div",{className:"zen-cc-cc__button-wrap"},e.createElement(w,{id:"zen-cc-save",label:"Save preferences",onClick:()=>g()})))))):null},z=a.div`
  ${({theme:e})=>{var n,o,t,i,l,c,a,d,s,u;return r`
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
      color: ${null===(n=null==e?void 0:e.heading)||void 0===n?void 0:n.color};
      font-family: ${null===(o=null==e?void 0:e.heading)||void 0===o?void 0:o.fontFamily};
      font-size: ${null===(t=null==e?void 0:e.heading)||void 0===t?void 0:t.fontSize};
      font-weight: ${null===(i=null==e?void 0:e.heading)||void 0===i?void 0:i.fontWeight};
      line-height: ${null===(l=null==e?void 0:e.heading)||void 0===l?void 0:l.lineHeight};
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
`,$=({isChecked:n,label:o,onClick:t,summary:i,title:l,cookies:c})=>o?e.createElement("div",{className:"zen-cc-up__section"},e.createElement("div",{className:"zen-cc-up__title"},l),t&&e.createElement(k,{id:`cp-${o.toLowerCase().replace(/ /g,"-")}`,isChecked:!!n,label:o,onClick:t}),i&&e.createElement("div",{className:"zen-cc-up__summary",dangerouslySetInnerHTML:{__html:i}}),c):null,N=n=>{var o,t,l,a,r,d,s,v,p,m;const{advertising:f,analytics:g,marketing:b,functional:h,setAdvertising:x,setAnalytics:k,setMarketing:y,setFunctional:C,isUpdatePreferencesVisible:E,doToggleUpdatePreferences:N,doUpdatePreferences:P}=u(),S=c(null);i((()=>{const e=window.getComputedStyle(document.body).overflow,n=e=>S.current&&!S.current.contains(e.target)&&E&&N();return E?(window.scrollTo({top:0,behavior:"smooth"}),document.body.style.overflow="hidden",setTimeout((()=>document.addEventListener("click",n,!1)),100)):document.removeEventListener("click",n,!1),()=>{document.body.style.overflow=e,document.removeEventListener("click",n,!1)}}),[E,N]);const A=((e,n)=>{const o=c(null);return i((()=>{if(o&&o.current){const t=e=>{o&&o.current&&!o.current.contains(e.target)&&(e.stopPropagation(),o.current.focus())},i=e=>{if("Escape"===e.key)n();else if("Tab"===e.key&&o&&o.current){const n=o.current.querySelectorAll("a[href], button, textarea, input, select"),t=n[0],i=n[n.length-1];e.shiftKey?document.activeElement===t&&(e.preventDefault(),i&&i.focus()):document.activeElement===i&&(e.preventDefault(),t&&t.focus())}};if(e){document.addEventListener("focus",t,!0),o.current.addEventListener("keydown",i);const e=o.current.querySelectorAll("a[href], button, textarea, input, select")[0];return e?e.focus():o.current.focus(),()=>{document.removeEventListener("focus",t,!0),o&&o.current&&o.current.removeEventListener("keydown",i)}}}}),[e,o,n]),o})(E,N);return E?e.createElement(z,{ref:A,"data-nosnippet":!0,className:"zen-cc-up "+(E?"open":"closed")},e.createElement("h2",{className:"sr-only"},"Cookie control banner"),e.createElement("div",{className:"zen-cc-up__modal",ref:S},e.createElement("div",{className:"zen-cc-up__inner"},e.createElement("div",{className:"zen-cc-up__close"},e.createElement(_,{onClick:()=>N()})),n.content&&e.createElement("div",{className:"zen-cc-up__section",dangerouslySetInnerHTML:{__html:n.content}}),e.createElement($,{isChecked:f,label:"Advertising",onClick:()=>x(!f),summary:null===(o=n.advertising)||void 0===o?void 0:o.summary,cookies:null===(t=n.advertising)||void 0===t?void 0:t.cookies,title:"Advertising Cookies"}),e.createElement($,{isChecked:g,label:"Analytics",onClick:()=>k(!g),summary:null===(l=n.analytics)||void 0===l?void 0:l.summary,cookies:null===(a=n.analytics)||void 0===a?void 0:a.cookies,title:"Analytical Cookies"}),e.createElement($,{isChecked:h,label:"Functional",onClick:()=>C(!h),summary:null===(r=n.functional)||void 0===r?void 0:r.summary,cookies:null===(d=n.functional)||void 0===d?void 0:d.cookies,title:"Functional Cookies"}),e.createElement($,{isChecked:b,label:"Marketing",onClick:()=>y(!b),summary:null===(s=n.marketing)||void 0===s?void 0:s.summary,cookies:null===(v=n.marketing)||void 0===v?void 0:v.cookies,title:"Marketing Cookies"}),e.createElement($,{isChecked:!0,label:"Necessary",summary:null===(p=n.necessary)||void 0===p?void 0:p.summary,cookies:null===(m=n.necessary)||void 0===m?void 0:m.cookies,title:"Necessary Cookies"}),e.createElement("div",{className:"zen-cc-up__save"},e.createElement(w,{id:"zen-cc-save",label:"Save Preferences",onClick:()=>{P(),N(),window.location.reload()}}))))):null},P=({cookieControl:n,defaultCookiePreferences:o,updatePreferences:c,theme:a,cookieName:r="@Zengenti/Cookie/Control"})=>u=>v=>{var p=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]])}return o}(v,[]);const[m,h]=t(!1),[x,k]=t(!1),[y,w]=t(!1),[C,_]=t(!1),[z,$]=t(!1),[P,S]=t(!1),[A,O]=t([]);i((()=>{const e=f(r);if(e){const{analytics:n,advertising:o,functional:t,marketing:i}=JSON.parse(e);h(!!n),k(!!o),w(!!t),_(!!i)}else $(!0)}),[]),i((()=>{if("undefined"!=typeof window&&2===A.length){const e=A[0],n=A[1];A&&Object.keys(e).some((o=>e[o]&&!n[o]))&&window.location.reload(),O((e=>[...e.slice(1)]))}}),[A]);const L=l((()=>({defaultCookiePreferences:o,analytics:m,advertising:x,marketing:C,functional:y,set:({analytics:e,advertising:n,functional:o,marketing:t})=>{h(e),k(n),w(o),_(t),$(!1),g(r,JSON.stringify({analytics:e,advertising:n,functional:o,marketing:t}),90),O((i=>[...i,{analytics:e,advertising:n,functional:o,marketing:t}]))},isCookieControlVisible:z,isUpdatePreferencesVisible:P,doToggleUpdatePreferences:()=>S((e=>!e))})),[m,x,y,C,z,P]);return e.createElement(s.Provider,{value:L},e.createElement(d,{theme:Object.assign(Object.assign({},b),a)},e.createElement(E,Object.assign({},n)),e.createElement(N,Object.assign({},c))),e.createElement(u,Object.assign({},p)))};export{p as ToggleUpdatePreferences,f as getCookieValue,g as setCookieValue,u as useCookieControl,P as withCookieProvider};
//# sourceMappingURL=index.js.map
