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
function synthesisRows(text, view) {
  const footer = 'Proposed combinations remain hypotheses until tested.';
  const hasFooter = text.includes(footer);
  const content = text.replace(footer, '').trim();
  const sections = [...content.matchAll(/^### (.+)\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm)];
  if (!sections.length) return markdown(content || 'Nothing recorded yet.');
  const intro = content.slice(0, sections[0].index);
  return markdown(intro) + '<div class="synthesis-list">' + sections.map((section, i) => {
    const id = `${view}-${i}`;
    return `<section class="project-entry"><button class="project-card" id="toggle-${id}" data-synthesis="${id}" aria-expanded="false" aria-controls="research-${id}"><span class="row-content"><span class="project-title">${escapeHTML(section[1])}</span></span><span class="row-toggle" aria-hidden="true">+</span></button><article class="document" id="research-${id}" aria-labelledby="toggle-${id}" hidden>${markdown(section[2])}</article></section>`;
  }).join('') + '</div>' + (hasFooter ? markdown(footer) : '');
}
function bindSynthesisRows() {
  main.querySelectorAll('[data-synthesis]').forEach(button => button.addEventListener('click', () => {
    const opening = button.getAttribute('aria-expanded') !== 'true';
    main.querySelectorAll('[data-synthesis]').forEach(row => {
      const expanded = row === button && opening;
      row.setAttribute('aria-expanded', String(expanded));
      row.classList.toggle('selected', expanded);
      row.querySelector('.row-toggle').textContent = expanded ? '−' : '+';
      document.getElementById(row.getAttribute('aria-controls')).hidden = !expanded;
    });
  }));
}
function render() {
  if (!data) return;
  const parts=location.hash.slice(1).split('/'), view=['projects','connections','ideas'].includes(parts[0])?parts[0]:'projects';
  document.querySelectorAll('[data-view]').forEach(a=>{if(a.dataset.view===view)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  if(view!=='projects') {
    main.innerHTML=`<div class="page-heading"><p class="eyebrow">THE GROWING PICTURE</p>${view==='ideas'?'<h1>Ideas to explore</h1>':''}<p>${view==='ideas'?'Possibilities, assumptions, and the next small experiment.':'Relationships between projects, with their evidence and unknowns.'}</p></div><div class="synthesis">${synthesisRows(data[view] || '', view)}</div>`;
    bindSynthesisRows();
    return;
  }
  if(parts[1] && data.projects.some(p=>p.id===parts[1])) {selected=parts[1];query='';mechanism='';}
  const mechanisms=[...new Set(data.projects.flatMap(p=>p.mechanisms))].sort();
  main.innerHTML=`<div class="page-heading"><p class="eyebrow">FIELD NOTES</p><p>Smart uses of Jev. What they do, how they work, and what we can learn.</p></div><div class="controls"><label class="search">Search research<input id="search" type="search" placeholder="Project, mechanism, or question…" value="${escapeHTML(query)}"></label><label>Mechanism<select id="mechanism"><option value="">All mechanisms</option>${mechanisms.map(m=>`<option ${m===mechanism?'selected':''}>${escapeHTML(m)}</option>`).join('')}</select></label></div><p id="result-count" class="result-count" aria-live="polite"></p><div class="project-layout"><div id="project-list" class="project-list" aria-label="Project results"></div></div>`;
  document.querySelector('#search').addEventListener('input',e=>{query=e.target.value;renderResults();});
  document.querySelector('#mechanism').addEventListener('change',e=>{mechanism=e.target.value;renderResults();});
  renderResults();
}
function renderResults() {
  const projects=data.projects.filter(p=>(!mechanism||p.mechanisms.includes(mechanism))&&`${p.id} ${p.name} ${p.summary} ${p.mechanisms.join(' ')} ${p.research}`.toLowerCase().includes(query.toLowerCase().trim()));
  if(!projects.some(p=>p.id===selected)) selected='';
  document.querySelector('#result-count').textContent=`${projects.length} of ${data.projects.length} projects`;
  document.querySelector('#project-list').innerHTML=projects.length?projects.map(p=>`<section class="project-entry"><button class="project-card ${p.id===selected?'selected':''}" id="toggle-${escapeHTML(p.id)}" data-id="${escapeHTML(p.id)}" aria-expanded="${p.id===selected}" aria-controls="research-${escapeHTML(p.id)}"><span class="project-id">${escapeHTML(p.id)}</span><span class="row-content"><span class="project-title">${escapeHTML(p.name)}</span><span class="project-summary">${escapeHTML(p.summary)}</span><span class="tags">${p.mechanisms.map(m=>`<span>${escapeHTML(m)}</span>`).join('')}</span></span><span class="row-toggle" aria-hidden="true">${p.id===selected?'−':'+'}</span></button><article id="research-${escapeHTML(p.id)}" class="document" aria-labelledby="toggle-${escapeHTML(p.id)}" ${p.id===selected?'':'hidden'}>${p.id===selected?researchHTML(p):''}</article></section>`).join(''):'<div class="empty"><h2>No matching projects</h2><p>Try a different term or choose all mechanisms.</p><button id="clear">Clear filters</button></div>';
  document.querySelectorAll('[data-id]').forEach(b=>b.addEventListener('click',()=>{const id=b.dataset.id;selected=selected===id?'':id;history.replaceState(null,'',selected?'#projects/'+selected:'#projects');renderResults();document.getElementById('toggle-'+id).focus({preventScroll:true});}));
  document.querySelectorAll('[data-notepad]').forEach(mountNotepad);
  document.querySelector('#clear')?.addEventListener('click',()=>{query='';mechanism='';history.replaceState(null,'','#projects');render();});
}
function researchHTML(project) {
  return `<div class="research-columns"><div class="research-body"><div class="note-meta"><span>RESEARCH NOTE · ${escapeHTML(project.id)}</span><span>${escapeHTML(project.path||'Note pending')}</span></div><div class="detail-status">${escapeHTML(project.status)}</div>${markdown(project.research)}<footer class="note-footer"><strong>Research task</strong><p>${inline(project.task)}</p><strong>Original sources</strong><p>${inline(project.sources)}</p></footer></div><aside class="personal-notes" data-notepad="${escapeHTML(project.id)}" aria-label="My notes for ${escapeHTML(project.id)}"></aside></div>`;
}
async function load() {
  const button=document.querySelector('#refresh');button.disabled=true;button.textContent='Refreshing…';
  try {
    const response=await fetch('/api/inventory');if(!response.ok)throw Error('Unable to load notes');
    data=await response.json();document.querySelector('#project-count').textContent=data.projects.length;render();document.querySelector('#status').textContent='Research notes refreshed.';
  } catch(error) {main.innerHTML='<div class="empty"><h1>Could not load the notebook</h1><p>Check that INDEX.md is available, then try Refresh notes.</p></div>';document.querySelector('#status').textContent='Could not load research notes.';}
  finally {button.disabled=false;button.textContent='Refresh notes';}
}
document.querySelector('#refresh').addEventListener('click',load);window.addEventListener('hashchange',render);load();

const notepads = new Map();
function noteStatus(state) {
  return state.message || (state.body !== state.saved ? 'Unsaved changes' : state.updated_at ? 'Saved · ' + new Date(state.updated_at).toLocaleString() : 'No saved notes yet.');
}
async function mountNotepad(panel) {
  const id = panel.dataset.notepad;
  panel.innerHTML = '<h3>My notes</h3><p>Loading notes…</p>';
  if (!notepads.has(id)) {
    try {
      const response = await fetch('/api/notes/' + id);
      if (!response.ok) throw Error('Could not load notes.');
      const note = await response.json();
      if (!notepads.has(id)) notepads.set(id, {...note, saved:note.body, busy:false, message:''});
    } catch (error) {
      if (panel.isConnected) {
        panel.innerHTML = '<h3>My notes</h3><p>Could not load notes.</p><button type="button">Retry</button>';
        panel.querySelector('button').onclick = () => mountNotepad(panel);
      }
      return;
    }
  }
  if (!panel.isConnected) return;
  const state = notepads.get(id);
  panel.innerHTML = `<h3><label for="notes-${id}">My notes</label></h3><textarea id="notes-${id}" rows="20" maxlength="100000" placeholder="Your thoughts, questions, and things to try…">${escapeHTML(state.body)}</textarea><p><button type="button" class="save-note">Save notes</button> <button type="button" class="reload-note">Load saved version</button></p><p class="note-save-status" role="status"></p><p><small>Saved on this computer. Not synced through Git.</small></p>`;
  const textarea = panel.querySelector('textarea');
  const status = panel.querySelector('.note-save-status');
  const save = panel.querySelector('.save-note');
  const reload = panel.querySelector('.reload-note');
  const update = () => {
    status.textContent = noteStatus(state);
    save.disabled = state.busy || state.body === state.saved;
    reload.disabled = state.busy;
  };
  update();
  textarea.oninput = () => {state.body=textarea.value;state.message='';update();};
  save.onclick = async () => {
    const body = state.body;
    state.busy=true;state.message='Saving…';update();
    try {
      const response = await fetch('/api/notes/' + id, {method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({body,revision:state.revision})});
      const result = await response.json();
      if (!response.ok) throw Error(result.error || 'Could not save notes.');
      state.saved=body;state.revision=result.revision;state.updated_at=result.updated_at;state.message='';
    } catch(error) {state.message=error.message + ' Copy your draft before loading the saved version.';}
    finally {
      state.busy=false;
      const current = document.querySelector(`[data-notepad="${id}"]`);
      if (current === panel) update();
      else if (current) mountNotepad(current);
    }
  };
  reload.onclick = () => {
    if (state.body !== state.saved && !confirm('Discard this unsaved draft and load the saved version?')) return;
    notepads.delete(id);mountNotepad(panel);
  };
}
window.addEventListener('beforeunload', event => {
  if ([...notepads.values()].some(state => state.busy || state.body !== state.saved)) {
    event.preventDefault();event.returnValue='';
  }
});
