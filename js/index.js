// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    //sticky header

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            //active sections for showing animation
            sec.classList.add('show-animate');
        }

        // if want to use animations that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    })

    // remove toggle icon and navbar when click navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')

    //animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

function sendMail(){
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value
    }

    if (!params.email || !params.message || !params.subject) return false

    emailjs.send("service_pngf1qm","template_qnjtgil",params).then(alert("Email đã được gửi"))
    return true
}

function handleSending(){
    if (sendMail()) {document.getElementById("contactForm").reset();}
}