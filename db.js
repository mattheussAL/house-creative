const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function(){
  // Cria a tabela
  // db.run(`
  //   CREATE TABLE IF NOT EXISTS ideas(
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     img TEXT,
  //     title TEXT,
  //     category TEXT,
  //     description TEXT,
  //     url TEXT
  //   );
  // `)


  // // Inserir um dado na tabela
  // const query= `
  //   INSERT INTO ideas(
  //     img,
  //     title,
  //     category,
  //     description,
  //     url
  //   ) VALUES (?,?,?,?,?);
  // `

  // const values = [
  //   "https://image.flaticon.com/icons/svg/2729/2729032.svg",
  //   "Karaoke",
  //   "Entreterimento",
  //   "Ex culpa perferendis vero accusantium repellat tempora eum lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa perferendis vero accusantium repellat tempora eum, officia beatae rerum dolore sapiente deserunt labore ut asperiores excepturi neque perspiciatis doloribus totam.",
  //   "https://rocketseat.com.br"
  // ]

  // db.run(query, values, function(err){
  //   if(err) return console.log(err)

  //   console.log(this)
  // })

  //Deletar dados da tabela
  // db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err){
  //   if(err) return console.log(err)
    
  //   console.log("DELETEI", this)
  // })

  // Consultar dados na tabela
  // db.all(`SELECT * FROM ideas`, function(err, rows){
  //   if(err) return console.log(err)

  //   console.log(rows)
  // })
})

// Utilizar na aplicação

module.exports = db