// 圖片路徑集中設定：本地預覽預設讀取 ../素材/；部署到 Google Sites 內嵌時可替換為公開圖床/Google Drive 直連網址
const ASSETS = {
  logo: "./assets/logo.png",
  heroPair: "./assets/hero-pair.png",
  giftBox: "./assets/gift-box.png",
  singlePot: "./assets/single-pot.png",
  sizeSpec: "./assets/size-spec.png",
  threeViews: "./assets/three-views.png",
  collarSix: "./assets/collar-six.png",
  appUi: "./assets/app-ui.png"
};

const COLLAR_COLORS = [
  { id: "sage", name: "鼠尾草綠", hex: "#8FAE9A" },
  { id: "cream", name: "奶油米白", hex: "#F7F3EC" },
  { id: "apricot", name: "奶茶杏", hex: "#D8B89C" },
  { id: "pink", name: "柔霧粉", hex: "#E8D4D8" },
  { id: "mint", name: "薄荷藍", hex: "#A9D8D0" },
  { id: "brown", name: "深灰棕", hex: "#5E5751" }
];

const PLANTS = [
  { id: "01", name: "玉露", category: "succulent", catLabel: "多肉／迷你觀葉", desc: "晶亮透明葉窗，桌面小巧療癒", light: "明亮散射光", water: "土乾再澆" },
  { id: "02", name: "十二之卷", category: "succulent", catLabel: "多肉／迷你觀葉", desc: "條紋葉片，造型俐落耐看", light: "明亮散射光", water: "少水耐旱" },
  { id: "03", name: "虹之玉", category: "succulent", catLabel: "多肉／迷你觀葉", desc: "飽滿小葉，光照足時色彩鮮明", light: "充足日照", water: "土乾再澆" },
  { id: "04", name: "乙女心", category: "succulent", catLabel: "多肉／迷你觀葉", desc: "圓潤葉尖，呈現柔和粉嫩感", light: "充足日照", water: "土乾再澆" },
  { id: "05", name: "桃太郎", category: "succulent", catLabel: "多肉／迷你觀葉", desc: "蓮座型葉片，層次立體好辨識", light: "充足日照", water: "土乾再澆" },
  { id: "06", name: "靜夜", category: "succulent", catLabel: "多肉／迷你觀葉", desc: "迷你蓮座，清新精緻適合桌面", light: "明亮散射光", water: "土乾再澆" },
  { id: "07", name: "圓葉椒草", category: "succulent", catLabel: "多肉／迷你觀葉", desc: "圓亮厚葉，簡約耐看易照顧", light: "明亮散射光", water: "微乾再澆" },
  { id: "08", name: "皺葉椒草", category: "succulent", catLabel: "多肉／迷你觀葉", desc: "葉面紋理豐富，適合小型內盆", light: "明亮散射光", water: "微乾再澆" },
  { id: "09", name: "西瓜皮椒草", category: "succulent", catLabel: "多肉／迷你觀葉", desc: "西瓜條紋葉片，視覺辨識度高", light: "明亮散射光", water: "保持微潤" },
  { id: "10", name: "白網紋草", category: "succulent", catLabel: "多肉／迷你觀葉", desc: "白色葉脈交織，精巧清爽", light: "散射光", water: "喜濕潤" },
  { id: "11", name: "粉紅網紋草", category: "succulent", catLabel: "多肉／迷你觀葉", desc: "粉紅葉脈，甜美柔和呼應品牌色", light: "散射光", water: "喜濕潤" },
  { id: "12", name: "斑葉冷水花", category: "succulent", catLabel: "多肉／迷你觀葉", desc: "銀白葉紋，自然清新有朝氣", light: "明亮散射光", water: "微乾再澆" },

  { id: "13", name: "黃金葛", category: "vine-herb", catLabel: "垂吊藤蔓／香草", desc: "心形綠葉，容易營造日常陪伴感", light: "散射光即可", water: "微乾再澆" },
  { id: "14", name: "銀斑葛", category: "vine-herb", catLabel: "垂吊藤蔓／香草", desc: "銀色斑紋葉片，適合明亮散射光", light: "明亮散射光", water: "微乾再澆" },
  { id: "15", name: "常春藤", category: "vine-herb", catLabel: "垂吊藤蔓／香草", desc: "優雅藤蔓生長，需定期適度修剪", light: "明亮散射光", water: "微乾再澆" },
  { id: "16", name: "愛之蔓", category: "vine-herb", catLabel: "垂吊藤蔓／香草", desc: "小愛心葉片垂墜，象徵遠距思念", light: "明亮散射光", water: "少水耐旱" },
  { id: "17", name: "串錢藤", category: "vine-herb", catLabel: "垂吊藤蔓／香草", desc: "串串圓葉垂落，造型可愛有趣", light: "明亮散射光", water: "微乾再澆" },
  { id: "18", name: "小葉薜荔", category: "vine-herb", catLabel: "垂吊藤蔓／香草", desc: "細小葉片密生，適合桌面造型修剪", light: "散射光", water: "喜微潤" },
  { id: "19", name: "薄荷", category: "vine-herb", catLabel: "垂吊藤蔓／香草", desc: "清新葉香，適合放置明亮通風處", light: "明亮日照", water: "喜濕潤" },
  { id: "20", name: "甜羅勒", category: "vine-herb", catLabel: "垂吊藤蔓／香草", desc: "淡雅綠葉香氣，需較充足日照", light: "充足日照", water: "喜濕潤" },
  { id: "21", name: "迷迭香", category: "vine-herb", catLabel: "垂吊藤蔓／香草", desc: "細針狀香葉，喜歡通風與日照", light: "充足日照", water: "微乾再澆" },
  { id: "22", name: "百里香", category: "vine-herb", catLabel: "垂吊藤蔓／香草", desc: "葉片細緻，適合日照良好窗邊", light: "充足日照", water: "微乾再澆" },
  { id: "23", name: "檸檬香蜂草", category: "vine-herb", catLabel: "垂吊藤蔓／香草", desc: "清爽檸檬葉香，宜常修剪促芽", light: "明亮日照", water: "喜濕潤" },
  { id: "24", name: "奧勒岡", category: "vine-herb", catLabel: "垂吊藤蔓／香草", desc: "柔和香草氣息，需充足光線", light: "充足日照", water: "微乾再澆" },

  { id: "25", name: "非洲菫", category: "flower-special", catLabel: "開花／特色小植栽", desc: "花色溫柔典雅，偏好明亮散射光", light: "明亮散射光", water: "底部給水佳" },
  { id: "26", name: "長壽花", category: "flower-special", catLabel: "開花／特色小植栽", desc: "花期鮮明持久，需明亮光照", light: "明亮日照", water: "土乾再澆" },
  { id: "27", name: "四季海棠", category: "flower-special", catLabel: "開花／特色小植栽", desc: "花朵小巧討喜，需通風與照光", light: "明亮散射光", water: "微乾再澆" },
  { id: "28", name: "迷你玫瑰", category: "flower-special", catLabel: "開花／特色小植栽", desc: "精緻小花朵，需充足日照與通風", light: "充足日照", water: "喜微潤" },
  { id: "29", name: "迷你仙客來", category: "flower-special", catLabel: "開花／特色小植栽", desc: "特殊花形可愛，需留意季節溫度", light: "涼爽散射光", water: "保持微潤" },
  { id: "30", name: "小菊盆栽", category: "flower-special", catLabel: "開花／特色小植栽", desc: "季節性豐富花色，適合節慶贈禮", light: "充足日照", water: "喜微潤" },
  { id: "31", name: "矮生虎尾蘭", category: "flower-special", catLabel: "開花／特色小植栽", desc: "直立俐落葉型，好搭又耐陰耐旱", light: "散射光即可", water: "少水耐旱" },
  { id: "32", name: "鏡面草", category: "flower-special", catLabel: "開花／特色小植栽", desc: "圓片葉型像小鏡子，造型富趣味", light: "明亮散射光", water: "微乾再澆" },
  { id: "33", name: "圓幣草", category: "flower-special", catLabel: "開花／特色小植栽", desc: "圓圓綠葉輕快討喜，增添桌面朝氣", light: "明亮日照", water: "喜濕潤" },
  { id: "34", name: "碰碰香", category: "flower-special", catLabel: "開花／特色小植栽", desc: "輕觸葉片散發淡淡香氣，親切可愛", light: "明亮日照", water: "土乾再澆" },
  { id: "35", name: "鈕扣蕨", category: "flower-special", catLabel: "開花／特色小植栽", desc: "細緻羽葉圓潤小巧，喜保濕環境", light: "散射光", water: "喜濕潤" },
  { id: "36", name: "虎耳草", category: "flower-special", catLabel: "開花／特色小植栽", desc: "斑紋葉片自然雅致，適合桌面賞玩", light: "散射光", water: "保持微潤" }
];

const state = {
  collarA: "sage",
  collarB: "pink",
  plantFilter: "all",
  plantQuery: "",
  cart: []
};

function bindAssets() {
  document.querySelectorAll("[data-asset]").forEach((el) => {
    const key = el.getAttribute("data-asset");
    if (ASSETS[key]) el.src = ASSETS[key];
  });
}

function setupGallery() {
  const mainImg = document.getElementById("galleryMainImg");
  const thumbs = document.querySelectorAll(".thumb-btn");
  thumbs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const assetKey = btn.getAttribute("data-gallery-asset");
      if (ASSETS[assetKey]) {
        mainImg.src = ASSETS[assetKey];
        mainImg.alt = btn.getAttribute("data-alt") || "植在 TwoGather 商品圖片";
      }
      thumbs.forEach((t) => t.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

function renderCollarSelectors() {
  const containerA = document.getElementById("collarSwatchesA");
  const containerB = document.getElementById("collarSwatchesB");
  const previewText = document.getElementById("collarPairSummary");

  function buildSwatches(container, targetKey) {
    container.innerHTML = "";
    COLLAR_COLORS.forEach((c) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `swatch-btn ${state[targetKey] === c.id ? "active" : ""}`;
      btn.innerHTML = `<span class="swatch-dot" style="background:${c.hex}"></span><span>${c.name}</span>`;
      btn.addEventListener("click", () => {
        state[targetKey] = c.id;
        renderCollarSelectors();
      });
      container.appendChild(btn);
    });
  }

  buildSwatches(containerA, "collarA");
  buildSwatches(containerB, "collarB");

  const cA = COLLAR_COLORS.find((c) => c.id === state.collarA);
  const cB = COLLAR_COLORS.find((c) => c.id === state.collarB);
  previewText.textContent = `搭配預覽：A 盆「${cA.name}」＋ B 盆「${cB.name}」（白色原機一盒兩入，領帶為加價選購配件）`;
}

function renderPlants() {
  const grid = document.getElementById("plantsGrid");
  const countEl = document.getElementById("plantResultCount");
  const q = state.plantQuery.trim().toLowerCase();

  const filtered = PLANTS.filter((p) => {
    const matchCat = state.plantFilter === "all" || p.category === state.plantFilter;
    const matchQ =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.catLabel.toLowerCase().includes(q) ||
      p.id.includes(q);
    return matchCat && matchQ;
  });

  countEl.textContent = `顯示 ${filtered.length} / ${PLANTS.length} 種植栽`;
  grid.innerHTML = "";

  if (!filtered.length) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--brown-light);">找不到符合「${state.plantQuery}」的植栽，試試看其他關鍵字。</p>`;
    return;
  }

  filtered.forEach((p) => {
    const card = document.createElement("article");
    card.className = "plant-card";
    card.innerHTML = `
      <div>
        <div class="plant-top">
          <span class="plant-num">#${p.id}</span>
          <span class="plant-cat">${p.catLabel}</span>
        </div>
        <h4>${p.name}</h4>
        <p class="plant-desc">${p.desc}</p>
      </div>
      <div>
        <div class="plant-care">
          <span class="care-chip">☀ ${p.light}</span>
          <span class="care-chip">💧 ${p.water}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function setupPlantFilters() {
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.plantFilter = tab.getAttribute("data-filter");
      document.querySelectorAll(".filter-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderPlants();
    });
  });

  const searchInput = document.getElementById("plantSearchInput");
  searchInput.addEventListener("input", (e) => {
    state.plantQuery = e.target.value;
    renderPlants();
  });
}

function setupMarqueeDemo() {
  const input = document.getElementById("marqueeInput");
  const btn = document.getElementById("marqueeSendBtn");
  const screen = document.getElementById("potScreenText");

  const updateMessage = () => {
    const val = input.value.trim().slice(0, 10);
    screen.textContent = val || "你在哪？";
  };

  btn.addEventListener("click", updateMessage);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateMessage();
    }
  });
}

function setupFAQ() {
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      item.classList.toggle("open");
    });
  });
}

function updateCartUI() {
  const badge = document.getElementById("cartBadge");
  const list = document.getElementById("cartItemsList");
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = totalCount;

  if (!state.cart.length) {
    list.innerHTML = `<p style="color:var(--brown-light);font-size:0.92rem;">目前清單是空的，可以從商品介紹區加入「雙人共生禮盒」與領帶配件組合。</p>`;
    return;
  }

  list.innerHTML = "";
  state.cart.forEach((item, idx) => {
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div>
        <strong>${item.title}</strong>
        <div style="font-size:0.84rem;color:var(--brown-light);margin-top:4px;">${item.detail}</div>
        <div style="font-size:0.82rem;color:var(--sage-deep);margin-top:4px;">數量：${item.qty}（上市售價待公告）</div>
      </div>
      <button type="button" class="icon-btn" style="padding:4px 10px;height:fit-content;" data-remove="${idx}">移除</button>
    `;
    list.appendChild(row);
  });

  list.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-remove"));
      state.cart.splice(idx, 1);
      updateCartUI();
    });
  });
}

function setupCartDrawer() {
  const backdrop = document.getElementById("drawerBackdrop");
  const drawer = document.getElementById("cartDrawer");
  const openBtns = [document.getElementById("openCartBtn"), document.getElementById("navOrderBtn")];
  const closeBtn = document.getElementById("closeCartBtn");
  const addBundleBtn = document.getElementById("addGiftBoxBtn");
  const addCollarsBtn = document.getElementById("addWithCollarsBtn");
  const copySummaryBtn = document.getElementById("copyOrderSummaryBtn");
  const copyFeedback = document.getElementById("copyOrderFeedback");

  const openDrawer = () => {
    backdrop.classList.add("open");
    drawer.classList.add("open");
  };

  const closeDrawer = () => {
    backdrop.classList.remove("open");
    drawer.classList.remove("open");
  };

  openBtns.forEach((b) => b && b.addEventListener("click", openDrawer));
  closeBtn.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);

  addBundleBtn.addEventListener("click", () => {
    state.cart.push({
      title: "植在 TwoGather 雙人禮盒（一盒兩入）",
      detail: "白色原機 × 2、傳輸線 × 2、快速入門指南、實體植栽槽組",
      qty: 1
    });
    updateCartUI();
    openDrawer();
  });

  addCollarsBtn.addEventListener("click", () => {
    const cA = COLLAR_COLORS.find((c) => c.id === state.collarA);
    const cB = COLLAR_COLORS.find((c) => c.id === state.collarB);
    state.cart.push({
      title: "雙人禮盒＋加購雙色領帶組",
      detail: `白色原機 × 2 ＋ 領帶配件（${cA.name} / ${cB.name}）`,
      qty: 1
    });
    updateCartUI();
    openDrawer();
  });

  copySummaryBtn.addEventListener("click", async () => {
    if (!state.cart.length) {
      copyFeedback.textContent = "請先加入商品組合再複製預購意向清單。";
      return;
    }
    const text = state.cart
      .map((item, i) => `${i + 1}. ${item.title} × ${item.qty}\n   內容：${item.detail}`)
      .join("\n");
    try {
      await navigator.clipboard.writeText(`【植在 TwoGather 預購意向清單】\n${text}`);
      copyFeedback.textContent = "已複製清單內容，可貼到官方預購表單或私訊客服！";
    } catch {
      copyFeedback.textContent = "無法自動存取剪貼簿，請手動記錄以上組合。";
    }
  });
}

function setupMobileNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    links.classList.toggle("mobile-open");
  });
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => links.classList.remove("mobile-open"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindAssets();
  setupGallery();
  renderCollarSelectors();
  renderPlants();
  setupPlantFilters();
  setupMarqueeDemo();
  setupFAQ();
  setupCartDrawer();
  updateCartUI();
  setupMobileNav();
});


