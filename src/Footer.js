import './footer.css'
import React from 'react'
import 'font-awesome/css/font-awesome.min.css'


const Footer = () => {
  return(
    <footer className="footer bg-secondary py-4">
      <span>
        Desenvolvido com <i className="fa fa-heart text-danger"></i> por <strong>Tiago</strong>! 
      </span>
    </footer>
  )
}
export default Footer;