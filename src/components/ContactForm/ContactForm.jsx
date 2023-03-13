import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = ({ onHandleSubmit }) => {
  const submitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;
    onHandleSubmit(form.elements.name.value, form.elements.number.value);
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={submitForm}>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input
        className={css.input}
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.label} htmlFor="tel">
        Number
      </label>
      <input
        className={css.input}
        id="tel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
