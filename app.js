function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
 
    // Verificar se o campoPesuisa for uma String
    if(!campoPesquisa) {
        section.innerHTML = `<p>Nada foi enecontrado. Você precisa digitar o nome de um atleta ou esporte.</p>`;
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
      
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) { 
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `;
        }  
    }  

    if (!resultados ) {
        resultados = "<p>Nada foi enecontrado</p>"
    }
    // Atribui os resultados gerados ao conteúdo da seção HTML
    section.innerHTML = resultados
  }