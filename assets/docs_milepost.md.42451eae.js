import{_ as e,c as a,o,M as t}from"./chunks/framework.f50263fa.js";const b=JSON.parse('{"title":"里程碑","description":"","frontmatter":{},"headers":[],"relativePath":"docs/milepost.md","filePath":"docs/milepost.md","lastUpdated":1715590751000}'),r={name:"docs/milepost.md"},i=t('<h1 id="里程碑" tabindex="-1">里程碑 <a class="header-anchor" href="#里程碑" aria-label="Permalink to &quot;里程碑&quot;">​</a></h1><h2 id="_2024-04-30" tabindex="-1">2024-04-30 <a class="header-anchor" href="#_2024-04-30" aria-label="Permalink to &quot;2024-04-30&quot;">​</a></h2><p>最近 <a href="https://github.com/w2xi" target="_blank" rel="noreferrer">w2xi</a> 帮忙完善了很多单元测试，单元测试覆盖率逐渐增加。</p><p>近期可以开始进入 <code>alpha</code> 版本了</p><h2 id="_2022-10-19" tabindex="-1">2022-10-19 <a class="header-anchor" href="#_2022-10-19" aria-label="Permalink to &quot;2022-10-19&quot;">​</a></h2><p>优化了一下打包的配置文件，使打包快了不少，打包从原来的 <code>32s</code> 提升了 <code>16s</code></p><p>不过对于类型的打包，还有很多的问题，目前只是解决了一部分，只能说是不影响使用，但是还可以更好。</p><h2 id="_2022-10-04" tabindex="-1">2022-10-04 <a class="header-anchor" href="#_2022-10-04" aria-label="Permalink to &quot;2022-10-04&quot;">​</a></h2><p>最近 <code>Fighting Design</code> 被选入了阮一峰老师的<a href="https://www.ruanyifeng.com/blog/2022/09/weekly-issue-225.html" target="_blank" rel="noreferrer">科技爱好者周刊（第 225 期）：NPC 演员也是一种职业</a>，马上 <code>200 star</code> 了~</p><h2 id="_2022-09-24" tabindex="-1">2022-09-24 <a class="header-anchor" href="#_2022-09-24" aria-label="Permalink to &quot;2022-09-24&quot;">​</a></h2><p><code>2022-04-24 ~ 2022-09-24</code> 五个月时间</p><p><code>1474</code> 次 <code>commit</code> 终于获得了 <strong>100 Star</strong></p><p>感谢各位支持，继续加油~</p><h2 id="_2022-09-16" tabindex="-1">2022-09-16 <a class="header-anchor" href="#_2022-09-16" aria-label="Permalink to &quot;2022-09-16&quot;">​</a></h2><p>按需引入也解决了，问题出在了 <code>import * as components from &#39;./components&#39;</code> 这句代码上，又新建了一个新的入口文件就解决了这个问题。</p><p>现在基础的组件都写的差不多了，现在开始向表单的方向上发展，目前 <code>input</code> 和 <code>select</code> 准备进行中，配件都写好了之后，就差不多可以写表单了~</p><p>最近的 <code>Star</code> 增加了不少，也得到了不少人的认可，继续加油~😊😊😊</p><h2 id="_2022-08-20" tabindex="-1">2022-08-20 <a class="header-anchor" href="#_2022-08-20" aria-label="Permalink to &quot;2022-08-20&quot;">​</a></h2><p>在 <a href="https://github.com/FightingDesign/fighting-design/releases/tag/0.6.2-alpha.2" target="_blank" rel="noreferrer">0.6.2-alpha.2</a> 的版本中，已经将目前已知的打包问题全部解决了。</p><p>打包这个东西，真的是一步一个坎坷。</p><h2 id="_2022-08-08" tabindex="-1">2022-08-08 <a class="header-anchor" href="#_2022-08-08" aria-label="Permalink to &quot;2022-08-08&quot;">​</a></h2><p>最近我们新增了很多新组件，感觉还不错，今天我将项目整体大幅度改动了很多，修复了之前的一些打包的问题，这次的打包个人感觉还是比较满意的，详情可以查看 <a href="https://github.com/FightingDesign/fighting-design/releases/tag/0.5.0-bate.1" target="_blank" rel="noreferrer">0.5.0-bate.1</a>。</p><h2 id="_2022-06-12" tabindex="-1">2022-06-12 <a class="header-anchor" href="#_2022-06-12" aria-label="Permalink to &quot;2022-06-12&quot;">​</a></h2><p>最近陆续的增加了 <code>Badge 角标</code>、<code>Divider 分隔线</code>、<code>FContainer布局容器</code> 组件，目前组件开发一直还算是非常顺利，只不过打包就没那么顺利了。</p><p>之前一直是使用 <code>rollup</code> 打包，但是会报出类型的错误，现在也在尝试使用 <code>vite</code> 打包，但是会有一些路径不对的问题，裂开。。。。</p><h2 id="_2022-06-07" tabindex="-1">2022-06-07 <a class="header-anchor" href="#_2022-06-07" aria-label="Permalink to &quot;2022-06-07&quot;">​</a></h2><p>这两天将 <code>FButton</code> 组件重构了一波，将样式从 445 行缩减到了 145 行，而且样式变得更优了，细节处理更好了</p><h2 id="_2022-06-04" tabindex="-1">2022-06-04 <a class="header-anchor" href="#_2022-06-04" aria-label="Permalink to &quot;2022-06-04&quot;">​</a></h2><p>接下来的组件开发计划，暂时是一些比较简单的组件：</p><ul><li>Tag 标签</li><li>Division 分割线</li><li>Avatar 头像</li><li>Container 布局容器</li><li>Crumbs 面包屑</li></ul><h2 id="_2022-05-31" tabindex="-1">2022-05-31 <a class="header-anchor" href="#_2022-05-31" aria-label="Permalink to &quot;2022-05-31&quot;">​</a></h2><p><code>Fighting Design</code> 并不仅仅会推出一些列的基础组件，还会推出一些趣味组件。</p><p>另外，在 <code>Fighting Design</code> 的计划中，还有一种全新的设计思想叫 <code>联合组件</code>！都会在不久的将来进行推出。</p><p>敬请期待！</p><h2 id="_2022-04-24" tabindex="-1">2022-04-24 <a class="header-anchor" href="#_2022-04-24" aria-label="Permalink to &quot;2022-04-24&quot;">​</a></h2><p>仓库第一次 <a href="https://github.com/FightingDesign/fighting-design/tree/bd0244a6fb0d71e4a99b0c9416b5cc253bbcc096" target="_blank" rel="noreferrer">commit</a>，就在这一天 <code>Fighting Design</code> 诞生！</p>',36),d=[i];function c(n,h,l,s,p,_){return o(),a("div",null,d)}const u=e(r,[["render",c]]);export{b as __pageData,u as default};
