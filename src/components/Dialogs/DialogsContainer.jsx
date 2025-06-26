import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateTextActionCreator,
} from "../../redux/reducerMessagePage";
import { useParams } from "react-router-dom";
import Dialogs from "./Dialogs.jsx";

let mapStateToProps = (state) => {
  return {
    DialogsData: state.MessagePage.DialogsData,
    MessagesData: state.MessagePage.MessagesData,
    MessageText: state.MessagePage.MessageText,
    ProfilePage: state.ProfilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    ppostContainer: (text, idAcc) => {
      dispatch(addPostActionCreator(text, idAcc));
    },
    ChangeTextContainer: (text) => {
      dispatch(updateTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  const { id } = useParams();
  return <Dialogs {...props} id={id} />;
});

export default DialogsContainer;
