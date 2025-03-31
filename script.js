document.addEventListener("DOMContentLoaded", function () {
  const quoteBtn = document.getElementById("quoteBtn");
  const quoteTextElement = document.querySelector("#quoteDisplay .quote-text");
  const quoteAuthorElement = document.querySelector(
    "#quoteDisplay .quote-author"
  );

  const quotes = [
    {
      text: "Единственный способ сделать великое дело - любить то, что делаешь.",
      author: "Стив Джобс",
    },
    {
      text: "Жизнь - это то, что происходит с тобой, пока ты строишь другие планы.",
      author: "Джон Леннон",
    },
    {
      text: "Успех - это не ключ к счастью. Счастье - это ключ к успеху. Если ты любишь то, что делаешь, ты обязательно добьешься успеха.",
      author: "Альберт Швейцер",
    },
    {
      text: "Будьте самими собой; все остальные роли уже заняты.",
      author: "Оскар Уайльд",
    },
    {
      text: "Мир меняется на твоих глазах. Если ты не движешься вперед, ты остаешься позади.",
      author: "Неизвестный автор",
    },
    {
      text: "Наше величайшее слава не в том, чтобы никогда не терпеть неудачу, а в том, чтобы подниматься каждый раз, когда мы падаем.",
      author: "Нельсон Мандела",
    },
    {
      text: "Воображение важнее знания. Знание ограничено, а воображение охватывает весь мир.",
      author: "Альберт Эйнштейн",
    },
    {
      text: "Если ты долбоеб,то это на долго",
      author: "Хуило",
    },
  ];

  quoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(randomIndex);
    const randomQuote = quotes[randomIndex];
    quoteTextElement.textContent = `"${randomQuote.text}"`;
    quoteAuthorElement.textContent = `- ${randomQuote.author}`;
  });
});
