const arrayMiniNotices = [
    {
        linkNotice: 'https://g1.globo.com/tecnologia/noticia/2023/06/28/microsoft-teams-apresenta-instabilidade-na-manha-desta-quarta.ghtml',

        cardImg: 'https://s2-g1.glbimg.com/DvpNTogu6Ig8p4oLhJP7u57iDIo=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/9/n/wNYyRtRiCzgB5gyjaSVQ/17da9a60-a709-11ed-96fd-454d269ebe8d.jfif' ,

        altImg: 'Microsoft Teams',

        tittleCard: ' Microsoft Teams apresenta instabilidade global na manhã desta quarta (28/06).',

        descriptionCard: '',

    },

    {
        linkNotice: 'https://g1.globo.com/tecnologia/noticia/2023/03/08/hackers-causaram-prejuizos-a-cerca-de-25-das-empresas-brasileiras-em-2022-diz-pesquisa.ghtml',

        cardImg: 'https://s2-g1.glbimg.com/Vo9n1UdeaUVfSISB0rZN7l59bLA=/0x0:5568x3712/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/s/8/3lGjCjSm2rfee1HJXBfA/age20230119042.jpg' ,

        altImg: 'Lojas Americanas',

        tittleCard: 'Hackers causaram prejuízos a cerca de 25% das empresas brasileiras em 2022, diz pesquisa.',

        descriptionCard: 'Clique e saiba mais',
    },

    {
        linkNotice: 'https://www.tecmundo.com.br/internet/265777-youtube-impede-reproducao-videos-bloqueadores-de-anuncio.htm',

        cardImg: 'https://tm.ibxk.com.br/2023/06/29/29105714966076.jpg?ims=1120x420' ,

        altImg: 'Logo do YouTube',

        tittleCard: 'YouTube impede reprodução de vídeos de quem usa bloqueadores de anúncio.',

        descriptionCard: '',
    },

    {
        linkNotices: 'https://olhardigital.com.br/2020/11/03/noticias/pesquisadores-dizem-que-o-google-usa-recaptcha-para-captar-dados/',
        cardImg: 'https://proxy.olhardigital.com.br/wp-content/uploads/2020/11/20201103064551.jpg',
        altImg: 'Imagem da verificação: "Não sou um robô"',
        tittleCard: 'Pesquisadores dizem que o Google usa reCAPTCHA para coletar dados.',
        descriptionCard: '',
    },

    /*  {
        linkNotices: '',
        cardImg: '',
        altImg: '',
        tittleCard: '',
        descriptionCard: '',
    },*/
    
    ]

for (let index = 0; index < arrayMiniNotices.length; index++) {

    // criar elemento (foi criado uma div)
    let divMiniNotices = document.createElement('div')
        
    // a div criada recebeu uma classe
    divMiniNotices.className = 'card-container-2'
        
    // manipular elemento (adicionar conteúdo ao elemento selecionado)
        
    divMiniNotices.innerHTML = `
        <a class="link-notices" target="_blank" href="${arrayMiniNotices[index].linkNotice}">

            <img class="img-card" src= "${arrayMiniNotices[index].cardImg}" alt="${arrayMiniNotices[index].altImg}">

            <div class="card-info">
                <h3 class="tittle_card">
                    ${arrayMiniNotices[index].tittleCard}
                </h3>
            </div>
        </a>
    `

// adicionar elemento na página
let containerNoticesPosAds2 = document.querySelector('.container_notices_pos_ads')
containerNoticesPosAds2.appendChild(divMiniNotices)
}

