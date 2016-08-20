const express = require('express');
const router = express.Router();
const axios = require('axios')
const cheerio = require('cheerio')
const  embed = require("embed-video")


let url = 'https://imvdb.com/api/v1/search/videos?q='
let urlLyrics = 'http://www.lyrics.com/search.php?keyword='

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
    console.log($('.videoInfoList')['3'].children[0].next.children[0]. attribs.href)
  })
  let newArtist = artist.replace(/ /g, '+')
  let newSongName = songName.replace(/ /g, '+')
  axios.get(urlLyrics + newArtist  + newSongName + '+&what=all')
  .then(r => {
    let html = r.data;
    let $ = cheerio.load(html)
    lyricsUrl = $('.lyrics_preview')[0].attribs.href;
    res.send({artist, songName, urlVideo, lyricsUrl})
  })
  .catch(err => {
    throw err;
  })
});



module.exports = router;
