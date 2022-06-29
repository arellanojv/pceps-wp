export const Profile = () => {
  return (
    <div className='profile'>
      <hgroup>
        <h2>Account</h2>
        <div>
          <p>
            Edit your account details below, or{' '}
            <button className='link-button'>sign out here</button>.
          </p>
        </div>
      </hgroup>
      {/* <ProfileForm viewer={ viewer } /> */}
    </div>
  )
}

export default Profile
