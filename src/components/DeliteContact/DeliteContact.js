import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { resetFilter } from 'redux/filter/slice';
import { deleteContact } from 'redux/contacts/operations';
import { ButtonDelite } from 'components/ContactList/ContactList.stiled';
import PropTypes from 'prop-types';

export const DeliteContact = ({ id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    Notiflix.Confirm.show(
      'Delete Contact',
      'You really want to delete this contact?',
      'Yes',
      'No',
      function okCb() {
        dispatch(deleteContact(id));
        dispatch(resetFilter());
      },
      function cancelCb() {
        return;
      },
      {
        width: '320px',
        borderRadius: '8px',
        messageColor: '#1e1e1e',
        messageFontSize: '14px',
        messageMaxLength: 110,

        titleColor: '#7d7d3f',
        buttonsFontSize: '15px',
        buttonsMaxLength: 34,
        okButtonColor: '#f8f8f8',
        okButtonBackground: '#7d7d3f',
        cancelButtonColor: '#f8f8f8',
        cancelButtonBackground: '#a9a9a9',
      }
    );
  };

  return (
    <ButtonDelite type="button" onClick={handleDeleteContact}>
      Delite
    </ButtonDelite>
  );
};

DeliteContact.propTypes = {
  id: PropTypes.string.isRequired,
};
