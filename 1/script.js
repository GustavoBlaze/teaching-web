async function pesquisar() {
  const nome = document.querySelector("input").value;
  const url = "https://api.github.com/users/";

  if (nome === "") {
    alert("Campo vazio");
    return;
  }

  const urlDePesquisa = url + nome;

  const dados = await fetch(urlDePesquisa).then(r => r.json())

  const name = dados.name || "";
  const login = dados.login;
  const bio = dados.bio || "";
  const avatar = dados.avatar_url;


  let item = "";

  item += "<li>";
  item += `<img src="${avatar}">`;
  item += "<div>";
  item += `<strong>${name}</strong>`;
  item += `<p>${login}</p>`;
  item += `<span>${bio}</span>`
  item += "<div>";
  item += "</li>";

  const lista = $('ul')
  lista.append(item)
}
