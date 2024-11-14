
import {Link} from 'react-router-dom';

export const ErrorPage = () => {
    return (
      <main>
        <h2>404: Takovou stránku tu nemáme</h2>
        <p><Link to="/">Zpět na hlavní stránku</Link></p>
      </main>
    );
  };