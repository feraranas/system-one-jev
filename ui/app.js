let data, query = '', mechanism = '', selected = '';
const main = document.querySelector('#main');
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function linkURL(value) {
  if (/^https?:\/\//i.test(value)) return value;
  const id = value.match(/(?:^|\/)research\/(P\d+)[^/]*\.md(?:#.*)?$/)?.[1];
  if (id) return '#projects/' + id;
  if (/^(?:\.\.\/)?INDEX\.md(?:#.*)?$/.test(value)) return value.endsWith('#connections') ? '#connections' : value.endsWith('#ideas-to-explore') ? '#ideas' : '#projects';
  return '';
}
function inline(value) {
  return escapeHTML(value).replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, title, href) => {
    const url = linkURL(href.replace(/&amp;/g, '&'));
    return url ? `<a href="${escapeHTML(url)}" ${url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${title}</a>` : title;
  }).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
function markdown(text) {
  const lines = text.split('\n'); let html = '', list = '', code = false, table = false;
  const close = () => { if (list) {html += `</${list}>`; list = '';} if (table) {html += '</tbody></table></div>'; table = false;} };
  for (let i=0; i<lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('```')) { close(); html += code ? '</code></pre>' : '<pre><code>'; code = !code; continue; }
    if (code) {html += escapeHTML(line) + '\n'; continue;}
    if (!line.trim()) {close(); continue;}
    if (line.startsWith('|')) {
      if (/^\|[\s:|\-]+\|\s*$/.test(line)) continue;
      const cells = line.replace(/^\||\|\s*$/g, '').split('|');
      if (!table) {close(); html += '<div class="table-wrap"><table><thead><tr>' + cells.map(c=>`<th>${inline(c.trim())}</th>`).join('') + '</tr></thead><tbody>'; table=true;}
      else html += '<tr>'+cells.map(c=>`<td>${inline(c.trim())}</td>`).join('')+'</tr>';
      continue;
    }
    const heading = line.match(/^(#{1,6}) (.+)$/);
    if (heading) {close(); const level=Math.min(heading[1].length+1,6); html += `<h${level}>${inline(heading[2])}</h${level}>`; continue;}
    const item=line.match(/^([-*]|\d+\.) (.+)$/);
    if (item) {const type=/\d/.test(item[1])?'ol':'ul'; if(list!==type){close();html+=`<${type}>`;list=type;} html+=`<li>${inline(item[2])}</li>`;continue;}
    close(); html += `<p>${inline(line)}</p>`;
  }
  close(); if(code) html+='</code></pre>'; return html;
}
function render() {
  if (!data) return;
  const parts=location.hash.slice(1).split('/'), view=['projects','connections','ideas'].includes(parts[0])?parts[0]:'projects';
  document.querySelectorAll('[data-view]').forEach(a=>{if(a.dataset.view===view)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  if(view!=='projects') {
    main.innerHTML=`<div class="page-heading"><p class="eyebrow">THE GROWING PICTURE</p><h1>${view==='ideas'?'Ideas to explore':'Connections'}</h1><p>${view==='ideas'?'Possibilities, assumptions, and the next small experiment.':'Relationships between projects, with their evidence and unknowns.'}</p></div><article class="document synthesis">${markdown(data[view] || 'Nothing recorded yet.')}</article>`;
    return;
  }
  if(parts[1] && data.projects.some(p=>p.id===parts[1])) {selected=parts[1];query='';mechanism='';}
  const mechanisms=[...new Set(data.projects.flatMap(p=>p.mechanisms))].sort();
  main.innerHTML=`<div class="page-heading"><p class="eyebrow">FIELD NOTES</p><h1>Projects</h1><p>Smart uses of Jev. What they do, how they work, and what we can learn.</p></div><div class="controls"><label class="search">Search research<input id="search" type="search" placeholder="Project, mechanism, or question…" value="${escapeHTML(query)}"></label><label>Mechanism<select id="mechanism"><option value="">All mechanisms</option>${mechanisms.map(m=>`<option ${m===mechanism?'selected':''}>${escapeHTML(m)}</option>`).join('')}</select></label></div><p id="result-count" class="result-count" aria-live="polite"></p><div class="project-layout"><div id="project-list" class="project-list" aria-label="Project results"></div><article id="detail" class="document"></article></div>`;
  document.querySelector('#search').addEventListener('input',e=>{query=e.target.value;renderResults();});
  document.querySelector('#mechanism').addEventListener('change',e=>{mechanism=e.target.value;renderResults();});
  renderResults();
}
function renderResults() {
  const projects=data.projects.filter(p=>(!mechanism||p.mechanisms.includes(mechanism))&&`${p.id} ${p.name} ${p.summary} ${p.mechanisms.join(' ')} ${p.research}`.toLowerCase().includes(query.toLowerCase().trim()));
  if(!projects.some(p=>p.id===selected)) selected=projects[0]?.id || '';
  document.querySelector('#result-count').textContent=`${projects.length} of ${data.projects.length} projects`;
  document.querySelector('#project-list').innerHTML=projects.length?projects.map(p=>`<button class="project-card ${p.id===selected?'selected':''}" data-id="${escapeHTML(p.id)}" aria-pressed="${p.id===selected}"><span class="project-id">${escapeHTML(p.id)}</span><h2>${escapeHTML(p.name)}</h2><div class="research-status">${escapeHTML(p.status)}</div><p>${escapeHTML(p.summary)}</p><div class="tags">${p.mechanisms.map(m=>`<span>${escapeHTML(m)}</span>`).join('')}</div><span class="read-note">Read research ↗</span></button>`).join(''):'<div class="empty"><h2>No matching projects</h2><p>Try a different term or choose all mechanisms.</p><button id="clear">Clear filters</button></div>';
  document.querySelectorAll('[data-id]').forEach(b=>b.addEventListener('click',()=>{selected=b.dataset.id;history.replaceState(null,'','#projects/'+selected);renderResults();}));
  document.querySelector('#clear')?.addEventListener('click',()=>{query='';mechanism='';render();});
  const project=projects.find(p=>p.id===selected);
  document.querySelector('#detail').innerHTML=project?`<div class="note-meta"><span>RESEARCH NOTE · ${escapeHTML(project.id)}</span><span>${escapeHTML(project.path||'Note pending')}</span></div><div class="detail-status">${escapeHTML(project.status)}</div>${markdown(project.research)}<footer class="note-footer"><strong>Research task</strong><p>${inline(project.task)}</p><strong>Original sources</strong><p>${inline(project.sources)}</p></footer>`:'';
}
async function load() {
  const button=document.querySelector('#refresh');button.disabled=true;button.textContent='Refreshing…';
  try {
    const response=await fetch('/api/inventory');if(!response.ok)throw Error('Unable to load notes');
    data=await response.json();document.querySelector('#project-count').textContent=data.projects.length;document.querySelector('#updated').textContent='Updated '+data.updated;render();document.querySelector('#status').textContent='Research notes refreshed.';
  } catch(error) {main.innerHTML='<div class="empty"><h1>Could not load the notebook</h1><p>Check that INDEX.md is available, then try Refresh notes.</p></div>';document.querySelector('#status').textContent='Could not load research notes.';}
  finally {button.disabled=false;button.textContent='Refresh notes';}
}
document.querySelector('#refresh').addEventListener('click',load);window.addEventListener('hashchange',render);load();
