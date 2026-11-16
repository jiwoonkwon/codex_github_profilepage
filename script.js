/* global portfolioContent */
const content = window.portfolioContent;

function setTextContent() {
  document.querySelectorAll('[data-content]').forEach((element) => {
    const value = content.profile[element.dataset.content];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-content-href]').forEach((element) => {
    const key = element.dataset.contentHref;
    const value = content.profile[key];
    if (value) element.href = element.dataset.contentMailto ? `mailto:${value}` : value;
  });
  document.title = `${content.profile.name} — ${content.profile.role}`;
  document.querySelector('meta[name="description"]').content = `${content.profile.name}의 ${content.profile.role} 포트폴리오`;
  document.querySelector('#copyright-year').textContent = new Date().getFullYear();
}

function createSkillGroup(group) {
  const article = document.createElement('article');
  article.className = 'skill-group';
  const heading = document.createElement('h3');
  heading.textContent = group.title;
  const skills = document.createElement('div');
  skills.className = 'skill-tags';
  group.items.forEach((item) => { const tag = document.createElement('span'); tag.textContent = item; skills.append(tag); });
  article.append(heading, skills);
  return article;
}

function createProject(project, index) {
  const article = document.createElement('article');
  article.className = `project-card project-${(index % 3) + 1}`;
  const number = String(index + 1).padStart(2, '0');
  const text = (tag, value, className) => { const element = document.createElement(tag); if (className) element.className = className; element.textContent = value; return element; };
  const numberEl = text('div', number, 'project-number');
  const type = text('span', `/ ${project.type}`); numberEl.append(type);
  const art = document.createElement('div'); art.className = 'project-art'; art.setAttribute('aria-hidden', 'true');
  const grid = document.createElement('div'); grid.className = 'project-grid'; const label = text('span', project.artLabel, 'art-label'); const object = document.createElement('div'); object.className = 'art-object'; object.append(text('span', project.artSymbol)); art.append(grid, label, object, text('span', '✦', 'art-mark'));
  const copy = document.createElement('div'); copy.className = 'project-copy';
  const stack = document.createElement('div'); stack.className = 'project-stack'; project.stack.forEach((item) => stack.append(text('span', item)));
  const link = document.createElement('a'); link.href = project.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.setAttribute('aria-label', `${project.title} 프로젝트 열기`); link.append('프로젝트 보기', text('span', '↗'));
  copy.append(text('p', project.period), text('h3', project.title), text('p', project.description, 'project-description'), stack, link);
  article.append(numberEl, art, copy);
  return article;
}

function createExperience(item) {
  const entry = document.createElement('li');
  const detail = document.createElement('div');
  detail.append(Object.assign(document.createElement('h3'), { textContent: item.title }), Object.assign(document.createElement('p'), { textContent: item.organization }), Object.assign(document.createElement('p'), { textContent: item.description, className: 'experience-description' }));
  entry.append(Object.assign(document.createElement('span'), { textContent: item.period, className: 'experience-period' }), detail, Object.assign(document.createElement('span'), { textContent: '↗', className: 'experience-mark', ariaHidden: 'true' }));
  return entry;
}

function renderContent() {
  const skillGroups = document.querySelector('#skill-groups'); const projectList = document.querySelector('#project-list'); const experienceList = document.querySelector('#experience-list');
  content.skills.forEach((group) => skillGroups.append(createSkillGroup(group)));
  content.projects.forEach((project, index) => projectList.append(createProject(project, index)));
  content.experience.forEach((item) => experienceList.append(createExperience(item)));
  document.querySelector('#project-count').textContent = String(content.projects.length).padStart(2, '0');
}

function setMenuBehaviour() {
  const button = document.querySelector('.menu-toggle'); const nav = document.querySelector('#site-nav'); const buttonLabel = button.querySelector('.sr-only');
  button.addEventListener('click', () => { const isOpen = button.getAttribute('aria-expanded') === 'true'; button.setAttribute('aria-expanded', String(!isOpen)); buttonLabel.textContent = isOpen ? '메뉴 열기' : '메뉴 닫기'; nav.classList.toggle('is-open', !isOpen); });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { button.setAttribute('aria-expanded', 'false'); buttonLabel.textContent = '메뉴 열기'; nav.classList.remove('is-open'); }));
}

setTextContent(); renderContent(); setMenuBehaviour();
