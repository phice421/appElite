import Logo from '../../assets/logo.png';
import pao from '../../assets/produtos/pao.webp';
import cocaCola2 from '../../assets/produtos/cocaCola2.jpg';
import frangoAssado from '../../assets/produtos/frangoAssado.jpg';


const produto = {
    topo: {
        titulo: "Confeitaria",
    },
    detalhes: {
        nome: "Torta Banoffe",
        logo: Logo,
        detalhes: "Deliciosa torta de banoffe, banana com doce de leite, finalizado com chantily e canela!",
        preco: "R$ 65,00",
        botao: "adc a lista",
    },
    itens: {
        titulo: "Itens do combo:",
        lista: [
            {
                nome: "10 pães franceses",
                imagem: pao
            },
            {
                nome: "1 frango assado",
                imagem: frangoAssado
            },
            {
                nome: "1 Coca cola",
                imagem: cocaCola2
            },
        ]

    }
}

export default produto;