import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions'

import NavBar from "./navbar";

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal)
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
