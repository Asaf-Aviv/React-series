const router             = require('express').Router();
const FortniteController = require('../controllers/fortnite');

tt = () => { throw new Error('err') };

router.get('/news', FortniteController.getNews);

router.get('/leaderboards', FortniteController.getLeaderboards);

router.get('/store', FortniteController.getStore);

router.get('/upcoming', FortniteController.getUpcomingItems);

router.get('/challenges', FortniteController.getChallenges);

router.get('/player/:playerName', FortniteController.getPlayerStats);

router.use((req, res) => res.status(500).send('Something went wrong.'));

module.exports = router;
