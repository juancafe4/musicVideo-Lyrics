const express = require('express');
const router = express.Router();
const axios = require('axios')
const cheerio = require('cheerio')
const  embed = require("embed-video")


let url = 'https://imvdb.com/api/v1/search/videos?q='

let urlLyrics = 'http://search.azlyrics.com/search.php?q='

router.route('/').post((req, res) => {
  let {songName, artist} = req.body;
  let urlVideo = ""
  let lyricsUrl = ""

  axios.get(encodeURI(url + songName + ' ' + artist))
  .then(res => res.data)
  .then(result => {
    artist = result.results[0].artists[0].name
    songName = result.results[0].song_title
    urlVideo = result.results[0].url

    return axios.get(urlVideo)
  })
  .then(res =>  {
    let html = res.data;
    let $ = cheerio.load(html)

    // console.log($('.videoInfoList')['3'].children[0].next.children[0]. attribs.href)
    urlVideo = embed($('.videoInfoList')['3'].children[0].next.children[0]. attribs.href)
    let newArtist = artist.replace(/ /g, '+')
    let newSongName = songName.replace(/ /g, '+')

    return axios.get(urlLyrics + newArtist  +  '+' + newSongName + '+&what=all')
  })

  .then(r => {
    let html = r.data;
    let $ = cheerio.load(html)
    lyricsUrl = $('tr')['0'].children[0].children[1].attribs.href;
    console.log(lyricsUrl)
    return axios.get(lyricsUrl)
  })
  .then(r => {
    let html = r.data
    let $ = cheerio.load(html)
    let getLyrics = $('.col-lg-8')['0'].children[22].children || $('.col-lg-8')['0'].children[25].children 
    //console.log(getLyrics)
    let lyrics = getLyrics.map((val, index)=> {
      
      if (index >= 2) {
        if (val.data)
          return val.data
        if(val.name=== 'br')
          return val.name
      }
      return null
    });

    res.send({songName, artist, urlVideo, lyrics})
  })
  .catch(err => {
    throw err;
  })
});



module.exports = router;
