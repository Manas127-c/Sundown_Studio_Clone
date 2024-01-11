function imagereveal() {
    let i = document.querySelectorAll(".box-p3")
    let image = document.querySelectorAll(".image-b")
    let video = document.querySelectorAll(".video-b")
    let b = document.querySelector("#imagereveal")
    let imageback = document.querySelector("#imagereveal img")
    let videoback = document.querySelector("#imagereveal video")
    i.forEach((e) => {
        e.addEventListener("mouseenter", function() {
            b.style.display = "block";
        })
        e.addEventListener("mouseleave", function() {
            b.style.display = "none"
        })
    })
    image[3].addEventListener("mouseenter", function() {
        b.style.backgroundImage = 'url("https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163b_Copy-of-IMG_1180.webp")'
        videoback.src = "";
    })
    image[2].addEventListener("mouseenter", function() {
        b.style.backgroundImage = 'url("https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1733_Nike_HOI_50th_SU22_FL1_5388.webp")'
        videoback.src = "";
    })
    image[0].addEventListener("mouseenter", function() {
        b.style.backgroundImage = 'url("https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f4_Copy%20of%20Nike_Soho_50th_SU22_FL1_6176.webp")'
        videoback.src = "";
    })
    image[1].addEventListener("mouseenter", function() {
        b.style.backgroundImage = 'url("https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16c5_Copy%20of%20Nike_Soho_AMD21_0781_LORES.webp")'
        videoback.src = "";
    })
    video[0].addEventListener("mouseenter", function() {
        videoback.src = "./afterpay.mp4"
    })
    video[1].addEventListener("mouseenter", function() {
        videoback.src = "./soho.mp4"
    })
    video[2].addEventListener("mouseenter", function() {
        videoback.src = "./nike.mp4"
    })
}
imagereveal()

function page4() {
    let h1 = document.querySelectorAll("#content-p4 h1");
    let b1 = window.getComputedStyle(h1[0], '::before')
    let b2 = window.getComputedStyle(h1[1], '::before')
    let b3 = window.getComputedStyle(h1[2], '::before')
    let a = ["Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.", "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.", "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."]
    let p = document.querySelector("#content-p4 p")
    let ib = document.querySelector(".image-cp4")
    console.log(ib)
    let image1 = h1[0].getAttribute("data-image")
    let image2 = h1[1].getAttribute("data-image")
    let image3 = h1[2].getAttribute("data-image")
    h1[0].addEventListener("click", function() {
        h1[0].style.color = "white"
        h1[1].style.color = "#504A45"
        h1[2].style.color = "#504A45"
        h1[0].style.setProperty('--color', '#FE330A')
        h1[1].style.setProperty('--color', '#504A45')
        h1[2].style.setProperty('--color', '#504A45')
        ib.style.backgroundImage = `url("${image1}")`
        p.textContent = a[0]
    })
    h1[1].addEventListener("click", function() {
        h1[1].style.color = "white"
        h1[0].style.color = "#504A45"
        h1[2].style.color = "#504A45"
        h1[1].style.setProperty('--color', '#FE330A')
        h1[0].style.setProperty('--color', '#504A45')
        h1[2].style.setProperty('--color', '#504A45')
        ib.style.backgroundImage = `url("${image2}")`
        p.textContent = a[1]
    })
    h1[2].addEventListener("click", function() {
        h1[2].style.color = "white"
        h1[1].style.color = "#504A45"
        h1[0].style.color = "#504A45"
        h1[2].style.setProperty('--color', '#FE330A')
        h1[0].style.setProperty('--color', '#504A45')
        h1[1].style.setProperty('--color', '#504A45')
        ib.style.backgroundImage = `url("${image3}")`
        p.textContent = a[2]
    })
}
page4()

let w = window.innerWidth;
if (w > 600) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3.5,
        spaceBetween: 130,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
} else {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

function cursor() {
    let cursor = document.querySelector(".cursor-ssp4")
    let back = document.querySelector(".box-sp4")
    back.addEventListener("mousemove", function(e) {
        let y = e.clientY - back.getBoundingClientRect().top
        let x = e.clientX - back.getBoundingClientRect().left
        console.log(y)
        gsap.to(cursor, {
            top: e.clientY,
            left: x,
            ease: Power2
        })
    })
    back.addEventListener("mouseenter", function() {
        gsap.to(cursor, {
            opacity: 1,
            ease: Power2,
        })
    })
    back.addEventListener("mouseleave", function() {
        gsap.to(cursor, {
            opacity: 0,
            ease: Power2,
        })
    })
}
cursor()

function locomotive() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
// locomotive()