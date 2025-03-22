

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(`.modal__overlay--loading`)
    const success = document.querySelector(`.modal__overlay--success`) 
    loading.classList += " modal__overlay--visible";
    emailjs
    .sendForm(
        `service_20usx8r`,
        `template_ioadkck`,
        event.target,
        `M5cUpznJLQfGLMsMh`
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The Email service is temporarily unavailable.  Please contact me directly @ MPBorer@gmail.com"
        )
    })
}