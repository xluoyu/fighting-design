import{d as o,c as p,b as C,F as i,a as A}from"./chunks/f-icon-sun.98e255db.js";import{j as g,k as c,r as E,o as q,c as b,a as n,u as s,d as m,e as l,_ as B}from"./app.730c1052.js";import{F as h}from"./chunks/f-icon-face-smile.a17b3aee.js";const I=l('<h1 id="swap-\u5207\u6362" tabindex="-1" data-v-4df1c650>Swap \u5207\u6362 <a class="header-anchor" href="#swap-\u5207\u6362" aria-hidden="true" data-v-4df1c650>#</a></h1><p data-v-4df1c650>\u7CBE\u81F4\u7684\u5207\u6362\u7EC4\u4EF6</p><ul data-v-4df1c650><li data-v-4df1c650><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/swap" target="_blank" rel="noreferrer" data-v-4df1c650>\u6E90\u4EE3\u7801</a></li><li data-v-4df1c650><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/swap.md" target="_blank" rel="noreferrer" data-v-4df1c650>\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1" data-v-4df1c650>\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true" data-v-4df1c650>#</a></h2><p data-v-4df1c650>\u9700\u8981\u4F7F\u7528 <code data-v-4df1c650>v-model</code> \u7ED1\u5B9A\u4E00\u4E2A\u503C</p><p data-v-4df1c650><code data-v-4df1c650>icon-on</code> \u548C <code data-v-4df1c650>icon-off</code> \u5206\u522B\u63A7\u5236\u5207\u6362\u7684\u4E0D\u540C\u56FE\u6807</p>',6),_=l(`<details class="details custom-block" data-v-4df1c650><summary data-v-4df1c650>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-4df1c650><button title="Copy Code" class="copy" data-v-4df1c650></button><span class="lang" data-v-4df1c650>html</span><pre class="shiki" data-v-4df1c650><code data-v-4df1c650><span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>&lt;</span><span style="color:#F07178;" data-v-4df1c650>template</span><span style="color:#89DDFF;" data-v-4df1c650>&gt;</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#89DDFF;" data-v-4df1c650>&lt;</span><span style="color:#F07178;" data-v-4df1c650>f-swap</span><span style="color:#89DDFF;" data-v-4df1c650> </span><span style="color:#C792EA;" data-v-4df1c650>v-model</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>value1</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#89DDFF;" data-v-4df1c650> </span><span style="color:#C792EA;" data-v-4df1c650>:icon-on</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>FIconSun</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#89DDFF;" data-v-4df1c650> </span><span style="color:#C792EA;" data-v-4df1c650>:icon-off</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>FIconMoon</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#89DDFF;" data-v-4df1c650> /&gt;</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#89DDFF;" data-v-4df1c650>&lt;</span><span style="color:#F07178;" data-v-4df1c650>f-swap</span><span style="color:#89DDFF;" data-v-4df1c650> </span><span style="color:#C792EA;" data-v-4df1c650>v-model</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>value2</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#89DDFF;" data-v-4df1c650> </span><span style="color:#C792EA;" data-v-4df1c650>:icon-on</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>FIconSun</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#89DDFF;" data-v-4df1c650> </span><span style="color:#C792EA;" data-v-4df1c650>:icon-off</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>FIconMoon</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#89DDFF;" data-v-4df1c650> /&gt;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>&lt;/</span><span style="color:#F07178;" data-v-4df1c650>template</span><span style="color:#89DDFF;" data-v-4df1c650>&gt;</span></span>
<span class="line" data-v-4df1c650></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>&lt;</span><span style="color:#F07178;" data-v-4df1c650>script</span><span style="color:#89DDFF;" data-v-4df1c650> </span><span style="color:#C792EA;" data-v-4df1c650>lang</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>ts</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#89DDFF;" data-v-4df1c650> </span><span style="color:#C792EA;" data-v-4df1c650>setup</span><span style="color:#89DDFF;" data-v-4df1c650>&gt;</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#89DDFF;" data-v-4df1c650>import</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>{</span><span style="color:#F07178;" data-v-4df1c650> </span><span style="color:#A6ACCD;" data-v-4df1c650>FIconSun</span><span style="color:#89DDFF;" data-v-4df1c650>,</span><span style="color:#F07178;" data-v-4df1c650> </span><span style="color:#A6ACCD;" data-v-4df1c650>FIconMoon</span><span style="color:#F07178;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>}</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>from</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>&#39;</span><span style="color:#C3E88D;" data-v-4df1c650>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-4df1c650>&#39;</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#89DDFF;" data-v-4df1c650>import</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>{</span><span style="color:#F07178;" data-v-4df1c650> </span><span style="color:#A6ACCD;" data-v-4df1c650>ref</span><span style="color:#F07178;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>}</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>from</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>&#39;</span><span style="color:#C3E88D;" data-v-4df1c650>vue</span><span style="color:#89DDFF;" data-v-4df1c650>&#39;</span></span>
<span class="line" data-v-4df1c650></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#C792EA;" data-v-4df1c650>const</span><span style="color:#A6ACCD;" data-v-4df1c650> value1 </span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#82AAFF;" data-v-4df1c650>ref</span><span style="color:#A6ACCD;" data-v-4df1c650>(</span><span style="color:#FF9CAC;" data-v-4df1c650>true</span><span style="color:#A6ACCD;" data-v-4df1c650>)</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#C792EA;" data-v-4df1c650>const</span><span style="color:#A6ACCD;" data-v-4df1c650> value2 </span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#82AAFF;" data-v-4df1c650>ref</span><span style="color:#A6ACCD;" data-v-4df1c650>(</span><span style="color:#FF9CAC;" data-v-4df1c650>false</span><span style="color:#A6ACCD;" data-v-4df1c650>)</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>&lt;/</span><span style="color:#F07178;" data-v-4df1c650>script</span><span style="color:#89DDFF;" data-v-4df1c650>&gt;</span></span>
<span class="line" data-v-4df1c650></span></code></pre></div></details><h2 id="\u4E0D\u540C\u5C3A\u5BF8" tabindex="-1" data-v-4df1c650>\u4E0D\u540C\u5C3A\u5BF8 <a class="header-anchor" href="#\u4E0D\u540C\u5C3A\u5BF8" aria-hidden="true" data-v-4df1c650>#</a></h2><p data-v-4df1c650><code data-v-4df1c650>size</code> \u5C5E\u6027\u53EF\u914D\u7F6E\u4E0D\u540C\u7684\u5C3A\u5BF8</p>`,3),w=l(`<details class="details custom-block" data-v-4df1c650><summary data-v-4df1c650>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-4df1c650><button title="Copy Code" class="copy" data-v-4df1c650></button><span class="lang" data-v-4df1c650>html</span><pre class="shiki" data-v-4df1c650><code data-v-4df1c650><span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>&lt;</span><span style="color:#F07178;" data-v-4df1c650>template</span><span style="color:#89DDFF;" data-v-4df1c650>&gt;</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#89DDFF;" data-v-4df1c650>&lt;</span><span style="color:#F07178;" data-v-4df1c650>f-swap</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>v-model</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>value5</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>:size</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>50</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>:icon-on</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>:icon-off</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>  /&gt;</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#89DDFF;" data-v-4df1c650>&lt;</span><span style="color:#F07178;" data-v-4df1c650>f-swap</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>v-model</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>value6</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>size</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>30px</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>:icon-on</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>FIconEye</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>:icon-off</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>  /&gt;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>&lt;/</span><span style="color:#F07178;" data-v-4df1c650>template</span><span style="color:#89DDFF;" data-v-4df1c650>&gt;</span></span>
<span class="line" data-v-4df1c650></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>&lt;</span><span style="color:#F07178;" data-v-4df1c650>script</span><span style="color:#89DDFF;" data-v-4df1c650> </span><span style="color:#C792EA;" data-v-4df1c650>lang</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>ts</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#89DDFF;" data-v-4df1c650> </span><span style="color:#C792EA;" data-v-4df1c650>setup</span><span style="color:#89DDFF;" data-v-4df1c650>&gt;</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#89DDFF;" data-v-4df1c650>import</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>{</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>    </span><span style="color:#A6ACCD;" data-v-4df1c650>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-4df1c650>,</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>    </span><span style="color:#A6ACCD;" data-v-4df1c650>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-4df1c650>,</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>    </span><span style="color:#A6ACCD;" data-v-4df1c650>FIconEye</span><span style="color:#89DDFF;" data-v-4df1c650>,</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>    </span><span style="color:#A6ACCD;" data-v-4df1c650>FIconEyeSlash</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>  </span><span style="color:#89DDFF;" data-v-4df1c650>}</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>from</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>&#39;</span><span style="color:#C3E88D;" data-v-4df1c650>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-4df1c650>&#39;</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#89DDFF;" data-v-4df1c650>import</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>{</span><span style="color:#F07178;" data-v-4df1c650> </span><span style="color:#A6ACCD;" data-v-4df1c650>ref</span><span style="color:#F07178;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>}</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>from</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>&#39;</span><span style="color:#C3E88D;" data-v-4df1c650>vue</span><span style="color:#89DDFF;" data-v-4df1c650>&#39;</span></span>
<span class="line" data-v-4df1c650></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#C792EA;" data-v-4df1c650>const</span><span style="color:#A6ACCD;" data-v-4df1c650> value3 </span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#82AAFF;" data-v-4df1c650>ref</span><span style="color:#A6ACCD;" data-v-4df1c650>(</span><span style="color:#FF9CAC;" data-v-4df1c650>true</span><span style="color:#A6ACCD;" data-v-4df1c650>)</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#C792EA;" data-v-4df1c650>const</span><span style="color:#A6ACCD;" data-v-4df1c650> value4 </span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#82AAFF;" data-v-4df1c650>ref</span><span style="color:#A6ACCD;" data-v-4df1c650>(</span><span style="color:#FF9CAC;" data-v-4df1c650>true</span><span style="color:#A6ACCD;" data-v-4df1c650>)</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>&lt;/</span><span style="color:#F07178;" data-v-4df1c650>script</span><span style="color:#89DDFF;" data-v-4df1c650>&gt;</span></span>
<span class="line" data-v-4df1c650></span></code></pre></div></details><h2 id="\u4E0D\u540C\u52A8\u753B" tabindex="-1" data-v-4df1c650>\u4E0D\u540C\u52A8\u753B <a class="header-anchor" href="#\u4E0D\u540C\u52A8\u753B" aria-hidden="true" data-v-4df1c650>#</a></h2><p data-v-4df1c650><code data-v-4df1c650>type</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u52A8\u753B\u7C7B\u578B</p>`,3),V=l(`<details class="details custom-block" data-v-4df1c650><summary data-v-4df1c650>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-4df1c650><button title="Copy Code" class="copy" data-v-4df1c650></button><span class="lang" data-v-4df1c650>html</span><pre class="shiki" data-v-4df1c650><code data-v-4df1c650><span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>&lt;</span><span style="color:#F07178;" data-v-4df1c650>template</span><span style="color:#89DDFF;" data-v-4df1c650>&gt;</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#89DDFF;" data-v-4df1c650>&lt;</span><span style="color:#F07178;" data-v-4df1c650>f-swap</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>v-model</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>value5</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>type</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>default</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>:icon-on</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>FIconEye</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>:icon-off</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>FIconEyeSlash</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>  /&gt;</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#89DDFF;" data-v-4df1c650>&lt;</span><span style="color:#F07178;" data-v-4df1c650>f-swap</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>v-model</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>value6</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>type</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>sound</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>:icon-on</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>FIconSun</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>:icon-off</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>FIconMoon</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>  /&gt;</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#89DDFF;" data-v-4df1c650>&lt;</span><span style="color:#F07178;" data-v-4df1c650>f-swap</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>v-model</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>value7</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>type</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>swap</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>:icon-on</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>    </span><span style="color:#C792EA;" data-v-4df1c650>:icon-off</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>  /&gt;</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>&lt;/</span><span style="color:#F07178;" data-v-4df1c650>template</span><span style="color:#89DDFF;" data-v-4df1c650>&gt;</span></span>
<span class="line" data-v-4df1c650></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>&lt;</span><span style="color:#F07178;" data-v-4df1c650>script</span><span style="color:#89DDFF;" data-v-4df1c650> </span><span style="color:#C792EA;" data-v-4df1c650>lang</span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#C3E88D;" data-v-4df1c650>ts</span><span style="color:#89DDFF;" data-v-4df1c650>&quot;</span><span style="color:#89DDFF;" data-v-4df1c650> </span><span style="color:#C792EA;" data-v-4df1c650>setup</span><span style="color:#89DDFF;" data-v-4df1c650>&gt;</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#89DDFF;" data-v-4df1c650>import</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>{</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>    </span><span style="color:#A6ACCD;" data-v-4df1c650>FIconSun</span><span style="color:#89DDFF;" data-v-4df1c650>,</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>    </span><span style="color:#A6ACCD;" data-v-4df1c650>FIconMoon</span><span style="color:#89DDFF;" data-v-4df1c650>,</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>    </span><span style="color:#A6ACCD;" data-v-4df1c650>FIconFaceSmile</span><span style="color:#89DDFF;" data-v-4df1c650>,</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>    </span><span style="color:#A6ACCD;" data-v-4df1c650>FIconFaceFrown</span><span style="color:#89DDFF;" data-v-4df1c650>,</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>    </span><span style="color:#A6ACCD;" data-v-4df1c650>FIconEye</span><span style="color:#89DDFF;" data-v-4df1c650>,</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>    </span><span style="color:#A6ACCD;" data-v-4df1c650>FIconEyeSlash</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>  </span><span style="color:#89DDFF;" data-v-4df1c650>}</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>from</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>&#39;</span><span style="color:#C3E88D;" data-v-4df1c650>@fighting-design/fighting-icon</span><span style="color:#89DDFF;" data-v-4df1c650>&#39;</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#89DDFF;" data-v-4df1c650>import</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>{</span><span style="color:#F07178;" data-v-4df1c650> </span><span style="color:#A6ACCD;" data-v-4df1c650>ref</span><span style="color:#F07178;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>}</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>from</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>&#39;</span><span style="color:#C3E88D;" data-v-4df1c650>vue</span><span style="color:#89DDFF;" data-v-4df1c650>&#39;</span></span>
<span class="line" data-v-4df1c650></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#C792EA;" data-v-4df1c650>const</span><span style="color:#A6ACCD;" data-v-4df1c650> value5 </span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#82AAFF;" data-v-4df1c650>ref</span><span style="color:#A6ACCD;" data-v-4df1c650>(</span><span style="color:#FF9CAC;" data-v-4df1c650>true</span><span style="color:#A6ACCD;" data-v-4df1c650>)</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#C792EA;" data-v-4df1c650>const</span><span style="color:#A6ACCD;" data-v-4df1c650> value6 </span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#82AAFF;" data-v-4df1c650>ref</span><span style="color:#A6ACCD;" data-v-4df1c650>(</span><span style="color:#FF9CAC;" data-v-4df1c650>true</span><span style="color:#A6ACCD;" data-v-4df1c650>)</span></span>
<span class="line" data-v-4df1c650><span style="color:#A6ACCD;" data-v-4df1c650>  </span><span style="color:#C792EA;" data-v-4df1c650>const</span><span style="color:#A6ACCD;" data-v-4df1c650> value7 </span><span style="color:#89DDFF;" data-v-4df1c650>=</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#82AAFF;" data-v-4df1c650>ref</span><span style="color:#A6ACCD;" data-v-4df1c650>(</span><span style="color:#FF9CAC;" data-v-4df1c650>true</span><span style="color:#A6ACCD;" data-v-4df1c650>)</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>&lt;/</span><span style="color:#F07178;" data-v-4df1c650>script</span><span style="color:#89DDFF;" data-v-4df1c650>&gt;</span></span>
<span class="line" data-v-4df1c650></span></code></pre></div></details><h2 id="attributes" tabindex="-1" data-v-4df1c650>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-4df1c650>#</a></h2><div class="vp-table__container" data-v-4df1c650><table data-v-4df1c650><thead data-v-4df1c650><tr data-v-4df1c650><th data-v-4df1c650>\u53C2\u6570</th><th data-v-4df1c650>\u8BF4\u660E</th><th data-v-4df1c650>\u7C7B\u578B</th><th data-v-4df1c650>\u53EF\u9009\u503C</th><th data-v-4df1c650>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-4df1c650><tr data-v-4df1c650><td data-v-4df1c650><code data-v-4df1c650>v-model</code></td><td data-v-4df1c650>\u7ED1\u5B9A\u503C</td><td data-v-4df1c650>boolean</td><td data-v-4df1c650>\u2014\u2014</td><td data-v-4df1c650>false</td></tr><tr data-v-4df1c650><td data-v-4df1c650><code data-v-4df1c650>size</code></td><td data-v-4df1c650>\u7EC4\u4EF6\u5C3A\u5BF8</td><td data-v-4df1c650>string / number</td><td data-v-4df1c650>\u2014\u2014</td><td data-v-4df1c650>40</td></tr><tr data-v-4df1c650><td data-v-4df1c650><code data-v-4df1c650>type</code></td><td data-v-4df1c650>\u52A8\u753B\u7C7B\u578B</td><td data-v-4df1c650>string</td><td data-v-4df1c650><code data-v-4df1c650>sound</code> <code data-v-4df1c650>swap</code> <code data-v-4df1c650>default</code></td><td data-v-4df1c650>default</td></tr><tr data-v-4df1c650><td data-v-4df1c650><code data-v-4df1c650>icon-on</code></td><td data-v-4df1c650>\u6253\u5F00\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-4df1c650>object (VNode / Component)</td><td data-v-4df1c650>\u2014\u2014</td><td data-v-4df1c650>null</td></tr><tr data-v-4df1c650><td data-v-4df1c650><code data-v-4df1c650>icon-off</code></td><td data-v-4df1c650>\u5173\u95ED\u5C55\u793A\u7684\u56FE\u6807</td><td data-v-4df1c650>object (VNode / Component)</td><td data-v-4df1c650>\u2014\u2014</td><td data-v-4df1c650>null</td></tr><tr data-v-4df1c650><td data-v-4df1c650><code data-v-4df1c650>on-change</code></td><td data-v-4df1c650>\u5F53\u7ED1\u5B9A\u503C\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03</td><td data-v-4df1c650>Function</td><td data-v-4df1c650>\u2014\u2014</td><td data-v-4df1c650>null</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-4df1c650>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-4df1c650>#</a></h2><p data-v-4df1c650>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts" data-v-4df1c650><button title="Copy Code" class="copy" data-v-4df1c650></button><span class="lang" data-v-4df1c650>ts</span><pre class="shiki" data-v-4df1c650><code data-v-4df1c650><span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>import</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>type</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>{</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>  </span><span style="color:#A6ACCD;" data-v-4df1c650>SwapInstance</span><span style="color:#89DDFF;" data-v-4df1c650>,</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>  </span><span style="color:#A6ACCD;" data-v-4df1c650>SwapPropsType</span><span style="color:#89DDFF;" data-v-4df1c650>,</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>  </span><span style="color:#A6ACCD;" data-v-4df1c650>SwapType</span><span style="color:#89DDFF;" data-v-4df1c650>,</span></span>
<span class="line" data-v-4df1c650><span style="color:#F07178;" data-v-4df1c650>  </span><span style="color:#A6ACCD;" data-v-4df1c650>SwapOnChangeInterface</span></span>
<span class="line" data-v-4df1c650><span style="color:#89DDFF;" data-v-4df1c650>}</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>from</span><span style="color:#A6ACCD;" data-v-4df1c650> </span><span style="color:#89DDFF;" data-v-4df1c650>&#39;</span><span style="color:#C3E88D;" data-v-4df1c650>fighting-design</span><span style="color:#89DDFF;" data-v-4df1c650>&#39;</span></span>
<span class="line" data-v-4df1c650></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-4df1c650>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-4df1c650>#</a></h2>`,7),S={href:"https://github.com/Tyh2001",target:"_blank"},k={href:"https://github.com/ChetSerenade",target:"_blank"},O=JSON.parse('{"title":"Swap \u5207\u6362","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4E0D\u540C\u5C3A\u5BF8","slug":"\u4E0D\u540C\u5C3A\u5BF8","link":"#\u4E0D\u540C\u5C3A\u5BF8","children":[]},{"level":2,"title":"\u4E0D\u540C\u52A8\u753B","slug":"\u4E0D\u540C\u52A8\u753B","link":"#\u4E0D\u540C\u52A8\u753B","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/swap.md","lastUpdated":1667898127000}'),x={name:"components/swap.md"},U=g({...x,setup(z){const e=c(!0),f=c(!1),v=c(!0),r=c(!0),F=c(!0),D=c(!0),y=c(!0);return(M,a)=>{const d=E("f-swap"),u=E("f-avatar");return q(),b("div",null,[I,n(d,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value=t),"icon-on":s(o),"icon-off":s(p)},null,8,["modelValue","icon-on","icon-off"]),n(d,{modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=t=>f.value=t),"icon-on":s(o),"icon-off":s(p)},null,8,["modelValue","icon-on","icon-off"]),_,n(d,{modelValue:v.value,"onUpdate:modelValue":a[2]||(a[2]=t=>v.value=t),size:50,"icon-on":s(h),"icon-off":s(C)},null,8,["modelValue","icon-on","icon-off"]),n(d,{modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=t=>r.value=t),size:"30px","icon-on":s(i),"icon-off":s(A)},null,8,["modelValue","icon-on","icon-off"]),w,n(d,{modelValue:F.value,"onUpdate:modelValue":a[4]||(a[4]=t=>F.value=t),type:"default","icon-on":s(i),"icon-off":s(A)},null,8,["modelValue","icon-on","icon-off"]),n(d,{modelValue:D.value,"onUpdate:modelValue":a[5]||(a[5]=t=>D.value=t),type:"sound","icon-on":s(o),"icon-off":s(p)},null,8,["modelValue","icon-on","icon-off"]),n(d,{modelValue:y.value,"onUpdate:modelValue":a[6]||(a[6]=t=>y.value=t),type:"swap","icon-on":s(h),"icon-off":s(C)},null,8,["modelValue","icon-on","icon-off"]),V,m("a",S,[n(u,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),m("a",k,[n(u,{round:"",src:"https://avatars.githubusercontent.com/u/44160015?v=4"})])])}}});const P=B(U,[["__scopeId","data-v-4df1c650"]]);export{O as __pageData,P as default};
