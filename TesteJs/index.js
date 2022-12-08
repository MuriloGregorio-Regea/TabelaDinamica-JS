const addLinha = () => {
    
    const nome = new ConfigInputs().text;

    const cargo = new ConfigInputs().telefone;
    cargo.id= 'cargo-eqp'

    //buildCombox(cargo.id , [a,b,c]);
   
    

    
    const email = new ConfigInputs().email;

    const form = {
        "Nome": nome,
        "Cargo": cargo,
    };

    buildFormTable('tabelaGenerica', form);
    
};

