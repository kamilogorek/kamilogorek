document.querySelector("#search").addEventListener("input", e => {
  Array.from(document.querySelectorAll(".post-content ul li")).forEach(el => {
    const q = e.target.value.trim();
    el.hidden =
      q === "" ? false : !el.innerText.toLowerCase().includes(q.toLowerCase());
  });
  Array.from(document.querySelectorAll(".post-content h3")).forEach(
    worstShowHideEver
  );
  Array.from(document.querySelectorAll(".post-content h4")).forEach(
    worstShowHideEver
  );
});

function worstShowHideEver(el) {
  if (
    Array.from(el.nextElementSibling.querySelectorAll("li")).every(
      el => el.hidden
    )
  ) {
    el.hidden = true;
    el.nextElementSibling.hidden = true;
    if (el.nextElementSibling.nextElementSibling.tagName === "HR") {
      el.nextElementSibling.nextElementSibling.hidden = true;
    }
  } else {
    el.hidden = false;
    el.nextElementSibling.hidden = false;
    if (el.nextElementSibling.nextElementSibling.tagName === "HR") {
      el.nextElementSibling.nextElementSibling.hidden = false;
    }
  }
}
