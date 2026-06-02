// Objeto contendo as informações detalhadas de cada tema
const infoData = {
  sanepar: {
    title: "Sanepar: Água Tratada e Sustentabilidade no Campo",
    text: "A Sanepar atua diretamente na preservação das bacias hidrográficas do Paraná. Através do programa 'Fundo Azul' e do saneamento rural, a empresa garante que a água que abastece as cidades e irriga as lavouras retorne limpa ao ecossistema, criando um ciclo sustentável para o agronegócio.",
    badge: "Foco: Gestão de Bacias Hidrográficas"
  },
  ambiente: {
    title: "Meio Ambiente PR: O Solo Protegido",
    text: "O Paraná é referência nacional no Plantio Direto na Palha, técnica que evita a erosão e mantém os nutrientes do solo. Juntamente com as políticas estaduais de proteção às Matas Ciliares, o estado prova que produzir em larga escala e proteger a biodiversidade local caminham juntos.",
    badge: "Foco: Biodiversidade e Conservação do Solo"
  },
  energia: {
    title: "Hidrelétricas: Matriz Limpa para o Campo Forte",
    text: "A abundância de rios no Paraná viabiliza uma das matrizes energéticas mais limpas do planeta. As usinas hidrelétricas fornecem a eletricidade necessária para a modernização das indústrias agropecuárias, operando sob rigorosos programas de monitoramento ambiental e reflorestamento de margens.",
    badge: "Foco: Energia Renovável e Pegada de Carbono"
  }
};

// Seleção dos elementos do DOM
const buttons = document.querySelectorAll('.btn-explore');
const panelTitle = document.getElementById('panel-title');
const panelText = document.getElementById('panel-text');
const panelBadge = document.getElementById('panel-badge');
const detailsPanel = document.querySelector('.details-panel');

// Adiciona o evento de clique a cada botão dos cards
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    // Descobre qual card foi clicado através do atributo 'data-topic'
    const card = e.target.closest('.card');
    const topic = card.getAttribute('data-topic');
    
    // Atualiza o painel inferior com uma animação simples
    if (infoData[topic]) {
      // Altera o conteúdo
      panelTitle.textContent = infoData[topic].title;
      panelText.textContent = infoData[topic].text;
      panelBadge.textContent = infoData[topic].badge;
      
      // Reseta a animação CSS para rodar novamente ao clicar
      detailsPanel.style.animation = 'none';
      detailsPanel.offsetHeight; // Truque para dar o trigger no reflow do navegador
      detailsPanel.style.animation = 'fadeIn 0.5s ease-in-out';
    }
  });
});