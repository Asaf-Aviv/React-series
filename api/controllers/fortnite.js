
const axios  = require('axios');
const utils  = require('../../utils/utils');
const qs     = require('querystring');

const fortniteInstance = axios.create({
  baseURL: 'https://fortnite-public-api.theapinetwork.com/prod09/',
  timeout: 3000,
  headers: {
    'Authorization': process.env.FORTNITE_KEY,
    'X-Fortnite-API-Version': 'v1.1'
  }
});

exports.getNews = async (req, res, next) => {
  try {
    const { data } = await fortniteInstance.post('br_motd/get');
    const brNews = utils.removeDups(data.entries, 'title');
    res.send(brNews);
  } catch (err) {
    next();
  }
}

exports.getLeaderboards = async (req, res, next) => {
  try {
    const { data } = await fortniteInstance.post('leaderboards/get', qs.stringify(req.query));
    res.send(data.entries);
  } catch (err) {
    next();
  }
};

exports.getStore = async (req, res, next) => {
  try {
    const { data } = await fortniteInstance.post('store/get', qs.stringify({ language: 'en' }));
    res.send(data.items);
  } catch (err) {
    next();
  }
};

exports.getUpcomingItems = async (req, res, next) => {
  try {
    const { data } = await fortniteInstance.post('upcoming/get', qs.stringify({ language: 'en' }));
    res.send(data.items);
  } catch (err) {
    next();
  }
};

exports.getChallenges = async (req, res, next) => {
  try {
    const { data } = await fortniteInstance.post('challenges/get', qs.stringify({ season: 'season4', language: 'en' }));
    const challenges = data.challenges.map(week => week.entries);
    res.send(challenges);
  } catch (err) {
    next();
  }
};

exports.getPlayerStats = async (req, res, next) => {
  try {
    const { data:playerData } = await fortniteInstance.post('users/id', qs.stringify({ username: req.params.playerName }));

    if (playerData.error) {
      return res.sendStatus(404);
    }

    const playerStats = await fortniteInstance.post('users/public/br_stats', qs.stringify({
      user_id: playerData.uid,
      platform: playerData.platforms[0],
      window: req.query.window || 'alltime'
    }));

    res.send(playerStats.data);
  } catch (err) {
    next();
  }
};
