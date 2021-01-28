import React, {Component} from 'react';
import NavArticles from './NavArticles'
import ArticleAdminView from './ArticleTableAdminView';
import './styles/AdminShop.css'

export default class AdminShop extends Component{
    
    constructor(){
        super();
    }

    render(){
        return(
            <div className="shop-admin">
                <NavArticles/>
                <ArticleAdminView/>
            </div>
        );
    }
}