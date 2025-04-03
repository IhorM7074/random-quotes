document.addEventListener("DOMContentLoaded", function () {
  const quoteBtn = document.getElementById("quoteBtn");
  const quoteTextElement = document.querySelector("#quoteDisplay .quote-text");
  const quoteAuthorElement = document.querySelector(
    "#quoteDisplay .quote-author"
  );

  // --- Функция для получения и отображения цитаты с Breaking Bad Quotes API ---
  async function fetchAndDisplayQuote() {
    // 1. Показываем пользователю, что идет загрузка
    quoteTextElement.textContent = "Loading quote...";
    quoteAuthorElement.textContent = "";

    try {
      // 2. Отправляем запрос к API
      //    URL: https://api.breakingbadquotes.xyz/v1/quotes
      const response = await fetch(
        "https://api.breakingbadquotes.xyz/v1/quotes"
      );

      // 3. Проверяем, успешен ли ответ от сервера
      if (!response.ok) {
        throw new Error(
          `Network error: ${response.status} ${response.statusText}`
        );
      }

      // 4. Преобразуем ответ из JSON в JavaScript-объект (это массив)
      const quoteDataArray = await response.json();

      // 5. Проверяем, что массив не пустой и содержит объект
      if (!quoteDataArray || quoteDataArray.length === 0) {
        throw new Error("API returned empty data");
      }

      // 6. Берем первый (и единственный) объект из массива
      const quoteData = quoteDataArray[0];

      // 7. Отображаем полученные данные на странице
      //    API возвращает объект с полями 'quote' (текст) и 'author' (автор)
      quoteTextElement.textContent = `"${quoteData.quote}"`;
      quoteAuthorElement.textContent = `- ${quoteData.author}`;
    } catch (error) {
      // 8. Обрабатываем ошибки
      console.error("Failed to load quote:", error);
      quoteTextElement.textContent = "Failed to load quote. Please try again.";
      quoteAuthorElement.textContent = `Error: ${error.message}`;
    }
  }
  // --- Конец функции fetchAndDisplayQuote ---

  // 9. Добавляем обработчик клика на кнопку
  quoteBtn.addEventListener("click", fetchAndDisplayQuote);

  // 10. Загружаем первую цитату сразу при открытии страницы
  fetchAndDisplayQuote();
});
