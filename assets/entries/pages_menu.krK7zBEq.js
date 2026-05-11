import { j as e, R as c, a as s, i as a, P as m, b as p, c as u } from "../chunks/chunk-BR75Kv1E.js"; import { A as n } from "../chunks/chunk-6IiCVm80.js";/* empty css                      */const d = "Matememo", h = [{ id: "QI1Li2-PHv8kWkJ93d6Ac" }, { id: "EmHN_i34DdQr_i2NnaQuw", maxWidth: 991 }, { id: "BgODaMwK5XOWtXjbL1eWG", maxWidth: 767 }, { id: "lfURoLM0DiPzfO5ngKKou", maxWidth: 479 }], b = "favicon-512_QmLTHyUiosXPIubehChgP.png", g = [], f = [], w = i => e.jsxs("body", {
  className: "w-element w-element-77", children: [e.jsx("div", { className: "w-element w-element-17", children: e.jsx("a", { href: "/", className: "w-element w-element-16", children: "Atgal" }) }), e.jsx("div", {
    className: "w-element w-div", children: e.jsx(n, {
      code: `<style>
  #selection-widget button {
    padding: 12px 18px;
    margin: 8px;
    border: none;
    border-radius: 10px;
    background: #e5e7eb;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.2s ease;
  }

  #selection-widget button:hover {
    background: #d1d5db;
  }

  #selection-widget button.active {
    background: #22668d;
    color: white;
  }

  #selection-widget .step {
    margin-bottom: 24px;
  }
</style>

<div id="selection-widget" style="max-width: 500px; margin: 0 auto; font-family: sans-serif; background: #ffffff; border-radius: 10px; padding: 10px; border: 1px solid #dadada">
  <div class="step" id="step1">
    <h3 style="margin: 0 10px">Pasirinkite klasę</h3>
    <button onclick="selectClass('5-6', this)">5–6 kl.</button>
    <button onclick="selectClass('7-8', this)">7–8 kl.</button>
  </div>

  <div class="step" id="step2" style="display:none;">
    <h3 style="margin: 0 10px">Pasirinkite laikotarpį</h3>
    <button onclick="selectPeriod('first-half', this)">Liepos pirmos dvi savaitės</button>
    <button onclick="selectPeriod('second-half', this)">Liepos antros dvi savaitės</button>
  </div>

  <div class="step" id="step3" style="display:none;">
    <h3 style="margin: 0 10px">Pasirinkite laiką</h3>
    <button onclick="goToPage('11-13', this)">11:00–13:00</button>
    <button onclick="goToPage('13-15', this)">13:00–15:00</button>
  </div>
</div>

<script>
  let selectedClass = '';
  let selectedPeriod = '';

  function setActiveButton(containerId, clickedButton) {
    const buttons = document.querySelectorAll(\`#\${containerId} button\`);
    buttons.forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');
  }

  function selectClass(classValue, button) {
    selectedClass = classValue;
    setActiveButton('step1', button);

    document.getElementById('step2').style.display = 'block';
    document.getElementById('step3').style.display = 'none';
  }

  function selectPeriod(periodValue, button) {
    selectedPeriod = periodValue;
    setActiveButton('step2', button);

    document.getElementById('step3').style.display = 'block';
  }

  function goToPage(timeValue, button) {
    setActiveButton('step3', button);

    const links = {
      '5-6': {
        'first-half': {
          '11-13': 'https://matememo.netlify.app/Calender26L1D1M',
          '13-15': 'https://matememo.netlify.app/Calender26L1D2M'
        },
        'second-half': {
          '11-13': 'https://matememo.netlify.app/Calender26L2D1M',
          '13-15': 'https://matememo.netlify.app/Calender26L2D2M'
        }
      },
      '7-8': {
        'first-half': {
          '11-13': 'https://matememo.netlify.app/Calender26L1D1D',
          '13-15': 'https://matememo.netlify.app/Calender26L1D2D'
        },
        'second-half': {
          '11-13': 'https://matememo.netlify.app/Calender26L2D1D',
          '13-15': 'https://matememo.netlify.app/Calender26L2D2D'
        }
      }
    };

    const url = links[selectedClass][selectedPeriod][timeValue];

    if (url) {
      window.location.href = url;
    }
  }
<\/script>`, className: "w-html-embed w-html-embed-1"
    })
  }), e.jsx("div", { className: "w-element w-element-78", children: " 2026 liepa, 2 savaitės, 6 online užsiėmimai mokiniui - 150 Eur" }), e.jsx("div", {
    className: "w-element", children: e.jsx(n, {
      code: `<div class="grade-switcher">
  <!-- IMAGE 1 -->
  <div class="slide active" id="slide1">
    <img src="/assets/5-6-kl-steam-info-752-1012_CJrlbQoxKxv_vVsloOs7z.png" alt="5-6 klasė">

    <button class="switch-btn right" onclick="showSlide(2)">
      7 – 8 kl →
    </button>
  </div>

  <!-- IMAGE 2 -->
  <div class="slide" id="slide2">
    <img src="/assets/7-8-kl-steam-info-752-1012_P8dQPuulZ6F1kEdfLa_GW.png" alt="7-8 klasė">

    <button class="switch-btn left" onclick="showSlide(1)">
      ← 5 – 6 kl
    </button>
  </div>
</div>

<style>
.grade-switcher {
  position: relative;
  width: 100%;
  max-width: 752px;
  margin: auto;
}

.slide {
  display: none;
  position: relative;
}

.slide.active {
  display: block;
}

.slide img {
  width: 100%;
  display: block;
  border-radius: 20px;
}

/* BUTTON */
.switch-btn {
  position: absolute;
  top: 20px;
  
  background: rgba(34, 102, 141, 0.92);
  color: #FFFADD;

  border: none;
  padding: 8px 16px;

  border-radius: 999px;

  font-size: 14px;
  font-weight: 400;
  font-family: Arial, Roboto, sans-serif;

  cursor: pointer;

  transition: all 0.25s ease;

  backdrop-filter: blur(6px);

  z-index: 10;
}

.switch-btn:hover {
  transform: scale(1.05);
}

.switch-btn.right {
  right: 20px;
}

.switch-btn.left {
  left: 20px;
}

/* MOBILE */
@media (max-width: 768px) {
  .switch-btn {
    font-size: 15px;
    padding: 10px 16px;
    top: 14px;
  }

  .switch-btn.right {
    right: 14px;
  }

  .switch-btn.left {
    left: 14px;
  }
}
</style>

<script>
function showSlide(slideNumber) {
  const slides = document.querySelectorAll('.slide');

  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  document
    .getElementById('slide' + slideNumber)
    .classList.add('active');
}
<\/script>`, className: "w-html-embed"
    })
  }), e.jsx("div", { className: "w-element w-element-80", children: "Matememo, 2026" })]
}), x = ({ data: i }) => { const { system: t, resources: r, url: o, pageMeta: l } = i; return e.jsxs(c.Provider, { value: { imageLoader: a, assetBaseUrl: s, resources: r, breakpoints: h, onError: console.error }, children: [e.jsx(w, { system: t }, o), e.jsx(m, { url: o, pageMeta: l, siteName: d, imageLoader: a, assetBaseUrl: s }), e.jsx(p, { children: l.title })] }) }, v = Object.freeze(Object.defineProperty({ __proto__: null, default: x }, Symbol.toStringTag, { value: "Module" })), k = ({ }) => { const i = { "@context": "https://schema.org", "@type": "WebSite", name: d }; return e.jsxs(e.Fragment, { children: [e.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(i, null, 2) } }), e.jsx("link", { rel: "icon", href: a({ src: `${s}${b}` }) }), g.map(t => e.jsx("link", { rel: "preload", href: `${s}${t}`, as: "font", crossOrigin: "anonymous" }, t)), f.map(t => e.jsx("link", { rel: "preload", href: `${s}${t}`, as: "image" }, t))] }) }, y = Object.freeze(Object.defineProperty({ __proto__: null, Head: k }, Symbol.toStringTag, { value: "Module" })), S = { isClientRuntimeLoaded: { type: "computed", definedAtData: null, valueSerialized: { type: "js-serialized", value: !0 } }, onBeforeRenderEnv: { type: "computed", definedAtData: null, valueSerialized: { type: "js-serialized", value: null } }, dataEnv: { type: "computed", definedAtData: null, valueSerialized: { type: "js-serialized", value: { server: !0 } } }, onRenderClient: { type: "standard", definedAtData: { filePathToShowToUser: "/renderer/+onRenderClient.tsx", fileExportPathToShowToUser: [] }, valueSerialized: { type: "plus-file", exportValues: u } }, Page: { type: "standard", definedAtData: { filePathToShowToUser: "/pages/menu/+Page.tsx", fileExportPathToShowToUser: [] }, valueSerialized: { type: "plus-file", exportValues: v } }, Head: { type: "standard", definedAtData: { filePathToShowToUser: "/pages/menu/+Head.tsx", fileExportPathToShowToUser: [] }, valueSerialized: { type: "plus-file", exportValues: y } } }; export { S as configValuesSerialized };
