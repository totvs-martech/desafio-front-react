export default function Footer(){
  return(
    <footer className="bg-dark py-5">
      <div className="container">
        <p className="float-end mb-1">
          <a className="link-warning" href="#">Back to top</a>
        </p>
        <p className="mb-1 text-light">Challenge Front-end React - TOTVS Store</p>
        <p className="mb-0 text-light">
          Developed by <a className="link-info" href="https://www.linkedin.com/in/andrelnteixeira" target="_blank" rel="noreferrer">André Teixeira</a>
        </p>
      </div>
    </footer>
  );
}