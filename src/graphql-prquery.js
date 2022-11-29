query MyQuery2 {
  purchaseRequests {
    edges {
      node {
        purchaseRequest {
          budget
          category
          deadline
          description
          fieldGroupName
          address {
            barangay
            barangayTxt
            city
            cityTxt
            fieldGroupName
            province
            provinceTxt
            region
            regionTxt
            streetAddress
            zipCode
          }
        }
        title
        lastEditedBy {
          node {
            email
            id
            name
          }
        }
      }
    }
  }
}