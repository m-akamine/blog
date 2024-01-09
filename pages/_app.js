import 'styles/globals.css'
import Layout from 'components/layout'

// Font Awesome の設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'

library.add(faHouseChimney, faSun, faTwitter, faFacebookF)
const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
