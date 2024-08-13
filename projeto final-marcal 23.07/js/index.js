class Card extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
      <style>
        .card {
            margin-left: 20px;
            margin-top: 20px;
            width: 15vw;
        }

        .button_component {
            color: #fff;
            background-color: #fb8b24;
            border: none;
            padding: 10px;
            border-radius: 2px;
        }
        
        .button_component:hover {
            color: #fff;
            background-color: #f0790a;
        }
      </style>

      <img src="${this.getAttribute("src")}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text"> <strong>${this.getAttribute("title")}</strong> ${this.getAttribute("ml")}</p>
        <p>${this.getAttribute("price")}</p>
        <a href="malbec.html?id=${this.getAttribute("id")}" class="button_component">Comprar</a>
      </div>
    `;
      this.appendChild(div);
    }
  }
  
  customElements.define("card-item", Card);

fetch("http://localhost:3000/posts")
  .then((res) => res.json())
  .then((json) => carregarPerfumes(json))

function carregarPerfumes(perfumes) {
  const container = document.getElementById("perfumes-container");

  for (let i = 0; i < perfumes.length; i++) {
    const perfume = document.createElement("card-item");

    const img = document.createElement("img");
    img.src = perfumes[i].src;
    
    const titulo = document.createElement("h1");
    titulo.textContent = perfumes[i].titulo;

    const autor = document.createElement("p");
    autor.textContent = perfumes[i].autor;

    perfume.appendChild(img)
    perfume.appendChild(titulo)
    perfume.appendChild(autor)

    container.appendChild(perfume)
  }
}