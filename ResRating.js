ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ]

    const uniqueRes = Array.from(new Set(ratingData.map(({restaurant})=>restaurant)))

    console.log(uniqueRes);

    var arr=[]  ;  
    uniqueRes.map(resName=>{
        const resEntry = ratingData.filter(obj=>obj.restaurant == resName );

        let outputObj = {
            restaurant:resName,
            averageRating: resEntry.reduce((x,y)=>x + y.rating,0)/resEntry.length
        }

        arr.push(outputObj)

    })
    console.log(arr)

    const xx = arr.filter(x=>x.averageRating < 4)
    console.log(xx)