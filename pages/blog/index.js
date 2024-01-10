import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

const props = { title: 'Blog', subtitle: 'Recent Posts' }

const Blog = () => {
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc="ブログの記事一覧" />
      <Hero {...props} />
    </Container>
  )
}
export default Blog
