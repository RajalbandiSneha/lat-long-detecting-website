const request=require('request')

const geo=(address,callback)=>{
    const uri='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZHJhZ29ud293IiwiYSI6ImNrOGxtNnQyaDAwdmszZm1kdWQwZXZlcWcifQ.sITTCMfqJz1d_go-PNj-9A'

    request({uri,json:true},(error,{body})=>{
        if(error){
            callback('error',undefined)
        }else if(body.features.length===0)
        {
            callback('response error',undefined)
        }else{
            callback(undefined,{lat:body.features[0].center[0],lan:body.features[0].center[1]})
        }
    })
}

const forecast=(lat,long,callback)=>{
    const uri='https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity='+lat+','+long+'&access_token=pk.eyJ1IjoiZHJhZ29ud293IiwiYSI6ImNrOGxtNnQyaDAwdmszZm1kdWQwZXZlcWcifQ.sITTCMfqJz1d_go-PNj-9A'
    
    request({uri,json:true},(error,response)=>{
        if(error){
                        callback('error',undefined)
                    }else if(response.body.features.length===0)
                    {
                        callback('response error',undefined)
                    }else{
                        callback(undefined,{place:response.body.features[0].place_name})
                    }
    }
    )
}

module.exports={
    g:geo,
    f:forecast
}