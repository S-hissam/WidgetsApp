import Link from './Link'

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link href='/' className='item'>Translator</Link>
      <Link href='/list' className='item'>Searchbar</Link>
      {/* <Link href='/' className='item'>Accordion</Link>
      <Link href='/dropdown' className='item'>Dropdown</Link> */}
      <h1>=> Selahattin</h1>
    </div>
  )
}

export default Header
