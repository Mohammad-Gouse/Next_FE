// // ** React Imports
// import { useEffect } from 'react'

// // ** Next Import
// import { useRouter } from 'next/router'

// // ** Spinner Import
// import Spinner from 'src/@core/components/spinner'

// // ** Hook Imports
// import { useAuth } from 'src/hooks/useAuth'

// /**
//  *  Set Home URL based on User Roles
//  */
// export const getHomeRoute = role => {
//   if (role === 'client') return '/acl'
//   else return '/dashboards/crm'
// }

// const Home = () => {
//   // ** Hooks
//   const auth = useAuth()
//   const router = useRouter()
//   useEffect(() => {
//     if (auth.user && auth.user.role) {
//       const homeRoute = getHomeRoute(auth.user.role)

//       // Redirect user to Home URL
//       router.replace(homeRoute)
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   return <Spinner sx={{ height: '100%' }} />
// }

// export default Home

import Head from 'next/head';
import MultiFilterList from 'src/views/pages/MultiFilterList';

function Home() {
  return (
    <div style={{padding:'20px'}}>
      <Head>
        <title>Employee Data Grid</title>
        <meta name="description" content="Employee Data Grid with Filters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1>Employee Data Grid</h1>
        <MultiFilterList />
      </main>
    </div>
  );
}

export default Home;

