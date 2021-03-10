//Modais 
const Modals = {
    openGeral () {
        document.querySelector('.modal').classList.add('active');
    },
    closeGeral () {
        document.querySelector('.modal').classList.remove('active');
    },
    closePersonal () {
        document.querySelector('.modal-overview').classList.add('desactive');
    },
    openDelete () {
        document.querySelector('.delete-Naver').classList.add('active');
    },
    openDeleteCancel () {
        document.querySelector('.delete-Naver').classList.remove('active');
        document.querySelector('.modal-overview').classList.remove('desactive');
    }
}