// Defino un arreglo de objetos con productos
const productosSupermercado = [
    { id: 1, nombre: "Fósforos", marca: "Copigue", precio: 1750, unidad: 100, categoria: "Hogar" },
    { id: 2, nombre: "Pilas AA", marca: "Duracel", precio: 5590, unidad: 4, categoria: "Hogar" },
    { id: 3, nombre: "Smartphone Galaxy", marca: "Samsung", precio: 144990, unidad: 1, categoria: "Telefonia" },
    { id: 4, nombre: "Iphone 17", marca: "Apple", precio: 869990, unidad: 1, categoria: "Telefonia" },
    { id: 5, nombre: "Cerveza", marca: "Patagonia", precio: 2990, unidad: 3, categoria: "Botillera" },
    { id: 6, nombre: "Bebida Lata", marca: "Coca-Cola", precio: 4090, unidad: 6, categoria: "Botillera" },
];

// Recorro este arreglo con forEach para mostrar su contenido    
productosSupermercado.forEach(producto => {
    console.log(`El producto ${producto.nombre} de la categoria ${producto.categoria} tiene un valor de $${producto.precio} la(s) ${producto.unidad} unidad(es) `)

});

console.log("\n");
// Defino un objeto con propiedades,valores y metodos
const producto = {
    nombre: "Notebook HP OmniBook 3", // Propiedades y valores
    precio: 579990,
    stock: 27,
    realizarVenta: function (cantidad) // Metodo del objeto
    {
        if (cantidad <= this.stock) {
            const IVA = 0.19;
            const valorConIva = Math.round(this.precio * (1 + IVA)) * cantidad;
            this.stock -= cantidad // Resto la cantidad al stock actual
            console.log(`La venta de ${cantidad} unidades de: ${this.nombre} es de: $${valorConIva} y su stock despues de la venta es de: ${this.stock}`);
            return "Venta realizada correctamente";
        }
        else {
            console.log("Stock insuficiente");
            return "No se realiza la venta";
        }
    }
}

console.log(producto.realizarVenta(6)); // Llamo el metodo del objeto con un parametro