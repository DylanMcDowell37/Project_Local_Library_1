const findAuthorById = (authors, id) => authors.find((author) => author.id === id)

const findBookById = (books, id) => books.find((book) => book.id === id)

function partitionBooksByBorrowedStatus(books) {
  const partitioned = books.reduce((acc, currentBook) => {
    const book = currentBook
    const borrowed = book.borrows
      !borrowed[0].returned ? acc[0].push(book) : acc[1].push(book)
      return acc
  }, [[], []])
  return partitioned
}

function getBorrowersForBook(book, accounts) {
  const borrowed = book.borrows
  const borrowArray = borrowed.map(record => {
      const foundAccount = accounts.find((account) => account.id === record.id)
      const newRecord = { ...record, ...foundAccount }
      return newRecord
  })
  return borrowArray.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
