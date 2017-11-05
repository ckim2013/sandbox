import { connect } from 'react-redux';
import { fetchImage } from '../actions/image_actions';
import ThirdPane from './third_pane';

const mapStateToProps = state => ({
  pokeUrl: state.pokeUrl
});

const mapDispatchToProps = dispatch => {
  return (
    {
      fetchImage: id => dispatch(fetchImage(id))
    }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ThirdPane);
