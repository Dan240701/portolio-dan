function isMobilDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}

export const linkWhatsapp = (texto) => {
    let initLink = "https://web.whatsapp.com";

    if (isMobilDevice() && window.innerWidth <= 767) {
        initLink = "https://api.whatsapp.com";
    }

    return `${initLink}/send?phone=50587034322&text=${texto}`;
};