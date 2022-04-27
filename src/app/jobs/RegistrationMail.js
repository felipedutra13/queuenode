import Mail from '../lib/Mail.js';

export default {
    key: 'RegistrationMail',
    async handle({ data }) {

        const { user } = data;

        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com.br',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${user.name}, bem-vindo ao sistema de filas`
        });
    }
}