function refresh()
{
    fetch("data.json") // Zamień na ścieżkę do swojego pliku JSON
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector(".zawartosc");

    data.forEach(item => {
      const pole = document.createElement("div");
      pole.classList.add("pole");

      pole.innerHTML = `
        <p class="pole-tytul">${item.title}</p><br>
        <img src="${item.img}" class="pole-img"><br><br>
        <a href="${item.link}" target="_blank" class="pole-link">PRZEJDŹ</a>
      `;

      container.appendChild(pole);
    });
  })
  .catch(error => console.error("Błąd wczytywania JSON:", error));

}

refresh()