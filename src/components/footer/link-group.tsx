export default function LinkGroup() {
  return (
    <div className="footer footer-horizontal my-5 lg:my-0">
      <nav>
        <h6 className="footer-title">Institucional</h6>
        <a className="link link-hover" href="#">
          Sobre nós
        </a>
        <a className="link link-hover" href="#">
          Termos de uso
        </a>
        <a className="link link-hover" href="#">
          Portal da privacidade
        </a>
        <a className="link link-hover" href="#">
          Trabalhe conosco
        </a>
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
        <a
          className="link link-hover"
          href="https://github.com/alexsandromartin"
        >
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
        <a className="link link-hover" href="https://github.com/yvenscivel">
          Yvens Almeida
        </a>
      </nav>
    </div>
  );
}
