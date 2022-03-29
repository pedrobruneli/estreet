import "./styles.css";
import logo from "assets/logo.png";

function Footer_Info() {
    return (
        <div className="footer-info">
            <img src={logo} />
            <p>Políticas da loja - Institucional - Ajuda e suporte - Dúvidas frequentes</p>
            <p>ESTREET COMÉRCIO DE ROUPAS LTDA</p>
            <p>CNPJ: 40.659.796/0001-03</p>
            <p>Todos os direitos reservados.</p>
            <p></p><p></p>
            <p>ESCRITÓRIO:</p>
            <p>Alameda Araguaia, 2044, Sala 1201, Torre 1</p>
            <p>Barueri - SP</p>
            <p>CEP: 06455-906</p>
            <p></p><p></p>
            <p>ATENDIMENTO:</p>
            <p>E-MAIL: contato@estreet.com.br</p>
            <p>TELEFONE: (11) 3273-9173</p>
            <p></p><p></p>
        </div>
    );
}

export default Footer_Info;