import{h as D,k as F,r as t,o as h,c as y,a,w as n,d as s,e as r,b as e}from"./app.75fc0271.js";const u=r('<h1 id="date-picker-日期选择器" tabindex="-1">Date Picker 日期选择器 <a class="header-anchor" href="#date-picker-日期选择器" aria-hidden="true">#</a></h1><p>选取你想要的时间</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/date-picker" target="_blank" rel="noreferrer">源代码</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/date-picker.md" target="_blank" rel="noreferrer">文档编辑</a></li></ul><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>组件仍在测试阶段，高频更新中，部分参数暂不稳定！</p></div><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-hidden="true">#</a></h2><p>使用 <code>v-model:date</code> 绑定一个值</p>',6),C=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-date-picker"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model:date"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"value1"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"ref"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," value1 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"''"),s("span",{style:{color:"#A6ACCD"}},")")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),e(`
`),s("span",{class:"line"})])])],-1),g=r(`<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:date</code></td><td>绑定值</td><td>string</td><td>——</td><td>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><p>组件导出以下类型定义：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,6),A={href:"https://github.com/Tyh2001",target:"_blank"},v=JSON.parse('{"title":"Date Picker 日期选择器","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/date-picker.md","lastUpdated":1670836526000}'),m={name:"components/date-picker.md"},k=D({...m,setup(b){const l=F("");return(f,o)=>{const c=t("f-date-picker"),p=t("vp-demo"),i=t("f-avatar");return h(),y("div",null,[u,a(p,{source:""},{source:n(()=>[a(c,{date:l.value,"onUpdate:date":o[0]||(o[0]=d=>l.value=d)},null,8,["date"])]),default:n(()=>[C]),_:1}),g,s("a",A,[a(i,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}}});export{v as __pageData,k as default};
