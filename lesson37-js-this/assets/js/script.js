class Card {
  constructor(element, name, place, avatar, description) {
    this.element = element;
    this.name = name;
    this.place = place;
    this.avatar = avatar;
    this.description = description;
  }

  
    // Method
    render() {

      // Creating Dom

      const row = document.createElement("div");
      row.className = 'row row-cols-md-3';

      const col = document.createElement("div");
      col.className = 'col ms-5';

      const cardItem = document.createElement("div");
      cardItem.className = 'card h-100 shadow';

      const cardImage = document.createElement("img");
      cardImage.className = 'card-img-top';

      const cardBody = document.createElement("div");
      cardBody.className = 'card-body';

      const cardTitle = document.createElement("h3");
      cardTitle.className = 'card-title';

      const cardPerPlace = document.createElement("figcaption");
      cardPerPlace.className = 'blockquote-footer mt-1';

      const cardText = document.createElement("p");
      cardText.className = 'card-text mt-0 fs-6';

      cardTitle.textContent = `${this.name}`;
      cardPerPlace.textContent = `${this.place}`;
      cardImage.textContent = `${this.avatar}`;
      cardText.textContent = `${this.description}`;

      cardImage.setAttribute("src", this.avatar);

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardPerPlace);
      cardBody.appendChild(cardText);

      cardItem.appendChild(cardImage);
      cardItem.appendChild(cardBody);

      col.appendChild(cardItem);

      row.appendChild(col);

      this.element.appendChild(row);

      // end of DOM code

    }
  }
  
  const el = document.getElementById("entryPoint");
  

  
  const nameU = prompt('Write the name of the person responsible of the war in Ukraine:');
  const placeU = prompt('Write his nationality:');
  const sorryU = alert('Sorry we forgot to ask you for photo regarding this topic but we prepared something 👍' );
  const textU = prompt('Write few words you want to say it to Ukraine:');
  

  const card2 = new Card(
    el,
    nameU,
    placeU,
    "./assets/img/image.jpg",
    textU
  );


  card2.render();