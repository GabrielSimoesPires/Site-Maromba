const inputName = document.getElementById('inputName');
const textComment = document.getElementById('inputText');
const form = document.getElementById('formulario');
const commentPost = document.getElementById('commentPost');

form.addEventListener('submit', (event) => {
   event.preventDefault(); //metodo para não atualizar a pagina quando apertar no submit , fazendo que o submit nao seja submetido a recarregar 

   let p = document.createElement('p');
   p.classList = 'p-2 d-flex text-wrap flex-wrap';
   p.innerHTML = `<strong>${inputName.value}: </strong> &nbsp ${textComment.value}`;
   commentPost.appendChild(p);
   inputName.value = '';
   textComment.value = '';
   inputName.focus();
});
