interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    costo: number;
    pv: number;
    bv: number;
    sizes: string;
    slug: string;
    tags: string[];
    title: string;
    type: string;
}


interface SeedData {
    products: SeedProduct[],
}




export const initialDatProducts: SeedData = {
    products: [
        {
            description: "LA MULTIVITAMINA SUPREMA – Con 12 vitaminas esenciales, 10 minerales esenciales y 22 concentrados de plantas que ayudan a apoyar la salud del corazón, cerebro, ojos, piel huesos y sistema inmunológico.† Contiene ingredientes naturales de plantas de todos los colores en el espectro de fitonutrientes.",
            images: [
                'doublex.jpeg',
            ],
            inStock: 7,
            costo: 2800,
            pv: 12,
            bv: 20,
            sizes: 'medium',
            slug: "double_x",
            type: 'salud',
            tags: ['x', 'vitaminas', 'nutrilite'],
            title: "Nutrilite™ Multivitamina Double X",
        },
        {
            description: "AL FINAL DEL DIA... limpia el maquillaje difícil como un profesional para tener tu piel fresa al empezar cada día.",
            images: [
                'toallitas.jpeg',
            ],
            inStock: 5,
            costo: 515,
            pv: 7,
            bv: 10,
            sizes: 'small',
            slug: "toallitas_micelar",
            type: 'higiene',
            tags: ['limpiadora', 'toallita', 'micelar'],
            title: "Toallitas limpiadoras y desmaquilladoras micelar Aristry Studio",
        },

        {
            description: "SONRISAS QUE BRILLAN: La Pasta dental con flúor de acción múltiple Glister™ limpia suave y efectivamente los dientes para prevenir las caries, eliminar la placa y blanquear, todo con la frescura de la menta certificada Nutrilite™.",
            images: [
                'glister.jpeg',
            ],
            inStock: 10,
            costo: 330,
            pv: 9,
            bv: 13,
            sizes: 'small',
            slug: "glister_large",
            type: 'higiene',
            tags: ['pasta', 'dental', 'glister'],
            title: "Pasta dental con flúor de acción múltiple Glister",
        },
    ]
}