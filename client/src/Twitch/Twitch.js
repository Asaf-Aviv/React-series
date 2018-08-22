import React, { Component } from 'react'
import StreamersList from './StreamersList/StreamersList'
import SearchController from './SearchController/SearchController'
import TwitchSearchBar from './TwitchSearchBar/TwitchSearchBar'
import TwitchPlayer from './TwitchPlayer/TwitchPlayer'
import axios from 'axios'
import { twitchHeaders } from '../utils/utils'

import './Twitch.css'

const colorNav = () => {
  const nav = document.querySelector('.nav-wrapper')
  nav.style.boxShadow = 'none'
  nav.style.backgroundColor = '#412852';
  document.querySelectorAll('.nav-wrapper a').forEach(link => link.style.color = '#00ffe7')
  document.querySelector('.drawer-container ul').style.backgroundColor = '#412852'
}

class Twitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingList: false,
      selectedGame: null,
      loadMoreStreamersQuery: null,
      streamersList: [],
      channelsDetails: [],
      selectedStream: ''
    }
  }

  componentDidMount = () => {
    colorNav()
  }

  componentWillUnmount = () => {
    document.querySelector('.drawer-container ul').style.backgroundColor = '#fff'
  }

  selectStream = channelName => {
    if (!this.state.selectedStream || channelName !== this.state.selectedStream) {
      this.setState({ selectedStream: channelName })
    }
  }

  selectGame = game => {
    if (!this.state.selectedGame || game._id !== this.state.selectedGame._id) {
      this.setState({ selectedGame: game }, () => {
        this.updateStreamersList(this.state.selectedGame._id)
        document.querySelector('#streamers-side-bar > ul').scrollTop = 0
      })
    }
  }

  fetchChannels = streamersList => {
    const queryString = streamersList.map(s => s.user_id).join(',')

    return axios(`https://api.twitch.tv/kraken/streams/?channel=${queryString}`, { ...twitchHeaders })
      .then(res => res.data.streams)
  }

  getStreamersList = (gameId, pagination = null) => {
    const paginationQuery = pagination ? `&after=${pagination}` : ''

    return axios(`https://api.twitch.tv/helix/streams?game_id=${gameId}${paginationQuery}`, { ...twitchHeaders })
      .then(res => res)
  }

  updateStreamersList = gameId => {
    this.setState({ loadingList: true })

    this.getStreamersList(gameId)
      .then(res => {
        const streamersList = res.data.data
        const loadMoreStreamersQuery = res.data.pagination.cursor

        this.fetchChannels(streamersList)
          .then(channelsDetails => {
            this.setState({
              streamersList,
              loadMoreStreamersQuery,
              channelsDetails,
              loadingList: false
            })
          })
      })
  }

  loadMoreStreamers = pagination => {
    this.setState({ loadingList: true })
    const gameId = this.state.selectedGame._id

    this.getStreamersList(gameId, pagination)
      .then(res => {
        const loadedStreamersList = res.data.data
        const loadMoreStreamersQuery = res.data.pagination.cursor

        this.fetchChannels(loadedStreamersList)
          .then(loadedChannelsDetails => {
            this.setState(prevState => {
              const newStreamersList = [...prevState.streamersList, ...loadedStreamersList].filter((a, b) => a.user_id !== b.user_id)
              const newchannelsDetails = [...prevState.channelsDetails, ...loadedChannelsDetails].filter((a, b) => a._id !== b._id)

              return {
                streamersList: newStreamersList,
                loadMoreStreamersQuery,
                channelsDetails: newchannelsDetails,
                loadingList: false
              }
            })
          })
      })
  }

  render() {
    return (
      <div id="twitch-wrapper" className="d-flex">
        <StreamersList
          streamersList={this.state.streamersList}
          loadMorePagination={this.state.loadMoreStreamersQuery}
          channelsDetails={this.state.channelsDetails}
          loadMore={this.loadMoreStreamers}
          isLoading={this.state.loadingList}
          selectStream={this.selectStream}
        />
        <div id="main-column-wrapper">
          <TwitchSearchBar selectStream={this.selectStream} />
          <TwitchPlayer selectedStream={this.state.selectedStream} />
          <SearchController
            selectedGame={this.state.selectedGame}
            selectGame={this.selectGame}
          />
        </div>
      </div>
    )
  }
}

export default Twitch
