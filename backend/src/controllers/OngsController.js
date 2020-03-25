const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);
    },
    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        console.log(id);

        return res.json({ id: id });
    }
}
/**Metodos e funções:
 * index: lista todos as ongs cadastradas no banco;
 * create: cria novos registros de ongs e retorna id da ong que acabou de se cadastrar
 */