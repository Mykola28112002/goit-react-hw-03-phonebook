import { ContactLi} from '../ContactLi/ContactLi';
import { Ul } from './ContactList.styled';
import PropTypes from 'prop-types';


export const ContactList = ({ contacts, onDeleteContactList }) => {
  return (<Ul>
    {contacts.map((contacts) => (<ContactLi contacts={contacts} onDeleteContactList={onDeleteContactList} key={contacts.id} />))}
  </Ul>)
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};