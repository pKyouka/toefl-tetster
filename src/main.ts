import { invoke } from "@tauri-apps/api/core";

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

async function greet() {
  if (greetMsgEl && greetInputEl) {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsgEl.textContent = await invoke("greet", {
      name: greetInputEl.value,
    });
  }
}

// Function to navigate to reading page
function goToReading() {
  // If using Tauri's window API to load another HTML file:
  window.location.href = "reading.html";
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });

  // Create the button
  // const readingBtn = document.createElement("button");
  // readingBtn.textContent = "Go to Reading";
  // readingBtn.type = "button";
  // readingBtn.addEventListener("click", goToReading);
  // document.body.appendChild(readingBtn);

  // const speakingBtn = document.createElement("button");
  // speakingBtn.textContent = "Go to Speaking";
  // speakingBtn.type = "button";
  // speakingBtn.addEventListener("click", () => {
  //   window.location.href = "speaking.html";
  // });
  // document.body.appendChild(speakingBtn);

  const ieltsReadingBtn = document.getElementById("ielts-reading-btn");
  if (ieltsReadingBtn) {
    ieltsReadingBtn.addEventListener("click", goToReading);
  }

  const ieltsWritingBtn = document.getElementById("ielts-writing-btn");
  if (ieltsWritingBtn) {
    ieltsWritingBtn.addEventListener("click", () => {
      window.location.href = "writing.html";
    });
  }

  const ieltsSpeakingBtn = document.getElementById("ielts-speaking-btn");
  if (ieltsSpeakingBtn) {
    ieltsSpeakingBtn.addEventListener("click", () => {
      window.location.href = "speaking.html";
    });
  }

  const ieltsListeningBtn = document.getElementById("ielts-listening-btn");
  if (ieltsListeningBtn) {
    ieltsListeningBtn.addEventListener("click", () => {
      window.location.href = "listening.html";
    });
  }
  // const listeningBtn = document.createElement("button");
  // readingBtn.textContent = "Go to Reading";
  // readingBtn.type = "button";
  // readingBtn.addEventListener("click", goToReading);
  // document.body.appendChild(readingBtn);
});
