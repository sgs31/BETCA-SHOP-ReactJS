import React, {Component} from 'react';
import Article from './Article.jsx'
import './styles/ArticleTableUserView.css'

export default class ArticleTableUserView extends Component{
    
  constructor(props){
        super(props);
    
    }

    render(){
        let articulos = [{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          },{
            img: "https://www.mamalucchetti.com.ar/wp-content/uploads/2020/04/BUCATTINI-HERO.png",
            marca:'Luchetti',
            descripcion:'Fideos largos 500g',
            precio: '71.50',
            ean:'222345'
          }];
        
        return(
            <div className="table-article-user">
                {
                    articulos.map((value,index)=>{
                        return (
                            <div className="article-user" key={index}>
                                <Article articles={value}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
