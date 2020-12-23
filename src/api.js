// todos o métodos e consultas que vamos usar em toda a aplicação
let BASE = 'https://api.b7web.com.br/devsfood/api';

// funções das requisições

export default {

    // BUSCA CATEGORIAS
        /* endpoint= GET /api/categories */
/*1*/getCategories: async () => {         
        const res = await fetch(BASE+'/categories'); // requisição de categoria
        const json = await res.json(); // resposta em json
        return json;
    },

    // PEGAR OS PRODUTOS
        /* endpoint= GET /api/products ([search, page, category]) */
    getProducts: async (category, page, search) => {
        
        let fields = {}; // é obj de campos
            //se category for diferente de 0 , manda ela.
            if(category !== 0) {
                fields.category = category;
            }
            //se page for maior de 0 , manda ela.
            if(page > 0) {
                fields.page = page;
            }
            //se search for diferente de vazio , manda ela.
            if(search != '') {
                fields.search = search;
            }

            //transformar os resultados do obj em uma string para ser adicionada na url
                /* exemplo: {category: 2, page: 1, search: 'bolo'}
                            "category=2&page=1&search=bolo" 
                */     
            let queryString = new URLSearchParams(fields).toString(); // é este que será adicionada na url            

        const res = await fetch(BASE+'/products?'+queryString); // requisição de produtos
        const json = await res.json(); // resposta em json
        return json;
        
    }

    
};
