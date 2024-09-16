"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e),l=o(t);const i=e.createContext({defaultCookiePreferences:{analytics:!1,advertising:!1,functional:!1,marketing:!1},analytics:!1,advertising:!1,functional:!1,marketing:!1,isCookieControlVisible:!1,isUpdatePreferencesVisible:!1,doToggleUpdatePreferences:()=>{},set:()=>{}}),a=()=>{const t=e.useContext(i),[o,n]=e.useState(t.analytics),[l,a]=e.useState(t.advertising),[c,r]=e.useState(t.functional),[d,s]=e.useState(t.marketing),[u,f]=e.useState(!1),v=()=>{f(!0)};return e.useEffect((()=>{n(t.analytics),a(t.advertising),r(t.functional),s(t.marketing)}),[t]),e.useEffect((()=>{if(u){const e={analytics:o,advertising:l,functional:c,marketing:d};t.set(e),f(!1)}}),[t,o,l,c,d,u]),e.useMemo((()=>({acceptAll:()=>{n(!0),a(!0),r(!0),s(!0),v()},declineAll:()=>{n(!1),a(!1),r(!1),s(!1),v()},defaultCookiePreferences:t.defaultCookiePreferences,analytics:o,advertising:l,functional:c,marketing:d,setAnalytics:n,setAdvertising:a,setFunctional:r,setMarketing:s,isUpdatePreferencesVisible:t.isUpdatePreferencesVisible,isCookieControlVisible:t.isCookieControlVisible,doToggleUpdatePreferences:t.doToggleUpdatePreferences,doUpdatePreferences:v})),[o,l,c,d,t])},c=l.default.button``,r=()=>{var e;if("undefined"==typeof window||!navigator.cookieEnabled)return{};const t=null===(e=document.cookie)||void 0===e?void 0:e.trim();return t.length>0?t.split(";").reduce(((e,t)=>{const o=t.split("="),n=o[0].trim(),l=o[1].trim();return Object.assign(Object.assign({},e),{[n]:l})}),{}):{}},d=e=>r()[e],s=(e,t,o,n)=>{if("undefined"==typeof window)return;if(!navigator.cookieEnabled)return;const l=n?`; path = ${n}`:"",i=0===o?"":(e=>{const t=new Date;return t.setTime(t.getTime()+24*e*60*60*1e3),"; expires="+t.toUTCString()})(o||1);document.cookie=`${e} = ${t}${i}${l}`};"function"==typeof SuppressedError&&SuppressedError;const u={background:"#fff",button:{borderRadius:"2px",borderWidth:"1px",borderColor:"#1d5fc2",color:"#1d5fc2",fontSize:"16px",lineHeight:"24px",padding:"16px 24px",solid:{background:"#1d5c90",color:"#fff",hover:{background:"#00304d",color:"#fff"}}},containerWidth:"1280px",divideColor:"#ddd",heading:{color:"#002033",fontFamily:"Poppins, Arial, sans-serif",fontSize:"20px",fontWeight:"500",lineHeight:"24px"},iconColor:"#444",linkColor:"#1d5fc2",text:{color:"#444",fontFamily:"Poppins, Arial, sans-serif",fontSize:"16px",fontWeight:"400",lineHeight:"24px"},toggle:{off:{background:"#ccc",hover:"#999"},on:{background:"#1d5c90",hover:"#00304d"}}},f=l.default.div`
  ${({theme:e})=>{var o,n,l,i,a;return t.css`
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
      font-size: ${null===(l=null==e?void 0:e.text)||void 0===l?void 0:l.fontSize};
      font-weight: ${null===(i=null==e?void 0:e.text)||void 0===i?void 0:i.fontWeight};
      line-height: ${null===(a=null==e?void 0:e.text)||void 0===a?void 0:a.lineHeight};
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
`,v=l.default.span`
  ${({theme:e})=>{var o,n,l,i,a,c,r,d;return t.css`
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
        background: ${null===(i=null===(l=null==e?void 0:e.toggle)||void 0===l?void 0:l.on)||void 0===i?void 0:i.background};
      }
      label::after {
        left: 20px;
      }

      &:hover {
        label::before {
          background: ${null===(c=null===(a=null==e?void 0:e.toggle)||void 0===a?void 0:a.on)||void 0===c?void 0:c.hover};
        }
      }
    }

    &:hover {
      label::before {
        /* outline-color: blue; */
        background: ${null===(d=null===(r=null==e?void 0:e.toggle)||void 0===r?void 0:r.off)||void 0===d?void 0:d.hover};
      }
    }

    input:focus + label {
      outline: transparent;
      box-shadow: 0 0 0 3px #4c9aff !important;
    }
  `}}
`,p=({id:e,isChecked:t,label:o,onClick:l})=>n.default.createElement(v,{className:"zen-cc-toggle "+(t?"checked":"")},n.default.createElement("input",{checked:t,className:"zen-cc-toggle__checkbox",id:e,onChange:e=>{l&&l(e)},type:"checkbox"}),n.default.createElement("label",{className:"zen-cc-toggle__label",htmlFor:e},o)),m=l.default.button`
  ${({theme:e})=>{var o,n,l,i,a,c,r,d,s,u,f,v,p,m,g,b,h,x;return e.button.customStyles?t.css`
          ${e.button.customStyles}
        `:t.css`
          background: none;
          border-radius: 2px;
          border: ${null===(o=null==e?void 0:e.button)||void 0===o?void 0:o.borderWidth} solid
            ${null===(n=null==e?void 0:e.button)||void 0===n?void 0:n.borderColor};
          color: ${null===(l=null==e?void 0:e.button)||void 0===l?void 0:l.color};
          cursor: pointer;
          display: inline-block;
          font-size: ${null===(i=null==e?void 0:e.button)||void 0===i?void 0:i.fontSize};
          font-weight: ${null===(a=null==e?void 0:e.button)||void 0===a?void 0:a.fontWeight};
          line-height: ${null===(c=null==e?void 0:e.button)||void 0===c?void 0:c.lineHeight};
          margin: 0px;
          padding: ${null===(r=null==e?void 0:e.button)||void 0===r?void 0:r.padding};
          text-decoration: none;
          transition: all 300ms ease 0s;
          &:focus {
            outline: transparent;
            box-shadow: 0 0 0 3px #4c9aff !important;
          }
          &.solid {
            background: ${null===(s=null===(d=null==e?void 0:e.button)||void 0===d?void 0:d.solid)||void 0===s?void 0:s.background};
            color: ${null===(f=null===(u=null==e?void 0:e.button)||void 0===u?void 0:u.solid)||void 0===f?void 0:f.color};
            &:hover {
              background: ${null===(m=null===(p=null===(v=null==e?void 0:e.button)||void 0===v?void 0:v.solid)||void 0===p?void 0:p.hover)||void 0===m?void 0:m.background};
              color: ${null===(h=null===(b=null===(g=null==e?void 0:e.button)||void 0===g?void 0:g.solid)||void 0===b?void 0:b.hover)||void 0===h?void 0:h.color};
            }
          }
          &.hollow {
            &:hover {
              box-shadow: ${null===(x=null==e?void 0:e.button)||void 0===x?void 0:x.borderColor} 0px 0px 0px 1px inset;
            }
          }
        `}}
`,g=({id:e,label:t,onClick:o,type:l="solid"})=>n.default.createElement(m,{id:e,className:`zen-cc-button ${l}`,onClick:o},t),b=l.default.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  color: ${e=>{var t;return null===(t=e.theme)||void 0===t?void 0:t.iconColor}};
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
`,h=({onClick:e})=>n.default.createElement(b,{onClick:e},n.default.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.default.createElement("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.997.997 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.997.997 0 0 0 1.41 1.41L12 13.41l4.89 4.89a.997.997 0 0 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z",fill:"#002033"})),n.default.createElement("span",{className:"sr-only"},"Close cookie banner")),x=({content:t})=>{const{acceptAll:o,declineAll:l,defaultCookiePreferences:i,analytics:c,advertising:r,functional:d,marketing:s,setAnalytics:u,setAdvertising:v,setFunctional:m,setMarketing:b,isCookieControlVisible:x,doUpdatePreferences:k}=a();return e.useEffect((()=>{x&&(u(i.analytics),v(i.advertising),m(i.functional),b(i.marketing))}),[x]),x?n.default.createElement(f,{className:"zen-cc-cc","data-nosnippet":!0},n.default.createElement("h2",{className:"sr-only"},"Cookie control banner"),n.default.createElement("div",{className:"zen-cc-cc__inner"},n.default.createElement("div",{className:"zen-cc-cc__close"},n.default.createElement(h,{onClick:()=>k()})),n.default.createElement("div",{className:"zen-cc-cc__flex"},n.default.createElement("div",null,t&&n.default.createElement("div",{className:"zen-cc-cc__content",dangerouslySetInnerHTML:{__html:t}}),n.default.createElement("div",{className:"zen-cc-cc__toggles"},n.default.createElement(p,{id:"cc-advertising",isChecked:r,label:"Advertising",onClick:()=>v((e=>!e))}),n.default.createElement(p,{id:"cc-analytics",isChecked:c,label:"Analytics",onClick:()=>u((e=>!e))}),n.default.createElement(p,{id:"cc-functional",isChecked:d,label:"Functional",onClick:()=>m((e=>!e))}),n.default.createElement(p,{id:"cc-marketing",isChecked:s,label:"Marketing",onClick:()=>b((e=>!e))}))),n.default.createElement("div",{className:"zen-cc-cc__buttons"},n.default.createElement("div",{className:"zen-cc-cc__button-wrap"},n.default.createElement(g,{id:"zen-cc-accept-all",label:"Accept all",onClick:()=>o(),type:"hollow"})),n.default.createElement("div",{className:"zen-cc-cc__button-wrap"},n.default.createElement(g,{id:"zen-cc-decline-all",label:"Decline all",onClick:()=>l(),type:"hollow"})),n.default.createElement("div",{className:"zen-cc-cc__button-wrap"},n.default.createElement(g,{id:"zen-cc-save",label:"Save preferences",onClick:()=>k()})))))):null},k=l.default.div`
  ${({theme:e})=>{var o,n,l,i,a,c,r,d,s,u;return t.css`
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
      font-size: ${null===(l=null==e?void 0:e.heading)||void 0===l?void 0:l.fontSize};
      font-weight: ${null===(i=null==e?void 0:e.heading)||void 0===i?void 0:i.fontWeight};
      line-height: ${null===(a=null==e?void 0:e.heading)||void 0===a?void 0:a.lineHeight};
    }

    .zen-cc-up__summary,
    .zen-cc-up__content {
      color: ${null===(c=null==e?void 0:e.text)||void 0===c?void 0:c.color};
      font-family: ${null===(r=null==e?void 0:e.text)||void 0===r?void 0:r.fontFamily};
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
`,y=({isChecked:e,label:t,onClick:o,summary:l,title:i,cookies:a})=>t?n.default.createElement("div",{className:"zen-cc-up__section"},n.default.createElement("div",{className:"zen-cc-up__title"},i),o&&n.default.createElement(p,{id:`cp-${t.toLowerCase().replace(/ /g,"-")}`,isChecked:!!e,label:t,onClick:o}),l&&n.default.createElement("div",{className:"zen-cc-up__summary",dangerouslySetInnerHTML:{__html:l}}),a):null,C=t=>{var o,l,i,c,r,d,s,u,f,v;const{advertising:p,analytics:m,marketing:b,functional:x,setAdvertising:C,setAnalytics:_,setMarketing:w,setFunctional:E,isUpdatePreferencesVisible:z,doToggleUpdatePreferences:$,doUpdatePreferences:S}=a(),P=e.useRef(null);e.useEffect((()=>{const e=window.getComputedStyle(document.body).overflow,t=e=>P.current&&!P.current.contains(e.target)&&z&&$();return z?(window.scrollTo({top:0,behavior:"smooth"}),document.body.style.overflow="hidden",setTimeout((()=>document.addEventListener("click",t,!1)),100)):document.removeEventListener("click",t,!1),()=>{document.body.style.overflow=e,document.removeEventListener("click",t,!1)}}),[z,$]);const N=((t,o)=>{const n=e.useRef(null);return e.useEffect((()=>{if(n&&n.current){const e=e=>{n&&n.current&&!n.current.contains(e.target)&&(e.stopPropagation(),n.current.focus())},l=e=>{if("Escape"===e.key)o();else if("Tab"===e.key&&n&&n.current){const t=n.current.querySelectorAll("a[href], button, textarea, input, select"),o=t[0],l=t[t.length-1];e.shiftKey?document.activeElement===o&&(e.preventDefault(),l&&l.focus()):document.activeElement===l&&(e.preventDefault(),o&&o.focus())}};if(t){document.addEventListener("focus",e,!0),n.current.addEventListener("keydown",l);const t=n.current.querySelectorAll("a[href], button, textarea, input, select")[0];return t?t.focus():n.current.focus(),()=>{document.removeEventListener("focus",e,!0),n&&n.current&&n.current.removeEventListener("keydown",l)}}}}),[t,n,o]),n})(z,$);return z?n.default.createElement(k,{ref:N,"data-nosnippet":!0,className:"zen-cc-up "+(z?"open":"closed")},n.default.createElement("h2",{className:"sr-only"},"Cookie control banner"),n.default.createElement("div",{className:"zen-cc-up__modal",ref:P},n.default.createElement("div",{className:"zen-cc-up__inner"},n.default.createElement("div",{className:"zen-cc-up__close"},n.default.createElement(h,{onClick:()=>$()})),t.content&&n.default.createElement("div",{className:"zen-cc-up__section",dangerouslySetInnerHTML:{__html:t.content}}),n.default.createElement(y,{isChecked:p,label:"Advertising",onClick:()=>C(!p),summary:null===(o=t.advertising)||void 0===o?void 0:o.summary,cookies:null===(l=t.advertising)||void 0===l?void 0:l.cookies,title:"Advertising Cookies"}),n.default.createElement(y,{isChecked:m,label:"Analytics",onClick:()=>_(!m),summary:null===(i=t.analytics)||void 0===i?void 0:i.summary,cookies:null===(c=t.analytics)||void 0===c?void 0:c.cookies,title:"Analytical Cookies"}),n.default.createElement(y,{isChecked:x,label:"Functional",onClick:()=>E(!x),summary:null===(r=t.functional)||void 0===r?void 0:r.summary,cookies:null===(d=t.functional)||void 0===d?void 0:d.cookies,title:"Functional Cookies"}),n.default.createElement(y,{isChecked:b,label:"Marketing",onClick:()=>w(!b),summary:null===(s=t.marketing)||void 0===s?void 0:s.summary,cookies:null===(u=t.marketing)||void 0===u?void 0:u.cookies,title:"Marketing Cookies"}),n.default.createElement(y,{isChecked:!0,label:"Necessary",summary:null===(f=t.necessary)||void 0===f?void 0:f.summary,cookies:null===(v=t.necessary)||void 0===v?void 0:v.cookies,title:"Necessary Cookies"}),n.default.createElement("div",{className:"zen-cc-up__save"},n.default.createElement(g,{id:"zen-cc-save",label:"Save Preferences",onClick:()=>{S(),$(),window.location.reload()}}))))):null};exports.ToggleUpdatePreferences=({className:e,label:t="Cookie Preferences"})=>{const{isCookieControlVisible:o,doToggleUpdatePreferences:l}=a();return o?null:n.default.createElement(c,{className:e,onClick:()=>l()},t)},exports.getCookieValue=d,exports.setCookieValue=s,exports.useCookieControl=a,exports.withCookieProvider=({cookieControl:o,defaultCookiePreferences:l,updatePreferences:a,theme:c,cookieName:r="@Zengenti/Cookie/Control"})=>f=>v=>{var p=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]])}return o}(v,[]);const[m,g]=e.useState(!1),[b,h]=e.useState(!1),[k,y]=e.useState(!1),[_,w]=e.useState(!1),[E,z]=e.useState(!1),[$,S]=e.useState(!1),[P,N]=e.useState([]);e.useEffect((()=>{const e=d(r);if(e){const{analytics:t,advertising:o,functional:n,marketing:l}=JSON.parse(e);g(!!t),h(!!o),y(!!n),w(!!l)}else z(!0)}),[]),e.useEffect((()=>{if("undefined"!=typeof window&&2===P.length){const e=P[0],t=P[1];P&&Object.keys(e).some((o=>e[o]&&!t[o]))&&window.location.reload(),N((e=>[...e.slice(1)]))}}),[P]);const A=e.useMemo((()=>({defaultCookiePreferences:l,analytics:m,advertising:b,marketing:_,functional:k,set:({analytics:e,advertising:t,functional:o,marketing:n})=>{g(e),h(t),y(o),w(n),z(!1),s(r,JSON.stringify({analytics:e,advertising:t,functional:o,marketing:n}),90),N((l=>[...l,{analytics:e,advertising:t,functional:o,marketing:n}]))},isCookieControlVisible:E,isUpdatePreferencesVisible:$,doToggleUpdatePreferences:()=>S((e=>!e))})),[m,b,k,_,E,$]);return n.default.createElement(i.Provider,{value:A},n.default.createElement(t.ThemeProvider,{theme:Object.assign(Object.assign({},u),c)},n.default.createElement(x,Object.assign({},o)),n.default.createElement(C,Object.assign({},a))),n.default.createElement(f,Object.assign({},p)))};
//# sourceMappingURL=index.js.map
