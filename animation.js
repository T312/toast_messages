const $ = document.querySelector.bind(document);
const successBtn = $('.btn--success') 
const errorBtn = $('.btn--error')
const infoBtn = $('.btn--info')
const warningBtn = $('.btn--warning') 

function toast({
title = '', message ='', 
type = 'info', duration = 3000
}) {
    const main = document.getElementById('toast')
    if(main) {
        const toast = document.createElement('div')
        const icons = {
            success : 'fa-circle-check',
            info : 'fa-circle-info',
            warning : 'fa-circle-exclamation',
            error :  'fa-bug',
        }
        const icon = icons[type]
        const delay = (duration/1000).toFixed(2)

        toast.classList.add('toast', `toast__${type}`)
        toast.style.animation = `slideInLeft ease .3s, fakeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="fa-solid ${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">
                    ${title}
                </h3>
                <p class="toast__msg"> ${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        main.appendChild(toast)

        // auto removeChild
        const autoRemoveid = setTimeout(() => {  
           if(toast) {
            main.removeChild(toast);
           }
        }, duration + 1000)

        // onclick remove by user
        toast.onclick = (e) => {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemoveid)
            }
        }
    }
}


successBtn.onclick = function() {
    toast({
        title: 'Success!',
        message : 'Chuẩn đét',
        type : 'success',
        duration : 4000
    })
}

errorBtn.onclick = function() {
    toast({
        title: 'Error!',
        message : 'Opp! Có lỗi rồi nè bro',
        type : 'error',
        duration : 4000
    }) 
}
warningBtn.onclick = function() {
    toast({
        title: 'Warning!',
        message : 'Opp! Cẩn thận nè bro',
        type : 'warning',
        duration : 4000
    }) 
}

infoBtn.onclick = function() {
    toast({
        title: 'Info!',
        message : 'Thông báo cháy nhà',
        type : 'info',
        duration : 4000
    }) 
}