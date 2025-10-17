import { NavLink } from "react-router-dom"

export default function Header(){
    const container = `bg-stone-700 text-stone-200 px-3 py-6 flex items-center justify-between`
    const h1 = `text-2xl md:text-3xl`
    const nav = `flex gap-2 lg:gap-8 lg:mr-6`
    const link = `text-xs md:text-sm lg:text-lg
                  transition-transform transition-colors duration-300 ease-in-out 
                  hover:scale-110 active:scale-95 hover:text-stone-400`

    return(
        <header className={container}>
            <h1 className={h1}>Component Library</h1>
            <nav className={nav}>
                <NavLink 
                  to="/" 
                  className={({isActive}) => isActive ? `${link} underline` : `${link}`}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="badges" 
                  className={({isActive}) => isActive ? `${link} underline` : `${link}`}
                >
                    Badges
                </NavLink>
                <NavLink 
                  to="banners" 
                  className={({isActive}) => isActive ? `${link} underline` : `${link}`}
                >
                    Banners
                </NavLink>
                <NavLink 
                  to="cards" 
                  className={({isActive}) => isActive ? `${link} underline` : `${link}`}
                >
                    Cards
                </NavLink>
                <NavLink 
                  to="testimonials" 
                  className={({isActive}) => isActive ? `${link} underline` : `${link}`}
                >
                    Testimonials
                </NavLink>
                <NavLink 
                  to="popup" 
                  className={({isActive}) => isActive ? `${link} underline` : `${link}`}
                >
                    Popups
                </NavLink>
                <NavLink 
                  to="tooltips" 
                  className={({isActive}) => isActive ? `${link} underline` : `${link}`}
                >
                    Tooltips
                </NavLink>
            </nav>
        </header>
    )
}