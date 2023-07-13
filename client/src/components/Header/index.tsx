import { NavLink } from 'react-router-dom'
import { Logo } from '../Logo'
import { PlusCircle } from 'phosphor-react'

export function Header() {
  return (
    <header className="bg-gray-900 border-b border-slate-300/10 px-3 py-2 md:py-7 sticky top-0">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <NavLink to="/" title="Home">
          <Logo />
        </NavLink>

        <div>
          <NavLink
            to={'/create-news'}
            className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
          >
            <PlusCircle size={30} />
            <span className="ml-2">Criar nova notícia</span>
          </NavLink>
        </div>
      </div>
    </header>
  )
}
