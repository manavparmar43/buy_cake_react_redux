// import logo from './logo.svg';
import './App.css';
import Brownie from "./images/Brownie.jpg"
import Butterscotch from "./images/Butterscotch.webp"
import Pineapple from "./images/Pineapple.jpg"
import Strawberry from "./images/Strawberry.jpg"
import {useSelector,useDispatch} from "react-redux"
import { useState } from 'react'; 
import {BUY_BUTTERSCOTCH_CAKE,BUY_BROWNIE_CAKE,BUY_PINEAPPLE_CAKE,BUY_STRAWBERRY_CAKE} from "./redux/action/cakeAction"
function App() {
  const [appstatus,SetAppStatus]=useState(true);
  // const [returnstatus,SetReturnStatus]=useState(false);
  const getdata=useSelector((state)=>state.BrownieReducer)
  const getbutterscotchdata=useSelector((state)=>state.ButterscotchReducer)
  const getstawberrydata=useSelector((state)=>state.StawberryReducer) 
  const getpineappledata = useSelector((state)=>state.PineappleReducer)
  const dispatch=useDispatch();
  const total=parseInt(getbutterscotchdata.buyitem) + parseInt( getdata.buyitem) + parseInt(getstawberrydata.buyitem) + parseInt(getpineappledata.buyitem)
  const Buy_Brownie=()=>{
    dispatch(BUY_BROWNIE_CAKE())

  }
  const Buy_Butterscotch=()=>{
    dispatch(BUY_BUTTERSCOTCH_CAKE())
  }
  const Buy_Strawberry=()=>{
    dispatch(BUY_STRAWBERRY_CAKE())
  }
  const Buy_Pineapple=()=>{
    dispatch(BUY_PINEAPPLE_CAKE())
  }
  const HandleAppStatus=()=>{
    SetAppStatus(true)
  }
  const HandleReturnStatus=()=>{
    SetAppStatus(false)
  }
  return (
    <div className="container mt-3">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" onClick={()=>HandleAppStatus()}>BUY  CAKE</a>
            { total == 0?
              <></>
            :
              <a className="navbar-brand" href="#" onClick={()=>HandleReturnStatus()}>RETURN ORDER</a>
            }
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                
                
              </ul>
              <form className="d-flex">
                
                
                <i class="fa badge" style={{fontSize: 24,color:'black' }} value={total}>&#xf07a;</i>
               
              </form>
            </div>
          </div>
        </nav>
        {appstatus?

                <div className="container-fluid ">
                    <div className="d-flex justify-content-between ">
                    
                            <div class="card mt-5 " style={{width:"18rem"}}>
                            <img src={ Strawberry}   style={{height: '70%' }} class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Strawberry Cake</h5>
                              <p class="card-text">Quantity:{getstawberrydata.numOfItem}</p>
                              {
                                getstawberrydata.numOfItem == 0?
                                <button type='submit'     className="btn btn-danger" disabled>Out Of Stock</button>
                                :  
                                <a href="#" class="btn btn-primary" onClick={()=>Buy_Strawberry()}>Buy</a>
                              }
                            </div>
                          </div>
                          <div class="card mt-5 ml-3" style={{width:"18rem"}}>
                            <img src={ Pineapple}  style={{height: '70%' }} class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Pineapple Cake</h5>
                              <p class="card-text">Quantity:{getpineappledata.numOfItem}</p>
                              {
                                getpineappledata.numOfItem == 0?
                                <button type='submit'     className="btn btn-danger" disabled>Out Of Stock</button>
                                :
                                  <a href="#" onClick={()=>Buy_Pineapple()} className="btn btn-primary">Buy</a>
                              }
                            </div>
                          </div>
                          <div class="card mt-5" style={{width:"18rem" }} >
                            <img src={Brownie} style={{height: '70%' }}class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Brownie Cake</h5>
                              <p class="card-text">Quantity:{getdata.numOfItem}</p>
                              {
                                getdata.numOfItem == 0?
                                <button type='submit'     className="btn btn-danger" disabled>Out Of Stock</button>
                                :
                                  <a href="#" onClick={()=>Buy_Brownie()} className="btn btn-primary">Buy</a>
                              }
                            </div>
                          </div>
                          <div class="card mt-5 ml-3" style={{width:"18rem"}}>
                            <img src={Butterscotch}  class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">Butterscotch Cake</h5>
                              <p class="card-text">Quantity: {getbutterscotchdata.numOfItem}</p>
                              {
                                getbutterscotchdata.numOfItem == 0?
                                <button type='submit'    className="btn btn-danger" disabled>Out Of Stock</button>
                                :
                                  <a href="#" onClick={()=>Buy_Butterscotch()} className="btn btn-primary">Buy</a>
                              }
                              
                            </div>
                          </div>
                    </div>      
              </div>
        :
        <></>
      }
    </div>
    // <></>
  );
}

export default App;
