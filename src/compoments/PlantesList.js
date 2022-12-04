import { plantList } from '../datas/plantList'
import CareScale from './CareScale'
import '../styles/ShoppingList.css'

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    plant.isSpecialOffer ?

                        <li key={plant.id} className='lmj-plant-item'>
                            <div className="lmj-sales">
                                {plant.name}{plant.isBestSale ? <span>🔥</span> : null}
                                <CareScale scaleValue={plant.light} />
                            </div>
                        </li>
                        : <li key={plant.id} className='lmj-plant-item'>
                            {plant.name}{plant.isBestSale ? <span>🔥</span> : null}
                            <CareScale scaleValue={plant.light} />
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;