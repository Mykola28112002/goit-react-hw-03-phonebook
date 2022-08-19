
import { Li, Button } from '../ContactList/ContactList.styled';

export const ContactLi = ({ contacts: { name, number, id }, onDeleteContactList }) => {
  return (
      <Li key={id}>
        <p>
          {name} : <span> {number} </span>
        </p>
        <Button
          type="button"
          onClick={() => onDeleteContactList(id)}
        >
          Delete
        </Button>
      </Li>)
};


