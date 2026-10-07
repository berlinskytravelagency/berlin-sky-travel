const nav=document.querySelector('.nav'), menu=document.querySelector('.menu');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('requestForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const destination=document.getElementById('destination').value.trim();
  const service=document.getElementById('service').value;
  const msg=`Hello Berlin Sky Travel! My name is ${name}. I need help with ${service} to ${destination}.`;
  window.open('https://wa.me/9647504797683?text='+encodeURIComponent(msg),'_blank');
});

const translations={
  en:{nav:['Services','Destinations','About','Contact'],title:'Your journey<br><em>begins with us.</em>',hero:'Flights, visas, hotels and travel support — handled with care from Erbil to the world.',explore:'Explore services',quick:'Planning a trip?',simple:"Travel made simpler.",world:'From Erbil to the world.'},
  ku:{nav:['خزمەتگوزارییەکان','شوێنەکان','دەربارەی ئێمە','پەیوەندی'],title:'گەشتەکەت<br><em>لەگەڵ ئێمە دەست پێدەکات.</em>',hero:'تیکەتی فڕۆکە، ڤیزا، هۆتێل و خزمەتگوزاریی گەشت — بە وردی لە هەولێرەوە بۆ جیهان.',explore:'خزمەتگوزارییەکان ببینە',quick:'پلانت بۆ گەشت هەیە؟',simple:'گەشتکردن ئاسانتر بکە.',world:'لە هەولێرەوە بۆ جیهان.'},
  ar:{nav:['الخدمات','الوجهات','من نحن','اتصل بنا'],title:'رحلتك<br><em>تبدأ معنا.</em>',hero:'تذاكر الطيران والتأشيرات والفنادق وخدمات السفر — بعناية من أربيل إلى العالم.',explore:'استكشف الخدمات',quick:'هل تخطط لرحلة؟',simple:'السفر أصبح أسهل.',world:'من أربيل إلى العالم.'}
};
let current='en';
document.getElementById('lang').addEventListener('click',()=>{
 current=current==='en'?'ku':current==='ku'?'ar':'en';
 const t=translations[current];
 document.documentElement.dir=current==='ar'||current==='ku'?'rtl':'ltr';
 document.querySelectorAll('nav a').forEach((a,i)=>a.textContent=t.nav[i]);
 document.querySelector('.hero h1').innerHTML=t.title;
 document.querySelector('.hero p').textContent=t.hero;
 document.querySelector('.actions .outline').textContent=t.explore;
 document.querySelector('.quick h2').textContent=t.quick;
 document.querySelector('#services h2').textContent=t.simple;
 document.querySelector('#destinations h2').textContent=t.world;
 document.getElementById('lang').textContent=current==='en'?'KU':current==='ku'?'AR':'EN';
});
