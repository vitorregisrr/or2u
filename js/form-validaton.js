$("#agendamento-form").validate({
    rules: {
        nome: {
            required: true,
            minLength: 5
        },

        email: {
            required: true,
            email: true
        },

        periodo: {
            required: true,
        },

        telefone: {
            required: true,
        },
    },

    messages: {
        nome: {
            required: "Parece que você não escreveu seu nome",
            minLength: "Seu nome parece estar incompleto"
        },

        email: {
            required: 'Precisamos saber seu email',
            email: 'Email inválido'
        },

        periodo: {
            required: 'Escolha um período',
        },

        telefone: {
            required: 'Precisamos do seu telefone ou celular',
        },
    }
});