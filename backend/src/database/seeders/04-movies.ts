import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('movies', [
      {
        name: 'Django Livre',
        description: 'No sul dos Estados Unidos, o ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para caçar os criminosos mais procurados do país e resgatar sua esposa de um fazendeiro que força seus escravos a participar de competições mortais.',
        release_year: 2012,
        imdb_rating: 8.4,
        director_id: 1,
        category_id: 1,
      },
      {
        name: 'E.T. O Extraterrestre',
        description: 'O garoto Elliott faz amizade com um pequeno alienígena inofensivo que está bem longe do seu planeta. Ele decide manter a adorável criatura em segredo e em casa após apresentá-la aos irmãos.',
        release_year: 1982,
        imdb_rating: 7.9,
        director_id: 3,
        category_id: 3,
      },
      {
        name: 'Tubarão',
        description: 'Um terrível ataque a banhistas é o sinal de que a praia da pequena cidade de Amity, na Nova Inglaterra, virou refeitório de um gigantesco tubarão branco. O chefe de polícia Martin Brody quer fechar as praias, mas o prefeito Larry Vaughn não permite, com medo de que o faturamento com a receita dos turistas deixe a cidade sem recursos. O cientista Matt Hooper e o pescador Quint se oferecem para ajudar Brody a capturar e matar a fera, mas a missão vai ser mais complicada do que eles imaginavam.',
        release_year: 1975,
        imdb_rating: 8.1,
        director_id: 3,
        category_id: 4,
      },
      {
        name: 'O Exterminador do Futuro 2 - O Julgamento Final',
        description: 'O jovem John Connor é a chave para a vitória da civilização sobre uma rebelião de robôs do futuro. No entanto, ele torna-se alvo de T-1000, um exterminador que pode assumir a forma que desejar e que foi enviado do futuro para matá-lo. Outro exterminador, o renovado T-800, também é enviado de volta ao passado para proteger o menino. Quando John e sua mãe embarcam na fuga com T-800, o menino cria um vínculo forte e inesperado com o robô.',
        release_year: 1991,
        imdb_rating: 8.6,
        director_id: 4,
        category_id: 3,
      },
      {
        name: 'Taxi Driver – Motorista de Táxi',
        description: 'O motorista de táxi de Nova York Travis Bickle, veterano da Guerra do Vietnã, reflete constantemente sobre a corrupção da vida ao seu redor e sente-se cada vez mais perturbado com a própria solidão e alienação. Apesar de não conseguir fazer contato emocional com ninguém e viver uma vida questionável em busca de diversão, ele se torna obcecado em ajudar uma prostituta de 12 anos que entra em seu táxi para fugir de um cafetão.',
        release_year: 1976,
        imdb_rating: 8.2,
        director_id: 2,
        category_id: 2,
      },
      {
        name: 'Cidade de Deus',
        description: 'Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.',
        release_year: 2002,
        imdb_rating: 8.6,
        director_id: 5,
        category_id: 2,
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('movies', {});
  },
};