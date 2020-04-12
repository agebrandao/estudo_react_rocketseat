require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database:process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || 'postgres',
  dialectOptions: {
    ssl: true
  },
  storage:"./tests?database.sqlite",
  operatiorsAliases: false, //desabilita o warnnig
  logging: false, // nao mostrar muitos logs
  define: {
    timestamps: true, // toda tabela tenha a coluna updateat e createat (data de atualizaçao e criação do registro)
    underscored: true, // tabela criada com underline Ex: user_group
    underscoredAll: true, // Campos criados com underline Ex: user_id
  }
}

