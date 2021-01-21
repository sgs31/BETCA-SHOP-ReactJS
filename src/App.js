import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login.jsx'
import FormArticle from './components/FormArticle.jsx'
import ArticleTableAdminView from './components/ArticleTableAdminView.jsx'
import Article from './components/Article.jsx'
import ArticleTableUserView from './components/ArticleTableUserView.jsx'
import RegisterArticle from './components/RegisterArticle'
import NavArticles from './components/NavArticles'
import UserShop from './components/UserShop'
import AdminShop from './components/AdminShop'



function App() {
  return (
    <div className="App">
      
      <Header/>
      
      <div className="principal-content">
        <Home />
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
