$(".menu-button").click(function() {
    const clicks = $(this).data("clicks");
    if (clicks) {
        gsap.to(".hamburger-top", {
            y: 0,
            rotation: 0,
            duration: 0.2
        });
        gsap.to(".hamburger-bottom", {
            y: 0,
            rotation: 0,
            duration: 0.2
        });
    } else {
        gsap.to(".hamburger-top", { y: "0.6rem", rotation: 45, duration: 0.2 });
        gsap.to(".hamburger-bottom", {
            y: "-0.6rem",
            rotation: -45,
            duration: 0.2
        });
    }
    $(this).data("clicks", !clicks);
});
