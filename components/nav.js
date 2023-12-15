import Link from 'next/link'

const NavList = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Blog', url: '/blog' }
]

const Nav = () => {
  return (
    <nav>
      <ul>
        {NavList.map(post => (
          <li key={post.title}>
            <Link href={post.url}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Nav
