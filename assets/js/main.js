/* Dolapo — portfolio script.
   Everything is rendered from data/projects.js. */
(function () {
  const D = window.PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const byId = (id) => D.projects.find((p) => p.id === id);
  const catKey = (p) => p.category || "other";
  const catLabel = (p) => (D.categories.find((c) => c.key === p.category) || { label: "Video" }).label;
  const tweetId = (p) => p.url.split("/").pop().split("?")[0];
  const fmt = (n) => (n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "K" : String(n));
  const img = (p, extra = "") => `<img src="${p.poster}" alt="" loading="lazy" referrerpolicy="no-referrer" ${extra}>`;
  const catColor = { fintech: "var(--fintech)", crypto: "var(--crypto)", ai: "var(--ai)", other: "var(--other)" };

  const I = (d, fill) => `<svg viewBox="0 0 24 24" ${fill ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"'} aria-hidden="true">${d}</svg>`;
  const ICON = {
    play: I('<path d="M8 5v14l11-7z"/>', true),
    heart: I('<path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.3 3 4.5 6.7 4.5c2 0 3.4 1.1 4.3 2.4.9-1.3 2.3-2.4 4.3-2.4 3.7 0 5.8 3.8 4.3 7.3C19.5 16.4 12 21 12 21z"/>', true),
    video: I('<rect x="2.5" y="5" width="14" height="14" rx="3"/><path d="M16.5 10l5-3v10l-5-3z"/>'),
    thread: I('<rect x="3" y="3" width="11" height="8" rx="2"/><path d="M8.5 11v4"/><rect x="10" y="15" width="11" height="6" rx="2"/><path d="M6 7h5"/>'),
    star: I('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>'),
    custom: I('<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>'),
    scissors: I('<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.6 7.6L20 18M8.6 16.4L20 6"/>'),
    palette: I('<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-1.1-.9-1.4-.9-2.4 0-.9.7-1.5 1.6-1.5H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7.5" r="1"/><circle cx="14.5" cy="7.5" r="1"/>'),
    sparkle: I('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>'),
    chart: I('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    x: I('<path d="M17.8 3h3.1l-6.8 7.8 8 10.2h-6.3l-4.9-6.4-5.6 6.4H2.2l7.3-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z"/>', true),
    tiktok: I('<path d="M16.6 2h-3.4v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.1a6.3 6.3 0 1 0 5.4 6.3V8.6a8.2 8.2 0 0 0 4.4 1.3V6.5a4.4 4.4 0 0 1-4.4-4.5z"/>', true),
    instagram: I('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>'),
    mail: I('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>'),
    quote: I('<path d="M7 7h4v4H8v2a2 2 0 0 0 2 2v2a4 4 0 0 1-4-4V8a1 1 0 0 1 1-1zm8 0h4v4h-3v2a2 2 0 0 0 2 2v2a4 4 0 0 1-4-4V8a1 1 0 0 1 1-1z"/>', true),
  };

  let filter = "all";
  let current = 0;
  const visible = () => D.projects.filter((p) => filter === "all" || p.category === filter);

  /* ---------- hero ---------- */
  function renderHero() {
    const likes = D.projects.reduce((s, p) => s + (p.likes || 0), 0);
    $("[data-stats]").innerHTML = `<li><b>${D.projects.length}</b>videos</li><li><b>${fmt(likes)}+</b>likes on X</li><li><b>${D.caseStudies.length}</b>brand series</li>`;
    $("[data-float]").innerHTML = D.heroCards.map(byId).filter(Boolean).map((p, i) => `
      <button class="float-card f${i + 1}" data-open="${p.id}" tabindex="-1">
        <span class="fc-media">${img(p)}<span class="fc-play">${ICON.play}</span></span>
        <span class="fc-label">${esc(p.brand || catLabel(p))}</span>
      </button>`).join("");
  }

  /* ---------- filters ---------- */
  function renderFilters() {
    $("[data-filters]").innerHTML = D.categories.map((c) => {
      const n = c.key === "all" ? D.projects.length : D.projects.filter((p) => p.category === c.key).length;
      return `<button class="chip" role="tab" data-filter="${c.key}" aria-selected="${c.key === filter}">${c.key !== "all" ? `<i style="background:${catColor[c.key]}"></i>` : ""}${c.label}<small>${n}</small></button>`;
    }).join("");
  }

  /* ---------- grid (light; and phones in both modes) ---------- */
  function renderGrid() {
    const list = visible(), more = $("[data-more]");
    more.hidden = list.length <= 6;
    more.classList.toggle("desk-hide", list.length <= 9);
    more.textContent = `Show all ${list.length} videos`;
    $("[data-grid]").classList.remove("expanded");
    $("[data-grid]").innerHTML = list.map((p) => `
      <button class="tile" data-open="${p.id}" aria-label="Play: ${esc(p.title)}">
        <span class="tile-media">
          ${img(p)}
          <span class="tag ${catKey(p)}">${esc(p.brand || catLabel(p))}</span>
          <span class="play-dot" aria-hidden="true">${ICON.play}</span>
          <span class="tile-foot"><span>${ICON.play}${p.duration}</span><span>${ICON.heart}${fmt(p.likes || 0)}</span></span>
          <span class="tile-over"><b>${esc(p.title)}</b><small>${p.duration} · ${ICON.heart}${fmt(p.likes || 0)}</small></span>
        </span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
      </button>`).join("");
  }

  /* ---------- player + rail (dark, desktop) ---------- */
  function renderRail() {
    const list = visible();
    if (current >= list.length) current = 0;
    $("[data-rail-list]").innerHTML = list.map((p, i) => `
      <button class="rail-item" role="option" data-pick="${i}" aria-selected="${i === current}">
        <span class="rail-thumb">${img(p)}<span>${p.duration}</span></span>
        <b>${esc(p.title)}</b><small>${esc(p.brand || catLabel(p))}</small>
      </button>`).join("");
    setStage(current, false);
  }
  function setStage(i, animate = true) {
    const list = visible();
    if (!list.length) return;
    current = (i + list.length) % list.length;
    const p = list[current];
    const media = $(".stage-media");
    const apply = () => {
      $(".stage-img").src = p.poster; $(".stage-bg").src = p.poster; $(".stage-img").alt = p.title;
      media.classList.toggle("vertical", p.ratio === "9:16" || p.ratio === "1:1");
      $(".stage-time").textContent = p.duration;
      const tag = $("[data-stage-tag]");
      tag.className = "tag " + catKey(p);
      tag.textContent = p.brand ? `${p.brand} · ${catLabel(p)}` : catLabel(p);
      $("[data-stage-title]").textContent = p.title;
      $("[data-stage-desc]").textContent = p.description;
      $("[data-stage-meta]").innerHTML = `<span><b>${fmt(p.likes || 0)}</b> likes</span><span>${new Date(p.date).toLocaleDateString(undefined, { month: "short", year: "numeric" })}</span>`;
      $("[data-stage-link]").href = p.url;
      $$("[data-stage-play]").forEach((b) => (b.dataset.open = p.id));
      media.classList.remove("swap");
    };
    if (animate) { media.classList.add("swap"); setTimeout(apply, 180); } else apply();
    $$(".rail-item").forEach((el, k) => el.setAttribute("aria-selected", k === current));
    const active = $$(".rail-item")[current];
    if (animate && active) active.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  /* ---------- case studies ---------- */
  function renderCases() {
    $("[data-cases]").innerHTML = D.caseStudies.map((c, ci) => {
      const vids = c.videos.map(byId).filter(Boolean);
      return `
      <article class="case case-${ci % 3}">
        <div class="case-stack stack-n${Math.min(vids.length, 3)}" aria-hidden="true">
          ${vids.slice(0, 3).map((p, k) => `<button class="stack-card s${k}" data-open="${p.id}" data-list="${c.videos.join(",")}" tabindex="-1">${img(p)}<span class="fc-play">${ICON.play}</span></button>`).join("")}
        </div>
        <div class="case-body">
          <div class="case-tags"><span class="tag ${vids[0] ? catKey(vids[0]) : "other"}">${esc(c.brand)} · ${esc(c.tag)}</span>${c.badge ? `<span class="badge">${esc(c.badge)}</span>` : ""}</div>
          <h3>${esc(c.title)}</h3>
          <p>${esc(c.line)}</p>
          <dl class="case-stats">${c.stats.map(([n, l]) => `<div><dt>${esc(n)}</dt><dd>${esc(l)}</dd></div>`).join("")}</dl>
          ${c.proof ? `<a class="proof" href="${c.proof.url}" target="_blank" rel="noopener">${ICON.quote}<span>“${esc(c.proof.quote)}”</span><small>${esc(c.proof.by)} replied</small></a>` : ""}
          <button class="btn btn-primary" data-open="${c.videos[0]}" data-list="${c.videos.join(",")}">${ICON.play}Watch the ${vids.length > 1 ? "series" : "video"}</button>
        </div>
      </article>`;
    }).join("");
  }

  /* ---------- services, skills, socials ---------- */
  function renderExtras() {
    const subject = (t) => encodeURIComponent(`Project enquiry: ${t}`);
    $("[data-packages]").innerHTML = D.packages.map((s, i) => `
      <li class="package${i === D.packages.length - 1 ? " custom" : ""}">
        <span class="pk-icon">${ICON[s.icon] || ICON.video}</span>
        <b>${esc(s.title)}</b><span class="pk-line">${esc(s.line)}</span>
        <a class="pk-link" href="mailto:${D.email}?subject=${subject(s.title)}">Book this →</a>
      </li>`).join("");
    $("[data-covers]").innerHTML = `<span>I cover</span>${D.covers.map((c) => `<em>${esc(c)}</em>`).join("")}`;
    $("[data-tools]").innerHTML = D.tools.map((t) => `<li><span class="tool-icon">${ICON[t.icon]}</span>${esc(t.name)}</li>`).join("");
    $("[data-skills]").innerHTML = D.skills.map((g) => `
      <div class="skill-group"><h3>${esc(g.group)}</h3><ul>${g.items.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>`).join("");
    const so = D.socials;
    const socials = [["x", "X", so.x], ["tiktok", "TikTok", so.tiktok], ["instagram", "Instagram", so.instagram]].filter((s) => s[2]);
    $$("[data-socials]").forEach((el) => (el.innerHTML = socials.map(([k, label, url]) => `<a class="social" href="${url}" target="_blank" rel="noopener" aria-label="${label}">${ICON[k]}<span>${label}</span></a>`).join("")));
    $("[data-year]").textContent = new Date().getFullYear();
  }

  /* ---------- modal player ---------- */
  const modal = $("[data-modal]"), box = $("[data-modal-box]");
  let mList = [], mIndex = 0, lastFocus = null;
  function openModal(id, listIds) {
    mList = listIds ? listIds.map(byId).filter(Boolean) : visible();
    if (!mList.find((p) => p.id === id)) mList = D.projects;
    mIndex = Math.max(0, mList.findIndex((p) => p.id === id));
    lastFocus = document.activeElement;
    showModal();
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    $("[data-modal-close]").focus();
  }
  function showModal() {
    mIndex = (mIndex + mList.length) % mList.length;
    const p = mList[mIndex];
    const dark = document.documentElement.dataset.theme === "dark";
    box.innerHTML = p.video
      ? `<video src="${p.video}" poster="${p.poster}" controls autoplay playsinline></video>`
      : `<iframe src="https://platform.twitter.com/embed/Tweet.html?id=${tweetId(p)}&dnt=true&theme=${dark ? "dark" : "light"}" title="${esc(p.title)}" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
    $("[data-modal-link]").href = p.url;
    $$("[data-modal-nav]").forEach((b) => (b.style.display = mList.length > 1 ? "" : "none"));
  }
  function closeModal() {
    modal.hidden = true; box.innerHTML = ""; document.body.style.overflow = "";
    lastFocus && lastFocus.focus();
  }

  /* ---------- theme ---------- */
  function initTheme() {
    const root = document.documentElement, btn = $("[data-theme-toggle]");
    const meta = $('meta[name="theme-color"]');
    const sync = () => {
      const dark = root.dataset.theme === "dark";
      btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      meta.content = dark ? "#07061A" : "#FAF7F0";
    };
    sync();
    btn.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      const swap = () => { root.dataset.theme = next; sync(); };
      if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) document.startViewTransition(swap);
      else swap();
      try { localStorage.setItem("dolapo-theme", next); } catch (e) {}
    });
    matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", (e) => {
      let saved = null; try { saved = localStorage.getItem("dolapo-theme"); } catch (_) {}
      if (!saved) { root.dataset.theme = e.matches ? "dark" : "light"; sync(); }
    });
  }

  /* ---------- events ---------- */
  function toast(msg) {
    const t = $("[data-toast]"); t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2200);
  }
  document.addEventListener("click", async (e) => {
    const f = e.target.closest("[data-filter]");
    if (f) { filter = f.dataset.filter; current = 0; renderFilters(); renderGrid(); renderRail(); return; }
    const pick = e.target.closest("[data-pick]");
    if (pick) { setStage(+pick.dataset.pick); return; }
    const open = e.target.closest("[data-open]");
    if (open) { openModal(open.dataset.open, open.dataset.list ? open.dataset.list.split(",") : null); return; }
    if (e.target.closest("[data-more]")) { $("[data-grid]").classList.add("expanded"); e.target.hidden = true; return; }
    const r = e.target.closest("[data-rail]");
    if (r) { $("[data-rail-list]").scrollBy({ left: +r.dataset.rail * 460, behavior: "smooth" }); return; }
    if (e.target.closest("[data-modal-close]") || e.target === modal) { closeModal(); return; }
    const mn = e.target.closest("[data-modal-nav]");
    if (mn) { mIndex += +mn.dataset.modalNav; showModal(); return; }
    const c = e.target.closest("[data-copy]");
    if (c) { try { await navigator.clipboard.writeText(c.dataset.copy); toast("Email copied"); } catch { toast(c.dataset.copy); } }
  });
  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") { mIndex++; showModal(); }
    if (e.key === "ArrowLeft") { mIndex--; showModal(); }
  });
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  renderHero(); renderFilters(); renderGrid(); renderRail(); renderCases(); renderExtras(); initTheme();
})();
