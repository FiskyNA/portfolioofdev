import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    [".landing-h2-info", ".landing-h2-1"],
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  LoopText(".landing-h2-info", ".landing-h2-info-1");
  LoopText(".landing-h2-1", ".landing-h2-2");
}

function LoopText(text1Selector: string, text2Selector: string) {
  gsap.set(text2Selector, { y: 80, autoAlpha: 0 });

  var tl = gsap.timeline({ repeat: -1 });
  const delay1 = 4;

  tl.to(text1Selector, { y: -80, autoAlpha: 0, duration: 1.2, ease: "power3.inOut" }, delay1)
    .to(text2Selector, { y: 0, autoAlpha: 1, duration: 1.2, ease: "power3.inOut" }, delay1)
    .set(text1Selector, { y: 80 })
    .to(text2Selector, { y: -80, autoAlpha: 0, duration: 1.2, ease: "power3.inOut" }, delay1 * 2)
    .to(text1Selector, { y: 0, autoAlpha: 1, duration: 1.2, ease: "power3.inOut" }, delay1 * 2)
    .set(text2Selector, { y: 80 });
}
