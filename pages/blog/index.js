import Hero from 'components/hero'

const props = { title: 'Blog', subtitle: 'Recent Posts' }

const Blog = () => {
  return <Hero {...props} />
}
export default Blog
