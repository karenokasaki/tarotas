import { Link } from "react-router-dom";

function ErrorPage() {
    return ( 
        <div>
            Error: Essa página não existe. 

            <Link to="/">Voltar para Home</Link>
        </div>
     );
}

export default ErrorPage;