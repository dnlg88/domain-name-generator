/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "my", "your"];
  let adj = ["great", "big", "small", "metal", "tiny", "blue"];
  let noun = ["jogger", "racoon", "plate", "marketplace", "ladder", "puedes"];
  let dom = [".com", ".es", ".io", ".org", ".mx", ".net"];
  let item = " ";
  let domainName = [];
  let list = document.getElementById("myList");

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        item = item + pronoun[i] + adj[j] + noun[k];
        item = item + dom[Math.floor(Math.random() * dom.length)];
        domainName.push(item);
        item = " ";
      }
    }
  }

  // POR REVISAR RETO EXTRA
  let nameSplit = domainName.map(el => {
    return el.split(".");
  });

  nameSplit.forEach(el => {
    let comp = el[0].split("");
    let iterador = el[1].length;
    let comp2 = "";
    for (let i = 0; i < iterador; i++) {
      comp2 = comp2 + comp[comp.length - 1];
    }
    if (comp2 == el[1]) {
      return (el[0] = comp.splice(comp.length - iterador, 0, "."));
    } else {
      return el[0] + el[1];
    }
  });
  domainName.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
};
