import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-0 group">
      <img
        src={logo}
        alt="DefesaAzul"
        className="w-24 h-24 object-contain group-hover:opacity-80 transition-opacity"
      />
      <span className="text-xl font-bold tracking-tight text-gray-900">
        Defesa<span className="text-teal-500">Azul</span>
      </span>
    </Link>
  )
}