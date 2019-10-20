import React from 'react';
import PropTypes from 'prop-types';

// Components
import GridContainer from 'components/GridContainer';
import GridItem from 'components/GridItem';
import GnomeCard from 'components/GnomeCard';
import Avatar from 'components/Avatar';
import Stats from 'components/Stats';

export default function List({ currentPage, gnomesPerPage, gnomesList }) {
  const indexOfLastGnome = currentPage * gnomesPerPage;
  const indexOfFirstGnome = indexOfLastGnome - gnomesPerPage;
  const currentGnomes = gnomesList.slice(indexOfFirstGnome, indexOfLastGnome);

  return (
    <GridContainer>
      {
        currentGnomes.map((gnome) => (
          <GridItem key={gnome.id} xs={12} sm={6} md={3}>
            <GnomeCard
              title={gnome.name}
              headerColor="primary"
              data={
                {
                  content: (
                    <div>
                      <Avatar image={gnome.thumbnail} alt="Fulanito Pepito" />
                      <Stats age={gnome.age} weight={gnome.weight} height={gnome.height} hairColor={gnome.hair_color} />
                    </div>
                  ),
                }
              }
            />
          </GridItem>
        ))
      }
    </GridContainer>
  );
}

List.propTypes = {
  currentPage: PropTypes.number.isRequired,
  gnomesPerPage: PropTypes.number.isRequired,
  gnomesList: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    age: PropTypes.number,
    weigth: PropTypes.float,
    height: PropTypes.float,
    hair_color: PropTypes.string,
  }),
};
