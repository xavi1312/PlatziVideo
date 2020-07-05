import React, { useLayoutEffect } from 'react';
//  Utilities
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import { Redirect } from 'react-router-dom';
// Assets
import '../assets/styles/components/Player.scss';

const Player = props => {
  const { id } = props.match.params;

  const hasPlaying = Object.keys(props.playing).length > 0;
  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back' onClick={() => props.history.goBack()}>
        <button className='button'>Regresar</button>
      </div>
    </div>
  ) : (
    <Redirect to='/404/' />
  );
};

const mapStateToProps = state => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
