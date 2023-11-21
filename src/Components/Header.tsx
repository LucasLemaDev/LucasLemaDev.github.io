import React from 'react';
import styles from '../assets/styles/Header.module.scss';
import Logo from '../assets/svgs/lucaslema-logo.svg?react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Header = () => {

    const [toggle , setToggle] = React.useState<boolean>(false)
    const dropdownMenu = React.useRef<HTMLButtonElement>(null)

    function ToggleDropdownMenu () {
        setToggle(!toggle)
        dropdownMenu.current?.classList.toggle(styles.active)
    }

    const [screenSize, setScreenSize] = React.useState(getCurrentDimension());

    function getCurrentDimension(){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
  
    React.useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

        if(screenSize.width > 800) {
            dropdownMenu.current?.classList.remove(styles.active)
        }

        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
        
    }, [screenSize])

    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <a href='/'>
                    <Logo width={40} height={40} title='Lema - Desenvolvimento de Softwares'/>
                </a>
                <nav className={styles.nav}>
                    <ul>
                        <li><Link to="hero" className={styles.navLink} spy={true} smooth={true} offset={-80} duration={500}>Home</Link></li>
                        <li><Link to="sobre" className={styles.navLink} spy={true} smooth={true} offset={-80} duration={500}>Sobre</Link></li>
                        <li><Link to="portfolios" className={styles.navLink} spy={true} smooth={true} offset={-80} duration={500}>Projetos</Link></li>
                        <li><Link to="contato" className={styles.navLink} spy={true} smooth={true} offset={-80} duration={500}>Contato</Link></li>
                    </ul>
                </nav>
                
                <button onClick={() => ToggleDropdownMenu()} className={styles.dropdownBtn}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
                <nav ref={dropdownMenu} className={styles.dropdownMenu}>
                    <ul>
                        <li><Link to="hero" className={styles.navLink} spy={true} smooth={true} offset={-80} duration={500}>Home</Link></li>
                        <li><Link to="sobre" className={styles.navLink} spy={true} smooth={true} offset={-80} duration={500}>About</Link></li>
                        <li><Link to="portfolios" className={styles.navLink} spy={true} smooth={true} offset={-80} duration={500}>Portfolios</Link></li>
                        <li><Link to="contato" className={styles.navLink} spy={true} smooth={true} offset={-80} duration={500}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
