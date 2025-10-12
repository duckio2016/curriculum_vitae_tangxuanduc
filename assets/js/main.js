// ====== Main JS for CV Website ======
// --- Section: Portfolio Modal ---
const validTabs = ["home", "about", "resume", "skills", "portfolio", "contact"];
const portfolioDetails = {
    truecommerce: {
        title: 'TRUECOMMERCE - DICENTRAL VIET NAM',
        images: [
            'assets/img/truecommerce_1.png',
            'assets/img/truecommerce_2.png',
            'assets/img/truecommerce_3.png'
        ],
        content: `<b>Cloud-based supply chain management solution</b><br>
        <ul>
            <li>Role: .NET Developer</li>
            <li>Technologies: ASP.NET, .NET Core, C#.NET, LINQ, SQL Server</li>
            <li>Tasks: EDI, automation, reporting, validation, migration, unit test, QA/QC support</li>
            <li>Team size: 14 (04/2022 - 07/2025)</li>
        </ul>`
    },
    wellsprings: {
        title: 'WELLSPRINGS - CMS',
        images: [
            'assets/img/wellsprings_1.jpg',
            'assets/img/wellsprings_2.jpg'
        ],
        content: `<b>School management system</b><br>
        <ul>
            <li>Role: Backend Developer</li>
            <li>Technologies: ASP.NET, C#.NET, LINQ, MS SQL</li>
            <li>Tasks: API, authentication, attendance, feedback, announcements, mobile integration</li>
            <li>Team size: 15 (04/2021 - 12/2021)</li>
        </ul>`
    },
    champ: {
        title: 'CHAMP SOLUTION - AEON',
        images: [
            'assets/img/champ_1.jpg',
            'assets/img/champ_2.jpg'
        ],
        content: `<b>HRM software for attendance, leave, benefits</b><br>
        <ul>
            <li>Role: Backend Developer</li>
            <li>Technologies: ASP.NET 4.7, C#.NET, LINQ, MS SQL, AngularJS</li>
            <li>Tasks: API, HRM modules, resignation, overtime, business trip</li>
            <li>Team size: 11 (11/2020 - 04/2021)</li>
        </ul>`
    },
    toppro: {
        title: 'TOP PRO SYSTEM',
        images: [
            'assets/img/toppro_1.jpg',
            'assets/img/toppro_2.jpg'
        ],
        content: `<b>Warehouse management system</b><br>
        <ul>
            <li>Role: Backend Developer</li>
            <li>Technologies: ASP.NET 4.7, C#.NET, LINQ, MS SQL</li>
            <li>Tasks: API, warehouse, release product, automation</li>
            <li>Team size: 6 (08/2020 - 11/2020)</li>
        </ul>`
    }
};

// --- Portfolio Modal Functions ---
const portfolioKeys = Object.keys(portfolioDetails);
let currentPortfolioIdx = 0;
function showPortfolioModalByKey(key) {
    const modal = document.getElementById('portfolioModal');
    const modalHeader = document.getElementById('portfolioModalHeader');
    const modalBody = document.getElementById('portfolioModalBody');
    const prevBtn = document.getElementById('portfolioPrev');
    const nextBtn = document.getElementById('portfolioNext');
    const idx = portfolioKeys.indexOf(key);
    currentPortfolioIdx = idx >= 0 ? idx : 0;
    // Header
    modalHeader.innerHTML = portfolioDetails[key]?.title || '';
    // Gallery
    let gallery = '';
    if (portfolioDetails[key] && portfolioDetails[key].images && portfolioDetails[key].images.length > 0) {
        gallery = `<div id='gallery' style='display:flex;gap:10px;align-items:center;justify-content:center;margin-bottom:14px;'>` +
            `<button id='prevImg' style='font-size:1.3rem;padding:4px 10px;border:none;background:#222;color:#00ffd5;border-radius:6px;cursor:pointer;'>&lt;</button>` +
            `<img id='galleryImg' src='${portfolioDetails[key].images[0]}' style='max-width:380px;max-height:240px;border-radius:10px;box-shadow:0 2px 12px #0003;background:#fff;' alt='project image'>` +
            `<button id='nextImg' style='font-size:1.3rem;padding:4px 10px;border:none;background:#222;color:#00ffd5;border-radius:6px;cursor:pointer;'>&gt;</button>` +
        `</div>`;
    }
    modalBody.innerHTML = gallery + (portfolioDetails[key]?.content || '<b>No detail available.</b>');
    // Gallery logic
    if (portfolioDetails[key] && portfolioDetails[key].images && portfolioDetails[key].images.length > 0) {
        let idxImg = 0;
        const imgs = portfolioDetails[key].images;
        const imgEl = () => document.getElementById('galleryImg');
        document.getElementById('prevImg').onclick = function(e){
            e.stopPropagation();
            idxImg = (idxImg - 1 + imgs.length) % imgs.length;
            imgEl().src = imgs[idxImg];
        };
        document.getElementById('nextImg').onclick = function(e){
            e.stopPropagation();
            idxImg = (idxImg + 1) % imgs.length;
            imgEl().src = imgs[idxImg];
        };
    }
    // Show/hide prev/next portfolio buttons
    prevBtn.style.display = (currentPortfolioIdx > 0) ? 'flex' : 'none';
    nextBtn.style.display = (currentPortfolioIdx < portfolioKeys.length - 1) ? 'flex' : 'none';
    modal.style.display = 'flex';
}

document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        const key = this.getAttribute('data-project');
        showPortfolioModalByKey(key);
    });
});
document.getElementById('portfolioPrev').onclick = function(e) {
    e.stopPropagation();
    if (currentPortfolioIdx > 0) {
        showPortfolioModalByKey(portfolioKeys[currentPortfolioIdx - 1]);
    }
};
document.getElementById('portfolioNext').onclick = function(e) {
    e.stopPropagation();
    if (currentPortfolioIdx < portfolioKeys.length - 1) {
        showPortfolioModalByKey(portfolioKeys[currentPortfolioIdx + 1]);
    }
};
document.querySelector('.portfolio-modal-close').onclick = function() {
    document.getElementById('portfolioModal').style.display = 'none';
};
window.onclick = function(event) {
    const modal = document.getElementById('portfolioModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// --- Tab switching + URL hash update ---
function showTab(tab) {
    if (!validTabs.includes(tab)) {
        window.location.hash = "home";
        tab = "home";
    }
    document.querySelectorAll(".tab-content").forEach(sec => sec.classList.remove("active"));
    document.getElementById(tab).classList.add("active");
    document.querySelectorAll(".nav-link").forEach(nav => nav.classList.remove("active"));
    const nav = document.querySelector(`.nav-link[data-target='${tab}']`);
    if (nav) nav.classList.add("active");
    // Run skill bars if Skills tab is active
    if (tab === "skills") {
        document.querySelectorAll(".skill-bar").forEach(bar => {
            const level = bar.getAttribute("data-level");
            bar.style.width = level;
        });
    }
}
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = this.getAttribute("data-target");
        window.location.hash = target;
        showTab(target);
    });
});
function handleHash() {
    let hash = window.location.hash.replace('#', '');
    if (!hash) hash = "home";
    showTab(hash);
}
window.addEventListener('hashchange', handleHash);
handleHash();

// --- Language toggle ---
const langSwitch = document.getElementById("langSwitch");
let currentLang = "EN";
langSwitch.addEventListener("click", () => {
    currentLang = currentLang === "EN" ? "VI" : "EN";
    langSwitch.innerText = currentLang;
    if (currentLang === "VI") {
        document.querySelector("#about h2").innerText = "Giới thiệu";
        document.querySelector("#resume h2").innerText = "Kinh nghiệm";
        document.querySelector("#skills h2").innerText = "Kỹ năng";
        document.querySelector("#portfolio h2").innerText = "Dự án";
        document.querySelector("#contact h2").innerText = "Liên hệ";
    } else {
        document.querySelector("#about h2").innerText = "About Me";
        document.querySelector("#resume h2").innerText = "Resume";
        document.querySelector("#skills h2").innerText = "Skills";
        document.querySelector("#portfolio h2").innerText = "Portfolio";
        document.querySelector("#contact h2").innerText = "Contact";
    }
});

// --- Skills Accordion ---
(function() {
    const closeOthers = false; // đổi true nếu muốn chỉ mở 1 block cùng lúc
    function openBody(body, header) {
        body.style.maxHeight = body.scrollHeight + 50 + 'px';
        body.classList.add('open');
        header.classList.add('active');
        body.querySelectorAll('.skill-bar').forEach(bar => {
            const level = bar.getAttribute('data-level') || '0%';
            setTimeout(() => bar.style.width = level, 30);
        });
    }
    function closeBody(body, header) {
        body.style.maxHeight = null;
        body.classList.remove('open');
        header.classList.remove('active');
        body.querySelectorAll('.skill-bar').forEach(bar => {
            bar.style.width = '0';
        });
    }
    document.querySelectorAll('.skills-accordion .accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const body = item.querySelector('.accordion-body');
            const isOpen = body.classList.contains('open');
            if (isOpen) {
                closeBody(body, header);
            } else {
                if (closeOthers) {
                    document.querySelectorAll('.skills-accordion .accordion-body.open').forEach(b => {
                        closeBody(b, b.parentElement.querySelector('.accordion-header'));
                    });
                }
                openBody(body, header);
            }
        });
    });
})();
