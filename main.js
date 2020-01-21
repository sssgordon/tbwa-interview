const tlmenu = gsap.timeline({ paused: true });
tlmenu
    .set(".menu-container", { autoAlpha: 1 })
    .set(".menu-slash-bg", { autoAlpha: 1 })
    .set(".menu-dark-bg", { visibility: "visible" })
    .to(".menu-slash-bg", {
        left: "24vw",
        ease: "power4.out",
        duration: 0.3
    })
    .to(".menu-dark-bg", { opacity: 0.4, duration: 0.3 }, 0);

$(".menu-button").click(function() {
    const clicks = $(this).data("clicks");
    if (clicks) {
        // even
        gsap.to(".hamburger-top", {
            y: 0,
            rotation: 0,
            backgroundColor: "white",
            duration: 0.3
        });
        gsap.to(".hamburger-bottom", {
            y: 0,
            rotation: 0,
            backgroundColor: "white",
            duration: 0.3
        });

        //menu
        tlmenu.reverse(0);
    } else {
        // odd
        gsap.to(".hamburger-top", {
            y: "0.6rem",
            rotation: 45,
            backgroundColor: "black",
            duration: 0.1
        });
        gsap.to(".hamburger-bottom", {
            y: "-0.6rem",
            rotation: -45,
            backgroundColor: "black",
            duration: 0.1
        });

        // menu
        tlmenu.play(0);
    }
    $(this).data("clicks", !clicks);
});

// menu label hover
// $(".main-menu ul li a").hover(
//     function() {
//         gsap.to($(this), {
//             color: "white",
//             boxShadow: "inset 60rem 0 0 0 #fecc00",
//             ease: "power4.out",
//             duration: 0.2
//         });
//     },
//     function() {
//         gsap.to($(this), {
//             color: "black",
//             boxShadow: "inset 0 0 0 0 #fecc00",
//             ease: "power4.in",
//             duration: 0.2
//         });
//     }
// );
