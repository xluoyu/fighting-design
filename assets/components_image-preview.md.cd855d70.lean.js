import{d as g,f as F,A as n,c as m,C as l,y as e,v as s,M as d,a as t,o as u}from"./chunks/framework.59a1e8ef.js";const B=d('<h1 id="image-preview-图片预览" tabindex="-1">Image Preview 图片预览 <a class="header-anchor" href="#image-preview-图片预览" aria-label="Permalink to &quot;Image Preview 图片预览&quot;">​</a></h1><p>点击开启大图预览</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/image-preview" target="_blank" rel="noreferrer">源代码</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/image-preview.md" target="_blank" rel="noreferrer">文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p><code>v-model:visible</code> 绑定一个布尔值来控制预览框的展示状态</p><p><code>img-list</code> 需要传入一个图片的数组集合</p>',6),E=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"primary"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"@click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"show1 = true"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"打开"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image-preview"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model:visible"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"show1"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":img-list"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"listImg"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"ref"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," show1 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#FF9CAC"}},"false"),s("span",{style:{color:"#BABED8"}},")")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," listImg "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," [")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/1.jpg"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/2.jpg"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/3.jpg"),s("span",{style:{color:"#89DDFF"}},"'")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  ]")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),f=s("h2",{id:"隐藏操作栏",tabindex:"-1"},[t("隐藏操作栏 "),s("a",{class:"header-anchor",href:"#隐藏操作栏","aria-label":'Permalink to "隐藏操作栏"'},"​")],-1),b=s("p",null,[t("通过 "),s("code",null,"is-option"),t(" 属性将操作栏隐藏")],-1),A=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"primary"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"@click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"show2 = true"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"打开"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-image-preview"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model:visible"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"show2"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":is-option"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"false"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":img-list"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"listImg"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," />")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"ref"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," show2 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#FF9CAC"}},"false"),s("span",{style:{color:"#BABED8"}},")")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," listImg "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," [")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/1.jpg"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/2.jpg"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/3.jpg"),s("span",{style:{color:"#89DDFF"}},"'")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  ]")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),v=d('<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:visible</code></td><td>是否展示预览框</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>append-to-body</code></td><td>是否追加到 <code>body</code></td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>img-list</code></td><td>图片集合</td><td>array</td><td>——</td><td>[]</td></tr><tr><td><code>modal-close</code></td><td>是否点击遮罩层关闭预览窗</td><td>boolean</td><td>——</td><td>true</td></tr><tr><td><code>is-close-btn</code></td><td>是否展示关闭按钮</td><td>boolean</td><td>——</td><td>true</td></tr><tr><td><code>show-index</code></td><td>图片预览展示的首张图的索引，从 0 开始</td><td>number</td><td>——</td><td>0</td></tr><tr><td><code>z-index</code></td><td>图片预览展示的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index" target="_blank" rel="noreferrer">z-index</a></td><td>number</td><td>——</td><td>——</td></tr><tr><td><code>is-option</code></td><td>是否展示图片预览下面的操作栏</td><td>boolean</td><td>——</td><td>true</td></tr><tr><td><code>round</code></td><td>预览图的圆角，传入一个单位</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>on-close</code></td><td>关闭之后触发的回调</td><td><a href="/components/interface.html#HandleMouse">HandleMouse</a></td><td>——</td><td>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;">​</a></h2><p>组件导出以下类型定义：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ImagePreviewInstance</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ImagePreviewProps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>',6),C={href:"https://github.com/Tyh2001",target:"_blank"},P=JSON.parse('{"title":"Image Preview 图片预览","description":"","frontmatter":{},"headers":[],"relativePath":"components/image-preview.md","filePath":"components/image-preview.md","lastUpdated":1695390834000}'),_={name:"components/image-preview.md"},I=g({..._,setup(w){const r=F(!1),c=F(!1),p=["https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/1.jpg","https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/2.jpg","https://raw.githubusercontent.com/Tyh2001/images/master/fighting-design/3.jpg"];return(k,o)=>{const D=n("f-button"),i=n("f-image-preview"),y=n("vp-demo"),h=n("f-avatar");return u(),m("div",null,[B,l(y,{source:""},{source:e(()=>[l(D,{type:"primary",onClick:o[0]||(o[0]=a=>r.value=!0)},{default:e(()=>[t("打开")]),_:1}),l(i,{visible:r.value,"onUpdate:visible":o[1]||(o[1]=a=>r.value=a),"img-list":p},null,8,["visible"])]),default:e(()=>[E]),_:1}),f,b,l(y,{source:""},{source:e(()=>[l(D,{type:"primary",onClick:o[2]||(o[2]=a=>c.value=!0)},{default:e(()=>[t("打开")]),_:1}),l(i,{visible:c.value,"onUpdate:visible":o[3]||(o[3]=a=>c.value=a),"is-option":!1,"img-list":p},null,8,["visible"])]),default:e(()=>[A]),_:1}),v,s("a",C,[l(h,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}}});export{P as __pageData,I as default};
