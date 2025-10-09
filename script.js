// Seletores dos elementos HTML por ID
const elements = {
  promptTitle: document.getElementById("prompt-title"),
  promptContent: document.getElementById("prompt-content"),
  titleWrapper: document.getElementById("title-wrapper"),
  contentWrapper: document.getElementById("content-wrapper"),
  btnOpen: document.getElementById("btn-open"),
  btnCollapse: document.getElementById("btn-collapse"),
  sidebar: document.querySelector(".sidebar"),
}

// Atualiza o estado visual do wrapper conforme o conteúdo do elemento editável
function updateEditableWrapperState(element, wrapper) {
  const isEmpty = element.textContent.trim().length > 0
  wrapper.classList.toggle("is-empty", !isEmpty)
}

// Atualiza todos os estados dos editáveis
function updateAllEditableStates() {
  updateEditableWrapperState(elements.promptTitle, elements.titleWrapper)
  updateEditableWrapperState(elements.promptContent, elements.contentWrapper)
}

// Adiciona listeners de input para atualizar os wrappers em tempo real
function attachAllEditableHandlers() {
  elements.promptTitle.addEventListener("input", () => {
    updateEditableWrapperState(elements.promptTitle, elements.titleWrapper)
  })
  elements.promptContent.addEventListener("input", () => {
    updateEditableWrapperState(elements.promptContent, elements.contentWrapper)
  })
  // Atualiza o estado inicial
  updateAllEditableStates()
}

// Função para abrir a sidebar
function openSidebar() {
  elements.sidebar.style.display = "flex"
  elements.btnOpen.style.display = "none"
}

// Função para fechar a sidebar
function closeSidebar() {
  elements.sidebar.style.display = "none"
  elements.btnOpen.style.display = "block"
}

function attachSidebarHandlers() {
  elements.btnOpen.addEventListener("click", openSidebar)
  elements.btnCollapse.addEventListener("click", closeSidebar)
}

// Função de inicialização
function init() {
  attachAllEditableHandlers()
  attachSidebarHandlers()
  // Estado inicial: sidebar visível, botão de abrir oculto
  elements.sidebar.style.display = "flex"
  elements.btnOpen.style.display = "none"
}

// Executa a inicialização ao carregar o script
init()
