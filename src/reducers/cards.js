const cards = [
  {
    cardName: 'Student Life Card',
    description: 'The Student Life credit card is only available to customers with an employment status of Student.',
    apr: 18.9,
    balanceTransferOfferDuration: '0 months',
    purchaseOfferDuration: '6 months',
    conditions: ({ employmentStatus }) => {
      return employmentStatus === 'student'
    },
    credit: 1200
  },
  {
    cardName: 'Anywhere Card',
    description: 'The anywhere card is available to anyone anywhere',
    apr: 33.9,
    balanceTransferOfferDuration: '0 months',
    purchaseOfferDuration: '0 months',
    conditions: (profile) => {
      return true
    },
    credit: 300
  },
  {
    cardName: 'Liquid Card',
    description: 'The Liquid Card is a card available to customers withwho have an income of more than £16000',
    apr: 33.9,
    balanceTransferOfferDuration: '12 months',
    purchaseOfferDuration: '6 months',
    conditions: ({ income }) => {
      return income > 16000
    },
    credit: 3000
  }
  
]

export default cards