class AviasalesService {
  // static apiBase = 'https://front-test.dev.aviasales.ru/'
  static apiBase = 'https://aviasales-test-api.kata.academy/'

  getSearchID = async () => {
    const { searchId } = await this.getResource(
      `${AviasalesService.apiBase}search`
    )
    return searchId
  }

  getPartTickets = async (searchID) => {
    return await this.getResource(
      `${AviasalesService.apiBase}tickets?searchId=${searchID}`
    )
  }

  getResource = async (url, requestNumber = 2) => {
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
        return this.getResource(url, requestNumber - 1)
      } else {
        throw error
      }
    }
  }
}

const aviasalesService = new AviasalesService()
export { aviasalesService }
