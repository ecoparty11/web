export default function(event){
    const input = event.target
    const imagen = input.form.querySelector("img")
    imagen.src = input.dataset.src
}