import React from 'react';

const LegalNotice = () => {
  const sections = [{ title: 'Salut', content: 'Salut ça va' }];
  return (
    <div>
      <h2>Mentions légales</h2>
      {sections.map((section) => (
        <section key={section}>
          <h3>{section.title}</h3>
          <p>{section.content}</p>
        </section>
      ))}
    </div>
  );
};

export default LegalNotice;
