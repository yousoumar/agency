/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="column first">
          <a href="" className="brand">
            <img src="/logo.svg" alt="" />
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo urna, iaculis.
          </p>
        </div>
        <div className="column second">
          <a target="_blank" href="https://www.google.com/maps/" rel="noreferrer">
            10 avenue de Mauris, 75019 Paris, France
          </a>
          <div className="row">
            <div className="tel">
              <a href="tel:+33 1 00 00 00 00">+33 1 00 00 00 00 </a>
            </div>
            <div className="socials">
              <a href="">
                <img src="/linkedin.svg" alt="" />
              </a>
              <a href="">
                <img src="/instagram.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="column third">
          <a href="">Réalisations</a>
          <a href="">L’équipe</a>
          <a href="">Services</a>
          <a href="">L’agence</a>
        </div>
      </div>
      <div className="copyright">
        © Agency 2021 - Conçu & réalisé par{" "}
        <a href="https://github.com/yousoumar/" target="_blank" rel="noreferrer">
          Youssouf Oumar
        </a>
      </div>
    </footer>
  );
}
