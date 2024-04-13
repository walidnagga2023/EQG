export default function TubeItem({diametre, nuance,id}){
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{diametre}</td>
                        <td>{nuance}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    )
}