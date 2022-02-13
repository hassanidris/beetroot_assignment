const playList = [
    {
      author: "LED ZEPPELIN",
      song: "STAIRWAY TO HEAVEN",
    },
    {
      author: "QUEEN",
      song: "BOHEMIAN RHAPSODY",
    },
    {
      author: "LYNYRD SKYNYRD",
      song: "FREE BIRD",
    },
    {
      author: "DEEP PURPLE",
      song: "SMOKE ON THE WATER",
    },
    {
      author: "JIMI HENDRIX",
      song: "ALL ALONG THE WATCHTOWER",
    },
    {
      author: "AC/DC",
      song: "BACK IN BLACK",
    },
    {
      author: "QUEEN",
      song: "WE WILL ROCK YOU",
    },
    {
      author: "METALLICA",
      song: "ENTER SANDMAN",
    },
  ];
  
  document.body.onload = addElement;
  
  function addElement() {
    // create a new div element
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");
  
    // and give it some content
    for (element of playList) {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "div1");
      const newH1 = document.createElement("h1");
      newH1.setAttribute("class", "h1");
      const newH2 = document.createElement("h2");
      newH2.setAttribute("class", "h2");
      const newAuthor = document.createTextNode(element.author);
      const newSong = document.createTextNode(element.song);
      // newH2.style.backgroundColor = "yellow";
      newDiv.appendChild(newH1);
      newH1.appendChild(newAuthor);
      newDiv.appendChild(newH2);
      newH2.appendChild(newSong);
      wrapper.appendChild(newDiv);
    }
  
    // add the newly created element and its content into the DOM
    document.body.appendChild(wrapper);
  }