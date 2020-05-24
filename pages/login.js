import Head from 'next/head'
import Nav from "../comps/Nav"
const Home = () => (
  <>
    <Head>
      <title>Datrisoft Landing</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <div style={{
      backgroundColor: "rgba(200,200,60,0.5)",
      width: "100%", height: "100%"
    }}>
      <p>Testing...</p>
    </div>
  </>
)
function SmallScreen(params) {
  return <div>

  </div>
}

function LargeScreen(params) {
  return <div>

  </div>
}

export default Home
