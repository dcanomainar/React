const getImage = async () => {
    const apiKey = 'aLG36NUZ690c2M1QmqxVTLfPo7psS1Pr';
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    try {
        const {data} = await response.json();

        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);
    } catch(err) {
        console.warn(err);
    }
}

getImage();