const findAccountById = (accounts, id) => accounts.find((account) =>
  account.id === id)

function sortAccountsByLastName(accounts) {
  const mapped = accounts.map(account => {
      let result = {}
      const { name : { first, last } } = account
      result = { name: { first, last } }
    return result
    })
  const sorted = mapped.sort((name1, name2) => 
      name1.name["last"].toLowerCase() > name2.name["last"].toLowerCase() ? 1 : -1)
  return sorted
}


function getTotalNumberOfBorrows(account, books) {
  const mapped = books.map((book) => book.borrows)
  let result = 0
  for (let currentBorrows of mapped) {
      for (let currentAccount in currentBorrows) {
        if (currentBorrows[currentAccount].id === account.id)
        result++
      }
    }
  return result
}

function getBooksPossessedByAccount(account, books, authors) {
  const filtered = books.filter(book => {
    if (book.borrows[0].id === account.id && !book.borrows.returned) {
      const author = authors.find((author) => author.id === book.authorId)
        book.author = author
          return book 
        }
      })
  return filtered 
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
