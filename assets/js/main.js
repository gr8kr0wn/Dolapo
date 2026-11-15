/* Dolapo — portfolio script.
   Renders the work from data/projects.js into both layouts:
   light = profile grid, dark = player + playlist. */
(function () {
  const D = window.PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s = "") => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const catKey = (p) => p.category || "other";
  const catLabel = (p) => (D.categories.find((c) => c.key === p.category) || { label: "Video" }).label;
  const tweetId = (p) => p.url.split("/").pop().split("?")[0];
  const fmt = (n) => (n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "K" : String(n));
  const ICON = {
    heart: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.3 3 4.5 6.7 4.5c2 0 3.4 1.1 4.3 2.4.9-1.3 2.3-2.4 4.3-2.4 3.7 0 5.8 3.8 4.3 7.3C19.5 16.4 12 21 12 21z"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>',
    photo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="5" width="14" height="14" rx="3"/><path d="M16.5 10l5-3v10l-5-3z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M11 18h2"/></svg>',
    cube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.5l8.5 4.8v9.4L12 21.5l-8.5-4.8V7.3z"/><path d="M3.5 7.3L12 12l8.5-4.7M12 12v9.5"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.8 3h3.1l-6.8 7.8 8 10.2h-6.3l-4.9-6.4-5.6 6.4H2.2l7.3-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg>',
  };
  const catColor = { fintech: "var(--fintech)", crypto: "var(--crypto)", ai: "var(--ai)", other: "var(--other)" };

  let filter = "all";
  let current = 0;
  const visible = () => D.projects.filter((p) => filter === "all" || p.category === filter);

  /* ---------- hero ---------- */
  function renderHero() {
    const likes = D.projects.reduce((s, p) => s + (p.likes || 0), 0);
    const videos = D.projects.filter((p) => p.format === "video").length;
    $("[data-stats]").innerHTML = `
      <li><b>${videos}</b>videos</li>
      <li><b>${fmt(likes)}+</b>likes on X</li>
      ${D.categories.filter((c) => c.key !== "all").map((c) => `<li class="cat"><i style="background:${catColor[c.key]}"></i>${c.label}</li>`).join("")}`;
    const picks = D.projects.filter((p) => p.format === "video").slice(0, 3);
    $("[data-float]").innerHTML = picks.map((p, i) => `
      <div class="float-card f${i + 1}"><img src="${p.poster}" alt="" referrerpolicy="no-referrer" loading="lazy"><span>${esc(p.brand || catLabel(p))}</span></div>`).join("");
  }

  /* ---------- filters ---------- */
  function renderFilters() {
    $("[data-filters]").innerHTML = D.categories.map((c) => {
      const n = c.key === "all" ? D.projects.length : D.projects.filter((p) => p.category === c.key).length;
      return `<button class="chip" role="tab" data-filter="${c.key}" aria-selected="${c.key === filter}">${c.key !== "all" ? `<i style="background:${catColor[c.key]}"></i>` : ""}${c.label}<small>${n}</small></button>`;
    }).join("");
  }

  /* ---------- light: grid ---------- */
  function renderGrid() {
    $("[data-grid]").innerHTML = visible().map((p) => `
      <button class="tile" data-open="${p.id}" aria-label="${p.format === "video" ? "Play" : "Open"}: ${esc(p.title)}">
        <span class="tile-media">
          <img src="${p.poster}" alt="" loading="lazy" referrerpolicy="no-referrer">
          <span class="tag ${catKey(p)}">${esc(p.brand || catLabel(p))}</span>
          <span class="play-dot" aria-hidden="true">${p.format === "video" ? ICON.play : ICON.photo}</span>
          <span class="tile-foot"><span>${p.duration ? ICON.play + p.duration : ICON.photo + "Post"}</span><span>${ICON.heart}${fmt(p.likes || 0)}</span></span>
        </span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
      </button>`).join("");
  }

  /* ---------- dark: player + rail ---------- */
  function renderRail() {
    const list = visible();
    if (current >= list.length) current = 0;
    $("[data-rail-list]").innerHTML = list.map((p, i) => `
      <button class="rail-item" role="option" data-pick="${i}" aria-selected="${i === current}">
        <span class="rail-thumb"><img src="${p.poster}" alt="" loading="lazy" referrerpolicy="no-referrer">${p.duration ? `<span>${p.duration}</span>` : ""}</span>
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
      $(".stage-img").src = p.poster;
      $(".stage-bg").src = p.poster;
      $(".stage-img").alt = p.title;
      media.classList.toggle("vertical", p.ratio === "9:16");
      $(".stage-time").textContent = p.duration || "Post";
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

  /* ---------- services + strengths ---------- */
  function renderExtras() {
    $("[data-services]").innerHTML = D.services.map((s) => `
      <li class="service"><span class="service-icon">${ICON[s.icon] || ICON.video}</span><span class="service-text"><b>${esc(s.title)}</b><span class="service-line">${esc(s.line)}</span></span></li>`).join("");
    $("[data-strengths]").innerHTML = D.strengths.map((s) => `<li>${esc(s)}</li>`).join("");
    $("[data-year]").textContent = new Date().getFullYear();
  }

  /* ---------- modal player ---------- */
  const modal = $("[data-modal]"), box = $("[data-modal-box]");
  let modalIndex = 0, lastFocus = null;
  function openModal(id) {
    const list = visible();
    modalIndex = Math.max(0, list.findIndex((p) => p.id === id));
    lastFocus = document.activeElement;
    showModal();
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    $("[data-modal-close]").focus();
  }
  function showModal() {
    const list = visible();
    const p = list[(modalIndex + list.length) % list.length];
    const dark = document.documentElement.dataset.theme === "dark";
    box.innerHTML = p.video
      ? `<video src="${p.video}" poster="${p.poster}" controls autoplay playsinline></video>`
      : `<iframe src="https://platform.twitter.com/embed/Tweet.html?id=${tweetId(p)}&dnt=true&theme=${dark ? "dark" : "light"}" title="${esc(p.title)}" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
    $("[data-modal-link]").href = p.url;
    $$("[data-modal-nav]").forEach((b) => (b.style.display = list.length > 1 ? "" : "none"));
  }
  function closeModal() {
    modal.hidden = true; box.innerHTML = ""; document.body.style.overflow = "";
    lastFocus && lastFocus.focus();
  }

  /* ---------- theme ---------- */
  function initTheme() {
    const root = document.documentElement, btn = $("[data-theme-toggle]");
    const label = () => btn.setAttribute("aria-label", root.dataset.theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    label();
    btn.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      const swap = () => { root.dataset.theme = next; label(); };
      if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) document.startViewTransition(swap);
      else swap();
      try { localStorage.setItem("dolapo-theme", next); } catch (e) {}
    });
    matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", (e) => {
      let saved = null; try { saved = localStorage.getItem("dolapo-theme"); } catch (_) {}
      if (!saved) { root.dataset.theme = e.matches ? "dark" : "light"; label(); }
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
    if (open) { openModal(open.dataset.open); return; }
    const r = e.target.closest("[data-rail]");
    if (r) { $("[data-rail-list]").scrollBy({ left: +r.dataset.rail * 460, behavior: "smooth" }); return; }
    if (e.target.closest("[data-modal-close]") || e.target === modal) { closeModal(); return; }
    const mn = e.target.closest("[data-modal-nav]");
    if (mn) { modalIndex += +mn.dataset.modalNav; showModal(); return; }
    const c = e.target.closest("[data-copy]");
    if (c) { try { await navigator.clipboard.writeText(c.dataset.copy); toast("Email copied"); } catch { toast(c.dataset.copy); } }
  });
  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") { modalIndex++; showModal(); }
    if (e.key === "ArrowLeft") { modalIndex--; showModal(); }
  });
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  renderHero(); renderFilters(); renderGrid(); renderRail(); renderExtras(); initTheme();
})();
