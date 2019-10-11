$("#contact-form").validate({
    rules: {
        nome: {
            required: true,
            minLength: 5
        },

        email: {
            required: true,
            email: true
        },

        mensagem: {
            required: true,
            minlength: 10
        }
    },

    messages: {
        nome: {
            required: "Parece que você não escreveu seu nome",
            minLength: "Seu nome parece estar incompleto"
        },

        email: {
            required: 'Precisamos saber seu email.',
            email: 'Email inválido.'
        },

        mensagem: {
            required: "Por favor, escreva uma mensagem!",
            minlength: "Sua mensagem deve ter no mínimo 10 caracteres."
        }
    }
});