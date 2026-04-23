const DOWNLOAD_URL =
  "https://drive.google.com/drive/folders/10abhMLPKmaIrZe3QyZYWhMHcyBr2V_c7?usp=sharing";

const downloadBtn = document.getElementById("downloadBtn");
const goToDownloadBtn = document.getElementById("goToDownloadBtn");
const downloadSection = document.getElementById("downloadSection");
const yearEl = document.getElementById("year");

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    downloadBtn.disabled = true;
    downloadBtn.textContent = "Redirecting...";
    window.location.href = DOWNLOAD_URL;
  });
}

if (goToDownloadBtn && downloadSection) {
  goToDownloadBtn.addEventListener("click", () => {
    downloadSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
