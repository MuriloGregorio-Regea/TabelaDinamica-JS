const addLinha = () => {
    
    /*
    const nome = new ConfigInputs().text;
    nome.placeholder = "Digite um nome.";
    nome.list = "Convidados"
    nome.pattern = "[A-z]{10}";
    nome.required = true;
    */
    
    /*
    const idade = new ConfigInputs().number;
    idade.max = 100;
    idade.min = 0;
    idade.value = 0;
    idade.step = 1;
    idade.placeholder = "Digite a idade";
    idade.list = "Primos";
    idade.required = true;
    */

    /*
    const data = new ConfigInputs().date;
    data.max = "2022-12-31";
    data.min = "2022-01-01";
    data.required = true;
    */

    /*
    const datetime = new  ConfigInputs().datetime;
    datetime.max = "2022-12-31 23:59";
    datetime.min = "2022-12-31 11:40";
    datetime.required = true;
    */

    /*
    const email = new ConfigInputs().email;
    email.placeholder = "Digite um email";
    email.pattern = "{A-z, 0-9}";
    email.required = true;
    */

    /*
    const file = new ConfigInputs().file;
    file.required = true;
    */

    /*
    const mesAno = new ConfigInputs().mesAno;
    mesAno.required = true;
    mesAno.min = "2022-06";
    mesAno.max = "2022-12";
    */

    /*
    const telefone = new ConfigInputs().telefone;
    telefone.maxlength = 9;
    telefone.minlength = 8;
    telefone.pattern = "[0-9]{5}-[0-9]{4}";
    telefone.placeholder = "90000-0000";
    telefone.required = true;
    telefone.value = "96111210";
    */

    /*
    const hora = new ConfigInputs().hora;
    hora.required = true;
    hora.min = "12:00";
    hora.max = "15:00";
    */

    /*
    const select = new ConfigInputs().select;
    select.multiple = true;
    select.required = true;
    select.size = 3;
    select.value = "Algo";
    */

    /*
    const textArea = new ConfigInputs().textArea;
    textArea.cols = 56;
    textArea.rows = 3;
    textArea.placeholder = "Escreva algo";
    textArea.required = true;
    textArea.value = "Algo";
    textArea.maxlength = 250;
    */

    const form = {
        "Arquivos": file
    };

    buildFormTable('tabelaGenerica', form);
    
};

