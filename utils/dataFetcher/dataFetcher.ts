export const dataFetcher = async (url:string) => {
    const data = await fetch(url).then(res => res.json())
    return data;
}