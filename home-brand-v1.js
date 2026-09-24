(()=>{
  const baseRenderHome=renderHome;
  renderHome=function(){
    baseRenderHome();
    const hero=view.querySelector('.hero');
    if(!hero)return;
    hero.classList.add('academy-home-brand');
    const h2=hero.querySelector('h2');
    if(h2)h2.textContent='ӀАКЪИДАТАН АКАДЕМИЯ';

    const logo=document.createElement('img');
    logo.className='academy-home-logo';
    logo.src='https://t.me/i/userpic/320/AkidatanAcademyAppBot.jpg?v=2';
    logo.alt='Ӏакъидатан Академия';

    const menu=document.createElement('button');
    menu.className='academy-home-menu';
    menu.type='button';
    menu.setAttribute('aria-label',state.language==='ce'?'Меню схьаелла':'Открыть меню');
    menu.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    menu.addEventListener('click',()=>document.getElementById('side-menu-toggle')?.click());

    const motto=document.createElement('p');
    motto.className='academy-home-motto';
    motto.textContent=state.language==='ce'?'Iилмано АллахIана гергавоьху':'Знание приближает к Аллаху';
    const divider=document.createElement('div');
    divider.className='academy-home-divider';
    divider.innerHTML='<span class="academy-home-ornament" aria-hidden="true"></span>';

    hero.prepend(logo);
    hero.prepend(menu);
    h2?.insertAdjacentElement('afterend',motto);
    motto.insertAdjacentElement('afterend',divider);

    /* final13: authoritative phone home geometry via inline !important */
    const imp=(el,p,v)=>el&&el.style.setProperty(p,v,'important');
    const btn=hero.querySelector('.primary-btn');
    [ ['display','block'],['width','auto'],['min-width','0'],['max-width','none'],['height','40px'],['min-height','40px'],['padding','0 18px'],['margin','5px auto 0'],['font-size','15px'],['line-height','40px'],['white-space','nowrap'],['text-align','center'],['overflow','visible'] ].forEach(x=>imp(btn,x[0],x[1]));
    imp(hero,'height','194px');imp(hero,'min-height','194px');imp(hero,'max-height','194px');imp(hero,'box-sizing','border-box');

    const quickHead=hero.nextElementSibling;
    const grid=quickHead?.nextElementSibling;
    const progressHead=grid?.nextElementSibling;
    const progress=progressHead?.nextElementSibling;
    imp(quickHead,'height','30px');imp(quickHead,'min-height','30px');imp(quickHead,'margin','0 2px 3px');
    if(grid){
      imp(grid,'display','grid');imp(grid,'grid-template-columns','minmax(0,1fr) minmax(0,1fr)');
      imp(grid,'grid-template-rows','98px 98px');imp(grid,'grid-auto-rows','98px');
      imp(grid,'height','204px');imp(grid,'gap','8px');imp(grid,'margin','0');
      [...grid.children].forEach(card=>{
        imp(card,'position','static');imp(card,'transform','none');imp(card,'top','auto');
        imp(card,'height','98px');imp(card,'min-height','98px');imp(card,'max-height','98px');
        imp(card,'padding','9px 11px');imp(card,'box-sizing','border-box');imp(card,'overflow','hidden');
        const ti=card.querySelector('.quick-title'),sub=card.querySelector('.quick-sub'),ico=card.querySelector('.quick-icon');
        imp(ti,'font-size','14px');imp(ti,'line-height','1.05');
        imp(sub,'font-size','9px');imp(sub,'line-height','1.05');
        imp(ico,'width','38px');imp(ico,'height','38px');imp(ico,'flex-basis','38px');
        if(state.theme!=='dark'){imp(ti,'color','#17324d');imp(ti,'-webkit-text-fill-color','#17324d');imp(sub,'color','#60778d');imp(sub,'-webkit-text-fill-color','#60778d')}
      });
    }
    imp(progressHead,'position','static');imp(progressHead,'height','22px');imp(progressHead,'min-height','22px');imp(progressHead,'margin','2px 2px 1px');
    if(progressHead){const ph=progressHead.querySelector('h2'),pl=progressHead.querySelector('.link-btn');imp(ph,'font-size','12px');imp(pl,'font-size','10px');imp(pl,'padding','1px')}
    imp(progress,'position','static');imp(progress,'height','45px');imp(progress,'min-height','45px');imp(progress,'max-height','45px');imp(progress,'padding','4px 10px');imp(progress,'margin','0');imp(progress,'overflow','hidden');

  };
  if(state.route==='home')render();
})();
