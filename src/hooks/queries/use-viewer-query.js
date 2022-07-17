import { gql, useLazyQuery } from '@apollo/client'
import { useEffect } from 'react'

import { useAuthContext } from '../../context'
import { useSafeDispatch } from '../use-safe-dispatch'

const VIEWER = gql`
  query viewer {
    viewer {
      jwtAuthToken
      id
      email
      username
    }
  }
`
// const VIEWER = gql`
//   query viewer {
//     viewer {
//       jwtAuthToken
//       accounts {
//         nodes {
//           businessInfoSubmitted
//           accountStatus
//         }
//       }
//       id
//       email
//       username
//     }
//   }
// `
export const useViewerQuery = () => {
  const { setIsLoggedIn, isLoggedIn } = useAuthContext()

  useEffect(() => {
    if (isLoggedIn) {
      getViewer()
    }
  }, [isLoggedIn])

  const onError = useSafeDispatch(() => {
    setIsLoggedIn(false)
  })

  const onCompleted = useSafeDispatch((theData) => {
    if (!theData?.viewer) {
      setIsLoggedIn(false)
    }
  })

  const [getViewer, { loading, error, data }] = useLazyQuery(VIEWER, {
    fetchPolicy: 'network-only',
    onError,
    onCompleted,
  })

  return {
    loading,
    error,
    data: data && data.viewer ? data.viewer : null,
    getViewer,
  }
}
