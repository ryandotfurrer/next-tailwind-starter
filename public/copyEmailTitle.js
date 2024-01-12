"use client";

export default function copyEmailTitle(e) {
  navigator.clipboard
    .writeText(e.target.getAttribute("title"))
    .then(() => {
      alert("Email copied: ryandotfurrer@gmail.com");
    })
    .catch((err) => {
      console.log(`Failed to copy: ${err}`);
    });
}
