export const MENU_DATA = {
  restaurant: {
    name: "PÚA",
    subtitle: "Brasa y Vino",
    tagline: "Menú Gastronómico & Mixología de Autor",
    description: "Cortes de carne Angus a las brasas, maridajes exclusivos, cocina de mar y mixología contemporánea.",
    logo: "/assets/images/material_pua/PUA_LOGO_transparent.png",
    phone: "Reserva en Mesa",
    instagram: "@puabrasayvino"
  },
  sections: [
    {
      id: "platillos",
      name: "Sección I: Platillos",
      shortName: "Platillos",
      icon: "Utensils",
      description: "Gastronomía a las brasas, entradas finas, cortes prime y creaciones de autor.",
      categories: [
        {
          id: "maridaje",
          name: "Maridaje",
          icon: "Wine",
          items: [
            {
              id: "mar-1",
              name: "Queso Camembert Rostizado",
              price: 330,
              description: "Pieza de suave camembert arropado de chutney de pera, frutas del bosque, jamón serrano y arúgula.",
              tags: ["Maridaje", "Chef Pick"],
              pairing: "Casa Madero 2V / Chardonnay",
              image: "/assets/images/material_pua/dish_1.jpg"
            },
            {
              id: "mar-2",
              name: "Jamón Ibérico (100 grs.)",
              price: 345,
              description: "Corte fino realizado al momento en mesa, que resalta la textura y complejidad aromática de este jamón de alta calidad. Su curación prolongada de 24 meses revela matices intensos, untuosos y delicadamente salinos, ofreciendo una experiencia auténtica y refinada.",
              tags: ["Curado 24 Meses", "Servicio en Mesa", "Premium"],
              pairing: "Casa Madero Cabernet Sauvignon / Vino Tinto Reserva",
              image: "/assets/images/material_pua/dish_2.jpg"
            },
            {
              id: "mar-3",
              name: "Tapa Mediterránea (4 piezas)",
              price: 210,
              description: "Base de delicada salsa italiana acompañada de jitomate deshidratado, arúgula fresca, alcaparras y jamón ibérico de excelente curación. Una armonía de sabores del viejo continente.",
              tags: ["4 piezas", "Entrante"],
              pairing: "Negroni o Aperol Spritz",
              image: "/assets/images/material_pua/dish_3.jpg"
            },
            {
              id: "mar-4",
              name: "Tapa de Salmón (4 piezas)",
              price: 210,
              description: "Salmón sellado a las finas hierbas, servido con un dip cremoso de chipotle especiado y cebolla desflemada. Una propuesta sutilmente ahumada con matices delicados.",
              tags: ["4 piezas", "Mar"],
              pairing: "Brisa del Mar / Casa Madero Chardonnay",
              image: "/assets/images/material_pua/dish_4.jpg"
            },
            {
              id: "mar-5",
              name: "Tapa Púa (4 piezas)",
              price: 210,
              description: "Fina combinación de manzana caramelizada y queso camembert. Un contraste entre dulzura y suavidad que seduce al paladar con cada bocado.",
              tags: ["4 piezas", "Insignia"],
              pairing: "Martini Tropical / Clericot",
              image: "/assets/images/material_pua/dish_5.jpg"
            },
            {
              id: "mar-6",
              name: "Tabla de Quesos",
              price: 375,
              description: "Cuidadosa selección de quesos, frutas de temporada y frutos secos.",
              tags: ["Para Compartir", "Artesanal"],
              pairing: "Casa Madero 3V",
              image: "/assets/images/material_pua/dish_6.jpg"
            }
          ]
        },
        {
          id: "entradas",
          name: "Entradas",
          icon: "Flame",
          items: [
            {
              id: "ent-1",
              name: "Portobellos",
              price: 280,
              description: "Selección a elegir: • Gratinados con puntas de picaña y cebolla caramelizada • Horneados con mantequilla, higos, jamón serrano y miel de agave • Horneados con chimichurri y pesto, servidos con cherrys confitados, albahaca y parmesano.",
              tags: ["3 Preparaciones", "Gourmet"],
              image: "/assets/images/material_pua/dish_7.jpg"
            },
            {
              id: "ent-2",
              name: "Espárragos",
              price: 185,
              description: "Envueltos en tocino, con queso parmesano y reducción de balsámico y vino tinto.",
              tags: ["Clásico Brasa"],
              image: "/assets/images/material_pua/dish_8.jpg"
            },
            {
              id: "ent-3",
              name: "Betabel Rostizado",
              price: 240,
              description: "Gajos de betabel rostizado glaseado con reducción de balsámico, servido sobre cama de queso de cabra.",
              tags: ["Vegetariano"],
              image: "/assets/images/material_pua/dish_9.jpg"
            },
            {
              id: "ent-4",
              name: "Coliflor al Huichol",
              price: 230,
              description: "Barnizada en alioli de huichol, montada sobre una cama de mayo de ajo rostizado.",
              tags: ["Picante Sutil"],
              image: "/assets/images/material_pua/dish_10.jpg"
            },
            {
              id: "ent-5",
              name: "Chicharrón de la Ramos",
              price: 350,
              description: "Frito al momento, acompañado de guacamole y totopos.",
              tags: ["Para compartir", "Favorito"],
              image: "/assets/images/material_pua/dish_11.jpg"
            },
            {
              id: "ent-6",
              name: "Tuétanos con Pulpo",
              price: 360,
              description: "Exquisito hueso de res horneado con salsas negras con pulpo al ajillo receta secreta de la casa, acompañado de tortillas y salsa de chile ajo.",
              tags: ["Tiempo de espera", "Imperdible", "Mar y Tierra"],
              waitTime: true,
              image: "/assets/images/material_pua/dish_12.jpg"
            },
            {
              id: "ent-7",
              name: "Ola de Aguacate",
              price: 265,
              description: "Láminas de aguacate rellenas de refrescante encurtido tropical de salmón fresco acompañado de salsas frutales.",
              tags: ["Tiempo de espera", "Fresco"],
              waitTime: true,
              image: "/assets/images/material_pua/dish_13.jpg"
            },
            {
              id: "ent-8",
              name: "Chicharrón de Pulpo",
              price: 350,
              description: "Crujiente pulpo frito al momento con un toque de alioli de habanero con guacamole.",
              tags: ["Crujiente", "Mar"],
              image: "/assets/images/pulpo_brasa.png"
            },
            {
              id: "ent-9",
              name: "Aguachile de Rib Eye",
              price: 295,
              description: "Rib eye sellado y bañado en salsas negras de la casa, arúgula, jalapeño, rábano sandía y cebolla encurtida.",
              tags: ["Corte Sellado", "Salsas Negras"],
              image: "/assets/images/material_pua/dish_14.jpg"
            }
          ]
        },
        {
          id: "sopas",
          name: "Sopas & Cremas",
          icon: "Soup",
          items: [
            {
              id: "sop-1",
              name: "Crema de Espárragos",
              price: 180,
              description: "Espárrago al dente preparado tradicionalmente con crema dulce y notas de almendra.",
              image: "/assets/images/material_pua/dish_15.jpg"
            },
            {
              id: "sop-2",
              name: "Crema de Arándano Deshidratado",
              price: 180,
              description: "Dulce crema de arándano deshidratado especiada, con un toque crujiente de hojaldre y almendra.",
              tags: ["De Autor"]
            },
            {
              id: "sop-3",
              name: "Sinfonía de Cremas",
              price: 250,
              description: "Dúo de cremas de elote y chile poblano servida en pan de masa madre y un toque de parmesano.",
              tags: ["En Masa Madre", "Especialidad"],
              image: "/assets/images/material_pua/dish_16.jpg"
            },
            {
              id: "sop-4",
              name: "Sopa Toscana",
              price: 250,
              description: "Tradicional preparación de tocino, papas cambray, picaña sofrita, servida en fondo especial de la casa y crotones de parmesano."
            },
            {
              id: "sop-5",
              name: "Sopa de Cebolla",
              price: 150,
              description: "Tradicional sopa francesa de cebollas caramelizadas, acompañada de crujiente crotón gratinado con parmesano.",
              tags: ["Tradicional"]
            },
            {
              id: "sop-6",
              name: "Jugo de Carne",
              price: 185,
              description: "Jugo de res acompañado de hortalizas del huerto y delicados trozos de picaña de primera calidad.",
              tags: ["Picaña Prime"],
              image: "/assets/images/material_pua/dish_17.jpg"
            }
          ]
        },
        {
          id: "ensaladas",
          name: "Ensaladas",
          icon: "Salad",
          items: [
            {
              id: "ens-1",
              name: "Ensalada de Betabel con Manzana",
              price: 200,
              description: "Acompañada de arúgula en vinagreta de naranja, aderezo de yogurth con eneldo y coronada con jamón serrano.",
              image: "/assets/images/material_pua/dish_18.jpg"
            },
            {
              id: "ens-2",
              name: "Ensalada de Frutos Rojos",
              price: 200,
              description: "Selección de lechugas, aderezo miel mostaza, selección de frutos rojos, queso de cabra y frutos secos.",
              image: "/assets/images/material_pua/dish_19.jpg"
            },
            {
              id: "ens-3",
              name: "César Natural",
              price: 220,
              description: "Selección de hojas de lechuga fresca, bañadas en su clásico aderezo, queso parmesano y crotones."
            },
            {
              id: "ens-4",
              name: "César con Pollo o Camarón",
              price: 290,
              description: "Clásica ensalada césar acompañada de proteína a elegir: pollo a las brasas o camarón al grill.",
              image: "/assets/images/material_pua/dish_20.jpg"
            }
          ]
        },
        {
          id: "cortes",
          name: "Cortes de Carne",
          icon: "Beef",
          subtitle: "* Todos los cortes van acompañados de guarnición a elección.",
          items: [
            {
              id: "cor-1",
              name: "Cowboy (Calidad angus 800 grs.)",
              price: 1300,
              description: "Corte grueso Angus con hueso, sartenado a la mantequilla de romero y asado a las brasas.",
              tags: ["Angus 800g", "Guarnición Incluida"],
              image: "/assets/images/tomahawk_grill.png"
            },
            {
              id: "cor-2",
              name: "Porter House (Calidad angus 1100 grs.)",
              price: 2100,
              description: "Imponente corte que reúne New York y Tenderloin en un solo hueso en forma de T.",
              tags: ["Angus 1100g", "Tiempo de espera", "Guarnición Incluida"],
              waitTime: true,
              image: "/assets/images/material_pua/dish_21.jpg"
            },
            {
              id: "cor-3",
              name: "Tomahawk (Calidad angus 1500 grs.)",
              price: 2700,
              description: "El rey de la parrilla Angus, madurado y flameado a la mesa con mantequilla de finas hierbas.",
              tags: ["Angus 1500g", "Tiempo de espera", "Flameado en Mesa"],
              waitTime: true,
              image: "/assets/images/tomahawk_grill.png"
            },
            {
              id: "cor-4",
              name: "Picaña (Calidad angus 400 grs.)",
              price: 550,
              description: "Jugosa picaña a la espada con capa de grasa crujiente y sellado perfecto.",
              tags: ["Angus 400g", "Guarnición Incluida"],
              image: "/assets/images/material_pua/dish_22.jpg"
            },
            {
              id: "cor-5",
              name: "Arrachera (Calidad angus 400 grs.)",
              price: 450,
              description: "Suave arrachera marinada en hierbas y cítricos, suave y llena de jugo.",
              tags: ["Angus 400g", "Guarnición Incluida"],
              image: "/assets/images/material_pua/dish_23.jpg"
            },
            {
              id: "cor-6",
              name: "New York (Calidad angus 400 grs.)",
              price: 750,
              description: "Corte clásico con intenso marmoleo Angus y sabor concentrado.",
              tags: ["Angus 400g", "Guarnición Incluida"]
            },
            {
              id: "cor-7",
              name: "Rib Eye (Calidad angus 550 grs.)",
              price: 850,
              description: "Corte suave con el marmoleo característico del Rib Eye a fuego de brasas.",
              tags: ["Angus 550g", "Guarnición Incluida"],
              image: "/assets/images/steak_vino_tinto.jpg"
            }
          ]
        },
        {
          id: "pastas",
          name: "Pastas",
          icon: "CookingPot",
          items: [
            {
              id: "pas-1",
              name: "Fettuccini a la Naranja",
              price: 350,
              description: "En crema de naranja de la casa, atún sellado con costra de ajonjolí y espárragos.",
              image: "/assets/images/material_pua/dish_24.jpg"
            },
            {
              id: "pas-2",
              name: "Fettuccini al Pesto",
              price: 350,
              description: "Con salmón horneado, pulpo y mix de nueces selectas.",
              image: "/assets/images/material_pua/dish_25.jpg"
            },
            {
              id: "pas-3",
              name: "Fettuccini Púa",
              price: 290,
              description: "Salsa blanca con parmesano reggiano, puntas de arrachera y espárragos salteados.",
              tags: ["Insignia", "Recomendado"],
              image: "/assets/images/fetuccini_pua.jpg"
            },
            {
              id: "pas-4",
              name: "Fettuccini con Camarones",
              price: 290,
              description: "Pasta fettuccini al dente, bañado en un cremoso bisque de camarón. Un clásico con sabor del mar.",
              image: "/assets/images/material_pua/dish_26.jpg"
            },
            {
              id: "pas-5",
              name: "Pasta de Trufa",
              price: 430,
              description: "Pasta al dente envuelta en el perfume del aceite trufado, con nuez tostada y láminas de trufa de verano bañada con queso parmesano.",
              tags: ["Trufa de Verano", "Gourmet"]
            },
            {
              id: "pas-6",
              name: "Pasta Carbonara",
              price: 350,
              description: "Pasta con crujiente tocino y una sedosa mezcla de huevo especiado y bañada con queso parmesano."
            }
          ]
        },
        {
          id: "mar",
          name: "Del Mar",
          icon: "Fish",
          items: [
            {
              id: "mar-10",
              name: "Perla del Mar",
              price: 360,
              description: "Combinación de mariscos, pulpo, camarón y robalo sobre cama de pepino fresco y salsa confitada de habanero con toques de chiles secos.",
              image: "/assets/images/material_pua/dish_27.jpg"
            },
            {
              id: "mar-11",
              name: "Carmesí",
              price: 360,
              description: "Mix de mariscos, pulpo, camarón y robalo servido en una salsa hecha de flor de jamaica y chiles secos servido con cebollas encurtidas."
            },
            {
              id: "mar-12",
              name: "Aguachile Verde de Camarón",
              price: 295,
              description: "Camarón encurtido en corte mariposa, cebolla morada, pepino, rábano sandía y salsa verde de aguachile.",
              image: "/assets/images/material_pua/dish_28.jpg"
            },
            {
              id: "mar-13",
              name: "Tiradito de Atún",
              price: 275,
              description: "Opciones de preparación: • Finas láminas de atún fresco con sandía, aderezo de chipotle, cremoso de aguacate, vinagreta de tamarindo y queso de cabra. • Filete de atún en láminas, encurtido en reducción de soya/limón, arúgula, rábano sandía y ajonjolí tostado."
            },
            {
              id: "mar-14",
              name: "Tostadas de Robalo",
              price: 250,
              description: "Ceviche de robalo encurtido con piña, naranja y cilantro servido en crujiente tostada hecha en casa y un toque cremoso de aguacate."
            },
            {
              id: "mar-15",
              name: "Pulpo Brasa",
              price: 585,
              description: "Pulpo marinado con mayonesa y chipotle cocinado al grill acompañado con una salsa chili garlic.",
              tags: ["Al Grill", "Especialidad"],
              image: "/assets/images/pulpo_brasa.png"
            },
            {
              id: "mar-16",
              name: "Salmón en Bálsamo de Tinto",
              price: 385,
              description: "Horneado y barnizado en mantequilla, bañado en bálsamo de vino tinto y chiles secos, acompañado de papas cambray a las finas hierbas y vino blanco."
            },
            {
              id: "mar-17",
              name: "Salmón Mantequilla de Tuétano",
              price: 385,
              description: "Horneado con mantequilla de tuétano, puré de coliflor, y reducción de espárragos y jitomate cherry."
            },
            {
              id: "mar-18",
              name: "Cola de Langosta (500 grs.)",
              price: 1550,
              description: "Realizada con un delicado toque de vino blanco, mantequilla de finas hierbas y salsa de soya.",
              tags: ["500 grs", "Tiempo de espera", "Premium"],
              waitTime: true,
              image: "/assets/images/material_pua/dish_29.jpg"
            },
            {
              id: "mar-19",
              name: "Ceviche de Coco",
              price: 330,
              description: "Cuadros de atún, mango y coco, en nuestra salsa de coco servidos con un cremoso de aguacate, cilantro y rábano sandía."
            }
          ]
        },
        {
          id: "especiales",
          name: "Especiales de la Casa",
          icon: "Sparkles",
          items: [
            {
              id: "esp-1",
              name: "Cordero",
              price: 620,
              description: "3 Formas de preparación: • Cocinado en salsa de vino tinto acompañado de espárragos y cremoso de papa. • Horneado a las finas hierbas servido en cama de ensalada de arúgula y espárragos, papas y cherrys confitados acompañado de gravy de vino blanco. • Sellado en mantequilla de finas hierbas, papas cambray y portobellos salteados con salsa de mostaza y naranja agridulce.",
              tags: ["3 Preparaciones", "Gourmet"],
              image: "/assets/images/material_pua/dish_30.jpg"
            },
            {
              id: "esp-2",
              name: "Coco Relleno",
              price: 420,
              description: "Coco tierno relleno con una selecta combinación de mariscos y pimientos, bañados en una suave salsa bechamel y gratinado con queso."
            },
            {
              id: "esp-3",
              name: "Tacos de Langosta",
              price: 450,
              description: "Langosta de primera calidad, en una sedosa salsa cremosa de queso crema y chipotle, acompañada con tortillas de harina y decorada con finos cacahuates.",
              tags: ["Langosta Prime"]
            },
            {
              id: "esp-4",
              name: "Beef Wellington",
              price: 590,
              description: "Exquisito filete mignon cocinado en mantequilla de ajo y romero, envuelto en masa hojaldre con una mezcla de semillas tostadas y suave puré de papa, finalizado con gravy de champiñones.",
              tags: ["Tiempo de espera", "Hojaldre"],
              waitTime: true,
              image: "/assets/images/material_pua/dish_31.jpg"
            },
            {
              id: "esp-5",
              name: "Wellington Púa",
              price: 550,
              description: "Exquisito filete mignon cocinado en mantequilla de ajo y romero, combinado con una mezcla de semillas tostadas, suave puré de papa, finalizado con gravy de champiñones y hojaldre crujiente.",
              tags: ["Insignia"]
            },
            {
              id: "esp-6",
              name: "Salmón Almendrado",
              price: 475,
              description: "Insólita conjugación de salmón servido sobre una crema de almendras al vino blanco, acompañado de un dúo de puré de papa y camote."
            },
            {
              id: "esp-7",
              name: "Rib Eye en Vino Tinto",
              price: 650,
              description: "Rib eye acompañado con una suave combinación de puré de chícharo y salsa de vino tinto, servido con espárragos trufados y crocante de parmesano.",
              tags: ["Alta Cocina"],
              image: "/assets/images/steak_vino_tinto.jpg"
            },
            {
              id: "esp-8",
              name: "Pollo de Leche Agridulce",
              price: 490,
              description: "Pollo horneado relleno de frutas aromatizadas, acompañado de papas al romero y plátano confitado con salsa de frutos rojos, durazno y naranja.",
              tags: ["Tiempo de espera"],
              waitTime: true
            },
            {
              id: "esp-9",
              name: "Pollo de Leche al Coco y Anís",
              price: 490,
              description: "Horneado en mantequilla de hierbas y jengibre, relleno de nueces, servido con salsa cremosa de coco y anís.",
              tags: ["Tiempo de espera"],
              waitTime: true
            },
            {
              id: "esp-10",
              name: "Parrillada (Para 3 personas)",
              price: 1500,
              description: "Combinación de rib eye, arrachera y picaña, complementada con chiles toreados, queso fundido con chistorra, papas cambray y elote dorado.",
              tags: ["Para 3 Personas", "Brasas"],
              image: "/assets/images/material_pua/dish_32.jpg"
            },
            {
              id: "esp-11",
              name: "Parrillada Mar y Tierra (Para 3 personas)",
              price: 1700,
              description: "Combinación de rib eye y arrachera con camarones al ajillo y pulpo a las brasas, complementada con chiles toreados, papas cambray y elote dorado.",
              tags: ["Para 3 Personas", "Mar y Tierra"]
            },
            {
              id: "esp-12",
              name: "Filete Mignon",
              price: 450,
              description: "Filete mignon cocinado en mantequilla de romero, bañado en salsa de vino tinto, acompañado de cremoso de papa y espárragos."
            }
          ]
        },
        {
          id: "hamburguesas",
          name: "Hamburguesas",
          icon: "Beef",
          items: [
            {
              id: "ham-1",
              name: "Clásica",
              price: 245,
              description: "Carne 100% de res, calidad prime importada, con pan brioche, queso manchego, tocino crispy, aderezo mayonesa, chipotle, pepinillos, lechuga y jitomate.",
              tags: ["Res Prime"]
            },
            {
              id: "ham-2",
              name: "Doble Queso",
              price: 285,
              description: "Queso chihuahua, parmesano con cebolla caramelizada, mayonesa chipotle, lechuga y jitomate.",
              tags: ["Doble Queso"]
            }
          ]
        },
        {
          id: "tacos",
          name: "Tacos",
          icon: "UtensilsCrossed",
          items: [
            {
              id: "tac-1",
              name: "Lorenzanas (2 Piezas)",
              price: 220,
              description: "Arrachera, chistorra y queso chihuahua sobre tortilla de maíz dorada, cebolla morada, guacamole y salsa mexicana.",
              tags: ["2 Piezas"]
            },
            {
              id: "tac-2",
              name: "Camarones Estilo Baja (2 Piezas)",
              price: 220,
              description: "Tacos de camarones rebozados en tempura de cerveza, alioli chipotle, cremo aguacate en tortilla de harina.",
              tags: ["2 Piezas", "Baja Tempura"]
            },
            {
              id: "tac-3",
              name: "Mar y Tierra (2 Piezas)",
              price: 220,
              description: "Tacos de camarón, picaña, queso chihuahua, pimiento a la plancha en tortilla de harina con costra de parmesano, acompañados de guacamole y salsa mexicana.",
              tags: ["2 Piezas", "Costra de Parmesano"]
            }
          ]
        },
        {
          id: "postres",
          name: "Postres",
          icon: "Cake",
          items: [
            {
              id: "pos-1",
              name: "Pastel de Chocolate",
              price: 180,
              description: "Entrecapas de chocolate cremoso con una cobertura de chocolate semi amargo y un espolvoreado de cocoa."
            },
            {
              id: "pos-2",
              name: "Pastel de Coco",
              price: 180,
              description: "Entrecapas de un preparado cremoso con una mezcla de coco y nuez. Con cobertura al costado de coco rallado y nuez molida superior."
            },
            {
              id: "pos-3",
              name: "Crocante de Zanahoria",
              price: 180,
              description: "Zanahoria rallada frita hasta alcanzar una textura crujiente, presentada junto a helado de vainilla, fresas frescas y un toque de cajeta."
            },
            {
              id: "pos-4",
              name: "Brownie de Chocolate",
              price: 240,
              description: "Brownie de chocolate turín trufado relleno de arándanos y cerezas, con cremoso helado hecho en casa.",
              tags: ["Chocolate Turín", "Helado Artesanal"]
            },
            {
              id: "pos-5",
              name: "Strudel",
              price: 240,
              description: "Crujiente masa de hojaldre rellena con la creación del día.",
              tags: ["Tiempo de espera"],
              waitTime: true
            },
            {
              id: "pos-6",
              name: "Postre del Mes",
              price: "Consultar",
              description: "Solicita nuestro postre del mes con nuestro mesero.",
              tags: ["Especial del Mes"]
            }
          ]
        },
        {
          id: "infantil",
          name: "Menú Infantil",
          icon: "Smile",
          items: [
            {
              id: "inf-1",
              name: "Mini Hamburguesas",
              price: 180,
              description: "2 pzas. De hamburguesas a base de carne de sirloin, lechuga fresca, jitomate y pepinillos servidas con papas a la francesa."
            },
            {
              id: "inf-2",
              name: "Mini Pastas",
              price: 150,
              description: "Especialidades a elegir, fettuccini PÚA o al burro."
            },
            {
              id: "inf-3",
              name: "Mini Pizza",
              price: 155,
              description: "Masa hecha en casa con salsa italiana y queso gratinado, horneada al momento. Especialidad a elegir: Hawaiana o Peperoni."
            },
            {
              id: "inf-4",
              name: "Tacos Mini",
              price: 185,
              description: "Tacos mini de arrachera acompañados de papas a la francesa."
            }
          ]
        }
      ]
    },
    {
      id: "bebidas",
      name: "Sección II: Bebidas",
      shortName: "Bebidas",
      icon: "GlassWater",
      description: "Cócteles de autor, destilados premium, cava de vinos y cafetería especial.",
      heroBanner: "/assets/images/drinks_pua_hero.jpg",
      categories: [
        {
          id: "mixologia",
          name: "Mixología de Autor & Cócteles",
          icon: "Cocktail",
          items: [
            { id: "mix-1", name: "Martini Dry", price: 195, description: "Todo un clásico elaborado a base de ginebra, vermouth, aceituna.", image: "/assets/images/martini_bar.jpg" },
            { id: "mix-2", name: "Martini Swet", price: 195, description: "Nuestra variante de martini con un toque dulce, ginebra, vermouth rosso y cereza." },
            { id: "mix-3", name: "Negroni", price: 195, description: "Un clásico italiano, ginebra, vermouth rosso y campari." },
            { id: "mix-4", name: "Whisky Sour", price: 195, description: "Un clásico espumoso a base de whiskey bourbon, limón, aquafaba y un toque de angostura." },
            { id: "mix-5", name: "Aperol Spritz", price: 195, description: "Excelente coctel para cualquier ocasión, aperol, agua mineral y vino espumoso." },
            { id: "mix-6", name: "Martini Tropical", price: 195, description: "Toque de curacao, ginebra cítrica, piña y amaretto." },
            { id: "mix-7", name: "Martini Caramelo", price: 195, description: "Cremoso martini a base de caramelo, vodka vermouth blanco y caramelo." },
            { id: "mix-8", name: "Púa (Trago Insignia)", price: 195, description: "Elaborado en honor a nuestros más exigentes comensales; sabores enigmáticos y balance exquisito.", tags: ["Trago Insignia", "Casa"], image: "/assets/images/drinks_pua_hero.jpg" },
            { id: "mix-9", name: "Hani", price: 195, description: "Trago corto, semidulce, sabor a piña refrescante, tequila, limón y sal de jamaica." },
            { id: "mix-10", name: "Mezcal Reyes", price: 195, description: "Cítrico y picante, pepino macerado, sal de coco, mezcal ancho reyes y limón." },
            { id: "mix-11", name: "Mezcal Tiki", price: 195, description: "Sabor frutal con toque de avellana, mezcal de la casa, mango y piña." },
            { id: "mix-12", name: "Carajillo Tiki", price: 200, description: "Carajillo de autor con jugo de frutas, licor 43, naranja y café." },
            { id: "mix-13", name: "Carajillo 43", price: 200, description: "Elaborado con licor 43, café y canela." },
            { id: "mix-14", name: "Amareto Spritz", price: 220, description: "Sabor dulce y almendrado del amaretto con prosecco y ligero toque de naranja." },
            { id: "mix-15", name: "Tinto de Verano", price: 210, description: "Vino tinto de la casa, toque de ginebra y jugo de naranja." },
            { id: "mix-16", name: "Brisa del Mar", price: 210, description: "Vino blanco con toque agridulce y club soda de la casa." },
            { id: "mix-17", name: "Kalimotxo", price: 210, description: "Clásico español; vino tinto, dulzura y efervescencia de cola." },
            { id: "mix-18", name: "Whiskey Púa", price: 195, description: "Trago corto semidulce con Jim Beam, toque de vino tinto y durazno." },
            { id: "mix-19", name: "Gin Asiático", price: 195, description: "Infusión de té de especias orientales, notas de vainilla sobre gin tonic." },
            { id: "mix-20", name: "Martini Tiramisú", price: 200, description: "Mixología con notas de cacao y licor de almendras." },
            { id: "mix-21", name: "Mezcal Navarro", price: 195, description: "Mezcal de la casa, frutos rojos del bosque y licor ancho reyes." },
            { id: "mix-22", name: "Gim-Gimlet", price: 195, description: "Gin tonic flameado en mesa, ginebra, miel de agave y agua tónica.", tags: ["Flameado en Mesa"] },
            { id: "mix-23", name: "St Germain Spritz", price: 240, description: "Sabor dulce y floral de St Germain, vino espumoso y jugo de limón." },
            { id: "mix-24", name: "Naked & Famous", price: 240, description: "Intensidad de mezcal con limón; complejo y equilibrado." },
            { id: "mix-25", name: "Old Cherry", price: 250, description: "Variante del Old Fashioned con un giro distintivo de dulzura." },
            { id: "mix-26", name: "Clericot", price: 195, description: "Vino tinto, frutas frescas de temporada y licor cítrico." },
            { id: "mix-27", name: "Maracuya 23", price: 220, description: "Ron añejo, maracuyá y balance cítrico. Fresco, tropical.", tags: ["Fresco Tropical", "Popular"], image: "/assets/images/maracuya_23.jpg" },
            { id: "mix-28", name: "Martini Jamaica", price: 195, description: "Jarabe de jamaica artesanal con vodka." },
            { id: "mix-29", name: "Gin Princesa", price: 195, description: "Ginebra Puerto de Indias con infusión de frutos rojos, puré natural y brocheta de frutos del bosque." },
            { id: "mix-30", name: "Martini de Lychee", price: 220, description: "Vodka y licor de flor de saúco." },
            { id: "mix-31", name: "Sangría", price: 210, description: "Ginebra, refresco de jengibre y vino de la casa." }
          ]
        },
        {
          id: "destilados",
          name: "Destilados (Copa / Botella)",
          icon: "Wine",
          isTableLayout: true,
          groups: [
            {
              categoryName: "Tequila",
              items: [
                { name: "Don Julio Reposado", copa: 180, botella: 1900 },
                { name: "1800 Añejo", copa: 180, botella: 1800 },
                { name: "Don Julio 70", copa: 210, botella: 2200 },
                { name: "Maestro Dobel", copa: 190, botella: 2000 },
                { name: "José Cuervo", copa: 110, botella: 1100 },
                { name: "Don Julio 1942", copa: null, botella: 6500 }
              ]
            },
            {
              categoryName: "Ron",
              items: [
                { name: "Zacapa 23", copa: 240, botella: 2400 },
                { name: "Bacardí Añejo", copa: 140, botella: 1400 },
                { name: "Habana Club 7", copa: 150, botella: 1500 },
                { name: "Matusalem Clásico", copa: 140, botella: 1400 },
                { name: "M. Gran Reserva", copa: 160, botella: 1600 },
                { name: "Bacardí Blanco", copa: 110, botella: 1100 },
                { name: "Bacardí 8", copa: 170, botella: 1700 }
              ]
            },
            {
              categoryName: "Whisky",
              items: [
                { name: "Buchanan's 12", copa: 180, botella: 1800 },
                { name: "Buchanan's Master", copa: 240, botella: 2400 },
                { name: "Buchanan's 18", copa: 350, botella: 4400 },
                { name: "Old Parr", copa: 180, botella: 1800 },
                { name: "J.W. Black Label", copa: 190, botella: 2000 },
                { name: "J.W. Double Black", copa: 220, botella: 2400 },
                { name: "J.W. Gold Label", copa: 300, botella: 3100 },
                { name: "J.W. Blue Label", copa: null, botella: 9000 },
                { name: "Macallan 12", copa: 330, botella: 3100 },
                { name: "Glenfiddich 12", copa: 220, botella: 2400 }
              ]
            },
            {
              categoryName: "Ginebra y Mezcal",
              items: [
                { name: "Tanqueray (Ginebra)", copa: 170, botella: 1700 },
                { name: "Bombay (Ginebra)", copa: 170, botella: 1700 },
                { name: "Hendrick's (Ginebra)", copa: 200, botella: 2200 },
                { name: "Puerto de Indias (Ginebra)", copa: 150, botella: 1300 },
                { name: "Montelobos (Mezcal)", copa: 180, botella: 1800 },
                { name: "400 Conejos (Mezcal)", copa: 160, botella: 1650 },
                { name: "Amaras (Mezcal)", copa: 160, botella: 1650 },
                { name: "Mezcal de la Casa", copa: 140, botella: 1200 }
              ]
            },
            {
              categoryName: "Champagne, Brandy, Cognac & Vodka",
              items: [
                { name: "Möet & Chandon Brut (Champagne)", copa: null, botella: 2900 },
                { name: "Möet & Chandon Nectar (Champagne)", copa: null, botella: 3100 },
                { name: "Torres 10 (Brandy)", copa: 120, botella: 1350 },
                { name: "Torres 20 (Brandy)", copa: 240, botella: 2400 },
                { name: "Martell VSOP (Cognac)", copa: 240, botella: 2400 },
                { name: "Grey Goose (Vodka)", copa: 210, botella: 2500 },
                { name: "Stolichnaya (Vodka)", copa: 130, botella: 1500 }
              ]
            }
          ]
        },
        {
          id: "vinos",
          name: "Vinos por Botella",
          icon: "Wine",
          items: [
            { id: "vin-1", name: "Casa Madero Cabernet Sauvignon", price: 1600, description: "Cuerpo estructurado, notas a frutos rojos maduros, pimienta negra y madera noble." },
            { id: "vin-2", name: "Casa Madero Merlot", price: 1500, description: "Sedoso y equilibrado con matices de ciruela, cacao y vainilla." },
            { id: "vin-3", name: "Casa Madero Shiraz", price: 1500, description: "Potente aromáticamente, notas especiadas, mora y final persistente." },
            { id: "vin-4", name: "Casa Madero 3V", price: 1900, description: "Mezcla insignia de Cabernet Sauvignon, Merlot y Tempranillo. Alta complejidad.", tags: ["Recomendación Sommelier"] },
            { id: "vin-5", name: "Casa Madero 2V", price: 1400, description: "Ensamble blanco de Chardonnay y Chenin Blanc. Frescura vibrante." },
            { id: "vin-6", name: "Casa Madero V", price: 1200, description: "Vino tinto joven, ágil, frutal y muy versátil con cortes marinados." },
            { id: "vin-7", name: "Casa Madero Chardonnay", price: 1200, description: "Notas cítricas, manzana verde, manzanilla y un paso suave." },
            { id: "vin-8", name: "Selección del Mes", price: 999, description: "Consulta con el sommelier o mesero nuestra etiqueta mensual elegida.", tags: ["Precio Especial"] }
          ]
        },
        {
          id: "cervezas",
          name: "Cervezas",
          icon: "Beer",
          items: [
            { id: "cer-1", name: "Corona", price: 55 },
            { id: "cer-2", name: "Victoria", price: 55 },
            { id: "cer-3", name: "Modelo Especial", price: 60 },
            { id: "cer-4", name: "Negra Modelo", price: 60 },
            { id: "cer-5", name: "Amstel Ultra", price: 60 },
            { id: "cer-6", name: "Heineken", price: 60 },
            { id: "cer-7", name: "Bohemia Pilsner", price: 60 },
            { id: "cer-8", name: "Bohemia Viena", price: 60 },
            { id: "cer-9", name: "Bohemia Cristal", price: 60 }
          ]
        },
        {
          id: "licores",
          name: "Licores (Copa)",
          icon: "GlassWater",
          items: [
            { id: "lic-1", name: "Amareto Disaronno", price: 150 },
            { id: "lic-2", name: "Baileys", price: 150 },
            { id: "lic-3", name: "Frangelico", price: 150 },
            { id: "lic-4", name: "Jägermeister", price: 150 },
            { id: "lic-5", name: "Licor 43", price: 150 },
            { id: "lic-6", name: "Zambuca Blanco", price: 150 },
            { id: "lic-7", name: "Zambuca Negro", price: 150 },
            { id: "lic-8", name: "Chartreuse", price: 180 }
          ]
        },
        {
          id: "sin_alcohol",
          name: "Bebidas Sin Alcohol & Cafetería",
          icon: "Coffee",
          items: [
            { id: "sin-1", name: "Dolce Amore", price: 155, description: "Creación mocktail dulce con mezcla frutal.", tags: ["Sin Alcohol"] },
            { id: "sin-2", name: "Caribbean", price: 155, description: "Notas tropicales de piña, coco y cítricos.", tags: ["Sin Alcohol"] },
            { id: "sin-3", name: "Lychee Extravaganza", price: 155, description: "Infusión aromática de lychee y toques refrescantes.", tags: ["Sin Alcohol"] },
            { id: "sin-4", name: "Limonada de Coco", price: 155, description: "Cremosa preparación con limón y crema de coco.", tags: ["Sin Alcohol"] },
            { id: "sin-5", name: "Conga", price: 80, description: "Mezcla clásica de jugos frutales.", tags: ["Sin Alcohol"] },
            { id: "sin-6", name: "Café Americano", price: 50 },
            { id: "sin-7", name: "Café Expreso", price: 40 },
            { id: "sin-8", name: "Agua Natural", price: 40 },
            { id: "sin-9", name: "Perrier (330 ml)", price: 80 },
            { id: "sin-10", name: "Garci Crespo (275 ml)", price: 60 },
            { id: "sin-11", name: "Agua Tónica", price: 45 },
            { id: "sin-12", name: "Refresco (355 ml)", price: 45 },
            { id: "sin-13", name: "Naranjada", price: 60 },
            { id: "sin-14", name: "Limonada", price: 60 },
            { id: "sin-15", name: "Limonada de Frutos Rojos", price: 80 },
            { id: "sin-16", name: "Boost (235 ml)", price: 90 }
          ]
        }
      ]
    }
  ]
};
