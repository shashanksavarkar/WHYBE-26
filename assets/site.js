(function () {
    "use strict";

    var EVENT_DATE = new Date("2026-09-15T08:00:00+05:30");

    function initReducedMotion() {
        var mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        function apply() {
            document.documentElement.classList.toggle("reduce-motion", mq.matches);
        }
        apply();
        mq.addEventListener("change", apply);
    }

    function initHeaderScroll() {
        var header = document.getElementById("site-header");
        if (!header) return;
        function onScroll() {
            header.classList.toggle("header-scrolled", window.scrollY > 8);
        }
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
    }

    function initMobileMenu() {
        var toggle = document.getElementById("menu-toggle");
        var menu = document.getElementById("mobile-menu");
        var iconOpen = document.getElementById("menu-icon-open");
        var iconClose = document.getElementById("menu-icon-close");
        if (!toggle || !menu) return;

        function setOpen(open) {
            menu.classList.toggle("hidden", !open);
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
            if (iconOpen && iconClose) {
                iconOpen.classList.toggle("hidden", open);
                iconClose.classList.toggle("hidden", !open);
            }
            document.body.classList.toggle("overflow-hidden", open);
        }

        toggle.addEventListener("click", function () {
            setOpen(menu.classList.contains("hidden"));
        });

        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () { setOpen(false); });
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") setOpen(false);
        });
    }

    function initActiveNav() {
        var page = document.documentElement.getAttribute("data-page");
        if (!page) return;
        document.querySelectorAll("[data-nav]").forEach(function (link) {
            if (link.getAttribute("data-nav") === page) {
                link.classList.add("active");
                link.setAttribute("aria-current", "page");
            }
        });
    }

    function initFooterYear() {
        document.querySelectorAll("[data-year]").forEach(function (el) {
            el.textContent = new Date().getFullYear();
        });
    }

    function pad(n) {
        return String(n).padStart(2, "0");
    }

    function initCountdowns() {
        var nodes = document.querySelectorAll("[data-countdown]");
        if (!nodes.length) return;

        function tick() {
            var now = new Date();
            var diff = EVENT_DATE.getTime() - now.getTime();
            var expired = diff <= 0;
            var days = 0, hours = 0, minutes = 0, seconds = 0;
            if (!expired) {
                var totalSeconds = Math.floor(diff / 1000);
                days = Math.floor(totalSeconds / 86400);
                hours = Math.floor((totalSeconds % 86400) / 3600);
                minutes = Math.floor((totalSeconds % 3600) / 60);
                seconds = totalSeconds % 60;
            }
            nodes.forEach(function (node) {
                var d = node.querySelector("[data-cd-days]");
                var h = node.querySelector("[data-cd-hours]");
                var m = node.querySelector("[data-cd-minutes]");
                var s = node.querySelector("[data-cd-seconds]");
                if (d) d.textContent = pad(days);
                if (h) h.textContent = pad(hours);
                if (m) m.textContent = pad(minutes);
                if (s) s.textContent = pad(seconds);
            });
        }

        tick();
        window.setInterval(tick, 1000);
    }

    function initReveal() {
        var targets = document.querySelectorAll(".reveal-on-scroll");
        if (!targets.length) return;
        if (!("IntersectionObserver" in window)) {
            targets.forEach(function (el) { el.classList.add("reveal"); });
            return;
        }
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        targets.forEach(function (el) { observer.observe(el); });
    }

    document.addEventListener("DOMContentLoaded", function () {
        initReducedMotion();
        initHeaderScroll();
        initMobileMenu();
        initActiveNav();
        initFooterYear();
        initCountdowns();
        initReveal();
    });
})();
