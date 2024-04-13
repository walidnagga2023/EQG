import {tubeList} from '../Datas/tubeList'
import TubeItem from './TubeItem'
import '../styles/TubeList.css'

export default function TubeList(){
    return(
        <div >
            <table>
                <thead className="bg-white border-b">
                    <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Item</th>
                        <th>Diamètre</th>
                        <th>Nuance</th>
                        <th>Epaisseur</th>
                        <th>Pression</th>
                        <th>quantité métrique</th>
                        <th>Site</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </table>
            <ul className="eqg-tube-list">
                {tubeList.map(({id, diametre, nuance }) => 
                    <div key={id}>
                        <TubeItem diametre={diametre}
                                  nuance={nuance}
                                    />                        
                    </div>
                )}
            </ul>
        </div>
    )
}
