import React from "react";

const contacts = [
  {
    id: 1,
    name: "Faith Kaburu",
    image: "https://i.pinimg.com/236x/4a/94/0d/4a940dc9d8d9ced85dd631167f97e5d7.jpg",
    details: "FullStack Software Engineer",
    contact: "0712778935"
  },
];

const ContactCard = ({ contact }) => {
  return (
    <div className="contact-card">
      <img src={contact.image} alt={contact.name} />
      <h2>{contact.name}</h2>
      <p>{contact.details}</p>
      <p>{contact.contact}</p> {/* Displaying contact details */}
    </div>
  );
};

const Contacts = () => {
  return (
    <div>
      <h1 className="contact-title">Meet the Dream Team that Makes your Dream a Reality </h1>
      <div className="contacts">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
