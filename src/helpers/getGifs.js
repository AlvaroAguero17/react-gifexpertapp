

export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=xMMMo5g3ShFo8chUhht1g03Z883fCfoP&limit=10`;
    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map(img => {
      return{
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })

    return gifs;
}