function createLeague045(){
function tax15(pay,cap){let excess=Math.max(0,pay-cap),total=0;for(let [width,rate] of [[cap*.05,1],[cap*.05,2],[cap*.10,3],[Infinity,5]]){let x=Math.min(excess,width);total+=x*rate;excess-=x}return total}
function pickOwner18(u,y,r,t){return u.pickTrades18?.find(x=>x.year===y&&x.round===r&&x.original===t)?.owner??t}
function bowlLabel(m,bowlNames){let n=/^Reward Bowl (\d+)$/.exec(m.kind||"");return n?bowlNames[Number(n[1])-1]+" Bowl":m.kind|| (m.w?"Week "+m.w:"Game");}
function higher(a,b,seeds){return seeds.indexOf(a)<seeds.indexOf(b)?[a,b]:[b,a]}
return Object.freeze({tax15,pickOwner18,bowlLabel,higher});
}
globalThis.GFLLeague045=createLeague045();
