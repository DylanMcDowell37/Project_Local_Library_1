const getTotalBooksCount = books => books.length

const getTotalAccountsCount = accounts => accounts.length

function getBooksBorrowedCount(books) { 
  const borrowed = books.filter((book) => !book.borrows[0].returned)
  return borrowed.length
}

function sortByPopularity(array) {
  const sorted = array.sort((itemA, itemB) => itemB.count - itemA.count)
  return sorted.slice(0,5)
}

function getMostCommonGenres(books) {
  const mapped = books.map((book) => book["genre"])
  const reduced = mapped.reduce((acc, genre) => {
    let result = {}
      if(!acc.some((genreCount) => genreCount["name"] === genre)) {
        result = { name: genre, count: 1}  
          acc.push(result)
      }
        else {
          const found = acc.find((genreCount) => genreCount["name"] === genre)
            found.count++
        }
    return acc
  }, [])
return sortByPopularity(reduced)
}

function getMostPopularBooks(books) {
  let result = {}
  const mapped = books.map((book) => {
    const { title } = book
    const borrowed = book.borrows.length
    result = { name: title, count: borrowed }
    return result
  })
  return sortByPopularity(mapped)
}


function getMostPopularAuthors(books, authors) {
  let result = {}
  const mapped = books.map(book => { 
    const author = authors.find((author) => book.authorId === author.id)
      const { name: { first, last } } = author
      const borrowed = book.borrows.length
      result = { name: `${first} ${last}`, count: borrowed}
      return result
  })
  return sortByPopularity(mapped)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
