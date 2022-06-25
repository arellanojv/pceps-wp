import { useAuth } from '../../../hooks'

export const Profile = () => {
  const { viewer, loadingViewer, logout } = useAuth()

  if (loadingViewer || !viewer) {
    return <h1>Loading user profile...</h1>
  }

  return (
    <div className='profile'>
      <hgroup>
        <h2>Account</h2>
        <div>
          <p>
            Edit your account details below, or{' '}
            <button onClick={logout} className='link-button'>
              sign out here
            </button>
            .
          </p>
        </div>
      </hgroup>
      {/* <ProfileForm viewer={ viewer } /> */}
    </div>
  )
}

export default Profile
