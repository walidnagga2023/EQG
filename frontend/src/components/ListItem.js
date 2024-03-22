
import '../styles/ListItem.css'

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}
function ListItem({diametre, nuance, epaisseur, hp, longueur, site, annee}){
    
    return(
     
        <li className='lmj-plant-item' onClick={() => handleClick(diametre)}>
        <span className='lmj-plant-item-price'>{nuance}€</span>
        <span className='lmj-plant-item-cover'>{epaisseur}</span>
        
        
    </li>
    )
}
export default ListItem