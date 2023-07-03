import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { DeliteContact } from 'components/DeliteContact/DeliteContact';
import { Contact, ContactItem, ContactLi } from './ContactList.stiled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <div>
      <Contact>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactLi>
              <span>{name}</span>
              <span>{number}</span>
            </ContactLi>
            <DeliteContact id={id} />
          </ContactItem>
        ))}
      </Contact>
    </div>
  );
};
