//Creo la coleccion materiales e inserto documentos usando un InsertMany
db.materiales.insertMany ([
    {objeto: "Libro", cantidad: 76, datos: {paginas: 89, tamaño: 7, editorial: "InfoPara" }, colores: ["rojo", "azul"] },
    {objeto: "Libro", cantidad: 9, datos: {paginas: 200, tamaño: 9, editorial: "InfoPara" }, colores: ["rojo", "azul"] },
    {objeto: "Libro", cantidad: 32, datos: {paginas: 89, tamaño: 5, editorial: "InfoPara" }, colores: ["rojo", "azul"] },
    {objeto: "Libro", cantidad: 9, datos: {paginas: 145, tamaño: 2, editorial: "Anpara" }, colores: ["verde", "azul"] },
    {objeto: "Libro", cantidad: 98, datos: {paginas: 8, tamaño: 5, editorial: "Anpara" }, colores: ["verde", "negro"] },
    {objeto: "Libro", cantidad: 50, datos: {paginas: 56, tamaño: 6, editorial: "Manopor" }, colores: ["violeta", "amarillo"] },
    {objeto: "Libro", cantidad: 50, datos: {paginas: 21, tamaño: 8, editorial: "AnPara" }, colores: "negro" },
    {objeto: "Libro", cantidad: 2, datos: {paginas: 67, tamaño: 6, editorial: "InfoPara" }, colores: "rojo"},
    {objeto: "Libro", cantidad: 69, datos: {paginas: 76, tamaño: 9, editorial: "NeInfoCarsEs" }, colores: ["blanco", "azul"] },
    {objeto: "Lapiz", cantidad: 40, tamaño: 9, tipo: "C"},
    {objeto: "Lapiz", cantidad: 76, tamaño: 2, tipo: "A"},
    {objeto: "Lapiz", cantidad: 45, tamaño: 5, tipo: "D"},
    {objeto: "Lapiz", cantidad: 4, tamaño: 8, tipo: "C"},
    {objeto: "Lapiz", cantidad: 73, tamaño: 1, tipo: "A"},
    {objeto: "Lapiz", cantidad: 76, tamaño: 6, tipo: "D"},
    {objeto: "Goma", cantidad: 3, tamaño: 2, color: "amarillo"},
    {objeto: "Goma", cantidad: 67, tamaño: 3, color: "negro"},
    {objeto: "Goma", cantidad: 16, tamaño: 2, color: "negro"},
    {objeto: "Goma", cantidad: 92, tamaño: 6, color: "violeta"},
])

