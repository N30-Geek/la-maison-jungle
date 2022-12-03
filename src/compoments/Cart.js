// le module cart (pannier )

// importation des modules nécessaire

import "../styles/cart.css"

const prices = {
    // l'object price quie ressence tout les prixs de mes plantes
    monstero: 8,
    lierre: 10,
    bouqueFleurs: 15
};

const titre = "Pannier"; // Le titre de mon cart (pannier)

const plantes = [
    // La liste de pante que je possent dans mon pannier
    "Le Monstero",
    "Le lierre",
    "Bouque de fleurs"
];


function Cart() {
    return (
        <div className="lmj-cart">
            <h1>{titre.toUpperCase()}</h1>
            <ul>
                <li>{plantes[0]}: {prices.monstero}$ </li>
                <li>{plantes[1]}: {prices.lierre}$ </li>
                <li>{plantes[2]}: {prices.bouqueFleurs}$ </li>
            </ul>

            Total Prices : {prices.monstero + prices.lierre + prices.bouqueFleurs}$
        </div>
    );
}

export default Cart;