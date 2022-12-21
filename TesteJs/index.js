const addLinha = () => {
    const nome = new ConfigInputs().text;
    nome.id = "name";
    nome.placeholder = "Digite um nome";
    nome.required = true;
    
    const email = new ConfigInputs().email;
    email.id = "email";
    email.placeholder = "Digite um email";
    email.required = true;
    
    const telefone = new ConfigInputs().telefone;
    telefone.id = "phone";
    telefone.placeholder = "Ex: (11)90000-0000";
    telefone.required = true;

    const profissao = new ConfigInputs().select;
    profissao.id = "profissao";
    profissao.required = true;

    const form = {
        "Nome": nome,
        "E-mail": email,
        "Telefone": telefone,
        "Profissão": profissao
    };

    buildFormTable('tabelaGenerica', form);

};