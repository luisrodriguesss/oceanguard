import { NavLink } from 'react-router-dom'

const links = [
  { to: '/',            label: 'Início'        },
  { to: '/dashboard',   label: 'Monitoramento' },
  { to: '/alertas',     label: 'Alertas'       },
  { to: '/sobre',       label: 'Sobre'         },
  { to: '/integrantes', label: 'Integrantes'   },
  { to: '/faq',         label: 'FAQ'           },
]

interface NavLinksProps {
  onClick?: () => void
  mobile?: boolean
}

export default function NavLinks({ onClick, mobile = false }: NavLinksProps) {
  const base = mobile
    ? 'block py-3 px-4 rounded-lg text-sm font-medium transition-colors hover:bg-navy-700 hover:text-ocean-400'
    : 'text-sm font-medium transition-colors hover:text-ocean-400'

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === '/'}
          onClick={onClick}
          className={({ isActive }) =>
            `${base} ${isActive ? 'text-ocean-400' : 'text-gray-300'}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  )
}