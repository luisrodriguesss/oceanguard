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
  if (mobile) {
    return (
      <>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            onClick={onClick}
            className={({ isActive }) =>
              `block py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-teal-50 text-teal-700 font-semibold'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </>
    )
  }

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === '/'}
          onClick={onClick}
          className={({ isActive }) =>
            `relative text-sm font-medium transition-colors pb-0.5 ${
              isActive
                ? 'text-teal-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-teal-500'
                : 'text-gray-500 hover:text-gray-900'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  )
}
