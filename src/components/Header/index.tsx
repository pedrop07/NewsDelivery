import { NavLink } from 'react-router-dom'
import { Logo } from '../Logo'

export function Header() {
  return (
    <header className="bg-gray-950 border-b border-slate-300/10 px-3 py-7 sticky top-0">
      <div className="flex justify-between max-w-screen-xl mx-auto">
        <NavLink to="/" title="Home">
          <Logo />
        </NavLink>

        <div className="flex gap-3">
          <div>teste</div>
        </div>
      </div>
    </header>
  )
}
