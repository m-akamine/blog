import { getAllPosts } from 'lib/api'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getPlaiceholder } from 'plaiceholder'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'

// plaiceholder3 対応用
import { getImageBuffer } from 'lib/getImageBuffer'

const props = {
  title: 'CUBE',
  subtitle: 'アウトプットしていくサイト',
  imageOn: true
}

const Home = ({ posts }) => {
  return (
    <Container>
      <Hero {...props} />

      <Posts posts={posts} />
      <Pagination nexUrl='/blog' nextText='More Posts' />
    </Container>
  )
}

const getStaticProps = async () => {
  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const imageBuffer = await getImageBuffer(post.eyecatch.url)
    const { base64 } = await getPlaiceholder(imageBuffer)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts
    }
  }
}

export default Home
export { getStaticProps }
