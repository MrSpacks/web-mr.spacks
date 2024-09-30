gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });
  gsap.fromTo(
    ".hero_section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero_section",
        start: "center",
        end: "900",
        scrub: true,
      },
    }
  );

  let itemsLeft = gsap.utils.toArray(".gallery_left .gallery_item");

  itemsLeft.forEach((item) => {
    gsap.fromTo(
      item,
      { x: -100, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });
  let itemsRight = gsap.utils.toArray(".gallery_right .gallery_item");

  itemsRight.forEach((item) => {
    gsap.fromTo(
      item,
      { x: 100, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });
}

// form
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.success || result.error);
  } catch (error) {
    console.error("Error:", error);
  }
});
