import NavLinks from './NavLinks'

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden border-t border-teal-800 bg-teal-900">
      <nav className="flex flex-col gap-1 px-4 py-3">
        <NavLinks onClick={onClose} mobile />
      </nav>
    </div>
  )
}
