import{z as k,e as x,A as b,w as c,u as i,b as o,F as h,r as A,f as m,o as n,h as C,i as v,j as T,k as q,t as D}from"./entry.b20c249d.js";import{u as N}from"./composables.ed5a595f.js";import{g as Q,r as d,a as _,t as B}from"./twGlobal.506a61fd.js";const F=Q`
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
}`,E=k({__name:"default",async setup(G){var u,l;let e,a;x();const p=b().name,{data:g}=([e,a]=c(()=>m(B)),e=await e,a(),e),{data:s}=([e,a]=c(()=>m(F,{slug:p||"index"})),e=await e,a(),e),f=d(_(i(g))),{twGlobal:{data:{siteHeader:y,footer:L}}}=f,{Seo:t={}}=(s==null?void 0:s.value)&&((l=(u=d(_(s.value)))==null?void 0:u.pages)==null?void 0:l.data[0])||{};return N({title:t==null?void 0:t.metaTitle,meta:[{name:"description",content:(t==null?void 0:t.metaDescription)||""},{name:"keywords",content:(t==null?void 0:t.keywords)||""}],bodyAttrs:{class:"test"}}),(R,V)=>{const w=T;return n(),o("div",null,[(n(!0),o(h,null,A(i(y).navigations.data,r=>(n(),o("div",{key:r.href},[C(w,{to:r.href,target:r.target},{default:v(()=>[q(D(r.label),1)]),_:2},1032,["to","target"])]))),128))])}}});export{E as default};
