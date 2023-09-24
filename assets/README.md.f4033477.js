import{_ as s,c as a,o as e,M as t}from"./chunks/framework.59a1e8ef.js";const y=JSON.parse('{"title":"Docs","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md","lastUpdated":1695390834000}'),n={name:"README.md"},o=t(`<h1 id="docs" tabindex="-1">Docs <a class="header-anchor" href="#docs" aria-label="Permalink to &quot;Docs&quot;">​</a></h1><h2 id="✨-介绍" tabindex="-1">✨ 介绍 <a class="header-anchor" href="#✨-介绍" aria-label="Permalink to &quot;✨ 介绍&quot;">​</a></h2><p>Docs 是 fighting design 官方文档目录，使用 <a href="https://github.com/vuejs/vitepress" target="_blank" rel="noreferrer">VitePress</a> 进行开发。</p><p><code>vitePress</code> 是一个 <code>Vite</code> 和 <code>Vue</code> 支持的静态站点生成器，使用 <a href="https://zh.wikipedia.org/zh-tw/Markdown" target="_blank" rel="noreferrer">MarkDown</a> 进行编写。如果你还不了解 <code>MarkDown</code>，可以通过<a href="http://younghz.github.io/Markdown/" target="_blank" rel="noreferrer">这里</a>进行学习。</p><p>如果你也想编写自己的 <code>blog</code>，可以在 <a href="https://github.com/vuejs/vitepress" target="_blank" rel="noreferrer">VitePress</a> 官方进行学习使用。<a href="https://github.com/Tyh2001/vitepress-template" target="_blank" rel="noreferrer">vitepress-template</a> 是我已经配置好的一个项目，也可以拿来开箱即用。</p><h2 id="🐳-线上地址" tabindex="-1">🐳 线上地址 <a class="header-anchor" href="#🐳-线上地址" aria-label="Permalink to &quot;🐳 线上地址&quot;">​</a></h2><ul><li>官方文档：<a href="https://fighting.tianyuhao.cn" target="_blank" rel="noreferrer">Fighting Design</a></li><li>仓库地址：<a href="https://github.com/FightingDesign/fighting-design/tree/master/docs" target="_blank" rel="noreferrer">Docs</a></li></ul><h2 id="🚧-编写规范" tabindex="-1">🚧 编写规范 <a class="header-anchor" href="#🚧-编写规范" aria-label="Permalink to &quot;🚧 编写规范&quot;">​</a></h2><p>首先需要在 <a href="https://github.com/FightingDesign/fighting-design/tree/master/docs/components" target="_blank" rel="noreferrer">docs/components</a> 目录下，新建一个以组件小写名，去掉首字母 <code>F</code> 的 <code>*.md</code> 文件。如：<code>button</code>，而不是 <code>FButton</code>。</p><ul><li><code>*.md</code> 内，只允许出现一个一级标题 <code>#</code>，后面全部使用二级标题 <code>##</code>，禁止出现二级标题以下的标题</li><li>一级标题为<code>组件的名称 + 中文描述</code>，中间要带有空格。如：<code>Button 按钮</code>、<code>Icon 图标</code>。这里的组件名要以大写开头</li><li>接下来每个二级标题用于描述配置信息，配置信息下面要写入简单的描述。如下，取自 <a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/button.md" target="_blank" rel="noreferrer">button.md</a>：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">## 基本使用</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">\`type\` 属性可以配置不同的按钮类型，展示不同的颜色状态</span></span></code></pre></div><ul><li>并不是组件的所有配置项都要带有演示用例，突出主要即可</li><li>英文名要用反引号包裹，左右两边要带有空格。如： <code>type</code> 配置按钮的类型</li><li>描述信息之后要带有具体的配置例子</li><li>需要提供演效果的代码段，代码段使用已经封装好的 <code>::: demo</code> 语法来展示 demo 和下拉菜单内容，详情配置可参考 <a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/.vitepress/config/plugins.ts" target="_blank" rel="noreferrer">plugins.ts</a> 。例：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">::: demo</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;template #source&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;!-- source 插槽插入示例 --&gt;</span></span>
<span class="line"><span style="color:#babed8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;!-- 默认插槽插入代码片段 --&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">:::</span></span></code></pre></div><ul><li>在组件演示完之后，要写详细的 <code>Attributes</code>（必须）、<code>Slots</code>（可选）、<code>Events</code>（可选）描述信息。使用 <code>table</code> 进行编写，格式规范参考如下：</li></ul><p>Attributes</p><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>xxx</code></td><td>xxx</td><td>xxx</td><td><code>xxx</code></td><td>xxx</td></tr></tbody></table></div><p>Slots</p><div class="vp-table__container"><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td><code>xxx</code></td><td>xxx</td></tr></tbody></table></div><p>Events</p><div class="vp-table__container"><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>xxx</code></td><td>xxx</td><td>xxx</td></tr></tbody></table></div><ul><li>在上面表格中的 <code>Attributes 的参数列</code>、<code>Attributes 的可选值列</code>、<code>Slots 的名称列</code>、<code>Events 的事件名称列</code> 的内容需要使用反引号包裹，每一项都应该使用 <a href="https://staging-cn.vuejs.org/guide/components/props.html#prop-passing-details" target="_blank" rel="noreferrer">kebab-case</a> 形式</li><li>表格中需要详细的描述好每个选项</li></ul><h2 id="🔍-扩展语法" tabindex="-1">🔍 扩展语法 <a class="header-anchor" href="#🔍-扩展语法" aria-label="Permalink to &quot;🔍 扩展语法&quot;">​</a></h2><ul><li>在 <code>*.md</code> 内部可以直接写入 <code>vue</code> 组件代码，完全可以正常解析</li><li>在 <code>*.md</code> 内部可以直接定义和本页面相关的样式，或者 <code>TypeScript</code> 语法，完全可以像下面这样使用：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># xxx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">## xxx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">code....</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#babed8;">TypeScript code...</span></span>
<span class="line"><span style="color:#babed8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#babed8;">css code...</span></span>
<span class="line"><span style="color:#babed8;">&lt;style&gt;</span></span></code></pre></div><h2 id="✏️-引入" tabindex="-1">✏️ 引入 <a class="header-anchor" href="#✏️-引入" aria-label="Permalink to &quot;✏️ 引入&quot;">​</a></h2><p>在你新建的组件文档文件之后，你需要在 <a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/.vitepress/config/sidebar.ts" target="_blank" rel="noreferrer">sidebar</a> 中引入你的文档，才可以正常显示</p><h2 id="💡-测试" tabindex="-1">💡 测试 <a class="header-anchor" href="#💡-测试" aria-label="Permalink to &quot;💡 测试&quot;">​</a></h2><p>在项目根目录执行命令：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">dev:docs</span></span></code></pre></div><p>来启动测试文档</p><h2 id="📒-贡献者" tabindex="-1">📒 贡献者 <a class="header-anchor" href="#📒-贡献者" aria-label="Permalink to &quot;📒 贡献者&quot;">​</a></h2><p>文档在 <code>Attributes</code> 或者 <code>Slots</code> 的结尾需要加入 <code>Contributors（贡献者）</code> 如果你参与了某个组件的开发或者维护，那么就可以将你放在该组件下发的开发者列表中！</p><p>格式如下:</p><p><code>a</code> 标签的 <code>href</code> 属性用作你的 <code>Github</code> 首页地址，<code>FAvatar</code> 组件的头像地址用作你的 <code>Github</code> 头像地址。可在 <code>Github</code> 首页右键头像，复制头像地址填入。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">target</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_blank</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-avatar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">round</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>例如我的：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://github.com/Tyh2001</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">target</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_blank</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-avatar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">round</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://avatars.githubusercontent.com/u/73180970?v=4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="💬-写在最后" tabindex="-1">💬 写在最后 <a class="header-anchor" href="#💬-写在最后" aria-label="Permalink to &quot;💬 写在最后&quot;">​</a></h2><p>规范可能随时会增加或者修改，在编写文档前请认真阅读规范指南。</p>`,39),l=[o];function p(c,r,d,i,h,b){return e(),a("div",null,l)}const u=s(n,[["render",p]]);export{y as __pageData,u as default};
