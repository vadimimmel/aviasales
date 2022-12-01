class AviasalesService {
  getSearchID = async () => {
    const { searchId } = await this.#getResource(`search`)
    return searchId
  }

  getPartTickets = async (searchID) => {
    return await this.#getResource(`tickets?searchId=${searchID}`)
  }

  #getResource = async (urlEnding, requestNumber = 2) => {
    const apiBase = 'https://aviasales-test-api.kata.academy/'
    const url = `${apiBase}${urlEnding}`

    try {
      const res = await fetch(url)

      if (res.status) {
        return await res.json()
      }

      throw new Error(`Ошибка при загрузке данных`)
    } catch (error) {
      console.error(
        `Попытка № ${3 - requestNumber}. Ошибка при получении данных.`,
        error
      )
      if (requestNumber) {
        return this.#getResource(urlEnding, requestNumber - 1)
      } else {
        throw error
      }
    }
  }
}

export const aviasalesService = new AviasalesService()
