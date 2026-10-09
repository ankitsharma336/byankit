(function(){
  "use strict";

  let current="0", tokens=[], expr="", memory=0, memorySet=false, fresh=false;
  const angle="deg";

  const $=id=>document.getElementById(id);
  const ops=new Set(["+","-","*","/","mod","^","yroot","logyx"]);

  function precision(n){
    if(!Number.isFinite(n)) return n;
    return Number(Math.round(n+"e12")+"e-12");
  }
  function display(){
    const expression=$("gateCalcExpression");
    const mem=$('gateCalcMemory');
    if(expression) expression.textContent=expr;
    if(mem) mem.classList.toggle("hidden",!memorySet || memory===0);
    const out=$("gateCalcDisplay");
    if(out) out.textContent=current;
  }
  function error(msg="Invalid Input"){
    current=msg; fresh=true; display();
  }

  function digit(d){
    if(fresh || current==="0" || current==="Error" || current==="Invalid Input"){
      current=d;
      if(tokens.length && (ops.has(tokens.at(-1)) || tokens.at(-1)==="(")) expr+=d;
      fresh=false;
    }else if(current.replace("-","").replace(/\./g,"").length<15){
      current+=d;
      if(expr && !expr.endsWith(" ") && !expr.endsWith("(") && !expr.endsWith(current.slice(0,-1))) expr+=d;
      else if(expr && expr.endsWith(current.slice(0,-1))) expr+=d;
    }
    display();
  }
  function decimal(){
    if(fresh || current==="Error" || current==="Invalid Input"){
      current="0.";
      if(tokens.length && (ops.has(tokens.at(-1)) || tokens.at(-1)==="(")) expr+="0.";
      fresh=false;
    }else if(!current.includes(".") && !/[eE]/.test(current)){
      current+=".";
      expr+=".";
    }
    display();
  }
  function sign(){
    if(current==="0"||current==="Error"||current==="Invalid Input") return;
    current=current.startsWith("-")?current.slice(1):"-"+current;
    display();
  }
  function back(){
    if(fresh||current==="Error"||current==="Invalid Input"||current==="0"){
      current="0"; fresh=false;
    }else{
      current=current.slice(0,-1);
      if(current===""||current==="-") current="0";
    }
    display();
  }
  function clear(){current="0";tokens=[];expr="";fresh=false;display()}

  function unary(op){
    const v=Number(current);
    if(!Number.isFinite(v)) return;
    let r, label=op+"("+v+")";
    try{
      const rad=x=>angle==="deg"?x*Math.PI/180:x;
      const out=x=>angle==="deg"?x*180/Math.PI:x;
      switch(op){
        case"sin":r=Math.sin(rad(v));break;
        case"cos":r=Math.cos(rad(v));break;
        case"tan":r=Math.tan(rad(v));break;
        case"asin":r=out(Math.asin(v));break;
        case"acos":r=out(Math.acos(v));break;
        case"atan":r=out(Math.atan(v));break;
        case"sinh":r=Math.sinh(v);break;
        case"cosh":r=Math.cosh(v);break;
        case"tanh":r=Math.tanh(v);break;
        case"asinh":r=Math.asinh(v);break;
        case"acosh":r=Math.acosh(v);break;
        case"atanh":r=Math.atanh(v);break;
        case"sqr":r=v*v;break;
        case"cube":r=v*v*v;break;
        case"sqrt":r=Math.sqrt(v);break;
        case"cbrt":r=Math.cbrt(v);break;
        case"log10":r=Math.log10(v);break;
        case"ln":r=Math.log(v);break;
        case"log2":r=Math.log2(v);break;
        case"fact":r=factorial(v);break;
        case"recip":r=1/v;break;
        case"abs":r=Math.abs(v);break;
        case"exp10":r=Math.pow(10,v);break;
        case"expe":r=Math.exp(v);break;
        case"percent":r=v/100;break;
        default:return;
      }
      if(!Number.isFinite(r)) throw new Error("Invalid Input");
      current=String(precision(r));
      expr=(expr?expr+" ":"")+label;
      fresh=true;
      display();
    }catch(e){error()}
  }

  function factorial(n){
    if(n<0||Math.floor(n)!==n||n>170)return NaN;
    let r=1; for(let i=2;i<=n;i++)r*=i; return r;
  }

  function binary(op){
    const symbolMap={pow:"^",yroot:"yroot",logyx:"logyx",mod:"mod"};
    const symbol=symbolMap[op]||op;
    if(tokens.length && ops.has(tokens[tokens.length-1]) && fresh){
      tokens[tokens.length-1]=symbol;
      expr=expr.replace(/\s[^\s]+\s$/," "+symbol+" ");
      display(); return;
    }
    if(!fresh || !tokens.length){
      tokens.push(current);
      if(!expr || expr.endsWith(" ")) expr+=current;
    }
    tokens.push(symbol);
    expr+=" "+symbol+" ";
    fresh=true;
    display();
  }

  function paren(p){
    if(p==="("){
      if(!fresh&&current!=="0"){
        tokens.push(current,"*"); expr+=current+" * ";
      }
      tokens.push("("); expr+="("; fresh=true;
    }else{
      const open=tokens.filter(x=>x==="(").length;
      const close=tokens.filter(x=>x===")").length;
      if(open<=close)return;
      if(!fresh){tokens.push(current);expr+=current}
      tokens.push(")");expr+=")";fresh=true;
    }
    display();
  }

  function constant(c){
    current=c==="pi"?String(precision(Math.PI)):String(precision(Math.E));
    fresh=true;
    expr=(expr?expr+" ":"")+(c==="pi"?"π":"e");
    display();
  }

  function expInput(){
    if(fresh || !Number.isFinite(Number(current)))return;
    if(!/[eE]/.test(current)) current+="e+";
    display();
  }

  function evaluate(a){
    const prec={"+":1,"-":1,"*":2,"/":2,"mod":2,"^":3,"yroot":3,"logyx":3};
    const right=new Set(["^","yroot","logyx"]),out=[],stack=[];
    for(const t of a){
      if(t!==""&&!isNaN(Number(t))){out.push(Number(t));continue}
      if(t in prec){
        while(stack.length&&stack.at(-1)!=="("){
          const top=stack.at(-1);
          const pop=right.has(t)?prec[top]>prec[t]:prec[top]>=prec[t];
          if(!pop)break; out.push(stack.pop());
        }
        stack.push(t);
      }else if(t==="(") stack.push(t);
      else if(t===")"){
        let ok=false;
        while(stack.length){const z=stack.pop();if(z==="("){ok=true;break}out.push(z)}
        if(!ok)return NaN;
      }else return NaN;
    }
    while(stack.length){const z=stack.pop();if(z==="(")return NaN;out.push(z)}
    const s=[];
    for(const t of out){
      if(typeof t==="number"){s.push(t);continue}
      if(s.length<2)return NaN;
      const b=s.pop(),a=s.pop();let v;
      if(t==="+")v=a+b;
      else if(t==="-")v=a-b;
      else if(t==="*")v=a*b;
      else if(t==="/")v=a/b;
      else if(t==="mod")v=a%b;
      else if(t==="^")v=Math.pow(a,b);
      else if(t==="yroot")v=Math.pow(b,1/a);
      else if(t==="logyx")v=Math.log(b)/Math.log(a);
      else return NaN;
      if(!Number.isFinite(v))return NaN;
      s.push(v);
    }
    return s.length===1?s[0]:NaN;
  }

  function equals(){
    // The real GATE-style display keeps the completed calculation in the
    // upper stream and the current value in the lower display. Repeated '='
    // therefore appends the current result instead of moving DEG or erasing it.
    if(!tokens.length){
      if(fresh && current!=="Error" && current!=="Invalid Input"){
        expr=(expr?expr:"0")+" = "+current;
        display();
      }
      return;
    }
    if(!fresh) tokens.push(current);
    const r=evaluate(tokens);
    if(!Number.isFinite(r)){error();return}
    const val=String(precision(r));
    current=val;
    expr=(expr?expr+" ":"")+"= "+val;
    tokens=[];
    fresh=true;
    display();
  }

  function memoryAction(a){
    const v=Number(current);if(!Number.isFinite(v))return;
    if(a==="MS"){memory=v;memorySet=true}
    if(a==="MR"&&memorySet){current=String(memory);fresh=true}
    if(a==="MC"){memory=0;memorySet=false}
    if(a==="M+"){memory+=v;memorySet=true}
    if(a==="M-"){memory-=v;memorySet=true}
    display();
  }

  function resetForExam(){
    clear();memory=0;memorySet=false;
    display();
  }

  document.addEventListener("click",function(e){
    const b=e.target.closest("[data-calc-action]"); if(!b)return;
    const a=b.dataset.calcAction,v=b.dataset.value;
    if(a==="digit")digit(v);
    else if(a==="decimal")decimal();
    else if(a==="sign")sign();
    else if(a==="back")back();
    else if(a==="clear")clear();
    else if(a==="unary")unary(v);
    else if(a==="binary")binary(v);
    else if(a==="paren")paren(v);
    else if(a==="constant")constant(v);
    else if(a==="exp")expInput();
    else if(a==="equals")equals();
    else if(a==="memory")memoryAction(v);
  });

  window.GateCalc={resetForExam};
  display();
})();
