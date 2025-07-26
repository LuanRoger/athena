export default function LinkGroup() {
  return (
    <div className="footer lg:footer-horizontal">
      <nav>
        <h6 className="footer-title">Institucional</h6>
        <a className="link link-hover">Sobre nós</a>
        <a className="link link-hover">Termos de uso</a>
        <a className="link link-hover">Portal da privacidade</a>
        <a className="link link-hover">Trabalhe conosco</a>
      </nav>

      <nav>
        <h6 className="footer-title">Desenvolvimento</h6>
        <a
          className="link link-hover"
          href="https://github.com/LuanRoger/athena"
        >
          GitHub
        </a>
      </nav>

      <nav>
        <h6 className="footer-title">Responsáveis</h6>
        <a className="link link-hover" href="https://github.com/LuanRoger">
          Alexsandro Martins
        </a>
        <a className="link link-hover" href="https://github.com/jonaferreir4">
          Jona Ferreira
        </a>
        <a className="link link-hover" href="https://github.com/LuanRoger">
          Luan Roger
        </a>
        <a className="link link-hover" href="https://github.com/csvitor-dev">
          Vitor Costa
        </a>
        <a className="link link-hover" href="https://github.com/LuanRoger">
          Yvens Almeida
        </a>
      </nav>
    </div>
  );
}
