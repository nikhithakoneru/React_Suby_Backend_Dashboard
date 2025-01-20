import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/Welcome'
import AllProducts from '../components/AllProducts'

const LandingPage = () => {

    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [showFirm, setShowFirm] = useState(false)
    const [showProduct, setShowProduct] = useState(false)
    const [showWelcome, setShowWelcome] = useState("")
    const [showAllProducts, setShowAllProducts] = useState(false)
    const [showLogout, setShowLogout] = useState(false)
    const [showFirmTitle, setShowFirmTitle] = useState(true) //add-firm side bar condition


    useEffect(()=>{
      const loginToken = localStorage.getItem('loginToken');
      if(loginToken){
        setShowLogout(true)
      }
    }, [])

    useEffect(()=>{
      const firmName = localStorage.getItem('firmName');
        if(firmName) {
          setShowFirmTitle(false)
        }
    }, [])

    const logOutHandler =()=>{
      if(confirm("Are you sure to logout")){
        localStorage.removeItem("loginToken")
      localStorage.removeItem("firmId")
      localStorage.removeItem('firmName');
      setShowLogout(false)
      setShowFirmTitle(true)
      }
      
    }

    const showLoginHandler =()=> {
      setShowLogin(true)
      setShowRegister(false)
      setShowFirm(false)
      setShowProduct(false)
      setShowWelcome(false)
      setShowAllProducts(false)
    } 
    const showRegisterHandler =()=> {
      setShowRegister(true)
      setShowLogin(false)
      setShowFirm(false)
      setShowProduct(false)
      setShowWelcome(false)
      setShowAllProducts(false)
    } 

    const showFirmHandler =()=> {
      if(showLogout) {
        console.log("showFirmHandler triggered");
        setShowRegister(false)
        setShowLogin(false)
        setShowFirm(true)
        setShowProduct(false)
        setShowWelcome(false)
        setShowAllProducts(false)
    } else{
      alert("please login")
      setShowLogin(true)
    }
    } 

    const showProductHandler =()=> {
      if(showLogout){
        setShowRegister(false)
        setShowLogin(false)
        setShowFirm(false)
        setShowProduct(true)
        setShowWelcome(false)
        setShowAllProducts(false)
    }else{
      alert("please login")
      setShowLogin(true)
    }
    } 
    const showWelcomeHandler =()=> {
      setShowRegister(false)
      setShowLogin(false)
      setShowFirm(false)
      setShowProduct(false)
      setShowWelcome(true)
      setShowAllProducts(false)
    } 

    const showAllProductsHandler =()=> {
      if(showLogout){
        setShowRegister(false)
        setShowLogin(false)
        setShowFirm(false)
        setShowProduct(false)
        setShowWelcome(false)
        setShowAllProducts(true)
    } else{
        alert("please login")
        setShowLogin(true)
    }
    } 






  return (
    //fragment
    <>
        <section className='landingSection'>
           
            <NavBar showLoginHandler = {showLoginHandler} showRegisterHandler={showRegisterHandler} 
            showLogout = {showLogout} //states
            logOutHandler = {logOutHandler} //functions
            /> 
            <div className="collectionSection">
                <SideBar showFirmHandler = {showFirmHandler} showProductHandler ={showProductHandler}
                showAllProductsHandler={showAllProductsHandler}
                showFirmTitle={showFirmTitle}/>
               

                {showLogin && <Login showWelcomeHandler={showWelcomeHandler}/>}
      
                {showRegister && <Register showLoginHandler={showLoginHandler} />}

                {showFirm && showLogout && <AddFirm />}

                {showProduct && showLogout && <AddProduct />}
                {showWelcome && <Welcome />}
                {showAllProducts && showLogout && <AllProducts />}
                
        
            </div>
            

           
        </section>
    </>
  )
}

export default LandingPage