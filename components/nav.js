import Link from 'next/link'
import styles from 'styles/nav.module.css'

const NavList = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Blog', url: '/blog' }
]

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
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
