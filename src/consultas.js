//Busca documentos en la coleccion donde el valor de "cantidad" sea igual a 50 o "tamaño" menor o igual a 3

db.materiales.find({$or: [{cantidad: {$eq: 50}}, {tamaño: {$lt: 3}}]})

//Busca documentos en la coleccion donde "colores" sea rojo y, o datos.tamaño sea mayor de 4 o editorial tenga un parametro que empiece por /P/

db.materiales.find({colores: "rojo", $or: [{"datos.tamaño": {$gt: 4}}, {editorial: /^P/}]})

//Busca documentos en la colección donde "cantidad" sea menor o igual de 76 y "tamaño" no sea 5

db.materiales.find({$and: [{cantidad: {$lte: 76}}, {tamaño:{$ne: 5}}]})

//Busca documentos en la coleccion donde "tamaño" sea 9 o 2 y "tipo" no sea D o C

db.materiales.find({$and: [{tamaño: {$in: [9, 2]}}, {tipo: {$nin: ["D", "C"]}}]})

//Busca documentos en la colección donde "objeto" no tenga contenga /In/ y cantidad sea mayor o igual que 24

db.materiales.find({$and: [{objeto: {$not: /In/}}, {cantidad: {$gte: 24}}]})

