/* =========================================================
   NUNNOKKU — customizable links
   Edit the values below. Nothing else in this file needs
   to change for a basic setup.
   ========================================================= */

// 1 & 2. LOGOS — replace the files at assets/logo-left.png and
//        assets/logo-right.png in index.html's <img> tags.

// 3. EXAMPLE DOCUMENT — link to a sample write-up/photo.
const EXAMPLE_URL = "https://YOUR-EXAMPLE-DOCUMENT-LINK";

// 4. SUBMISSION FORM — Google Form / Drive upload link.
const SUBMISSION_URL = "YOUR_SUBMISSION_LINK";

// 5. LINKEDIN PAGE — the chapter's LinkedIn profile.
const LINKEDIN_URL = "YOUR-LINKEDIN-LINK";

/* ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Wire up the configurable links above to their elements.
  const exampleLink = document.getElementById("example-link");
  if (exampleLink) exampleLink.href = EXAMPLE_URL;

  const linkedinLink = document.getElementById("linkedin-link");
  if (linkedinLink) linkedinLink.href = LINKEDIN_URL;

  const submitBtn = document.getElementById("submit-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      window.open(SUBMISSION_URL, "_blank", "noopener,noreferrer");
    });
  }

  // Gentle fade-in as sections enter the viewport.
  const revealTargets = document.querySelectorAll(".band, .hero");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    // Fallback: just show everything if IntersectionObserver is unavailable.
    revealTargets.forEach((el) => el.classList.add("in-view"));
  }
});
