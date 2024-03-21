import {tubeList} from '../Datas/tubeList'
import ListItem from './ListItem'
import '../styles/ConteneurList.css'

function ConteneurList(){
    return(
        <div className="eqg-conteneur-list">
            <ul className="eqg-tube-list">
                {tubeList.map(({id, diametre, nuance, epaisseur, hp, nombre, longueur, site, annee }) => 
                    <div key={id}>
                        <ListItem 
                            diametre={diametre}
                            nuance={nuance}
                            epaisseur={epaisseur}
                            hp={hp}
                            nombre={nombre}
                            longueur={longueur}
                            site={site}
                            annee={annee}
                        />
                    </div>
                )}
            </ul>
        </div>
    )
}
export default ConteneurList