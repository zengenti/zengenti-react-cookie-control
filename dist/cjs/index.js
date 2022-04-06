"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e),l=o(t);const i=e.createContext({analytics:!1,defaultCookiePreferences:{analytics:!1,functional:!1,marketing:!1},functional:!1,marketing:!1,set:()=>{},showCookieControl:!1,showUpdatePreferences:!1,toggleShowUpdatePreferences:()=>{}}),a=()=>{const t=e.useContext(i),[o,n]=e.useState(t.analytics),[l,a]=e.useState(t.functional),[c,r]=e.useState(t.marketing),[d,s]=e.useState(!1),u=()=>{s(!0)};return e.useEffect((()=>{n(t.analytics),a(t.functional),r(t.marketing)}),[t]),e.useEffect((()=>{d&&(t.set({analytics:o,functional:l,marketing:c}),s(!1))}),[o,t,l,c,d]),e.useMemo((()=>({acceptAll:()=>{n(!0),a(!0),r(!0),u()},analytics:o,declineAll:()=>{n(!1),a(!1),r(!1),u()},defaultCookiePreferences:t.defaultCookiePreferences,functional:l,marketing:c,setAnalytics:n,setFunctional:a,setMarketing:r,showUpdatePreferences:t.showUpdatePreferences,showCookieControl:t.showCookieControl,toggleShowUpdatePreferences:t.toggleShowUpdatePreferences,updatePreferences:u})),[o,t,l,c])},c=l.default.button``,r=e=>{const t=(()=>{var e;if("undefined"==typeof window)return{};const t=null===(e=document.cookie)||void 0===e?void 0:e.trim();return t.length>0?t.split(";").reduce(((e,t)=>{const o=t.split("="),n=o[0].trim(),l=o[1].trim();return Object.assign(Object.assign({},e),{[n]:l})}),{}):{}})();return t[e]},d=(e,t,o)=>{if("undefined"!=typeof window&&navigator.cookieEnabled)if(0===o)document.cookie=`${e} = ${t}`;else{const n=new Date;n.setTime(n.getTime()+24*(o||1)*60*60*1e3);const l="expires="+n.toUTCString();document.cookie=`${e} = ${t}; ${l}`}};const s={background:"#fff",button:{borderRadius:"2px",borderWidth:"1px",borderColor:"#1d5fc2",color:"#1d5fc2",fontSize:"16px",lineHeight:"24px",padding:"16px 24px",solid:{background:"#1d5c90",color:"#fff",hover:{background:"#00304d",color:"#fff"}}},containerWidth:"1280px",divideColor:"#ddd",heading:{color:"#002033",fontFamily:"Poppins, Arial, sans-serif",fontSize:"20px",fontWeight:"500",lineHeight:"24px"},iconColor:"#444",linkColor:"#1d5fc2",text:{color:"#444",fontFamily:"Poppins, Arial, sans-serif",fontSize:"16px",fontWeight:"400",lineHeight:"24px"},toggle:{off:{background:"#ccc",hover:"#999"},on:{background:"#1d5c90",hover:"#00304d"}}},u=l.default.div`
  ${({theme:e})=>{var o,n,l,i,a;return t.css`
    background: ${null==e?void 0:e.background};
    bottom: 0;
    box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.4);
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
  `}}
`,f=l.default.span`
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
      text-decoration: underline;
    }
  `}}
`,p=({id:e,isChecked:t,label:o,onClick:l})=>n.default.createElement(f,{className:"zen-cc-toggle "+(t?"checked":"")},n.default.createElement("input",{checked:t,className:"zen-cc-toggle__checkbox",id:e,onChange:e=>l(),type:"checkbox"}),n.default.createElement("label",{className:"zen-cc-toggle__label",htmlFor:e},o)),v=l.default.button`
  ${({theme:e})=>{var o,n,l,i,a,c,r,d,s,u,f,p,v,m,g,h,b,x;return e.button.customStyles?t.css`
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

          &.solid {
            background: ${null===(s=null===(d=null==e?void 0:e.button)||void 0===d?void 0:d.solid)||void 0===s?void 0:s.background};
            color: ${null===(f=null===(u=null==e?void 0:e.button)||void 0===u?void 0:u.solid)||void 0===f?void 0:f.color};

            &:hover {
              background: ${null===(m=null===(v=null===(p=null==e?void 0:e.button)||void 0===p?void 0:p.solid)||void 0===v?void 0:v.hover)||void 0===m?void 0:m.background};
              color: ${null===(b=null===(h=null===(g=null==e?void 0:e.button)||void 0===g?void 0:g.solid)||void 0===h?void 0:h.hover)||void 0===b?void 0:b.color};
            }
          }

          &.hollow {
            &:hover {
              box-shadow: ${null===(x=null==e?void 0:e.button)||void 0===x?void 0:x.borderColor} 0px 0px 0px 1px inset;
            }
          }
        `}}
`,m=({label:e,onClick:t,type:o="solid"})=>n.default.createElement(v,{className:`zen-cc-button ${o}`,onClick:t},e),g=l.default.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;

  &::before {
    color: ${e=>{var t;return null===(t=e.theme)||void 0===t?void 0:t.iconColor}};
    content: '\\2716';
    display: block;
    font-size: 32px;
    line-height: 40px;
  }

  span {
    height: 1px;
    left: -10000px;
    overflow: hidden;
    position: absolute;
    top: auto;
    width: 1px;
  }
`,h=({onClick:e})=>n.default.createElement(g,{onClick:e},n.default.createElement("span",null,"Close")),b=({content:t})=>{const{acceptAll:o,analytics:l,declineAll:i,defaultCookiePreferences:c,functional:r,marketing:d,setAnalytics:s,setFunctional:f,setMarketing:v,showCookieControl:g,updatePreferences:b}=a();return e.useEffect((()=>{g&&(s(c.analytics),f(c.functional),v(c.marketing))}),[g]),g?n.default.createElement(u,{className:"zen-cc-cc"},n.default.createElement("div",{className:"zen-cc-cc__inner"},n.default.createElement("div",{className:"zen-cc-cc__close"},n.default.createElement(h,{onClick:()=>b()})),n.default.createElement("div",{className:"zen-cc-cc__flex"},n.default.createElement("div",null,t&&n.default.createElement("div",{className:"zen-cc-cc__content",dangerouslySetInnerHTML:{__html:t}}),n.default.createElement("div",{className:"zen-cc-cc__toggles"},n.default.createElement(p,{id:"cc-marketing",isChecked:d,label:"Marketing",onClick:()=>v((e=>!e))}),n.default.createElement(p,{id:"cc-functional",isChecked:r,label:"Functional",onClick:()=>f((e=>!e))}),n.default.createElement(p,{id:"cc-analytics",isChecked:l,label:"Analytics",onClick:()=>s((e=>!e))}))),n.default.createElement("div",{className:"zen-cc-cc__buttons"},n.default.createElement("div",{className:"zen-cc-cc__button-wrap"},n.default.createElement(m,{label:"Accept all",onClick:()=>o(),type:"hollow"})),n.default.createElement("div",{className:"zen-cc-cc__button-wrap"},n.default.createElement(m,{label:"Decline all",onClick:()=>i(),type:"hollow"})),n.default.createElement("div",{className:"zen-cc-cc__button-wrap"},n.default.createElement(m,{label:"Save preferences",onClick:()=>b()})))))):null},x=l.default.div`
  ${({theme:e})=>{var o,n,l,i,a,c,r,d,s,u;return t.css`
    .zen-cc-up__modal {
      background: ${null==e?void 0:e.background};
      bottom: 0;
      box-shadow: -5px 0 10px rgba(0, 0, 0, 0.4);
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
      }
      & > .zen-cc-up__modal {
        transform: translateX(-100%);
      }
    }

    &.closed > .zen-cc-up__modal {
      transform: translateX(0);
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
  `}}
`,k=({isChecked:e,label:t,onClick:o,summary:l,title:i})=>l||t?n.default.createElement("div",{className:"zen-cc-up__section"},n.default.createElement("div",{className:"zen-cc-up__title"},i),l&&n.default.createElement("div",{className:"zen-cc-up__summary",dangerouslySetInnerHTML:{__html:l}}),t&&o&&n.default.createElement(p,{id:`cp-${t.toLowerCase().replace(/ /g,"-")}`,isChecked:!!e,label:t,onClick:o})):null,_=t=>{const{analytics:o,marketing:l,functional:i,setAnalytics:c,setMarketing:r,setFunctional:d,showUpdatePreferences:s,toggleShowUpdatePreferences:u,updatePreferences:f}=a(),p=e.useRef(null);return e.useEffect((()=>{const e=e=>p.current&&!p.current.contains(e.target)&&s&&u();return s?setTimeout((()=>document.addEventListener("click",e,!1)),100):document.removeEventListener("click",e,!1),()=>{document.removeEventListener("click",e,!1)}}),[s,u]),n.default.createElement(x,{className:"zen-cc-up "+(s?"open":"closed")},n.default.createElement("div",{className:"zen-cc-up__modal",ref:p},n.default.createElement("div",{className:"zen-cc-up__inner"},n.default.createElement("div",{className:"zen-cc-up__close"},n.default.createElement(h,{onClick:()=>u()})),t.content&&n.default.createElement("div",{className:"zen-cc-up__section",dangerouslySetInnerHTML:{__html:t.content}}),n.default.createElement(k,{summary:t.necessary,title:"Necessary Cookies"}),n.default.createElement(k,{isChecked:i,label:"Functional",onClick:()=>d(!i),summary:t.functional,title:"Functional Cookies"}),n.default.createElement(k,{isChecked:o,label:"Analytics",onClick:()=>c(!o),summary:t.analytics,title:"Analytical Cookies"}),n.default.createElement(k,{isChecked:l,label:"Marketing",onClick:()=>r(!l),summary:t.marketing,title:"Marketing Cookies"}),n.default.createElement("div",{className:"zen-cc-up__save"},n.default.createElement(m,{label:"Save Preferences",onClick:()=>{f(),u()}})))))};exports.ToggleUpdatePreferences=({className:e,label:t="Cookie Preferences"})=>{const{showCookieControl:o,toggleShowUpdatePreferences:l}=a();return o?null:n.default.createElement(c,{className:e,onClick:()=>l()},t)},exports.getCookieValue=r,exports.setCookieValue=d,exports.useCookieControl=a,exports.withCookieProvider=({cookieControl:o,defaultCookiePreferences:l,updatePreferences:a,theme:c})=>u=>f=>{var p=
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
function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]])}return o}(f,[]);const[v,m]=e.useState(!1),[g,h]=e.useState(!1),[x,k]=e.useState(!1),[y,C]=e.useState(!1),[w,z]=e.useState(!1),[E,$]=e.useState([]);e.useEffect((()=>{const e=r("zen-cc");if(e){const{analytics:t,functional:o,marketing:n}=JSON.parse(e);m(!!t),h(!!o),k(!!n)}else C(!0)}),[]),e.useEffect((()=>{if("undefined"!=typeof window&&2===E.length){const e=E[0],t=E[1];E&&Object.keys(e).some((o=>e[o]&&!t[o]))&&window.location.reload(),$((e=>[...e.slice(1)]))}}),[E]);const S=e.useMemo((()=>({analytics:v,defaultCookiePreferences:l,marketing:x,functional:g,set:({analytics:e,functional:t,marketing:o})=>{m(e),h(t),k(o),C(!1),d("zen-cc",JSON.stringify({analytics:e,functional:t,marketing:o}),90),$((n=>[...n,{analytics:e,functional:t,marketing:o}]))},showCookieControl:y,showUpdatePreferences:w,toggleShowUpdatePreferences:()=>z((e=>!e))})),[v,g,x,y,w]);return n.default.createElement(i.Provider,{value:S},n.default.createElement(u,Object.assign({},p)),n.default.createElement(t.ThemeProvider,{theme:Object.assign(Object.assign({},s),c)},n.default.createElement(b,Object.assign({},o)),n.default.createElement(_,Object.assign({},a))))};
//# sourceMappingURL=index.js.map
