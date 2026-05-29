import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-ocean-400 group-hover:text-ocean-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-white">
        Ocean<span className="text-ocean-400">Guard</span>
      </span>
    </Link>
  )
}