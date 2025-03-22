

function contact(event) {
    event.preventDefault();
    // emailjs
    // .sendForm(
    //     `service_20usx8r`,
    //     `template_ioadkck`,
    //     event.target,
    //     `M5cUpznJLQfGLMsMh`
    // ).then(() => {
    //     console.log(`this worked1`)
    // })
    const loading = document.querySelector(`.modal__overlay--loading`)
    const success = document.querySelector(`.modal__overlay--success`) 
    loading.classlist += " modal__overlay--visible"
    setTimeout(() => {
        console.log(`it worked 1`)
    }, 500)

}