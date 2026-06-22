import { useState } from "react";
import auth from 'auth.js'
function AuthContent() {

const [esteLogat, setEsteLogat] = useState(false)

useEffect(() => {
    if (localStorage.getItem('token')) {
        setEsteLogat(true)
    }
}, []) 
    return (
    <>
        {!esteLogat && (
    
            <>
                <Link to="/conecteazate">Conecteazate</Link>
                <Link to="/inregistreazate">Inregistreazate</Link>
            </>
        )}
        {esteLogat && (
            
            <button onClick={() => {
                localStorage.removeItem('token')
                setEsteLogat(false)
            }}>
                Iesi din cont
            </button>
        )}
    </>
)

}

export default AuthContent