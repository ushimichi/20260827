// 世界の挨拶を順番に表示し、見出しの色もあわせて切り替える簡易インタラクション
const greetings = [
  { text: "Hello, World!", lang: "English", color: "#7c3aed" },
  { text: "こんにちは、世界！", lang: "日本語", color: "#db2777" },
  { text: "Bonjour, le monde !", lang: "Français", color: "#2563eb" },
  { text: "Hola, Mundo!", lang: "Español", color: "#d97706" },
  { text: "Hallo, Welt!", lang: "Deutsch", color: "#059669" },
  { text: "你好,世界!", lang: "中文", color: "#dc2626" },
];

let index = 0;

const greetingEl = document.getElementById("greeting");
const outputEl = document.getElementById("output");
const buttonEl = document.getElementById("greetBtn");

function showGreeting(i) {
  const { text, lang, color } = greetings[i];

  greetingEl.textContent = text;
  greetingEl.style.color = color;
  outputEl.textContent = `言語: ${lang}`;

  greetingEl.classList.remove("pop");
  // リフローを挟んでアニメーションを再適用する
  void greetingEl.offsetWidth;
  greetingEl.classList.add("pop");
}

buttonEl.addEventListener("click", () => {
  index = (index + 1) % greetings.length;
  showGreeting(index);
});
