import{z as w,e as b,A as x,w as u,u as c,b as o,F as h,r as A,f as i,o as r,h as C,i as D,j as S,k as T,t as q}from"./entry.1fa5a7a1.js";import{u as v}from"./composables.22b22b83.js";import{g as N,r as m,a as d,t as Q}from"./twGlobal.dbb29c41.js";const z=N`
query($slug: String){
  pages(filters: { slug:{ eq: $slug }}){
    data {
      attributes{
        Seo{
          __typename
          ...on ComponentShareSeo{
            metaTitle
            metaDescription
            keywords
          }
        }
      }
    }
  }
}`,j=w({__name:"default",async setup(B){var n,l;let e,a;b();const p=x().name,{data:_}=([e,a]=u(()=>i(Q)),e=await e,a(),e),{data:g}=([e,a]=u(()=>i(z,{slug:p||"index"})),e=await e,a(),e),f=m(d(c(_))),{twGlobal:{data:{siteHeader:y,footer:G}}}=f,{Seo:t}=(l=(n=m(d(g.value)))==null?void 0:n.pages)==null?void 0:l.data[0];return console.log("%c [ Seo ]-36","font-size:13px; background:pink; color:#bf2c9f;",t),v({title:t==null?void 0:t.metaTitle,meta:[{name:"description",content:(t==null?void 0:t.metaDescription)||""},{name:"keywords",content:(t==null?void 0:t.keywords)||""}],bodyAttrs:{class:"test"}}),(H,L)=>{const k=S;return r(),o("div",null,[(r(!0),o(h,null,A(c(y).navigations.data,s=>(r(),o("div",{key:s.href},[C(k,{to:s.href,target:s.target},{default:D(()=>[T(q(s.label),1)]),_:2},1032,["to","target"])]))),128))])}}});export{j as default};
