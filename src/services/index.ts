export const getDataAPI = (date: string) => {
    const url = `https://covid-api.com/api/reports?date=${date}&iso=USA&region_name=US&per_page=100`
    return fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err))
}