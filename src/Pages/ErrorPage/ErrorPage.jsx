import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page" className="text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/"><button className="btn btn-secondary text-neutral-50">Go Home</button>
            </Link>
        </div>
    );
}
