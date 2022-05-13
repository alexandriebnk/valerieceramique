import React from 'react';
import { notice } from '../../store/legalNotice-context';

const LegalNotice = () => {
  console.log();
  return (
    <div className='notice'>
      <div className='notice__fr'>
        <p className='notice__title'>Mentions Légales</p>
        <div className='notice__website'>{notice[0].website}</div>
        <div className='notice__capital'>{notice[0].capital}</div>
        <div className='notice__publication'>
          <p className='notice__publication--title'>
            {notice[0].publication.title}
          </p>
          <p className='notice__publication--name'>
            {notice[0].publication.name}
          </p>
        </div>
        <div className='notice__hosting'>
          <p className='notice__hosting--title'>{notice[0].hosting.title}</p>
          <p className='notice__hosting--compagny'>
            {notice[0].hosting.compagny}
          </p>
          <p className='notice__hosting--name'>{notice[0].hosting.name}</p>
          <p className='notice__hosting--street'>{notice[0].hosting.street}</p>
          <p className='notice__hosting--address'>
            {notice[0].hosting.address}
          </p>
        </div>
        <div className='notice__garantees'>
          <p className='notice__garantees--title'>
            {notice[0].garantees.title}
          </p>
          <p className='notice__garantees--precautions'>
            {notice[0].garantees.precautions}
          </p>
          <p className='notice__garantees--responsabilities'>
            {notice[0].garantees.responsabilities}
          </p>
        </div>
        <div className='notice__rights'>
          <p className='notice__rights--title'>{notice[0].rights.title}</p>
          <p className='notice__rights--elements'>
            {notice[0].rights.elements}
          </p>
          <p className='notice__rights--copyright'>
            {notice[0].rights.copyright}
          </p>
          <p className='notice__rights--penalty'>{notice[0].rights.penalty}</p>
          <p className='notice__rights--agreement'>
            {notice[0].rights.agreement}
          </p>
        </div>
      </div>
      <div className='notice__en'>
        <p className='notice__title'>Legal Notice</p>
        <div className='notice__website'>{notice[0].website}</div>
        <div className='notice__capital'>{notice[0].capital}</div>
        <div className='notice__publication'>
          <p className='notice__publication--title'>
            {notice[0].publication.title}
          </p>
          <p className='notice__publication--name'>
            {notice[0].publication.name}
          </p>
        </div>
        <div className='notice__hosting'>
          <p className='notice__hosting--title'>{notice[0].hosting.title}</p>
          <p className='notice__hosting--compagny'>
            {notice[0].hosting.compagny}
          </p>
          <p className='notice__hosting--name'>{notice[0].hosting.name}</p>
          <p className='notice__hosting--street'>{notice[0].hosting.street}</p>
          <p className='notice__hosting--address'>
            {notice[0].hosting.address}
          </p>
        </div>
        <div className='notice__garantees'>
          <p className='notice__garantees--title'>
            {notice[0].garantees.title}
          </p>
          <p className='notice__garantees--precautions'>
            {notice[0].garantees.precautions}
          </p>
          <p className='notice__garantees--responsabilities'>
            {notice[0].garantees.responsabilities}
          </p>
        </div>
        <div className='notice__rights'>
          <p className='notice__rights--title'>{notice[0].rights.title}</p>
          <p className='notice__rights--elements'>
            {notice[0].rights.elements}
          </p>
          <p className='notice__rights--copyright'>
            {notice[0].rights.copyright}
          </p>
          <p className='notice__rights--penalty'>{notice[0].rights.penalty}</p>
          <p className='notice__rights--agreement'>
            {notice[0].rights.agreement}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
