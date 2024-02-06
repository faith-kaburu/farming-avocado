import React from "react";

const contacts = [
  {
    id: 1,
    name: "Faith Kaburu",
    image: "https://i.pinimg.com/236x/d7/4f/da/d74fda5f6ff2020d7633e07dc8733edf.jpg",
    details: "FullStack software engineer",
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
      <h1 className="contact-title">Meet the Team that Makes the Dream Work</h1>
      <div className="contacts">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
