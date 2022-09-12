import React, { useState } from 'react'

function PopupModal() {
    const [show, setShow] = useState(true)
   const handleShow = () => {
        setShow(false);
    };
  return (
     <>
         <div className={"modal fade" + (show ? " show d-block" : " d-none")} id="exampleModalCenter" tabIndex="-1" role="dialog" >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" style={{backgrounColor:'white'}}>
                            <div className="modal-header">
                                <h5 className="modal-title text-uppercase mx-auto">Important !!!</h5>
                                <button type="button" className="close d-none" onClick={()=>handleShow()}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-bold text-capitalize" style={{color:'#000000'}}>
                                <i>
                                    <strong>
                                       Dear Client we have temporarily moved our website to <a className='link1' href='https://www.237bet.cm/#/' target='blank'>237bet.cm.</a> we are sorry for the inconviniences this may cause.<br/><br/>
                                        <span className='text-muted'>Cher client nous avons transferé temporairement notre site web a <a className='link1' href='https://www.237bet.cm/fr/#/' target='blank'>237bet.cm.</a> nous nous excusons pour tout désagrément que cela pourrais causer.</span> 
                                   </strong>
                                   
                                 </i>
                            </div>
                            <div className="modal-footer">
                            <a href='https://www.237bet.cm/#/'><button   type="button" className="btn"  onClick={()=>handleShow()}>Go to 237bet.cm</button></a>
                            <a href='https://www.237bet.cm/fr/#/'><button  type="button" className="btn"  onClick={()=>handleShow()}>Allez à 237bet.cm</button></a>
                            </div>
                        </div>
                    </div>
                </div>
 
     </>
  )
}

export default PopupModal