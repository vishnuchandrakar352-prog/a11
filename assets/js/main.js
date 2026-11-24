(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var M={c:['Cornell','Best when you will test yourself later. Notes go on the right, questions in the cue column, and a short summary at the bottom.',[['Cues','Notes'],['Summary']]],
o:['Outline','Great for step-by-step lectures. Main headings on the left edge, details indented beneath them.',[['I. Main topic'],['&nbsp;&nbsp;A. Point'],['&nbsp;&nbsp;&nbsp;&nbsp;1. Detail']]],
m:['Mind map','Best for seeing connections. Put the big idea in the centre and draw branches for each related idea.',[['branch','<b>BIG IDEA</b>','branch'],['branch','branch','branch']]],
t:['Charting','Ideal for comparing. Draw a table with one column per item and one row per feature.',[['Feature','Item A','Item B'],['Cause','',''],['Effect','','']]],
s:['Sentence method','Good for fast discussions. Write each new idea as a short numbered sentence, then group them later.',[['1. ...'],['2. ...'],['3. ...']]]};
var A={a:0,b:0,c:0};function pick(){var k;if(A.b===2)k='t';else if(A.b===1||A.c===1)k='m';else if(A.a===2)k='s';else if(A.c===0)k='c';else k='o';var m=M[k];$('mt-t').textContent=m[0];$('mt-d').textContent=m[1];
 var h='';m[2].forEach(function(r){h+='<div style="display:grid;grid-template-columns:'+(r.length===2&&k==='c'?'1fr 2fr':'repeat('+r.length+',1fr)')+'">'+r.map(function(c){return '<div>'+c+'</div>';}).join('')+'</div>';});var tp=$('mt-tp');tp.innerHTML=h;tp.style.animation='none';tp.offsetHeight;tp.style.animation='';}
[].forEach.call(document.querySelectorAll('.np-opt'),function(g){var bs=[].slice.call(g.querySelectorAll('button'));bs.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){A[g.dataset.q]=+b.dataset.v;bs.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});pick();});});});if($('mt-t'))pick();
var D=864e5,view=null,MN=['January','February','March','April','May','June','July','August','September','October','November','December'];function iso(d){return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);}function pd(s){var p=s.split('-');return new Date(+p[0],p[1]-1,+p[2]);}
function plan(){var l=$('pl-l').value,e=$('pl-e').value;if(!l||!e)return {r:[]};var L=pd(l),E=pd(e),R=[];[1,3,7,14,30,60].forEach(function(n){var d=new Date(L.getTime()+n*D);if(d<E)R.push([n,d]);});var gap=Math.round((E-L)/D);if(gap>2){var last=new Date(E.getTime()-D);if(!R.length||R[R.length-1][1]<last)R.push(['eve',last]);}return {L:L,E:E,r:R,g:gap};}
function draw(){var p=plan(),nm=$('pl-n').value.trim()||'your topic';if(!view)view=p.L?new Date(p.L.getFullYear(),p.L.getMonth(),1):new Date();$('pl-m').textContent=MN[view.getMonth()]+' '+view.getFullYear();
 var first=(view.getDay()+6)%7,days=new Date(view.getFullYear(),view.getMonth()+1,0).getDate(),h='',rs={};p.r.forEach(function(x){rs[iso(x[1])]=1;});var td=iso(new Date());for(var i=0;i<first;i++)h+='<span></span>';
 for(var d=1;d<=days;d++){var dt=new Date(view.getFullYear(),view.getMonth(),d),k=iso(dt),c=[];if(p.L&&k===iso(p.L))c.push('l');if(rs[k])c.push('r');if(p.E&&k===iso(p.E))c.push('e');if(k===td)c.push('t');h+='<span class="'+c.join(' ')+'">'+d+'</span>';}$('pl-g').innerHTML=h;
 if(!p.L){$('pl-s').textContent='Pick two dates to see your plan.';$('pl-list').innerHTML='';return;}if(p.g<=0){$('pl-s').textContent='The exam needs to be after the day you learned it.';$('pl-list').innerHTML='';return;}
 $('pl-s').textContent=p.r.length+' reviews for '+nm+' in '+p.g+' days';var o={weekday:'short',month:'short',day:'numeric'};$('pl-list').innerHTML=p.r.map(function(x){return '<li>'+x[1].toLocaleDateString('en-US',o)+' &mdash; '+(x[0]==='eve'?'light review the day before':'review after '+x[0]+(x[0]===1?' day':' days'))+'</li>';}).join('');}
if($('pl-l')){var t=new Date();$('pl-l').value=iso(t);$('pl-e').value=iso(new Date(t.getTime()+21*D));['pl-l','pl-e'].forEach(function(i){$(i).addEventListener('change',function(){view=null;draw();});});$('pl-n').addEventListener('input',draw);
 $('pl-pv').addEventListener('click',function(){view=new Date(view.getFullYear(),view.getMonth()-1,1);draw();});$('pl-nx').addEventListener('click',function(){view=new Date(view.getFullYear(),view.getMonth()+1,1);draw();});draw();}
})();
