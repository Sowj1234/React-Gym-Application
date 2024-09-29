export const excerciseOptions={
    method: 'GET',
    
    headers: {
      'x-rapidapi-key': '58ce7bcb0cmsh0be1d258bd51f06p1cacd3jsne0d10df1d581',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};



export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '58ce7bcb0cmsh0be1d258bd51f06p1cacd3jsne0d10df1d581',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData=async(url,options)=>
{
    const response=await fetch(url,options);
    const data = await response.json();

    return data;
}