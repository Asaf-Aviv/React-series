const router = require('express').Router()
const axios  = require('axios')
const utils  = require('../../utils/utils')
const qs     = require('querystring')

const fortniteInstance = axios.create({
  baseURL: 'https://fortnite-public-api.theapinetwork.com/prod09/',
  timeout: 3000,
  headers: {
    'Authorization': process.env.FORTNITE_KEY,
    'X-Fortnite-API-Version': 'v1.1'
  }
})

router.get('/news', async (req, res) => {
  const { data } = await fortniteInstance.post('br_motd/get')
  const brNews = utils.removeDups(data.entries, 'title')
  res.send(brNews)
})

router.get('/leaderboards', async (req, res) => {
  const { data } = await fortniteInstance.post('leaderboards/get', qs.stringify(req.query))
  res.send(data.entries)
})

router.get('/store', async (req, res) => {
  const { data } = await fortniteInstance.post('store/get', qs.stringify({ language: 'en' }))
  res.send(data.items)
})

router.get('/upcoming', async (req, res) => {
  const { data } = await fortniteInstance.post('upcoming/get', qs.stringify({ language: 'en' }))
  res.send(data.items)
})

router.get('/challenges', async (req, res) => {
  const { data } = await fortniteInstance.post('challenges/get', qs.stringify({ season: 'season4', language: 'en' }))
  const challenges = data.challenges.map(week => week.entries)
  res.send(challenges)
})

router.get('/player/:playerName', async (req, res) => {
  const playerDetails = await fortniteInstance.post('users/id', qs.stringify({ username: req.params.playerName }))

  if (playerDetails.data.error) {
    return res.send(404)
  }

  const playerStats = await fortniteInstance.post('users/public/br_stats', qs.stringify({
    user_id: playerDetails.data.uid,
    platform: playerDetails.data.platforms[0],
    window: req.query.window || 'alltime'
  }))

  res.send(playerStats.data)
})

module.exports = router
