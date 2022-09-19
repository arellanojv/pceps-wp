import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      input: { username: $username, email: $email, password: $password }
    ) {
      clientMutationId
    }
  }
`

export const useRegisterMutation = () => {
  const [mutation, mutationResults] = useMutation(REGISTER)

  const registerMutation = (username, email, password, roles) => {
    return mutation({
      variables: {
        username,
        email,
        password,
        roles,
      },
    })
  }

  return { registerMutation, results: mutationResults }
}
