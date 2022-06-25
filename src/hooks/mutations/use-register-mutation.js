import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
    $roles: String!
  ) {
    registerUser(
      input: {
        username: $username
        email: $email
        password: $password
        roles: $roles
      }
    ) {
      clientMutationId
    }
  }
`

export const useRegisterMutation = () => {
  const [mutation, mutationResults] = useMutation(REGISTER)

  const registerMutation = (username, email, password, role) => {
    return mutation({
      variables: {
        username,
        email,
        password,
        role,
      },
    })
  }

  return { registerMutation, results: mutationResults }
}
