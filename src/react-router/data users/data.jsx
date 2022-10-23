class MockStars {

    #defaultDelay = 500

    #startList = [
        {
            id: 1,
            name: 'Kim',
            surname: 'Kardashian',
            imageUrl: 'https://phantom-marca.unidadeditorial.es/d5ed24a42b481b2a8cfcbbe8172ca875/crop/0x0/1175x661/resize/1320/f/webp/assets/multimedia/imagenes/2022/07/22/16584889724439.png',
            additionalInfo: {
                biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
                wight: 300,
                height: 20,
                divorced: true,
            }

        },
        {
            id: 2,
            name: 'John',
            surname: 'Kennedy',
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BOWE2Zjg4NzktNTAzMi00YjQ2LTk1ZmYtMjM4OGE2OTI2MTY3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_.jpg',
            additionalInfo: {
                biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
                wight: 200,
                height: 10,
                divorced: false,
            }

        },
        {
            id: 3,
            name: 'Mickael',
            surname: 'Jackson',
            imageUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/F280/production/_125808026_gettyimages-88995944.jpg',
            additionalInfo: {
                biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
                wight: 100,
                height: 5,
                divorced: true,
            }
        },
        {
            id: 4,
            name: 'Super',
            surname: 'Sako',
            imageUrl: 'https://cdns-images.dzcdn.net/images/artist/690bcb1d2d995eef441238aef4581975/500x500.jpg',
            additionalInfo: {
                biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
                wight: 400,
                height: 1,
                divorced: true,
            }
        }
    ];

    #starsInfo = this.#startList.map( s => {
        const { additionalInfo, ...rest } = s;
        return { ...rest }
    } )

    #getRandomBoolean(){
        return  Math.random() < 0.5;
    }



    getStars(){
        return new Promise((res) => {
            setTimeout( () => {
                res({
                    status: 'success',
                    data: JSON.parse(JSON.stringify(this.#starsInfo))
                });
            }, this.#defaultDelay )
        })
    }


    getStar(id){
        return new Promise( (res,rej) => {
            setTimeout( () => {
                if (this.#getRandomBoolean()){
                    res({
                        status: 'success',
                        data: JSON.parse(JSON.stringify( this.#startList.find(s => s.id === id) ))
                    })
                }else{
                    rej({
                        status: 'error',
                        data: null
                    })
                }
            }, this.#defaultDelay )
        } )
    }

}

export default new MockStars();