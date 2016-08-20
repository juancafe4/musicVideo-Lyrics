const express = require('express');
const router = express.Router();
const axios = require('axios')
const cheerio = require('cheerio')
const  embed = require("embed-video")


let url = 'https://imvdb.com/api/v1/search/videos?q='

router.route('/').post((req, res) => {
  let {songName, artist} = req.body;
  let urlVideo = ""
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
      // children()['0'].children[2]
      console.log($('.videoInfoList')['3'].children[0].next.children[0]. attribs.href)
    })
    .catch(err => {
      throw err;
    })
  res.send()
});

module.exports = router;
