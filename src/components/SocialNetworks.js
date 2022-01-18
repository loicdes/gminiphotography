import React from 'react'

const anim = () => {
    let navLinks = document.querySelectorAll('.social-network a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', (e) => {
            let attrX = e.offsetX - 20;
            let attrY = e.offsetY - 20;
            link.style.transform = `translate(${attrX}px, ${attrY}px)`;
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = '';
        });
    });
}
export const SocialNetworks = () => {
    return (
        <div className='social-network'>
            <ul className='content'>
                <a href='https://www.instagram.com/gminiphotography' onMouseOver={anim} target='_blank' rel='noopener noreferrer' className='hover'>
                    <li><i className='fab fa-instagram'></i></li>
                </a>
                <a href='https://www.facebook.com/lLoic.D/' onMouseOver={anim} target='_blank' rel='noopener noreferrer' className='hover'>
                    <li><i className='fab fa-facebook-messenger'></i></li>
                </a>
                <a href='https://wa.me/33768402148' onMouseOver={anim} target='_blank' rel='noopener noreferrer' className='hover'>
                    <li><i className='fab fa-whatsapp'></i></li>
                </a>
            </ul>
        </div>
    )
}
