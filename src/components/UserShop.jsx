import React, {Component} from "react";
import NavArticles from './NavArticles';
import ArticleTableUserView from './ArticleTableUserView';
import './styles/ShopUser.css';

export default class UserShop extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="shop-user">
                <NavArticles/>
                <ArticleTableUserView/>
            </div>
        );
    }
}