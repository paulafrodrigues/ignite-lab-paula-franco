import RocketseatLogo from "./RocketseatLogo";
function Footer() {
  return (
    <footer className="footer">
      <div className="footerLogo">
        <div className=" footerBox">
          <div className="footerLogoBox">
            <RocketseatLogo />
            <p>
              Rocketseat - Todos os direitos reservados
            </p>
          </div>
          <a href="#" className="text-gray-300">
            Políticas de privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;