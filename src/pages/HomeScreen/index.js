import React, { useState, useEffect }from 'react';
import { useHistory } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { 
    Container,
    CategoryArea,
    CategoryList,
    ProductArea,
    ProductList,
    ProductPaginationArea,
    ProductPaginationItem
} from './styled';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductsItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

let searchTimer = null; // 

export default () => {
    const history = useHistory();    
  
    const [headerSearch, setHeaderSearch] = useState(''); // armazena o que foi digitado no campo de busca   
/*3*/  const [categories, setCategories] = useState([]); // armazena as categorias / é uma Array por ser uma lista
    const [products, setProducts] = useState([]); // armazena os produtos / é uma Array por ser uma lista
    const [totalPages, setTotalPages] = useState(0); // armazena o numero total de paginas a serem exibidas

    const [modalStatus, setModalStatus] = useState(false); // state de funcionamento do modal
    const [modalData, setModalData] = useState({}); // state de funcionamento das informaçoes do modal

    const [activeCategory, setActiveCategory] = useState(0); // state de funcionamento:  armazena o id da categoria ativa 
    const [activePage, setActivePage] = useState(1); // state de funcionamento:  armazena a página atual
    const [activeSearch, setActiveSearch] = useState(''); // state de funcionamento:  armazena a página atual
    


    // FUNÇÃO QUE CONSULTA A API PARA PEGAR OS PRODUTOS
        const getProducts = async () => { 
            const prods = await api.getProducts(activeCategory, activePage, activeSearch);
            if (prods.error == '') { // se não haver nenhunm erro
                setProducts( prods.result.data ); // Array de resultado - Lista de produtos 
                setTotalPages(prods.result.pages); // preenche a total de paginas
                setActivePage(prods.result.page); // aponta a pagina atual
            }
        }


    //FUNÇÃO QUE BUSCA AS CATEGORIAS
        /* primeira coisa que fará quando a tela carregar é: Fazer a requisição, pegar as gategorias e jogar no StateCategories*/

/*2*/   useEffect(()=>{ // teve que criar uma função por ser uma async e await
            const getCategories= async () => {
                const cat = await api.getCategories(); 
/*4*/           if (cat.error == '') { // se não haver nenhunm erro
                    setCategories( cat.result ); // Array de resultado - categorias salva em Categories
                }
/*5*/           ReactTooltip.rebuild(); // scaneia a página inteira atraz de um tooltip existente
            };
            getCategories();
        },[]);


    //FUNÇÃO DE MONITORAMENTO DO activeCategory, activePage, activeSearch
        /* quando mudar a categoria, será carregado os produtos daquela categoria selecionada */

        useEffect (()=>{ 
            setProducts([]); // zera o array, sobe os produtos enquanto carraga a nova página
            getProducts(); // mudou a categoria ou carregou o site, carrega os produtos.
        },[activeCategory, activePage, activeSearch]);


        //FUNÇÃO DE MONITORAMENTO DO headerSearch
        /* quando mudar a categoria, será carregado os produtos daquela categoria selecionada */

        useEffect (()=>{ 
            clearTimeout(searchTimer); // zerar o time se continuar digitando
            searchTimer = setTimeout(()=>{
                //se headerSearch estiver diferente de vazio ( esta digitando na busca)
                setActiveSearch(headerSearch); // quando acabar a contagem de 2segundo  é efetuado a busca digitada                    
            }, 2000); // demora 2 segundos
        },[headerSearch]);   
        
        const handleProductClick = (data) => {
            setModalData(data);
            setModalStatus(true);
        };


    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch}/> {/*função busca e função props que altera o texto, trazido das duas props */}

            {/* se categories for maior que 0, ou seja, se tiver categorias para serem exibidas*/}
            {categories.length > 0 &&
                <CategoryArea>
                    Selecione uma categorias

                    <CategoryList>

                        <CategoryItem /* a listagem  de todas as catagorias */
                            data={{
                                id:0,
                                name:'Todas as Catagorias',
                                image:'/assets/food-and-restaurant.png'
                            }}
                            activeCategory={activeCategory} // indica a categoria ativa
                            setActiveCategory={setActiveCategory} // troca a categoria ativa
                        /> 

                            {/*Pegas informações da url vindo das categorias do WS */}                   
                            {categories.map((item, index)=>(
                            <CategoryItem
                                key={index}
                                data={item}
                                activeCategory={activeCategory} // indica a categoria ativa
                                setActiveCategory={setActiveCategory} // troca a categoria ativa
                            />
                        ))}

                    </CategoryList>
                    
                </CategoryArea>  
            }

            {/* se products for maior que 0, ou seja, se tiver produtos para serem exibidos*/}
            {products.length > 0 &&
                <ProductArea>
                    <ProductList>
                        {products.map((item, index)=>(
                            <ProductItem
                                key={index}
                                data={item}
                                onClick={handleProductClick}
                            />
                        ))}
                    </ProductList>
                </ProductArea>
            }  

            {totalPages > 0 && // se total de página for maior que zero
                <ProductPaginationArea>
                    {/* array baseado na wuantidade de pagina que tenho que exibir */}
                    {Array(totalPages).fill(0).map((item, index)=>( // Array(totalPages).fill(0) transforma a div totalPages em array com total e items baseado no numero do totalPages
                        <ProductPaginationItem 
                            key={index}
                            active={activePage} // página ativa no momento
                            current={index + 1} // pagina que esta exibindo
                            onClick={()=>setActivePage(index+1)} // para setar a nova activePage
                        >
                            {index + 1} {/* define a página 1 */}
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
            } 

            <Modal status={modalStatus} setStatus={setModalStatus} >
                <ModalProduct data={modalData} setStatus={setModalStatus} />
            </Modal>   
        </Container>
    );
}