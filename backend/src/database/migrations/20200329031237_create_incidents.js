
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table){
    table.increments(); // Chave primaria já com o incremento = ID

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    // Referencia da tabela 'ongs' relacionada
    table.string('ong_id').notNullable();

    // Criando Chave Estrangeira para referenciar a Chave Primaria da Tabela relacionada
    table.foreign('ong_id').references('id').inTable('ongs');        
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
