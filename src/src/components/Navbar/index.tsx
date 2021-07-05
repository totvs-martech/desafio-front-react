import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <img src="/marvel.svg" alt="Marvel" height="32" className="d-inline-block align-text-top" />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className={(router.pathname === '/' || router.pathname === '/character') ? 'nav-link active' : 'nav-link'}>Characters</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/comics">
                <a className={(router.pathname === '/comics' || router.pathname === '/comic') ? 'nav-link active' : 'nav-link'}>Comics</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}