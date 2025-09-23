/***************************************************
==================== JS INDEX ======================
****************************************************
Preloader js
Data js
Sticky Nav Js
Mobile Menu Js
Search Bar Js
Rating Js
Client-slider Js
Marquee slider Js
Project Slider Js

Hero slider Js
Service Slider Js
Blog Slider Js
Accordion Js
Backtotop Js
Odometer js


****************************************************/

(function ($) {
  "use strict";
  // Weave Animation Js
  const target = document.getElementById("tj-weave-anim");
  function splitTextToSpans(targetElement) {
    if (targetElement) {
      const text = targetElement.textContent;
      targetElement.innerHTML = "";

      for (let character of text) {
        const span = document.createElement("span");
        if (character === " ") {
          span.innerHTML = "&nbsp;";
        } else {
          span.textContent = character;
        }
        targetElement.appendChild(span);
      }
    }
  }
  splitTextToSpans(target);
  // Preloader js
  $(window).on("load", function () {
    const tjPreloader = $(".tj-preloader");
    if (tjPreloader?.length) {
      setTimeout(function () {
        tjPreloader.removeClass("is-loading").addClass("is-loaded");
        setTimeout(function () {
          tjPreloader.fadeOut(400);
          wowController();
          gsapController();
        }, 700);
      }, 2000);
    } else {
      wowController();
      gsapController();
    }
  });

  /* ------------- Gsap registration Js -------------*/
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
  if ($("#smooth-wrapper").length && $("#smooth-content").length) {
    gsap.config({
      nullTargetWarn: false,
    });

    let smoother = ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
      ignoreMobileResize: true,
    });
  }

  ////////////////////////////////////////////////////
  // Data js
  $("[data-bg-image]").each(function () {
    var $this = $(this),
      $image = $this.data("bg-image");
    $this.css("background-image", "url(" + $image + ")");
  });

  ////////////////////////////////////////////////////
  // Mobile Menu Js
  $(".mobile_menu_bar").on("click", function () {
    $(this).toggleClass("on");
  });

  // Mobile Menu Js
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile_menu",
    meanScreenWidth: "991",
    meanExpand: ['<i class="tji-arrow-down"></i>'],
  });

  // Hamburger Menu Js
  $(".mobile_menu_bar").on("click", function () {
    $(".hamburger-area").addClass("opened");
    $(".body-overlay").addClass("opened");
    $("body").toggleClass("overflow-hidden");
  });

  // Offcanvas js

  $(".hamburger_close_btn").on("click", function () {
    $(".tj-offcanvas-area").removeClass("opened");
    $(".hamburger-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
    $("body").toggleClass("overflow-hidden");
  });
  $(".body-overlay").on("click", function () {
    $(".tj-offcanvas-area").removeClass("opened");
    $(".hamburger-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
    $("body").toggleClass("overflow-hidden");
  });

  ////////////////////////////////////////////////////
  // Client-slider Js
  if ($(".client-slider").length > 0) {
    var client = new Swiper(".client-slider", {
      slidesPerView: "auto",
      spaceBetween: 0,
      freemode: true,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
    });
  }

  ////////////////////////////////////////////////////
  // Marquee slider Js
  if ($(".marquee-slider").length > 0) {
    var marquee = new Swiper(".marquee-slider", {
      slidesPerView: "auto",
      spaceBetween: 0,
      freemode: true,
      centeredSlides: true,
      loop: true,
      speed: 7000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
    });
  }

  ////////////////////////////////////////////////////
  // Project Slider Js
  if ($(".project-slider").length > 0) {
    var work = new Swiper(".project-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
      loop: false,
      autoplay: {
        delay: 6000,
      },
      speed: 1500,
      pagination: {
        el: ".swiper-pagination-area",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 1.7,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2.2,
        },
        1400: {
          slidesPerView: 2.31,
        },
      },
    });
  }

  ////////////////////////////////////////////////////
  // Hero slider Js
  if ($(".hero-thumb").length > 0) {
    var swiper = new Swiper(".hero-thumb", {
      loop: false,
      spaceBetween: 15,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
  }
  if ($(".hero-slider").length > 0) {
    var hero = new Swiper(".hero-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      loop: true,
      speed: 1400,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  }

  ////////////////////////////////////////////////////
  // Backtotop Js
  function tjBaackTopController() {
    const scrollElementWrap = $("#tj-back-to-top");
    if (scrollElementWrap?.length) {
      const scrollPercentage = () => {
        const scrollTopPos = document.documentElement.scrollTop;
        const calcHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);

        scrollElementWrap.css(
          "background",
          `conic-gradient( var(--tj-color-theme-primary) ${scrollValue}%, var(--tj-color-common-white) ${scrollValue}%)`
        );

        // ScrollProgress
        if (scrollTopPos > 100) {
          scrollElementWrap.addClass("active");
        } else {
          scrollElementWrap.removeClass("active");
        }

        if (scrollValue < 96) {
          $("#tj-back-to-top-percentage").text(`${scrollValue}%`);
        } else {
          $("#tj-back-to-top-percentage").html(
            '<i class="tji-arrow-up-long"></i>'
          );
        }
      };
      window.onscroll = scrollPercentage;
      window.onload = scrollPercentage;

      // Back to Top
      function scrollToTop() {
        document.documentElement.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      $("#tj-back-to-top").on("click", scrollToTop);
    }
  }

  tjBaackTopController();

  ////////////////////////////////////////////////////
  // Odometer js
  if (jQuery(".odometer").length > 0) {
    var om = jQuery(".odometer");
    om.each(function () {
      jQuery(this).appear(function () {
        var numCount = jQuery(this).attr("data-count");
        jQuery(this).html(numCount);
      });
    });
  }

  ////////////////////////////////////////////////////
  // wow js
  function wowController() {
    if ($(".wow").length > 0) {
      new WOW().init();
    }
  }

  /* ------------- Gsap Animation Js -------------*/
  function gsapController() {
    // Onepage navigation
    const tjScrollButton = document.querySelectorAll(".tj-scroll-btn");
    if (tjScrollButton?.length) {
      tjScrollButton.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          var sectionTarget = btn.getAttribute("data-target");
          gsap.to(window, {
            duration: 0.3,
            scrollTo: { y: sectionTarget, offsetY: 70 },
          });
        });
      });
    }
    // common variable and funtion
    let mediaMatch = gsap.matchMedia();
    function rtlValue(value) {
      const isRTL = document.documentElement.dir === "rtl";
      return isRTL ? -value : value;
    }

    /* ------------- Positon Sticky Js -------------*/

    // Fade In on Scroll Animation
    function initFadeInRightOnScroll() {
      const panels = document.querySelectorAll(".tj-fadein-right-on-scroll");
      if (panels.length === 0) return;

      const startOffset = 50;
      panels.forEach((panel, i) => {
        gsap.set(panel, {
          xPercent: rtlValue(40),
          ease: "none",
        });
        gsap.to(panel, {
          xPercent: 0,
          scrollTrigger: {
            trigger: panel,
            start: `top bottom-=300`,
            end: `bottom bottom-=300`,
            pin: false,
            pinSpacing: false,
            scrub: true,
            markers: false,
            invalidateOnRefresh: true,
          },
        });
      });
    }
    initFadeInRightOnScroll();
    // Scroll Progress animation
    function initStickyAndProgress() {
      mediaMatch.add("(min-width: 0)", () => {
        // Sticky panels
        if ($(".tj-sticky-panel-2").length > 0) {
          let tl = gsap.timeline();
          let panels = document.querySelectorAll(".tj-sticky-panel-2");

          panels.forEach((panel) => {
            tl.to(panel, {
              force3D: true,
              scrollTrigger: {
                trigger: panel,
                pin: panel,
                scrub: 1,
                start: "top top",
                end: "bottom+=120 bottom",
                endTrigger: ".tj-sticky-panel-container-2",
                pinSpacing: false,
                markers: false,
              },
            });
          });
        }

        // Scroll Progress animation
        if ($(".tj-progress-item").length > 0) {
          const tjProgressWrapper = document.querySelector(
            ".tj-progress-wrapper"
          );

          if (tjProgressWrapper?.children?.length) {
            let panels = gsap.utils.toArray(".tj-progress-item");
            let totalPanels = panels.length;
            let scrollProgressItems = gsap.utils.toArray(
              ".tj-scroll-progress-item"
            );
            gsap.to(panels, {
              ease: "none",
              scrollTrigger: {
                trigger: tjProgressWrapper,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                pin: false,
                onUpdate: (self) => {
                  let progress = self.progress;
                  let activeIndex = Math.round(progress * (totalPanels - 1));
                  panels.forEach((panel, index) => {
                    panel.classList.toggle("active", index === activeIndex);
                  });
                  scrollProgressItems.forEach((item, index) => {
                    item.classList.toggle("active", index === activeIndex);
                  });
                },
              },
            });
          }
        }
      });
    }

    // Init on load
    initStickyAndProgress();

    // Sidebar sticky
    function sidebarStickyController() {
      const containers = document.querySelectorAll(
        ".slidebar-stickiy-container"
      );
      if (containers.length) {
        containers.forEach((container) => {
          const panels = container.querySelectorAll(".slidebar-stickiy");
          if (panels.length) {
            mediaMatch.add("(min-width: 992px)", () => {
              const startOffset = 30;
              //parseInt(getComputedStyle(container).paddingTop) || 0;
              const lastIdx = panels.length - 1;
              const lastPanel = panels[lastIdx];
              const paddingBottom =
                parseInt(getComputedStyle(container).paddingBottom) || 0;
              panels.forEach((panel, i) => {
                gsap.to(panel, {
                  scrollTrigger: {
                    trigger: panel,
                    start: `top-=${startOffset} top`,
                    endTrigger: container,
                    end: () =>
                      `bottom top+=${
                        lastPanel.offsetHeight + startOffset + paddingBottom
                      }`,
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    markers: false,
                    invalidateOnRefresh: true,
                  },
                  ease: "circ",
                });
              });
            });
          }
        });
      }
    }
    sidebarStickyController();

    /* Text Effect Animation */
    if ($(".text-anim").length) {
      let staggerAmount = 0.02,
        translateXValue = rtlValue(20),
        delayValue = 0.1,
        easeType = "power2.out",
        animatedTextElements = document.querySelectorAll(".text-anim");

      animatedTextElements.forEach((element) => {
        let animationSplitText = new SplitText(element, {
          type: "chars, words",
        });
        gsap.from(animationSplitText.chars, {
          duration: 1,
          delay: delayValue,
          x: translateXValue,
          autoAlpha: 0,
          stagger: staggerAmount,
          ease: easeType,
          scrollTrigger: { trigger: element, start: "top 85%" },
        });
      });
    }

    /* Title Animation */
    if ($(".title-anim").length) {
      let staggerAmount = 0.01,
        delayValue = 0.1,
        easeType = "power1.inout",
        animatedTitleElements = document.querySelectorAll(".title-anim");

      animatedTitleElements.forEach((element) => {
        let animatedTitleElements = new SplitText(element, {
          types: "lines, words",
        });
        gsap.from(animatedTitleElements.chars, {
          y: "100%",
          duration: 0.5,
          delay: delayValue,
          autoAlpha: 0,
          stagger: staggerAmount,
          ease: easeType,
          scrollTrigger: { trigger: element, start: "top 85%" },
        });
      });
    }

    // Text Highlight
    if ($(".title-highlight").length) {
      const highlightText = new SplitText(".title-highlight", {
        type: "lines",
        linesClass: "line",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".title-highlight",
          scrub: 1,
          start: "top 80%",
          end: "bottom center",
        },
      });
      tl.to(".line", {
        "--highlight-offset": "100%",
        stagger: 0.4,
      });
    }
  }
})(jQuery);
